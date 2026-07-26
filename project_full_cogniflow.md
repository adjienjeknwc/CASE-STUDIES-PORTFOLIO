CogniFlow --- AI-Powered Workflow Automation Tool} \hfill {\fontsize{8.3}{10}\selectfont\color{mutedtext} Node.js, Express.js, React.js, Google Gemini LLM, GitHub}
\begin{itemize}
  \item Researched and identified an opportunity to automate a manual workflow; designed, built, and shipped the solution end-to-end.
\end{itemize}

\section{Education}
\small
\textbf{B.Tech --- Computer Science \& Engineering (IoT \& Information Security)}, Manipal University Jaipur \hfill \textit{\color{datetext}2023 -- 2027}\\
CGPA: \textbf{7.9/10} (up to 6th Semester) $\cdot$ Relevant Coursework: Data Structures \& Algorithms, DBMS, Software Engineering, Computer Networks, Operating Systems, Information Security

\vspace{3pt}
Summer Valley School, Dehradun (Uttarakhand) \hfill Class XII (ISC): \textbf{85.9\%} $\;|\;$ Class X (ICSE): \textbf{96.8\%}

\vspace{2pt}
\section{Certifications \& Achievements}
\fontsize{8.8}{10.4}\selectfont
Business Analysis (Microsoft) $\cdot$ Intro to Data Science (Cisco) $\cdot$ Software Engineering (IBM) $\cdot$ Dynamic Programming \& Greedy Algorithms (Colorado Boulder) $\cdot$ CCNA Networking (Cisco) $\cdot$ Python Essentials 1 $\cdot$ Intro to Modern AI $\cdot$ Wireframes (Google) $\cdot$ Figma (Udemy)

\end{document}                               PROJECTS - PulseGuard AI: Predictive Patient Deterioration & Clinical Intelligence Platform

Live Demo GitHub Repo

License: MIT Standards: HL7 FHIR R4 Canvas Engine: 60 FPS UI: WCAG AAA Light

🚀 Live Site URL: https://adjienjeknwc.github.io/vitalcare-icu/

An open, high-performance, web-native health technology platform for real-time physiological signal telemetry, predictive patient deterioration forecasting, interactive DICOM radiology inspection, and HL7 FHIR R4 clinical data interoperability.
🧰 Tech Stack in Color Blocks

Core Frontend & High-Performance Rendering

HTML5 CSS3 Light Theme JavaScript ES6+ Canvas 2D API Web Audio API

Health Tech Standards & Data Interoperability

HL7 FHIR R4 LOINC Taxonomy DICOM 3.0 Imaging NEWS2 Clinical Engine

Backend Tooling & Documentation

Python 3 ReportLab PDF Engine Git & GitHub

🌟 Key Innovations & Features

1. 📈 60 FPS Real-Time Physiological Canvas Sweepers

Lead II ECG Waveform: Mathematical synthesis of the P-QRS-T complex rendered via circular sweep-line canvas animation without DOM lag.
Photoplethysmogram (PPG / SpO2): Real-time pulse oximetry plethysmogram signal visualization.
Pulse Indicator: Visual heartbeat indicator synchronized with R-wave peak detection.
2. 🔮 30-Minute Prospective AI Deterioration Forecast

Slope Projection: Computes historical physiological slope trends across consecutive telemetry cycles.
Early Shock / Sepsis Flagging: Projects 30-minute prospective risk curves to alert clinicians before vitals cross crash threshold boundaries.
3. 🌐 HL7 FHIR R4 Standard Interoperability

Standardized Resource Engine: Live parsing and generation of HL7 FHIR R4 Observation resources with official LOINC codes (8867-4 Heart Rate, 2708-6 SpO2, 85354-9 BP Panel) and Patient resources.
JSON Exporter: One-click copy and downloadable .json FHIR bundle export for EHR integration.
4. 🩻 Interactive Web DICOM Radiology Inspector

Web-Native DICOM Slice Viewer: Renders simulated chest X-ray studies with pixel-level Window Width (Contrast) and Window Level (Brightness) adjustment sliders.
Interactive Distance Caliper Tool: Click any two points on the chest X-ray viewport to measure physical anatomical distances in millimeters (mm).
AI Anomaly Heatmap Overlay: Toggleable radial opacity overlay highlighting suspected pulmonary infiltrates.
5. 📝 Ambient SBAR Clinical Shift Handoff Generator

SBAR Synthesis: Automatically compiles live vitals telemetry into structured SBAR (Situation, Background, Assessment, Recommendation) nursing handoff notes.
Editable Clinical Editor: Built-in note editor with one-click Copy to Clipboard and Print capabilities.
6. 🎛️ Real-World Clinical Simulator Suite

Preset Scenarios: Trigger live clinical scenarios (Baseline Normal, Sepsis Onset, Severe Bradycardia, Respiratory Failure) to demonstrate alarm triage workflows.
Telemetry CSV Export: Instant download of timestamped vitals telemetry logs (.csv).
ISO 60601-1-8 Audio Alarm Triage: Web Audio API synthesized dual-tone alerts with a 120-second mute countdown timer.
🚀 Quick Start & Local Setup

Running Locally

Clone the Repository:

git clone https://github.com/adjienjeknwc/vitalcare-icu.git
cd vitalcare-icu
Start Local HTTP Server:

python3 -m http.server 8090
Open in Browser: Navigate to http://localhost:8090 in your web browser.

📋 Clinical Standards Reference (NEWS2 Scoring Matrix)

Physiological Parameter	Score 3	Score 2	Score 1	Score 0	Score 1	Score 2	Score 3
Respiration Rate (rpm)	≤ 8	--	9 - 11	12 - 20	--	21 - 24	≥ 25
SpO2 Oxygen (%)	≤ 91	92 - 93	94 - 95	≥ 96	--	--	--
Systolic BP (mmHg)	≤ 90	91 - 100	101 - 110	111 - 219	--	--	≥ 220
Heart Rate (bpm)	≤ 40	--	41 - 50	51 - 90	91 - 110	111 - 130	≥ 131
Temperature (°C)	≤ 35.0	--	35.1 - 36.0	36.1 - 38.0	38.1 - 39.0	≥ 39.1	--
🎨 Design System & Accessibility

The user interface adheres to strict clinical UI guidelines:

WCAG AAA Contrast: High contrast text (#0F172A on #FFFFFF and #F1F5F9).
Zero-Clutter Visual Hierarchy: Intuitive tabbed views preventing modal occlusion during emergency alerting.
Fluid Responsiveness: Auto-resizing canvases and responsive grids fitting laptops, desktops, and tablets.
                  ,