# Stack-Layer-Zuordnung (app-konsistent + Bereichs-Mapping)

Dieses Dokument beschreibt die **verbindliche Layer-Systematik der App** und ordnet die bisherigen „Bereiche/Familien“ als **Sublayer** in die vorhandenen App-Layer ein.

Technisch maßgeblich bleiben die Layer-IDs aus `data/layers/*.json`.

## Gültige Layer in dieser App

Reihenfolge und IDs:

1. `infrastructure`
2. `platform`
3. `building-blocks`
4. `applications`
5. `sovereign-standards`

## Pflichtschema für neue Technologien

Jede neue Technologie braucht mindestens:

1. **Layer** (aus der Liste oben)
2. **Sublayer/Bereich** (aus den unten definierten Bereichen)
3. **Primäre Aufgabe**

Optional:

- Reifegrad (`assess`, `trial`, `adopt`, `hold`, `graduated`)
- Owner-Team
- Alternativen

## Zielbild: Alle Bereiche als Sublayer in den App-Layern

> Hinweis: Das ist ein fachliches Zuordnungsmodell. Die bestehenden technischen Sublayer in den JSON-Daten (`anschluss`, `daten`, `ki` usw.) können weitergeführt werden; dieses Mapping ergänzt sie semantisch für Governance und Pflege.

| Layer (ID) | Bereich/Sublayer | Beschreibung | Typische Beispiele |
| --- | --- | --- | --- |
| `infrastructure` | `network-delivery` | Netz, Transport, Edge und Auslieferung bis zur Plattformkante. | CDN, DNS, TCP, QUIC, WAF |
| `infrastructure` | `runtime-hosting` | Laufzeitnahe Basisdienste und Ausführungsumgebungen. | Container Runtime, Kubernetes Nodes |
| `infrastructure` | `security-foundation` | Kryptografie, Schlüsselmaterial, Basisschutz auf Infrastruktur-Ebene. | TLS, IPsec, KMS |
| `platform` | `api-integration` | API-Gateways, BFF, Integrations- und Kommunikationsplattformen. | API Gateway, REST, GraphQL, Kafka |
| `platform` | `data-services` | Datenhaltung, Suche, Caching und analytische Plattformen. | PostgreSQL, Redis, OpenSearch, Lakehouse |
| `platform` | `workflow-automation` | Orchestrierung, Jobs, Prozess- und Automationsplattformen. | Temporal, Camunda, Scheduler |
| `platform` | `identity-access` | Plattformdienste für Identität, Authentifizierung, Autorisierung. | OIDC, OAuth2, Keycloak, OPA |
| `building-blocks` | `ui-building-blocks` | Wiederverwendbare UI-Bausteine und Design-System-Artefakte. | KoliBri, Design Tokens |
| `building-blocks` | `app-dev-frameworks` | Frameworks, Libraries und SDKs zur Umsetzung von Fachlogik. | Preact, React, SDKs |
| `building-blocks` | `quality-testing` | Qualitäts- und Sicherheitsprüfungen als wiederverwendbare Bausteine. | axe, SAST, DAST, Linting |
| `building-blocks` | `resilience-performance` | Technische Muster zur Stabilität und Performance auf Komponentenebene. | Retry, Timeout, Profiling |
| `applications` | `channel-experience` | Nutzerkanäle, Frontends und fachliche Anwendungen. | Fachverfahren, Portale, mobile Apps |
| `applications` | `interaction-navigation` | Navigation, Routing, i18n und Interaktionslogik im Kanal. | Router, l10n, Form-Flows |
| `applications` | `application-services` | Fachliche Use-Cases und Domänenfunktionen nahe am Produkt. | Antragslogik, Bescheid-Workflow |
| `sovereign-standards` | `governance-compliance` | Architekturvorgaben, Compliance, Auditierbarkeit. | ADR, ISO 27001, SOC2 |
| `sovereign-standards` | `data-governance` | Regeln zu Datenklassifikation, Ownership, Schutz und Austausch. | Data Catalog, DLP, Interop-Standards |
| `sovereign-standards` | `engineering-operations-policy` | Standards für Delivery, Betrieb und Nachvollziehbarkeit. | CI/CD-Policies, Incident-Standards |
| `sovereign-standards` | `finops-transparency` | Wirtschaftlichkeit, Kostensteuerung und Transparenzprinzipien. | Budget Guardrails, Cost Controls |

