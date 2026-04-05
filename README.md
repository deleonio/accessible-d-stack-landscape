# D-Stack Landscape

Interaktive Technologie-Übersicht für ein modernes, barrierefreies Digital-Ökosystem.

**Live:** [Projekt-Demo auf GitHub Pages](https://deleonio.github.io/accessible-d-stack-landscape/)

---

## Über das Projekt

Die D-Stack Landscape visualisiert Technologien, Komponenten und Protokolle, die in einer modularen Plattformarchitektur eingesetzt oder evaluiert werden. Technologien sind in vier Kategorien unterteilt:

| Kategorie | Farbe | Beschreibung |
|---|---|---|
| **Betrieb** | Grün | Operativer Betrieb und Sicherheit |
| **Infrastruktur** | Rot | Technische Infrastruktur |
| **Plattform** | Blau | Plattformen und Protokolle |
| **Zugang** | Orange | Nutzer-Zugang und Endgeräte |

Die Anwendung ist **barrierefrei** entwickelt:
- Barrierefreie UI-Komponenten via [KoliBri](https://public-ui.github.io/) (accessible component system)
- Automatisierte Accessibility-Tests mit [axe-core](https://github.com/dequelabs/axe-core) (WCAG 2.1 AA)
- ESLint-Plugin `jsx-a11y` für statische Barrierefreiheitsprüfung

---

## Tech Stack

| Bereich | Technologie |
|---|---|
| UI-Framework | [Preact](https://preactjs.com/) 10 |
| Sprache | TypeScript |
| Build-Tool | [Vite](https://vite.dev/) |
| Styling | [UnoCSS](https://unocss.dev/), SCSS |
| Komponenten | [KoliBri](https://public-ui.github.io/) (KERN V2) |
| Formulare | React Hook Form + Zod |
| PWA | vite-plugin-pwa, Workbox |
| Mobile | [Capacitor](https://capacitorjs.com/) (Android/iOS) |
| Tests | [Playwright](https://playwright.dev/), axe-core |
| Linting | ESLint, stylelint, Prettier, Knip |

---

## Deployment

Die Anwendung wird automatisch auf **GitHub Pages** deployed.

| Ereignis | Deployment |
|---|---|
| Push auf `main` | Produktion: `https://deleonio.github.io/accessible-d-stack-landscape/` |
| Pull Request | PR-Preview: `.../pr-preview/pr-{nr}/` |
| PR geschlossen | Preview wird automatisch bereinigt |

Der Deployment-Workflow befindet sich in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## Lokale Entwicklung

### Voraussetzungen

- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/) (empfohlen)

### Installation

```bash
pnpm install
```

### Entwicklungsserver starten

```bash
pnpm start
```

Die Anwendung läuft dann unter [http://localhost:5173](http://localhost:5173).

### Produktions-Build

```bash
pnpm build
```

Das Build-Ergebnis wird im Verzeichnis `dist/` abgelegt.

### Build-Vorschau

```bash
pnpm preview
```

---

## Verfügbare Scripts

| Script | Beschreibung |
|---|---|
| `pnpm start` | Entwicklungsserver starten |
| `pnpm build` | Produktions-Build erstellen |
| `pnpm preview` | Build-Vorschau starten |
| `pnpm lint` | TypeScript-Typen prüfen |
| `pnpm eslint` | ESLint-Analyse ausführen |
| `pnpm stylelint` | CSS/SCSS-Linting ausführen |
| `pnpm format` | Prettier-Formatierung prüfen |
| `pnpm check-unused` | Ungenutzte Abhängigkeiten prüfen (Knip) |
| `pnpm check-updates` | Verfügbare Paket-Updates anzeigen |
| `pnpm update` | Alle Pakete aktualisieren |
| `pnpm test:e2e` | E2E-Tests mit Playwright ausführen |
| `pnpm test:e2e:ui` | E2E-Tests mit Playwright-UI ausführen |
| `pnpm mobile:build` | Build + Capacitor-Sync für Mobile |

---

## Tests

### End-to-End-Tests

```bash
pnpm test:e2e
```

Tests befinden sich in `e2e/` und prüfen Header, Suchleiste, Kategorie-Grid und Footer.

### Accessibility-Tests

```bash
pnpm test:e2e
```

Die Datei `e2e/axe.spec.ts` führt automatisierte WCAG-2.1-AA-Prüfungen mit axe-core aus.

---

## CI/CD

Drei GitHub Actions Workflows:

### CI ([`.github/workflows/ci.yml`](.github/workflows/ci.yml))

Läuft bei jedem Push und Pull Request:

1. TypeScript-Typenprüfung
2. ESLint
3. stylelint
4. Prettier (Formatierungsprüfung)
5. Knip (ungenutzte Abhängigkeiten)
6. Vite-Build
7. Playwright E2E-Tests (inkl. Accessibility)

### Deploy ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml))

- Push auf `main` → Deployment auf GitHub Pages
- Pull Requests → PR-Preview-Deployment
- PR geschlossen → Preview-Bereinigung

### CodeQL ([`.github/workflows/codeql.yml`](.github/workflows/codeql.yml))

Statische Sicherheitsanalyse des Quellcodes.

---

## Projektstruktur

```
src/
├── components/       # UI-Komponenten (Header, SearchBar, CategoryGrid, Footer, ArticleCard)
├── data/             # Technologie-Daten (articles.ts)
├── hooks/            # Custom Hooks (useFilters.ts)
├── types/            # TypeScript-Typen
├── App.tsx           # Haupt-Komponente
└── preact.main.tsx   # Einstiegspunkt mit KoliBri-Setup
e2e/                  # Playwright E2E- und Accessibility-Tests
.github/workflows/    # CI/CD-Konfiguration
```

---

## Beitragen

1. Fork erstellen
2. Feature-Branch anlegen (`git checkout -b feature/mein-feature`)
3. Änderungen committen
4. Branch pushen
5. Pull Request öffnen — PR-Previews werden automatisch erstellt
