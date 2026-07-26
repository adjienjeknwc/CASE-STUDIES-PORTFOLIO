@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

/* --- CUSTOM VARIABLES --- */
:root {
  --bg-darker: #050507;
  --bg-dark: #0c0c0e;
  --bg-card: #131316;
  --bg-card-hover: #19191d;
  
  --accent-cyan: #00f2fe;
  --accent-green: #39ff14;
  --accent-magenta: #ff007f;
  
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  
  --border-glow-cyan: rgba(0, 242, 254, 0.2);
  --border-glow-green: rgba(57, 255, 20, 0.2);
  --border-glow-magenta: rgba(255, 0, 127, 0.2);
  
  --radius-md: 16px;
  --radius-lg: 24px;
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
  color: var(--text-primary);
  background-color: var(--bg-darker);
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(0, 242, 254, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, rgba(255, 0, 127, 0.03) 0%, transparent 40%);
}

/* --- FIXED PROGRESS INDICATOR --- */
#progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-green), var(--accent-magenta));
  transform-origin: 0 50%;
  transform: scaleX(0);
  z-index: 1000;
}

/* --- STICKY GLASSMORPHIC HEADER --- */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background-color: rgba(5, 5, 7, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
  font-size: 1.25rem;
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
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition-normal);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links li.active a {
  color: var(--accent-cyan);
}

/* --- MAIN CONTAINER --- */
.main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 6rem 2rem;
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
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
  display: block;
}

.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3rem;
  letter-spacing: -0.5px;
}

/* --- HERO SECTION --- */
.hero-section {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.hero-subtag {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: var(--accent-magenta);
  margin-bottom: 1.5rem;
  display: block;
}

.hero-headline {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -2px;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--text-primary) 30%, #475569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subheadline {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 800px;
}

/* --- BENTO GRID SYSTEM --- */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(360px, auto);
  gap: 2rem;
}

/* Bento Card Default */
.bento-card {
  background-color: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-lg);
  padding: 2.25rem;
  position: relative;
  overflow: hidden;
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Custom Gradient Glow Mouse Hover effect containers */
.bento-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.02) 0%, transparent 60%);
  pointer-events: none;
  z-index: 2;
}

/* Hover Accent shadows & border colors */
.bento-card.card-rideshield:hover {
  border-color: var(--border-glow-cyan);
  box-shadow: 0 20px 40px -15px rgba(0, 242, 254, 0.15);
}

.bento-card.card-skillshatter:hover {
  border-color: var(--border-glow-green);
  box-shadow: 0 20px 40px -15px rgba(57, 255, 20, 0.15);
}

.bento-card.card-dermalink:hover {
  border-color: var(--border-glow-magenta);
  box-shadow: 0 20px 40px -15px rgba(255, 0, 127, 0.15);
}

/* Grid Area Layout Assignment */
.card-rideshield {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

.card-skillshatter {
  grid-column: span 1;
  grid-row: span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-dermalink {
  grid-column: span 1;
  grid-row: span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Bento Typography */
.bento-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.bento-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.05);
}

.card-rideshield .bento-tag { color: var(--accent-cyan); background: rgba(0, 242, 254, 0.05); }
.card-skillshatter .bento-tag { color: var(--accent-green); background: rgba(57, 255, 20, 0.05); }
.card-dermalink .bento-tag { color: var(--accent-magenta); background: rgba(255, 0, 127, 0.05); }

.bento-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.bento-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
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
  color: var(--text-secondary);
  background: #18181c;
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255,255,255,0.03);
}

/* Dynamic Hidden Pills (reveal on hover) */
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
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.card-rideshield .pill-glow { border: 1px solid var(--accent-cyan); color: var(--accent-cyan); }
.card-skillshatter .pill-glow { border: 1px solid var(--accent-green); color: var(--accent-green); }
.card-dermalink .pill-glow { border: 1px solid var(--accent-magenta); color: var(--accent-magenta); }

/* --- Flagship Card (RideShield) Nested Layouts --- */
.rideshield-interactive-shell {
  background: var(--bg-darker);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  margin-top: 1.5rem;
  overflow: hidden;
}

.rideshield-tabs {
  display: flex;
  background: #0f0f12;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.rideshield-tab {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-align: center;
}

.rideshield-tab:hover {
  color: var(--text-secondary);
}

.rideshield-tab.active {
  color: var(--accent-cyan);
  background: var(--bg-darker);
  border-bottom: 1px solid var(--accent-cyan);
}

