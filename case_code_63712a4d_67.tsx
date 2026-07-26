<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aditi Verma // Systems & Growth Architect</title>
  <meta name="description" content="Immersive portfolio of Aditi Verma, Product and Systems Architect specializing in Fintech, growth systems, and consumer AI design.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Scroll Progress Indicator -->
  <div id="progress-bar" aria-hidden="true"></div>

  <!-- STICKY GLASSMORPHIC NAVBAR HEADER -->
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

  <!-- MAIN WRAPPER -->
  <main class="main-wrapper">

    <!-- HERO SECTION (KINETIC TEXT) -->
    <section id="hero" class="hero-section">
      <div class="hero-subtag">// SYSTEMS & GROWTH PRODUCT ARCHITECT</div>
      <div class="hero-headline-container">
        <h1 class="hero-headline">
          Aditi Verma // <br>
          Product & Systems Architect
        </h1>
      </div>
      <p class="hero-subheadline">
        Engineering zero-friction digital platforms at the cross-section of heavy backend logic, gamified user retention, and AI systems.
      </p>
    </section>

    <!-- BENTO GRID SHOWCASE -->
    <section id="portfolio" class="bento-grid-container">
      <span class="section-tag">// INTERACTIVE EXPERIENCES</span>
      <h2 class="section-title">Selected Case Studies</h2>

      <div class="bento-grid">
        <!-- CARD A: RIDESHIELD (FLAGSHIP) -->
        <article class="bento-card card-rideshield" data-accent="cyan">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">Flagship Fintech Project</span>
              <div class="hidden-pills">
                <span class="pill-glow">MCC 5541</span>
                <span class="pill-glow">VAHAN API</span>
                <span class="pill-glow">10m Delay</span>
              </div>
            </div>
            <h3 class="bento-title">RideShield // Contextual Micro-Insurance API Engine</h3>
            <p class="bento-desc">
              Embedding micro-insurance checks directly inside fuel transaction payment gateways. Utilizes VAHAN registry pipelines to verify registration details.
            </p>

            <!-- Slide-Up Drawer Interactive Shell -->
            <div class="rideshield-interactive-shell">
              <div class="rideshield-pills-row">
                <button class="rideshield-pill active" id="pill-roi">[ Risk ROI Tracker ]</button>
                <button class="rideshield-pill" id="pill-specs">[ Tech Code Spec ]</button>
                <button class="rideshield-pill" id="pill-tolerance">[ System Fault Tolerance ]</button>
              </div>
              
              <div class="rideshield-drawer-content">
                <!-- Panel 1: Vertical Funnel ROI Tracker -->
                <div class="rideshield-panel active" id="drawer-roi">
                  <div class="visual-funnel" aria-label="Market Conversion Funnel Diagram">
                    <div class="funnel-stage">
                      <span class="funnel-label">Active City Commuters</span>
                      <span class="funnel-metric">1,00,000 Riders</span>
                    </div>
                    <div class="funnel-stage" style="width: 90%;">
                      <span class="funnel-label">Fuel Transactions Daily</span>
                      <span class="funnel-metric">25,000 tx/day</span>
                    </div>
                    <div class="funnel-stage" style="width: 80%;">
                      <span class="funnel-label">Contextual Nudge CTR</span>
                      <span class="funnel-metric">8% (2,000)</span>
                    </div>
                    <div class="funnel-stage" style="width: 70%;">
                      <span class="funnel-label">Purchase Conversion</span>
                      <span class="funnel-metric">9% (180)</span>
                    </div>
                    <div class="funnel-stage final-conversion" style="width: 60%;">
                      <span class="funnel-label"><strong>Daily Gross Value</strong></span>
                      <span class="funnel-metric">₹1,62,000 per city</span>
                    </div>
                  </div>
                </div>

                <!-- Panel 2: IDE Specs -->
                <div class="rideshield-panel" id="drawer-specs">
                  <div class="terminal-window">
                    <span class="comment">// REQ-001: Contextual Hook Rules</span><br>
                    {<br>
                    &nbsp;&nbsp;<span class="keyword">"event"</span>: <span class="string">"payment_webhook"</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"mcc_code"</span>: <span class="number">5541</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"min_amount"</span>: <span class="number">100.00</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"anti_fraud"</span>: {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"latency_buffer_min"</span>: <span class="number">10</span> <span class="comment">// Anti-fraud delay</span><br>
                    &nbsp;&nbsp;}<br>
                    }
                  </div>
                </div>

                <!-- Panel 3: Resilience Drawer Simulator -->
                <div class="rideshield-panel" id="drawer-tolerance">
                  <div class="resilience-status-box">
                    <p class="resilience-note">
                      VAHAN database lookup is throttled to <strong>1.5 seconds</strong>. Spike simulation downshifts execution to background asynchronous workers.
                    </p>
                    <button class="btn-trigger-simulator" id="btn-run-resilience">Simulate Latency Spike</button>
                    
                    <div class="resilience-flowchart">
                      <div class="flow-node" id="node-sync">NORMAL: Synchronous DB Fetch (Latency < 1.5s)</div>
                      <div class="flow-node" id="node-async">FALLBACK: Downshift to Background Queue</div>
                      <div class="flow-node" id="node-whatsapp-output">DELIVERY: Route Policy via WhatsApp &lt; 5 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bento-tech-stack">
            <span class="tech-tag">REST API</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">Asynchronous Worker</span>
          </div>
        </article>

        <!-- CARD B: SKILL-SHATTER -->
        <article class="bento-card card-skillshatter" data-accent="green">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">Edtech Gamification</span>
              <div class="hidden-pills">
                <span class="pill-glow">P2P Stock Market</span>
                <span class="pill-glow">Streaks</span>
              </div>
            </div>
            <h3 class="bento-title">Skill-Shatter // Gamified Engagement</h3>
            <p class="bento-desc">
              Gamified peer-to-peer accountability systems that turn focus hours into investable assets.
            </p>

            <!-- SVG Animated Growth Line widget -->
            <div class="skillshatter-graph-widget">
              <div class="graph-header">
                <span>Academic Stock ($FOCUS)</span>
                <span>Streak Momentum +28%</span>
              </div>
              <div class="svg-graph-container">
                <svg viewBox="0 0 200 80" class="svg-graph">
                  <path class="graph-svg-line" d="M 0 60 Q 25 50 50 55 T 100 30 T 150 45 T 200 10" />
                </svg>
              </div>
            </div>
          </div>

          <div class="bento-tech-stack">
            <span class="tech-tag">Growth loops</span>
            <span class="tech-tag">React</span>
            <span class="tech-tag">Firebase</span>
          </div>
        </article>

        <!-- CARD C: DERMALINK -->
        <article class="bento-card card-dermalink" data-accent="magenta">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">Consumer AI Pipeline</span>
              <div class="hidden-pills">
                <span class="pill-glow">LLM API</span>
                <span class="pill-glow">Computer Vision</span>
              </div>
            </div>
            <h3 class="bento-title">Dermalink // Product AI Auditor</h3>
            <p class="bento-desc">
              Linking smartphone cameras to LLM pipelines for immediate chemical analysis of cosmetics.
            </p>

            <!-- Smartphone Scanning Animation Simulator -->
            <div class="dermalink-scan-widget">
              <div class="scanner-viewport" id="cam-viewport" aria-label="Camera Scan Simulator Viewport">
                <div class="scanner-view-grid"></div>
                <!-- Moving Laser Line -->
                <div class="scanner-laser-bar"></div>
                <div class="scanner-target-mock" id="cam-target">WAITING_FOR_IMAGE</div>
              </div>
              
              <div class="scanner-stats-row">
                <span class="scanner-latency-label">Camera Processing Latency</span>
                <span class="scanner-latency-val" id="cam-latency">4.8s</span>
              </div>
              <button class="btn-trigger-optimizer" id="btn-optimize-cam">Optimize Image Capture Pipeline</button>
            </div>
          </div>

          <div class="bento-tech-stack">
            <span class="tech-tag">FastAPI</span>
            <span class="tech-tag">LLM API</span>
            <span class="tech-tag">Image Optimization</span>
          </div>
        </article>
      </div>
    </section>

    <!-- INTERACTIVE METRICS PLATFORM -->
    <section id="metrics">
      <span class="section-tag">// STRATEGIC OPTIMIZATIONS</span>
      <h2 class="section-title">Funnels & Optimization Framework</h2>

      <div class="custom-metrics-engine">
        <div class="svg-chart-engine">
          
          <!-- Acquisition Dial -->
          <div class="chart-card-stage">
            <div class="svg-dial-container">
              <svg viewBox="0 0 140 140" class="dial-svg">
                <circle cx="70" cy="70" r="60" class="dial-track" />
                <circle cx="70" cy="70" r="60" class="dial-fill fill-cyan-grad" id="dial-acquisition" />
              </svg>
              <div class="dial-label-overlay">
                <span class="dial-number" id="num-acq">0</span>
                <span class="dial-unit">CTR %</span>
              </div>
            </div>
            <h3 class="chart-stage-name">Acquisition</h3>
            <p class="chart-stage-desc">Nudge impressions driving contextual user clicks at pump checkouts.</p>
          </div>

          <!-- Activation Dial -->
          <div class="chart-card-stage">
            <div class="svg-dial-container">
              <svg viewBox="0 0 140 140" class="dial-svg">
                <circle cx="70" cy="70" r="60" class="dial-track" />
                <circle cx="70" cy="70" r="60" class="dial-fill fill-green-grad" id="dial-activation" />
              </svg>
              <div class="dial-label-overlay">
                <span class="dial-number" id="num-act">0</span>
                <span class="dial-unit">Conv %</span>
              </div>
            </div>
            <h3 class="chart-stage-name">Activation</h3>
            <p class="chart-stage-desc">1-Click VAHAN prefill logic scaling checkout purchase completion.</p>
          </div>

          <!-- Retention Dial -->
          <div class="chart-card-stage">
            <div class="svg-dial-container">
              <svg viewBox="0 0 140 140" class="dial-svg">
                <circle cx="70" cy="70" r="60" class="dial-track" />
                <circle cx="70" cy="70" r="60" class="dial-fill fill-magenta-grad" id="dial-retention" />
              </svg>
              <div class="dial-label-overlay">
                <span class="dial-number" id="num-ret">0</span>
                <span class="dial-unit">Renew %</span>
              </div>
            </div>
            <h3 class="chart-stage-name">Retention</h3>
            <p class="chart-stage-desc">23rd-Hour Whatsapp subscriptions securing daily auto-renewals.</p>
          </div>

        </div>
      </div>
    </section>

  </main>

  <!-- GSAP scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