## Mapping der bisherigen Bereiche auf App-Layer

Die folgenden Bereiche aus der alten Fassung sind jetzt eindeutig zugeordnet:

| Bisheriger Bereich | Neuer Layer | Neuer Sublayer |
| --- | --- | --- |
| UI Framework | `building-blocks` | `app-dev-frameworks` |
| Design System & Komponenten | `building-blocks` | `ui-building-blocks` |
| Client State & Server State | `applications` | `interaction-navigation` |
| Routing & Navigation | `applications` | `interaction-navigation` |
| Internationalisierung (i18n/l10n) | `applications` | `interaction-navigation` |
| Accessibility | `building-blocks` | `quality-testing` |
| CDN / Static Delivery | `infrastructure` | `network-delivery` |
| WAF / Edge Security | `infrastructure` | `network-delivery` |
| API Gateway / BFF | `platform` | `api-integration` |
| HTTP Server Runtime | `platform` | `workflow-automation` |
| Domain Services | `applications` | `application-services` |
| Workflow / Orchestration | `platform` | `workflow-automation` |
| Jobs / Scheduler | `platform` | `workflow-automation` |
| Sync API | `platform` | `api-integration` |
| Async Messaging | `platform` | `api-integration` |
| Event Contracts / Schema | `sovereign-standards` | `data-governance` |
| OLTP Datenbank | `platform` | `data-services` |
| NoSQL Store | `platform` | `data-services` |
| Caching | `platform` | `data-services` |
| Suche / Index | `platform` | `data-services` |
| Object Storage | `platform` | `data-services` |
| Warehouse / Lake | `platform` | `data-services` |
| Authentication (AuthN) | `platform` | `identity-access` |
| Authorization (AuthZ) | `platform` | `identity-access` |
| Secrets & Key Management | `infrastructure` | `security-foundation` |
| Security Testing | `building-blocks` | `quality-testing` |
| Container Runtime | `infrastructure` | `runtime-hosting` |
| Orchestration | `infrastructure` | `runtime-hosting` |
| Service Connectivity | `platform` | `api-integration` |
| Infrastructure as Code | `building-blocks` | `app-dev-frameworks` |
| Logging | `sovereign-standards` | `engineering-operations-policy` |
| Metrics & Monitoring | `sovereign-standards` | `engineering-operations-policy` |
| Distributed Tracing | `sovereign-standards` | `engineering-operations-policy` |
| Incident Response | `sovereign-standards` | `engineering-operations-policy` |
| Source Control & Review | `building-blocks` | `app-dev-frameworks` |
| CI/CD | `sovereign-standards` | `engineering-operations-policy` |
| Artifact Management | `platform` | `workflow-automation` |
| Developer Experience | `building-blocks` | `app-dev-frameworks` |
| Architecture Governance | `sovereign-standards` | `governance-compliance` |
| Data Governance | `sovereign-standards` | `data-governance` |
| Compliance & Audit | `sovereign-standards` | `governance-compliance` |
| Configuration Management | `platform` | `workflow-automation` |
| Resilience Patterns | `building-blocks` | `resilience-performance` |
| Performance Engineering | `building-blocks` | `resilience-performance` |
| FinOps / Cost Control | `sovereign-standards` | `finops-transparency` |

## Arbeitsmodus

- Änderungen per PR mit kurzer Begründung.
- Pro Technologie genau **eine primäre Layer-Zuordnung**.
- Bei Unklarheit zuerst Layer-ID validieren, dann den passenden Bereich/Sublayer aus dieser Tabelle wählen.
