<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aditi Verma // Product & Systems Architect</title>
  <meta name="description" content="Portfolio of Aditi Verma, Product and Systems Architect specializing in Fintech, AI pipelines, and Gamified Growth loops.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Native / Fallback Scroll Progress Indicator -->
  <div id="progress-bar" aria-hidden="true"></div>

  <!-- STICKY GLASSMORPHIC HEADER NAVBAR -->
  <header class="site-header">
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

  <!-- MAIN CANVAS -->
  <main class="main-wrapper">

    <!-- HERO SECTION -->
    <section id="hero" class="hero-section">
      <span class="hero-subtag">// SYSTEMS & GROWTH PRODUCT ARCHITECT</span>
      <h1 class="hero-headline">
        Aditi Verma // <br>
        Product & Systems Architect
      </h1>
      <p class="hero-subheadline">
        Engineering zero-friction digital platforms at the cross-section of heavy backend logic, gamified user retention, and AI systems.
      </p>
    </section>

    <!-- BENTO GRID SHOWCASE -->
    <section id="portfolio">
      <span class="section-tag">// BENTO GRID PORTFOLIO</span>
      <h2 class="section-title">Selected Systems & Case Studies</h2>

      <div class="bento-grid">
        <!-- CARD A: RIDESHIELD (FLAGSHIP) -->
        <article class="bento-card card-rideshield" data-accent="cyan">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">Flagship Fintech Project</span>
              <div class="hidden-pills">
                <span class="pill-glow">MCC 5541 Hook</span>
                <span class="pill-glow">VAHAN API</span>
                <span class="pill-glow">10m Anti-Fraud</span>
              </div>
            </div>
            <h3 class="bento-title">RideShield // Contextual Micro-Insurance API Engine</h3>
            <p class="bento-desc">
              Contextual micro-insurance plugin protecting two-wheeler commuters against accident expenses, triggered at the point of fuel payment success. Leverages government VAHAN registries and an optimized anti-fraud buffer.
            </p>

            <!-- RideShield Nested Shell -->
            <div class="rideshield-interactive-shell">
              <div class="rideshield-tabs">
                <button class="rideshield-tab active" id="tab-strategy">Risk Strategy</button>
                <button class="rideshield-tab" id="tab-specs">PRD Spec Terminal</button>
                <button class="rideshield-tab" id="tab-resilience">Resilience Drawer</button>
              </div>
              
              <div class="rideshield-tab-content">
                <!-- Panel 1: Strategy Calculations -->
                <div class="rideshield-panel active" id="panel-strategy">
                  <div class="guesstimate-calc-tree">
                    <div class="calc-step">
                      <span>Total Active Two-Wheeler Commuters</span>
                      <span>1,00,000 Riders</span>
                    </div>
                    <div class="calc-step">
                      <span>Daily Fuel Transactions (MCC 5541)</span>
                      <span>25,000 tx/day</span>
                    </div>
                    <div class="calc-step">
                      <span>Contextual Nudge Click-Through Rate (CTR)</span>
                      <span>8% (2,000 clicks)</span>
                    </div>
                    <div class="calc-step">
                      <span>Purchase Conversion Rate</span>
                      <span>9% (180 policies)</span>
                    </div>
                    <div class="calc-step">
                      <span>RideShield Policy Premium Cost</span>
                      <span>₹90 per policy GTV</span>
                    </div>
                    <div class="calc-step">
                      <strong>Daily Gross Transaction Value (GTV)</strong>
                      <strong>₹1,62,000 per city</strong>
                    </div>
                  </div>
                </div>

                <!-- Panel 2: IDE Spec -->
                <div class="rideshield-panel" id="panel-specs">
                  <div class="ide-terminal-editor">
                    <span class="comment">// REQ-001: Contextual Hook Orchestrator</span><br>
                    {<br>
                    &nbsp;&nbsp;<span class="keyword">"trigger"</span>: <span class="string">"mcc_5541_payment"</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"rules"</span>: [<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;{ <span class="keyword">"param"</span>: <span class="string">"amount"</span>, <span class="keyword">"min"</span>: <span class="number">100.00</span> }<br>
                    &nbsp;&nbsp;],<br>
                    &nbsp;&nbsp;<span class="keyword">"antiFraudDelay"</span>: <span class="string">"10m"</span> <span class="comment">// 10-minute active buffer</span><br>
                    }
                  </div>
                </div>

                <!-- Panel 3: Resilience Drawer -->
                <div class="rideshield-panel" id="panel-resilience">
                  <div class="resilience-status-box">
                    <div class="resilience-alert">
                      VAHAN database lookupTimeout is set to <strong>1.5 seconds</strong> limit. When timeout hits, system downshifts to async worker queue.
                    </div>
                    <button class="btn-resilience-demo" id="btn-simulate-resilience">Simulate VAHAN Latency Spike</button>
                    
                    <div class="resilience-flow-visualization">
                      <div class="resilience-node" id="node-normal">NORMAL: Synchronous DB Check (Latency < 1.5s)</div>
                      <div class="resilience-node" id="node-fallback">FALLBACK: Downshift to Async Worker Queue</div>
                      <div class="resilience-node" id="node-whatsapp">DELIVERY: Route Policy to WhatsApp within 5 minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bento-tech-stack">
            <span class="tech-tag">REST API</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">Webhook Orchestrator</span>
            <span class="tech-tag">Asynchronous Queue</span>
          </div>
        </article>

        <!-- CARD B: SKILL-SHATTER -->
        <article class="bento-card card-skillshatter" data-accent="green">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">Edtech Growth Loops</span>
              <div class="hidden-pills">
                <span class="pill-glow">P2P Accountability</span>
                <span class="pill-glow">Streak Multiplier</span>
              </div>
            </div>
            <h3 class="bento-title">Skill-Shatter // Gamified Student Engagement</h3>
            <p class="bento-desc">
              Hyper-growth consumer platform containing retention systems and social gamification loops to secure study focus and scale engagement.
            </p>

            <!-- Academic Stock Market Widget -->
            <div class="skillshatter-widget">
              <div class="stock-market-header">
                <span>Academic Stock Market</span>
                <span>Live Streaks</span>
              </div>
              <div class="stock-item">
                <span class="stock-name">Ramesh Verma ($FOCUS)</span>
                <span class="stock-price up">+23% (14d streak)</span>
              </div>
              <div class="stock-item">
                <span class="stock-name">Neha Sharma ($REST)</span>
                <span class="stock-price down">-12% (0d break)</span>
              </div>
            </div>
          </div>

          <div class="bento-tech-stack">
            <span class="tech-tag">Growth loops</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Firebase Auth</span>
          </div>
        </article>

        <!-- CARD C: DERMALINK -->
        <article class="bento-card card-dermalink" data-accent="magenta">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">Consumer AI Product</span>
              <div class="hidden-pills">
                <span class="pill-glow">LLM Pipeline</span>
                <span class="pill-glow">CV scanning</span>
              </div>
            </div>
            <h3 class="bento-title">Dermalink // Intelligent AI Product Auditor</h3>
            <p class="bento-desc">
              AI product auditor linking mobile cameras to a third-party LLM API pipeline for real-time allergen check and cosmetic ingredient analysis.
            </p>

            <!-- Latency Optimization Widget -->
            <div class="dermalink-widget">
              <div class="latency-bar-container">
                <div class="latency-label">
                  <span>Image Upload Processing Latency</span>
                  <span id="latency-val">4.8s</span>
                </div>
                <div class="latency-bar-track">
                  <div class="latency-bar-fill" id="latency-fill"></div>
                </div>
              </div>
              <button class="btn-optimize-dermalink" id="btn-run-latency-optimization">Optimize Upload Pipeline</button>
            </div>
          </div>

          <div class="bento-tech-stack">
            <span class="tech-tag">FastAPI</span>
            <span class="tech-tag">LLM API</span>
            <span class="tech-tag">Computer Vision</span>
          </div>
        </article>
      </div>
    </section>

    <!-- INTERACTIVE METRICS ENGINE -->
    <section id="metrics">
      <span class="section-tag">// PERFORMANCE METRICS</span>
      <h2 class="section-title">Funnels & Optimization Framework</h2>

      <div class="metrics-card">
        <div class="metrics-engine-container">
          <!-- Acquisition -->
          <div class="metric-row">
            <div class="metric-info">
              <span class="metric-stage-label">Acquisition (Contextual Nudge CTR)</span>
              <span class="metric-target-val">Target: <span id="num-acquisition">0</span>%</span>
            </div>
            <div class="metric-progress-track">
              <div class="metric-progress-fill fill-cyan" id="fill-acquisition" data-target="12"></div>
            </div>
          </div>

          <!-- Activation -->
          <div class="metric-row">
            <div class="metric-info">
              <span class="metric-stage-label">Activation (Checkout Purchase Conversion)</span>
              <span class="metric-target-val">Target: <span id="num-activation">0</span>%</span>
            </div>
            <div class="metric-progress-track">
              <div class="metric-progress-fill fill-cyan" id="fill-activation" data-target="65"></div>
            </div>
          </div>

          <!-- Retention -->
          <div class="metric-row">
            <div class="metric-info">
              <span class="metric-stage-label">Retention (23rd-Hour Auto-Renew Opt-In)</span>
              <span class="metric-target-val">Target: <span id="num-retention">0</span>%</span>
            </div>
            <div class="metric-progress-track">
              <div class="metric-progress-fill fill-green" id="fill-retention" data-target="25"></div>
            </div>
          </div>

          <!-- Monetization -->
          <div class="metric-row">
            <div class="metric-info">
              <span class="metric-stage-label">Monetization (Average Monthly ARPU)</span>
              <span class="metric-target-val">Target: ₹<span id="num-monetization">0</span></span>
            </div>
            <div class="metric-progress-track">
              <div class="metric-progress-fill fill-magenta" id="fill-monetization" data-target="60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- GSAP Core and ScrollTrigger CDNs -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <!-- Interactive Controller -->
  <script src="script.js"></script>
</body>
</html>
