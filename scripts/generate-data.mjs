#!/usr/bin/env node
/**
 * Reads all JSON files from:
 *   data/layers/      → LAYERS
 *   data/items/       → ITEMS   (logo resolved via src/data/logo-urls.json)
 *   data/stacks/      → STACKS
 *
 * Writes: src/data/items.generated.ts
 *
 * Run:  node scripts/generate-data.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = join(ROOT, 'data');
const LOGO_URLS_JSON = join(ROOT, 'src', 'data', 'logo-urls.json');
const OUTPUT_TS = join(ROOT, 'src', 'data', 'items.generated.ts');
const FALLBACK_LOGO = 'assets/broken-logo.svg';

// User-Sovereignty Scoring v2 (2026-04)
// Base weights sum to 90; max owner bonus is 10 → total maximum = 100 (no hard cap needed).
// IMPORTANT: keep this in sync with src/utils/sovereigntyScore.ts WEIGHTS.
const SOVEREIGNTY_WEIGHTS = {
	selfHostable: 20,
	dataPortability: 15,
	openSource: 15,
	openStandards: 10,
	permissiveLicense: 10,
	hasAudit: 5,
	matureProject: 5,
	noTelemetryByDefault: 5,
	euHeadquartered: 5,
};

const OWNER_WEIGHTS = {
	independentConsortium: 10,
	community: 7,
	corporation: 3,
	oneManShow: 0,
};

// ---------------------------------------------------------------------------
// Logo resolution (same logic as generate-articles.mjs)
// ---------------------------------------------------------------------------

let logoUrls = {};
try {
	logoUrls = JSON.parse(readFileSync(LOGO_URLS_JSON, 'utf-8'));
} catch {
	console.warn('⚠️  Could not load logo-urls.json, will use item logo field and fallback only');
}

function resolveLogo(item) {
	const csvLogo = (item.logo || '').trim();
	const name = typeof item.name === 'string' ? item.name : (item.name?.de ?? '');

	if (csvLogo && /^https?:\/\//.test(csvLogo)) return csvLogo;
	if (csvLogo) return '/' + csvLogo.replace(/^\/+/, '');
	if (logoUrls[name]?.verified && logoUrls[name]?.url) return logoUrls[name].url;
	return FALLBACK_LOGO;
}

function computeSovereigntyScore(criteria = {}) {
	const baseScore = Object.entries(SOVEREIGNTY_WEIGHTS).reduce((sum, [key, weight]) => sum + (criteria[key] ? weight : 0), 0);
	const ownerScore = criteria.ownerType ? (OWNER_WEIGHTS[criteria.ownerType] ?? 0) : 0;
	return baseScore + ownerScore;
}

// ---------------------------------------------------------------------------
// Adoption Score (keep in sync with src/utils/adoptionScore.ts)
// ---------------------------------------------------------------------------

const ROLE_W = { maintainer: 1.0, contributor: 0.8, consumer: 0.5, funder: 0.4 };
const STATUS_W = { recommended: 1.0, approved: 0.7, deprecated: 0.1 };
const GAMMA = 0.3;
const DIVERSITY_BASE = 0.6;
const DIVERSITY_WEIGHT = 0.4;
const SOVEREIGN_THRESHOLD = 61;

// Overall score weights (keep in sync with src/utils/overallScore.ts)
const OVERALL_WEIGHT_SOVEREIGNTY = 0.6;
const OVERALL_WEIGHT_SOVEREIGN_ADOPTION = 0.25;
const OVERALL_WEIGHT_ADOPTION = 0.15;

function sizeDamp(stackSize) {
	return 1 / (1 + Math.log10(Math.max(1, stackSize / 20)));
}

function simpsonDiversity(presences) {
	if (presences.length === 0) return 0;
	const counts = new Map();
	for (const p of presences) counts.set(p.stackCountry, (counts.get(p.stackCountry) ?? 0) + 1);
	const total = presences.length;
	let sumSq = 0;
	for (const c of counts.values()) sumSq += (c / total) ** 2;
	return 1 - sumSq;
}

function weightedDirectCov(presences) {
	let dc = 0;
	for (const p of presences) dc += ROLE_W[p.role] * STATUS_W[p.status] * sizeDamp(p.stackSize);
	return dc;
}

function rawAdoptionValue(dc, tc, diversity) {
	return Math.log1p(dc + tc) * (DIVERSITY_BASE + DIVERSITY_WEIGHT * diversity);
}

function computeAdoptionScores(items, stacks, reverseDependencies) {
	const itemById = new Map(items.map((i) => [i.id, i]));

	// Average sovereignty score per stack
	const stackSovMap = new Map();
	for (const stack of stacks) {
		let sum = 0, count = 0;
		for (const si of stack.items) {
			const item = itemById.get(si.itemId);
			if (item?.sovereigntyScore !== undefined) { sum += item.sovereigntyScore; count++; }
		}
		stackSovMap.set(stack.id, count > 0 ? sum / count : 0);
	}

	// Build presence list per item
	const presenceMap = new Map(items.map((i) => [i.id, []]));
	for (const stack of stacks) {
		const stackSize = stack.items.length;
		const avgSov = stackSovMap.get(stack.id) ?? 0;
		const country = stack.country ?? '_unknown';
		for (const si of stack.items) {
			const list = presenceMap.get(si.itemId);
			if (list) list.push({ stackId: stack.id, role: si.role, status: si.status, stackSize, stackCountry: country, stackAvgSovereignty: avgSov });
		}
	}

	// Direct coverage (all stacks)
	const dcMap = new Map(items.map((i) => [i.id, weightedDirectCov(presenceMap.get(i.id) ?? [])]));

	// Transitive coverage (all stacks, 1-hop)
	const tcMap = new Map();
	for (const item of items) {
		const revDeps = reverseDependencies[item.id] ?? [];
		let tc = 0;
		for (const rev of revDeps) tc += GAMMA * (dcMap.get(rev.sourceItemId) ?? 0);
		tcMap.set(item.id, tc);
	}

	// Diversity (all stacks)
	const divMap = new Map(items.map((i) => [i.id, simpsonDiversity(presenceMap.get(i.id) ?? [])]));

	// Raw adoption (all stacks)
	const rawMap = new Map(items.map((i) => [i.id, rawAdoptionValue(dcMap.get(i.id) ?? 0, tcMap.get(i.id) ?? 0, divMap.get(i.id) ?? 0)]));
	const maxRaw = Math.max(0, ...rawMap.values());

	// Sovereign presences
	const sovPresenceMap = new Map();
	for (const item of items) {
		const itemSov = item.sovereigntyScore ?? 0;
		const all = presenceMap.get(item.id) ?? [];
		sovPresenceMap.set(item.id, itemSov < SOVEREIGN_THRESHOLD ? [] : all.filter((p) => p.stackAvgSovereignty >= SOVEREIGN_THRESHOLD));
	}

	// Sovereign direct coverage
	const sovDcMap = new Map(items.map((i) => [i.id, weightedDirectCov(sovPresenceMap.get(i.id) ?? [])]));

	// Sovereign transitive coverage
	const sovTcMap = new Map();
	for (const item of items) {
		if ((item.sovereigntyScore ?? 0) < SOVEREIGN_THRESHOLD) { sovTcMap.set(item.id, 0); continue; }
		const revDeps = reverseDependencies[item.id] ?? [];
		let tc = 0;
		for (const rev of revDeps) {
			const srcSov = itemById.get(rev.sourceItemId)?.sovereigntyScore ?? 0;
			if (srcSov >= SOVEREIGN_THRESHOLD) tc += GAMMA * (sovDcMap.get(rev.sourceItemId) ?? 0);
		}
		sovTcMap.set(item.id, tc);
	}

	// Sovereign diversity
	const sovDivMap = new Map(items.map((i) => [i.id, simpsonDiversity(sovPresenceMap.get(i.id) ?? [])]));

	// Sovereign raw adoption
	const sovRawMap = new Map(items.map((i) => [i.id, rawAdoptionValue(sovDcMap.get(i.id) ?? 0, sovTcMap.get(i.id) ?? 0, sovDivMap.get(i.id) ?? 0)]));
	const maxSovRaw = Math.max(0, ...sovRawMap.values());

	// Assemble results
	const result = new Map();
	for (const item of items) {
		const raw = rawMap.get(item.id) ?? 0;
		const sovRaw = sovRawMap.get(item.id) ?? 0;
		result.set(item.id, {
			score: maxRaw > 0 ? Math.round((100 * raw) / maxRaw) : 0,
			sovereignScore: maxSovRaw > 0 ? Math.round((100 * sovRaw) / maxSovRaw) : 0,
			directCoverage: dcMap.get(item.id) ?? 0,
			transitiveCoverage: tcMap.get(item.id) ?? 0,
			diversity: divMap.get(item.id) ?? 0,
			usedInStacks: (presenceMap.get(item.id) ?? []).map((p) => p.stackId),
		});
	}
	return result;
}

function buildDependencyIndexes(rawItems) {
	const dependencyGraph = {};
	const reverseDependencies = {};

	for (const item of rawItems) {
		const sourceId = item.id;
		if (!sourceId) continue;

		const normalizedDependencies = (item.dependencies ?? []).map((dependency) => ({
			targetItemId: dependency.targetItemId,
			type: dependency.type,
			scope: dependency.scope ?? 'required',
		}));

		dependencyGraph[sourceId] = normalizedDependencies;

		for (const dependency of normalizedDependencies) {
			const targetId = dependency.targetItemId;
			if (!reverseDependencies[targetId]) reverseDependencies[targetId] = [];
			reverseDependencies[targetId].push({
				sourceItemId: sourceId,
				type: dependency.type,
				scope: dependency.scope,
			});
		}
	}

	for (const targetId of Object.keys(reverseDependencies)) {
		reverseDependencies[targetId].sort((left, right) => left.sourceItemId.localeCompare(right.sourceItemId));
	}

	return {
		dependencyGraph,
		reverseDependencies,
	};
}

// ---------------------------------------------------------------------------
// Read all JSON files from a directory (ignores .gitkeep.json and _*)
// ---------------------------------------------------------------------------

function readJsonDir(dir) {
	let files;
	try {
		files = readdirSync(dir);
	} catch {
		return [];
	}
	return files
		.filter((f) => f.endsWith('.json') && !f.startsWith('.') && !f.startsWith('_'))
		.map((f) => {
			try {
				return JSON.parse(readFileSync(join(dir, f), 'utf-8'));
			} catch (e) {
				console.warn(`⚠️  Could not parse ${join(dir, f)}: ${e.message}`);
				return null;
			}
		})
		.filter(Boolean);
}

// ---------------------------------------------------------------------------
// Load data
// ---------------------------------------------------------------------------

const layers = readJsonDir(join(DATA_DIR, 'layers')).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

const rawItems = readJsonDir(join(DATA_DIR, 'items'));
const items = rawItems.map((item) => ({
	...item,
	logo: resolveLogo(item),
	sovereigntyScore: computeSovereigntyScore(item.sovereigntyCriteria),
}));

const { dependencyGraph, reverseDependencies } = buildDependencyIndexes(items);
const stacks = readJsonDir(join(DATA_DIR, 'stacks'));

// Compute adoption scores and overall scores (Single Source of Truth: build time only)
const adoptionResults = computeAdoptionScores(items, stacks, reverseDependencies);
const itemsWithAdoption = items.map((item) => {
	const adoption = adoptionResults.get(item.id);
	const overallScore = Math.round(
		OVERALL_WEIGHT_SOVEREIGNTY * (item.sovereigntyScore ?? 0) +
		OVERALL_WEIGHT_SOVEREIGN_ADOPTION * (adoption?.sovereignScore ?? 0) +
		OVERALL_WEIGHT_ADOPTION * (adoption?.score ?? 0),
	);
	return { ...item, adoption, overallScore };
});

// ---------------------------------------------------------------------------
// Generate TypeScript output
// ---------------------------------------------------------------------------

function serialize(value) {
	return JSON.stringify(value, null, '\t')
		.split('\n')
		.map((l, i) => (i === 0 ? l : '\t' + l))
		.join('\n');
}

const output = `// GENERATED FILE - DO NOT EDIT MANUALLY
// Generated from: data/layers/ + data/items/ + data/stacks/
// Logo fallback via: src/data/logo-urls.json
// Generated at: ${new Date().toISOString()}

import type { Item, Layer, Stack } from '../types';

const ASSET_BASE_URL = (import.meta.env.VITE_ASSET_BASE_URL ?? '').replace(/\\/+$/, '');

function withAssetBaseUrl(logo?: string): string | undefined {
\tif (!logo || /^https?:\\/\\//.test(logo)) return logo;
\tconst normalizedPath = \`/\${logo.replace(/^\\/+/, '')}\`;
\treturn ASSET_BASE_URL ? \`\${ASSET_BASE_URL}\${normalizedPath}\` : normalizedPath;
}

export const LAYERS: Layer[] = ${serialize(layers)};

const RAW_ITEMS: Item[] = ${serialize(itemsWithAdoption)};

export const ITEMS: Item[] = RAW_ITEMS.map((item) => ({
\t...item,
\tlogo: withAssetBaseUrl(item.logo),
}));

export const DEPENDENCY_GRAPH = ${serialize(dependencyGraph)} as const;

export const REVERSE_DEPENDENCIES = ${serialize(reverseDependencies)} as const;

export const STACKS: Stack[] = ${serialize(stacks)};
`;

writeFileSync(OUTPUT_TS, output, 'utf-8');

const layerCounts = itemsWithAdoption.reduce((acc, item) => {
	acc[item.layer] = (acc[item.layer] ?? 0) + 1;
	return acc;
}, {});

const adoptionTop5 = [...itemsWithAdoption]
	.sort((a, b) => (b.adoption?.score ?? 0) - (a.adoption?.score ?? 0))
	.slice(0, 5)
	.map((i) => `${typeof i.name === 'string' ? i.name : (i.name?.en ?? i.id)} (${i.adoption?.score ?? 0})`);
const sovAdoptionTop5 = [...itemsWithAdoption]
	.sort((a, b) => (b.adoption?.sovereignScore ?? 0) - (a.adoption?.sovereignScore ?? 0))
	.slice(0, 5)
	.map((i) => `${typeof i.name === 'string' ? i.name : (i.name?.en ?? i.id)} (${i.adoption?.sovereignScore ?? 0})`);

console.log(`✅  Generated ${OUTPUT_TS.replace(ROOT, '.')}`);
console.log(`   Layers:    ${layers.length}`);
console.log(`   Items:     ${itemsWithAdoption.length}`);
console.log(`   Stacks:    ${stacks.length}`);
console.log('');
console.log('   Items per layer:');
for (const [layer, count] of Object.entries(layerCounts)) {
	console.log(`     ${layer.padEnd(20)} ${count}`);
}
console.log('');
console.log('   Top 5 Adoption:');
for (const entry of adoptionTop5) console.log(`     ${entry}`);
console.log('');
console.log('   Top 5 Sovereign Adoption:');
for (const entry of sovAdoptionTop5) console.log(`     ${entry}`);
