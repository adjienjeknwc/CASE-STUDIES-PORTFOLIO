document.addEventListener('DOMContentLoaded', () => {

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  /* ==========================================================================
     1. SCROLL PROGRESS INDICATOR
     ========================================================================== */
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progressPercentage = scrollable > 0 ? (scrolled / scrollable) : 0;
    progressBar.style.transform = `scaleX(${progressPercentage})`;
  });

  /* ==========================================================================
     2. KINETIC TYPOGRAPHY ENTRANCE ANIMATIONS
     ========================================================================== */
  const heroTl = gsap.timeline();
  
  heroTl.fromTo('.hero-subtag',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  )
  .fromTo('.hero-headline',
    { opacity: 0, y: 80 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
    '-=0.5'
  )
  .fromTo('.hero-subheadline',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
    '-=0.7'
  );

  /* ==========================================================================
     3. GSAP SCROLL SKEW GRID ANIMATION
     ========================================================================== */
  let proxy = { skew: 0 };
  const skewSetter = gsap.quickSetter(".bento-grid", "skewY", "deg");
  const clamp = gsap.utils.clamp(-4, 4);

  ScrollTrigger.create({
    trigger: ".bento-grid",
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const skew = clamp(self.getVelocity() / -500);
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

  /* ==========================================================================
     4. 3D CARD PERSPECTIVE TILT
     ========================================================================== */
  const bentoCards = document.querySelectorAll('.bento-card');
  
  bentoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${px}%`);
      card.style.setProperty('--mouse-y', `${py}%`);
      
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 6;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });

  /* ==========================================================================
     5. RIDESHIELD MODULE SLIDE DRAWER TOGGLES
     ========================================================================== */
  const pills = document.querySelectorAll('.rideshield-pill');
  const panels = document.querySelectorAll('.rideshield-panel');

  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = pill.getAttribute('id').replace('pill-', 'drawer-');
      
      pills.forEach(p => p.classList.remove('active'));
      panels.forEach(pan => pan.classList.remove('active'));
      
      pill.classList.add('active');
      
      const targetPanel = document.getElementById(targetId);
      targetPanel.classList.add('active');
      
      gsap.fromTo(targetPanel, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    });
  });

  /* ==========================================================================
     6. RIDESHIELD RESILIENCE SIMULATOR
     ========================================================================== */
  const btnResilience = document.getElementById('btn-run-resilience');
  const nodeSync = document.getElementById('node-sync');
  const nodeAsync = document.getElementById('node-async');
  const nodeWhatsapp = document.getElementById('node-whatsapp-output');

  let resilienceTimeout = null;

  if (btnResilience) {
    btnResilience.addEventListener('click', (e) => {
      e.stopPropagation();
      
      clearTimeout(resilienceTimeout);
      nodeSync.className = 'flow-node';
      nodeAsync.className = 'flow-node';
      nodeWhatsapp.className = 'flow-node';
      btnResilience.disabled = true;
      btnResilience.textContent = "Processing Checkout RC validation...";

      nodeSync.classList.add('highlight-cyan');
      
      resilienceTimeout = setTimeout(() => {
        nodeSync.classList.remove('highlight-cyan');
        nodeAsync.classList.add('highlight-magenta');
        btnResilience.textContent = "VAHAN Timeout (>1.5s) - Downshifting to Background worker...";
        
        resilienceTimeout = setTimeout(() => {
          nodeAsync.classList.remove('highlight-magenta');
          nodeAsync.classList.add('highlight-cyan');
          nodeWhatsapp.classList.add('highlight-cyan');
          btnResilience.disabled = false;
          btnResilience.textContent = "Restart Resilience Simulator";
        }, 1500);
      }, 1200);
    });
  }

  /* ==========================================================================
     7. EXTRA: RIDESHIELD CLAIMS SIMULATOR WIDGET
     ========================================================================== */
  const btnClaimMin4 = document.getElementById('btn-claim-min4');
  const btnClaimHour2 = document.getElementById('btn-claim-hour2');
  const claimResultTerminal = document.getElementById('claim-result-terminal');

  if (btnClaimMin4 && btnClaimHour2) {
    btnClaimMin4.addEventListener('click', (e) => {
      e.stopPropagation();
      claimResultTerminal.className = 'claim-output-terminal denied';
      claimResultTerminal.textContent = "SYSTEM_AUDIT_DENIED: Incident occurred at Minute 4. Rule REQ-001 enforces a 10-minute anti-fraud activation cooling-off latency buffer. Claims blocked.";
    });

    btnClaimHour2.addEventListener('click', (e) => {
      e.stopPropagation();
      claimResultTerminal.className = 'claim-output-terminal approved';
      claimResultTerminal.textContent = "SYSTEM_AUDIT_APPROVED: Incident occurred at Hour 2. 10-minute cooling window passed. Policy active status validated via asynchronous background sync. Claim auto-approved.";
    });
  }

  /* ==========================================================================
     8. DERMALINK PIPELINE CAMERA SCANNING SIMULATOR
     ========================================================================== */
  const btnOptimizeCam = document.getElementById('btn-optimize-cam');
  const camViewport = document.getElementById('cam-viewport');
  const camTarget = document.getElementById('cam-target');
  const camLatency = document.getElementById('cam-latency');
  const camReportBlock = document.getElementById('cam-report-block');

  let camInterval = null;

  if (btnOptimizeCam) {
    btnOptimizeCam.addEventListener('click', (e) => {
      e.stopPropagation();
      clearInterval(camInterval);
      
      btnOptimizeCam.disabled = true;
      btnOptimizeCam.textContent = "Optimizing Camera Pipelines...";
      camViewport.classList.remove('scanner-active');
      camTarget.textContent = "SCANNING_INGREDIENTS...";
      camLatency.textContent = "4.8s";
      camLatency.classList.remove('optimized');
      camReportBlock.classList.remove('active');
      camReportBlock.textContent = "";

      let currentLatency = 4.8;
      
      camInterval = setInterval(() => {
        currentLatency -= 0.35;
        if (currentLatency <= 1.1) {
          clearInterval(camInterval);
          camLatency.textContent = "1.1s";
          camLatency.classList.add('optimized');
          camViewport.classList.add('scanner-active');
          camTarget.textContent = "SCAN_COMPLETED";
          
          btnOptimizeCam.disabled = false;
          btnOptimizeCam.textContent = "Restart Image Capture Scan";
          
          // Show summary report
          camReportBlock.classList.add('active');
          camReportBlock.innerHTML = `<strong>SCAN_REPORT:</strong> Active compounds found: Niacinamide (4%), Salicylic Acid (2%). Safe check: PASS. Latency optimization sprint: slashed by 77% (4.8s &rarr; 1.1s).`;
        } else {
          camLatency.textContent = `${currentLatency.toFixed(1)}s`;
        }
      }, 100);
    });
  }

  /* ==========================================================================
     9. STRATEGIC METRICS DIALS CHART ENGINE (GSAP SCROLLTRIGGER)
     ========================================================================== */
  const dialAcq = document.getElementById('dial-acquisition');
  const dialAct = document.getElementById('dial-activation');
  const dialRet = document.getElementById('dial-retention');

  const counterAcq = { val: 0, target: 12 };
  const counterAct = { val: 0, target: 65 };
  const counterRet = { val: 0, target: 25 };

  ScrollTrigger.create({
    trigger: '#metrics',
    start: 'top 75%',
    onEnter: () => {
      if (dialAcq) dialAcq.style.strokeDashoffset = 377 - (377 * 0.12);
      if (dialAct) dialAct.style.strokeDashoffset = 377 - (377 * 0.65);
      if (dialRet) dialRet.style.strokeDashoffset = 377 - (377 * 0.25);

      gsap.to(counterAcq, {
        val: counterAcq.target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          document.getElementById('num-acq').textContent = Math.round(counterAcq.val);
        }
      });

      gsap.to(counterAct, {
        val: counterAct.target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          document.getElementById('num-act').textContent = Math.round(counterAct.val);
        }
      });

      gsap.to(counterRet, {
        val: counterRet.target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          document.getElementById('num-ret').textContent = Math.round(counterRet.val);
        }
      });
    }
  });

  /* ==========================================================================
     10. VISUAL EVENT LOG PIPELINE FLOW (HOVER SEQUENTIAL HIGHLIGHTS)
     ========================================================================== */
  const pipelineContainer = document.getElementById('pipeline-container');
  const pipeSteps = [
    document.getElementById('pipe-step-1'),
    document.getElementById('pipe-step-2'),
    document.getElementById('pipe-step-3'),
    document.getElementById('pipe-step-4')
  ];
  let pipeTimeouts = [];

  if (pipelineContainer) {
    pipelineContainer.addEventListener('mouseenter', () => {
      // Reset steps
      pipeSteps.forEach(step => step.classList.remove('active-trail'));
      pipeTimeouts.forEach(clearTimeout);
      pipeTimeouts = [];

      // Highlight sequentially
      pipeSteps.forEach((step, index) => {
        const timeout = setTimeout(() => {
          step.classList.add('active-trail');
        }, index * 300);
        pipeTimeouts.push(timeout);
      });
    });

    pipelineContainer.addEventListener('mouseleave', () => {
      pipeTimeouts.forEach(clearTimeout);
      pipeTimeouts = [];
      pipeSteps.forEach(step => step.classList.remove('active-trail'));
    });
  }

  /* ==========================================================================
     11. RECRUITER ANALYTICS TYPEWRITER EASTER EGG
     ========================================================================== */
  const eggText = document.getElementById('egg-typewriter-text');
  const textToType = "Funnel Event Captured: Recruiter landed on Aditi's Portfolio. Conversion Probability: 99.8%.";
  let typeIndex = 0;

  if (eggText) {
    eggText.textContent = "";
    
    function startTypewriter() {
      if (typeIndex < textToType.length) {
        eggText.textContent += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(startTypewriter, 35);
      }
    }
    
    // Start typewriter typing after 2 seconds
    setTimeout(startTypewriter, 2000);
  }

});
