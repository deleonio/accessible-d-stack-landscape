---
focus: scoringExplained
title: Wie entsteht der Score einer Dependency? Ein nachvollziehbares Beispiel mit FastAPI
summary: Anhand von FastAPI wird Schritt für Schritt gezeigt, wie Sovereignty, Sovereign Adoption und Adoption zum Overall Score kombiniert werden.
---

# Wie entsteht der Score einer Dependency? Ein nachvollziehbares Beispiel mit FastAPI

> **Kurzfazit:** Der Overall Score ist eine gewichtete Summe aus drei Teilwerten. Bei FastAPI erklärt vor allem die breite Stack-Adoption den hohen Endwert.

Viele fragen sich: **Wie genau kommt eine einzelne Dependency auf ihren finalen Score?**

Damit das transparent bleibt, rechnen wir ein konkretes Beispiel vollständig durch. Als Beispiel nehmen wir **FastAPI** (ein Building-Block-Framework), weil sich daran alle drei Score-Komponenten gut zeigen lassen.

---

## 1) Die Formel für den Overall Score

| Komponente               | Gewicht | Bedeutung                                                                  |
| :----------------------- | ------: | :------------------------------------------------------------------------- |
| Sovereignty Score        |    60 % | Wie souverän ist das Tool selbst?                                          |
| Sovereign Adoption Score |    25 % | Wie weit ist es in souveränen Stacks verbreitet? (nur bei Sovereignty ≥61) |
| Adoption Score           |    15 % | Allgemeine Stack-Verbreitung inkl. Popularity-Signale                      |

**Formel:**

`Overall = 0,60 × Sovereignty + 0,25 × Sovereign Adoption + 0,15 × Adoption`

---

## 2) Beispiel-Dependency: FastAPI

### 2.1 Sovereignty Score (0–100)

Für FastAPI sind die relevanten Kriterien erfüllt (vereinfachte Darstellung):

| Kriterium             | Punkte |
| :-------------------- | -----: |
| selfHostable          |    +20 |
| openSource            |    +15 |
| dataPortability       |    +15 |
| permissiveLicense     |    +10 |
| openStandards         |    +10 |
| matureProject         |     +5 |
| noTelemetryByDefault  |     +5 |
| ownerType (community) |     +8 |
| euHeadquartered       |     +0 |
| hasAudit              |     +0 |
| **Summe**             | **88** |

➡️ **Sovereignty Score = 88**

Da der Wert über 61 liegt, wird FastAPI auch für den **Sovereign Adoption Score** berücksichtigt.

---

### 2.2 Sovereign Adoption Score (0–100)

Angenommen FastAPI ist in vielen dokumentierten öffentlichen Stacks enthalten (z. B. DE, EU, UK, IN, BR ...), relativ nahe am meistgenutzten Item.

➡️ **Sovereign Adoption Score = 84**

---

### 2.3 Adoption Score inkl. Popularity (0–100)

Zusätzlich wirken allgemeine Verbreitungssignale mit hinein (z. B. aktive Nutzung über mehrere Stacks, Open-Source-Reichweite).

➡️ **Adoption Score = 86**

---

## 3) Konkrete Rechnung

Jetzt setzen wir alles in die Formel ein:

- `0,60 × 88 = 52,8`
- `0,25 × 84 = 21,0`
- `0,15 × 86 = 12,9`

**Overall = 52,8 + 21,0 + 12,9 = 86,7**

➡️ **Finaler Score: rund 87 Punkte**

---

## 4) Warum ist das anschaulich wichtig?

Man sieht direkt:

1. **Sovereignty bleibt der stärkste Hebel** (60 % Gewicht).
2. **Adoption entscheidet über die Differenz im Ranking**, wenn mehrere Tools technisch ähnlich souverän sind.
3. Ein Tool mit guter Technik, aber kaum Stack-Präsenz, kann deutlich niedriger landen.

---

## 5) Mini-Vergleich: Was würde den Score drücken?

Wenn dieselbe Dependency nur in sehr wenigen Stacks vertreten wäre (z. B. Sovereign Adoption 20, Adoption 25), dann ergäbe sich trotz gleicher technischer Qualität:

- `0,60 × 88 = 52,8`
- `0,25 × 20 = 5,0`
- `0,15 × 25 = 3,75`

**Overall = 61,55**

Das zeigt: Nicht nur die Architektur des Tools zählt, sondern auch die nachweisbare Nutzung in realen, souveränen Zielumgebungen.

---

## Fazit

Mit einem einzelnen Beispiel wird das Scoring sofort nachvollziehbar: **Der Overall Score ist keine Blackbox**, sondern eine klare Gewichtung aus Souveränität und Adoption.

Wer den Score einer Dependency verbessern will, braucht daher zwei Dinge:

- technisch souveräne Eigenschaften,
- und dokumentierte Nutzung in möglichst vielen relevanten Stacks.
