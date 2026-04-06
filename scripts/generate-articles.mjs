#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INPUT_CSV = join(ROOT, 'data', 'items.csv');
const LOGO_URLS_JSON = join(ROOT, 'src', 'data', 'logo-urls.json');
const OUTPUT_TS = join(ROOT, 'src', 'data', 'articles.generated.ts');

const CATEGORIES = new Set(['betrieb', 'infrastruktur', 'plattform', 'zugang']);
const FALLBACK_LOGO = '/assets/broken-logo.svg';

function parseCSV(csv) {
	const [headerLine, ...dataLines] = csv.trim().split('\n');
	const headers = parseLine(headerLine);

	return dataLines.filter(Boolean).map((line) => {
		const values = parseLine(line);
		return Object.fromEntries(headers.map((h, i) => [h, values[i] || '']));
	});
}

function parseLine(line) {
	const fields = [];
	let current = '';
	let quoted = false;

	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (ch === '"') {
			if (quoted && line[i + 1] === '"') {
				current += '"';
				i++;
			} else {
				quoted = !quoted;
			}
		} else if (ch === ',' && !quoted) {
			fields.push(current.trim());
			current = '';
		} else {
			current += ch;
		}
	}
	fields.push(current.trim());
	return fields;
}

function toArticle(row, index, logoUrls) {
	const category = [...CATEGORIES].find((c) => (row.category || '').replace(/\s/g, '').toLowerCase().includes(c)) || 'plattform';
	const csvLogo = (row.logo || '').trim();
	const name = (row.name || '').trim();
	const tags = (row.tag || '')
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	// 1. Use CSV logo if it's an external URL
	let logo = '';
	if (csvLogo && /^https?:\/\//.test(csvLogo)) {
		logo = csvLogo;
	} else if (csvLogo && !csvLogo.startsWith('http')) {
		// 2. Use CSV logo if it's a local path
		logo = '/' + csvLogo.replace(/^\/+/, '');
	}

	// 3. Try external logo URL from logo-urls.json
	if (!logo && logoUrls[name]) {
		const logoEntry = logoUrls[name];
		if (logoEntry.verified && logoEntry.url) {
			logo = logoEntry.url;
		}
	}

	// 4. Fallback to broken-logo.svg if nothing found
	if (!logo) {
		logo = FALLBACK_LOGO;
	}

	return {
		id: String(index + 1),
		name,
		category,
		description: (row.description || '').trim(),
		logo,
		tags,
		featured: false,
	};
}

// Load logo-urls.json for fallback/override
let logoUrls = {};
try {
	logoUrls = JSON.parse(readFileSync(LOGO_URLS_JSON, 'utf-8'));
} catch {
	console.warn('⚠️  Could not load logo-urls.json, will use CSV logos and fallback only');
}

const articles = parseCSV(readFileSync(INPUT_CSV, 'utf-8')).map((row, idx) => toArticle(row, idx, logoUrls));

const articlesJson = articles.map((a) => `\t${JSON.stringify(a)},`).join('\n');

const output = `// GENERATED FILE - DO NOT EDIT MANUALLY
// Generated from: data/items.csv + src/data/logo-urls.json
// Generated at: ${new Date().toISOString()}

import { Article } from '../types';

const ASSET_BASE_URL = (import.meta.env.VITE_ASSET_BASE_URL ?? '').replace(/\\/+$/, '');

function withAssetBaseUrl(logo?: string): string | undefined {
\tif (!logo || /^https?:\\/\\//.test(logo)) return logo;
\tconst normalizedPath = \`/\${logo.replace(/^\\/+/, '')}\`;
\treturn ASSET_BASE_URL ? \`\${ASSET_BASE_URL}\${normalizedPath}\` : normalizedPath;
}

const RAW_ARTICLES: Article[] = [
${articlesJson}
];

export const ARTICLES: Article[] = RAW_ARTICLES.map((article) => ({
\t...article,
\tlogo: withAssetBaseUrl(article.logo),
}));
`;

writeFileSync(OUTPUT_TS, output, 'utf-8');

// Count logo types
const logoCounts = articles.reduce(
	(acc, a) => {
		if (a.logo === FALLBACK_LOGO) {
			acc.fallback++;
		} else if (/^https?:\/\//.test(a.logo)) {
			acc.external++;
		} else {
			acc.local++;
		}
		return acc;
	},
	{ external: 0, local: 0, fallback: 0 },
);

console.log(`Generated src/data/articles.generated.ts (${articles.length} articles)`);
console.log(`  📍 External URLs: ${logoCounts.external}`);
console.log(`  📁 Local paths: ${logoCounts.local}`);
console.log(`  ⚠️  Fallback logos: ${logoCounts.fallback}`);
