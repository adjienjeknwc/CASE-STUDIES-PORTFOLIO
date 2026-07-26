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
     2. PLAYFUL ENTRANCE ANIMATIONS (GSAP TIMELINE)
     ========================================================================== */
  const heroTl = gsap.timeline();
  
  // Arch Container animation
  heroTl.fromTo('.hero-arch-container',
    { opacity: 0, scaleY: 0.8, transformOrigin: 'bottom center' },
    { opacity: 1, scaleY: 1, duration: 1.2, ease: 'power4.out' }
  )
  // Headlines and tags inside the arch
  .fromTo('.hero-arch-container .hero-subtag',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.6'
  )
  .fromTo('.hero-arch-container .hero-headline',
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.4'
  )
  .fromTo('.hero-capsule-row',
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
    '-=0.3'
  )
  // About text reveals
  .fromTo('.intro-title',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.2'
  )
  .fromTo('.intro-desc',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.6'
  )
  .fromTo('.intro-cta-row',
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    '-=0.6'
  )
  // Polaroid entry
  .fromTo('.polaroid-card',
    { opacity: 0, rotate: 15, scale: 0.9, y: 40 },
    { opacity: 1, rotate: 3, scale: 1, y: 0, duration: 1.0, ease: 'back.out(1.2)' },
    '-=1.0'
  )
  // Floating badges pop-in
  .fromTo('.floating-card-tag',
    { opacity: 0, scale: 0.6 },
    { opacity: 1, scale: 1, stagger: 0.15, duration: 0.6, ease: 'back.out(2)' },
    '-=0.4'
  );

  /* ==========================================================================
     3. GSAP SCROLL SKEW GRID ANIMATION
     ========================================================================== */
  let proxy = { skew: 0 };
  const skewSetter = gsap.quickSetter(".bento-grid", "skewY", "deg");
  const clamp = gsap.utils.clamp(-3, 3); // Minimal skew for playful paper aesthetic

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

  /* ==========================================================================
     4. CARD HOVER 3D PERSPECTIVE TILT
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
     5. RIDESHIELD CASE STUDY TAB TOGGLES
     ========================================================================== */
  const pills = document.querySelectorAll('.rideshield-pill');
  const panels = document.querySelectorAll('.rideshield-panel');

  pills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card hover tilt updates
      const targetId = pill.getAttribute('id').replace('pill-', 'drawer-');
      
      pills.forEach(p => p.classList.remove('active'));
      panels.forEach(pan => pan.classList.remove('active'));
      
      pill.classList.add('active');
      
      const targetPanel = document.getElementById(targetId);
      targetPanel.classList.add('active');
      
      // Fluid transition
      gsap.fromTo(targetPanel, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    });
  });

  /* ==========================================================================
     6. RIDESHIELD RESILIENCE FLOW SIMULATOR
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
      btnResilience.textContent = "Validating VAHAN RC Status...";

      // Step 1: Normal Flow Start
      nodeSync.classList.add('highlight-cyan');
      
      // Step 2: Timeout downshift after 1.2s
      resilienceTimeout = setTimeout(() => {
        nodeSync.classList.remove('highlight-cyan');
        nodeAsync.classList.add('highlight-magenta');
        btnResilience.textContent = "Spike Timeout (>1.5s) - Downshifting...";
        
        // Step 3: Success async WhatsApp routing after 1.5s
        resilienceTimeout = setTimeout(() => {
          nodeAsync.classList.remove('highlight-magenta');
          nodeAsync.classList.add('highlight-cyan');
          nodeWhatsapp.classList.add('highlight-cyan');
          btnResilience.disabled = false;
          btnResilience.textContent = "Simulation Done! Restart";
        }, 1500);
      }, 1200);
    });
  }

  /* ==========================================================================
     7. DERMALINK PIPELINE OPTIMIZER SIMULATOR
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
      btnOptimizeCam.textContent = "Optimizing Camera Pipelines...";
      camViewport.classList.remove('scanner-active');
      camTarget.textContent = "UPLOADING_IMAGE...";
      camLatency.textContent = "4.8s";
      camLatency.classList.remove('optimized');

      let currentLatency = 4.8;
      
      camInterval = setInterval(() => {
        currentLatency -= 0.35;
        if (currentLatency <= 1.1) {
          clearInterval(camInterval);
          camLatency.textContent = "1.1s";
          camLatency.classList.add('optimized');
          camViewport.classList.add('scanner-active');
          camTarget.textContent = "RC_CHECK_COMPLETED";
          btnOptimizeCam.disabled = false;
          btnOptimizeCam.textContent = "Reset Latency Sprint";
        } else {
          camLatency.textContent = `${currentLatency.toFixed(1)}s`;
        }
      }, 100);
    });
  }

  /* ==========================================================================
     8. STRATEGIC METRICS DIALS CHART ENGINE (GSAP SCROLLTRIGGER)
     ========================================================================== */
  const dialAcq = document.getElementById('dial-acquisition');
  const dialAct = document.getElementById('dial-activation');
  const dialRet = document.getElementById('dial-retention');

  const counterAcq = { val: 0, target: 12 };
  const counterAct = { val: 0, target: 65 };
  const counterRet = { val: 0, target: 25 };

  // Set initial offsets
  if (dialAcq) dialAcq.style.strokeDashoffset = 377;
  if (dialAct) dialAct.style.strokeDashoffset = 377;
  if (dialRet) dialRet.style.strokeDashoffset = 377;

  ScrollTrigger.create({
    trigger: '#metrics',
    start: 'top 75%',
    onEnter: () => {
      // 1. Draw SVG progress circles (377 is full dash)
      if (dialAcq) dialAcq.style.strokeDashoffset = 377 - (377 * 0.12);
      if (dialAct) dialAct.style.strokeDashoffset = 377 - (377 * 0.65);
      if (dialRet) dialRet.style.strokeDashoffset = 377 - (377 * 0.25);

      // 2. Count up numbers
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
