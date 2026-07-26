import React from 'react';
import { CaseStudy } from '../data/projects';
import { 
  ArrowLeft, AlertTriangle, Layers, X, Target, Lightbulb, CheckCircle2, 
  TrendingUp, ShieldAlert, Rocket, ArrowRight, DollarSign, Clock, Users, 
  BarChart3, HelpCircle, PhoneCall, Compass, ShieldCheck, Sparkles, Cpu, 
  Eye, Lock, FileCode, Workflow, Zap, MapPin, Radio, CreditCard, Star, 
  Activity, Server, Smartphone, Shield, Terminal, GitBranch, RefreshCw, 
  Scale, PieChart, LayoutGrid, ShoppingCart, ExternalLink, FileText, 
  CheckSquare, Award, AlertCircle, Database, Check, Mic, Users2, MessageSquare, Quote
} from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onBack }) => {
  return (
    <div className="min-h-screen bg-grid-pattern py-10 px-4 sm:px-6 lg:px-8 selection:bg-[#00DF89] text-[#1a1a1a]">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Neobrutalist Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#00DF89] text-[#1a1a1a] border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover font-black text-xs tracking-wider uppercase cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white text-[#1a1a1a] border-3 border-[#1a1a1a] cartoon-shadow flex items-center justify-center font-black hover:bg-[#00DF89] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Card */}
        <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow-lg p-8 sm:p-10 mb-12 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-block px-3 py-1 bg-[#00DF89] border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-wider cartoon-shadow">
              {study.type}
            </div>

            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00DF89] text-[#1a1a1a] border-2 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                <span>🚀 Launch Live App / Case Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] tracking-tight uppercase mb-4 leading-tight">
            {study.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 font-medium mb-6">
            {study.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-4 border-t-2 border-[#1a1a1a] text-slate-800">
            <div><strong>Role:</strong> {study.role}</div>
            <div className="hidden sm:block">•</div>
            <div><strong>Focus Metric:</strong> <span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">{study.focusMetric}</span></div>
          </div>
        </div>

        {/* 1. SWIGGY CASE STUDY BODY */}
        {study.id === 'swiggy' && (
          <div className="space-y-10 text-[#1a1a1a]">
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product Concept</td>
                      <td className="font-bold">Swiggy Squad Pay — Group Cart & Auto-Split UPI Payment Gate</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Target App</td>
                      <td>Swiggy Food Delivery (Corporate & Campus Hubs)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager (Case Study Author)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Notion Case Study</td>
                      <td>
                        <a href="https://app.notion.com/p/Product-Case-Study-Fixing-Swiggy-s-Workplace-Group-Ordering-Friction-3a7be7f0e9f380a085c4ec0f298ff7ec?source=copy_link" target="_blank" rel="noreferrer" className="text-amber-600 font-black underline flex items-center gap-1">
                          Open Swiggy Group Ordering Case Study on Notion 📖
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Focus Metrics</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Group Order AOV (₹320 ➔ ₹950), K-Factor (&gt;1.4), Logistics Cost Efficiency (-60%)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Executive Summary */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-amber-500" />
                1. Executive Summary & Problem Context
              </h2>
              <div className="p-4 bg-amber-50 border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  📌 <strong>The Problem:</strong> Ordering lunch in corporate offices and college dorms is fragmented and painful. A single "Host" manually collects food orders via WhatsApp, pays the full bill upfront on their personal card (₹1,500+), and spends days chasing colleagues for individual UPI repayments.
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  🚀 <strong>The Solution:</strong> Introduce <strong>"Swiggy Squad Pay"</strong>—a dynamic Group Cart feature featuring real-time collaborative item selection via web link, individual itemized UPI auto-splitting (GPay/PhonePe), and smart cart timeouts to prevent ordering delays.
                </p>
              </div>
            </section>

            {/* 2. Market Opportunity */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <TrendingUp className="w-6 h-6 text-amber-500" />
                2. Market Opportunity & Business Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-amber-600">📈 AOV Expansion</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Group orders average <strong>₹850 – ₹1,800</strong>, compared to ₹280 for solo orders, boosting basket margins.
                  </p>
                </div>
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-amber-600">🌱 Organic Viral Growth</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Every group order host invites 3–6 colleagues (K-factor &gt; 1.2), acquiring transactors without ad spend.
                  </p>
                </div>
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-amber-600">🚚 60% Cheaper Logistics</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Fulfilling 1 large delivery to an office lobby is 60% cheaper for Swiggy than 5 separate individual orders.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 2. MAKEMYTRIP UDAAN CASE STUDY BODY */}
        {study.id === 'makemytrip' && (
          <div className="space-y-10 text-[#1a1a1a]">
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product Concept</td>
                      <td className="font-bold">MakeMyTrip Udaan — Vernacular Aviation Assistant & Zero-Anxiety Flight Pass</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Target App</td>
                      <td>MakeMyTrip (Air Travel Division)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager (Case Study Author)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Notion Case Study</td>
                      <td>
                        <a href="https://app.notion.com/p/Product-Case-Study-Designing-MakeMyTrip-s-First-Time-Flyer-Experience-for-Tier-2-3-India-3a7be7f0e9f380b6a1d2e2807d0dc7f2?source=copy_link" target="_blank" rel="noreferrer" className="text-cyan-600 font-black underline flex items-center gap-1">
                          Open MMT First-Time Flyer Case Study on Notion 📖
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Focus Metrics</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Tier-2/3 Flight Bookings (+25% YoY) & Support Ticket Reduction (-40%)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Executive Summary */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-cyan-600" />
                1. Executive Summary & Problem Context
              </h2>
              <div className="p-4 bg-cyan-50 border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  📌 <strong>The Problem:</strong> Government infrastructure schemes (UDAN) have operationalized 70+ airports across Tier-2/3 cities in India (e.g., Darbhanga, Bareilly, Jharsuguda, Ayodhya). However, over 12 million first-time flyers annually face extreme psychological intimidation—alienating English aviation jargon, complex luggage rules, fear of unexpected airport counter fees, and airport navigation confusion.
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  🚀 <strong>The Solution:</strong> Introduce <strong>"MakeMyTrip Udaan"</strong>—a dedicated vernacular flight onboarding experience featuring a Zero-Hidden-Fee Guarantee, Airport Step-by-Step Navigation Guide, and Vernacular Audio Announcements (Hindi, Tamil, Telugu, Marathi, Bengali).
                </p>
              </div>
            </section>
          </div>
        )}

        {/* 3. EV TRAVEL CASE STUDY BODY */}
        {study.id === 'ev' && (
          <div className="space-y-10 text-[#1a1a1a]">
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product Concept</td>
                      <td className="font-bold">MakeMyTrip EV-Drive (x Grid-Lock Integration)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Target App</td>
                      <td>MakeMyTrip & Grid-Lock Real-Time API</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager (Case Study Author)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Notion Case Study</td>
                      <td>
                        <a href="https://app.notion.com/p/Product-Case-Study-Eliminating-Range-Anxiety-in-Inter-City-EV-Travel-3a9be7f0e9f38000b3adfd2715f1aa00?source=copy_link" target="_blank" rel="noreferrer" className="text-emerald-600 font-black underline flex items-center gap-1">
                          Open EV Range Anxiety Case Study on Notion 📖
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Focus Metric</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Inter-City EV Trip Completions & Booking Conversion (+18%)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Executive Summary */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-emerald-600" />
                1. Executive Summary & Problem Context
              </h2>
              <div className="p-4 bg-emerald-50 border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  📌 <strong>The Problem:</strong> As Electric Vehicle (EV) adoption in India accelerates, inter-city road trips remain constrained by "Range Anxiety"—the fear of running out of battery charge without access to reliable, operational charging infrastructure.
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  🚀 <strong>The Solution:</strong> Introduce <strong>"MMT EV-Drive"</strong>, a product integration powered by Grid-Lock's real-time charging telemetry API. By embedding automated EV route planning, guaranteed charger slot reservations, and EV-friendly hotel bundling directly into the MakeMyTrip app, MMT can capture the emerging high-value EV traveler segment and increase Outstation Cabs & Road Trip booking conversions by 18%.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* 4. DUOLINGO B2 INTERMEDIATE PLATEAU CASE STUDY BODY */}
        {study.id === 'duolingo' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600" /> 📌 QUICK FACTS & METADATA
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Author</td>
                      <td className="font-bold">Product Manager (Case Study Author)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Target Product</td>
                      <td>Duolingo Mobile & iOS Lock Screen / Audio Surface</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Focus Area</td>
                      <td>Advanced Retention (D30 ➔ D90), AI Product Strategy & LTV Expansion</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Primary Metric</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">D90 Active Retention Rate & Conversational Fluency Confidence</span></td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Notion Case Study</td>
                      <td>
                        <a href="https://app.notion.com/p/Product-Case-Study-Conquering-the-B2-Intermediate-Plateau-on-Duoling-3a7be7f0e9f380748702ed94c006b4d5?source=copy_link" target="_blank" rel="noreferrer" className="text-emerald-600 font-black underline flex items-center gap-1">
                          Open Duolingo B2 Intermediate Plateau Case Study on Notion 📖
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 🎯 1. Executive Summary */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-emerald-600" />
                🎯 1. Executive Summary
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                While Duolingo has mastered beginner acquisition and early streak mechanics, it faces a massive <strong>Intermediate Churn Bottleneck</strong>: <strong>62% of users who reach Day 30 churn before Day 90</strong>.
              </p>

              <div className="p-5 bg-rose-50 border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
                <h3 className="font-black text-sm uppercase text-rose-700">The Root Cause: "The Fluency Illusion"</h3>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  After 30+ days of matching vocabulary tiles, users experience the <strong>B2 Plateau</strong>—they can pass translation quizzes, but freeze up when trying to hold a real 2-minute conversation in the target language. Gamification alone no longer compensates for the lack of real-world speaking confidence.
                </p>
              </div>

              <div className="p-5 bg-emerald-50 border-2 border-[#1a1a1a] cartoon-shadow space-y-3">
                <h3 className="font-black text-sm uppercase text-emerald-800">The 2026 Novel Product Solution: "Duolingo Real-World Micro-Missions"</h3>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  Instead of endless matching quizzes, we introduce <strong>AI Voice Roleplay Sprints</strong> and <strong>Contextual Ambient Scenarios</strong>:
                </p>
                <ol className="text-xs space-y-2 text-slate-800 list-decimal pl-5 font-medium">
                  <li><strong>2-Minute AI Audio Roleplays:</strong> Low-stakes voice scenarios (e.g., <em>Ordering coffee in Madrid</em>, <em>Asking for directions in Tokyo</em>) with real-time feedback on pronunciation and filler words.</li>
                  <li><strong>Co-Op Guild Streaks:</strong> 3-person team streaks where teammates can perform 60-second "Rescue Sprints" to save a friend's breaking streak.</li>
                  <li><strong>Smart Lockscreen Ambient Flash-Scenarios:</strong> Passive 10-second contextual prompts based on user location (e.g., at an airport or coffee shop).</li>
                </ol>
              </div>

              <div className="p-5 bg-[#00DF89] border-3 border-[#1a1a1a] cartoon-shadow space-y-2">
                <h3 className="font-black text-sm uppercase text-[#1a1a1a]">Projected Business & Metric Impact</h3>
                <ul className="text-xs space-y-1 font-bold text-[#1a1a1a]">
                  <li>📈 <strong>+28.4% Lift in D90 Retention</strong> (from 38% to 48.8%)</li>
                  <li>📈 <strong>+34.2% Conversion to Super Duolingo / Duolingo Max</strong> (driven by AI voice features)</li>
                  <li>📈 <strong>+45% Increase in Spoken Confidence Score</strong> (self-reported post-lesson survey)</li>
                </ul>
              </div>
            </section>

            {/* 🔍 2. Strategic Context & Funnel Bottleneck */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Workflow className="w-6 h-6 text-emerald-600" />
                🔍 2. Strategic Context & Funnel Bottleneck
              </h2>
              <p className="text-sm leading-relaxed font-medium">
                Duolingo's classic gamification (D1–D14 streaks, leaderboards) succeeds at building a micro-habit, but fails at <strong>mastery-driven retention (D30+)</strong>.
              </p>

              {/* Mermaid Flow Representation */}
              <div className="p-6 bg-slate-900 text-white font-mono text-xs border-3 border-[#1a1a1a] cartoon-shadow space-y-3 overflow-x-auto">
                <div className="text-emerald-400 font-black uppercase tracking-wider text-xs border-b border-slate-700 pb-2">
                  📊 FUNNEL MAP: THE B2 FLUENCY WALL
                </div>
                <div className="space-y-2">
                  <div className="text-slate-300">A [Beginner Signup (Day 1)] ➔ B [Habit Formation & Streaks (Day 1–30)]</div>
                  <div className="pl-4 text-amber-400 font-bold">└─► C {`{The B2 Fluency Wall (Day 30–60)}`}</div>
                  <div className="pl-8 text-rose-400">
                    ├─► "Fails Real-World Speaking Test" ➔ D [Demoralization & Friction] ➔ E [Day 90 Churn: 62% Loss]
                  </div>
                  <div className="pl-8 text-emerald-400">
                    └─► "Enters AI Voice Micro-Missions" ➔ F [Conversational Mastery & LTV Upgrade] ➔ G [Retained Power User: D90 Retention +28.4%]
                  </div>
                </div>
              </div>
            </section>

            {/* 👤 3. User Research & Behavioral Breakthroughs */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Users className="w-6 h-6 text-emerald-600" />
                👤 3. User Research & Behavioral Breakthroughs
              </h2>
              <p className="text-sm font-medium leading-relaxed">
                We conducted qualitative interviews with 40 learners who reached a 30+ day streak but stopped opening the app.
              </p>

              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <thead>
                    <tr>
                      <th>User Segment</th>
                      <th>Core Friction / Mindset</th>
                      <th>Key Quote</th>
                      <th>Product Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold bg-[#f7f7f3]">
                        The Intermediate Plateaued Learner<br /><span className="text-[10px] font-normal text-slate-600">(Day 30–90)</span>
                      </td>
                      <td>"I can tap words on screen, but I panic when a native speaker talks to me."</td>
                      <td className="italic text-slate-700 bg-amber-50">
                        "I spent 50 days on French, went to Paris, and couldn't order a croissant."
                      </td>
                      <td className="font-bold text-emerald-700">
                        Shift from <strong>passive word matching</strong> to <strong>low-stakes active voice roleplay</strong>.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold bg-[#f7f7f3]">
                        The Isolated Streak Runner
                      </td>
                      <td>"My streak feels like a chore, not a community."</td>
                      <td className="italic text-slate-700 bg-amber-50">
                        "If I break my 40-day streak, nobody notices except the owl."
                      </td>
                      <td className="font-bold text-emerald-700">
                        Shift from <strong>solo streak pressure</strong> to <strong>Co-Op Social Rescue Streaks</strong>.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4.📱 Visual Product Screens & UX Wireframes */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Smartphone className="w-6 h-6 text-emerald-600" />
                4.📱 Visual Product Screens & UX Wireframes
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-emerald-700 flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5" /> Screen 1: AI Voice Micro-Mission
                  </h3>
                  <p className="text-[11px] text-slate-600 font-mono">("Barcelona Cafe" Scenario)</p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Active voice interaction screen with real-time audio waveform, dynamic AI prompts, and low-anxiety fluency feedback.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-emerald-700 flex items-center gap-1">
                    <Users2 className="w-3.5 h-3.5" /> Screen 2: Co-Op Guild Streaks
                  </h3>
                  <p className="text-[11px] text-slate-600 font-mono">("Rescue Sprint" Alert)</p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Social streak protection interface where teammates can perform a 60-second quiz to save a friend's streak.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-emerald-700 flex items-center gap-1">
                    <BarChart3 className="w-3.5 h-3.5" /> Screen 3: B2 Fluency Dashboard
                  </h3>
                  <p className="text-[11px] text-slate-600 font-mono">(Fluency Progress & XP)</p>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Tracking conversational confidence alongside traditional XP metrics and vocabulary mastery scores.
                  </p>
                </div>
              </div>
            </section>

            {/* 💡 5. RICE Prioritization & Feature Matrix */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Scale className="w-6 h-6 text-emerald-600" />
                💡 5. RICE Prioritization & Feature Matrix
              </h2>
              <div className="p-4 bg-slate-100 border-2 border-[#1a1a1a] font-mono text-xs text-center font-bold">
                RICE Score = (Reach × Impact × Confidence) / Effort
              </div>

              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <thead>
                    <tr>
                      <th>Feature Candidate</th>
                      <th>Reach</th>
                      <th>Impact</th>
                      <th>Confidence</th>
                      <th>Effort</th>
                      <th>RICE Score</th>
                      <th>Strategic Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">1. AI Voice Roleplay Micro-Missions</td>
                      <td>75%</td>
                      <td>3.0</td>
                      <td>90%</td>
                      <td>2.0</td>
                      <td className="font-black text-emerald-600 text-sm">101.2</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">🚀 P0 (Primary Launch)</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold">2. Co-Op Guild Team Streaks (Rescue Sprints)</td>
                      <td>80%</td>
                      <td>2.5</td>
                      <td>85%</td>
                      <td>1.5</td>
                      <td className="font-black text-emerald-600 text-sm">113.3</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">🚀 P0 (Viral Growth)</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold">3. Location-Aware Lock Screen Ambient Prompts</td>
                      <td>50%</td>
                      <td>1.5</td>
                      <td>70%</td>
                      <td>2.0</td>
                      <td className="font-black text-slate-700">26.2</td>
                      <td><span className="bg-amber-200 px-2 py-0.5 border border-[#1a1a1a] font-bold">⚡ P1 (Next Release)</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold">4. AR Object Translation Camera</td>
                      <td>30%</td>
                      <td>1.0</td>
                      <td>60%</td>
                      <td>3.0</td>
                      <td className="font-black text-slate-500">6.0</td>
                      <td><span className="bg-slate-200 px-2 py-0.5 border border-[#1a1a1a] font-bold">⏳ P2 (Deferred)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 📊 6. Experimentation & Metrics Framework */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
                📊 6. Experimentation & Metrics Framework
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-emerald-700">📈 Primary Metric</h3>
                  <p className="text-xs font-bold text-slate-800">D90 Active Retention Rate</p>
                  <p className="text-xs text-slate-600">% of users active on Day 90 (<strong>+28.4% target</strong>).</p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-emerald-700">💰 Secondary Metric</h3>
                  <p className="text-xs font-bold text-slate-800">Super Duolingo Upgrade Rate</p>
                  <p className="text-xs text-slate-600">Premium subscription conversions driven by unlimited AI voice practice (<strong>+34.2% target</strong>).</p>
                </div>

                <div className="bg-amber-50 border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-amber-800">⚠️ Guardrail Metric</h3>
                  <p className="text-xs font-bold text-slate-800">Voice Anxiety Drop-off</p>
                  <p className="text-xs text-slate-600">Ensure <strong>&lt;4%</strong> of users abandon lessons when voice microphone is requested (provide instant text-toggle fallback).</p>
                </div>
              </div>
            </section>

            {/* 🛠️ 7. Deep Dive Product Specifications */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Rocket className="w-6 h-6 text-emerald-600" />
                🛠️ 7. Deep Dive Product Specifications
              </h2>

              {/* Feature 1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase text-emerald-700 flex items-center gap-2">
                  <Mic className="w-5 h-5" /> Feature 1: AI Voice Roleplay Micro-Missions (Multimodal GenAI)
                </h3>
                <ul className="text-xs space-y-2 font-medium text-slate-700 list-disc pl-5">
                  <li><strong>UX Flow:</strong> At Day 14+, after completing a standard lesson, the user gets invited to a <strong>2-minute Voice Mission</strong>.</li>
                  <li><strong>Scenario Example:</strong>
                    <ul className="list-circle pl-5 space-y-1 text-slate-600 pt-1">
                      <li><em>Mascot Prompt:</em> "You are at a tapas bar in Barcelona. Order 2 empanadas and ask for the check in Spanish."</li>
                      <li><em>AI Companion:</em> Speaks in natural accent, adapts difficulty dynamically based on user response, and provides instant audio corrections.</li>
                    </ul>
                  </li>
                  <li><strong>Low-Anxiety Feedback System:</strong> Instead of red "X" marks, provide a <strong>Fluency Scorecard</strong> highlighting 🎯 Accuracy | ⏱️ Speaking Tempo | 🌟 Vocabulary Variety.</li>
                </ul>

                {/* ASCII Interface Diagram */}
                <div className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
                  <div className="text-amber-400 font-bold">┌─────────────────────────────────────────────────────────────┐</div>
                  <div>│ 🎙️ Duolingo AI Voice Mission: Barcelona Cafe                 │</div>
                  <div>├─────────────────────────────────────────────────────────────┤</div>
                  <div>│ AI Barista: "¡Hola! ¿Qué te pongo hoy?"                    │</div>
                  <div>│ User Voice: "Quiero dos empanadas, por favor."               │</div>
                  <div>│                                                             │</div>
                  <div className="text-emerald-300">│ 💡 Instant Tip: "Great job! Next time try: 'Me gustaría...'"│</div>
                  <div className="text-amber-400 font-bold">└─────────────────────────────────────────────────────────────┘</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-lg font-black uppercase text-emerald-700 flex items-center gap-2">
                  <Users2 className="w-5 h-5" /> Feature 2: Co-Op Guild Streaks ("Rescue Sprints")
                </h3>
                <ul className="text-xs space-y-2 font-medium text-slate-700 list-disc pl-5">
                  <li><strong>Problem Solved:</strong> Solo streak loss causes 84% instant churn.</li>
                  <li><strong>Mechanism:</strong> Users form 3-person <strong>Language Squads</strong>.</li>
                  <li><strong>The "Rescue" Mechanic:</strong> If Teammate A forgets to practice by 9:00 PM, Teammates B and C receive a notification:</li>
                </ul>
                <div className="p-4 bg-amber-50 border-2 border-[#1a1a1a] cartoon-shadow text-xs font-bold text-amber-900 flex items-start gap-2">
                  <Quote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>"Alex's 45-day streak is in danger! Complete a 60-second Rescue Quiz to shield the Squad Streak!"</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  <strong>Network Effect:</strong> Turns streak maintenance into a social accountability loop.
                </p>
              </div>
            </section>

            {/* 📊 8. A/B Testing Protocol */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Target className="w-6 h-6 text-emerald-600" />
                📊 8. Experimentation Protocol & A/B Testing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-slate-700">Variant A (Control)</h3>
                  <p className="text-xs text-slate-700 font-medium">Existing standard curriculum + solo streaks (150,000 user cohort reaching D14 streak).</p>
                </div>
                <div className="bg-emerald-50 border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-xs uppercase text-emerald-800">Variant B (Treatment)</h3>
                  <p className="text-xs text-slate-700 font-medium">Unlocks AI Voice Roleplays at D14 + Co-Op Squad Rescue Streaks.</p>
                </div>
              </div>
            </section>

            {/* ⚖️ 9. Strategic Trade-offs & Risks */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <ShieldAlert className="w-6 h-6 text-emerald-600" />
                ⚖️ 9. Strategic Trade-offs & Risk Matrix
              </h2>

              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <thead>
                    <tr>
                      <th>Risk</th>
                      <th>Impact</th>
                      <th>PM Counter-Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">
                        LLM Latency & API Cost:<br />
                        <span className="font-normal text-slate-600 text-[10px]">Real-time voice inference can be expensive and laggy.</span>
                      </td>
                      <td><span className="bg-rose-100 text-rose-800 border border-[#1a1a1a] font-bold px-2 py-0.5">High Cost / Latency</span></td>
                      <td className="font-bold text-emerald-800">
                        On-Device Small Spec Model: Use quantized edge audio models for latency under 400ms, routing complex feedback to server asynchronously.
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold">
                        Microphone Anxiety:<br />
                        <span className="font-normal text-slate-600 text-[10px]">Introverted users dislike speaking into phones in public.</span>
                      </td>
                      <td><span className="bg-amber-100 text-amber-800 border border-[#1a1a1a] font-bold px-2 py-0.5">Lower Engagement</span></td>
                      <td className="font-bold text-emerald-800">
                        Quiet Mode Toggle: Auto-detect background noise or allow 1-tap "Subway Mode" (Whisper / Silent Tap alternative).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        )}

      </div>
    </div>
  );
};
