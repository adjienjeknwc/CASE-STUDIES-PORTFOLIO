<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aditi Verma // Systems & Growth Architect</title>
  <meta name="description" content="Portfolio of Aditi Verma, Product and Systems Architect specializing in Fintech, growth loops, and consumer AI design.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Scroll Progress Indicator -->
  <div id="progress-bar" aria-hidden="true"></div>

  <!-- SITE HEADER NAVBAR -->
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

    <!-- BENTO GRID PORTFOLIO -->
    <section id="portfolio" class="bento-grid-container">
      <span class="section-tag">// INTERACTIVE SYSTEMS</span>
      <h2 class="section-title">Selected Case Studies</h2>

      <div class="bento-grid">
        <!-- CARD A: RIDESHIELD -->
        <article class="bento-card card-rideshield" data-accent="cyan">
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
              Contextual micro-insurance plugin protecting two-wheeler commuters against accident medical expenses, triggered at the point of fuel payment success.
            </p>

            <!-- Slide-Up Drawer Shell -->
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

                <!-- Panel 2: Specs Terminal -->
                <div class="rideshield-panel" id="drawer-specs">
                  <div class="terminal-window">
                    <span class="comment">// REQ-001: Contextual Hook Schema</span><br>
                    {<br>
                    &nbsp;&nbsp;<span class="keyword">"trigger"</span>: <span class="string">"payment_webhook"</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"mcc_code"</span>: <span class="number">5541</span> <span class="comment">// Fuel pump category</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"min_amount"</span>: <span class="number">100.00</span>,<br>
                    &nbsp;&nbsp;<span class="keyword">"anti_fraud"</span>: {<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"cooldown_minutes"</span>: <span class="number">10</span> <span class="comment">// Prevent retroactive claims</span><br>
                    &nbsp;&nbsp;}<br>
                    }
                  </div>
                </div>

                <!-- Panel 3: Resilience Drawer -->
                <div class="rideshield-panel" id="drawer-tolerance">
                  <div class="resilience-status-box">
                    <p class="resilience-note">
                      VAHAN database response threshold limit is set to <strong>1.5 seconds</strong>. Spike timeouts downshift process execution to background worker threads.
                    </p>
                    <button class="btn-trigger-simulator" id="btn-run-resilience">Simulate Latency Spike</button>
                    
                    <div class="resilience-flowchart" style="margin-top: 1rem;">
                      <div class="flow-node" id="node-sync">NORMAL: Synchronous DB Fetch (Latency &lt; 1.5s)</div>
                      <div class="flow-node" id="node-async">FALLBACK: Downshift to Background Queue</div>
                      <div class="flow-node" id="node-whatsapp-output">DELIVERY: Route Policy via WhatsApp &lt; 5 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Extra Addition: Simulated Interactive Claims Simulator -->
            <div class="claims-simulator-container">
              <h4 class="claims-simulator-title">Simulated Interactive Claims Simulator</h4>
              <p class="resilience-note">
                Test the 10-Minute Anti-Fraud cooldown buffer in action.
              </p>
              <div class="claims-btn-row">
                <button class="btn-claim-sim" id="btn-claim-min4">Simulate Crash at Minute 4</button>
                <button class="btn-claim-sim" id="btn-claim-hour2">Simulate Crash at Hour 2</button>
              </div>
              <div class="claim-output-terminal" id="claim-result-terminal">
                // System idle. Select crash scenario to monitor active policy audit logs...
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
              <span class="bento-tag">Edtech Growth Loops</span>
              <div class="hidden-pills">
                <span class="pill-glow">P2P Stock Market</span>
                <span class="pill-glow">Streak multiplier</span>
              </div>
            </div>
            <h3 class="bento-title">Skill-Shatter // Gamified Engagement</h3>
            <p class="bento-desc">
              Gamified accountability platform that turns study hours into investable assets, reducing churn and scaling compliance.
            </p>

            <!-- Behavioral Funnel Concept -->
            <div class="skillshatter-behavior-funnel">
              <div class="skillshatter-funnel-card">
                <div class="funnel-card-header">Academic Stock Market Loops</div>
                <div class="funnel-card-desc">Users buy shares in peer study focus hours. Volatility rewards focus behavior, and users lose capital if friends break streaks.</div>
              </div>
            </div>

            <!-- Two-Column Persona Matrix -->
            <div class="persona-matrix-container">
              <div class="persona-matrix-card">
                <div class="matrix-header">Ramesh, 26</div>
                <p class="matrix-desc">Delivery driver. Needs speed, price-sensitive, daily cash flows.</p>
              </div>
              <div class="persona-matrix-card">
                <div class="matrix-header">Neha, 21</div>
                <p class="matrix-desc">Student commuter. Casual usage, visual, nudges-responsive.</p>
              </div>
            </div>

            <!-- SVG Animated Growth graph -->
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

          <div class="bento-tech-stack" style="margin-top: 1rem;">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Growth Loops</span>
            <span class="tech-tag">Firebase</span>
          </div>
        </article>

        <!-- CARD C: DERMALINK -->
        <article class="bento-card card-dermalink" data-accent="magenta">
          <div>
            <div class="bento-meta">
              <span class="bento-tag">AI Systems Product</span>
              <div class="hidden-pills">
                <span class="pill-glow">LLM Pipeline</span>
                <span class="pill-glow">CV scanning</span>
              </div>
            </div>
            <h3 class="bento-title">Dermalink // Product AI Auditor</h3>
            <p class="bento-desc">
              Linking smartphone cameras to LLM pipelines for immediate chemical analysis of cosmetic ingredients, mitigating processing latency.
            </p>

            <!-- Camera scan sandbox -->
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
              <button class="btn-trigger-optimizer" id="btn-optimize-cam">Scan Skincare Ingredients</button>
              
              <!-- Scanning report block -->
              <div class="scanner-output-report" id="cam-report-block">
                // Report idle. Run scanning to fetch LLM ingredient analysis summary...
              </div>
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

    <!-- METRICS & FUNNELS ENGINE -->
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

        <!-- Event Log Pipeline flowchart (lights up step-by-step on hover) -->
        <div class="event-log-pipeline-card">
          <h3 class="pipeline-title">Visual Event Log Pipeline</h3>
          <p class="resilience-note" style="margin-bottom: 1.5rem;">
            Hover over the pipeline area to trace the live tracking loop of digital policy credentials.
          </p>
          <div class="pipeline-flow" id="pipeline-container">
            <div class="pipeline-node" id="pipe-step-1">
              <h4>payment_success</h4>
              <p>User checkout validated</p>
            </div>
            <div class="pipeline-node" id="pipe-step-2">
              <h4>vahan_rc_check</h4>
              <p>Government DB status active</p>
            </div>
            <div class="pipeline-node" id="pipe-step-3">
              <h4>risk_approved</h4>
              <p>Safety parameters verified</p>
            </div>
            <div class="pipeline-node" id="pipe-step-4">
              <h4>whatsapp_delivery</h4>
              <p>Credential PDF sent</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Live Recruiter Analytics Tracker Easter Egg -->
  <div class="recruiter-analytics-egg" id="recruiter-egg">
    <div class="egg-header">
      <span>RECRUITER_ANALYTICS_v1.0</span>
      <span style="color: var(--accent-magenta);">● LIVE</span>
    </div>
    <div class="egg-text" id="egg-typewriter-text">
      Funnel Event: Recruiter landed. Conversion Probability: 99.8%.
    </div>
    <a href="mailto:aditi.verma.pm@gmail.com?subject=Interview%20Invitation%20-%20Aditi%20Verma" class="egg-cta">
      Book interview before slots expire
    </a>
  </div>

  <!-- GSAP scripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
