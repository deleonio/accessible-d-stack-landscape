# Stack-Layer-Zuordnung (Vorgaben)

Diese Zuordnungstabelle dient als **lebende Vorgabe** für die Einordnung von Technologien im gesamten Stack.
Sie wird kontinuierlich weiterentwickelt.

## Ziel

- Einheitliche Sprache für Architektur-, Produkt- und Plattformdiskussionen
- Klare Zuordnung jeder Technologie zu einem Layer und einem Bereich (Familie)
- Bessere Entscheidungsgrundlagen für Einführung, Ablösung und Standardisierung

## Pflichtschema für neue Technologien

Jede neu aufgenommene Technologie sollte mindestens die folgenden Felder erhalten:

1. **Layer**
2. **Bereich / Familie**
3. **Primäre Aufgabe**

Optional:

- Reifegrad (`Strategic`, `Tactical`, `Trial`, `Hold`)
- Owner-Team
- Alternativen

## Zuordnungstabelle

| Layer                      | Bereich (Familie)                 | Primäre Aufgabe                                     | Typische Beispiele                     |
| -------------------------- | --------------------------------- | --------------------------------------------------- | -------------------------------------- |
| Experience / Channel       | UI Framework                      | Interaktive UI-Renderlogik                          | Preact, React, Vue, Angular            |
| Experience / Channel       | Design System & Komponenten       | Wiederverwendbare, barrierefreie UI-Bausteine       | KoliBri, Storybook, Design Tokens      |
| Experience / Channel       | Client State & Server State       | Lokalen Zustand und API-Daten im Frontend verwalten | Zustand, Redux, TanStack Query         |
| Experience / Channel       | Routing & Navigation              | URL-Struktur, Navigation, Deep Links                | React Router, TanStack Router          |
| Experience / Channel       | Internationalisierung (i18n/l10n) | Mehrsprachigkeit und Lokalisierung                  | i18next, FormatJS                      |
| Experience / Channel       | Accessibility                     | WCAG-Konformität, Tastaturnavigation, ARIA          | axe, eslint-plugin-jsx-a11y            |
| Edge & Delivery            | CDN / Static Delivery             | Schnelle globale Asset-Auslieferung                 | Cloudflare, Fastly, CloudFront         |
| Edge & Delivery            | WAF / Edge Security               | Schutz vor Angriffen am Rand                        | AWS WAF, Cloudflare WAF                |
| Edge & Delivery            | API Gateway / BFF                 | Einheitlicher Einstiegspunkt und Aggregation        | Kong, APIM, BFF-Service                |
| Application / Backend      | HTTP Server Runtime               | Request-Verarbeitung, Middleware, Routing           | Node.js (Fastify/Express), Spring Boot |
| Application / Backend      | Domain Services                   | Fachlogik und Use Cases                             | Modulith-/Microservice-Module          |
| Application / Backend      | Workflow / Orchestration          | Mehrstufige Geschäftsprozesse steuern               | Temporal, Camunda                      |
| Application / Backend      | Jobs / Scheduler                  | Asynchrone Aufgaben und Batch-Läufe                 | BullMQ, Celery, Cron                   |
| Communication              | Sync API                          | Synchrone Kommunikation                             | REST, GraphQL, gRPC                    |
| Communication              | Async Messaging                   | Entkoppelte Kommunikation über Events/Queues        | Kafka, RabbitMQ, NATS, SQS             |
| Communication              | Event Contracts / Schema          | Events versionieren und validieren                  | AsyncAPI, Avro, Protobuf, JSON Schema  |
| Data Platform              | OLTP Datenbank                    | Transaktionale Kern-Datenhaltung                    | PostgreSQL, MySQL, SQL Server          |
| Data Platform              | NoSQL Store                       | Flexible oder key-basierte Datenhaltung             | MongoDB, DynamoDB, Redis               |
| Data Platform              | Caching                           | Last reduzieren und Latenz senken                   | Redis, Memcached                       |
| Data Platform              | Suche / Index                     | Volltextsuche und Relevanz                          | Elasticsearch, OpenSearch              |
| Data Platform              | Object Storage                    | Dateien und Binärdaten speichern                    | S3, GCS, Azure Blob                    |
| Data Platform              | Warehouse / Lake                  | Analytik, BI, Reporting                             | BigQuery, Snowflake, Databricks        |
| Identity & Security        | Authentication (AuthN)            | Identitäten verifizieren                            | OIDC, OAuth2, Keycloak, Auth0          |
| Identity & Security        | Authorization (AuthZ)             | Berechtigungen durchsetzen                          | RBAC, ABAC, OPA                        |
| Identity & Security        | Secrets & Key Management          | Schlüssel und Geheimnisse verwalten                 | Vault, KMS, SOPS                       |
| Identity & Security        | Security Testing                  | Schwachstellen früh erkennen                        | SAST, DAST, Dependency Scans           |
| Platform / Infrastructure  | Container Runtime                 | Standardisierte Ausführungsumgebung                 | Docker, containerd                     |
| Platform / Infrastructure  | Orchestration                     | Skalierung, Scheduling, Self-Healing                | Kubernetes, Nomad                      |
| Platform / Infrastructure  | Service Connectivity              | Service-Kommunikation und Mesh                      | Istio, Linkerd, Cilium                 |
| Platform / Infrastructure  | Infrastructure as Code            | Reproduzierbare Infrastruktur                       | Terraform, Pulumi                      |
| Observability & Operations | Logging                           | Ereignisse für Analyse und Audit erfassen           | ELK, OpenSearch, Loki                  |
| Observability & Operations | Metrics & Monitoring              | SLI/SLO-Messung und Alerting                        | Prometheus, Grafana, Datadog           |
| Observability & Operations | Distributed Tracing               | End-to-end-Requestpfade analysieren                 | OpenTelemetry, Jaeger, Tempo           |
| Observability & Operations | Incident Response                 | Störungen managen und Runbooks ausführen            | PagerDuty, Opsgenie                    |
| Engineering Productivity   | Source Control & Review           | Codehistorie und Reviews                            | GitHub, GitLab                         |
| Engineering Productivity   | CI/CD                             | Build-, Test- und Deploy-Pipelines                  | GitHub Actions, GitLab CI, Jenkins     |
| Engineering Productivity   | Artifact Management               | Pakete und Container versionieren                   | GHCR, ECR, Artifactory                 |
| Engineering Productivity   | Developer Experience              | Standardisierte Workflows für Teams                 | Devcontainer, Turborepo, Nx            |
| Governance & Compliance    | Architecture Governance           | Architekturentscheidungen dokumentieren             | ADRs, Architekturgremien               |
| Governance & Compliance    | Data Governance                   | Datenqualität, Klassifikation, Ownership            | Data Catalog, DLP                      |
| Governance & Compliance    | Compliance & Audit                | Regulatorische Nachweise und Auditierbarkeit        | ISO 27001, SOC2 Controls               |
| Cross-Cutting              | Configuration Management          | Konfiguration je Umgebung steuern                   | Env Vars, Config Server, Feature Flags |
| Cross-Cutting              | Resilience Patterns               | Robustheit gegen Fehler sicherstellen               | Retry, Timeout, Circuit Breaker        |
| Cross-Cutting              | Performance Engineering           | Durchsatz und Latenz optimieren                     | Profiling, Lasttests                   |
| Cross-Cutting              | FinOps / Cost Control             | Kosten transparent steuern                          | Budget Alerts, Kubecost                |

## Arbeitsmodus zur kontinuierlichen Optimierung

- Änderungen als PR mit kurzer Begründung (warum die Zuordnung verbessert wurde)
- Bei Unklarheit zuerst Bereich/Familie klären, dann Technologie zuordnen
- Pro Technologie nur **eine primäre** Zuordnung, sekundäre Beziehungen als Notiz
- Quartalsweise Review der Einordnung und des Reifegrads
