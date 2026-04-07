# Stack-Layer-Zuordnung (app-konsistent)

Dieses Dokument beschreibt die **verbindliche Layer-Systematik der App**.
Es gilt ausschließlich das tatsächliche Modell aus `data/layers/*.json`.

## Gültige Layer in dieser App

Reihenfolge und IDs (technisch maßgeblich):

1. `infrastructure`
2. `platform`
3. `building-blocks`
4. `applications`
5. `sovereign-standards`

## Pflichtschema für neue Technologien

Jede neue Technologie braucht mindestens:

1. **Layer** (aus der Liste oben)
2. **Sublayer/Bereich** (aus den gültigen Sublayern je Layer)
3. **Primäre Aufgabe**

Optional:

- Reifegrad (`assess`, `trial`, `adopt`, `hold`, `graduated`, je nach Datenmodell)
- Owner-Team
- Alternativen

## Zuordnungstabelle (nur Layer, die es in der App gibt)

| Layer (ID)             | Layer-Name          | Gültige Sublayer                      | Primäre Aufgabe |
| ---------------------- | ------------------- | ------------------------------------- | --------------- |
| `infrastructure`       | Infrastruktur       | `anschluss`, `transport`, `verteilung` | Basisnetze, Protokolle, Transport und Sicherheitsfundament |
| `platform`             | Plattform           | `daten`, `integration`, `ki`, `lowcode` | Daten- und Integrationsplattformen, KI- und Entwicklungsplattformen |
| `building-blocks`      | Bausteine           | `entwicklung`, `inbetriebnahme`, `sicherheit` | Wiederverwendbare technische Bausteine für Umsetzung und Betrieb |
| `applications`         | Anwendungen         | `browser`, `native-apps`              | Endnutzer-Anwendungen und Fachverfahren |
| `sovereign-standards`  | Souveränitätsstandards | *(derzeit keine festen Sublayer)*   | Querschnittliche Standards, Normen und Vorgaben zur digitalen Souveränität |

## Wichtig

- Begriffe wie „Experience / Channel“, „Data Platform“, „Governance & Compliance“ etc. sind **nicht** Teil des aktuellen App-Layer-Modells.
- Wenn solche Kategorien benötigt werden, müssen sie zuerst als offizielles Layer-/Sublayer-Update ins Datenmodell aufgenommen werden.

## Arbeitsmodus

- Änderungen per PR mit kurzer Begründung.
- Pro Technologie genau **eine primäre Layer-Zuordnung**.
- Bei Unklarheit zuerst Layer-ID validieren, dann Sublayer wählen.
