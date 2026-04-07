# data/relations/ — Stack-Item Relationen & Souveränitäts-Scoring

Definiert die Beziehung zwischen **Stacks** und **Items** mit Souveränität-Bewertung.

## Übersicht

Eine **Relation** beschreibt:

- **Welche Items** gehören zu einem **Stack**
- **Welche Rolle** das Item im Stack hat (kritisch, empfohlen, optional)
- **Souveränität-Score** des Items im Stack-Kontext
- **Alternativen** für das Item

Dies ermöglicht eine **kontextabhängige Souveränität-Bewertung**.

## Dateistruktur

```json
{
	"stack": "germany-stack",
	"item": "nextjs",
	"role": "recommended",
	"sovereigntyScore": 0.8,
	"rationale": {
		"de": "Next.js ist ein etabliertes React-Framework mit guter Open-Source Community. Score weniger als 1.0 wegen Vercel-Abhängigkeiten.",
		"en": "Next.js is an established React framework with good open-source community. Score less than 1.0 due to Vercel dependencies."
	},
	"alternatives": ["remix", "nuxt"]
}
```

### Felder

| Feld               | Typ    | Beschreibung                                         | Erforderlich |
| ------------------ | ------ | ---------------------------------------------------- | ------------ |
| `stack`            | string | Stack-ID (muss in data/stacks/ existieren)           | ✓            |
| `item`             | string | Item-ID (muss in data/items/ existieren)             | ✓            |
| `role`             | enum   | Rolle (critical, recommended, optional, alternative) | ✓            |
| `sovereigntyScore` | number | Souveränität-Score 0–1 im Stack-Kontext              | ✓            |
| `rationale`        | object | Begründung (de, en, optional fr)                     | ✗            |
| `alternatives`     | array  | Alternative Items                                    | ✗            |

## Rollen (role)

- `maintainer` — Der Stack pflegt und entwickelt dieses Item
- `contributor` — Der Stack trägt zu diesem Item bei (z.B. als Co-Maintainer)
- `funder` — Der Stack finanziert/sponsort dieses Item
- `consumer` — Der Stack konsumiert/nutzt dieses Item

## Souveränität-Score

Der Score (0–1) bewertet die **Souveränität des Items im Kontext des Stacks**:

- `1.0` — Vollständig souverin (vollständig Open-Source, transparent, fair-lizenziert)
- `0.7–0.9` — Überwiegend souverin (kleine Abhängigkeiten zu proprietären Services)
- `0.4–0.6` — Teilweise souverin (gemischte Komponenten)
- `0.0–0.3` — Gering souverin (abhängig von proprietären Lösungen)

**Kontext-abhängig**: Der gleiche Item kann in verschiedenen Stacks unterschiedliche Scores haben!

Beispiel:

```
"nextjs" im "germany-stack": 0.8
  (gute Community, aber Vercel-Cloud-Option möglich)

"nextjs" im "open-source-only-stack": 0.6
  (Deployment auf Vercel ist proprietär)
```

## Datei-Namenkonvention

```
{stack}-{item}.json
```

Beispiele:

- `germany-stack-nextjs.json`
- `germany-stack-postgresql.json`
- `germany-stack-docker.json`

## Validierung

```bash
pnpm validate-schemas
```

→ Validiert gegen `data/schemas/relation.schema.json`

## Neue Relationen erstellen

1. Neue Datei: `data/relations/{stack}-{item}.json`
2. Stack und Item müssen existieren
3. Role und sovereigntyScore ausfüllen
4. Rationale erklären (optional aber empfohlen)
5. `pnpm validate-schemas` → sollte passen
6. Git commit

## Beispiele

### Critical Item — Kubernetes

```json
{
	"stack": "germany-stack",
	"item": "kubernetes",
	"role": "consumer",
	"sovereigntyScore": 0.95,
	"rationale": {
		"de": "Kubernetes ist der Industrie-Standard für Container-Orchestrierung und zu 100% Open-Source (CNCF).",
		"en": "Kubernetes is the industry standard for container orchestration and 100% open-source (CNCF)."
	},
	"alternatives": ["docker-swarm", "nomad"]
}
```

### Recommended Item — PostgreSQL

```json
{
	"stack": "germany-stack",
	"item": "postgresql",
	"role": "consumer",
	"sovereigntyScore": 0.95,
	"rationale": {
		"de": "PostgreSQL ist vollständig Open-Source, sicher und transparent. Perfekt für Souveränität.",
		"en": "PostgreSQL is fully open-source, secure and transparent. Perfect for sovereignty."
	},
	"alternatives": ["mariadb", "cockroachdb"]
}
```

### Optional Item — mit niedrigerem Score

```json
{
	"stack": "germany-stack",
	"item": "vercel",
	"role": "consumer",
	"sovereigntyScore": 0.3,
	"rationale": {
		"de": "Vercel ist proprietär und Cloud-gebunden. Nur als optionale Alternative für schnellere Deployments.",
		"en": "Vercel is proprietary and cloud-bound. Only as optional alternative for faster deployments."
	},
	"alternatives": ["netlify", "github-pages"]
}
```

## Use-Cases

1. **Souveränität-Reporting**: Pro Stack die durchschnittliche Souveränität berechnen
2. **Stack-Vergleich**: Zwei Stacks nach Souveränität-Score vergleichen
3. **Item-Bewertung**: Items mit hohem Score über Stacks hinweg bevorzugen
4. **Policy-Enforcement**: "Items mit Score < 0.6 nicht verwenden"
5. **Kontextabhängige Bewertung**: Gleicher Item, unterschiedliche Scores je nach Stack

## Schema

Siehe [data/schemas/relation.schema.json](../schemas/relation.schema.json)

## Tipps

- **Score konsistent bewerten**: Gleiche Kriterien für alle Items/Stacks verwenden
- **Rationale ist wichtig**: Erklärt die Entscheidung für zukünftige Reviewer
- **Alternativen nennen**: Hilft bei Stack-Anpassungen
- **Regelmäßig überprüfen**: Score bei veränderten Bedingungen aktualisieren
- **Kontext-abhängig**: Nicht jeder Item ist in jedem Stack gleich relevant
