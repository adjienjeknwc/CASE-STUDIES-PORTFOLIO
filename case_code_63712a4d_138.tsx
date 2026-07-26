@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* --- DESIGN TOKENS --- */
:root {
  --bg-yellow: #fffdf2;
  --bg-arch: #fef5b2;
  --bg-card: #ffffff;
  
  --text-dark: #1a1a24;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  
  --accent-blue: #00baf2;
  --accent-green: #21c17a;
  --accent-amber: #ea580c;
  --accent-pink: #f43f5e;
  --accent-purple: #c084fc;
  
  --border-dark: 2px solid #1a1a24;
  
  --shadow-flat: 0 5px 0 0 #1a1a24;
  --shadow-flat-hover: 0 8px 0 0 #1a1a24;
  --shadow-thick: 0 10px 30px rgba(26, 26, 36, 0.05);
  
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
}

/* --- BASE STYLES --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
  color: var(--text-dark);
  background-color: var(--bg-yellow);
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

/* --- SCROLL PROGRESS LINE --- */
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--text-dark);
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 1000;
}

/* --- FLAT NAV HEADER --- */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  background-color: rgba(255, 253, 242, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid #1a1a24;
}

.header-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-dark);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo span {
  color: var(--accent-pink);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-dark);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  border: 1.5px solid transparent;
  transition: all 0.2s ease;
}

.nav-links a:hover, .nav-links li.active a {
  background: var(--bg-card);
  border-color: var(--text-dark);
  box-shadow: var(--shadow-flat);
}

/* --- CANVAS & LAYOUT --- */
.main-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 2rem 6rem 2rem;
}

section {
  padding-bottom: 8rem;
}

.section-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-dark);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
  display: block;
}

.section-title {
  font-family: 'Lora', serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 3rem;
  letter-spacing: -0.5px;
}

/* --- HERO SECTION --- */
.hero-section {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-top: 2rem;
}

.hero-arch-container {
  width: 100%;
  background-color: var(--bg-arch);
  border-radius: 400px 400px 0 0;
  border: var(--border-dark);
  border-bottom: none;
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  box-shadow: var(--shadow-thick);
}

.hero-subtag {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.hero-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2px;
  color: var(--text-dark);
  margin-bottom: 2rem;
}

.hero-capsule-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.hero-arrow {
  font-size: 2rem;
  font-weight: 300;
}

.hero-capsule {
  background: var(--bg-card);
  border: var(--border-dark);
  box-shadow: var(--shadow-flat);
  border-radius: 50px;
  padding: 0.5rem 1.75rem;
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  display: inline-block;
}

.hero-scroll-down {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

/* --- ABOUT ME SECTION (GRID LAYOUT) --- */
.intro-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;
}

.intro-text-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.intro-title {
  font-family: 'Lora', serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
}

.intro-desc {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.intro-cta-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-pill-button {
  background: var(--bg-card);
  border: var(--border-dark);
  box-shadow: var(--shadow-flat);
  border-radius: 50px;
  padding: 0.6rem 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
}

.work-with-me-link {
  color: var(--text-dark);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: underline;
}

/* Polaroid Card and tags */
.profile-polaroid-container {
  position: relative;
  padding: 1.5rem;
}

.polaroid-card {
  background: var(--bg-card);
  border: var(--border-dark);
  border-radius: var(--radius-md);
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  box-shadow: var(--shadow-thick);
}

.polaroid-image-placeholder {
  background: var(--bg-arch);
  border-radius: 8px;
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0,0,0,0.05);
}

.polaroid-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.polaroid-name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-dark);
}

.polaroid-detail {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.polaroid-submsg {
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--text-secondary);
  border-top: 1px solid #f1f5f9;
  padding-top: 0.75rem;
  margin-top: 0.25rem;
}

.floating-card-tag {
  position: absolute;
  background: var(--bg-card);
  border: var(--border-dark);
  box-shadow: var(--shadow-flat);
  border-radius: 50px;
  padding: 0.4rem 1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 10;
}

.tag-badge1 { top: 0; left: -1rem; }
.tag-badge2 { bottom: 3.5rem; right: -1.5rem; }
.tag-badge3 { top: 60%; left: -2rem; }

/* --- BENTO GRID SYSTEM --- */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(380px, auto);
  gap: 2.5rem;
}

.bento-card {
  background-color: var(--bg-card);
  border: var(--border-dark);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-flat);
}

.card-rideshield {
  grid-column: span 2;
  grid-row: span 2;
}

.card-skillshatter {
  grid-column: span 1;
  grid-row: span 2;
}

.card-dermalink {
  grid-column: span 1;
  grid-row: span 1;
}

.bento-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.bento-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  background: var(--bg-yellow);
  border: 1px solid var(--text-dark);
}

.card-rideshield .bento-tag { color: var(--accent-pink); }
.card-skillshatter .bento-tag { color: var(--accent-green); }
.card-dermalink .bento-tag { color: var(--accent-purple); }

