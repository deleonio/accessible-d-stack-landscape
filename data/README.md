---
status: active
owner: Data Engineering
last_reviewed: 2026-04-09
source_of_truth: docs/ARC42.md
---

# data/

Diese Datei ist die technische Kurzreferenz fuer das Datenverzeichnis.

Die vollstaendige technische Referenz liegt in:

- `docs/ARC42.md`

## Datenstruktur und Konzept

### Items als Dependencies

- **`data/items/`** enthält alle Dependencies (technologische Abhängigkeiten) als einzelne JSON-Dateien
- Jedes Item gehört zu genau einem Layer
- Items haben Sovereignty-Criteria, die ihre Bewertung bestimmen

### Sovereign-Standards als Grundlagen

- **Items im Layer `sovereign-standards`** sind echte Standards: Offene Standards, Interoperabilität, Datenschutz, regulatorische Anforderungen
- Diese Items sind die Grundlagen, auf denen Stacks aufgebaut sind
- Sie sollten besonders sorgfältig gepflegt und dokumentiert werden

### Stacks und ihre Commitments

- **`data/stacks/`** enthält Stacks (z.B. `germany.json`) mit ihren Item-Referenzen
- Jede Stack-Item-Beziehung deklariert eine Rolle (`maintainer|contributor|funder|consumer`)
- Für Sovereign-Standards-Items zeigt die Rolle die Stack-Verantwortung

## Schnellcheck

- Layer-IDs: `infrastructure`, `platform`, `building-blocks`, `applications`, `sovereign-standards`
- Validierung: `pnpm validate-schemas`
- Kernschemas: `data/schemas/layer.schema.json`, `data/schemas/item.schema.json`, `data/schemas/stack.schema.json`
