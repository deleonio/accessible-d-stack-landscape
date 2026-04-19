---
status: active
owner: Frontend Architecture
last_reviewed: 2026-04-09
source_of_truth: docs/ARC42.md
---

# ARC42

## 1. Ziel und Scope

Dieses Dokument beschreibt die technische Zielarchitektur, die zentralen Entscheidungen und die umsetzungsrelevanten Randbedingungen fuer StackAtlas.

## 2. Kontext

### Fachlicher Kontext

- Die Anwendung verarbeitet Layer, Items und Stacks als zentrale Domänenobjekte.
- Scoring und Visualisierung bauen auf denselben kanonischen Daten auf.

### Technischer Kontext

- Frontend: Preact 10 + Vite
- Komponenten: KoliBri via `@public-ui/preact`
- Styling: UnoCSS fuer Layout, SCSS/BEM fuer Komponentenstil
- Qualitaet: TypeScript strict, ESLint, Stylelint, Playwright, axe-core

## 3. Loesungsstrategie

- KoliBri first fuer UI-Komponenten
- Klare Trennung zwischen fachlicher Doku, technischer Spezifikation und Archiv
- JSON-basierte Datenhaltung mit Schema-Validierung
- Dokumentierte Betriebsprozesse fuer Logos und Datenvalidierung

## 4. Bausteinsicht

### Frontend

- Preact-Anwendung mit Vite-Build
- Komponentenbibliothek fuer barrierearme UI
- Footer-Link und Repo-Doku verweisen auf `docs/README.md` als Einstieg

### Daten

- `data/layers/` fuer Layerdefinitionen
- `data/items/` fuer Technologie-Items
- `data/stacks/` fuer Stackzusammenstellungen
- `data/schemas/` fuer Validierung

### Build- und Hilfsskripte

- `scripts/fetch-external-logos.mjs`
- `scripts/validate-schemas.mjs`
- weitere Migrations- und Hilfsskripte ebenfalls in `scripts/`

## 5. Fachliches Datenmodell

Verbindliche Layer-IDs:

1. `infrastructure`
2. `platform`
3. `building-blocks`
4. `applications`
5. `sovereign-standards`

Mindestfelder fuer Items:

- `id`
- `name`
- `layer`
- `description`
- `oss`
- `sovereigntyCriteria`

Empfohlene Zusatzfelder:

- `sublayer`
- `homepage`
- `logo`
- `maturity`
- `tags`
- `audit`

Pflichtfelder fuer Stack-Definition:

- `id`
- `name`
- `version`
- `items[]`

Pflichtfelder je Stack-Item:

- `itemId`
- `status` (`recommended|approved|deprecated`)
- `role` (`maintainer|contributor|funder|consumer`)

### Items als Dependencies (Abhängigkeitsmodell)

**Zentrales Konzept:** Alle Items sind Dependencies — Abhängigkeiten, die in Layern organisiert sind.

```
Layer-Struktur:
┌─────────────────────────────────────────┐
│ Infrastructure, Platform, Building-... │
│ (Abhängigkeiten zur Umsetzung)          │
├─────────────────────────────────────────┤
│ Applications                            │
│ (Domänenspezifische Abhängigkeiten)     │
├─────────────────────────────────────────┤
│ Sovereign-Standards                     │
│ (Grundlegende Standards, Prinzipien)    │
└─────────────────────────────────────────┘
         ↓
      Stack wählt Items aus
      und deklariert Verantwortung
         ↓
┌─────────────────────────────────────────┐
│ StackItem (Dependency Declaration):     │
│ - role: maintainer|contributor|...      │
│ - status: recommended|approved|...      │
│ - rationale, alternatives               │
└─────────────────────────────────────────┘
```

**Sovereign-Standards als echte Standards:**
- Nur Items im Layer `sovereign-standards` sind **echte Standards**: Offene Standards, Interoperabilitätsprinzipien, Datenschutz- und Regulierungsanforderungen
- Sie sind **Grundlagen**, auf denen Stacks aufgebaut sind
- Ein Stack zeigt seine Verantwortung für Standards durch die Rolle:
  - `maintainer`: Stack entwickelt und wartet den Standard mit
  - `contributor`: Stack trägt aktiv zum Standard bei
  - `funder`: Stack finanziert die Entwicklung
  - `consumer`: Stack nutzt den Standard

