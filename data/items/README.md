# data/items/ — Technologien, Standards & Tools

Katalog aller Technologien, Standards und Tools in der digitalen Souveränität.

## Übersicht

Items sind die einzelnen **Technologien, Standards oder Tools**, die in den verschiedenen Layern der accessible-d-stack eingeordnet werden.

## Dateistruktur

```json
{
	"id": "nextjs",
	"name": { "de": "Next.js", "en": "Next.js", "fr": "Next.js" },
	"description": { "de": "...", "en": "..." },
	"layer": "applications",
	"type": "framework",
	"logo": "https://...|/assets/...",
	"homepage": "https://nextjs.org",
	"github": "https://github.com/vercel/next.js",
	"repository": "https://github.com/vercel/next.js",
	"sovereignty": {
		"open_source": true,
		"transparent": true,
		"fair_licensed": true
	},
	"tags": ["javascript", "react", "ssr"],
	"alternativeIds": ["next", "nextjs-framework"],
	"relatedIds": ["react", "nodejs"]
}
```

### Felder

| Feld             | Typ    | Beschreibung                                                     | Erforderlich |
| ---------------- | ------ | ---------------------------------------------------------------- | ------------ |
| `id`             | string | Eindeutige ID (lowercase, kebab-case)                            | ✓            |
| `name`           | object | Lokalisierte Namen (de, en, optional fr)                         | ✓            |
| `description`    | object | Lokalisierte Beschreibungen                                      | ✓            |
| `layer`          | enum   | Layer-ID (infrastructure, platform, etc)                         | ✓            |
| `type`           | enum   | Item-Typ (framework, library, tool, standard, protocol)          | ✓            |
| `logo`           | string | URL oder lokaler Pfad `/assets/...`                              | ✗            |
| `homepage`       | string | Offizielle Homepage                                              | ✗            |
| `github`         | string | GitHub Repository URL                                            | ✗            |
| `repository`     | string | Hauptrepository URL                                              | ✗            |
| `sovereignty`    | object | Souveränitätskriterien (open_source, transparent, fair_licensed) | ✓            |
| `tags`           | array  | Keywords für Suche/Filter                                        | ✗            |
| `alternativeIds` | array  | Alternative Bezeichnungen                                        | ✗            |
| `relatedIds`     | array  | Verwandte Item-IDs                                               | ✗            |

## Souveränitätskriterien

Jedes Item wird nach 3 Kriterien bewertet:

```json
"sovereignty": {
  "open_source": true,      // Quellcode ist offen?
  "transparent": true,       // Prozesse transparent?
  "fair_licensed": true      // ODbL/AGPL/similar?
}
```

## Datei-Namenkonvention

- Dateiname = Item-ID + `.json`
- Beispiele:
  - `nextjs.json` → id: "nextjs"
  - `postgresql.json` → id: "postgresql"
  - `kubernetes.json` → id: "kubernetes"

## Kategorien (type)

- `framework` — Web/App Framework (Next.js, Spring, Django)
- `library` — Code Library (React, Vue, Pandas)
- `tool` — Development/Ops Tool (Docker, Git, Terraform)
- `standard` — Officher Standard (OpenAPI, HTML, SQL)
- `protocol` — Tech Protocol (HTTP, REST, GraphQL)

## Validierung

```bash
pnpm validate-schemas
```

→ Validiert gegen `data/schemas/item.schema.json`

## Neue Items hinzufügen

1. Neue Datei: `data/items/{id}.json`
2. Alle Required-Felder füllen
3. `pnpm validate-schemas` → sollte passen
4. Git commit mit aussagekräftiger Nachricht

## Änderungen

- ✅ Beschreibungen, Tags, Links aktualisieren
- ✅ Sovereignty aktualisieren
- ✅ Neue alternativeIds/relatedIds hinzufügen
- ⚠️ IDs umbenennen → Alle Relations müssen updated werden
- ❌ Items aus Produktivdaten löschen

## Schema

Siehe [data/schemas/item.schema.json](../schemas/item.schema.json)

## Statistik

```
Aktuell: 128 Items
Layers:
  - Infrastructure: 15 Items
  - Platform: 25 Items
  - Building Blocks: 28 Items
  - Applications: 45 Items
  - Sovereign Standards: 15 Items
```
