# Walkthrough: Redesigned Bento Grid Portfolio for Aditi Verma

I have completely redesigned the portfolio to resemble a high-end digital design studio page. The static corporate layout has been replaced with a dark-mode theme, geometric typography, and fluid interactive animations powered by GreenSock (GSAP) and ScrollTrigger.

## Changes Made

### 1. Structure (`index.html`)
- **Sticky Glassmorphic Header**: Top-anchored navigation with glass blur backing (`backdrop-filter`) and modern layout structure linking Overview, Bento Portfolio, and Metrics sections.
- **Hero Intro Block**: Designed with Space Grotesk typography showing: `"Aditi Verma // Product & Systems Architect"`.
- **Bento Grid**: A flexible grid assigning cards to dedicated positions:
  - **Card A (RideShield)**: Flagship card spanning 2 columns and 2 rows. Houses dynamic tabs for Strategic Sizing (Guesstimate calculations sizing up to ₹1.62 Lakhs daily GTV), PRD code specs (`REQ-001` fuel webhook, `REQ-002` VAHAN RC checker, and 10-minute anti-fraud buffer), and the "Graceful Degrade Fallback Framework" drawer simulator.
  - **Card B (Skill-Shatter)**: Spans 1 column. Details social gamification loops and the custom Academic Stock Market mock widget.
  - **Card C (Dermalink)**: Spans 1 column. Details cosmetic AI auditor computer vision pipelines, with a visual latency optimizer bar.
- **Interactive Metrics Engine**: Displays AARRR framework target markers with glowing progress lines and dynamic numbers.

### 2. Design System (`style.css`)
- **Theme**: Dark obsidian/charcoal backdrop (`#050507`, `#0c0c0e`) and radial accent background glows.
- **Color Accents**: Electric Cyan (`#00f2fe`), Neon Green (`#39ff14`), and Bright Magenta (`#ff007f`).
- **3D Card Perspectives**: Cards use `preserve-3d` transforms, tilting dynamically on mouse movements and casting intense hover color glow shadows matching their respective accents.
- **Dynamic Hidden Tags**: Recruiter-focused spec badges slide up and fade in only when cards are hovered.

### 3. Script Engine (`script.js`)
- **GSAP Timelines**: Drives entrance reveals for the hero headers and staggers grid card entries as they scroll onto screen.
- **GSAP ScrollTrigger Counter**: Triggers and count-animates the metrics numbers and progress lines when scrolled into view.
- **Mouse Coordinate Tracking**: Custom mouse tracking script calculating hover tilt angles (`rotateX` and `rotateY`) and moving radial gradient spotlights inside each bento card.
- **Interaction Simulators**: Handlers for RideShield's resilience flowchart latency spikes and Dermalink's 77% camera upload latency optimizations.

---

## Validation & Testing Results

### Local Development Server
- The local python web server continues to serve the directory on port **`8888`** at: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Manual Verification Instructions
> [!NOTE]
> Due to browser automation tool limitations on macOS, automated screenshot captures cannot run. 
> 
> You can manually verify the animations by launching: **[http://localhost:8888](http://localhost:8888)**

#### Key Areas to Interact With:
1. **Entrance**: Refresh the page to see the staggered text and card animations slide up in response to the GSAP engine.
2. **Card Hover**: Move your mouse over any bento card to observe the 3D tilt rotation following your cursor, the glowing colored backing shadows, and the slide-in of hidden technical pills (e.g. *MCC 5541 Hook*, *Streak Multiplier*, etc.).
3. **RideShield Tabs**: Click **PRD Spec Terminal** or **Resilience Drawer** within Card A to verify tabs switch seamlessly. Click **Simulate VAHAN Latency Spike** to check the fallback downshifting animation states.
4. **Dermalink Optimizer**: Click **Optimize Upload Pipeline** on Card C to watch the image latency countdown from 4.8s to 1.1s and shrink the progress bar.
5. **Metrics Engine**: Scroll down to the funnels card. Observe the progress lines fill and metrics numbers count up to targets.
