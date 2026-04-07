# StackAtlas – App-Konzept & Business Case

## Vision

**StackAtlas** ist die weltweit erste Plattform zum vergleichenden Scoring von nationalen und organisatorischen Technologie-Stacks auf Basis messbarer digitaler Souveränität. Ähnlich wie [electricitymap.org](https://app.electricitymap.org) Echtzeit-CO₂-Intensität von Strommix visualisiert, macht StackAtlas die „Souveränitätsintensität" eines Tech-Stacks sichtbar – pro Item, pro Layer, pro Stack, pro Land.

---

## Problem

Entscheider in Behörden, Kommunen und Unternehmen wählen Technologien oft nach Bekanntheit, Verfügbarkeit oder Preis – nicht nach strategischer Abhängigkeit. Die Folgen:

- Lock-in bei US-Hyperscalern (AWS, Microsoft, Google)
- Unkontrollierbare Lieferketten durch proprietäre Closed-Source-Stacks
- Fehlende Vergleichbarkeit zwischen nationalen Digitalisierungsstrategien (Deutschland-Stack, India Stack, X-Road, Singapore Gov Tech Stack ...)
- Kein Instrument, um den Fortschritt zur digitalen Souveränität objektiv zu messen

---

## Lösung: StackAtlas

### Kernidee

Jede **Technologie (Item)** erhält einen numerischen **Souveränitäts-Score (0–100)**. Dieser ergibt sich aus gewichteten, binären Kriterienchecks. Stacks aggregieren ihre Item-Scores unter Berücksichtigung von **Gewichtung, Rolle und Beziehungen** zu einem **Stack-Souveränitäts-Score**.

---

## Datenmodell

### Item-Score (bereits implementiert)

| Kriterium                                        | Gewicht |
| ------------------------------------------------ | ------- |
| Open Source (öffentlicher Quellcode)             | +30     |
| EU-Hauptsitz oder -Registrierung                 | +25     |
| Sicherheitsaudit vorhanden                       | +20     |
| Permissive oder Copyleft-Lizenz                  | +10     |
| Reifes Projekt (graduiert/stabil)                | +10     |
| Großes Community-Ökosystem (>1.000 GitHub Stars) | +5      |
| **Summe**                                        | **100** |

### Stack-Score (abgeleitet)

Der **Stack-Score** ist kein einfaches Mittel – er wird berechnet als:

```
StackScore = Σ (ItemScore × RoleWeight × StatusWeight × LayerWeight) / ΣWeights
```

| Dimension  | Faktoren                                                                        |
| ---------- | ------------------------------------------------------------------------------- |
| **Role**   | `maintainer` × 1.5 · `contributor` × 1.2 · `funder` × 1.0 · `consumer` × 0.8    |
| **Status** | `recommended` × 1.2 · `approved` × 1.0 · `deprecated` × 0.5                     |
| **Layer**  | konfigurierbar pro Stack (z. B. Infrastruktur = kritischer → höhere Gewichtung) |

### Relationen zwischen Items

Items können **Abhängigkeiten** zueinander definieren:

```
Item A  --[depends_on]--> Item B
         --[alternative_to]--> Item C
         --[certified_by]--> Standard D
```

Eine kritische Abhängigkeit von einem Item mit niedrigem Score zieht den eigenen Score nach unten (**Dependency Penalty**). Das ermöglicht transitive Souveränitätsanalyse: z. B. ein „EU-Clouddienst", der intern AWS S3 nutzt, verliert Punkte.

---

## Vergleich internationaler Stacks

### Bekannte nationale Tech-Stacks

| Stack                         | Land  | Schwerpunkt                        |
| ----------------------------- | ----- | ---------------------------------- |
| Deutschland-Stack             | 🇩🇪 DE | E-Government, Open Source, DSGVO   |
| X-Road                        | 🇪🇪 EE | Datenaustausch, Interoperabilität  |
| India Stack                   | 🇮🇳 IN | Aadhaar, UPI, DigiLocker           |
| Singapore Gov Tech Stack      | 🇸🇬 SG | Skalierbarkeit, KI-Infrastruktur   |
| France Socle Interministériel | 🇫🇷 FR | Open Source per Gesetz             |
| Gaia-X                        | 🇪🇺 EU | Cloud-Souveränität, Federated Data |
| BDUK / Gov.UK PaaS            | 🇬🇧 UK | Cloud-first, APIs                  |

StackAtlas lädt alle Stacks als strukturierte Datensätze (YAML/JSON) und vergleicht deren Souveränitäts-Scores auf einer interaktiven Weltkarte.

---

## Produktfunktionen (MVP)

### 1. Item-Datenbank

- Durchsuchbare Bibliothek aller bekannten Technologien
- Score-Badge mit Farbskala (rot → gelb → grün)
- Detail-Drawer mit Kriterien-Breakdown und Quellenlinks

### 2. Stack-Vergleich

- Nebeneinander-Vergleich von 2–4 Stacks (wie bei GSMArena für Smartphones)
- Score-Differenz pro Layer (Infrastruktur, Plattform, Bausteine, Anwendungen)
- Heatmap: Welche Items drücken den Score?

### 3. Weltkarte

- Choroplethenkarte: Länder eingefärbt nach nationalem Stack-Souveränitäts-Score
- Drill-down auf Stacks und Items pro Land

### 4. Dependency Graph

- Visualisierung der Abhängigkeitskette eines Stacks als gerichteter Graph (D3.js / Cytoscape)
- Automatische Erkennung von Souveränitäts-Schwachstellen (z. B. proprietäre Abhängigkeiten)

### 5. Stack-Builder (Pro)

- Zusammenstellen eigener Custom-Stacks (z. B. für eine Kommune, ein Ministerium)
- Score-Simulation: Was ändert sich, wenn ich Tool X durch Tool Y ersetze?
- Export als Report (PDF/JSON)

### 6. API

- Öffentliche REST-API für Score-Abfragen
- Einbindung in CI/CD-Pipelines (z. B. Score-Check bei Einführung neuer Abhängigkeiten)

---

## Scoring-Engine (technisch)

```
┌─────────────────────────────────────┐
│           Rohdaten                  │
│  GitHub API · SPDX · OSFI · Custom  │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│        Kriterien-Evaluator          │
│  openSource · euHQ · audit · ...    │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│         Item Score (0–100)          │
└────────────────┬────────────────────┘
                 │  + Relationen (depends_on, role, status, layer)
                 ▼
┌─────────────────────────────────────┐
│       Stack Score (gewichtet)       │
│  + Dependency Penalty               │
│  + Layer Weighting                  │
└────────────────┬────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│   Länder- / Regions-Aggregation     │
│   (für Weltkarte & Benchmarking)    │
└─────────────────────────────────────┘
```

---

## Differenzierung & USP

| Merkmal                           | StackAtlas | Alternativen |
| --------------------------------- | ---------- | ------------ |
| Souveränitäts-Score pro Tech-Item | ✅         | ❌           |
| Transitive Dependency-Analyse     | ✅         | ❌           |
| Internationale Stack-Vergleiche   | ✅         | Teilweise    |
| Open Data & Open Source           | ✅         | ❌           |
| API für CI/CD-Integration         | ✅         | ❌           |
| Stack-Builder / Simulation        | ✅ (Pro)   | ❌           |

---

## Zielgruppen

| Segment                        | Nutzung                                                 |
| ------------------------------ | ------------------------------------------------------- |
| **Behörden & Ministerien**     | Stack-Auswahl, Vergabeentscheidungen, Berichtspflichten |
| **Kommunen**                   | Vergleich kommunaler Softwarestacks                     |
| **CIOs / IT-Architekten**      | Abhängigkeitsanalyse, Risikobewertung                   |
| **Politik / NGOs**             | Monitoring digitaler Souveränität auf Länderebene       |
| **Entwickler**                 | Open-Source-Auswahl, CI/CD-Integration via API          |
| **Journalisten / Think Tanks** | Datengrundlage für Policy-Berichte                      |

---

## Geschäftsmodell

| Tier           | Inhalt                                                                   | Preis          |
| -------------- | ------------------------------------------------------------------------ | -------------- |
| **Open**       | Öffentliche Item-Datenbank, Stack-Ansicht, Weltkarte, API (Rate-limited) | kostenlos      |
| **Pro**        | Stack-Builder, erweiterte Vergleiche, Dependency-Graph, PDF-Reports      | ~49€/Monat     |
| **Enterprise** | Custom-Stacks, Private Daten, SLA, On-Premise                            | auf Anfrage    |
| **Förderung**  | Sovereign Tech Fund, BMI, EU Horizon                                     | projektbezogen |

---

## Roadmap

```
Phase 1 – MVP (Q2 2026)
  ✅ Item-Datenbank mit Score-Engine
  ✅ Deutschland-Stack
  ⬜ 3 internationale Stacks (X-Road, India Stack, Singapore)
  ⬜ Einfacher Stack-Vergleich (2 Stacks)
  ⬜ Weltkarte (statisch)

Phase 2 – Erweiterung (Q3 2026)
  ⬜ Dependency Graph
  ⬜ Öffentliche REST-API v1
  ⬜ 10+ Stacks weltweit
  ⬜ Community-Contributions (PR-basiert via GitHub)

Phase 3 – Monetarisierung (Q4 2026)
  ⬜ Stack-Builder (Pro)
  ⬜ Export / Reporting
  ⬜ Enterprise-Onboarding
  ⬜ CI/CD-Plugin (GitHub Actions / GitLab CI)
```

---

## Technologie-Stack (StackAtlas selbst)

| Bereich       | Technologie                               |
| ------------- | ----------------------------------------- |
| Frontend      | Preact + KoliBri (Barrierefreiheit first) |
| Datenhaltung  | JSON/YAML-Dateien im Git-Repo (Open Data) |
| Score-Engine  | TypeScript, serverless (Vite SSG)         |
| Karte         | Leaflet.js / MapLibre                     |
| Graph         | Cytoscape.js                              |
| Deployment    | GitHub Pages / Cloudflare Pages           |
| API (Phase 2) | Cloudflare Workers oder Deno Deploy       |

---

## Fazit

StackAtlas löst ein echtes, dringendes Problem: **Die Unsichtbarkeit von Abhängigkeiten in Technologie-Entscheidungen der öffentlichen Hand.** Es ist die fehlende Infrastruktur-Metrik für das Zeitalter der digitalen Souveränität – messbar, vergleichbar und open by design.

> „Was man nicht messen kann, kann man nicht verbessern." – Peter Drucker
