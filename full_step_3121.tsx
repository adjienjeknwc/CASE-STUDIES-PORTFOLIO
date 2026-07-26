export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "ALL" | "STRATEGY" | "GROWTH" | "0-TO-1" | "AI & SYSTEMS";
  type: string;
  role: string;
  focusMetric: string;
  summary: string;
  tags: string[];
  badgeColor: string;
  image?: string;
  isTechProject?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "swiggy",
    title: "Fixing Swiggy's Workplace Ordering Problem",
    subtitle: "Group ordering for shared workplaces with individual UPI billing & single consolidated delivery",
    category: "STRATEGY",
    type: "Feature-Gap Product Case Study",
    role: "Product Manager (Case Study)",
    focusMetric: "Delivery Cost Efficiency & Group AOV",
    summary: "How Swiggy can let coworkers in the same building order together with one shared cart, one delivery, and individual UPI checkout — without adding friction to individual ordering.",
    tags: ["FoodTech", "Group Checkout", "Logistics Efficiency", "UPI Payments", "B2B Expansion"],
    badgeColor: "bg-amber-300"
  },
  {
    id: "duolingo",
    title: "Increasing 7-Day Retention for New Users on Duolingo",
    subtitle: "Metric-first product strategy focusing on habit formation without gamification bloat",
    category: "GROWTH",
    type: "Metric-First Product Case Study",
    role: "Product Manager (Case Study)",
    focusMetric: "New User 7-Day Retention",
    summary: "Solving early drop-off for new language learners by tackling motivation decay, onboarding cognitive load, and streak friction.",
    tags: ["EdTech", "Retention Strategy", "Habit Formation", "User Psychology", "Gamification"],
    badgeColor: "bg-emerald-300"
  },
  {
    id: "makemytrip",
    title: "Designing MakeMyTrip's First-Time Flyer Experience for Tier-2/3 India",
    subtitle: "0-to-1 Product Case Study empowering first-time domestic travelers",
    category: "0-TO-1",
    type: "0-to-1 Product Case Study",
    role: "Product Manager (Case Study)",
    focusMetric: "Booking Conversion & Support Contact Reduction",
    summary: "Bridging the anxiety and knowledge gap for first-time flyers crossing from 'flights are not for me' to 'I can afford this'.",
    tags: ["TravelTech", "Tier-2/3 India", "0-to-1 UX", "Vernacular Design", "Inclusion"],
    badgeColor: "bg-cyan-300"
  }
];

