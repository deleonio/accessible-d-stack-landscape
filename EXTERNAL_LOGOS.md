# External Logo Management

Dieses Projekt nutzt externe Logo-URLs von öffentlichen Quellen statt lokaler Speicherung. Das reduziert die Repository-Größe und stellt sicher, dass stets aktuelle offizielle Logos angezeigt werden.

Alle 128 Artikel werden mit einem sichtbaren Logo angezeigt — entweder das echte oder ein Fallback-Placeholder für Einträge ohne öffentliches Logo.

## Aufruf

```bash
# Neue Logo-URLs auflösen (überspringt bereits verifizierte Einträge)
pnpm run fetch-logos

# Alle Einträge neu auflösen (auch bereits verifizierte)
pnpm run fetch-logos:update

# Trockentest: Zeigt was gemacht würde, ohne Dateien zu schreiben
pnpm run fetch-logos:dry-run

# Erreichbarkeit aller URLs prüfen
pnpm run validate-logos

# Validierungsbericht als JSON speichern
pnpm run validate-logos:report
```

## Output-Schema

Das Script erstellt `src/data/logo-urls.json`:

```json
{
	"Angular": {
		"url": "https://cdn.simpleicons.org/angular",
		"source": "simple-icons",
		"verified": true,
		"accessed": "2026-04-06"
	},
	"Kubernetes": {
		"url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kubernetes_logo.svg",
		"source": "wikidata",
		"verified": true,
		"accessed": "2026-04-06"
	},
	"BGP": {
		"url": null,
		"source": null,
		"verified": false,
		"accessed": "2026-04-06"
	}
}
```

| Feld       | Beschreibung                                             |
| ---------- | -------------------------------------------------------- |
| `url`      | Externe Logo-URL oder `null` wenn nicht gefunden         |
| `source`   | Herkunft: `simple-icons`, `csv`, `wikidata`, `wikipedia` |
| `verified` | `true` wenn URL per HTTP-Request bestätigt wurde         |
| `accessed` | Datum der letzten Auflösung                              |

## Logo-Quellen (Priorität)

Das Script durchläuft folgende Quellen in dieser Reihenfolge:

1. **Simple Icons CDN** (`https://cdn.simpleicons.org/{slug}`)
   - Über 3300 Brand-SVGs, keine Authentifizierung nötig
   - Zuverlässigstes CDN, kein separater HTTP-Check erforderlich
   - Slug-Zuordnung via `SLUG_OVERRIDES` für abweichende CSV-Namen

2. **Externe URLs aus CSV** (`data/items.csv`)
   - Items mit bereits eingetragener `https://`-URL werden direkt verwendet
   - URL-Erreichbarkeit wird per HTTP-Request geprüft

3. **Wikidata P154 / P18** (Logo- und Bildeigenschaften)
   - Wikidata-API: `wbsearchentities` + `wbgetentities`
   - Eigenschaft P154 = offizielles Logo, P18 = Bild
   - Suchanfragen via `WIKIDATA_SEARCH_HINTS` für mehrdeutige Namen

4. **Wikipedia Seitenbild** (`pageimages`-API)
   - Letzter Ausweg — gibt das Hauptbild der Wikipedia-Seite zurück
   - ⚠️ Kann unpassende Bilder liefern (z. B. Illustrationen statt Logos)

## Aktueller Stand

Von 128 Items in `data/items.csv` wurden **82 Logo-URLs gefunden** (Stand: April 2026):

| Quelle             | Anzahl |
| ------------------ | ------ |
| Simple Icons       | 69     |
| CSV extern         | 5      |
| Wikidata           | 1      |
| Wikipedia          | 7      |
| **Nicht gefunden** | **46** |

Die 46 fehlenden Items sind hauptsächlich Netzwerkprotokolle und Infrastruktur-Standards
(BGP, DHCP, MPLS, IPv6, TLS, QUIC, TCP, UDP, FIDO2 u. a.), für die keine öffentlichen
Logos existieren.

## Anpassung

**Neue Slug-Zuordnung** (wenn CSV-Name ≠ Simple Icons Titel):

```js
// scripts/fetch-external-logos.mjs
const SLUG_OVERRIDES = {
	'mysql server': 'mysql', // CSV-Name → Simple Icons Slug
	nextjs: 'nextdotjs',
	// …
};
```

**Suchhilfe für Wikidata** (bei mehrdeutigen Namen):

```js
const WIKIDATA_SEARCH_HINTS = {
	java: 'Java programming language',
	go: 'Go programming language',
	// …
};
```

## Integration & Fallback-Strategie

Die Logos werden automatisch bei der Artikel-Generierung integriert. `generate-articles.mjs` nutzt folgende Priorität:

1. **CSV-Logo** (falls externe http/https-URL)
2. **logo-urls.json** (falls verifizierte URL vorhanden)
3. **Fallback: `/assets/broken-logo.svg`** (wenn keine URL verfügbar)

```js
// Aus generate-articles.mjs:
// Alle 128 Artikel erhalten automatisch ein Logo:
const logo = csvLogo || logoUrlsEntry?.url || '/assets/broken-logo.svg';
```

**Wichtig:** Alle 128 Artikel sind garantiert mit einem sichtbaren Logo versehen — entweder dem korrekten oder dem Fallback-Placeholder.

## Wartung

```bash
# Erreichbarkeit aller eingetragenen URLs prüfen
pnpm run validate-logos

# Alle URLs neu auflösen (nach größeren Datenänderungen)
pnpm run fetch-logos:update
```

## Lizenzierung

| Quelle                       | Lizenz                                                    |
| ---------------------------- | --------------------------------------------------------- |
| Simple Icons                 | CC0 1.0 (Farbdaten), Markenlogos unter Vendor-Richtlinien |
| Wikidata / Wikimedia Commons | CC0 / CC-BY-SA / Vendor-Lizenzen                          |
| Externe CSV-URLs             | Vendor-Lizenzen (meist frei für Dokumentation)            |
