@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* --- CUSTOM VARIABLES --- */
:root {
  --bg-yellow: #fffdf0;
  --bg-arch: #fef4a9;
  --bg-card: #ffffff;
  --text-dark: #1e1e24;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  
  --accent-blue: #00baf2;
  --accent-green: #21c17a;
  --accent-amber: #ea580c;
  --accent-pink: #f43f5e;
  
  --border-dark: 2px solid #1e1e24;
  --border-thin: 1px solid #e2e8f0;
  
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 28px;
  
  --shadow-flat: 0 4px 0 0 #1e1e24;
  --shadow-floating: 0 8px 24px rgba(30, 30, 36, 0.06);
  --shadow-thick: 0 10px 30px rgba(30, 30, 36, 0.08);
  
  --transition-normal: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  --transition-slow: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  background-color: rgba(255, 253, 240, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid #1e1e24;
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
  color: var(--accent-amber);
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
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid transparent;
  transition: all var(--transition-normal);
}

.nav-links a:hover {
  background: var(--bg-card);
  border-color: var(--text-dark);
  box-shadow: var(--shadow-flat);
}

.nav-links li.active a {
  background: var(--bg-card);
  border-color: var(--text-dark);
  box-shadow: var(--shadow-flat);
}

/* --- MAIN CANVAS WRAPPER --- */
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

/* --- ARCH WELCOME HERO SECTION --- */
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

/* Search bar styling button */
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
  transition: all var(--transition-normal);
}

.search-pill-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 #1e1e24;
}

.work-with-me-link {
  color: var(--text-dark);
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: underline;
  transition: opacity var(--transition-normal);
}

.work-with-me-link:hover {
  opacity: 0.8;
}

/* Polaroid Card and overlay badges */
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
  transform: rotate(3deg);
  transition: transform var(--transition-normal);
}

.polaroid-card:hover {
  transform: rotate(0deg);
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
  font-family: 'Lora', serif;
  font-size: 4rem;
  color: rgba(30,30,36,0.15);
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
  color: var(--text-muted);
  border-top: 1px solid #f1f5f9;
  padding-top: 0.75rem;
  margin-top: 0.25rem;
}

/* Floating overlay tags popping out of card */
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

.tag-badge1 {
  top: 0;
  left: -1rem;
  transform: rotate(-10deg);
}

.tag-badge2 {
  bottom: 3.5rem;
  right: -1.5rem;
  transform: rotate(8deg);
}

.tag-badge3 {
  top: 60%;
  left: -2rem;
  transform: rotate(-5deg);
}

/* --- BENTO GRID SYSTEM --- */
.bento-grid-container {
  perspective: 1200px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(380px, auto);
  gap: 2.5rem;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
}

/* Bento Paper Card Aesthetic */
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
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 0 0 #1e1e24;
}

/* Grid Area Layout Assignment */
.card-rideshield {
  grid-column: span 2;
  grid-row: span 2;
}

.card-skillshatter {
  grid-column: span 1;
  grid-row: span 1;
}

.card-dermalink {
  grid-column: span 1;
  grid-row: span 1;
}

/* Hidden spec labels pops out on hover */
.hidden-pills {
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity var(--transition-normal), transform var(--transition-normal);
}

.bento-card:hover .hidden-pills {
  opacity: 1;
  transform: translateY(0);
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

/* --- Flagship Card (RideShield) Layouts --- */
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
  border-bottom: 2px solid #1e1e24;
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
  transition: all var(--transition-normal);
}

.rideshield-pill:hover {
  background: rgba(30,30,36,0.03);
  color: var(--text-dark);
}

.rideshield-pill.active {
  background: var(--bg-arch);
  border: var(--border-dark);
  color: var(--text-dark);
  box-shadow: 0 3px 0 0 #1e1e24;
}

.rideshield-drawer-content {
  padding: 1.5rem;
  position: relative;
  min-height: 250px;
}

.rideshield-panel {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
  opacity: 0;
  transform: translateY(15px);
  pointer-events: none;
  transition: opacity var(--transition-normal), transform var(--transition-normal);
}

.rideshield-panel.active {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

/* Vertical Funnel Sizing (ROI Tracker) */
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
  transition: transform var(--transition-normal);
}

.funnel-stage:hover {
  transform: translateX(4px);
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
  color: var(--text-dark);
}

/* Specs Viewer Terminal styling */
.terminal-window {
  background: #ffffff;
  border-radius: 8px;
  border: var(--border-dark);
  padding: 1.25rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--text-dark);
  box-shadow: 0 4px 0px rgba(0,0,0,0.05);
}

.terminal-window .keyword { color: var(--accent-pink); font-weight: 600; }
.terminal-window .string { color: var(--accent-blue); }
.terminal-window .number { color: var(--accent-green); }
.terminal-window .comment { color: var(--text-secondary); }

/* Resilience Simulator Drawer details */
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
  transition: all var(--transition-normal);
}

.btn-trigger-simulator:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 #1e1e24;
}

.flow-node {
  background: var(--bg-card);
  border: 1.5px solid var(--text-dark);
  border-radius: 6px;
  padding: 0.4rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  text-align: center;
  transition: all var(--transition-normal);
}

.flow-node.highlight-cyan {
  background: var(--bg-arch);
  border-color: var(--accent-blue);
  color: var(--text-dark);
}

.flow-node.highlight-magenta {
  background: var(--bg-arch);
  border-color: var(--accent-pink);
  color: var(--text-dark);
  animation: pulse-node 1.5s infinite alternate;
}

@keyframes pulse-node {
  from { box-shadow: 0 0 3px rgba(244, 63, 94, 0.1); }
  to { box-shadow: 0 0 10px rgba(244, 63, 94, 0.3); }
}

/* Card B: Skill Shatter SVG Graph details */
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
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 2s ease-in-out;
}

.bento-card.card-skillshatter:hover .graph-svg-line {
  stroke-dashoffset: 0;
}

/* Card C: Dermalink Camera Mockup details */
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
  height: 90px;
  border-radius: 8px;
  border: 1.5px solid var(--text-dark);
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
    linear-gradient(rgba(30, 30, 36, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(30, 30, 36, 0.03) 1px, transparent 1px);
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
  transition: all var(--transition-normal);
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

@keyframes scanning-move {
  0% { top: 0%; }
  100% { top: 100%; }
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
  transition: all var(--transition-normal);
  text-align: center;
}

.btn-trigger-optimizer:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 0 0 #1e1e24;
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
  stroke-linecap: round;
}

.dial-fill {
  stroke-width: 12;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 377;
  stroke-dashoffset: 377;
  transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.8, 0.25, 1);
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

/* --- RESPONSIVE POLISH --- */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  
  .card-rideshield, .card-skillshatter, .card-dermalink {
    grid-column: span 1;
    grid-row: span 1;
  }

  .intro-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .profile-polaroid-container {
    max-width: 320px;
    margin: 0 auto;
  }
  
  .hero-headline {
    font-size: 3.5rem;
  }

  .svg-chart-engine {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
