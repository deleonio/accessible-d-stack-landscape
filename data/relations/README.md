# data/relations/ — Item-Relationen & Kompatibilität

Definiert Beziehungen und Kompatibilität zwischen Items.

## Übersicht

**Relationen** beschreiben **Abhängigkeiten, Komplementarität oder Konkurrenz** zwischen Items.

Beispiele:

- React _requires_ Node.js
- PostgreSQL _complements_ Node.js
- Svelte _replaces_ Vue

## Dateistruktur

```json
{
	"from": "react",
	"to": "nodejs",
	"relation": "requires",
	"notes": { "de": "...", "en": "..." }
}
```

### Felder

| Feld       | Typ    | Beschreibung               | Erforderlich |
| ---------- | ------ | -------------------------- | ------------ |
| `from`     | string | Source Item-ID             | ✓            |
| `to`       | string | Target Item-ID             | ✓            |
| `relation` | enum   | Relationstyp (siehe unten) | ✓            |
| `notes`    | object | Optionale Notizen (de, en) | ✗            |

## Relationstypen

| Typ           | Bedeutung                  | Beispiel                       |
| ------------- | -------------------------- | ------------------------------ |
| `requires`    | **Benötigt/Abhängig von**  | React requires Node.js         |
| `complements` | **Ergänzt/Passt gut zu**   | PostgreSQL complements Node.js |
| `replaces`    | **Alternative/Ersatz für** | Svelte replaces React          |

## Datei-Namenkonvention

Eindeutige Dateiname für jede Relation:

- `{from}-to-{to}.json`
- Beispiele:
  - `react-requires-nodejs.json`
  - `postgresql-complements-nodejs.json`
  - `svelte-replaces-vue.json`

## Validierung

```bash
pnpm validate-schemas
```

→ Validiert gegen `data/schemas/relation.schema.json`

## Neue Relationen erstellen

1. Neue Datei: `data/relations/{from}-{relation}-{to}.json`
2. Beide Item-IDs müssen in `data/items/` existieren
3. `pnpm validate-schemas` → sollte passen
4. Git commit

## Wichtige Regeln

- **Bidirektionalität**: Nicht zwingend symmetrisch
  - `react-requires-nodejs` ≠ `nodejs-requires-react`
  - React _braucht_ Node.js, aber Node.js _braucht_ nicht React

- **Eindeutigkeit**: Pro `from` + `to` + `relation` nur eine Datei

- **Optionale Notizen**: Erkläre kontextspezifische Details

## Beispiele

### Requires (Abhängigkeit)

```json
{
	"from": "react",
	"to": "nodejs",
	"relation": "requires",
	"notes": {
		"de": "React erfordert Node.js zur Entwicklung und zum Build-Prozess",
		"en": "React requires Node.js for development and build process"
	}
}
```

### Complements (Ergänzung)

```json
{
	"from": "postgresql",
	"to": "nodejs",
	"relation": "complements",
	"notes": {
		"de": "PostgreSQL ergänzt Node.js perfekt als sichere Datenbank-Lösung",
		"en": "PostgreSQL complements Node.js as a secure database solution"
	}
}
```

### Replaces (Alternative)

```json
{
	"from": "svelte",
	"to": "vue",
	"relation": "replaces",
	"notes": {
		"de": "Svelte kann als leichtgewichtige Alternative zu Vue verwendet werden",
		"en": "Svelte can be used as a lightweight alternative to Vue"
	}
}
```

## Analytics

- Relationen helfen beim Aufbau von **Kompatibilität-Graphen**
- Können für **Visualisierung** in UI verwendet werden
- Unterstützen **Stack-Empfehlungen** (best matching items)

## Schema

Siehe [data/schemas/relation.schema.json](../schemas/relation.schema.json)

## Tipps

- **Begrenzt halten**: Nur wichtige/explizite Relationen erfassen
- **Dokumentieren**: Notes helfen anderen zu verstehen
- **Bidirektional denken**: Überlege für direkte Relationen auch Rückrichtung
- **Regelmäßig updaten**: Neue Items → neue Relations prüfen
