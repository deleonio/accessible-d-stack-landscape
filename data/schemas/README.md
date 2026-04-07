# JSON Schemas für accessible-d-stack

Dieses Verzeichnis enthält JSON-Schemata zur Validierung und IDE-Unterstützung für die Datenverwaltung.

## Schemas

- **[layer.schema.json](layer.schema.json)** — Definiert die Struktur für Splash-Layer (Infrastructure, Platform, Building Blocks, Applications, Sovereign Standards)
  - Verwendung: `data/layers/*.json`

- **[item.schema.json](item.schema.json)** — Definiert die Struktur für Items (Technologien, Standards, Tools)
  - Verwendung: `data/items/*.json`
  - Einschließlich Souveränitätskriterien und GitHub-Metadaten

- **[stack.schema.json](stack.schema.json)** — Definiert die Struktur für Gov-Stacks (z.B. Deutschland-Stack)
  - Verwendung: `data/stacks/*.json`
  - Einschließlich Teilnehmerlisten mit Rollen (maintainer, contributor, funder, consumer)

- **[relation.schema.json](relation.schema.json)** — Definiert Relationen zwischen Items
  - Verwendung: `data/relations/*.json`
  - Relationstypen: requires, complements, replaces

## IDE-Integration

Die Schemas sind in `.vscode/settings.json` konfiguriert und werden automatisch:

- Von VS Code erkannt und validiert
- Für Autocompletion und Fehlerprüfung verwendet
- Wenn Sie neue Items/Stacks/Relationen hinzufügen, wird VS Code Warnungen für ungültige Felder oder fehlende Required-Felder anzeigen.

## Verwendung

1. Öffne eine JSON-Datei aus `data/items/`, `data/layers/`, `data/stacks/` oder `data/relations/`
2. VS Code zeigt automatisch Validierungsfehler an (rote Squiggles)
3. Ctrl+Space (oder Cmd+Space) zeigt Autocompletion-Vorschläge für gültige Felder

## Schema-Validierung (CLI)

Optional können Dateien mit `ajv-cli` validiert werden:

```bash
npm install -g ajv-cli
ajv validate -s data/schemas/item.schema.json -d data/items/*.json
```