export const TECH_PROJECTS: CaseStudy[] = [
  {
    id: "betacare",
    title: "BetaCare — Insurance Command Center",
    subtitle: "Agentic workflow automation for suitability audits, automated underwriting, & quote generation",
    category: "AI & SYSTEMS",
    type: "Enterprise Agentic Platform",
    role: "Lead Systems Architect & Business Analyst",
    focusMetric: "98.9% Reduction in Cycle Time (14 Days → <15 Mins)",
    summary: "High-fidelity agent operational workspace hub and customer registration ecosystem designed to optimize insurance sales cycles, automate 70% of low-risk underwriting bottlenecks, and deliver real-time pipeline visibility for Betacare Life Insurance.",
    tags: ["InsurTech", "React 18", "Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind CSS", "Enterprise SaaS"],
    badgeColor: "bg-rose-300",
    image: "/betacare_preview.png",
    isTechProject: true,
    liveUrl: "https://app.notion.com/p/Case-Study-Betacare-Life-Insurance-Agent-Portal-390be7f0e9f3805ca6c8db8d2335204b?source=copy_link"
  },
  {
    id: "gridlock",
    title: "Grid-Lock — EV Charging Platform",
    subtitle: "Peer-to-peer EV charging marketplace with GPS discovery, Socket.io price bidding, & wallet payments",
    category: "AI & SYSTEMS",
    type: "Full-Stack MERN Marketplace",
    role: "Full-Stack Developer & Product Owner",
    focusMetric: "Live GPS Tracking & Real-Time Bidding",
    summary: "Full-stack MERN platform connecting EV drivers with home charging hosts. Features live Leaflet map tracking, car/bike slot booking, dynamic Socket.io price bidding, in-app wallet, and host dashboards.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Leaflet Maps", "Tailwind CSS"],
    badgeColor: "bg-cyan-300",
    image: "/gridlock_preview.png",
    isTechProject: true,
    liveUrl: "https://grid-lock-vert.vercel.app/"
  },
  {
    id: "sentinelscale",
    title: "SentinelScale — API Observability & AI Gateway",
    subtitle: "Sub-5ms Go edge reverse-proxy with adaptive 3-tier AI threat classification & D3 telemetry",
    category: "AI & SYSTEMS",
    type: "Distributed Systems & AI Security",
    role: "Lead Systems Architect & Core Developer",
    focusMetric: "Sub-5ms Edge Ingress & 3-Tier AI Threat Audit",
    summary: "Distributed API gatekeeper pairing a sub-5ms Go reverse-proxy edge with an adaptive 3-tier AI threat pipeline (Go Regex -> Local ONNX -> Gemini Deep Scan), Kafka stream, pgvector HNSW store, and Next.js D3 console.",
    tags: ["Go", "Python", "Next.js", "Apache Kafka", "PostgreSQL", "pgvector", "ONNX Runtime", "Gemini 2.5", "D3.js", "Docker"],
    badgeColor: "bg-purple-300",
    image: "/sentinelscale_preview.png",
    isTechProject: true,
    liveUrl: "https://github.com/adjienjeknwc/sentinel-scale.git",
    githubUrl: "https://github.com/adjienjeknwc/sentinel-scale.git"
  },
  {
    id: "smartspend",
    title: "SmartSpend India — Grocery Inflation Radar",
    subtitle: "AI-driven retail grocery inflation, shrinkflation tracker (₹/KG), & savings copilot across 10 Indian metros",
    category: "AI & SYSTEMS",
    type: "Data Product & Analytics Engine",
    role: "Product Manager & Data Architect",
    focusMetric: "Shrinkflation Detection (₹/KG) & Localized Index",
    summary: "Consumer-focused data product tracking grocery inflation and shrinkflation across 10 Indian metros using Python, Pandas, NumPy, SQLite, Plotly Express, Streamlit, and a rule-based AI Copilot engine.",
    tags: ["Python", "Pandas", "NumPy", "Streamlit", "Plotly", "SQLite", "Data Analytics", "Inflation Tracking"],
    badgeColor: "bg-[#00DF89]",
    image: "/smartspend_preview.png",
    isTechProject: true,
    liveUrl: "https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app/"
  },
  {
    id: "finstream",
    title: "FinStream — Enterprise Banking & Loan Platform",
    subtitle: "Resilient event-driven Java Spring Boot microservices backend with Camunda 8 BPMN & Kafka DLQ",
    category: "AI & SYSTEMS",
    type: "Enterprise Banking Microservices",
    role: "Lead Systems Architect & Core Developer",
    focusMetric: "Circuit Breaker Failover & Kafka DLQ Recovery",
    summary: "Reference core banking microservices backend (Java 21, Spring Boot 3.3, Camunda 8 Zeebe, Resilience4j, Kafka DLT, PostgreSQL) with a React TypeScript control tower for live circuit breaker and dead-letter recovery simulations.",
    tags: ["Java 21", "Spring Boot", "Camunda 8", "Apache Kafka", "Resilience4j", "PostgreSQL", "Elasticsearch", "React", "TypeScript", "Tailwind CSS"],
    badgeColor: "bg-amber-300",
    image: "/finstream_preview.png",
    isTechProject: true,
    liveUrl: "https://adjienjeknwc.github.io/FinStream-/"
  },
  {
    id: "retailpulse",
    title: "RetailPulse — Pantry & Revenue Engine",
    subtitle: "MERN stack inventory optimization, automated reordering logic, & sales velocity analytics platform",
    category: "AI & SYSTEMS",
    type: "Full-Stack MERN Platform",
    role: "Full-Stack Developer & Business Analyst",
    focusMetric: "Inventory Velocity & Waste Reduction Analytics",
    summary: "Full-stack MERN pantry management and revenue acceleration platform featuring real-time stock tracking, expiry alerts, algorithmic reordering logic, sales velocity dashboards, and profit margin breakdown.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Sales Velocity", "Inventory Analytics"],
    badgeColor: "bg-amber-300",
    image: "/retailpulse_preview.png",
    isTechProject: true,
    liveUrl: "https://retail-pulse-eta.vercel.app"
  },
  {
    id: "cogniflow",
    title: "CogniFlow — AI User Journey Predictor",
    subtitle: "Predictive layout optimization engine mapping gaze sequences, conversion scores, & auto-fix blueprints via Gemini Vision",
    category: "AI & SYSTEMS",
    type: "AI Vision & UX Analytics",
    role: "Lead Product Architect & Developer",
    focusMetric: "Gaze Sequence Mapping & 0-100 Conversion Health Score",
    summary: "Predictive layout optimization tool powered by Gemini 2.5 Flash computer vision that maps visual saliency, tracks chronological gaze fixations (#1, #2, #3), computes a 0-100 layout conversion index, and generates auto-fix UI blueprints.",
    tags: ["React", "Tailwind CSS", "Gemini 2.5 Flash", "Express.js", "Node.js", "Canvas API", "Framer Motion", "UX Analytics"],
    badgeColor: "bg-[#00DF89]",
    image: "/cogniflow_preview.png",
    isTechProject: true
  },
  {
    id: "dermalink",
    title: "Dermalink — AI Skin Health Auditor",
    subtitle: "Multimodal skincare diagnostic engine with client-side eye redaction & budget tier routine builder",
    category: "AI & SYSTEMS",
    type: "AI Product Architecture",
    role: "Product Analyst (Retrospective)",
    focusMetric: "Diagnostic Accuracy & Synthetic Completion (71%)",
    summary: "Multimodal AI skincare auditor parsing face images into tri-zone moisture maps, client-side biometric eye masking, and live 3-tier routine cost calculators.",
    tags: ["HealthTech", "Gemini 2.5 Flash", "React 19", "TypeScript", "Biometric Privacy"],
    badgeColor: "bg-purple-300",
    image: "/dermalink_zone_map.png",
    isTechProject: true
  }
];
