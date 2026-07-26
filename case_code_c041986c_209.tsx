# Dermalink: Intelligent Multimodal Skincare Auditor

Dermalink is a mobile-first, single-page web application (SPA) designed to perform clinical-grade facial skincare analysis and daily routine formulation. By combining front-facing selfie captures (or file uploads) with biological intake parameters, the platform securely queries Google's **Gemini Vision API** to classify skin attributes, identify target chemical actives, and construct pricing-tiered morning and night routines.

---

## Key Features

### 1. 🔒 Client-Side Biometric Privacy Mask
To safeguard user privacy, Dermalink implements a local redaction layer on the client's device:
* Immediately upon photo capture (via webcam or file upload), the app draws a solid charcoal-dark bar (`#18181b`) directly over the horizontal eye line (biometric zone) using the HTML5 Canvas context.
* This redaction occurs **locally before compilation to Base64**, ensuring eye identity markers never leave the browser or get sent to Google's servers.

### 2. 🗺️ Tri-Zone Facial Mapping
The visual analysis is divided into three distinct anatomical zones parsed dynamically from the Gemini JSON response:
* **T-Zone (Forehead & Nose)**: Identifies oiliness, congestion, and sebum levels.
* **Cheeks (Malar Region)**: Evaluates redness, inflammation, or dryness.
* **U-Zone (Chin & Jawline)**: Detects dryness, flakiness, or hormonal breakout attributes.
* Zones display specific moisture status tags (Dry / Normal / Oily) alongside localized attributes.

### 3. 📊 Business-Tier Routine Selector & Cost Calculator
Dermalink maps its suggested skincare routine across three market segments:
* **Budget ($)**: Accessible drugstore formulations (e.g., The Ordinary, CeraVe, Inkey List).
* **Balanced ($$)**: Mid-tier clinical formulations (e.g., La Roche-Posay, Paula's Choice, Cosrx).
* **Premium ($$$)**: High-end medical-grade formulations (e.g., iS Clinical, SkinCeuticals, Tatcha).
* An interactive toggle filters recommendations in real-time, dynamically updating a **Total Estimated Routine Cost** calculator summing all products.

---

## Technology Stack

* **Frontend Framework**: React 19 + TypeScript + Vite
* **Styling**: Tailwind CSS v4 (native `@tailwindcss/vite` integration)
* **Iconography**: Lucide React
* **AI Model Engine**: Google Generative AI SDK (`@google/generative-ai` mapping `gemini-2.5-flash`)

---

## Local Setup & Development

### Prerequisites
* [Node.js](https://nodejs.org/) (v20+ recommended)
* A Google Gemini API Key (obtained from [Google AI Studio](https://aistudio.google.com/))

### Installation
1. Clone the repository and navigate to the directory:
   ```bash
   git clone https://github.com/adjienjeknwc/dermalink-ai-skincare.git
   cd dermalink-ai-skincare
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the local build at `http://localhost:5173`. Click the gear icon in the top right to paste your Gemini API key.

---

## Deployment Guides

### 1. Vercel Deployment (Recommended)
Vercel is the optimal host for React SPAs and handles routing automatically.
1. Sign in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** ➔ **Project**.
3. Import your GitHub repository: `dermalink-ai-skincare`.
4. Keep the default build settings:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
5. Click **Deploy**. Vercel will automatically compile and serve the project at a custom `.vercel.app` URL on every git push.

### 2. GitHub Pages Deployment
A deployment workflow is configured at `.github/workflows/deploy.yml` using GitHub Actions.
1. Push your changes to the `main` branch.
2. Go to your repository **Settings** ➔ **Pages** tab.
3. Under **Build and deployment**, select **GitHub Actions** as the **Source**.
4. The site will publish automatically at `https://<your-username>.github.io/dermalink-ai-skincare/`.
