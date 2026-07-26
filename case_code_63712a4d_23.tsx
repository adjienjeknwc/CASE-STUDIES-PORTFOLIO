<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aditi Verma | Product Management Portfolio</title>
  <meta name="description" content="Portfolio of Aditi Verma, Associate Product Manager candidate for Paytm. Showcasing RideShield, a fintech commuter risk-mitigation product.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Native Scroll Progress Indicator -->
  <div id="progress-bar" aria-hidden="true"></div>

  <!-- FIXED LEFT-HAND SIDEBAR NAVIGATION -->
  <aside class="sidebar">
    <div class="brand-section">
      <div class="brand-logo-container">
        <div class="paytm-badge" aria-label="Paytm Logo">Pay<span>tm</span></div>
        <span class="designer-subtitle">APM Candidate</span>
      </div>
      <h1 class="designer-title">Aditi Verma</h1>
      <p class="designer-subtitle">Product Portfolio</p>
      
      <nav class="nav-menu-container" aria-label="Main Navigation">
        <ul class="nav-menu">
          <li class="nav-item active" id="nav-hero">
            <a href="#hero">
              <span class="sec-number">00</span> Welcome Banner
            </a>
          </li>
          <li class="nav-item" id="nav-strategic">
            <a href="#strategic">
              <span class="sec-number">01</span> Strategic Discovery
            </a>
          </li>
          <li class="nav-item" id="nav-prd">
            <a href="#prd">
              <span class="sec-number">02</span> Core PRD Specs
            </a>
          </li>
          <li class="nav-item" id="nav-funnel">
            <a href="#funnel">
              <span class="sec-number">03</span> Funnel & Metrics
            </a>
          </li>
          <li class="nav-item" id="nav-ux">
            <a href="#ux">
              <span class="sec-number">04</span> UX Journey Map
            </a>
          </li>
          <li class="nav-item" id="nav-architecture">
            <a href="#architecture">
              <span class="sec-number">05</span> Architecture & Fallback
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="sidebar-footer">
      <p>Candidate: <strong>Aditi Verma</strong></p>
      <p>Target: <strong>Associate Product Manager, Paytm</strong></p>
      <p>Email: <a href="mailto:aditi.verma.pm@gmail.com">aditi.verma.pm@gmail.com</a></p>
    </div>
  </aside>

  <!-- MAIN GENEROUS CONTENT CANVAS -->
  <main class="main-content">
    
    <!-- HERO WELCOME BANNER -->
    <section id="hero" class="scroll-target">
      <div class="hero-banner">
        <span class="section-tag">Candidate Profile</span>
        <h2 class="candidate-name">Aditi Verma</h2>
        <div class="candidate-title">
          Product Manager Portfolio
          <span class="target-badge">Paytm APM Role</span>
        </div>
        <p class="hero-pitch">
          Building high-scale, zero-friction digital systems at the intersection of Fintech, Core Architecture, and User Trust. Actively developing product frameworks that integrate user protection directly into payment checkout moments.
        </p>
      </div>

      <!-- Case Study Cards -->
      <div class="projects-grid">
        <!-- Hero Card (Paytm RideShield) -->
        <article class="project-card hero-card">
          <div class="card-header">
            <span class="project-badge">Hero Case Study</span>
            <span class="card-tech">Fintech API</span>
          </div>
          <div>
            <h3 class="project-title">Paytm RideShield</h3>
            <p class="project-desc">
              Contextual micro-insurance plugin protecting two-wheeler commuters against accident medical expenses, triggered at the point of fuel payment.
            </p>
          </div>
          <div class="card-footer">
            <span class="card-tech">JS / VAHAN API / SQL</span>
            <a href="#strategic" class="action-link">Explore Case Study &rarr;</a>
          </div>
        </article>

        <!-- Placeholder 1 -->
        <article class="project-card">
          <div class="card-header">
            <span class="project-badge">Product Design</span>
            <span class="card-tech">EdTech</span>
          </div>
          <div>
            <h3 class="project-title">Skill-Shatter</h3>
            <p class="project-desc">
              Gamified student productivity platforms integrating peer-to-peer accountability loops, habit streak multipliers, and customizable rewards.
            </p>
          </div>
          <div class="card-footer">
            <span class="card-tech">React / Node.js</span>
            <span class="project-badge">Future Release</span>
          </div>
        </article>

        <!-- Placeholder 2 -->
        <article class="project-card">
          <div class="card-header">
            <span class="project-badge">API Integration</span>
            <span class="card-tech">AI Audit</span>
          </div>
          <div>
            <h3 class="project-title">Dermalink</h3>
            <p class="project-desc">
              AI-driven cosmetic ingredient auditor powered by third-party LLM APIs, tracking skin-type compatibility and allergen triggers.
            </p>
          </div>
          <div class="card-footer">
            <span class="card-tech">Python / FastAPI</span>
            <span class="project-badge">Future Release</span>
          </div>
        </article>
      </div>
    </section>

    <!-- SECTION 1: PRODUCT STRATEGY & 'THE WHY' -->
    <section id="strategic" class="scroll-target">
      <span class="section-tag">01. Strategic Discovery & The Rationale</span>
      <h2 class="section-title">Peak Risk Awareness & Market Discovery</h2>
      
      <div class="strategic-grid">
        <div class="hero-pitch" style="margin-bottom: 1rem;">
          <p>
            <strong>The Insight:</strong> Commuters are most receptive to micro-insurance when they are actively engaging with their vehicles in high-risk environments. By integrating a <strong>₹9 single-day trip cover</strong> directly at the petrol pump checkout, we leverage "Peak Risk Awareness" to secure user buy-in.
          </p>
        </div>

        <!-- Personas -->
        <div class="persona-container">
          <!-- Persona 1: Ramesh -->
          <article class="persona-card">
            <div class="persona-header">
              <div class="avatar-placeholder ramesh-avatar">RV</div>
              <div class="persona-info">
                <h3>Ramesh Verma</h3>
                <p>26, Delivery Executive (Zomato/Swiggy)</p>
              </div>
            </div>
            <div class="persona-body">
              <div class="persona-item">
                <h4>Core Motive</h4>
                <p>Spends 8+ hours daily on the road. Extremely exposed to traffic risks.</p>
              </div>
              <div class="persona-item">
                <h4>Pain Point</h4>
                <p>Traditional annual insurance is a heavy capital layout. Cannot afford complex claims paperwork or delays.</p>
              </div>
              <div class="persona-item">
                <h4>Checkout Behavior</h4>
                <p>Fills fuel daily at Petrol Pumps. Pays via Paytm QR. Needs <span class="tag-highlight">Instant Transaction &lt; 5s</span>.</p>
              </div>
            </div>
          </article>

          <!-- Persona 2: Neha -->
          <article class="persona-card">
            <div class="persona-header">
              <div class="avatar-placeholder neha-avatar">NS</div>
              <div class="persona-info">
                <h3>Neha Sharma</h3>
                <p>21, Casual College Commuter</p>
              </div>
            </div>
            <div class="persona-body">
              <div class="persona-item">
                <h4>Core Motive</h4>
                <p>Commutes 10-15 km daily to university. Parents worry about her safety on busy city flyovers.</p>
              </div>
              <div class="persona-item">
                <h4>Pain Point</h4>
                <p>Unaware of micro-premium covers. Traditional insurance models do not target her casual usage.</p>
              </div>
              <div class="persona-item">
                <h4>Checkout Behavior</h4>
                <p>Fills fuel twice a week. Highly visual. Responsive to <span class="tag-highlight">Nudge-based Add-ons</span> during payment success.</p>
              </div>
            </div>
          </article>
        </div>

        <!-- Market Guesstimate Tree -->
        <div class="guesstimate-card">
          <h3 class="guesstimate-title">Market Size Guesstimate Breakdown (Daily Revenue Sizing per City)</h3>
          
          <div class="tree-container">
            <div class="tree-node">
              <div class="tree-node-content">
                <span class="node-desc">Total Active Two-Wheeler Commuters per Metro City</span>
                <span class="node-calc">10,00,000 Riders</span>
              </div>
            </div>

            <div class="tree-node">
              <div class="tree-node-content">
                <span class="node-desc">Daily Two-Wheeler Fuel Pump Payment Transactions (MCC 5541)</span>
                <span class="node-calc">2,50,000 tx/day</span>
              </div>
            </div>

            <div class="tree-node">
              <div class="tree-node-content">
                <span class="node-desc">Target Contextual Nudge Impression Click-Through Rate (CTR)</span>
                <span class="node-calc">8% CTR (20,000 clicks)</span>
              </div>
            </div>

            <div class="tree-node">
              <div class="tree-node-content">
                <span class="node-desc">Target Checkout Purchase Conversion Rate</span>
                <span class="node-calc">9% Purchase (1,800 policies)</span>
              </div>
            </div>

            <div class="tree-node">
              <div class="tree-node-content">
                <span class="node-desc">Paytm RideShield Micro-Insurance Premium Cost (Single Day Cover)</span>
                <span class="node-calc">₹90 per policy GTV</span>
              </div>
            </div>

            <div class="tree-node final-node">
              <div class="tree-node-content">
                <span class="node-desc"><strong>Finalized Daily Gross Transaction Value (GTV) per City</strong></span>
                <span class="node-calc">₹1,62,000 Daily GTV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: FUNCTIONAL SPECIFICATIONS (THE PRD) -->
    <section id="prd" class="scroll-target">
      <span class="section-tag">02. Core Product Requirements Document (PRD)</span>
      <h2 class="section-title">Functional Specs & Engineering Rules</h2>

      <div class="spec-container">
        <p class="hero-pitch">
          The RideShield core integration binds webhooks on Merchant Category Codes to identify fuel purchase moments, instantly validating vehicle registrations against government records.
        </p>

        <!-- IDE Spec Viewer -->
        <div class="ide-terminal">
          <div class="ide-header">
            <div class="ide-dots">
              <span class="ide-dot ide-dot-red" title="Close"></span>
              <span class="ide-dot ide-dot-yellow" title="Minimize"></span>
              <span class="ide-dot ide-dot-green" title="Maximize"></span>
            </div>
            <div class="ide-tab-bar">
              <button class="ide-tab active" id="tab-req1">REQ-001: ContextualHook</button>
              <button class="ide-tab" id="tab-req2">REQ-002: VahanPipeline</button>
            </div>
            <div class="ide-title-bar">PRD_SPECS.json</div>
          </div>
          
          <div class="ide-content">
            <!-- REQ-001 Content -->
            <div class="spec-block active" id="block-req1">
              <span class="comment">// REQ-001: Contextual Hook Orchestrator spec</span><br>
              {<br>
              &nbsp;&nbsp;<span class="keyword">"requirementId"</span>: <span class="string">"REQ-001"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"moduleName"</span>: <span class="string">"ContextualHookOrchestrator"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"eventTrigger"</span>: <span class="string">"payment_gateway_hook_received"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"rules"</span>: [<br>
              &nbsp;&nbsp;&nbsp;&nbsp;{<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"parameter"</span>: <span class="string">"MerchantCategoryCode (MCC)"</span>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"operator"</span>: <span class="string">"EQUALS"</span>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"value"</span>: <span class="number">5541</span> <span class="comment">// Petrol Pumps & Service Stations</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;},<br>
              &nbsp;&nbsp;&nbsp;&nbsp;{<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"parameter"</span>: <span class="string">"TransactionAmount"</span>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"operator"</span>: <span class="string">"GREATER_THAN_OR_EQUAL"</span>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"value"</span>: <span class="number">100.00</span> <span class="comment">// Minimum fuel purchase check</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br>
              &nbsp;&nbsp;],<br>
              &nbsp;&nbsp;<span class="keyword">"downstreamAction"</span>: <span class="string">"trigger_sheet_nudge_async"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"status"</span>: <span class="string">"STABLE"</span><br>
              }
            </div>

            <!-- REQ-002 Content -->
            <div class="spec-block" id="block-req2">
              <span class="comment">// REQ-002: Integrated VAHAN API Lookup pipeline</span><br>
              {<br>
              &nbsp;&nbsp;<span class="keyword">"requirementId"</span>: <span class="string">"REQ-002"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"moduleName"</span>: <span class="string">"VahanDataPipeline"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"endpoint"</span>: <span class="string">"https://api.vahan.gov.in/v2/rc/details"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"inputParameter"</span>: <span class="string">"registrationNumber"</span>,<br>
              &nbsp;&nbsp;<span class="keyword">"returnedFields"</span>: {<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"chassisNumber"</span>: <span class="type">"string"</span>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"engineNumber"</span>: <span class="type">"string"</span>,<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"vehicleClass"</span>: <span class="type">"string"</span>, <span class="comment">// Must match two-wheeler classes</span><br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">"rcStatus"</span>: <span class="type">"string"</span> <span class="comment">// Must equal "ACTIVE"</span><br>
              &nbsp;&nbsp;},<br>
              &nbsp;&nbsp;<span class="keyword">"timeoutThreshold"</span>: <span class="number">1500</span>, <span class="comment">// milliseconds before triggering fallback</span><br>
              &nbsp;&nbsp;<span class="keyword">"failureBehavior"</span>: <span class="string">"fallback_to_background_sync_worker"</span><br>
              }
            </div>
          </div>
        </div>

        <!-- Warning Alert Card -->
        <div class="warning-box">
          <div class="warning-icon" aria-hidden="true">&#9888;</div>
          <div class="warning-content">
            <h3 class="warning-title">10-Minute Anti-Fraud Activation Latency Buffer</h3>
            <p class="warning-desc">
              <strong>Product Rationale:</strong> To prevent adverse selection and retroactive fraud, the RideShield policy starts coverage exactly 10 minutes post-issuance. This blocks commuters from buying the ₹9 micro-insurance immediately <em>after</em> experiencing an accident at or near the station.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: DATA ENGINE & ANALYTICS FUNNELS -->
    <section id="funnel" class="scroll-target">
      <span class="section-tag">03. Funnel Optimization & Success Metrics</span>
      <h2 class="section-title">Funnel Optimizations & Metrics Framework</h2>

      <div class="funnel-container">
        <!-- AARRR Metrics Table -->
        <div class="table-card">
          <table class="metric-table" aria-label="AARRR Metrics Framework table">
            <thead>
              <tr>
                <th scope="col">Funnel Stage</th>
                <th scope="col">Core Metric Description</th>
                <th scope="col">Target Conversion / Value</th>
                <th scope="col">Product Lever</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="metric-stage">Acquisition</td>
                <td>Contextual Sheet Nudge Click-Through Rate (CTR)</td>
                <td class="metric-val" style="color: var(--paytm-blue);">8% - 12%</td>
                <td><span class="metric-status">MCC Trigger Logic</span></td>
              </tr>
              <tr>
                <td class="metric-stage">Activation</td>
                <td>Checkout Intent-to-Purchase Conversion</td>
                <td class="metric-val" style="color: var(--paytm-navy);">65%</td>
                <td><span class="metric-status">1-Click VAHAN Prefill</span></td>
              </tr>
              <tr>
                <td class="metric-stage">Retention</td>
                <td>23rd-Hour Auto-Renew Opt-in Rate (Daily Commuters)</td>
                <td class="metric-val" style="color: var(--paytm-green);">25%</td>
                <td><span class="metric-status">Whatsapp Subscriptions</span></td>
              </tr>
              <tr>
                <td class="metric-stage">Monetization</td>
                <td>Target ARPU (Average Revenue Per User) Monthly</td>
                <td class="metric-val" style="color: var(--paytm-amber);">₹45 - ₹60</td>
                <td><span class="metric-status">Micro-Bundle Upsell</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Flowchart Split View -->
        <div class="flowchart-card">
          <h3 class="flowchart-title">Interactive Backend Event Log Flowchart</h3>
          
          <div class="flowchart-split">
            <!-- Left Side: Interactive Steps -->
            <div class="flowchart-steps">
              <div class="flowchart-step active" data-step="1" id="step-node-1">
                <div class="step-node">1</div>
                <div class="step-content">
                  <h4>fuel_payment_success</h4>
                  <p>User pays merchant (MCC 5541) via QR code scan.</p>
                </div>
              </div>

              <div class="flowchart-step" data-step="2" id="step-node-2">
                <div class="step-node">2</div>
                <div class="step-content">
                  <h4>vahan_api_lookup_trigger</h4>
                  <p>Triggers asynchronous API lookup for vehicle RC status.</p>
                </div>
              </div>

              <div class="flowchart-step" data-step="3" id="step-node-3">
                <div class="step-node">3</div>
                <div class="step-content">
                  <h4>risk_profile_validated</h4>
                  <p>Risk model verifies vehicle and parameters are stable.</p>
                </div>
              </div>

              <div class="flowchart-step" data-step="4" id="step-node-4">
                <div class="step-node">4</div>
                <div class="step-content">
                  <h4>rideshield_policy_issued</h4>
                  <p>Sends policy confirmation and saves data to database.</p>
                </div>
              </div>
            </div>

            <!-- Right Side: Log Display -->
            <div class="log-terminal">
              <div class="log-terminal-header">
                <span>EVENT_MONITOR</span>
                <span id="log-step-num">Step 1 of 4</span>
              </div>
              <div class="log-body" id="log-content-body">
                // Click on any log event block to track the live API payload stream...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: LOW-FIDELITY UX SCRIPT & JOURNEY MAP -->
    <section id="ux" class="scroll-target">
      <span class="section-tag">04. Frictionless User Experience Blueprint</span>
      <h2 class="section-title">The 3-Click Checkout Conversion Journey</h2>
      
      <div class="ux-journey-container">
        <p class="hero-pitch" style="margin-bottom: 1.5rem;">
          To hit our 65% Activation checkout target, we strip all user form-filling. Government vehicle data is pulled instantly, letting users protect themselves in exactly 3 clicks.
        </p>

        <!-- Journey Mockups -->
        <div class="journey-map-grid">
          <!-- Screen 1: Contextual Trigger -->
          <div class="device-frame" id="mockup-frame-1">
            <div class="device-screen">
              <div class="screen-header">
                <span class="time">09:41</span>
                <span>Paytm Wallet &bull;&bull;&bull;</span>
              </div>
              <div class="screen-body">
                <div class="mock-card mock-paytm-receipt">
                  <div class="receipt-icon">&#10004;</div>
                  <div class="receipt-status">Payment Success</div>
                  <div class="receipt-amount">₹450</div>
                  <p style="font-size: 0.7rem; color: var(--slate-600); margin-top: 0.25rem;">Indian Oil Pump #438</p>
                </div>
                
                <div class="mock-card">
                  <span style="font-size: 0.65rem; color: var(--slate-600);">Transaction details</span>
                  <div style="font-size: 0.7rem; display: flex; justify-content: space-between;">
                    <span>Order Reference</span>
                    <strong style="color: var(--paytm-navy);">TXN-8840192</strong>
                  </div>
                </div>

                <!-- Bottom Sheet Modal overlay -->
                <div class="bottom-sheet">
                  <div class="sheet-handle"></div>
                  <div class="sheet-title">Secure Your Commute?</div>
                  <p class="sheet-subtitle">Accident medical reimbursement cover up to <strong>₹50,000</strong> for today's ride.</p>
                  
                  <div class="sheet-benefits">
                    <div class="sheet-benefit-item">🛡️ Accident Cover</div>
                    <div class="sheet-benefit-item">⚡ 10-Min Setup</div>
                    <div class="sheet-benefit-item">🏢 Cashless Hospital</div>
                    <div class="sheet-benefit-item">👍 Zero Paperwork</div>
                  </div>

                  <button class="btn-primary" id="btn-next-screen-1">Secure My Ride (₹9)</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Screen 2: 1-Click Review -->
          <div class="device-frame" id="mockup-frame-2">
            <div class="device-screen">
              <div class="screen-header">
                <span class="time">09:41</span>
                <span>RideShield Verification</span>
              </div>
              <div class="screen-body">
                <h3 style="font-size: 0.95rem; font-weight: 800; color: var(--paytm-navy); margin-top: 0.5rem;">Verify Vehicle & Secure</h3>
                
                <!-- Verification Badges -->
                <div class="verification-badge">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>VAHAN API Verified: RC Active</span>
                </div>

                <!-- VAHAN prefilled data card -->
                <div class="mock-card">
                  <div class="mock-card-header">
                    <span class="mock-card-title">Vehicle Registration Info</span>
                  </div>
                  <div class="data-row">
                    <span class="data-label">Plate Number</span>
                    <span class="data-val">DL-3S-CQ-8041</span>
                  </div>
                  <div class="data-row">
                    <span class="data-label">Owner Name</span>
                    <span class="data-val">Ramesh Verma</span>
                  </div>
                  <div class="data-row">
                    <span class="data-label">Vehicle Type</span>
                    <span class="data-val">Honda Activa 6G</span>
                  </div>
                </div>

                <!-- Orange anti-fraud disclaimer card -->
                <div class="orange-disclaimer">
                  🔒 Policy activates exactly <strong>10 minutes</strong> from approval to mitigate pump-side fraud risks.
                </div>

                <button class="btn-primary" id="btn-next-screen-2" style="background: var(--paytm-navy); margin-top: auto;">Approve & Pay ₹9</button>
              </div>
            </div>
          </div>

          <!-- Screen 3: Asynchronous Success Page -->
          <div class="device-frame" id="mockup-frame-3">
            <div class="device-screen">
              <div class="screen-header">
                <span class="time">09:42</span>
                <span>Active Protection</span>
              </div>
              <div class="screen-body" style="text-align: center; justify-content: space-between;">
                <div>
                  <div class="success-checkmark">&#10004;</div>
                  <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--paytm-navy); margin-bottom: 0.25rem;">Policy Scheduled</h3>
                  <p style="font-size: 0.75rem; color: var(--slate-600); line-height: 1.4; padding: 0 0.5rem;">Your 24-Hour RideShield safety cover is booked successfully.</p>
                </div>

                <!-- Validity countdown -->
                <div class="mock-card" style="text-align: left;">
                  <span style="font-size: 0.65rem; color: var(--slate-600);">Coverage Window</span>
                  <div class="countdown-box">
                    Starts in <span class="countdown-time" id="countdown-timer">09m 59s</span>
                  </div>
                  <p style="font-size: 0.6rem; color: var(--slate-600); text-align: center;">Active from 09:52 AM to 09:52 AM Tomorrow</p>
                </div>

                <!-- Active background sync progress widget -->
                <div class="sync-widget">
                  <div class="sync-status">
                    <span>Backing up policy to VAHAN Ledger</span>
                    <strong style="color: var(--paytm-blue);">Syncing...</strong>
                  </div>
                  <div class="progress-bar-container">
                    <div class="progress-bar-fill"></div>
                  </div>
                </div>

                <button class="restart-flow" id="btn-restart-flow">Reset Flow Simulator</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: TECHNICAL RESILIENCE & TECHNICAL EDGE CASES -->
    <section id="architecture" class="scroll-target">
      <span class="section-tag">05. System Architecture & Fault Tolerance</span>
      <h2 class="section-title">Graceful Degrade Fallback Framework</h2>

      <div class="architecture-card">
        <div class="architecture-grid">
          <!-- Text explanation -->
          <div class="architecture-text">
            <p>
              <strong>The Architecture Edge Case:</strong> The government-run VAHAN database API frequently experiences peak latency spikes exceeding 1.5 seconds. If the API lookup is run synchronously during checkout, it delays the payment gateway completion—inducing severe merchant checkout-line friction.
            </p>
            <p>
              <strong>The Resilient Fix:</strong> RideShield implements a <strong>Graceful Degrade Fallback Framework</strong>. If the VAHAN API connection latency hits a <strong>1.5-second threshold limit</strong>, the checkout immediately bypasses synchronous vehicle validation. The payment succeeds with no pump delays, downshifting execution to a background asynchronous worker.
            </p>
            <p>
              <strong>Asynchronous Worker Operations:</strong> The worker retries VAHAN lookups asynchronously. Once validated, the system auto-routes the official policy documents directly to the user's WhatsApp channel within 5 minutes.
            </p>
          </div>

          <!-- Vertical HTML diagram of path fallbacks -->
          <div class="architecture-diagram" aria-label="System Fallback Flow Diagram">
            <div class="diagram-node active-path">
              <strong>MCC 5541 Transaction Triggered</strong>
              <p style="font-size: 0.65rem; color: var(--slate-600); margin-top: 0.15rem;">Start checkout validation flow</p>
            </div>
            
            <div class="diagram-arrow">
              <span class="arrow-label">Fetch VAHAN</span>
            </div>

            <div class="diagram-node fallback-path">
              <strong>VAHAN API Connection Timer</strong>
              <p style="font-size: 0.65rem; color: var(--paytm-amber); margin-top: 0.15rem;">Time limit: 1.5 Seconds</p>
            </div>

            <div class="diagram-arrow">
              <span class="arrow-label" style="color: var(--paytm-amber);">Timeout Hit (>1.5s)</span>
            </div>

            <div class="diagram-node fallback-path" style="border-style: dashed;">
              <strong>Bypass Synch Validation (Downshift)</strong>
              <p style="font-size: 0.65rem; color: var(--slate-600); margin-top: 0.15rem;">Avoid fuel pump checkout delay</p>
            </div>

            <div class="diagram-arrow">
              <span class="arrow-label">Queue Job</span>
            </div>

            <div class="diagram-node success-path">
              <strong>Asynchronous Worker Execution</strong>
              <p style="font-size: 0.65rem; color: var(--paytm-green); margin-top: 0.15rem;">Retry VAHAN API / Issue Policy</p>
            </div>

            <div class="diagram-arrow">
              <span class="arrow-label">Auto-Route</span>
            </div>

            <div class="diagram-node success-path" style="border-width: 2px;">
              <strong>WhatsApp Policy Delivery &lt; 5 min</strong>
              <p style="font-size: 0.65rem; color: var(--paytm-green); margin-top: 0.15rem;">Pristine user delivery complete</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <script src="script.js"></script>
</body>
</html>
