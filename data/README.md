# data/ — Digital Stack Landscape Daten

Dieses Verzeichnis enthält alle Daten für die accessible-d-stack Anwendung in strukturierter JSON-Form.

## Verzeichnisstruktur

```
data/
├── layers/           # Die 5 Splash-Stack-Layer
├── items/            # Technologien, Standards und Tools
├── stacks/           # Regierungs- und Organisations-Stacks
├── relations/        # Relationen zwischen Items
└── schemas/          # JSON Schema Validierungsdateien
```

## Übersicht

| Verzeichnis  | Beschreibung                     | Format      | Validierung            |
| ------------ | -------------------------------- | ----------- | ---------------------- |
| `layers/`    | Die 5 konzeptionellen Ebenen     | JSON        | `layer.schema.json`    |
| `items/`     | Alle Technologien & Standards    | JSON        | `item.schema.json`     |
| `stacks/`    | Gov-Stacks mit Item-Empfehlungen | JSON        | `stack.schema.json`    |
| `relations/` | Item-Relationen & Kompatibilität | JSON        | `relation.schema.json` |
| `schemas/`   | JSON Schema Definitionen         | JSON Schema | -                      |

## Daten-Pipeline

```
CSV-Daten (Quelle)
        ↓
    Migrate-Skript
        ↓
    JSON-Dateien (hier)
        ↓
    Validationsskript (validate-schemas.mjs)
        ↓
    TypeScript Generation (generate-data.mjs)
        ↓
    React/Preact Komponenten
```

## Wichtige Richtlinien

- **Keine manuellen Änderungen**: Verwenden Sie die Upload/Import-Funktionen
- **Schema-Validierung**: Alle Dateien werden gegen ihre Schemas validiert
- **Versionskontrolle**: Alle JSON-Dateien sollten im Git versioniert sein
- **Backup**: Sichern Sie Daten vor dem Löschen von Items/Stacks

## Weitere Informationen

- [data/layers/README.md](layers/README.md)
- [data/items/README.md](items/README.md)
- [data/stacks/README.md](stacks/README.md)
- [data/relations/README.md](relations/README.md)
- [data/schemas/README.md](schemas/README.md)