**Stack-Commitment-Modell:**
Ein Stack ist eine Verantwortungserklärung: Durch die Auswahl einer Rolle für ein Item (insbesondere für Sovereign-Standards) committet sich ein Stack, diesen Standard zu maintainen oder zu unterstützen.

## 6. Querschnittliche Konzepte

### Netzwerkeffekte / Stack-Konvergenz (Adoption Score, 2026-04)

Neben dem intrinsischen Sovereignty Score wird für jedes Item ein **Adoption Score**
(0–100) und ein **Sovereign Adoption Score** (0–100) berechnet, die abbilden, wie
häufig und in welchem Kontext ein Item in den kuratierten Stacks auftaucht.

**Prinzipien:**
- Berechnung ausschließlich zum Build-Zeitpunkt in `scripts/generate-data.mjs`
  (Single Source of Truth); Ergebnisse werden in `src/data/items.generated.ts` eingefroren.
- Runtime-Neuberechnung findet nicht statt.
- Der Sovereignty Score bleibt **unverändert** (bewusste Entscheidung).

**Formelelemente:**
| Konzept | Zweck |
|---|---|
| Rollen-Gewicht `ROLE_W` | maintainer 1.0 › contributor 0.8 › consumer 0.5 › funder 0.4 |
| Status-Gewicht `STATUS_W` | recommended 1.0 › approved 0.7 › deprecated 0.1 |
| Größen-Dämpfung `SIZE_DAMP` | `1 / (1 + log10(max(1, n/20)))` — verhindert Dominanz großer Stacks |
| Transitive Coverage (γ=0.3) | Basis-Technologien erben anteilig den Adoption Score ihrer Nutzer |
| Diversitäts-Multiplikator | Simpson-Index über `stack.country`; fehlendes Land → Bucket `_unknown` |
| Sovereign Gate (Schwelle 61) | `sovereignAdoptionScore` zählt nur Stacks/Items mit Sovereignty ≥ 61 |

**Kombinierter Overall Score:**
`overallScore = round(0.60 × sovereignty + 0.25 × sovereignAdoption + 0.15 × adoption)`

Alle Gewichte und Schwellenwerte sind als benannte Konstanten in
`src/utils/adoptionScore.ts` und `src/utils/overallScore.ts` dokumentiert.

### Design

- Branding bleibt 3-layerig fuer kompakte Brand-Assets.
- Produktvisualisierung und Datenmodell duerfen 5-layerig sein.
- Bei Konflikten gilt Datenkonsistenz vor Branding-Vereinfachung.

### Dokumentation

- `docs/README.md` ist das Rahmendokument.
- `docs/BUSSINESS_CASE.md` beschreibt Produkt, Nutzen und fachliches Modell.
- `docs/ARC42.md` beschreibt die technische Architektur.
- `docs/archive/` enthaelt nur historische, nicht normative Inhalte.

### Qualitaet

- Schema-Validierung ueber `pnpm validate-schemas`
- Code-Qualitaet ueber `pnpm lint`
- E2E-Tests ueber `pnpm test:e2e`

## 7. Betrieb

Logo-Prozess:

- Tool: `scripts/fetch-external-logos.mjs`
- Mapping: `src/data/logo-urls.json`
- Fallback: `/assets/broken-logo.svg`
- Prioritaet: Simple Icons -> hinterlegte externe URL -> Wikidata -> Wikipedia

Logo-Commands:

```bash
node scripts/fetch-external-logos.mjs
node scripts/fetch-external-logos.mjs --update
node scripts/fetch-external-logos.mjs --dry-run
node scripts/fetch-external-logos.mjs --validate
```

## 8. Risiken und Altlasten

- Historische React- und MVP-Blueprints liegen im Archiv und duerfen nicht mehr als aktive Spezifikation verwendet werden.
- Dokumentationsdisziplin ist relevant, damit Produkt- und Technikentscheidungen nicht wieder vermischt werden.
