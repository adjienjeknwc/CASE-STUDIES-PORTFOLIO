# Implementation Plan: Sleek Tech-Studio Portfolio & Interactive Dashboard

We will redesign Aditi Verma's portfolio workspace into a dark-mode tech-studio dashboard. The layout will leverage high-fidelity glassmorphism, glowing hover states, GSAP-driven scroll skewing, expanding absolute drawers, and multiple interactive simulations: an insurance claims simulator, a camera ingredient scanner viewport, and a hovering log event pipeline.

## User Review Required

> [!IMPORTANT]
> The visual identity is reverting to a dark-mode theme with dynamic interactive dashboards:
> 1. **Color Palette & Layout**: Deep dark obsidian background (`#0a0a0c`), frosted glass borders, and dynamic border colors on hover.
> 2. **GSAP Scroll Skew & Kinetic Reveals**: Grid items slightly warp and drift on scrolling.
> 3. **Flagship Fintech (RideShield) Additions**:
>    - *Pill Panel Switcher*: Tabbing slide transitions between ROI Tracker, IDE terminal, and Resilience queues.
>    - *Claims Simulator Widget*: Clicking "Simulate Crash at Minute 4" (triggers red "Claim Denied" popup explaining the 10-minute anti-fraud rule) vs "Simulate Crash at Hour 2" (triggers green "Claim Approved" popup).
> 4. **Growth Consumer (Skill-Shatter) Additions**:
>    - *Two-Column Persona Matrix*: Side-by-side view comparing the daily executive vs. casual commuter.
>    - *Academic Stock Ticker*: Animated SVG paths showing skill trend values.
> 5. **AI Systems (Dermalink) Additions**:
>    - *Camera Scan Sandbox*: Polaroid mockup with a scanning bar animation. Tapping "Scan Skincare Ingredients" triggers a grid scan overlay, outputting a mock AI summary.
> 6. **Funnels Dashboard Additions**:
>    - *AARRR Metric Bars*: Glowing neon loading progress bars.
>    - *Hover Event Log Pipeline*: Hovering over step nodes dynamically lights them up sequentially, tracing payment webhooks to WhatsApp deliveries.
>    - *Recruiter Analytics Easter Egg*: A floating card at the bottom monitoring landing events and conversion odds, with a CTA to email Aditi.

---

## Proposed Changes

Project directory: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Redesign Components

#### [MODIFY] [index.html](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/index.html)
- Load Space Grotesk, Inter, and Fira Code fonts.
- Re-architect layout structure:
  - Sticky glass header nav.
  - Kinetic typography Hero welcome section.
  - Bento Grid case studies (RideShield cards, Skill-Shatter cards, Dermalink cards).
  - Metrics Engine container holding dials, flowchart logs, and the Recruiter Easter Egg.
- Implement HTML layouts for:
  - RideShield Claims simulator.
  - Skill-Shatter persona matrix and SVG stock graphs.
  - Dermalink camera scan grid and output panels.
  - Metrics log pipeline step nodes.

#### [MODIFY] [style.css](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/style.css)
- Implement custom styling system:
  - Background: `#0a0a0c`
  - Cards: `rgba(18, 18, 22, 0.45)` with `backdrop-filter: blur(25px)`
  - Glow overlays: cyan, green, and magenta borders.
- Code style blocks for:
  - Claims simulator buttons and result panels.
  - Persona matrix comparison boxes.
  - Smartphone scan layers, target boxes, and AI summary panels.
  - Event log nodes, arrows, and hover highlighting rules.
  - Recruiter Easter Egg floating pill.

#### [MODIFY] [script.js](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/script.js)
- Build GSAP scroll-skew animations.
- Implement the RideShield Claims simulator clicks and dynamic state triggers.
- Code the Dermalink Scan button to run the scanner lines, show a loading status, and display the ingredient analysis panel.
- Implement the hover listener for the Metrics log flowchart to light up steps sequentially.
- Code the Recruiter Easter Egg click handler.

---

## Verification Plan

### Automated Tests
- Audit CSS performance on scroll.

### Manual Verification
- Test all clicks: claims buttons, camera scan triggers, and RideShield tabs.
- Verify Metrics logs light up smoothly on mouse hover.
- Confirm the Recruiter Easter Egg is fully responsive.
