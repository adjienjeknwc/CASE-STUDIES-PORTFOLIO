# Implementation Plan: React + Framer Motion + Cute Light Theme Redesign

We will completely rebuild Aditi Verma's Product Portfolio as a React application using Vite and Framer Motion. The layout will adopt a warm, playful light theme (soft yellow backgrounds, cream capsules, paper cards, and clean borders) with smooth spring transitions, hover expansions, and a cute interactive mascot/energy widget.

## User Review Required

> [!IMPORTANT]
> Key architectural and style changes:
> 1. **Framework Transition**: Rebuilding the website in React (`src/App.jsx`) with Framer Motion, enabling physics-based springs, layouts, and drag motions.
> 2. **Warm Light Theme**:
>    - Background: Soft cream yellow (`#fffbeb`) and white card components.
>    - Borders: Thin, dark slate strokes (`#1e1e24`) with flat neobrutalism shadows.
>    - Accents: Soft pastel pink, mint green, and sky blue.
> 3. **Cute Interactive Elements**:
>    - **"Aditi's Product Buddy 🐱"**: An SVG cat mascot next to the bio that blinks on timer, and wiggles its ears on mouse hover.
>    - **"Send Positive Energy" Bubbles**: A button that generates floating animated heart/star emojis that drift up the screen using Framer Motion when clicked.
> 4. **Framer Motion Interactivity**:
>    - *Arch Welcome Scale*: Springs open on load.
>    - *Waving Hand*: Wiggles the hand emoji continuously on a loop.
>    - *Bento Grid Hover*: Staggered card entry reveals, 3D card float-ups, and capsule badges that bounce when hovered.
>    - *Claims & Scanner simulators*: Swapping panels in RideShield and scanning target files in Dermalink will use smooth Framer Motion height transitions and loading state overlays.

---

## Proposed Changes

Project directory: `/Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm`

### Scaffolding & Setup

1. **Vite Scaffolding**: React template initialized (Done).
2. **Dependencies**: React, React-DOM, Framer-Motion, and Lucide-React for clean icons (Installation in progress).

### Source Files

#### [MODIFY] [index.html](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/index.html)
- Load Lora, Space Grotesk, and Inter typography fonts.
- Clear out the raw scripts and styles references since Vite bundles assets.

#### [MODIFY] [src/index.css](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/src/index.css)
- Implement light-theme styling system variables.
- Reset standard browser layouts and define helper classes for neobrutalism-light shadows.

#### [MODIFY] [src/App.jsx](file:///Users/aditi/.gemini/antigravity/scratch/aditi-portfolio-paytm/src/App.jsx)
- Construct the core React layout: sticky header navbar, hero welcome banner, bento grid portfolio, funnels metrics, and recruiter analytics.
- Code Framer Motion properties:
  - `<motion.div>` on all cards to handle hover spring scales and floating effects.
  - State controls for RideShield tab panels and the Claims Auditor terminal.
  - State controls for the Dermalink scanning simulation.
  - Event log pipeline hover state sequence triggers.
  - Interactive "Send Positive Energy" floating bubble emitter state.
  - Animated SVG Cat Mascot component with winking / hover ear-wiggles.

---

## Verification Plan

### Automated Tests
- Validate React project compiling state.
- Run local dev server checking for React bundling errors.

### Manual Verification
- Test all buttons and tabs to confirm Framer Motion transitions render with high frames-per-second.
- Click the "Send Star" button to verify floating bubbles path and fade-out.
