import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Search, Flame, ArrowRight, ShieldAlert, Cpu, Heart, Star, Sparkles, Smile } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- CUTE INTERACTIVE MASCOT COMPONENT ---
function ProductMascot({ onSendEnergy }) {
  const [wink, setWink] = useState(false);

  useEffect(() => {
    // Wink every 4 seconds
    const interval = setInterval(() => {
      setWink(true);
      setTimeout(() => setWink(false), 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        {/* Animated SVG Cat Mascot */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="mascot-wiggle"
          style={{ width: '100%', height: '100%', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Ears */}
          <motion.polygon 
            points="20,30 10,10 40,25" 
            fill="#fef4a9" 
            stroke="#1a1a24" 
            strokeWidth="3" 
            strokeLinejoin="round"
            whileHover={{ rotate: -10, originX: 0.3, originY: 0.25 }}
          />
          <motion.polygon 
            points="80,30 90,10 60,25" 
            fill="#fef4a9" 
            stroke="#1a1a24" 
            strokeWidth="3" 
            strokeLinejoin="round"
            whileHover={{ rotate: 10, originX: 0.7, originY: 0.25 }}
          />
          
          {/* Head */}
          <circle cx="50" cy="55" r="35" fill="#ffffff" stroke="#1a1a24" strokeWidth="3" />
          
          {/* Inner Ears Pink */}
          <polygon points="23,26 16,13 34,22" fill="#ffb6c1" />
          <polygon points="77,26 84,13 66,22" fill="#ffb6c1" />
          
          {/* Eyes */}
          {wink ? (
            // Winking Eye (Left) and Closed Line (Right)
            <>
              <line x1="33" y1="52" x2="43" y2="52" stroke="#1a1a24" strokeWidth="4" strokeLinecap="round" />
              <path d="M60 55 Q65 48 70 55" fill="none" stroke="#1a1a24" strokeWidth="4" strokeLinecap="round" />
            </>
          ) : (
            // Open Eyes
            <>
              <circle cx="38" cy="52" r="5" fill="#1a1a24" />
              <circle cx="62" cy="52" r="5" fill="#1a1a24" />
              {/* Eye highlights */}
              <circle cx="36" cy="50" r="1.5" fill="#ffffff" />
              <circle cx="60" cy="50" r="1.5" fill="#ffffff" />
            </>
          )}

          {/* Cheeks */}
          <circle cx="30" cy="62" r="4" fill="#ffb6c1" opacity="0.6" />
          <circle cx="70" cy="62" r="4" fill="#ffb6c1" opacity="0.6" />

          {/* Nose & Mouth */}
          <polygon points="50,60 47,56 53,56" fill="#1a1a24" />
          <path d="M46 62 Q50 66 54 62" fill="none" stroke="#1a1a24" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Whiskers */}
          <line x1="20" y1="58" x2="5" y2="56" stroke="#1a1a24" strokeWidth="2.5" />
          <line x1="20" y1="64" x2="5" y2="66" stroke="#1a1a24" strokeWidth="2.5" />
          <line x1="80" y1="58" x2="95" y2="56" stroke="#1a1a24" strokeWidth="2.5" />
          <line x1="80" y1="64" x2="95" y2="66" stroke="#1a1a24" strokeWidth="2.5" />
        </motion.svg>
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)' }}>
          Winston 🐱 <span style={{ fontWeight: '400' }}>(Aditi's Product Mascot)</span>
        </p>
        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
          "Winks to verify server health. Hover to play!"
        </p>
      </div>
      
      <button 
        onClick={onSendEnergy}
        className="search-pill-button"
        style={{ fontSize: '0.75rem', padding: '0.4rem 1rem', background: '#ffe4e6', display: 'flex', gap: '0.4rem', alignItems: 'center' }}
      >
        <Heart size={14} fill="#f43f5e" color="#f43f5e" /> Send Positive Energy!
      </button>
    </div>
  );
}

// --- MAIN REACT COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('roi');
  const [claimsResult, setClaimsResult] = useState(null);
  
  // Dermalink scan sandbox
  const [camStep, setCamStep] = useState('idle');
  const [camLatency, setCamLatency] = useState(4.8);
  const [showCamReport, setShowCamReport] = useState(false);
  const camInterval = useRef(null);

  // Event Log hover sequence trail state
  const [hoveredNodeIdx, setHoveredNodeIdx] = useState(-1);
  const [trailTimeoutIds, setTrailTimeoutIds] = useState([]);

  // Recruiter analytics Typewriter
  const [eggText, setEggText] = useState('');
  const textToType = "Captured: Recruiter landed on Aditi's Portfolio. Conversion Probability: 99.8%.";
  
  // Floating emojis state
  const [floatingEmojis, setFloatingEmojis] = useState([]);

  useEffect(() => {
    // 1. Scroll Progress Handler
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercentage = scrollable > 0 ? (scrolled / scrollable) : 0;
      document.getElementById('progress-bar').style.transform = `scaleX(${progressPercentage})`;
    };
    window.addEventListener('scroll', handleScroll);

    // 2. GSAP Scroll Skew
    let proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter(".bento-grid", "skewY", "deg");
    const clamp = gsap.utils.clamp(-3, 3);

    ScrollTrigger.create({
      trigger: ".bento-grid",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -600);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: "auto",
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });
    gsap.set(".bento-grid", { transformOrigin: "center center", force3D: true });

    // 3. Recruiter analytics typewriter trigger
    let typeIndex = 0;
    const interval = setInterval(() => {
      if (typeIndex < textToType.length) {
        setEggText(prev => prev + textToType.charAt(typeIndex));
        typeIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      clearInterval(camInterval.current);
    };
  }, []);

  // --- POSITIVE ENERGY CLICK EMITTER ---
  const sendEnergy = (e) => {
    const emojis = ['💖', '🌟', '✨', '⚡', '🐱', '🐱', '💝'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const id = Date.now() + Math.random();
    
    // Position floating emojis near the button or cursor
    const newEmoji = {
      id,
      emoji: randomEmoji,
      x: (window.innerWidth / 2) + (Math.random() * 200 - 100),
      y: window.innerHeight - 150
    };

    setFloatingEmojis(prev => [...prev, newEmoji]);
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(item => item.id !== id));
    }, 2000);
  };

  // --- RIDESHIELD RESILIENCE FLOW TRIGGERS ---
  const [resilienceState, setResilienceState] = useState('idle'); // 'idle', 'sync', 'fallback', 'completed'
  
  const runResilienceSim = (e) => {
    e.stopPropagation();
    setResilienceState('sync');
    
    setTimeout(() => {
      setResilienceState('fallback');
      
      setTimeout(() => {
        setResilienceState('completed');
      }, 1500);
    }, 1200);
  };

  // --- DERMALINK PIPELINE CAMERA SCAN ---
  const runDermalinkScan = (e) => {
    e.stopPropagation();
    clearInterval(camInterval.current);
    setCamStep('scanning');
    setCamLatency(4.8);
    setShowCamReport(false);

    let currentLat = 4.8;
    camInterval.current = setInterval(() => {
      currentLat -= 0.35;
      if (currentLat <= 1.1) {
        clearInterval(camInterval.current);
        setCamLatency(1.1);
        setCamStep('completed');
        setShowCamReport(true);
      } else {
        setCamLatency(Number(currentLat.toFixed(1)));
      }
    }, 100);
  };

  // --- EVENT LOG FLOW PIPELINE HOVER FLOWS ---
  const startPipelineHover = () => {
    // Clear timeouts
    trailTimeoutIds.forEach(clearTimeout);
    setHoveredNodeIdx(-1);

    const ids = [];
    [0, 1, 2, 3].forEach((idx) => {
      const timeout = setTimeout(() => {
        setHoveredNodeIdx(idx);
      }, idx * 300);
      ids.push(timeout);
    });
    setTrailTimeoutIds(ids);
  };

  const endPipelineHover = () => {
    trailTimeoutIds.forEach(clearTimeout);
    setTrailTimeoutIds([]);
    setHoveredNodeIdx(-1);
  };

  return (
    <>
      {/* Dynamic Floating Emojis container */}
      <AnimatePresence>
        {floatingEmojis.map(item => (
          <motion.div
            key={item.id}
            className="energy-emoji-floating"
            initial={{ opacity: 1, y: item.y, x: item.x, scale: 0.5 }}
            animate={{ 
              opacity: 0, 
              y: item.y - 300, 
              x: item.x + (Math.random() * 100 - 50),
              scale: 1.5,
              rotate: Math.random() * 40 - 20
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* STICKY GLASSMORPHIC NAVBAR HEADER */}
      <header className="site-header">
        <div class="header-container">
          <a href="#hero" class="logo">ADITI<span>//VERMA</span></a>
          <nav aria-label="Main Navigation">
            <ul class="nav-links">
              <li class="active"><a href="#hero">Overview</a></li>
              <li><a href="#portfolio">Bento Portfolio</a></li>
              <li><a href="#metrics">Metrics Engine</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* CANVAS WRAPPER */}
      <main class="main-wrapper">
        
        {/* HERO SECTION */}
        <section id="hero" class="hero-section">
          {/* Curved dome arch */}
          <motion.div 
            className="hero-arch-container"
            initial={{ scaleY: 0.85, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          >
            <div className="hero-subtag">// SYSTEMS & GROWTH PRODUCT ARCHITECT</div>
            <motion.h1 
              className="hero-headline"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            >
              PORTFOLIO*
            </motion.h1>
            <motion.div 
              className="hero-capsule-row"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
            >
              <span className="hero-arrow">&rarr;</span>
              <span className="hero-capsule">2026</span>
            </motion.div>
            <div className="hero-scroll-down">
              <span>Scroll down to view</span>
              <span>&darr;</span>
            </div>
          </motion.div>

          {/* About introduction details */}
          <div class="intro-grid">
            <div class="intro-text-block">
              <h2 class="intro-title">
                Hello <motion.span 
                  style={{ display: 'inline-block' }}
                  animate={{ rotate: [0, 15, -10, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                >👋</motion.span><br />
                I'm Aditi!
              </h2>
              <p class="intro-desc">
                A systems & growth product PM designing zero-friction digital platforms at the cross-section of heavy backend logic, gamified user retention, and AI systems.
              </p>
              <div class="intro-cta-row">
                <a href="https://linkedin.com/in/aditi-verma" target="_blank" class="search-pill-button">
                  <span>🔍 linkedin.com/in/aditi-verma</span>
                </a>
                <a href="mailto:aditi.verma.pm@gmail.com" class="work-with-me-link">Work with Me!</a>
              </div>
            </div>

            {/* Polaroid profile card & mascot */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
              <div class="profile-polaroid-container">
                {/* Overlay tag badges */}
                <motion.div 
                  className="floating-card-tag tag-badge1"
                  whileHover={{ scale: 1.05, rotate: -5 }}
                >
                  Fintech PM! 🛡️
                </motion.div>
                <motion.div 
                  className="floating-card-tag tag-badge2"
                  whileHover={{ scale: 1.05, rotate: 10 }}
                >
                  Delhi, India 📍
                </motion.div>
                <motion.div 
                  className="floating-card-tag tag-badge3"
                  whileHover={{ scale: 1.05, rotate: -8 }}
                >
                  Growth Loops! 🚀
                </motion.div>

                <motion.div 
                  className="polaroid-card"
                  initial={{ rotate: 15, scale: 0.9, y: 30, opacity: 0 }}
                  animate={{ rotate: 3, scale: 1, y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                  whileHover={{ rotate: 0 }}
                >
                  <div class="polaroid-image-placeholder">👩‍💻</div>
                  <div class="polaroid-info">
                    <span class="polaroid-name">Aditi Verma <span style={{ fontWeight: 300, fontSize: '0.9rem', color: 'var(--text-muted)' }}>&bull; she/her</span></span>
                    <span class="polaroid-detail">Product Manager & System Architect</span>
                    <p class="polaroid-submsg">
                      Building digital products with extreme technical precision, clean architecture, and delightful customer moments.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Cat mascot widget */}
              <ProductMascot onSendEnergy={sendEnergy} />
            </div>
          </div>
        </section>

        {/* BENTO GRID PORTFOLIO */}
        <section id="portfolio" class="bento-grid-container">
          <span class="section-tag">// BENTO CASE PORTFOLIO</span>
          <h2 class="section-title">Selected Case Studies</h2>

          <div class="bento-grid">
            
            {/* CARD A: RIDESHIELD */}
            <motion.article 
              className="bento-card card-rideshield"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div>
                <div class="bento-meta">
                  <span class="bento-tag">Flagship Fintech Project</span>
                  <div class="hidden-pills">
                    <span class="pill-glow">MCC 5541 Hook</span>
                    <span class="pill-glow">VAHAN API</span>
                    <span class="pill-glow">10m Cooldown</span>
                  </div>
                </div>
                <h3 class="bento-title">RideShield // Contextual Micro-Insurance API Engine</h3>
                <p class="bento-desc">
                  Embedding micro-insurance trip covers directly inside fuel transaction payment gateways. Validates vehicle RC details via government VAHAN registries.
                </p>

                {/* RideShield Interactive Switcher Drawer */}
                <div class="rideshield-interactive-shell">
                  <div class="rideshield-pills-row">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveTab('roi'); }}
                      className={`rideshield-pill ${activeTab === 'roi' ? 'active' : ''}`}
                    >
                      [ Risk ROI Tracker ]
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveTab('specs'); }}
                      className={`rideshield-pill ${activeTab === 'specs' ? 'active' : ''}`}
                    >
                      [ Tech PRD Spec ]
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveTab('tolerance'); }}
                      className={`rideshield-pill ${activeTab === 'tolerance' ? 'active' : ''}`}
                    >
                      [ System Fault Tolerance ]
                    </button>
                  </div>
                  
                  <div class="rideshield-drawer-content">
                    <AnimatePresence mode="wait">
                      {activeTab === 'roi' && (
                        <motion.div 
                          key="roi"
                          className="rideshield-panel active"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div class="visual-funnel" aria-label="Market Conversion Funnel Diagram">
                            <div class="funnel-stage">
                              <span class="funnel-label">Active City Commuters</span>
                              <span class="funnel-metric">1,00,000 Riders</span>
                            </div>
                            <div class="funnel-stage" style={{ width: '90%' }}>
                              <span class="funnel-label">Fuel Transactions Daily</span>
                              <span class="funnel-metric">25,000 tx/day</span>
                            </div>
                            <div class="funnel-stage" style={{ width: '80%' }}>
                              <span class="funnel-label">Contextual Nudge CTR</span>
                              <span class="funnel-metric">8% (2,000)</span>
                            </div>
                            <div class="funnel-stage" style={{ width: '70%' }}>
                              <span class="funnel-label">Purchase Conversion</span>
                              <span class="funnel-metric">9% (180)</span>
                            </div>
                            <div class="funnel-stage final-conversion" style={{ width: '60%' }}>
                              <span class="funnel-label"><strong>Daily Gross Value</strong></span>
                              <span class="funnel-metric">₹1,62,000 per city</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'specs' && (
                        <motion.div 
                          key="specs"
                          className="rideshield-panel active"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div class="terminal-window">
                            <span class="comment">// REQ-001: Webhook Hook & VAHAN pipeline schema</span><br />
                            {<br />}
                            &nbsp;&nbsp;<span class="keyword">"webhookTrigger"</span>: <span class="string">"mcc_5541_checkout"</span>,<br />
                            &nbsp;&nbsp;<span class="keyword">"minimumFuelAmount"</span>: <span class="number">100.00</span>,<br />
                            &nbsp;&nbsp;<span class="keyword">"vahanLookup"</span>: {<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"endpoint"</span>: <span class="string">"https://api.vahan.gov.in/v2/rc"</span>,<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"rcStatusCheck"</span>: <span class="string">"ACTIVE"</span><br />
                            &nbsp;&nbsp;},<br />
                            &nbsp;&nbsp;<span class="keyword">"antiFraudCoolingWindow"</span>: <span class="string">"10_MINUTES"</span><br />
                            {<br />}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'tolerance' && (
                        <motion.div 
                          key="tolerance"
                          className="rideshield-panel active"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div class="resilience-status-box">
                            <p class="resilience-note">
                              VAHAN database lookup is throttled to <strong>1.5 seconds</strong>. Timeout spikes automatically downshift execution to background asynchronous workers.
                            </p>
                            <button 
                              onClick={runResilienceSim} 
                              disabled={resilienceState === 'sync' || resilienceState === 'fallback'}
                              class="btn-trigger-simulator"
                            >
                              {resilienceState === 'idle' ? 'Simulate VAHAN Latency Spike' : 
                               resilienceState === 'sync' ? 'Verifying RC Status...' :
                               resilienceState === 'fallback' ? 'Timeout Spike (>1.5s) - Downshifting...' : 
                               'Restart Resilience Simulator'}
                            </button>
                            
                            <div class="resilience-flowchart" style={{ marginTop: '1.25rem' }}>
                              <div className={`flow-node ${resilienceState === 'sync' ? 'highlight-cyan' : ''}`}>
                                NORMAL: Synchronous RC Fetch (Latency &lt; 1.5s)
                              </div>
                              <div className={`flow-node ${resilienceState === 'fallback' ? 'highlight-magenta' : resilienceState === 'completed' ? 'highlight-cyan' : ''}`}>
                                FALLBACK: Downshift process to Background Worker Queue
                              </div>
                              <div className={`flow-node ${resilienceState === 'completed' ? 'highlight-cyan' : ''}`}>
                                DELIVERY: WhatsApp policy PDF auto-delivery &lt; 5 min
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Claims Simulator Extra Widget */}
                <div class="claims-simulator-container">
                  <h4 class="claims-simulator-title">Simulated Interactive Claims Simulator</h4>
                  <p class="resilience-note">
                    Verify the 10-Minute Anti-Fraud buffer logic by auditing crash events.
                  </p>
                  <div class="claims-btn-row">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setClaimsResult('min4'); }}
                      class="btn-claim-sim"
                    >
                      Simulate Crash at Minute 4
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setClaimsResult('hour2'); }}
                      class="btn-claim-sim"
                    >
                      Simulate Crash at Hour 2
                    </button>
                  </div>
                  
                  <div className={`claim-output-terminal ${claimsResult === 'min4' ? 'denied' : claimsResult === 'hour2' ? 'approved' : ''}`}>
                    {claimsResult === null && '// Select a crash scenario above to audit the active claim status...'}
                    {claimsResult === 'min4' && 'CLAIM_AUDIT_DENIED: Crash occurred at Minute 4. Rule REQ-001 cooling window cooling latency buffer (10m) is active. Exploit blocked.'}
                    {claimsResult === 'hour2' && 'CLAIM_AUDIT_APPROVED: Crash occurred at Hour 2. 10m cooldown elapsed. Safety policy validated via background asynchronous sync records.'}
                  </div>
                </div>
              </div>
              
              <div class="bento-tech-stack">
                <span class="tech-tag">REST API</span>
                <span class="tech-tag">SQL</span>
                <span class="tech-tag">Queue Pipelines</span>
              </div>
            </motion.article>

            {/* CARD B: SKILL-SHATTER */}
            <motion.article 
              className="bento-card card-skillshatter"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div>
                <div class="bento-meta">
                  <span class="bento-tag">Edtech Gamification</span>
                  <div class="hidden-pills">
                    <span class="pill-glow">P2P Stock Ticker</span>
                    <span class="pill-glow">Streaks</span>
                  </div>
                </div>
                <h3 class="bento-title">Skill-Shatter // Gamified Student Engagement</h3>
                <p class="bento-desc">
                  Academic accountability platforms scaling user daily streak compliance and study behaviors.
                </p>

                {/* Behavioral Funnel Concept */}
                <div class="skillshatter-behavior-funnel">
                  <div class="skillshatter-funnel-card">
                    <div class="funnel-card-header">Frictionless Gamification</div>
                    <div class="funnel-card-desc">Reduces daily churn by converting student focus streaks into virtual investment assets. Peer accountability triggers social compliance.</div>
                  </div>
                </div>

                {/* Two-Column Persona Matrix */}
                <div class="persona-matrix-container">
                  <div class="persona-matrix-card">
                    <div class="matrix-header">Daily Driver Ramesh</div>
                    <p class="matrix-desc">Needs hyper-fast, low friction checkout moments. Daily gas transactions.</p>
                  </div>
                  <div class="persona-matrix-card">
                    <div class="matrix-header">Commuter Student Neha</div>
                    <p class="matrix-desc">Casual commuter. Responds to gamified notifications and visually prefilled data badges.</p>
                  </div>
                </div>

                {/* SVG stock graph path line */}
                <div class="skillshatter-graph-widget">
                  <div class="graph-header">
                    <span>Academic Stock Ticker ($FOCUS)</span>
                    <span>Streak Growth +28%</span>
                  </div>
                  <div class="svg-graph-container">
                    <svg viewBox="0 0 200 80" style={{ width: '100%', height: '100%' }}>
                      <motion.path 
                        className="graph-svg-line" 
                        d="M 0 60 Q 25 50 50 55 T 100 30 T 150 45 T 200 10" 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="bento-tech-stack" style={{ marginTop: '1.5rem' }}>
                <span class="tech-tag">React</span>
                <span class="tech-tag">Growth loops</span>
                <span class="tech-tag">Firebase</span>
              </div>
            </motion.article>

            {/* CARD C: DERMALINK */}
            <motion.article 
              className="bento-card card-dermalink"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div>
                <div class="bento-meta">
                  <span class="bento-tag">AI Systems PM</span>
                  <div class="hidden-pills">
                    <span class="pill-glow">LLM API</span>
                    <span class="pill-glow">Camera CV</span>
                  </div>
                </div>
                <h3 class="bento-title">Dermalink // Cosmetic Ingredient Auditor</h3>
                <p class="bento-desc">
                  AI product auditor linking mobile cameras to a third-party LLM API pipeline for real-time allergen check and cosmetic ingredient analysis.
                </p>

                {/* Interactive Camera Sandbox mock widget */}
                <div class="dermalink-scan-widget">
                  <div className={`scanner-viewport ${camStep === 'scanning' ? 'scanner-active' : ''}`} id="cam-viewport">
                    <div class="scanner-view-grid"></div>
                    <div class="scanner-laser-bar"></div>
                    <div class="scanner-target-mock">
                      {camStep === 'idle' && 'WAITING_FOR_IMAGE'}
                      {camStep === 'scanning' && 'UPLOADING_TARGET...'}
                      {camStep === 'completed' && 'RC_CHECK_COMPLETED'}
                    </div>
                  </div>
                  
                  <div class="scanner-stats-row">
                    <span class="scanner-latency-label">Camera Processing Latency</span>
                    <span className={`scanner-latency-val ${camStep === 'completed' ? 'optimized' : ''}`}>
                      {camLatency}s
                    </span>
                  </div>
                  <button 
                    onClick={runDermalinkScan} 
                    disabled={camStep === 'scanning'}
                    class="btn-trigger-optimizer"
                  >
                    Scan Skincare Ingredients
                  </button>
                  
                  <AnimatePresence>
                    {showCamReport && (
                      <motion.div 
                        className="scanner-output-report active"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <strong>SCANNER_REPORT:</strong> Active ingredients found: Niacinamide (4%), Salicylic Acid (2%). Safe for skin types: Oily, Sensitive. Allergen check: PASS. Optimized latency sprint slashed response times by 77% (4.8s &rarr; 1.1s).
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div class="bento-tech-stack">
                <span class="tech-tag">FastAPI</span>
                <span class="tech-tag">LLM API</span>
                <span class="tech-tag">Fast Resizing</span>
              </div>
            </motion.article>

          </div>
        </section>

        {/* METRICS & FUNNELS ENGINE */}
        <section id="metrics">
          <span class="section-tag">// STRATEGIC OPTIMIZATIONS</span>
          <h2 class="section-title">Funnels & Optimization Framework</h2>

          <div class="custom-metrics-engine">
            <div class="svg-chart-engine">
              
              {/* Acquisition Dial */}
              <div class="chart-card-stage">
                <div class="svg-dial-container">
                  <svg viewBox="0 0 140 140" class="dial-svg">
                    <circle cx="70" cy="70" r="60" class="dial-track" />
                    <motion.circle 
                      cx="70" cy="70" r="60" 
                      className="dial-fill fill-cyan-grad" 
                      initial={{ strokeDashoffset: 377 }}
                      whileInView={{ strokeDashoffset: 377 - (377 * 0.12) }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.8, ease: 'easeOut' }}
                    />
                  </svg>
                  <div class="dial-label-overlay">
                    <span class="dial-number">12</span>
                    <span class="dial-unit">CTR %</span>
                  </div>
                </div>
                <h3 class="chart-stage-name">Acquisition</h3>
                <p class="chart-stage-desc">Nudge impressions driving contextual user clicks at pump checkouts.</p>
              </div>

              {/* Activation Dial */}
              <div class="chart-card-stage">
                <div class="svg-dial-container">
                  <svg viewBox="0 0 140 140" class="dial-svg">
                    <circle cx="70" cy="70" r="60" class="dial-track" />
                    <motion.circle 
                      cx="70" cy="70" r="60" 
                      className="dial-fill fill-green-grad" 
                      initial={{ strokeDashoffset: 377 }}
                      whileInView={{ strokeDashoffset: 377 - (377 * 0.65) }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.8, ease: 'easeOut' }}
                    />
                  </svg>
                  <div class="dial-label-overlay">
                    <span class="dial-number">65</span>
                    <span class="dial-unit">Conv %</span>
                  </div>
                </div>
                <h3 class="chart-stage-name">Activation</h3>
                <p class="chart-stage-desc">1-Click VAHAN prefill logic scaling checkout purchase completion.</p>
              </div>

              {/* Retention Dial */}
              <div class="chart-card-stage">
                <div class="svg-dial-container">
                  <svg viewBox="0 0 140 140" class="dial-svg">
                    <circle cx="70" cy="70" r="60" class="dial-track" />
                    <motion.circle 
                      cx="70" cy="70" r="60" 
                      className="dial-fill fill-magenta-grad" 
                      initial={{ strokeDashoffset: 377 }}
                      whileInView={{ strokeDashoffset: 377 - (377 * 0.25) }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.8, ease: 'easeOut' }}
                    />
                  </svg>
                  <div class="dial-label-overlay">
                    <span class="dial-number">25</span>
                    <span class="dial-unit">Renew %</span>
                  </div>
                </div>
                <h3 class="chart-stage-name">Retention</h3>
                <p class="chart-stage-desc">23rd-Hour Whatsapp subscriptions securing daily auto-renewals.</p>
              </div>
            </div>

            {/* Hover Sequential Event Log Flowchart Pipeline */}
            <div class="event-log-pipeline-card">
              <h3 class="pipeline-title">Visual Event Log Pipeline</h3>
              <p class="resilience-note" style={{ marginBottom: '1.5rem' }}>
                Hover over the pipeline card area below to trace the step-by-step active policy logs.
              </p>
              <div 
                className="pipeline-flow" 
                id="pipeline-container"
                onMouseEnter={startPipelineHover}
                onMouseLeave={endPipelineHover}
              >
                <div className={`pipeline-node ${hoveredNodeIdx >= 0 ? 'active-trail' : ''}`}>
                  <h4>payment_success</h4>
                  <p>User checkout completed</p>
                </div>
                <div className={`pipeline-node ${hoveredNodeIdx >= 1 ? 'active-trail' : ''}`}>
                  <h4>vahan_rc_check</h4>
                  <p>Government registry checks verified</p>
                </div>
                <div className={`pipeline-node ${hoveredNodeIdx >= 2 ? 'active-trail' : ''}`}>
                  <h4>risk_approved</h4>
                  <p>Anti-fraud rule logs valid</p>
                </div>
                <div className={`pipeline-node ${hoveredNodeIdx >= 3 ? 'active-trail' : ''}`}>
                  <h4>whatsapp_delivery</h4>
                  <p>Policy certificate auto-delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Recruiter Analytics Easter Egg */}
      <div class="recruiter-analytics-egg">
        <div class="egg-header">
          <span>RECRUITER_ANALYTICS_v1.0</span>
          <span style={{ color: 'var(--accent-pink)', display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
            ● LIVE
          </span>
        </div>
        <div class="egg-text">
          Funnel Event: {eggText}
        </div>
        <a href="mailto:aditi.verma.pm@gmail.com?subject=Interview%20Invitation%20-%20Aditi%20Verma" class="egg-cta">
          Book interview before slots expire
        </a>
      </div>
    </>
  );
}
