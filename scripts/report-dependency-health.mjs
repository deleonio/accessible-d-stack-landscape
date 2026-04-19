#!/usr/bin/env node
/**
 * Dependency QA report for data/items
 *
 * Usage:
 *   node scripts/report-dependency-health.mjs
 *   node scripts/report-dependency-health.mjs --format json
 *   node scripts/report-dependency-health.mjs --out reports/dependency-health.json
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const itemsDir = path.join(projectRoot, 'data', 'items');
const stacksDir = path.join(projectRoot, 'data', 'stacks');

const args = process.argv.slice(2);
const format = getArgValue(args, '--format') ?? 'markdown';
const outFile = getArgValue(args, '--out');

const itemFiles = readdirSync(itemsDir)
	.filter((file) => file.endsWith('.json') && file !== '.gitkeep.json')
	.sort();

const parseErrors = [];
const itemRecords = itemFiles
	.map((file) => {
		const filePath = path.join(itemsDir, file);
		try {
			const raw = readFileSync(filePath, 'utf8');
			const item = JSON.parse(raw);
			return { file, item };
		} catch (error) {
			parseErrors.push({ file, message: error.message });
			return null;
		}
	})
	.filter(Boolean);

// Load stacks for adoption calculation
const stackFiles = readdirSync(stacksDir).filter((f) => f.endsWith('.json') && !f.startsWith('_'));
const stacks = stackFiles.map((f) => {
	try { return JSON.parse(readFileSync(path.join(stacksDir, f), 'utf8')); }
	catch { return null; }
}).filter(Boolean);

const itemIds = new Set(itemRecords.map(({ item }) => item.id));
const itemsWithoutDependencies = [];
const incomingCountByTarget = new Map();
const orphanedReferences = [];

for (const { file, item } of itemRecords) {
	const dependencies = Array.isArray(item.dependencies) ? item.dependencies : [];
	if (dependencies.length === 0) {
		itemsWithoutDependencies.push(item.id);
	}

	for (const dependency of dependencies) {
		const targetId = dependency.targetItemId;
		incomingCountByTarget.set(targetId, (incomingCountByTarget.get(targetId) ?? 0) + 1);

		if (!itemIds.has(targetId)) {
			orphanedReferences.push({
				file,
				sourceItemId: item.id,
				targetItemId: targetId,
				type: dependency.type,
				scope: dependency.scope ?? 'required',
			});
		}
	}
}

const mostReferencedBaseTechnologies = [...incomingCountByTarget.entries()]
	.filter(([targetId]) => itemIds.has(targetId))
	.sort(([, leftCount], [, rightCount]) => rightCount - leftCount)
	.slice(0, 10)
	.map(([itemId, incomingCount]) => ({ itemId, incomingCount }));

// ---------------------------------------------------------------------------
// Adoption scoring (mirrors src/utils/adoptionScore.ts)
// ---------------------------------------------------------------------------
const ROLE_W = { maintainer: 1.0, contributor: 0.8, consumer: 0.5, funder: 0.4 };
const STATUS_W = { recommended: 1.0, approved: 0.7, deprecated: 0.1 };
const GAMMA = 0.3;
const SOVEREIGN_THRESHOLD = 61;

const SOVEREIGNTY_WEIGHTS = { selfHostable: 20, dataPortability: 15, openSource: 15, openStandards: 10, permissiveLicense: 10, hasAudit: 5, matureProject: 5, noTelemetryByDefault: 5, euHeadquartered: 5 };
const OWNER_WEIGHTS = { independentConsortium: 10, community: 7, corporation: 3, oneManShow: 0 };
function computeSovScore(c = {}) {
	const base = Object.entries(SOVEREIGNTY_WEIGHTS).reduce((s, [k, w]) => s + (c[k] ? w : 0), 0);
	return base + (c.ownerType ? (OWNER_WEIGHTS[c.ownerType] ?? 0) : 0);
}
function sizeDamp(n) { return 1 / (1 + Math.log10(Math.max(1, n / 20))); }
function simpsonDiv(presences) {
	if (!presences.length) return 0;
	const counts = new Map();
	for (const p of presences) counts.set(p.country, (counts.get(p.country) ?? 0) + 1);
	let sq = 0; for (const c of counts.values()) sq += (c / presences.length) ** 2;
	return 1 - sq;
}

const itemsForAdoption = itemRecords.map(({ item }) => ({ ...item, sovereigntyScore: computeSovScore(item.sovereigntyCriteria) }));
const itemById = new Map(itemsForAdoption.map((i) => [i.id, i]));

// Stack avg sovereignty
const stackSovMap = new Map();
for (const stack of stacks) {
	let sum = 0, count = 0;
	for (const si of stack.items ?? []) { const it = itemById.get(si.itemId); if (it) { sum += it.sovereigntyScore; count++; } }
	stackSovMap.set(stack.id, count > 0 ? sum / count : 0);
}

// Presences
const presenceMap = new Map(itemsForAdoption.map((i) => [i.id, []]));
for (const stack of stacks) {
	const sz = (stack.items ?? []).length;
	const avgSov = stackSovMap.get(stack.id) ?? 0;
	const country = stack.country ?? '_unknown';
	for (const si of stack.items ?? []) {
		const list = presenceMap.get(si.itemId);
		if (list) list.push({ stackId: stack.id, role: si.role, status: si.status, sz, country, avgSov });
	}
}

// Direct coverage
const dcMap = new Map(itemsForAdoption.map((i) => {
	const ps = presenceMap.get(i.id) ?? [];
	return [i.id, ps.reduce((s, p) => s + (ROLE_W[p.role] ?? 0) * (STATUS_W[p.status] ?? 0) * sizeDamp(p.sz), 0)];
}));

// Reverse deps
const reverseDepsForReport = {};
for (const { item } of itemRecords) {
	for (const dep of item.dependencies ?? []) {
		if (!reverseDepsForReport[dep.targetItemId]) reverseDepsForReport[dep.targetItemId] = [];
		reverseDepsForReport[dep.targetItemId].push({ sourceItemId: item.id });
	}
}

// Transitive coverage
const tcMap = new Map(itemsForAdoption.map((i) => {
	const revDeps = reverseDepsForReport[i.id] ?? [];
	return [i.id, revDeps.reduce((s, r) => s + GAMMA * (dcMap.get(r.sourceItemId) ?? 0), 0)];
}));

// Diversity
const divMap = new Map(itemsForAdoption.map((i) => [i.id, simpsonDiv(presenceMap.get(i.id) ?? [])]));

// Raw adoption
const rawMap = new Map(itemsForAdoption.map((i) => {
	const dc = dcMap.get(i.id) ?? 0, tc = tcMap.get(i.id) ?? 0, div = divMap.get(i.id) ?? 0;
	return [i.id, Math.log1p(dc + tc) * (0.6 + 0.4 * div)];
}));
const maxRaw = Math.max(0, ...rawMap.values());

// Sovereign adoption
const sovPresenceMap = new Map(itemsForAdoption.map((i) => {
	const all = presenceMap.get(i.id) ?? [];
	return [i.id, i.sovereigntyScore < SOVEREIGN_THRESHOLD ? [] : all.filter((p) => p.avgSov >= SOVEREIGN_THRESHOLD)];
}));
const sovDcMap = new Map(itemsForAdoption.map((i) => {
	const ps = sovPresenceMap.get(i.id) ?? [];
	return [i.id, ps.reduce((s, p) => s + (ROLE_W[p.role] ?? 0) * (STATUS_W[p.status] ?? 0) * sizeDamp(p.sz), 0)];
}));
const sovTcMap = new Map(itemsForAdoption.map((i) => {
	if (i.sovereigntyScore < SOVEREIGN_THRESHOLD) return [i.id, 0];
	const revDeps = reverseDepsForReport[i.id] ?? [];
	let tc = 0;
	for (const r of revDeps) { const src = itemById.get(r.sourceItemId); if (src?.sovereigntyScore >= SOVEREIGN_THRESHOLD) tc += GAMMA * (sovDcMap.get(r.sourceItemId) ?? 0); }
	return [i.id, tc];
}));
const sovDivMap = new Map(itemsForAdoption.map((i) => [i.id, simpsonDiv(sovPresenceMap.get(i.id) ?? [])]));
const sovRawMap = new Map(itemsForAdoption.map((i) => {
	const dc = sovDcMap.get(i.id) ?? 0, tc = sovTcMap.get(i.id) ?? 0, div = sovDivMap.get(i.id) ?? 0;
	return [i.id, Math.log1p(dc + tc) * (0.6 + 0.4 * div)];
}));
const maxSovRaw = Math.max(0, ...sovRawMap.values());

function adoptionScore(id) { return maxRaw > 0 ? Math.round(100 * (rawMap.get(id) ?? 0) / maxRaw) : 0; }
function sovAdoptionScore(id) { return maxSovRaw > 0 ? Math.round(100 * (sovRawMap.get(id) ?? 0) / maxSovRaw) : 0; }

const topAdoption = [...itemsForAdoption]
	.sort((a, b) => adoptionScore(b.id) - adoptionScore(a.id))
	.slice(0, 10)
	.map((i) => ({ itemId: i.id, adoptionScore: adoptionScore(i.id), usedInStacks: (presenceMap.get(i.id) ?? []).length }));

const topSovAdoption = [...itemsForAdoption]
	.sort((a, b) => sovAdoptionScore(b.id) - sovAdoptionScore(a.id))
	.slice(0, 10)
	.map((i) => ({ itemId: i.id, sovereignAdoptionScore: sovAdoptionScore(i.id), sovereigntyScore: i.sovereigntyScore }));

const report = {
	timestamp: new Date().toISOString(),
	totals: {
		items: itemRecords.length,
		itemsWithoutDependencies: itemsWithoutDependencies.length,
		orphanedReferences: orphanedReferences.length,
		parseErrors: parseErrors.length,
	},
	itemsWithoutDependencies,
	mostReferencedBaseTechnologies,
	topAdoption,
	topSovAdoption,
	orphanedReferences,
	parseErrors,
};

const output = format === 'json' ? JSON.stringify(report, null, 2) : toMarkdown(report);

if (outFile) {
	const absoluteOutFile = path.isAbsolute(outFile) ? outFile : path.join(projectRoot, outFile);
	mkdirSync(path.dirname(absoluteOutFile), { recursive: true });
	writeFileSync(absoluteOutFile, output + '\n', 'utf8');
	console.log(`✅ Dependency health report written to ${path.relative(projectRoot, absoluteOutFile)}`);
} else {
	console.log(output);
}

function getArgValue(argv, name) {
	const index = argv.indexOf(name);
	if (index === -1) return null;
	return argv[index + 1] ?? null;
}

function toMarkdown(data) {
	const lines = [];
	lines.push('# Dependency Health Report');
	lines.push('');
	lines.push(`- Timestamp: ${data.timestamp}`);
	lines.push(`- Total items: ${data.totals.items}`);
	lines.push(`- Items ohne Dependencies: ${data.totals.itemsWithoutDependencies}`);
	lines.push(`- Verwaiste Referenzen: ${data.totals.orphanedReferences}`);
	lines.push(`- Parse-Fehler: ${data.totals.parseErrors}`);
	lines.push('');
	lines.push('## Items ohne Dependencies');
	if (data.itemsWithoutDependencies.length === 0) {
		lines.push('- Keine');
	} else {
		for (const itemId of data.itemsWithoutDependencies) {
			lines.push(`- ${itemId}`);
		}
	}

	lines.push('');
	lines.push('## Häufigste Basistechnologien (Top 10 nach Eingangs-Referenzen)');
	if (data.mostReferencedBaseTechnologies.length === 0) {
		lines.push('- Keine Referenzen vorhanden');
	} else {
		for (const entry of data.mostReferencedBaseTechnologies) {
			lines.push(`- ${entry.itemId}: ${entry.incomingCount}`);
		}
	}

	lines.push('');
	lines.push('## Top 10 Adoption');
	if (data.topAdoption.length === 0) {
		lines.push('- Keine Daten');
	} else {
		for (const entry of data.topAdoption) {
			lines.push(`- ${entry.itemId}: ${entry.adoptionScore} (in ${entry.usedInStacks} Stacks)`);
		}
	}

	lines.push('');
	lines.push('## Top 10 Sovereign Adoption');
	if (data.topSovAdoption.length === 0) {
		lines.push('- Keine Daten');
	} else {
		for (const entry of data.topSovAdoption) {
			lines.push(`- ${entry.itemId}: ${entry.sovereignAdoptionScore} (Sovereignty: ${entry.sovereigntyScore})`);
		}
	}

	lines.push('');
	lines.push('## Verwaiste Referenzen');
	if (data.orphanedReferences.length === 0) {
		lines.push('- Keine');
	} else {
		for (const entry of data.orphanedReferences) {
			lines.push(`- ${entry.sourceItemId} -> ${entry.targetItemId} (type=${entry.type}, scope=${entry.scope}, file=${entry.file})`);
		}
	}

	lines.push('');
	lines.push('## Parse-Fehler');
	if (data.parseErrors.length === 0) {
		lines.push('- Keine');
	} else {
		for (const entry of data.parseErrors) {
			lines.push(`- ${entry.file}: ${entry.message}`);
		}
	}

	return lines.join('\n');
}