.rideshield-tab-content {
  padding: 1.5rem;
  min-height: 200px;
}

.rideshield-panel {
  display: none;
  animation: fade-in 0.3s ease-out;
}

.rideshield-panel.active {
  display: block;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Tab 1: Strategy Calculations */
.guesstimate-calc-tree {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  color: var(--text-secondary);
}

.calc-step {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px dashed rgba(255,255,255,0.03);
}

.calc-step:last-child {
  border-bottom: none;
  color: var(--accent-cyan);
  font-weight: 700;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  border-top: 1px solid rgba(0, 242, 254, 0.3);
  padding-top: 0.6rem;
}

/* Tab 2: IDE Terminal style */
.ide-terminal-editor {
  background: #08080a;
  border-radius: var(--radius-sm);
  padding: 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #94a3b8;
  border: 1px solid rgba(255, 255, 255, 0.02);
}

.ide-terminal-editor .keyword { color: #ff007f; }
.ide-terminal-editor .string { color: #00f2fe; }
.ide-terminal-editor .number { color: #39ff14; }
.ide-terminal-editor .comment { color: #64748b; }

/* Tab 3: Resilience Drawer Trigger details */
.resilience-status-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resilience-alert {
  background: rgba(255, 0, 127, 0.05);
  border: 1px solid rgba(255, 0, 127, 0.2);
  border-radius: var(--radius-sm);
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  line-height: 1.4;
}

.btn-resilience-demo {
  background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
  color: var(--bg-darker);
  border: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: opacity var(--transition-normal);
}

.btn-resilience-demo:hover {
  opacity: 0.9;
}

.resilience-flow-visualization {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.resilience-node {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 0.4rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  text-align: center;
  transition: all var(--transition-normal);
}

.resilience-node.highlighted {
  border-color: var(--accent-cyan);
  background: rgba(0, 242, 254, 0.05);
  color: var(--accent-cyan);
}

.resilience-node.fallback-mode {
  border-color: var(--accent-magenta);
  background: rgba(255, 0, 127, 0.05);
  color: var(--accent-magenta);
  animation: glow-pulse 1.5s infinite alternate;
}

@keyframes glow-pulse {
  from { box-shadow: 0 0 5px rgba(255, 0, 127, 0.2); }
  to { box-shadow: 0 0 15px rgba(255, 0, 127, 0.5); }
}

/* Card B: Skill Shatter Custom Widget */
.skillshatter-widget {
  background: var(--bg-darker);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  margin-top: 1rem;
}

.stock-market-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  font-family: 'Fira Code', monospace;
}

.stock-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.02);
}

.stock-item:last-child {
  border-bottom: none;
}

.stock-name {
  font-size: 0.8rem;
  font-weight: 600;
}

.stock-price {
  font-family: 'Fira Code', monospace;
  font-size: 0.75rem;
}

.stock-price.up { color: var(--accent-green); }
.stock-price.down { color: var(--accent-magenta); }

/* Card C: Dermalink Custom Widget */
.dermalink-widget {
  background: var(--bg-darker);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.latency-bar-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.latency-label {
  font-size: 0.7rem;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
}

.latency-bar-track {
  height: 6px;
  background: rgba(255,255,255,0.05);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.latency-bar-fill {
  height: 100%;
  background: var(--accent-magenta);
  border-radius: 3px;
  width: 100%;
  transition: width var(--transition-slow);
}

.latency-bar-fill.optimized {
  background: var(--accent-cyan);
  width: 23%;
}

.btn-optimize-dermalink {
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  color: var(--text-secondary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.4rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  text-align: center;
  transition: all var(--transition-normal);
}

.btn-optimize-dermalink:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}

/* --- SECTION 3: METRICS ENGINE --- */
.metrics-card {
  background: var(--bg-card);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-lg);
  padding: 3rem;
  box-shadow: var(--shadow-lg);
}

.metrics-engine-container {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.metric-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.metric-stage-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.metric-target-val {
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  font-weight: 600;
}

.metric-progress-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.metric-progress-fill {
  height: 100%;
  width: 0%;
  border-radius: 4px;
  transition: width var(--transition-slow);
}

.fill-cyan {
  background: linear-gradient(90deg, var(--accent-cyan), #00a8ff);
  box-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
}

.fill-green {
  background: linear-gradient(90deg, var(--accent-green), #05c46b);
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
}

.fill-magenta {
  background: linear-gradient(90deg, var(--accent-magenta), #ef5777);
  box-shadow: 0 0 10px rgba(255, 0, 127, 0.5);
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
}
