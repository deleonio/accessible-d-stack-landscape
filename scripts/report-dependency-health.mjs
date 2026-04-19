#!/usr/bin/env node
/**
 * Dependency QA report for data/items
 *
 * Usage:
 *   node --import tsx/esm scripts/report-dependency-health.mjs
 *   node --import tsx/esm scripts/report-dependency-health.mjs --format json
 *   node --import tsx/esm scripts/report-dependency-health.mjs --out reports/dependency-health.json
 */

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import path from 'path';
import url from 'url';

import { computeAdoptionScores } from '../src/utils/adoptionScore.ts';
import { computeSovereigntyScore } from '../src/utils/sovereigntyScore.ts';

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

// Load stacks
const stackFiles = readdirSync(stacksDir).filter((f) => f.endsWith('.json') && !f.startsWith('_'));
const stacks = stackFiles
	.map((f) => {
		try {
			return JSON.parse(readFileSync(path.join(stacksDir, f), 'utf8'));
		} catch {
			return null;
		}
	})
	.filter(Boolean);

const itemIds = new Set(itemRecords.map(({ item }) => item.id));
const itemsWithoutDependencies = [];
const incomingCountByTarget = new Map();
const orphanedReferences = [];

// Build reverse deps index for the report (and for computeAdoptionScores)
const reverseDepsForReport = {};

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

		if (!reverseDepsForReport[targetId]) reverseDepsForReport[targetId] = [];
		reverseDepsForReport[targetId].push({ sourceItemId: item.id, type: dependency.type, scope: dependency.scope });
	}
}

const mostReferencedBaseTechnologies = [...incomingCountByTarget.entries()]
	.filter(([targetId]) => itemIds.has(targetId))
	.sort(([, leftCount], [, rightCount]) => rightCount - leftCount)
	.slice(0, 10)
	.map(([itemId, incomingCount]) => ({ itemId, incomingCount }));

// ---------------------------------------------------------------------------
// Adoption scoring — delegates entirely to src/utils/adoptionScore.ts
// ---------------------------------------------------------------------------

const itemsWithSov = itemRecords.map(({ item }) => ({
	...item,
	sovereigntyScore: computeSovereigntyScore(item.sovereigntyCriteria),
}));

const adoptionResults = computeAdoptionScores(itemsWithSov, stacks, reverseDepsForReport);

const topAdoption = [...itemsWithSov]
	.sort((a, b) => (adoptionResults.get(b.id)?.score ?? 0) - (adoptionResults.get(a.id)?.score ?? 0))
	.slice(0, 10)
	.map((i) => ({
		itemId: i.id,
		adoptionScore: adoptionResults.get(i.id)?.score ?? 0,
		usedInStacks: adoptionResults.get(i.id)?.usedInStacks.length ?? 0,
	}));

const topSovAdoption = [...itemsWithSov]
	.sort((a, b) => (adoptionResults.get(b.id)?.sovereignScore ?? 0) - (adoptionResults.get(a.id)?.sovereignScore ?? 0))
	.slice(0, 10)
	.map((i) => ({
		itemId: i.id,
		sovereignAdoptionScore: adoptionResults.get(i.id)?.sovereignScore ?? 0,
		sovereigntyScore: i.sovereigntyScore,
	}));

// ---------------------------------------------------------------------------
// Report assembly
// ---------------------------------------------------------------------------

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
