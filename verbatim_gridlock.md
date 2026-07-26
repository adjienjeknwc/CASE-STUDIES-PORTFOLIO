Grid-Lock --- Real-Time EV Charging Platform} \hfill \href{https://grid-lock-vert.vercel.app}{\small[Live]} \hspace{0.1em} {\fontsize{8.3}{10}\selectfont\color{mutedtext} Node.js, Express.js, React.js, MongoDB, Socket.io, REST APIs}
\begin{itemize}
  \item Planned, designed, and executed a full-stack project independently, from requirements research through deployment; identified and troubleshot technical issues through structured root-cause analysis.
\end{itemize}
\textbf{RetailPulse --- Multi-Role Inventory \& Revenue SaaS} \hfill \href{https://retail-pulse-eta.vercel.app}{\small[Live]} \hspace{0.1em} {\fontsize{8.3}{10}\selectfont\color{mutedtext} Node.js, Express.js, React.js, MongoDB Atlas, JWT}
\begin{itemize}
  \item Independently built a multi-tenant system with real-time tracking and analytics reporting; authored clear documentation to support future collaborators.
\end{itemize}
\textbf{CogniFlow --- AI-Powered Workflow Automation Tool} \hfill {\fontsize{8.3}{10}\selectfont\color{mutedtext} Node.js, Express.js, React.js, Google Gemini LLM, GitHub}
\begin{itemize}
  \item Researched and identified an opportunity to automate a manual workflow; designed, built, and shipped the solution end-to-end.
\end{itemize}

\section{Education}
\small
\textbf{B.Tech --- Computer Science \& Engineering (IoT \& Information Security)}, Manipal University Jaipur \hfill \textit{\color{datetext}2023 -- 2027}\\
CGPA: \textbf{7.9/10} (up to 6th Semester) $\cdot$ Relevant Coursework: Data Structures \& Algorithms, DBMS, Software Engineering, Computer Networks, Operating Systems, Information Security

\vspace{3pt}
Summer Valley School, Dehradun (Uttarakhand) \hfill Class XII (ISC): \textbf{85.9\%} $\;|\;$ Class X (ICSE): \textbf{96.8\%}

\vspace{2pt}
\section{Certifications \& Achievements}
\fontsize{8.8}{10.4}\selectfont
Business Analysis (Microsoft) $\cdot$ Intro to Data Science (Cisco) $\cdot$ Software Engineering (IBM) $\cdot$ Dynamic Programming \& Greedy Algorithms (Colorado Boulder) $\cdot$ CCNA Networking (Cisco) $\cdot$ Python Essentials 1 $\cdot$ Intro to Modern AI $\cdot$ Wireframes (Google) $\cdot$ Figma (Udemy)

\end{document}                               PROJECTS - PulseGuard AI: Predictive Patient Deterioration & Clinical Intelligence Platform

Live Demo GitHub Repo

License: MIT Standards: HL7 FHIR R4 Canvas Engine: 60 FPS UI: WCAG AAA Light

🚀 Live Site URL: https://adjienjeknwc.github.io/vitalcare-icu/

An open, high-performance, web-native health technology platform for real-time physiological signal telemetry, predictive patient deterioration forecasting, interactive DICOM radiology inspection, and HL7 FHIR R4 clinical data interoperability.
🧰 Tech Stack in Color Blocks

Core Frontend & High-Performance Rendering

HTML5 CSS3 Light Theme JavaScript ES6+ Canvas 2D API Web Audio API

Health Tech Standards & Data Interoperability

HL7 FHIR R4 LOINC Taxonomy DICOM 3.0 Imaging NEWS2 Clinical Engine

Backend Tooling & Documentation

Python 3 ReportLab PDF Engine Git & GitHub

🌟 Key Innovations & Features

1. 📈 60 FPS Real-Time Physiological Canvas Sweepers

Lead II ECG Waveform: Mathematical synthesis of the P-QRS-T complex rendered via circular sweep-line canvas animation without DOM lag.
Photoplethysmogram (PPG / SpO2): Real-time pulse oximetry plethysmogram signal visualization.
Pulse Indicator: Visual heartbeat indicator synchronized with R-wave peak detection.
2. 🔮 30-Minute Prospective AI Deterioration Forecast

Slope Projection: Computes historical physiological slope trends across consecutive telemetry cycles.
Early Shock / Sepsis Flagging: Projects 30-minute prospective risk curves to alert clinicians before vitals cross crash threshold boundaries.
3. 🌐 HL7 FHIR R4 Standard Interoperability

Standardized Resource Engine: Live parsing and generation of HL7 FHIR R4 Observation resources with official LOINC codes (8867-4 Heart Rate, 2708-6 SpO2, 85354-9 BP Panel) and Patient resources.
JSON Exporter: One-click copy and downloadable .json FHIR bundle export for EHR integration.
4. 🩻 Interactive Web DICOM Radiology Inspector

Web-Native DICOM Slice Viewer: Renders simulated chest X-ray studies with pixel-level Window Width (Contrast) and Window Level (Brightness) adjustment sliders.
Interactive Distance Caliper Tool: Click any two points on the chest X-ray viewport to measure physical anatomical distances in millimeters (mm).
AI Anomaly Heatmap Overlay: Toggleable radial opacity overlay highlighting suspected pulmonary infiltrates.
5. 📝 Ambient SBAR Clinical Shift Handoff Generator

SBAR Synthesis: Automatically compiles live vitals telemetry into structured SBAR (Situation, Background, Assessment, Recommendation) nursing handoff notes.
Editable Clinical Editor: Built-in note editor with one-click Copy to Clipboard and Print capabilities.
6. 🎛️ Real-World Clinical Simulator Suite

Preset Scenarios: Trigger live clinical scenarios (Baseline Normal, Sepsis Onset, Severe Bradycardia, Respiratory Failure) to demonstrate alarm triage workflows.
Telemetry CSV Export: Instant download of timestamped vitals telemetry logs (.csv).
ISO 60601-1-8 Audio Alarm Triage: Web Audio API synthesized dual-tone alerts with a 120-second mute countdown timer.
🚀 Quick Start & Local Setup

Running Locally

Clone the Repository:

git clone https://github.com/adjienjeknwc/vitalcare-icu.git
cd vitalcare-icu
Start Local HTTP Server:

python3 -m http.server 8090
Open in Browser: Navigate to http://localhost:8090 in your web browser.

📋 Clinical Standards Reference (NEWS2 Scoring Matrix)

Physiological Parameter	Score 3	Score 2	Score 1	Score 0	Score 1	Score 2	Score 3
Respiration Rate (rpm)	≤ 8	--	9 - 11	12 - 20	--	21 - 24	≥ 25
SpO2 Oxygen (%)	≤ 91	92 - 93	94 - 95	≥ 96	--	--	--
Systolic BP (mmHg)	≤ 90	91 - 100	101 - 110	111 - 219	--	--	≥ 220
Heart Rate (bpm)	≤ 40	--	41 - 50	51 - 90	91 - 110	111 - 130	≥ 131
Temperature (°C)	≤ 35.0	--	35.1 - 36.0	36.1 - 38.0	38.1 - 39.0	≥ 39.1	--
🎨 Design System & Accessibility

The user interface adheres to strict clinical UI guidelines:

WCAG AAA Contrast: High contrast text (#0F172A on #FFFFFF and #F1F5F9).
Zero-Clutter Visual Hierarchy: Intuitive tabbed views preventing modal occlusion during emergency alerting.
Fluid Responsiveness: Auto-resizing canvases and responsive grids fitting laptops, desktops, and tablets.
                  ,SentinelScale

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

     ,FinStream

Enterprise Banking & Loan Platform

A resilient, event-driven core banking microservices backend and administrative control panel — demonstrating production-grade enterprise integration patterns, workflow orchestration, and fault-tolerant telemetry.

Java Spring Boot Camunda Apache Kafka Resilience4j PostgreSQL Elasticsearch Docker React TypeScript Tailwind CSS Vite Maven

License PRs Welcome Status

📖 Overview

FinStream is a reference implementation of a resilient, event-driven core banking microservices backend paired with an administrative compliance control tower. It's built to demonstrate production-ready patterns for enterprise financial systems: enterprise integration patterns (EIP), workflow orchestration via Camunda 8, circuit-breaker fault tolerance, and Kafka-based dead-letter recovery — all observable in real time through a live dashboard.

Rather than just describing these patterns, FinStream ships with two interactive resiliency simulations (circuit breaker trip + DLQ recovery) so you can watch the system degrade gracefully and self-heal, end to end.

Screenshot 2026-07-15 at 2 18 58 PM
🏗️ System Architecture

                                   ┌─────────────────────────┐
                                   │   Compliance Control       │
                                   │   Tower (React + Vite)      │
                                   │   :5173                     │
                                   └──────────────┬──────────────┘
                                                  │ REST
                                                  ▼
                                   ┌─────────────────────────┐
                                   │      API Gateway            │
                                   │         :8080                │
                                   └──────────────┬──────────────┘
                        ┌───────────────────────┼───────────────────────┐
                        ▼                        ▼                       ▼
          ┌───────────────────────┐  ┌───────────────────────┐  ┌───────────────────────┐
          │ Account Management       │  │  Loan Workflow Service    │  │ Notification & Audit     │
          │ Service · :8083           │  │  Service · :8081           │  │ Service · :8082           │
          │ (Balances, KYC)            │  │ (Camunda 8 / Zeebe,         │  │ (Kafka consumer,           │
          │ PostgreSQL                  │  │  Resilience4j Circuit       │  │  DLQ routing)               │
          │                              │  │  Breaker, Credit Bureau)    │  │                              │
          └───────────────────────┘  └───────────┬───────────┘  └──────────────┬────────────┘
                                                    │ publishes events               │ consumes
                                                    ▼                                │
                                       ┌─────────────────────────┐                  │
                                       │      Apache Kafka           │◀─────────────┘
                                       │   (+ Zookeeper coord.)       │
                                       └──────────────┬──────────────┘
                                                      ▼
                                       ┌─────────────────────────┐
                                       │   loan-audit-stream.DLT    │
                                       │   (Dead Letter Queue)       │
                                       └─────────────────────────┘
🧩 Microservices Directory

Service	Port	Responsibility
🚪 api-gateway	8080	Routes external requests to backing modules
👤 account-management-service	8083	Manages account balances & KYC status (PostgreSQL)
💳 loan-workflow-service	8081	Embeds Camunda 8 (Zeebe); executes Credit Bureau calls behind Resilience4j Circuit Breakers; publishes transaction events to Kafka
🔔 notification-audit-service	8082	Consumes transactional streams from Kafka; routes exceptions to a Dead Letter Queue (DLQ)
🛡️ compliance-control-tower	5173	Vite + React + TypeScript + Tailwind CSS v4 administrative dashboard
🛠️ Tech Stack

Layer	Technologies
Backend	Java 21 · Spring Boot 3.3.x (Spring Web, Spring Data JPA, Spring AOP) · Camunda 8 (Zeebe) · Spring Kafka · Resilience4j · Maven
Frontend	React.js · TypeScript · Tailwind CSS v4 · Vite · Lucide React
Databases & Infra	PostgreSQL 16 · Apache Kafka · Elasticsearch · Zookeeper · Docker Compose
🚀 Run Guide

Prerequisites

Java JDK 21
Maven 3.9+
Node.js 18+ & npm
Docker Desktop
Step 1 — Spin Up Infrastructure

Stand up PostgreSQL, Kafka brokers, and Zeebe containers from the project root:

docker compose up -d
Step 2 — Compile & Run Backend Services

Build all submodules from the parent directory:

# Compile and run unit tests
mvn clean test

# Package JARs
mvn clean package -DskipTests
Then run each Spring Boot microservice in its own terminal:

# Terminal 1: Account Service
cd account-management-service && mvn spring-boot:run

# Terminal 2: Loan Service
cd loan-workflow-service && mvn spring-boot:run

# Terminal 3: Audit Service
cd notification-audit-service && mvn spring-boot:run

# Terminal 4: API Gateway Router
cd api-gateway && mvn spring-boot:run
Step 3 — Run the Dashboard UI

cd compliance-control-tower
npm install
npm run dev
Navigate to http://localhost:5173 (or 5174 if 5173 is occupied).

🧪 Resiliency Scenarios to Test

🔴 Scenario A — Resilience4j Circuit Breaker Trip

Step	Action
1	Open the dashboard — the Circuit Breaker telemetry indicator reads CLOSED (healthy)
2	Inject a new transaction — the system queries the external Bureau API and completes successfully
3	Toggle "Simulate Circuit Failover" to degrade downstream service health
4	The Circuit Breaker badge trips to OPEN — FAILOVER ACTIVE
5	Submit a new application — the service intercepts the call and runs the fallback scorer, safely defaulting the applicant's rating to 600 to prevent risk leakage
🟡 Scenario B — Kafka Dead Letter Queue (DLQ) Recovery

Step	Action
1	In the simulator panel, set the customer Account ID to "poison-pill"
2	Submit the transaction
3	The serializer aspect intercepts the value and throws a parsing exception
4	Instead of blocking processing threads, notification-audit-service isolates the payload and routes it to the loan-audit-stream.DLT topic, safely committing the offset
These two scenarios demonstrate graceful degradation (fail-safe defaults over hard failure) and fault isolation (poison messages don't block the pipeline) — two of the core resiliency guarantees the platform is built around.
🧠 Engineering Patterns Demonstrated

Circuit Breaker Pattern (Resilience4j) — prevents cascading failure when the external Credit Bureau API degrades
Dead Letter Queue Pattern (Kafka) — isolates malformed/poison messages without halting stream processing
Workflow Orchestration (Camunda 8 / Zeebe) — models the loan approval process as an explicit, observable BPMN workflow
Event-Driven Architecture (Kafka) — decouples transaction publishing (loan service) from consumption (audit service)
API Gateway Pattern — single entry point routing to independently deployable microservices
Aspect-Oriented Programming (Spring AOP) — cross-cutting concerns like serialization interception
🗺️ Roadmap

 Distributed tracing across services (OpenTelemetry)
 Centralized log aggregation via Elasticsearch + Kibana
 Authentication/authorization layer for the API Gateway (OAuth2 / Keycloak)
 Kubernetes deployment manifests as an alternative to Docker Compose
 Automated chaos-testing suite for additional resiliency scenarios
⚠️ Disclaimer

FinStream is a reference / educational implementation built to demonstrate enterprise banking architecture patterns. It is not a production financial system and should not be used to process real financial transactions or real customer data.

,FinCompass

Banking Complaint Intelligence & Supervisory Analytics Platform

An end-to-end data engineering and supervisory analytics platform simulating RBI-grade consumer protection and market intelligence operations.

Python Pandas NumPy scikit-learn StatsModels SQLAlchemy Streamlit LangChain ChromaDB Gemini Plotly

License PRs Welcome Status

📖 Overview

FinCompass is a full-stack data engineering and analytics platform that simulates the Reserve Bank of India's (RBI) consumer protection and market intelligence operations end-to-end. It ingests synthetic grievance records, cleans and structures them into a relational database, applies statistical hypothesis testing and time-series forecasting, trains an NLP classifier on raw complaint text, builds a vector search index for semantic Q&A, and serves everything through an interactive 6-page Streamlit supervisory dashboard — complete with automated PDF/Word/Excel brief generation.

This project was purpose-built to demonstrate the core competencies required for RBI Young Professional (YP) roles in Data Analytics and Policy Research: data pipeline engineering, statistical inference, forecasting, applied ML/NLP, and translating quantitative findings into policy-ready supervisory briefs.

🏗️ Platform Architecture

                            ┌───────────────────────────┐
                            │   15,000 Complaints         │
                            │   (Synthetic Raw Data)       │
                            └──────────────┬──────────────┘
                                           │  ETL Pipeline (pandas & NumPy)
                                           ▼
                            ┌───────────────────────────┐
                            │   clean_validate.py          │
                            │   (Z-score outliers, DQ)      │
                            └──────────────┬──────────────┘
                                           │  Ingestion (SQLAlchemy)
                                           ▼
                            ┌───────────────────────────┐
                            │      fincompass.db           │
                            │   (SQLite3 Relational DB)     │
                            └──────┬─────────────┬────────┘
                                  │             │
                  ML & NLP        ▼             ▼        Analytics & Time-Series
              ┌───────────────────────┐   ┌───────────────────────┐
              │  train_classifier.py    │   │   stats_analysis.py     │
              │  (TF-IDF + LogReg)      │   │  (Welch's t-test, OLS)  │
              └────────────┬──────────┘   └────────────┬──────────┘
                           ▼                            ▼
              ┌───────────────────────┐   ┌───────────────────────┐
              │  complaint_classifier   │   │    forecasting.py       │
              │     (Saved .pkl)         │   │  (SARIMA Forecast JSON) │
              └────────────┬──────────┘   └────────────┬──────────┘
                           │                            │
                           └─────────────┬──────────────┘
                                        ▼
                            ┌───────────────────────────┐
                            │      streamlit_app           │◀──┐  RAG Assistant
                            │      (6-Page App)             │   │
                            └──────────────┬──────────────┘   │
                                           │                  │
                                           ▼        ┌──────────┴──────────┐
                            ┌───────────────────────┐   │     chatbot.py         │
                            │   Word / Excel MIS       │   │ (LangChain + Chroma)   │
                            │      Generators            │   └──────────┬──────────┘
                            └───────────────────────┘                 │
                                                                       ▼
                                                          ┌─────────────────────┐
                                                          │   Gemini Flash API    │
                                                          └─────────────────────┘
🛠️ Technology Stack

Layer	Technologies	Purpose
🐍 Core Language	Python 3.10+	Primary language for pipeline, analytics, and modeling
🗄️ Database	SQLite3, SQLAlchemy	Relational storage with window functions, JOINs
⚙️ Pipeline	Pandas, NumPy	Structured ETL validation, cleaning, log generation
📊 Statistics	SciPy, StatsModels	Welch's t-test, OLS regression, Mann-Kendall trend test
📈 Time-Series	statsmodels SARIMAX	6-month seasonal complaint volume forecasting
🤖 ML / NLP	scikit-learn	TF-IDF pipeline + Multinomial Logistic Regression
🧠 GenAI / RAG	LangChain, ChromaDB, Gemini Flash	Semantic vector search & Q&A over supervisory briefs
📝 Automation	python-docx, openpyxl, APScheduler	Automated Word briefs, conditional-formatted Excel MIS
🎨 Visualization	Plotly, Streamlit	Interactive multi-page dashboard
📋 Methodology

1. Data Synthesis & Distribution Rationale

Synthetic data is modeled to reflect realistic system loads under the Integrated Ombudsman Scheme, rather than uniform random distributions:

Market share weighting — SBI accounts for ~20% of complaints, matching its domestic footprint, followed by public sector peers.
Macroeconomic trends — Digital Banking Fraud is modeled with a 25% YoY compound growth rate, simulating post-COVID digital transaction growth.
Supervisory discrepancy — Public sector banks are assigned a gamma distribution for resolution_days, yielding a ~43-day mean (~40% slower than private counterparts).
2. ETL Cleaning & Data Quality Assurance (clean_validate.py)

Outliers in resolution_days flagged via a standard Z-score threshold (Z > 3).
Inconsistencies repaired — e.g., resolution_days set to null for pending complaints, and resolved entries missing day counts filled with the bank type's median.
Full execution steps and metrics exported to etl/etl_log.txt.
3. Statistical Inference & Predictive Analytics

Welch's t-test — independent two-sample test with unequal variances, comparing public vs. private bank resolution days.
OLS Regression — predicts resolution days from bank type, channel, and complaint category to isolate systemic friction points.
Mann-Kendall Test — non-parametric test for a monotonic upward trend in Digital Banking Fraud.
🚀 Getting Started

Prerequisites

Python 3.10+
Installation & Full Pipeline Run

# 1. Clone the repository
git clone https://github.com/yourusername/FinCompass.git
cd FinCompass

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the end-to-end orchestrator
# (data generation → validation → DB load → ML training → stats → vector store → MIS generation)
python run_all.py
Optional: Enable the Live AI Policy Assistant

Create a .env file at the project root:

GEMINI_API_KEY=your_google_studio_api_key_here
If no key is provided, the chatbot gracefully falls back to a local semantic synthesis mode.
Launch the Dashboard

streamlit run app/streamlit_app.py
📈 Key Findings (Based on Simulated Data)

Finding	Statistical Evidence
🏛️ Systemic backlogs in public sector banks	Welch's t-test: p < 0.001 (null hypothesis rejected)
📱 Digital Banking Fraud rising sharply	Mann-Kendall Tau: +0.84, p < 0.0001
🏢 Branch-filed complaints add friction	OLS regression: +14.2 days vs. online filings
🏛️ Policy Implications (DoS Brief)

I. Institutional Action Plan The persistent gap in grievance redressal velocity between public and private sector banks points to a structural bottleneck in consumer protection. The analysis recommends the Department of Supervision (DoS) mandate specialized workflow automation for public sector banks whose average resolution time exceeds a 45-day threshold, alongside periodic spot audits of internal bank ombudsman frameworks.

II. Mitigation of Digital Transaction Risks Given the statistically validated acceleration in Digital Banking Fraud, the analysis suggests a regulatory update to the Master Direction on Digital Banking Security Controls — including mandatory real-time transaction cooling periods for high-risk accounts and stricter security audits for third-party UPI integrations, with particular focus on Small Finance Banks showing sudden QoQ complaint spikes.

🖼️ Dashboard Pages

#	Page	Description
1	Executive Dashboard	High-level KPIs and complaint volume overview
2	Complaint Deep Dive	Real-time NLP classifier on raw complaint text
3	DoS Supervisory Monitoring	Bank-level resolution velocity tracking
4	Heatmap & Geographic Analysis	Regional complaint density visualization
5	Time-Series Forecasting & Stats	SARIMA forecasts and hypothesis test results
6	AI Policy Assistant	RAG-powered chat over monthly supervisory briefs
📸 Replace this table with actual screenshots/GIFs per page once available — a 2-column image grid works well here.
🗺️ Roadmap

 Swap synthetic data generator for anonymized real-world grievance datasets
 Add role-based access control for the supervisory dashboard
 Expand forecasting to per-bank and per-region granularity
 CI/CD pipeline for automated model retraining
 Deploy live demo (Streamlit Cloud / Docker)
⚠️ Disclaimer

This project uses entirely synthetic data and is built as an independent portfolio/demonstration project. It is not affiliated with, endorsed by, or representative of official RBI systems, data, or policy positions.

,Grid-Lock

EV Charging Platform

A full-stack MERN application connecting EV drivers with home charging station hosts — GPS discovery, live booking, wallet payments, and real-time price bidding.

React Node.js Express MongoDB Socket.io Leaflet Tailwind CSS

Live Demo License PRs Welcome

⚡ View Live App

📖 Overview

Grid-Lock is a full-stack MERN marketplace that connects EV drivers with everyday people who host home charging stations. Drivers can locate nearby chargers on a live map, reserve time slots for cars or bikes, pay through an integrated wallet, and leave reviews — while hosts get a dashboard to list and manage their own stations. A Socket.io real-time layer powers live price bidding, so charging costs can flex dynamically instead of being fixed.

Screenshot 2026-07-15 at 2 27 28 PM Screenshot 2026-07-15 at 2 28 07 PM
🚀 Features

Feature	Description
📍 Live GPS Tracking	Find chargers near your real-time location on an interactive map
🗓️ Booking System	Reserve time slots for Cars or Bikes
💳 Wallet & Payments	Integrated dummy payment gateway with an in-app wallet system
🏠 Host Dashboard	Users can deploy and manage their own charging stations
🔄 Real-Time Updates	Socket.io-powered live price bidding on charging slots
⭐ Reviews	Drivers can rate and review stations after use
🏗️ Architecture

                        ┌───────────────────────────┐
                        │   React Client (Vite/CRA)   │
                        │   Leaflet Maps · Tailwind     │
                        └──────────────┬──────────────┘
                                       │  REST API + WebSocket
                                       ▼
                        ┌───────────────────────────┐
                        │   Express.js Server           │
                        │   (Node.js runtime)             │
                        └──────┬─────────────┬────────┘
                              │             │
                REST/CRUD    │             │  Real-time events
                              ▼             ▼
                ┌───────────────────┐  ┌───────────────────┐
                │      MongoDB          │  │    Socket.io          │
                │  (Users, Stations,     │  │  (Live price bidding,  │
                │   Bookings, Wallet)     │  │   booking updates)      │
                └───────────────────┘  └───────────────────┘
🛠️ Tech Stack

Layer	Technologies
Frontend	React.js · Leaflet Maps · Tailwind CSS
Backend	Node.js · Express.js
Database	MongoDB
Real-Time	Socket.io
Deployment	Vercel
📦 Getting Started

Prerequisites

Node.js 18+
npm
A running MongoDB instance (local or Atlas)
Installation

# 1. Clone the repository
git clone https://github.com/adjienjeknwc/grid-lock-ev-platform.git
cd grid-lock-ev-platform

# 2. Install client dependencies
cd client && npm install

# 3. Install server d
<truncated 12216 bytes>

NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.