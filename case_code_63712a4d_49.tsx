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
     2. GSAP ENTRANCE ANIMATIONS
     ========================================================================== */
  // Hero Entrance Timeline
  const heroTl = gsap.timeline();
  heroTl.fromTo('.hero-subtag', 
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  )
  .fromTo('.hero-headline',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.4'
  )
  .fromTo('.hero-subheadline',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
    '-=0.5'
  );

  // Bento Cards Scroll Entrance
  gsap.fromTo('.bento-card',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 85%'
      }
    }
  );

  /* ==========================================================================
     3. 3D PARALLAX CARD TILT & GLOW HOVER EFFECT
     ========================================================================== */
  const cards = document.querySelectorAll('.bento-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate mouse position percentages inside the card bounds
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${px}%`);
      card.style.setProperty('--mouse-y', `${py}%`);
      
      // Convert to rotate degree angles (-8deg to 8deg ranges)
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 8;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
      
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
      card.style.setProperty('--translate-y', `-8px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rotate-x', `0deg`);
      card.style.setProperty('--rotate-y', `0deg`);
      card.style.setProperty('--translate-y', `0px`);
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });

  /* ==========================================================================
     4. RIDESHIELD CASE STUDY TABS
     ========================================================================== */
  const tabs = document.querySelectorAll('.rideshield-tab');
  const panels = document.querySelectorAll('.rideshield-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card hover actions
      const tabId = tab.getAttribute('id').replace('tab-', 'panel-');
      
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  /* ==========================================================================
     5. RIDESHIELD RESILIENCE SIMULATOR
     ========================================================================== */
  const btnResilience = document.getElementById('btn-simulate-resilience');
  const nodeNormal = document.getElementById('node-normal');
  const nodeFallback = document.getElementById('node-fallback');
  const nodeWhatsapp = document.getElementById('node-whatsapp');

  let resilienceTimeout = null;

  if (btnResilience) {
    btnResilience.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card hover transforms
      
      // Clear any running states
      clearTimeout(resilienceTimeout);
      nodeNormal.className = 'resilience-node';
      nodeFallback.className = 'resilience-node';
      nodeWhatsapp.className = 'resilience-node';
      btnResilience.disabled = true;
      btnResilience.textContent = "Simulating Latency Spike...";

      // Step 1: Normal Flow Start
      nodeNormal.classList.add('highlighted');
      
      // Step 2: Trigger Timeout Fallback after 1 second
      resilienceTimeout = setTimeout(() => {
        nodeNormal.classList.remove('highlighted');
        nodeFallback.classList.add('fallback-mode');
        
        // Step 3: Complete Asynchronous delivery after 1.5 seconds
        resilienceTimeout = setTimeout(() => {
          nodeFallback.classList.remove('fallback-mode');
          nodeFallback.classList.add('highlighted');
          nodeWhatsapp.classList.add('highlighted');
          
          btnResilience.disabled = false;
          btnResilience.textContent = "Simulation Done! Reset Pipeline";
        }, 1500);
      }, 1000);
    });
  }

  /* ==========================================================================
     6. DERMALINK LATENCY OPTIMIZATION SIMULATOR
     ========================================================================== */
  const btnOptimizeDermalink = document.getElementById('btn-run-latency-optimization');
  const latencyVal = document.getElementById('latency-val');
  const latencyFill = document.getElementById('latency-fill');

  let latencyInterval = null;

  if (btnOptimizeDermalink) {
    btnOptimizeDermalink.addEventListener('click', (e) => {
      e.stopPropagation();
      clearInterval(latencyInterval);
      btnOptimizeDermalink.disabled = true;
      btnOptimizeDermalink.textContent = "Optimizing Pipelines...";

      // Reset progress bar width
      latencyFill.className = 'latency-bar-fill';
      let currentVal = 4.8;
      
      // Fast count down counter
      latencyInterval = setInterval(() => {
        currentVal -= 0.2;
        if (currentVal <= 1.1) {
          clearInterval(latencyInterval);
          latencyVal.textContent = "1.1s";
          latencyFill.classList.add('optimized');
          btnOptimizeDermalink.disabled = false;
          btnOptimizeDermalink.textContent = "Pipeline Optimized! Reset";
        } else {
          latencyVal.textContent = `${currentVal.toFixed(1)}s`;
        }
      }, 80);
    });
  }

  /* ==========================================================================
     7. METRICS COUNTER AND PROGRESS TRIGGER (GSAP SCROLLTRIGGER)
     ========================================================================== */
  const metricsTargets = {
    acquisition: { val: 0, target: 12, elId: 'num-acquisition', fillId: 'fill-acquisition' },
    activation: { val: 0, target: 65, elId: 'num-activation', fillId: 'fill-activation' },
    retention: { val: 0, target: 25, elId: 'num-retention', fillId: 'fill-retention' },
    monetization: { val: 0, target: 60, elId: 'num-monetization', fillId: 'fill-monetization' }
  };

  // Create ScrollTrigger to drive progress bars and numeric count-ups
  ScrollTrigger.create({
    trigger: '#metrics',
    start: 'top 75%',
    onEnter: () => {
      // Animate progress lines
      document.getElementById('fill-acquisition').style.width = '12%';
      document.getElementById('fill-activation').style.width = '65%';
      document.getElementById('fill-retention').style.width = '25%';
      document.getElementById('fill-monetization').style.width = '60%';

      // GSAP animate count-up numbers
      Object.keys(metricsTargets).forEach(key => {
        const item = metricsTargets[key];
        gsap.to(item, {
          val: item.target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            document.getElementById(item.elId).textContent = Math.round(item.val);
          }
        });
      });
    }
  });

});
