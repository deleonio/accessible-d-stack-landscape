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
	"id": "germany-stack",
	"name": { "de": "Deutschland Stack", "en": "Germany Stack" },
	"description": { "de": "...", "en": "..." },
	"region": "Germany",
	"items": [
		{
			"id": "nextjs",
			"rationale": { "de": "...", "en": "..." },
			"priority": "high",
			"alternatives": ["svelte", "nuxt"]
		}
	],
	"maintainers": [
		{
			"name": "Max Mustermann",
			"role": "maintainer",
			"email": "max@example.com",
			"institution": "BMAS"
		}
	],
	"createdAt": "2026-01-15",
	"lastUpdated": "2026-04-07",
	"version": "1.0.0"
}
```

### Felder

| Feld          | Typ    | Beschreibung                                | Erforderlich |
| ------------- | ------ | ------------------------------------------- | ------------ |
| `id`          | string | Eindeutige Stack-ID (lowercase, kebab-case) | ✓            |
| `name`        | object | Lokalisierte Namen (de, en, optional fr)    | ✓            |
| `description` | object | Lokalisierte Beschreibungen                 | ✓            |
| `region`      | string | Zielregion/Land (z.B. "Germany", "EU")      | ✓            |
| `items`       | array  | Items mit Empfehlungen                      | ✓            |
| `maintainers` | array  | Personen/Institutionen (optional)           | ✗            |
| `createdAt`   | string | ISO-Datum der Erstellung                    | ✗            |
| `lastUpdated` | string | ISO-Datum letzter Update                    | ✗            |
| `version`     | string | SemVer Version                              | ✗            |

### Stack Item Struktur

```json
{
	"id": "nextjs", // Item-ID (muss in items/ existieren)
	"rationale": {
		// Begründung für Auswahl
		"de": "...",
		"en": "..."
	},
	"priority": "high", // high | medium | low
	"alternatives": [
		// Alternative Items
		"svelte",
		"nuxt"
	]
}
```

### Maintainer Struktur

```json
{
	"name": "Max Mustermann",
	"role": "maintainer|contributor|funder|consumer",
	"email": "max@example.com",
	"institution": "BMAS"
}
```

## Rollen (role)

- `maintainer` — Pflegt und entwickelt den Stack
- `contributor` — Trägt zu Stack-Entscheidungen bei
- `funder` — Finanziert/sponsort
- `consumer` — Nutzt/implementiert den Stack

## Priority Levels

- `high` — Kritische/zentrale Komponente
- `medium` — Wichtig für Standard-Setup
- `low` — Optional/für spezifische Use Cases

## Validierung

```bash
pnpm validate-schemas
```

→ Validiert gegen `data/schemas/stack.schema.json`

## Neue Stacks erstellen

1. Neue Datei: `data/stacks/{id}.json`
2. Alle Required-Felder füllen
3. Nur existierende Item-IDs referenzieren
4. `pnpm validate-schemas` → sollte passen
5. Git commit

## Änderungen

- ✅ Items hinzufügen/entfernen
- ✅ Rationale und Priority aktualisieren
- ✅ Maintainers/Version anpassen
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
