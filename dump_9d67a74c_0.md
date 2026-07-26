<USER_REQUEST>
I AM ENROLLING FOR AMERICAN EXPRESS HACKETHON ,I WILL GIVE YOU A LIST OF THEME ,U NEED TO PICK ONE OUT OF IT ON WHICH WE CAN MAKE A GOOD PROJECT IDEA AND STAND OUT -Themes
Frictionless Dispute & Chargeback Resolution
Frictionless Dispute & Chargeback Resolution

Overview
The disputes process can be challenging for both Card Members and Merchants. This challenge asks you to build a system that auto-gathers transaction evidence, fairly weighs the card member vs. merchant perspective, and resolves contested charges transparently, cutting the cycle from weeks to minutes. The focus is on resolving charges that have already been disputed, not on catching fraud, making it distinct from fraud-detection solutions. A fast, fair, and transparent resolution experience can significantly improve satisfaction for both card members and merchants.
Tech stack
Open to all
Examples for your reference only
Frontend: React, Angular
Backend & APIs: Node.js, FastAPI
AI/NLP for evidence parsing: Python (spaCy, Hugging Face)
Machine learning frameworks: TensorFlow, PyTorch
Cloud computing platforms: AWS, Azure
Database management systems: PostgreSQL, MongoDB
Tasks
Design an algorithm to automatically collect and parse transaction evidence from relevant data sources.
Develop a fair-weighing model that evaluates both card member and merchant inputs to determine dispute outcomes.
Build an interface for card members and merchants to submit evidence and track resolution status in real time.
Implement a transparent reasoning layer that explains the basis for each dispute decision.
Test and optimize the end-to-end dispute pipeline for speed, accuracy, and fairness.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
Hugging Face NLP Models
scaPy Documentation
AMEX Chargeback Code Guide
 
Card Benefit Activation Engine
Card Benefit Activation Engine

Overview
Most card members are unaware of or forget to claim the insurance and protection benefits built into their cards. This challenge asks you to build a system that automatically detects when a purchase qualifies for coverage, such as purchase protection, return protection, or travel-delay insurance, and pre-fills the claim so card members never miss a benefit they have already paid for. This is distinct from loyalty or rewards programs; the focus is entirely on the unused insurance and protection side of card benefits. Reducing friction in benefit activation can drive meaningful improvements in perceived card value and customer engagement.
Tech stack
Open to all
Examples for your reference only
Frontend: React, Vue.js
Backend & APIs: Node.js, Spring Boot
Transaction processing: Python, Kafka
Rules & ML engines: scikit-learn, TensorFlow
Cloud computing platforms: AWS, GCP
Database management systems: MySQL, DynamoDB
Tasks
Design an algorithm to monitor transactions in real time and detect purchases that qualify for card protections.
Build logic to match qualifying purchases to the correct benefit type (purchase, return, or travel-delay coverage).
Develop a customer-facing interface that surfaces detected benefits and pre-fills the claim form automatically.
Integrate with backend systems to manage benefit entitlements, claim submissions, and approval workflows.
Test and optimize the engine for detection accuracy, claim pre-fill quality, and reduction in unclaimed benefits.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
Google Pub/Sub Documentation
Stripe Issuing API
AWS Lambda Documentation
 
Autonomous Travel-Disruption Concierge
Autonomous Travel-Disruption Concierge

Overview
Flight cancellations and missed connections are stressful, and can lead to manual rebooking for card members. This challenge asks you to build an intelligent agent that detects a travel disruption the moment it occurs and autonomously rebooks flights, rearranges hotel stays, and notifies the card member, without requiring any manual action. This goes well beyond static itinerary planners that only display information; the solution must act in real time during live disruptions. A seamless, proactive concierge experience can set a new bar for travel card benefits.
Tech stack
Open to all
Examples for your reference only
Frontend: React Native, Flutter
Backend & APIs: Node.js, FastAPI
Agentic AI frameworks: LangChain, AutoGen
Travel APIs: Amadeus, Sabre
Cloud computing platforms: AWS, Azure
Database management systems: PostgreSQL, Redis
Tasks
Design an algorithm to monitor live flight data and detect disruptions such as cancellations or missed connections.
Implement autonomous rebooking logic that evaluates alternatives and executes flight and hotel changes within policy limits.
Develop a card member-facing interface to display disruption alerts, rebooking options, and real-time confirmation updates.
Integrate with airline, hotel, and notification APIs to complete end-to-end travel rearrangements without manual intervention.
Test and optimize the concierge agent for disruption detection speed, rebooking success rate, and notification clarity.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
Amadeus for Developers
LangChain Documentation
 
End-to-End Servicing Agent
End-to-End Servicing Agent

Overview
Common card service requests like fee reversals, credit limit increases, and replacement card orders, can be tedious for card members. This challenge asks you to build a conversational agent that fully resolves these high-frequency requests in a single interaction, maintains a verifiable audit trail of every decision and action taken, and hands off to a human agent with complete context when escalation is needed. Eliminating unnecessary friction from routine servicing can free up human agents for complex cases while improving the overall card member experience.
Tech stack
Open to all
Examples for your reference only
Frontend: React, Next.js
Backend & APIs: Node.js, FastAPI
Conversational AI: Rasa, Dialogflow, GPT-4 API
Audit & logging: Elasticsearch, Splunk, AWS
Cloud computing platforms: AWS, GCP
Database management systems: PostgreSQL, MongoDB
Tasks
Design an algorithm to classify incoming service requests and route them to the correct automated resolution flow.
Develop a conversational agent interface through which card members can initiate and complete requests end to end.
Implement a verifiable audit trail that logs every decision, action, and system call in an immutable format.
Integrate with backend card systems to execute resolutions such as fee waivers, limit adjustments, and card replacements.
Test and optimize the agent for first-contact resolution rate, audit completeness, and quality of human escalation handoffs.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
LangGraph Documentation 
Splunk Documentation
Elastic Search Documentation
Governance Layer for Financial Agents
Governance Layer for Financial Agents

