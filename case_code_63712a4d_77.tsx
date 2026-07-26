# Implementation Plan: Playful Pastel Redesign (Yellow & Paper Aesthetic)

We will overhaul the visual design of Aditi Verma's portfolio to match the clean, playful, and minimalist design-agency aesthetic shown in the user's reference image. We will scrap the dark-mode neon theme and rebuild the interface with a warm pastel yellow background, high-contrast serif typography, polaroid-style image cards, floating white capsule buttons, and hand-drawn accents, while keeping all interactive bento spec components intact.

## User Review Required

> [!IMPORTANT]
> Visual identity updates:
> 1. **Color Palette**: Transitioning to a soft yellow background (`#fffbe0`), dark charcoal text (`#1a1a1a`), and pure white cards/capsules (`#ffffff`) with smooth drop shadows.
> 2. **Hero Structure**:
>    - Top half: Large curved cream dome containing the centered title `"PORTFOLIO* &rarr; [ 2026 ]"`.
>    - Bottom half: `"Hello 👋 I'm Aditi!"` with custom sub-text, search-styled LinkedIn capsule, and a right-side polaroid card of Aditi featuring tags popping out (`"Fintech PM!"`, `"API Architect!"`).
> 3. **Bento Grid & Interactive Modules**:
>    - Converting bento grid cards to look like stacked paper sheets or polaroids with rounded corners, drop shadows, and clean black borders.
>    - RideShield case study tabs styled as floating white capsules.
>    - Skill-Shatter SVG line graph styled in clean dark ink.
>    - Dermalink camera scanner styled as a smartphone frame within the warm pastel theme.
> 4. **Metrics Funnel**: Custom SVG progress ring dials matching the warm yellow-and-white theme.

---

## Proposed Changes

Project directory: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Redesign Components

#### [MODIFY] [index.html](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/index.html)
- Load additional fonts (Lora/Playfair Display for serif headings, Space Grotesk/Inter for geometric text).
- Re-architect Hero section:
  - Build the top arch hero container.
  - Build the bottom introductory grid containing Aditi's profile pitch and polaroid card layout.
- Update Bento Grid case study wrappers to match paper cards.

#### [MODIFY] [style.css](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/style.css)
- Implement color variables for the new theme:
  - `--bg-yellow`: `#fffbeb`
  - `--bg-arch`: `#fef08a`
  - `--bg-card`: `#ffffff`
  - `--text-dark`: `#111111`
  - `--text-secondary`: `#475569`
- Code shadow styling: `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05)`.
- Re-style all interactive buttons, terminal containers, SVG graphs, and scanners to fit the yellow-and-white paper theme.

#### [MODIFY] [script.js](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/script.js)
- Maintain GSAP transitions, mouse-coordinate 3D tilts, and interaction simulators.
- Update colors inside the JS simulators (e.g. latency, flowchart node triggers) to align with the yellow/green/cyan palette.

---

## Verification Plan

### Automated Tests
- Audit CSS transitions for rendering issues on yellow elements.

### Manual Verification
- Test all buttons and card interactions to ensure high accessibility contrast.
- Verify polaroid hover tilt animations function correctly.
