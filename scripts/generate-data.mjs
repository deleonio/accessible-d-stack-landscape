#!/usr/bin/env node
/**
 * Reads all JSON files from:
 *   data/layers/      → LAYERS
 *   data/items/       → ITEMS   (logo resolved via src/data/logo-urls.json)
 *   data/stacks/      → STACKS
 *
 * Writes: src/data/items.generated.ts
 *
 * Run:  node --import tsx/esm scripts/generate-data.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { computeAdoptionScores } from '../src/utils/adoptionScore.ts';
import { computeOverallScore } from '../src/utils/overallScore.ts';
import { computeSovereigntyScore } from '../src/utils/sovereigntyScore.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = join(ROOT, 'data');
const LOGO_URLS_JSON = join(ROOT, 'src', 'data', 'logo-urls.json');
const OUTPUT_TS = join(ROOT, 'src', 'data', 'items.generated.ts');
const FALLBACK_LOGO = 'assets/broken-logo.svg';

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
	const overallScore = computeOverallScore({
		sovereignty: item.sovereigntyScore ?? 0,
		sovereignAdoption: adoption?.sovereignScore ?? 0,
		adoption: adoption?.score ?? 0,
	});
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

const resolveName = (i) => (typeof i.name === 'string' ? i.name : (i.name?.de ?? i.id));

const adoptionTop5 = [...itemsWithAdoption]
	.sort((a, b) => (b.adoption?.score ?? 0) - (a.adoption?.score ?? 0))
	.slice(0, 5)
	.map((i) => `${resolveName(i)} (${i.adoption?.score ?? 0})`);
const sovAdoptionTop5 = [...itemsWithAdoption]
	.sort((a, b) => (b.adoption?.sovereignScore ?? 0) - (a.adoption?.sovereignScore ?? 0))
	.slice(0, 5)
	.map((i) => `${resolveName(i)} (${i.adoption?.sovereignScore ?? 0})`);

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
