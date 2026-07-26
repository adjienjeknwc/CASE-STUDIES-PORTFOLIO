SentinelScale

API Observability & Anomaly Gateway

A distributed, high-performance API gatekeeper and telemetry observability engine — combining a sub-5ms edge reverse-proxy with adaptive, multi-tier AI threat classification.

Go Python Next.js Apache Kafka PostgreSQL ONNX Runtime Gemini Docker D3.js

Open in GitHub Codespaces License PRs Welcome

⚡ Open in GitHub Codespaces — one-click sandbox, zero local setup

📖 Overview

SentinelScale is a distributed API gatekeeper and telemetry observability engine built to protect and monitor API traffic in real time. It pairs a sub-5ms Go reverse-proxy edge layer with an adaptive, three-tier AI threat classification pipeline — from lightweight regex checks at the edge, to local ONNX transformer inference, up to a Gemini-powered deep semantic scan for the highest-risk payloads. Everything is visualized live through a Next.js console with real-time stats and a D3-powered anomaly scatterplot.

The entire distributed stack — gateway, broker, AI audit service, database, and dashboard — boots in a single one-click GitHub Codespace, making it trivial to spin up and evaluate without any local environment setup.

🚀 One-Click Sandbox Setup (GitHub Codespaces)

Boot and run the entire distributed architecture in a 100% free sandbox environment — no local installs required:

Click "Open in GitHub Codespaces" above (or fork the repo and launch a Codespace on main).
The sandbox is pre-configured via a Devcontainer that automatically triggers the backend boot sequence.
On boot, postCreateCommand runs docker-compose up --build -d in the background, starting:
Service	Port
🛡️ Go Ingress Gateway	8080
📡 Apache Kafka / Redpanda Broker	9092
🧠 Python AI Audit Microservice	8000
🗄️ PostgreSQL + pgvector	5432
📊 Next.js Console Dashboard	3000
Once loaded, click the forwarded port notification for Port 3000 to view the live dashboard.
🏗️ System Architecture

The data flow routes every request through three distinct protection boundaries before it's classified, stored, and visualized:

                          Incoming API Request
                                    │
                                    ▼ (Port 8080)
                     ┌─────────────────────────────┐
                     │      Go Ingress Gateway        │
                     │   (Reverse Proxy Forwarder)     │
                     └─────────────────────────────┘
                              │              │
       Async Telemetry Event   │              ▼ Pass clean request downstream
                              │         (sub-5ms overhead / clean cache bypass)
                              ▼
                    [ Apache Kafka Broker ]
                              │
              Consume message  │ (telemetry-raw-logs)
                              ▼
                     ┌─────────────────────────────┐
                     │    Python AI Audit Engine       │
                     │  · Tier 2 — Local ONNX Model     │
                     │  · Tier 3 — Gemini Deep Scan     │
                     └─────────────────────────────┘
                              │              │
                Save metadata  │              ▼ Real-time alert
                              │        (WebSocket stream / alert webhook)
                              ▼              ▼
                ┌───────────────────┐  ┌────────────────────┐
                │   PostgreSQL DB       │  │   Next.js Console      │
                │   + pgvector store     │  │  · Live stats grid       │
                └───────────────────┘  │  · D3 scatterplot         │
                                        └────────────────────┘
⚙️ Core Engineering Highlights

⚡ Sub-5ms Ingress Edge

Built in Go using net/http/httputil reverse-proxy buffers. Telemetry extraction is offloaded to detached execution routines, while verified clean payloads are cached in a sync.Map SHA-256 store to bypass deeper evaluation entirely — keeping edge processing overhead below 1ms.

🧠 Adaptive Multi-Tier Threat Classification

Tier	Location	Method
Tier 1 — Ingress	Go Gateway	Lightweight local regex + cache validation; clean hits pass immediately downstream
Tier 2 — Local ONNX	Python Audit Engine	Transformer models via onnxruntime detect SQL injection & Unicode obfuscation
Tier 3 — Gemini Deep Scan	Python Audit Engine	Semantic evaluation via the official google-genai SDK, returning structured JSON threat assessments
📊 Database Consolidation via pgvector

A single PostgreSQL 16 instance handles both operational and vector workloads:

api_telemetry_logs — time-indexed operational metadata
adversarial_signatures — verified threat payloads and their high-dimensional vector embeddings, indexed with HNSW cosine similarity for spatial PCA/SVD coordinate clustering
🛠️ Tech Stack

Layer	Technologies
Edge / Gateway	Go, net/http/httputil, sync.Map SHA-256 cache
AI Audit Engine	Python, ONNX Runtime, google-genai SDK (Gemini)
Streaming	Apache Kafka / Redpanda
Database	PostgreSQL 16 + pgvector (HNSW index)
Dashboard	Next.js, D3.js, WebSockets
Infrastructure	Docker Compose, Devcontainers / GitHub Codespaces
🧪 Running Verification Test Suites

Comprehensive test scripts validate the system's data loop and resilience limits under load.

1. Verify services health — start the verification mock services:

python3 infra/verification/mock_services.py
2. Run end-to-end integration tests — verifies T1/T2/T3 parsing and catches WebSocket alerts in real time:

python3 tests/test_e2e.py
3. Execute high-throughput load testing — simulates concurrent user pipelines and records performance stats:

python3 tests/load_test.py
Results are automatically compiled into PERFORMANCE_BENCHMARK.md at the project root.
4. Execute chaos & resilience simulation — triggers mock disconnections for PostgreSQL and Kafka brokers, asserting that logs buffer in-memory and recover automatically:

python3 tests/chaos/chaos_test.py
🧠 Engineering Patterns Demonstrated

Edge Caching & Fast-Path Bypass — verified-clean payloads skip deeper evaluation via a SHA-256 cache lookup
Tiered/Cascading Classification — cost scales with risk; cheap checks run first, expensive AI checks only run when warranted
Async Telemetry Offloading — logging and analysis never block the request path
Event-Driven Streaming Pipeline — Kafka decouples ingestion from AI audit processing
Vector Similarity Search — pgvector + HNSW for nearest-neighbor threat signature matching
Chaos Engineering — explicit fault-injection tests for broker/database disconnects with in-memory buffering fallback
🗺️ Roadmap

 Horizontal scaling guide for the Go ingress layer (multi-instance + shared cache)
 Configurable alerting integrations (Slack, PagerDuty webhooks)
 Model versioning/rollback for the Tier 2 ONNX classifier
 Historical threat trend view in the Next.js console
 Kubernetes deployment manifests as an alternative to Docker Compose
⚠️ Disclaimer

SentinelScale is a reference / educational implementation built to demonstrate distributed systems and AI-assisted security patterns. It has not undergone formal security auditing and should not be deployed as-is to protect production traffic without further hardening and review.

     ,