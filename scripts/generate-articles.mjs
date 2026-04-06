#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INPUT_CSV = join(ROOT, 'data', 'items.csv');
const OUTPUT_TS = join(ROOT, 'src', 'data', 'articles.generated.ts');

const CATEGORIES = new Set(['betrieb', 'infrastruktur', 'plattform', 'zugang']);

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

function toArticle(row, index) {
	const category = [...CATEGORIES].find((c) => (row.category || '').replace(/\s/g, '').toLowerCase().includes(c)) || 'plattform';
	const logo = (row.logo || '').trim();
	const tags = (row.tag || '')
		.split(',')
		.map((t) => t.trim())
		.filter(Boolean);

	return {
		id: String(index + 1),
		name: (row.name || '').trim(),
		category,
		description: (row.description || '').trim(),
		logo: !logo ? '' : /^https?:\/\//.test(logo) ? logo : '/' + logo.replace(/^\/+/, ''),
		tags,
		featured: false,
	};
}

const articles = parseCSV(readFileSync(INPUT_CSV, 'utf-8')).map(toArticle);

const articlesJson = articles.map((a) => `\t${JSON.stringify(a)},`).join('\n');

const output = `// GENERATED FILE - DO NOT EDIT MANUALLY
// Generated from: data/items.csv
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
console.log(`Generated src/data/articles.generated.ts (${articles.length} articles)`);
