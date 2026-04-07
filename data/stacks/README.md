# data/stacks/ — Regierungs- und Organisations-Stacks

Definiert spezifische Tech-Stacks für Regierungen, Organisationen oder Regionen.

## Übersicht

Ein **Stack** ist eine **Empfehlung einer bestimmten Auswahl von Items** aus der accessible-d-stack für eine spezifische **Region, Organisation oder Regierung**.

Beispiele:

- Deutschland Stack
- EU Digital Sovereignty Stack
- Small Business Stack
- NGO Stack

## Dateistruktur

```json
{
	"id": "germany",
	"name": { "de": "Deutschland Stack", "en": "Germany Stack" },
	"description": { "de": "...", "en": "..." },
	"country": "DE",
	"issuer": "Bundesministeriums für Digitales und Staatsmodernisierung (BMDS)",
	"version": "0.1.0",
	"publishedAt": "2026-04-07",
	"items": [
		{
			"itemId": "kubernetes",
			"status": "recommended",
			"role": "consumer",
			"rationale": { "de": "...", "en": "..." },
			"alternatives": ["docker-swarm", "nomad"]
		}
	]
}
```

### Felder

| Feld           | Typ    | Beschreibung                                | Erforderlich |
| -------------- | ------ | ------------------------------------------- | ------------ |
| `id`           | string | Eindeutige Stack-ID (lowercase, kebab-case) | ✓            |
| `name`         | object | Lokalisierte Namen (de, en, optional fr)    | ✓            |
| `description`  | object | Lokalisierte Beschreibungen                 | ✓            |
| `country`      | string | ISO 3166-1 alpha-2 Code (z.B. "DE", "EU")   | ✓            |
| `issuer`       | string | Verantwortliche Organisation                | ✓            |
| `version`      | string | Semantische Versionsnummer                  | ✓            |
| `publishedAt`  | string | ISO 8601 Publikationsdatum                  | ✓            |
| `items`        | array  | Items mit Role-Scoring und Status           | ✓            |
| `participants` | array  | Organisationen (optional)                   | ✗            |

### Stack Item Struktur

```json
{
	"itemId": "kubernetes",
	"status": "recommended",
	"role": "consumer",
	"rationale": {
		"de": "Deutschland nutzt Kubernetes als Industrie-Standard für Container-Orchestrierung. Kubernetes ist 100% Open-Source (CNCF), aber Deutschland ist nur Konsument ohne aktive Mitgestaltung.",
		"en": "Germany uses Kubernetes as the industry standard for container orchestration. Kubernetes is 100% open-source (CNCF), but Germany is only a consumer without active contribution."
	},
	"alternatives": ["docker-swarm", "nomad"]
}
```

| Feld           | Typ    | Beschreibung                                         | Erforderlich |
| -------------- | ------ | ---------------------------------------------------- | ------------ |
| `itemId`       | string | Referenz auf Item-ID (muss existieren)               | ✓            |
| `status`       | enum   | `recommended` / `approved` / `deprecated`            | ✓            |
| `role`         | enum   | `maintainer` / `contributor` / `funder` / `consumer` | ✓            |
| `since`        | string | ISO 8601 Hinzufügungsdatum (optional)                | ✗            |
| `rationale`    | object | Begründung (de, en, optional fr)                     | ✗            |
| `alternatives` | array  | Alternative Item-IDs                                 | ✗            |

## Rollen & Multiplikatoren

| Rolle         | Multiplikator | Beschreibung                                        |
| ------------- | ------------- | --------------------------------------------------- |
| `maintainer`  | ×1.0          | Das Land pflegt und entwickelt dieses Item aktiv    |
| `contributor` | ×0.75         | Das Land trägt aktiv bei (Code, Standards, Reviews) |
| `funder`      | ×0.5          | Das Land finanziert/sponsert dieses Item            |
| `consumer`    | ×0.25         | Das Land nutzt dieses Item nur als Konsument        |

## Validierung

```bash
pnpm validate-schemas
```

→ Validiert gegen `data/schemas/stack.schema.json`

## Neue Stacks erstellen

1. Neue Datei: `data/stacks/{id}.json`
2. Alle Required-Felder füllen
3. Nur existierende Item-IDs referenzieren
4. Jedes Item muss mindestens itemId, status, role haben
5. `pnpm validate-schemas` → sollte passen
6. Git commit

## Änderungen

- ✅ Items hinzufügen/entfernen
- ✅ Role, Rationale, Status, Alternatives aktualisieren
- ✅ Participants/Version anpassen
- ⚠️ Stack-ID umbenennen → URL-Verluste
- ⚠️ Stack komplett löschen → Breaking Change

## Konvention

Dateinamen entsprechen Stack-ID:

- `germany-stack.json` → id: "germany-stack"
- `eu-sovereignty-stack.json` → id: "eu-sovereignty-stack"

## Schema

Siehe [data/schemas/stack.schema.json](../schemas/stack.schema.json)

## Bestehende Stacks

```
✓ germany-stack.json  — Deutschland Stack
```

## Tipps

- **Konsistenz**: Nutze ähnliche Items über mehrere Stacks hinweg
- **Alternativen**: Empfehle realistische Alternativen
- **Dokumentation**: Begründe jede Auswahl in der rationale
- **Versionierung**: Update version bei Breaking Changes
