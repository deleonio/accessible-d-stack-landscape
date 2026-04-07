#!/usr/bin/env node
/**
 * Validates all JSON data files against their JSON schemas
 * Used as a quality gate for local and CI/CD validation
 */

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Define schema and data mappings
const validationMap = [
	{
		schemaFile: 'data/schemas/layer.schema.json',
		dataDir: 'data/layers',
		name: 'Layer',
	},
	{
		schemaFile: 'data/schemas/item.schema.json',
		dataDir: 'data/items',
		name: 'Item',
	},
	{
		schemaFile: 'data/schemas/stack.schema.json',
		dataDir: 'data/stacks',
		name: 'Stack',
	},
];

let totalFiles = 0;
let validFiles = 0;
let totalErrors = 0;

console.log('🔍 JSON Schema Validation - Starting...\n');

for (const { schemaFile, dataDir, name } of validationMap) {
	const schemaPath = path.join(projectRoot, schemaFile);
	const dataDirPath = path.join(projectRoot, dataDir);

	// Load schema
	if (!fs.existsSync(schemaPath)) {
		console.error(`❌ Schema not found: ${schemaFile}`);
		totalErrors++;
		continue;
	}

	let schema;
	try {
		schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
	} catch (e) {
		console.error(`❌ Invalid schema JSON: ${schemaFile}`);
		console.error(`   ${e.message}`);
		totalErrors++;
		continue;
	}

	const validate = ajv.compile(schema);

	// Check data directory
	if (!fs.existsSync(dataDirPath)) {
		console.warn(`⚠️  Data directory not found: ${dataDir}`);
		continue;
	}

	// Get all JSON files
	const files = fs
		.readdirSync(dataDirPath)
		.filter((f) => f.endsWith('.json') && f !== '.gitkeep.json')
		.sort();

	if (files.length === 0) {
		console.warn(`⚠️  No JSON files in: ${dataDir}`);
		continue;
	}

	console.log(`📋 Validating ${name}s (${files.length} files):`);

	let categoryValid = 0;
	let categoryErrors = 0;

	for (const file of files) {
		totalFiles++;
		const filePath = path.join(dataDirPath, file);

		try {
			const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
			const valid = validate(data);

			if (valid) {
				validFiles++;
				categoryValid++;
				process.stdout.write('.');
			} else {
				categoryErrors++;
				totalErrors++;
				process.stdout.write('✗');

				console.log();
				console.log(`   ❌ ${file}`);
				for (const error of validate.errors) {
					console.log(`      - ${error.instancePath || '/'} ${error.schemaPath}: ${error.message}`);
				}
			}
		} catch (e) {
			categoryErrors++;
			totalErrors++;
			process.stdout.write('✗');
			console.log();
			console.log(`   ❌ ${file}: ${e.message}`);
		}
	}

	console.log(`\n   ✓ ${categoryValid}/${files.length} valid\n`);
}

// Summary
console.log('\n📊 Summary');
console.log('─'.repeat(40));
console.log(`Total files:  ${totalFiles}`);
console.log(`Valid:        ${validFiles}`);
console.log(`Errors:       ${totalErrors}`);

if (totalErrors === 0) {
	console.log('\n✅ All validations passed!');
	process.exit(0);
} else {
	console.log(`\n❌ Validation failed with ${totalErrors} error(s)`);
	process.exit(1);
}
