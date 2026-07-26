# Implementation Plan: Redesigned Creative PM Portfolio

We will completely rewrite and redesign Aditi Verma's Product Management Portfolio. The rigid corporate sidebar will be replaced by a modern, dark-mode, single-page layout matching a high-end digital design studio. It will showcase her systems architecture, consumer product loops, and AI pipeline skills.

## User Review Required

> [!IMPORTANT]
> The site is transitioning from a Paytm-specific target to a high-end tech product portfolio suitable for top-tier roles (Fintech, AI, Consumer Tech). 
> 
> Key features proposed in the redesign:
> 1. **GreenSock (GSAP) & ScrollTrigger Integrations**: Adding smooth scrolling, header fade-in/slide-up entrance animations, and subtle parallax movements on content.
> 2. **Fluid Hover Rotations & Ambient Glows**: Creating interactive card animations that rotate slightly on 3D space, lift up, cast colored shadow glows (cyan, green, and magenta), and reveal technical spec pills when hovered.
> 3. **Interactive Bento Grid Portfolio**:
>    - **RideShield Card**: Large multi-column card housing sub-tabs for the strategic guesstimate (₹1.62L GTV), PRD specs (REQ-001, MCC 5541, 10-minute anti-fraud buffer), and the "Graceful Degrade Fallback Framework" drawer.
>    - **Skill-Shatter Card**: Highlighting gamified student loops, peer-to-peer compliance, and the Academic Stock Market.
>    - **Dermalink Card**: Highlighting AI pipelines, LLM-based product auditor flows, and camera processing latency sprint wins.
> 4. **Animated Metrics Engine**: Replacing static tables with animated data bars that trigger via GSAP when scrolled into view.

---

## Proposed Changes

We will modify files inside the project directory: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Portfolio Components

#### [MODIFY] [index.html](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/index.html)
- Replace structural tags: Remove `<aside class="sidebar">` and construct a clean, sticky header nav at the top.
- Redefine section blocks:
  1. **Hero Header**: High-impact text layout ("Aditi Verma // Product & Systems Architect").
  2. **Bento Grid**: A CSS Grid layout featuring Card A (RideShield, spanning multiple grid rows/columns), Card B (Skill-Shatter), and Card C (Dermalink).
  3. **Metrics Funnel**: Interactive chart visualizers for AARRR metrics.
- Import GSAP, ScrollTrigger, and Custom script files via CDN links.

#### [MODIFY] [style.css](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/style.css)
- Implement custom styling system:
  - Deep obsidian backgrounds (`#0a0a0c`, `#121214`).
  - Gradient accents: Electric Cyan (`#00f2fe`), Neon Green (`#39ff14`), Bright Magenta (`#ff007f`).
  - Font pairings: Space Grotesk/Outfit for geometrical headers, Inter for copy, and Fira Code for technical tags.
- Define 3D card perspective hover properties: `transform-style: preserve-3d`, `perspective: 1000px`, dynamic rotations, and `box-shadow` transitions containing high-intensity glow colors.
- Setup Bento-Grid grid areas and fallback layouts.
- Setup metrics bars and overlay drawers styles.

#### [MODIFY] [script.js](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/script.js)
- Code GSAP entrance reveals on scroll.
- Add GSAP hover tracking to dynamically rotate bento cards relative to mouse coordinates (creating a premium 3D parallax effect).
- Implement interactive PRD tabs and Fallback Framework drawers within the Bento cards.
- Code GSAP ScrollTrigger to slide the progress metrics to their corresponding target values as the user scrolls them into view.

---

## Verification Plan

### Automated Tests
- Test site loading speed and check console for GSAP script loading issues.
- Verify layout scaling across mobile and desktop.

### Manual Verification
- Test all interactive 3D card tilt hovers.
- Verify AARRR progress bar animation triggers when scrolled into view.
- Verify drawers/tabs functionality inside the Bento Grid cards.
