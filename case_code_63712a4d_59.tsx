# Implementation Plan: Radical Immersive Portfolio Redesign

We will execute a complete visual and motion overhaul to transform Aditi Verma's portfolio into an interactive product experience. We will replace all flat static cards with acrylic glassmorphism components, implement kinetic typography, add a scroll-skewed grid system via GSAP ScrollTrigger, and build custom SVG graph charts and camera scanners.

## User Review Required

> [!IMPORTANT]
> This revision is a radical shift from static data listings to a highly styled, interactive design playground.
>
> Major components to be implemented:
> 1. **Kinetic Typography & Scroll-Skew Grid**: Headers will slide in via GSAP. The entire Bento Grid will slightly skew and shift in 3D perspective during page scroll.
> 2. **Interactive RideShield Pills**: Toggle pills will slide-transition between:
>    - *Risk ROI Funnel*: A vertical visual funnel block representing conversion steps.
>    - *IDE Code spec terminal*: Vibrant JSON parsing specifications.
>    - *Fault Tolerance Panel*: A latency simulation console showing the asynchronous WhatsApp fallback path.
> 3. **Skill-Shatter SVG Growth Line**: A visual Academic Stock Market tracker displaying an animated, glowing SVG path chart that runs when hovered or triggered.
> 4. **Dermalink Camera Scanning Mockup**: An interactive viewport mockup containing a vertical scanning line, representing LLM image upload optimizations.
> 5. **Custom Metrics Chart Engine**: An animated visual metrics board replacing simple progress bars with thick glowing gradient charts.

---

## Proposed Changes

Workspace path: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Redesign Components

#### [MODIFY] [index.html](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/index.html)
- Redefine bento card elements:
  - Add interactive toggle buttons inside RideShield.
  - Setup container placeholders for the interactive Academic Stock Market SVG chart.
  - Create the Dermalink scanning camera simulation window.
  - Structure the custom metrics engine using SVG graphs.

#### [MODIFY] [style.css](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/style.css)
- Implement glassmorphism styles: `background: rgba(18, 18, 22, 0.45)`, `backdrop-filter: blur(25px)`, and `border: 1px solid rgba(255, 255, 255, 0.08)`.
- Set up glowing border triggers: transitions between cyan, green, and magenta borders.
- Set up camera scanning effects: absolute positioned glowing bar moving via CSS keyframes.
- Define grid skewing base properties for GSAP scroll interaction.

#### [MODIFY] [script.js](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/script.js)
- Build GSAP kinetic typography entrance timelines.
- Configure GSAP ScrollTrigger to dynamically skew the `.bento-grid` during scroll (mapping velocity to skew angles).
- Animate the SVG growth lines for the Academic Stock Market.
- Control the Dermalink camera scanner states and latencies.
- Build the custom visual metrics charts using GSAP timelines.

---

## Verification Plan

### Automated Tests
- Audit console for GSAP skew rendering efficiency.
- Verify fallback CSS styles for browsers lacking hardware acceleration.

### Manual Verification
- Test scroll velocity to ensure grid skewing feels smooth and doesn't induce visual lag.
- Interact with all buttons (pills, camera optimization trigger, latency simulation) to verify fluid state transitions.
