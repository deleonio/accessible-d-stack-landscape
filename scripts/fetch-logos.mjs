#!/usr/bin/env node
/**
 * Sets logo URLs in data/items.csv directly from Wikimedia Commons and other public sources.
 * No files are downloaded – URLs are used as-is (generate-articles.mjs passes https:// URLs through).
 *
 * Usage: node scripts/fetch-logos.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ITEMS_CSV = join(ROOT, 'data', 'items.csv');

// Map: exact name from items.csv → public logo URL (used directly, no download)
// Wikimedia Commons: https://commons.wikimedia.org/wiki/Special:FilePath/{filename}
const WIKIMEDIA = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

const LOGO_SOURCES = {
	'Advanced Encryption Standard': `${WIKIMEDIA}AES_(Rijndael)_Round_Function.png`,
	Android: `${WIKIMEDIA}Android_robot_2023.svg`,
	Angular: `${WIKIMEDIA}Angular_full_color_logo.svg`,
	Appsmith: 'https://raw.githubusercontent.com/appsmithorg/appsmith/release/app/client/public/static/media/appsmith_logo.svg',
	Blink: `${WIKIMEDIA}Blink_(browser_engine)_colored_logo.svg`,
	Bluetooth: `${WIKIMEDIA}Bluetooth.svg`,
	Budibase: 'https://raw.githubusercontent.com/Budibase/budibase/master/packages/builder/public/logo.svg',
	'C++': `${WIKIMEDIA}ISO_C%2B%2B_Logo.svg`,
	Cassandra: `${WIKIMEDIA}Cassandra_logo.svg`,
	Chroma: 'https://raw.githubusercontent.com/chroma-core/chroma/main/docs/assets/chroma.svg',
	circleCI: `${WIKIMEDIA}CircleCI_Logo.svg`,
	'Comma-Separated Values (CSV)': `${WIKIMEDIA}Text-csv-icon.svg`,
	'Comprehensive Knowledge Archive Network (CKAN)': `${WIKIMEDIA}Ckan-logo-full.svg`,
	Contour: 'https://projectcontour.io/img/contour.svg',
	CouchDB: `${WIKIMEDIA}CouchDB_logo.svg`,
	CSS: `${WIKIMEDIA}CSS3_logo_and_wordmark.svg`,
	'Docker Swarm': `${WIKIMEDIA}Docker_(container_engine)_logo.svg`,
	'Domain Name System (DNS)': `${WIKIMEDIA}DNS_Architecture.svg`,
	'Emissary Ingress': 'https://www.getambassador.io/images/emissary-icon-black.svg',
	'Envoy Proxy': 'https://www.envoyproxy.io/img/envoy-logo.svg',
	'Extensible Markup Language (XML)': `${WIKIMEDIA}XML_Logo.svg`,
	Flutter: `${WIKIMEDIA}Google_Flutter_Logo.svg`,
	flux: 'https://fluxcd.io/img/logos/flux-icon@2x.png',
	Gecko: `${WIKIMEDIA}Firefox_logo,_2019.svg`,
	'general-purpose Remote Procedure Calls': `${WIKIMEDIA}GRPC_logo.svg`,
	'GitHub Actions': `${WIKIMEDIA}GitHub_Actions_Logo.svg`,
	GitLab: `${WIKIMEDIA}GitLab_logo.svg`,
	Go: `${WIKIMEDIA}Go_Logo_Blue.svg`,
	GraphQL: `${WIKIMEDIA}GraphQL_Logo.svg`,
	HBase: `${WIKIMEDIA}HBase_logo.svg`,
	Haystack: 'https://raw.githubusercontent.com/deepset-ai/haystack/main/docs/img/haystack_icon_colored.png',
	'HuggingFace Transformers': `${WIKIMEDIA}HuggingFace_logo.svg`,
	'Hypertext Transfer Protocol (HTTP)': `${WIKIMEDIA}HTTP_logo.svg`,
	iOS: `${WIKIMEDIA}IOS_2020_wordmark_black.svg`,
	Istio: 'https://istio.io/latest/img/icons/istio.svg',
	Java: `${WIKIMEDIA}Java_programming_language_logo.svg`,
	'JavaScript (ECMA Script)': `${WIKIMEDIA}Unofficial_JavaScript_logo_2.svg`,
	'JavaScript Object Notation (JSON)': `${WIKIMEDIA}JSON_logo_4.svg`,
	Jenkins: `${WIKIMEDIA}Jenkins_logo.svg`,
	Joget: 'https://raw.githubusercontent.com/jogetworkflow/jw-community/master/wflow-consoleweb/src/main/webapp/images/joget-logo.png',
	Kerberos: `${WIKIMEDIA}Kerberos_(protocol)_Logo.svg`,
	Kong: 'https://konghq.com/wp-content/uploads/2018/08/kong-combination-mark-color-256px.png',
	Kubernetes: `${WIKIMEDIA}Kubernetes_logo_without_workmark.svg`,
	LangGraph: 'https://raw.githubusercontent.com/langchain-ai/langgraph/main/docs/static/img/langgraph_logo.png',
	'Markdown (MD)': `${WIKIMEDIA}Markdown-mark.svg`,
	MariaDB: `${WIKIMEDIA}MariaDB_Logo.svg`,
	Milvus: 'https://milvus.io/images/milvus_log.svg',
	MLflow: 'https://raw.githubusercontent.com/mlflow/mlflow/master/docs/source/_static/MLflow-logo-final-black.png',
	'Model Context Protocol (MCP)': 'https://raw.githubusercontent.com/modelcontextprotocol/modelcontextprotocol/main/docs/assets/mcp-logo.svg',
	MongoDB: `${WIKIMEDIA}MongoDB_Logo.svg`,
	'MySQL Server': `${WIKIMEDIA}MySQL_logo.svg`,
	n8n: 'https://raw.githubusercontent.com/n8n-io/n8n/master/packages/design-system/src/assets/images/n8n-logo.svg',
	Neo4J: 'https://dist.neo4j.com/wp-content/uploads/20230926084108/Logo_FullColor_RGB_TransBG.svg',
	NextJS: `${WIKIMEDIA}Nextjs-logo.svg`,
	NGINX: `${WIKIMEDIA}Nginx_logo.svg`,
	'Node-RED': 'https://nodered.org/images/node-red-icon.svg',
	Nomad: 'https://www.datocms-assets.com/2885/1620155116-brandhcnomadprimaryattributedcolor.svg',
	NQdrant: 'https://qdrant.tech/images/qdrant-logo.svg',
	'Open Authorization (OAuth)': `${WIKIMEDIA}Oauth_logo.svg`,
	'Open Neural Network Exchange': 'https://onnx.ai/images/ONNX-Logo.svg',
	OpenAPI: `${WIKIMEDIA}OpenAPI_Logo_Pantone.svg`,
	'OpenShift Origin (OKD)': 'https://www.okd.io/images/okd-panda-flat.svg',
	PHP: `${WIKIMEDIA}PHP-logo.svg`,
	Portainer: 'https://raw.githubusercontent.com/portainer/portainer/develop/app/assets/images/logo_alt.svg',
	PostgreSQL: `${WIKIMEDIA}Postgresql_elephant.svg`,
	PromptFlow: 'https://raw.githubusercontent.com/microsoft/promptflow/main/docs/media/logo/promptflow_logo_light.png',
	PyTorch: `${WIKIMEDIA}PyTorch_logo_icon.svg`,
	Python: `${WIKIMEDIA}Python-logo-notext.svg`,
	R: `${WIKIMEDIA}R_logo.svg`,
	RAGFlow: 'https://raw.githubusercontent.com/infiniflow/ragflow/main/web/src/assets/logo-with-text.png',
	Rancher: 'https://www.rancher.com/assets/img/brand-guidelines/assets/logos/png/color/rancher-logo-horiz-color.png',
	React: `${WIKIMEDIA}React-icon.svg`,
	'Resource Description Framework (RDF)': `${WIKIMEDIA}RDF_logo.svg`,
	'Robot Framework': 'https://robotframework.org/img/RF_logo_vertical.svg',
	Rust: `${WIKIMEDIA}Rust_programming_language_black_logo.svg`,
	Scylla: 'https://www.scylladb.com/wp-content/uploads/scylla-mascot-flathead.svg',
	'Secure Hash Algorithm': `${WIKIMEDIA}SHA-2.svg`,
	Selenium: `${WIKIMEDIA}Selenium_Logo.svg`,
	spaCy: 'https://spacy.io/_static/logo.png',
	Spinnaker: 'https://spinnaker.io/assets/images/spinnaker.svg',
	Swift: `${WIKIMEDIA}Swift_logo_with_text.svg`,
	TensorFlow: `${WIKIMEDIA}TensorFlow_logo.svg`,
	Traefik: 'https://raw.githubusercontent.com/traefik/traefik/master/docs/content/assets/img/traefik.logo.png',
	'Transport Layer Security (TLS)': `${WIKIMEDIA}OpenSSL_logo.svg`,
	TypeScript: `${WIKIMEDIA}Typescript_logo_2020.svg`,
	WebKit: `${WIKIMEDIA}WebKit_logo_(2015-2023).svg`,
	WiFi: `${WIKIMEDIA}Wi-Fi_Logo.svg`,
	"YAML Ain't Markup Language": `${WIKIMEDIA}Official_yaml_logo.svg`,
};

// Parse CSV preserving quotes
function parseCSV(text) {
	const lines = text.trim().split('\n');
	const headers = parseLine(lines[0]);
	return { headers, rows: lines.slice(1).map(parseLine) };
}

function parseLine(line) {
	const fields = [];
	let cur = '';
	let quoted = false;
	for (let i = 0; i < line.length; i++) {
		const ch = line[i];
		if (ch === '"') {
			if (quoted && line[i + 1] === '"') {
				cur += '"';
				i++;
			} else quoted = !quoted;
		} else if (ch === ',' && !quoted) {
			fields.push(cur);
			cur = '';
		} else {
			cur += ch;
		}
	}
	fields.push(cur);
	return fields;
}

function serializeCSV(headers, rows) {
	const escape = (v) => (v.includes(',') || v.includes('"') || v.includes('\n') ? `"${v.replace(/"/g, '""')}"` : v);
	return [headers.join(','), ...rows.map((r) => r.map(escape).join(','))].join('\n') + '\n';
}

const csv = readFileSync(ITEMS_CSV, 'utf-8');
const { headers, rows } = parseCSV(csv);
const nameIdx = headers.indexOf('name');
const logoIdx = headers.indexOf('logo');

console.log(`Found ${rows.length} items, processing logos...\n`);

let updated = 0;
let skipped = 0;

for (const row of rows) {
	const name = row[nameIdx];
	const url = LOGO_SOURCES[name];

	if (!url) {
		console.log(`  ⏭  No source mapped: ${name}`);
		skipped++;
		continue;
	}

	row[logoIdx] = url;
	console.log(`  ✅ Set: ${name} → ${url}`);
	updated++;
}

writeFileSync(ITEMS_CSV, serializeCSV(headers, rows));

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
console.log(`items.csv updated with logo URLs.`);
