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
  const clamp = gsap.utils.clamp(-4, 4); // Limit skew to avoid dizzying perspective

  ScrollTrigger.create({
    trigger: ".bento-grid",
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      // Calculate skew angle based on scroll speed/velocity
      const skew = clamp(self.getVelocity() / -500);
      
      // If skew is changing, animate it smoothly back to zero
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

  // Optimize performance transformations
  gsap.set(".bento-grid", { transformOrigin: "center center", force3D: true });

  /* ==========================================================================
     4. 3D CARD PERSPECTIVE TILT
     ========================================================================== */
  const cards = document.querySelectorAll('.bento-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update custom variables for gradient spotlight
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${px}%`);
      card.style.setProperty('--mouse-y', `${py}%`);
      
      // Compute tilt angles
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 7;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
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
      e.stopPropagation(); // Stop click from propagating card tilt recalculations
      const targetId = pill.getAttribute('id').replace('pill-', 'drawer-');
      
      pills.forEach(p => p.classList.remove('active'));
      panels.forEach(pan => pan.classList.remove('active'));
      
      pill.classList.add('active');
      
      const targetPanel = document.getElementById(targetId);
      targetPanel.classList.add('active');
      
      // Run slide up animation
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
      btnResilience.textContent = "Processing Checkout transaction...";

      // Step 1: Sync Validation Begins
      nodeSync.classList.add('highlight-cyan');
      
      // Step 2: Transition to fallback worker after 1.2s (VAHAN API lag spike)
      resilienceTimeout = setTimeout(() => {
        nodeSync.classList.remove('highlight-cyan');
        nodeAsync.classList.add('highlight-magenta');
        btnResilience.textContent = "VAHAN API Timeout (>1.5s) - Downshifting...";
        
        // Step 3: Success async delivery complete after 1.5s
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
     7. DERMALINK PIPELINE OPTIMIZER & SCREEN SIMULATOR
     ========================================================================== */
  const btnOptimizeCam = document.getElementById('btn-optimize-cam');
  const camViewport = document.getElementById('cam-viewport');
  const camTarget = document.getElementById('cam-target');
  const camLatency = document.getElementById('cam-latency');

  let camInterval = null;

  if (btnOptimizeCam) {
    btnOptimizeCam.addEventListener('click', (e) => {
      e.stopPropagation();
      clearInterval(camInterval);
      
      btnOptimizeCam.disabled = true;
      btnOptimizeCam.textContent = "Scaling Upload Pipelines...";
      camViewport.classList.remove('scanner-active');
      camTarget.textContent = "UPLOADING_IMAGE...";
      camTarget.style.borderColor = '';
      camTarget.style.color = '';
      camLatency.textContent = "4.8s";
      camLatency.classList.remove('optimized');

      let currentLatency = 4.8;
      
      // Reduce numbers
      camInterval = setInterval(() => {
        currentLatency -= 0.35;
        if (currentLatency <= 1.1) {
          clearInterval(camInterval);
          camLatency.textContent = "1.1s";
          camLatency.classList.add('optimized');
          camViewport.classList.add('scanner-active');
          camTarget.textContent = "RC_CHECK_COMPLETED";
          btnOptimizeCam.disabled = false;
          btnOptimizeCam.textContent = "Reset Optimization Sprint";
        } else {
          camLatency.textContent = `${currentLatency.toFixed(1)}s`;
        }
      }, 100);
    });
  }

  /* ==========================================================================
     8. STRATEGIC METRICS DIALS CHART ENGINE (GSAP TRIGGER)
     ========================================================================== */
  const dialAcq = document.getElementById('dial-acquisition');
  const dialAct = document.getElementById('dial-activation');
  const dialRet = document.getElementById('dial-retention');

  const counterAcq = { val: 0, target: 12 };
  const counterAct = { val: 0, target: 65 };
  const counterRet = { val: 0, target: 25 };

  // Track scroll and trigger dials animation
  ScrollTrigger.create({
    trigger: '#metrics',
    start: 'top 75%',
    onEnter: () => {
      // 1. Fill SVG progress rings (377 is total perimeter offset)
      if (dialAcq) dialAcq.style.strokeDashoffset = 377 - (377 * 0.12);
      if (dialAct) dialAct.style.strokeDashoffset = 377 - (377 * 0.65);
      if (dialRet) dialRet.style.strokeDashoffset = 377 - (377 * 0.25);

      // 2. Animate counter number text
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

});