Overview
As autonomous AI agents multiply across financial services, it’s important to establish the right governance and guardrails to ensure trust and security. This challenge asks you to build the safety infrastructure that lets a bank deploy fleets of autonomous agents responsibly, covering granular per-agent permissions, dynamic spend caps, real-time revocation controls, a full action log, and an emergency stop that can halt the entire fleet instantly. Without a robust governance layer, even well-designed agents can create systemic risk at scale. This infrastructure is the foundation that makes trustworthy agent deployment possible.
Tech stack
Open to all
Examples for your reference only
Frontend: React, Angular
Backend & APIs: Go, FastAPI
Policy & rules engines: Open Policy Agent (OPA), Cedar
Audit & monitoring: Prometheus, Grafana, Splunk
Cloud computing platforms: AWS, Azure
Database management systems: PostgreSQL, Redis
Tasks
Design a permission model that scopes each agent's allowed actions with granular, configurable controls.
Implement dynamic spend caps and budget limits that are enforced in real time across all deployed agents.
Build a revocation mechanism and emergency stop control that can instantly halt one agent or the entire fleet.
Develop an operator-facing dashboard to configure policies, monitor agent activity, and review audit logs.
Test and optimize the governance layer for policy enforcement accuracy, low-latency impact on agent operations, and auditability.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
Open Policy Agent
Splunk Documentation
NIST Risk Management Framework
 
Benefit-Underutilization Analytics
Benefit-Underutilization Analytics

Overview
Card issuers struggle to measure how much benefit value goes unclaimed, making it difficult to justify benefit investments or prove ROI to stakeholders. Card members, meanwhile, are often unaware of what they are missing, reducing their perceived card value and engagement. This challenge asks you to build an analytics engine that quantifies, in dollar terms, the benefit value each card member leaves on the table across unused credits, lounge visits, and protection benefits, and then turns that gap into a personalized, measurable engagement opportunity. Surfacing this value proactively can drive meaningful improvements in retention and satisfaction.
Tech stack
Open to all
Examples for your reference only
Frontend: React, Tableau Embedded
Backend & APIs: Python (FastAPI), Node.js
Data analytics tools: Python (pandas, NumPy), R
Machine learning frameworks: scikit-learn, XGBoost
Cloud computing platforms: AWS, GCP
Database management systems: Snowflake, BigQuery
Tasks
Design an algorithm to map each card member's transaction history to their full set of benefit entitlements.
Calculate the dollar value of unclaimed benefits, covering unused credits, lounge visits, and protection coverage per card member.
Develop a dashboard or customer-facing interface that surfaces the top unclaimed benefits in clear, personalized terms.
Implement nudge logic to trigger targeted engagement prompts at the right moment based on spending patterns.
Test and optimize the analytics engine for entitlement mapping accuracy, nudge relevance, and measurable uplift in benefit engagement.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
XGBoost Documentation
Google BigQuery
FastAPI Documentation
Cross-Channel Journey Stitching
Cross-Channel Journey Stitching

Overview
If customer data is siloed across channels (app, website, and phone), it makes it nearly impossible to understand the full customer journey, identify where experiences break down, or intervene before a customer churns or escalates. This challenge asks you to build a cross-channel identity resolution and event-stitching platform that assembles a unified timeline per customer across app, web, call-center, and in-person touchpoints. Unified journey visibility enables teams to find and fix the exact moments where the experience fails.
Tech stack
Open to all
Examples for your reference only
Frontend: React, Next.js
Backend & APIs: Node.js, Python (FastAPI)
Data pipeline & streaming: Apache Kafka, Spark
Analytics & visualization: Mixpanel, Amplitude, Tableau
Cloud computing platforms: AWS, GCP
Database management systems: Snowflake, BigQuery, MongoDB
Tasks
Design an identity resolution algorithm to link a single customer's interactions across app, web, call-center, and in-person channels.
Build a data pipeline to ingest, normalize, and stitch events from all four channels into a unified timeline per customer.
Develop an analyst-facing interface to visualize stitched journeys and highlight drop-off points, escalations, and unresolved issues.
Implement journey analytics logic to surface patterns that correlate with churn, repeat contacts, or poor customer experience.
Test and optimize the platform for identity resolution accuracy, end-to-end data latency, and actionability of insights.
Submission format
Project description (mandatory)
Presentation (mandatory)
Any other documentation or file related to the proposed solution
Video and link of the project
Resources
Amplitude Documentation
Mixpanel Documentation
Apache Kafka Documentation
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-07-17T21:18:42+05:30.
</ADDITIONAL_METADATA>
<USER_SETTINGS_CHANGE>
The user changed setting `Model Selection` from None to Gemini 3.5 Flash (High). No need to comment on this change if the user doesn't ask about it. If reporting what model you are, please use a human readable name instead of the exact string.
</USER_SETTINGS_CHANGE>