@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* --- CUSTOM VARIABLES --- */
:root {
  --bg-darkest: #040405;
  --bg-darker: #08080a;
  --bg-card: rgba(17, 17, 21, 0.45);
  
  --accent-cyan: #00f2fe;
  --accent-green: #39ff14;
  --accent-magenta: #ff007f;
  --accent-amber: #ff6b00;
  
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #475569;
  
  --radius-md: 16px;
  --radius-lg: 28px;
  --transition-normal: 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
  --transition-slow: 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* --- BASE SETUP --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: 'Inter', sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-darkest);
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(0, 242, 254, 0.05) 0%, transparent 45%),
    radial-gradient(circle at 90% 80%, rgba(255, 0, 127, 0.04) 0%, transparent 45%);
}

/* --- SCROLL PROGRESS LINE --- */
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green), var(--accent-magenta));
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 1000;
}

/* --- STICKY NAV HEADER --- */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(4, 4, 5, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-container {
  max-width: 1200px;
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
  letter-spacing: -0.5px;
  color: var(--text-primary);
  text-decoration: none;
}

.logo span {
  color: var(--accent-cyan);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  transition: color var(--transition-normal);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-cyan);
  transition: width var(--transition-normal);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links li.active a {
  color: var(--text-primary);
}

.nav-links li.active a::after {
  width: 100%;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green));
}

/* --- CANVAS & LAYOUT --- */
.main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 9rem 2rem 6rem 2rem;
}

section {
  padding-bottom: 8rem;
}

.section-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-cyan);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.75rem;
  display: block;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3rem;
  letter-spacing: -1px;
}

/* --- HERO SECTION (KINETIC TEXT) --- */
.hero-section {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-subtag {
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  color: var(--accent-magenta);
  margin-bottom: 1rem;
  overflow: hidden;
}

.hero-headline-container {
  overflow: hidden;
  margin-bottom: 2rem;
}

.hero-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -2px;
  background: linear-gradient(135deg, var(--text-primary) 30%, #475569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subheadline {
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 850px;
}

/* --- BENTO GRID WITH SCROLL SKEW --- */
.bento-grid-container {
  perspective: 1200px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(380px, auto);
  gap: 2.5rem;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out; /* Smooth skew transitions */
}

/* Acrylic Glassmorphism Card styling */
.bento-card {
  background-color: var(--bg-card);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Cursor spotlight overlay */
.bento-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.035) 0%, transparent 60%);
  pointer-events: none;
  z-index: 2;
}

/* Card Glow Shadows & Accents */
.bento-card.card-rideshield:hover {
  border-color: rgba(0, 242, 254, 0.4);
  box-shadow: 0 15px 35px -10px rgba(0, 242, 254, 0.25);
}

.bento-card.card-skillshatter:hover {
  border-color: rgba(57, 255, 20, 0.4);
  box-shadow: 0 15px 35px -10px rgba(57, 255, 20, 0.25);
}

.bento-card.card-dermalink:hover {
  border-color: rgba(255, 0, 127, 0.4);
  box-shadow: 0 15px 35px -10px rgba(255, 0, 127, 0.25);
}

/* Grid Layout Allocation */
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

/* Typography elements */
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
  background: rgba(255, 255, 255, 0.05);
}

.card-rideshield .bento-tag { color: var(--accent-cyan); background: rgba(0, 242, 254, 0.05); }
.card-skillshatter .bento-tag { color: var(--accent-green); background: rgba(57, 255, 20, 0.05); }
.card-dermalink .bento-tag { color: var(--accent-magenta); background: rgba(255, 0, 127, 0.05); }

.bento-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.bento-desc {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Technical hidden pills (slide in on hover) */
.hidden-pills {
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(12px);
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
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.card-rideshield .pill-glow { border: 1px solid var(--accent-cyan); color: var(--accent-cyan); }
.card-skillshatter .pill-glow { border: 1px solid var(--accent-green); color: var(--accent-green); }
.card-dermalink .pill-glow { border: 1px solid var(--accent-magenta); color: var(--accent-magenta); }

.bento-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}

.tech-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.05);
}

/* --- 1. RIDESHIELD DETAILS SPECIFICALLY --- */
.rideshield-interactive-shell {
  background: rgba(4, 4, 5, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  overflow: hidden;
}

.rideshield-pills-row {
  display: flex;
  padding: 0.75rem 1rem;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.rideshield-pill {
  flex: 1;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.6rem;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  transition: all var(--transition-normal);
}

.rideshield-pill:hover {
  border-color: var(--accent-cyan);
  color: var(--text-primary);
}

.rideshield-pill.active {
  border-color: var(--accent-cyan);
  background: rgba(0, 242, 254, 0.06);
  color: var(--accent-cyan);
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.25);
}

.rideshield-drawer-content {
  padding: 1.75rem;
  position: relative;
  min-height: 250px;
}

.rideshield-panel {
  position: absolute;
  top: 1.75rem;
  left: 1.75rem;
  width: calc(100% - 3.5rem);
  opacity: 0;
  transform: translateY(20px);
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
  gap: 0.6rem;
}

.funnel-stage {
  height: 38px;
  background: rgba(255, 255, 255, 0.02);
  border-left: 4px solid var(--accent-cyan);
  border-radius: 4px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: all var(--transition-normal);
}

.funnel-stage:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(4px);
}

