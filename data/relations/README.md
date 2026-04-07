# data/relations/ — Stack-Item Relationen (Rollenbeziehung)

Definiert die **Rollenbeziehung** zwischen einem **Stack (Land)** und einem **Item**.

## Übersicht

Eine **Relation** beschreibt:

- **Welcher Stack** hat eine Beziehung zu welchem **Item**
- **Welche Rolle** das Land/der Stack gegenüber dem Item einnimmt
- **Begründung** für die Rolleneinschätzung
- **Alternativen** für das Item

Der **Souveränitäts-Score wird berechnet**, nicht manuell gesetzt:
`Kombinierter Score = Item-Score (aus sovereigntyCriteria) × Rollen-Multiplikator`

## Dateistruktur

```json
{
	"stack": "germany",
	"item": "kubernetes",
	"role": "consumer",
	"rationale": {
		"de": "Deutschland nutzt Kubernetes als Industrie-Standard, ist aber nur Konsument.",
		"en": "Germany uses Kubernetes as industry standard but is only a consumer."
	},
	"alternatives": ["docker-swarm", "nomad"]
}
```

### Felder

| Feld           | Typ    | Beschreibung                               | Erforderlich |
| -------------- | ------ | ------------------------------------------ | ------------ |
| `stack`        | string | Stack-ID (muss in data/stacks/ existieren) | ✓            |
| `item`         | string | Item-ID (muss in data/items/ existieren)   | ✓            |
| `role`         | enum   | Rollenbeziehung des Landes zum Item        | ✓            |
| `rationale`    | object | Begründung (de, en, optional fr)           | ✗            |
| `alternatives` | array  | Alternative Items                          | ✗            |

## Rollen & Multiplikatoren

| Rolle         | Multiplikator | Beschreibung                                        |
| ------------- | ------------- | --------------------------------------------------- |
| `maintainer`  | ×1.0          | Das Land pflegt und entwickelt dieses Item aktiv    |
| `contributor` | ×0.75         | Das Land trägt aktiv bei (Code, Standards, Reviews) |
| `funder`      | ×0.5          | Das Land finanziert/sponsort dieses Item            |
| `consumer`    | ×0.25         | Das Land nutzt dieses Item nur als Konsument        |

## Scoring-Beispiel

```
kubernetes: sovereigntyCriteria = 75 Punkte (intrinsisch)
Rolle Deutschland: consumer (×0.25)
→ Kombinierter Score = 75 × 0.25 = 18.75 Punkte

openDesk: sovereigntyCriteria = 95 Punkte (intrinsisch)
Rolle Deutschland: maintainer (×1.0)
→ Kombinierter Score = 95 × 1.0 = 95.0 Punkte
```

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
