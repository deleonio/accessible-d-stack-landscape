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

| Verzeichnis  | Beschreibung                           | Format      | Validierung            |
| ------------ | -------------------------------------- | ----------- | ---------------------- |
| `layers/`    | Die 5 konzeptionellen Ebenen           | JSON        | `layer.schema.json`    |
| `items/`     | Alle Technologien & Standards          | JSON        | `item.schema.json`     |
| `stacks/`    | Gov-Stacks mit Item-Empfehlungen       | JSON        | `stack.schema.json`    |
| `relations/` | Stack-Item Relationen mit Souveränität | JSON        | `relation.schema.json` |
| `schemas/`   | JSON Schema Definitionen               | JSON Schema | -                      |

## Datenmodell: Layers → Items → Stacks → Relations

```mermaid
graph LR
    subgraph Layers["🏗️ Layers (5x)"]
        L1["Infrastructure"]
        L2["Platform"]
        L3["Building Blocks"]
        L4["Applications"]
        L5["Sovereign Standards"]
    end

    subgraph Items["📦 Items (~130)"]
        I1["kubernetes"]
        I2["docker"]
        I3["postgresql"]
        I4["nextjs"]
        I5["react"]
        I6["openapi"]
    end

    subgraph Stacks["🌍 Stacks"]
        S1["Germany Stack"]
        S2["EU Sovereignty Stack"]
    end

    subgraph Relations["🔗 Relations (Stack → Item)"]
        R1["role: consumer<br/>sovereigntyScore: 0.95"]
        R2["role: contributor<br/>sovereigntyScore: 0.8"]
        R3["role: funder<br/>sovereigntyScore: 0.3"]
    end

    I1 --> |Layer: Infrastructure| Layers
    I3 & I4 & I5 --> |Layer: varies| Layers

    S1 --> |selects| Items
    S2 --> |selects| Items

    S1 --> |defines via| Relations
    S2 --> |defines via| Relations

    Relations -.->|score & role| Items

    classDef layers fill:#1a56a0,stroke:#0f3a66,color:#fff
    classDef items fill:#7c3aed,stroke:#5b21b6,color:#fff
    classDef stacks fill:#db2777,stroke:#be185d,color:#fff
    classDef relations fill:#059669,stroke:#047857,color:#fff

    class Layers layers
    class Items items
    class Stacks stacks
    class Relations relations
```

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