.bento-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.bento-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.hidden-pills {
  display: flex;
  gap: 0.5rem;
}

.pill-glow {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: var(--bg-yellow);
  border: 1px solid var(--text-dark);
}

.bento-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.tech-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: var(--text-dark);
  background: var(--bg-yellow);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--text-dark);
}

/* --- RIDESHIELD DETAILS --- */
.rideshield-interactive-shell {
  background: var(--bg-yellow);
  border: var(--border-dark);
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  overflow: hidden;
}

.rideshield-pills-row {
  display: flex;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
  background: #ffffff;
  border-bottom: 2px solid #1a1a24;
}

.rideshield-pill {
  flex: 1;
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s ease;
}

.rideshield-pill.active {
  background: var(--bg-arch);
  border: var(--border-dark);
  color: var(--text-dark);
  box-shadow: 0 3px 0 0 #1a1a24;
}

.rideshield-drawer-content {
  padding: 1.5rem;
  position: relative;
  min-height: 250px;
}

/* Vertical Funnel Sizing */
.visual-funnel {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.funnel-stage {
  height: 38px;
  background: var(--bg-card);
  border: 1.5px solid var(--text-dark);
  border-left: 5px solid var(--text-dark);
  border-radius: 6px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-dark);
}

.funnel-label {
  font-weight: 600;
}

.funnel-metric {
  font-family: 'Fira Code', monospace;
  font-weight: 700;
}

.funnel-stage.final-conversion {
  background: var(--bg-arch);
  border-left-color: var(--accent-green);
}

/* Terminal Spec Viewer details */
.terminal-window {
  background: #ffffff;
  border-radius: 8px;
  border: var(--border-dark);
  padding: 1.25rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--text-dark);
}

.terminal-window .keyword { color: var(--accent-pink); font-weight: 600; }
.terminal-window .string { color: var(--accent-blue); }
.terminal-window .number { color: var(--accent-green); }
.terminal-window .comment { color: var(--text-secondary); }

/* System Resilience Simulator Drawer details */
.resilience-flowchart {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.resilience-note {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.btn-trigger-simulator {
  background: var(--bg-card);
  border: var(--border-dark);
  box-shadow: var(--shadow-flat);
  color: var(--text-dark);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.6rem;
  border-radius: 6px;
  cursor: pointer;
}

.flow-node {
  background: var(--bg-card);
  border: 1.5px solid var(--text-dark);
  border-radius: 6px;
  padding: 0.4rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  text-align: center;
  transition: all 0.2s ease;
}

.flow-node.highlight-cyan {
  background: var(--bg-arch);
  border-color: var(--accent-blue);
}

.flow-node.highlight-magenta {
  background: var(--bg-arch);
  border-color: var(--accent-pink);
}

/* Claims Simulator */
.claims-simulator-container {
  border-top: 1px dashed rgba(0,0,0,0.1);
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.claims-simulator-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-dark);
}

.claims-btn-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.btn-claim-sim {
  background: var(--bg-card);
  border: var(--border-dark);
  box-shadow: var(--shadow-flat);
  color: var(--text-dark);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.6rem;
  border-radius: 6px;
  cursor: pointer;
}

.claim-output-terminal {
  background: #ffffff;
  border-radius: 8px;
  border: var(--border-dark);
  padding: 0.8rem 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  min-height: 52px;
  display: flex;
  align-items: center;
  color: var(--text-secondary);
}

.claim-output-terminal.denied {
  border-color: var(--accent-pink);
  background: rgba(244, 63, 94, 0.03);
  color: var(--accent-pink);
}

.claim-output-terminal.approved {
  border-color: var(--accent-green);
  background: rgba(33, 193, 122, 0.03);
  color: var(--accent-green);
}

/* --- SKILL-SHATTER GRAPH DETAILS --- */
.skillshatter-behavior-funnel {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.skillshatter-funnel-card {
  background: var(--bg-yellow);
  border: 1px dashed var(--text-dark);
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
}

.funnel-card-header {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-green);
  margin-bottom: 0.25rem;
}

.funnel-card-desc {
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--text-secondary);
}

.persona-matrix-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.persona-matrix-card {
  background: var(--bg-yellow);
  border: 1.5px solid var(--text-dark);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.matrix-header {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-dark);
}

.matrix-desc {
  font-size: 0.7rem;
  line-height: 1.4;
  color: var(--text-secondary);
}

.skillshatter-graph-widget {
  background: var(--bg-yellow);
  border: var(--border-dark);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  margin-top: 1rem;
}

.graph-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: var(--text-secondary);
  font-family: 'Fira Code', monospace;
  margin-bottom: 0.75rem;
}

.svg-graph-container {
  width: 100%;
  height: 80px;
  position: relative;
  overflow: hidden;
}

