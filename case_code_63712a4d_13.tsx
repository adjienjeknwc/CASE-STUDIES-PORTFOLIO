# Implementation Plan - Aditi Verma Product Management Portfolio

Build a highly engaging, interactive, single-page Product Management Portfolio for Aditi Verma, positioned for an Associate Product Manager (APM) role at Paytm. The project will showcase her skills in Fintech, core architecture, user trust, and system resilience through a premium, interactive web interface.

## User Review Required

> [!IMPORTANT]
> The portfolio is tailored specifically for the Paytm APM hiring team. It incorporates Paytm's exact core color palette, design systems, and direct terminology relating to merchant categories, VAHAN integrations, and anti-fraud protocols.
> 
> Key interactive features proposed:
> 1. **Scroll-State Sidebar Navigation**: A fixed sidebar on the left that dynamically updates active states as the user scrolls, built using native IntersectionObserver.
> 2. **Interactive Guesstimate Breakdown Tree**: A visual flow highlighting how Aditi calculates the ₹1.62 Lakhs daily gross transaction value (GTV) per city.
> 3. **Engineering Spec IDE Viewer**: A terminal/IDE interface where users can click between tabs (`REQ-001` and `REQ-002`) to inspect structured product requirements.
> 4. **Backend Log Flowchart**: A step-by-step visual tracker illustrating how a backend event sequence (`fuel_payment_success` → `rideshield_policy_issued`) lights up, demonstrating deep technical awareness.
> 5. **Interactive Phone Mockup Carousel**: A 3-screen interactive device frame mapping the 3-click user checkout path.

---

## Proposed Changes

We will create a new directory `aditi-portfolio-paytm` inside the default scratch directory:
- Project folder: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`
- Active workspace: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Portfolio Components

#### [NEW] [index.html](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/index.html)
- Create a clean HTML5 base layout containing the fixed left-hand navigation sidebar and the main content canvas.
- Incorporate all structure for the five sections:
  1. **Hero Header**: Welcome banner and horizontal case study cards (Paytm RideShield hero card, Skill-Shatter, Dermalink).
  2. **Section 1 (Strategic Discovery)**: Commuter persona comparison (Ramesh vs. Neha) and guesstimate tree.
  3. **Section 2 (PRD Specifications)**: Engineering Spec IDE Viewer and the 10-minute anti-fraud latency warning card.
  4. **Section 3 (Funnel Metrics)**: AARRR table and interactive log flowchart.
  5. **Section 4 (UX Journey)**: Side-by-side interactive mobile device frames mapping Screen 1, 2, and 3.
  6. **Section 5 (System Architecture)**: Graceful Degrade Fallback Framework and WhatsApp auto-routing flow.

#### [NEW] [style.css](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/style.css)
- Implement a modern typography stack (Inter/Roboto via Google Fonts) and standard layout resets.
- Define a custom theme using CSS variables matching Paytm colors:
  - `--paytm-navy`: `#002e6e`
  - `--paytm-blue`: `#00baf2`
  - `--paytm-green`: `#21c17a`
  - `--paytm-amber`: `#ea580c`
  - `--slate-50`: `#f8fafc`
  - `--slate-100`: `#f1f5f9`
  - `--slate-800`: `#1e293b`
  - `--slate-900`: `#0f172a`
- Setup layout styles: Fixed left sidebar (width: 280px) and wide main content canvas (margin-left: 300px) with responsive grid fallbacks for smaller viewports.
- Style interactive elements, card hover animations, code-style monospace specs, dialogs, progress bars, and mobile device mockups.

#### [NEW] [script.js](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/script.js)
- Code the `IntersectionObserver` to track headings and dynamically highlight active links in the sidebar navigation.
- Implement the tab switching logic for the Engineering Spec IDE viewer.
- Implement the interactive flowchart simulator to trace fuel payments through logs.
- Provide mockup interactions (e.g. click "Secure My Ride" to advance phone mockups, toggle active states on the screens).
- Implement interactive fallbacks for scroll-progress indicators.

---

## Verification Plan

### Automated Tests
- Check CSS code validity.
- Test responsive layout on various viewport resolutions.
- Verify script console for errors.

### Manual Verification
- We will start a local HTTP development server to test the single-page application in the browser using the browser subagent.
- Verify sidebar click-to-scroll smooth scroll offsets.
- Verify card hover states, IDE viewer tabs, flowchart clicks, and mockup carousel state transitions.
