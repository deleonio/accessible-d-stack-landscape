# GovStack Landscape

Interaktive Vergleichsplattform für staatliche Tech-Stacks. Die Anwendung hilft dabei, digitale Architekturen verschiedener Regierungen transparent zu vergleichen, Synergien zu erkennen und technologische Souveränität nachvollziehbar zu bewerten.

**Live:** [Projekt-Demo auf GitHub Pages](https://deleonio.github.io/accessible-d-stack-landscape/)

---

## Zielbild

Die App unterstützt Teams aus öffentlicher Verwaltung, Architektur und Governance bei drei Kernaufgaben:

1. **Vergleichen:** Welche Technologien setzen unterschiedliche Regierungen in den Bereichen Infrastruktur, Plattform, Betrieb und Zugang ein?
2. **Synergien finden:** Wo gibt es gemeinsame Standards, wiederverwendbare Komponenten und Interoperabilitäts-Potenziale?
3. **Souveränität scoren:** Wie unabhängig, nachvollziehbar und resilient ist ein Stack entlang definierter Kriterien?

---

## Fachliches Modell

Jeder Stack wird in vier Dimensionen strukturiert:

| Dimension         | Fokus                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| **Betrieb**       | Betriebssicherheit, Monitoring, Incident- und Compliance-Fähigkeit    |
| **Infrastruktur** | Hosting, Netzwerk, Basisdienste, Cloud-/On-Prem-Strategie             |
| **Plattform**     | APIs, Standards, Integrationsschicht, Daten- und Service-Orchestrierung |
| **Zugang**        | Frontends, Endgeräte, Identität, Nutzerfreundlichkeit und Accessibility |

Zusätzlich können Technologien mit Metadaten angereichert werden, z. B. Reifegrad, Standardisierung, Herstellerabhängigkeit, Open-Source-Anteil oder regulatorische Eignung.

---

## Souveränitäts-Score (Konzept)

Der Souveränitäts-Score macht Unterschiede zwischen Regierungs-Stacks vergleichbar. Eine mögliche Bewertungslogik kombiniert:

- **Offenheit:** Einsatz offener Standards und Schnittstellen
- **Unabhängigkeit:** Vendor-Lock-in-Risiko und Exit-Fähigkeit
- **Betriebsfähigkeit:** Eigenbetrieb, Portabilität, Krisenfestigkeit
- **Nachvollziehbarkeit:** Dokumentation, Auditierbarkeit, Governance
- **Barrierefreiheit & Inklusion:** Zugänglichkeit als Qualitäts- und Teilhabekriterium

Die Gewichtung kann je nach Land, Behörde oder Programmziel konfiguriert werden.

---

## Synergie-Analyse

Die Anwendung kann Synergien auf mehreren Ebenen sichtbar machen:

- **Gemeinsame Komponenten** zwischen Regierungs-Stacks
- **Standardisierungsgrad** über Länder- oder Behörden-Grenzen hinweg
- **Konsolidierungs-Potenziale** für Beschaffung, Betrieb und Wartung
- **Wiederverwendbare Referenzmuster** für neue digitale Vorhaben

So entsteht eine belastbare Grundlage für Kooperationen, Nachnutzung und strategische Investitionsentscheidungen.

---

## Accessibility by Design

Das Projekt ist barrierefrei konzipiert, damit die Plattform selbst den Anspruch digitaler Teilhabe erfüllt:

- Barrierefreie UI-Komponenten via [KoliBri](https://public-ui.github.io/)
- Automatisierte Accessibility-Tests mit [axe-core](https://github.com/dequelabs/axe-core)
- Statische Prüfungen mit `eslint-plugin-jsx-a11y`

---

## Tech Stack

| Bereich      | Technologie                                         |
| ------------ | --------------------------------------------------- |
| UI-Framework | [Preact](https://preactjs.com/) 10                  |
| Sprache      | TypeScript                                          |
| Build-Tool   | [Vite](https://vite.dev/)                           |
| Styling      | [UnoCSS](https://unocss.dev/), SCSS                 |
| Komponenten  | [KoliBri](https://public-ui.github.io/)             |
| Formulare    | React Hook Form + Zod                               |
| PWA          | vite-plugin-pwa, Workbox                            |
| Mobile       | [Capacitor](https://capacitorjs.com/) (Android/iOS) |
| Tests        | [Playwright](https://playwright.dev/), axe-core     |
| Linting      | ESLint, stylelint, Prettier, Knip                   |

---

## Lokale Entwicklung

### Voraussetzungen

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/)

### Setup

```bash
pnpm i
```

### Entwicklungsserver

```bash
pnpm dev
```

Lokal unter: [http://localhost:5173](http://localhost:5173)

### Qualitätschecks

```bash
pnpm lint
pnpm eslint
pnpm stylelint
pnpm format
pnpm build
```

### E2E-Tests

```bash
pnpm test:e2e
```

---

## Projektstruktur

```text
src/
├── components/  # UI-Komponenten
├── data/        # Katalog- und Vergleichsdaten
├── hooks/       # Zustands- und Filterlogik
├── types/       # Typdefinitionen
├── utils/       # Auswertungs- und Hilfsfunktionen
└── App.tsx      # Hauptanwendung
scripts/         # Generatoren für Daten und Assets
public/          # Statische Assets
```

---

## Vision

GovStack Landscape soll sich zu einem offenen Werkzeugkasten für digitale Staatlichkeit entwickeln: vergleichbar, wiederverwendbar, zugänglich und souverän.
