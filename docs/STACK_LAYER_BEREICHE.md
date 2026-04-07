# Stack-Layer-Zuordnung (Vorgaben)

Diese Zuordnungstabelle ist die **autoritative Referenz** für die Einordnung von Technologien im Sovereign Stack.
Sie wird kontinuierlich weiterentwickelt und muss mit den Daten in `data/layers/` und `data/items/` übereinstimmen.

## Ziel

- Einheitliche Sprache für Architektur-, Produkt- und Plattformdiskussionen
- Klare Zuordnung jeder Technologie zu einem Layer und einem Sublayer (Bereich)
- Bessere Entscheidungsgrundlagen für Einführung, Ablösung und Standardisierung

## Pflichtschema für neue Technologien

Jede neu aufgenommene Technologie muss die folgenden Felder erhalten:

1. **Layer** (einer der 5 definierten Layer-IDs)
2. **Sublayer** (einer der definierten Bereiche innerhalb des Layers)
3. **Primäre Aufgabe** (Freitext)

Optional:

- Reifegrad (`sandbox`, `incubation`, `graduated`)
- Owner-Team
- Alternativen

## 5-Layer-Modell

| Order | Layer-ID              | Name (DE)              | Name (EN)           | Farbe     |
| :---: | :-------------------- | :--------------------- | :------------------ | :-------- |
|   1   | `infrastructure`      | Infrastruktur          | Infrastructure      | `#c5192d` |
|   2   | `platform`            | Plattform              | Platform            | `#1a56a0` |
|   3   | `building-blocks`     | Bausteine              | Building Blocks     | `#00883d` |
|   4   | `applications`        | Anwendungen            | Applications        | `#f39c12` |
|   5   | `sovereign-standards` | Souveränitätsstandards | Sovereign Standards | `#e8e8e8` |

## Sublayer-Zuordnung

### 1. Infrastructure (27 Items)

| Sublayer-ID  | Bereich (DE)              | Primäre Aufgabe                                  | Typische Beispiele                        |
| :----------- | :------------------------ | :----------------------------------------------- | :---------------------------------------- |
| `anschluss`  | Anschluss & Konnektivität | Physische und drahtlose Verbindungstechnologien  | Bluetooth, Glasfaser, Mobilfunk, WiFi     |
| `transport`  | Transport & Protokolle    | Datenübertragung und Transportschicht-Protokolle | HTTP, TLS, TCP, UDP, QUIC, IPv6, JWT      |
| `verteilung` | Verteilung & Routing      | Netzwerk-Routing, DNS und Verteilungsmechanismen | BGP, DNS, DHCP, IPSec, OSPF, MPLS, SD-WAN |

### 2. Platform (60 Items)

| Sublayer-ID   | Bereich (DE)                 | Primäre Aufgabe                                   | Typische Beispiele                          |
| :------------ | :--------------------------- | :------------------------------------------------ | :------------------------------------------ |
| `daten`       | Daten & Persistenz           | Datenhaltung, -formate und -kataloge              | PostgreSQL, MongoDB, MariaDB, Neo4j, CKAN   |
| `integration` | Integration & Orchestrierung | Container, Service Mesh, API-Gateways, Ingress    | Kubernetes, Docker Swarm, Istio, Kong, REST |
| `ki`          | Künstliche Intelligenz       | ML-Frameworks, Agenten-Protokolle und KI-Tooling  | PyTorch, TensorFlow, Huggingface, MCP       |
| `lowcode`     | Low Code & Automatisierung   | Visuelle Entwicklung und Workflow-Automatisierung | N8N, Node-Red, Appsmith, Budibase           |

### 3. Building Blocks (37 Items)

| Sublayer-ID      | Bereich (DE)              | Primäre Aufgabe                                   | Typische Beispiele                       |
| :--------------- | :------------------------ | :------------------------------------------------ | :--------------------------------------- |
| `entwicklung`    | Entwicklung & Sprachen    | Programmiersprachen, Frameworks und UI-Toolkits   | TypeScript, Java, Python, React, Angular |
| `inbetriebnahme` | Inbetriebnahme & CI/CD    | Build-, Test- und Deploy-Pipelines                | GitLab, GitHub Actions, Jenkins, Flux    |
| `sicherheit`     | Sicherheit & Kryptografie | Verschlüsselung, Authentifizierung, Autorisierung | AES, RSA, OIDC, OAuth, Kerberos          |

### 4. Applications (5 Items)

| Sublayer-ID   | Bereich (DE)       | Primäre Aufgabe                        | Typische Beispiele   |
| :------------ | :----------------- | :------------------------------------- | :------------------- |
| `browser`     | Browser-Engines    | Web-Rendering und Browser-Technologien | Blink, Gecko, WebKit |
| `native-apps` | Native Plattformen | Mobile und Desktop-Betriebssysteme     | Android, iOS         |

### 5. Sovereign Standards (0 Items)

| Sublayer-ID     | Bereich (DE)            | Primäre Aufgabe                                      | Typische Beispiele |
| :-------------- | :---------------------- | :--------------------------------------------------- | :----------------- |
| `ux`            | Design Systems & UX     | Barrierefreie, wiederverwendbare UI-Bausteine        | KoliBri, KERN-UX   |
| `kommunikation` | Souveräne Kommunikation | Sichere, vertrauenswürdige Kommunikationsplattformen | BundesMessenger    |
| `ki-souveraen`  | Souveräne KI            | KI-Modelle und -Dienste unter eigener Hoheit         | F13, Aleph Alpha   |

> **Hinweis:** Der Layer `sovereign-standards` enthält aktuell noch keine Items in den Datendateien.
> Die Sublayer sind als Vorschlag definiert und sollten befüllt werden.

## Übersicht aller Sublayer

| Layer                 | Sublayer-ID      |   Items |
| :-------------------- | :--------------- | ------: |
| `infrastructure`      | `anschluss`      |       4 |
| `infrastructure`      | `transport`      |      12 |
| `infrastructure`      | `verteilung`     |      11 |
| `platform`            | `daten`          |      22 |
| `platform`            | `integration`    |      18 |
| `platform`            | `ki`             |      18 |
| `platform`            | `lowcode`        |       5 |
| `building-blocks`     | `entwicklung`    |      16 |
| `building-blocks`     | `inbetriebnahme` |       7 |
| `building-blocks`     | `sicherheit`     |       8 |
| `applications`        | `browser`        |       3 |
| `applications`        | `native-apps`    |       2 |
| `sovereign-standards` | –                |       0 |
| **Gesamt**            |                  | **126** |

## Arbeitsmodus

- Änderungen als PR mit kurzer Begründung
- Neue Technologien einer bestehenden Sublayer-ID zuordnen; neue Sublayer nur nach Abstimmung
- Pro Technologie nur **eine primäre** Zuordnung (Layer + Sublayer)
- Quartalsweise Review der Einordnung und des Reifegrads
- Dieses Dokument und die JSON-Dateien in `data/` müssen synchron gehalten werden
