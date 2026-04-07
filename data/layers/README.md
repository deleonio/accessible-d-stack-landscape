# data/layers/ — Splash-Stack-Layer

Definiert die 5 konzeptionellen Ebenen des digitalen Stacks.

## Übersicht

Die accessible-d-stack teilt die digitale Souveränität in 5 Schichten auf:

| Layer                  | ID                    | Order | Beschreibung                                        |
| ---------------------- | --------------------- | ----- | --------------------------------------------------- |
| 1️⃣ Infrastructure      | `infrastructure`      | 1     | Cloud-Infrastruktur, Container, Virtualisierung     |
| 2️⃣ Platform            | `platform`            | 2     | Plattformen & Middleware, KI, Integrationsschichten |
| 3️⃣ Building Blocks     | `building-blocks`     | 3     | Kern-Komponenten, Datenbanken, Cache, Message Queue |
| 4️⃣ Applications        | `applications`        | 4     | Business-Anwendungen, Dienste, Module               |
| 5️⃣ Sovereign Standards | `sovereign-standards` | 5     | Standards, Best Practices, Governance               |

## Dateistruktur

```json
{
	"id": "infrastructure",
	"order": 1,
	"name": { "de": "Infrastruktur", "en": "Infrastructure" },
	"description": { "de": "...", "en": "..." },
	"color": "#1a56a0"
}
```

### Felder

- `id` (string): Eindeutige ID (lowercase, kebab-case)
- `order` (integer): Display-Reihenfolge (1–5)
- `name` (object): Lokalisierte Namen (de, en, optional fr)
- `description` (object): Lokalisierte Beschreibungen
- `color` (string): Hex-Farbe für das UI

## Dateien

- `infrastructure.json` — Layer 1 (Cloud & Container)
- `platform.json` — Layer 2 (Middleware & Frameworks)
- `building-blocks.json` — Layer 3 (Components & Services)
- `applications.json` — Layer 4 (Business Apps)
- `sovereign-standards.json` — Layer 5 (Standards & Governance)

## Validierung

```bash
pnpm validate-schemas
```

→ Validiert gegen `data/schemas/layer.schema.json`

## Änderungen

Layer sollten **nicht** gelöscht oder umbenannt werden, da sie das Konzept-Fundament sind.
Erlaubte Änderungen:

- ✅ Farben aktualisieren
- ✅ Beschreibungen übersetzen/aktualisieren
- ✅ Reihenfolge anpassen
- ❌ IDs ändern (würde zu Break führen)

## Schema

Siehe [data/schemas/layer.schema.json](../schemas/layer.schema.json)