.graph-svg-line {
  stroke: var(--text-dark);
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* --- DERMALINK CAMERA SCANNER DETAILS --- */
.dermalink-scan-widget {
  background: var(--bg-yellow);
  border: var(--border-dark);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.scanner-viewport {
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: var(--border-dark);
  background: var(--bg-card);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scanner-view-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(30, 30, 36, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30, 30, 36, 0.04) 1px, transparent 1px);
  background-size: 15px 15px;
}

.scanner-target-mock {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: var(--text-secondary);
  border: 1.5px dashed var(--text-dark);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  z-index: 5;
  background: #ffffff;
}

.scanner-viewport.scanner-active .scanner-target-mock {
  border-color: var(--accent-green);
  color: var(--accent-green);
  background: rgba(33, 193, 122, 0.05);
}

.scanner-laser-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2px;
  background: var(--text-dark);
  z-index: 6;
  animation: scanning-move 2.5s infinite alternate ease-in-out;
}

.scanner-viewport.scanner-active .scanner-laser-bar {
  background: var(--accent-green);
}

.scanner-stats-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scanner-latency-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.scanner-latency-val {
  font-family: 'Fira Code', monospace;
  font-weight: 700;
  color: var(--accent-pink);
}

.scanner-latency-val.optimized {
  color: var(--accent-green);
}

.btn-trigger-optimizer {
  background: var(--bg-card);
  border: var(--border-dark);
  box-shadow: var(--shadow-flat);
  color: var(--text-dark);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
}

.scanner-output-report {
  background: #ffffff;
  border-radius: 8px;
  border: var(--border-dark);
  padding: 0.8rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  line-height: 1.4;
  color: var(--text-secondary);
}

/* --- THE METRICS ENGINE ENGINE --- */
.custom-metrics-engine {
  background-color: var(--bg-card);
  border: var(--border-dark);
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  box-shadow: var(--shadow-thick);
}

.svg-chart-engine {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;
}

.chart-card-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
}

.svg-dial-container {
  width: 140px;
  height: 140px;
  position: relative;
}

.dial-svg {
  transform: rotate(-90deg);
}

.dial-track {
  stroke: var(--bg-yellow);
  stroke-width: 12;
  fill: none;
}

.dial-fill {
  stroke-width: 12;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 377;
  stroke-dashoffset: 377;
}

.fill-cyan-grad { stroke: var(--accent-blue); }
.fill-green-grad { stroke: var(--accent-green); }
.fill-magenta-grad { stroke: var(--accent-pink); }

.dial-label-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dial-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.dial-unit {
  font-size: 0.65rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  font-weight: 600;
}

.chart-stage-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-dark);
}

.chart-stage-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-align: center;
  line-height: 1.4;
}

/* Event log flow chart pipeline (lights up on hover) */
.event-log-pipeline-card {
  margin-top: 3.5rem;
  background: var(--bg-yellow);
  border: var(--border-dark);
  border-radius: var(--radius-md);
  padding: 2rem;
}

.pipeline-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.pipeline-flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  position: relative;
}

.pipeline-node {
  background: var(--bg-card);
  border: 1.5px solid var(--text-dark);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  cursor: pointer;
}

.pipeline-node h4 {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: var(--text-dark);
}

.pipeline-node p {
  font-size: 0.7rem;
  color: var(--text-secondary);
}

/* Hover Highlight States */
.pipeline-node.active-trail {
  background: var(--bg-arch);
  border-color: var(--accent-blue);
  box-shadow: var(--shadow-flat);
}

/* Floating Recruiter Analytics Ticker Easter Egg */
.recruiter-analytics-egg {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--bg-card);
  border: var(--border-dark);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  box-shadow: var(--shadow-flat);
  z-index: 1000;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.egg-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  font-family: 'Fira Code', monospace;
  color: var(--text-dark);
  font-weight: 700;
}

.egg-text {
  font-size: 0.8rem;
  line-height: 1.4;
  color: var(--text-dark);
}

.egg-cta {
  background: var(--text-dark);
  color: var(--bg-card);
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.egg-cta:hover {
  opacity: 0.9;
}

/* --- POSITIVE ENERGY EMITTER COMPONENT --- */
.energy-emoji-floating {
  position: fixed;
  font-size: 2rem;
  pointer-events: none;
  z-index: 9999;
}

/* Mascot custom wiggle classes */
.mascot-wiggle:hover {
  animation: mascot-wig 0.5s ease infinite alternate;
}

@keyframes mascot-wig {
  from { transform: rotate(-5deg); }
  to { transform: rotate(5deg); }
}

/* --- RESPONSIVE ADJUSTMENTS --- */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  
  .card-rideshield, .card-skillshatter, .card-dermalink {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .hero-headline {
    font-size: 3rem;
  }

  .intro-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .profile-polaroid-container {
    max-width: 320px;
    margin: 0 auto;
  }

  .svg-chart-engine {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .pipeline-flow {
    grid-template-columns: 1fr;
  }

  .recruiter-analytics-egg {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 2rem auto 0 auto;
    max-width: 100%;
  }
}
