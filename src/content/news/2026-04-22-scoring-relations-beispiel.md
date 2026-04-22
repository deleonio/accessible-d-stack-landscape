---
focus: scoringExplained
title: Scoring verständlich gemacht: So wirken Relationen zu Dependencies auf den Stack-Score
summary: An einem konkreten Mini-Beispiel zeigen wir Schritt für Schritt, wie sich direkte und indirekte Dependencies auf den Gesamtscore eines Stacks auswirken.
---

# Scoring verständlich gemacht: So wirken Relationen zu Dependencies auf den Stack-Score

Viele Rückfragen drehen sich um denselben Punkt: **Warum verändert sich der Stack-Score, obwohl ich nur eine einzelne Dependency angepasst habe?**

Die kurze Antwort: Ein Stack wird nicht nur über isolierte Einzelwerte bewertet, sondern über seine **Relationen** im Abhängigkeitsnetz.

## Ein anschauliches Beispiel

Nehmen wir einen fiktiven Stack **„Bürgerportal X“** mit drei zentralen Bausteinen:

- **Frontend Framework A**
- **API Gateway B**
- **Identity Service C**

Und dazu vier relevante Dependencies:

- **D1 OpenID Provider** (kritisch für Anmeldung)
- **D2 Logging Stack** (wichtig für Betrieb)
- **D3 Build Tooling** (nur Entwicklung)
- **D4 Proprietäre Spezialbibliothek** (funktional stark, aber mit Exit-Risiko)

## Schritt 1: Basisscore der direkten Dependencies

Zuerst werden die direkt angebundenen Dependencies bewertet (z. B. Offenheit, Wartbarkeit, Sicherheit, Exit-Fähigkeit). Daraus entsteht ein erster gewichteter Mittelwert.

| Dependency | Rolle im Stack     | Beispiel-Teilscore |
| :--------- | :----------------- | -----------------: |
| D1         | Authentifizierung  |                 82 |
| D2         | Betrieb/Monitoring |                 74 |
| D3         | Dev-Only           |                 68 |
| D4         | Laufzeit-kritisch  |                 46 |

> Obwohl D3 einen eher mittleren Score hat, ist der Einfluss geringer, weil die Relation als **Development** klassifiziert ist.

## Schritt 2: Einfluss der Relations-Typen

Nicht jede Verbindung zählt gleich stark. In der Praxis wirkt meist:

- **required** stärker als **optional**
- **runtime-kritisch** stärker als **dev-only**
- **viele Verwendungen derselben Dependency** stärker als Einzelfälle

Im Beispiel zieht **D4** den Stack deutlich nach unten, weil sie

1. runtime-kritisch ist,
2. von mehreren Kernkomponenten genutzt wird,
3. ein hohes Vendor-Lock-in-Risiko mitbringt.

## Schritt 3: Indirekte Ketteneffekte

Jetzt kommt der Teil, der häufig überrascht: Auch **indirekte Relationen** spielen mit.

Wenn **D1 OpenID Provider** selbst stark an eine proprietäre Unterkomponente gebunden ist, sinkt sein effektiver Beitrag zum Stack-Score. Das heißt:

- D1 bleibt formal „gut“,
- erhält aber einen Abschlag über die nachgelagerte Risiko-Kette,
- und reduziert damit den Gesamtscore von „Bürgerportal X“ zusätzlich.

## Ergebnis im Beispiel

Ohne relationale Gewichtung läge der Stack vielleicht bei **~68 Punkten**.
Mit Relationstypen + indirekten Ketteneffekten landet er nachvollziehbar bei **~61 Punkten**.

Der Unterschied entsteht also nicht durch Willkür, sondern durch drei transparente Prinzipien:

1. **Direkte Qualität der Dependencies**
2. **Gewichtung nach Relationstyp und Kritikalität**
3. **Risikovererbung über Abhängigkeitsketten**

## Warum das wichtig ist

Genau diese Sicht hilft bei priorisierten Verbesserungen:

- Nicht jede schwache Dependency ist sofort kritisch.
- Eine einzige hochkritische, stark vernetzte Dependency kann den größten Hebel haben.
- Verbesserungen an zentralen Knoten wirken oft stärker als viele kleine Optimierungen am Rand.

## Praktischer Takeaway

Wer den Stack-Score verbessern will, sollte in dieser Reihenfolge vorgehen:

1. **Kritische required-Runtime-Dependencies** prüfen
2. **Mehrfach genutzte Knoten** (mit vielen eingehenden Relationen) priorisieren
3. **Indirekte Lock-in-Ketten** auflösen
4. Erst danach reine Dev-Dependencies feinjustieren

So wird aus einer abstrakten Zahl ein konkret steuerbares Verbesserungsprogramm.