.funnel-label {
  font-weight: 500;
}

.funnel-metric {
  font-family: 'Fira Code', monospace;
  font-weight: 600;
  color: var(--text-primary);
}

.funnel-stage.final-conversion {
  border-left-color: var(--accent-green);
  background: rgba(57, 255, 20, 0.04);
}

.funnel-stage.final-conversion .funnel-metric {
  color: var(--accent-green);
}

/* IDE Term Specs */
.terminal-window {
  background: #08080c;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.06);
  padding: 1.25rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  line-height: 1.6;
  color: #a1a1aa;
}

.terminal-window .keyword { color: var(--accent-magenta); }
.terminal-window .string { color: var(--accent-cyan); }
.terminal-window .number { color: var(--accent-green); }
.terminal-window .comment { color: var(--text-muted); }

/* System Resilience Panel & Simulation nodes */
.resilience-flowchart {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resilience-note {
  font-size: 0.8rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.btn-trigger-simulator {
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
  color: var(--bg-darkest);
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity var(--transition-normal);
}

.btn-trigger-simulator:hover {
  opacity: 0.9;
}

.flow-node {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  padding: 0.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  text-align: center;
  transition: all var(--transition-normal);
}

.flow-node.highlight-cyan {
  border-color: var(--accent-cyan);
  background: rgba(0, 242, 254, 0.06);
  color: var(--accent-cyan);
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);
}

.flow-node.highlight-magenta {
  border-color: var(--accent-magenta);
  background: rgba(255, 0, 127, 0.06);
  color: var(--accent-magenta);
  animation: pulse-node 1.5s infinite alternate;
}

@keyframes pulse-node {
  from { box-shadow: 0 0 5px rgba(255, 0, 127, 0.1); }
  to { box-shadow: 0 0 15px rgba(255, 0, 127, 0.4); }
}

/* --- 2. SKILL-SHATTER GRAPH SPECIFICS --- */
.skillshatter-graph-widget {
  background: rgba(4, 4, 5, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
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
  stroke: var(--accent-green);
  stroke-width: 3;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: drop-shadow(0px 0px 5px rgba(57, 255, 20, 0.4));
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset 2s ease-in-out;
}

.bento-card.card-skillshatter:hover .graph-svg-line {
  stroke-dashoffset: 0;
}

/* --- 3. DERMALINK SCANNER SPECIFICS --- */
.dermalink-scan-widget {
  background: rgba(4, 4, 5, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
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
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: radial-gradient(rgba(255, 0, 127, 0.03) 0%, transparent 80%), #09090c;
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
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 15px 15px;
}

.scanner-target-mock {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: var(--text-secondary);
  border: 1.5px dashed rgba(255, 0, 127, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  z-index: 5;
  transition: all var(--transition-normal);
}

.scanner-viewport.scanner-active .scanner-target-mock {
  border-color: var(--accent-green);
  color: var(--accent-green);
  background: rgba(57, 255, 20, 0.04);
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.15);
}

.scanner-laser-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-magenta);
  box-shadow: 0 0 8px var(--accent-magenta);
  z-index: 6;
  animation: scanning-move 2.5s infinite alternate ease-in-out;
}

.scanner-viewport.scanner-active .scanner-laser-bar {
  background: var(--accent-green);
  box-shadow: 0 0 8px var(--accent-green);
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
  font-weight: 600;
  color: var(--accent-magenta);
}

.scanner-latency-val.optimized {
  color: var(--accent-cyan);
}

.btn-trigger-optimizer {
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  color: var(--text-secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-align: center;
}

.btn-trigger-optimizer:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}

/* --- THE METRICS ENGINE ENGINE --- */
.custom-metrics-engine {
  background-color: var(--bg-card);
  backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
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
  stroke: rgba(255, 255, 255, 0.02);
  stroke-width: 12;
  fill: none;
}

.dial-fill {
  stroke-width: 12;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 377; /* 2 * PI * R where R = 60 */
  stroke-dashoffset: 377;
  transition: stroke-dashoffset 2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fill-cyan-grad {
  stroke: var(--accent-cyan);
  filter: drop-shadow(0 0 6px rgba(0, 242, 254, 0.4));
}

.fill-green-grad {
  stroke: var(--accent-green);
  filter: drop-shadow(0 0 6px rgba(57, 255, 20, 0.4));
}

.fill-magenta-grad {
  stroke: var(--accent-magenta);
  filter: drop-shadow(0 0 6px rgba(255, 0, 127, 0.4));
}

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
  color: var(--text-primary);
}

.dial-unit {
  font-size: 0.65rem;
  color: var(--text-secondary);
  text-transform: uppercase;
}

.chart-stage-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
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
  
  .hero-headline {
    font-size: 3.2rem;
  }

  .svg-chart-engine {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
