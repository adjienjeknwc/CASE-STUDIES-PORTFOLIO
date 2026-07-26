import re

with open('/Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx', 'w', encoding='utf-8') as out:
    out.write('''import React from 'react';
import { CaseStudy } from '../data/projects';
import { 
  ArrowLeft, X, ExternalLink, Zap, Compass, TrendingUp, Users, Workflow, Rocket, 
  Scale, BarChart3, Target, Mic, Users2, Smartphone, ShieldAlert, Quote, MessageSquare 
} from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onBack }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8 text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Minimal Navigation Bar */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>
          
          <button
            onClick={onBack}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Minimal Header Section */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded">
              {study.type}
            </span>
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline"
              >
                <span>Open Notion Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {study.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-4 border-t border-slate-200">
            <div><span className="font-semibold text-slate-700">Role:</span> {study.role}</div>
            <div><span className="font-semibold text-slate-700">Focus Metric:</span> {study.focusMetric}</div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. SWIGGY CASE STUDY BODY (Minimal View) */}
        {/* ========================================================================= */}
        {study.id === 'swiggy' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* Quick Overview Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Product Concept</span>
                  <span className="font-semibold text-slate-800">Swiggy Squad Pay - Group Cart & Auto-Split UPI</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Target Audience</span>
                  <span className="font-semibold text-slate-800">Corporate Offices & College Dorm Hubs</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Primary Goals</span>
                  <span className="font-semibold text-slate-800">AOV Growth (₹320 ➔ ₹950), K-Factor (&gt;1.4), Delivery Efficiency</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Full Notion Case Study</span>
                  <a href="https://app.notion.com/p/Product-Case-Study-Fixing-Swiggy-s-Workplace-Group-Ordering-Friction-3a7be7f0e9f380a085c4ec0f298ff7ec?source=copy_link" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline">
                    View original Notion document ↗
                  </a>
                </div>
              </div>
            </div>

            {/* 1. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">1. Executive Summary & Problem Context</h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Ordering lunch in corporate offices and college dorms is fragmented and painful. A single "Host" manually collects food orders via WhatsApp, pays the full bill upfront on their personal card (₹1,500+), and spends days chasing colleagues for individual UPI repayments.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Proposed Product Solution: Swiggy Squad Pay</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  A dynamic Group Cart feature featuring real-time collaborative item selection via web link, individual itemized UPI auto-splitting (GPay/PhonePe), and smart cart timeouts to prevent ordering delays.
                </p>
              </div>
            </section>

            {/* 2. Business Impact */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. Market Opportunity & Business Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-semibold text-slate-900 block">AOV Expansion</span>
                  <p className="text-slate-600">Group orders average ₹850 - ₹1,800 vs. ₹280 for solo orders.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-semibold text-slate-900 block">Organic Growth (K &gt; 1.2)</span>
                  <p className="text-slate-600">Hosts invite 3-6 colleagues per order, driving free user acquisition.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-semibold text-slate-900 block">60% Logistics Savings</span>
                  <p className="text-slate-600">Fulfilling 1 large delivery to an office lobby is 60% cheaper than 5 separate orders.</p>
                </div>
              </div>
            </section>

            {/* 3. User Personas */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. User Personas & Pain Points</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-2">
                  <span className="font-bold text-slate-900 block">Persona A: Rohan (26) - Office Host</span>
                  <p className="text-slate-600">Wants to order team lunch without being the "bad guy" collecting cash.</p>
                  <p className="text-rose-600 font-medium">Pain: Pays ₹1,200 upfront; 2 colleagues forget to transfer their share for days.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-2">
                  <span className="font-bold text-slate-900 block">Persona B: Priya (24) - Picky Team Member</span>
                  <p className="text-slate-600">Wants custom dietary options without micro-managing the host over Slack.</p>
                  <p className="text-rose-600 font-medium">Pain: Texts custom requests on WhatsApp hoping the host enters it right.</p>
                </div>
              </div>
            </section>

            {/* 4. Core Features */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">4. Core Features</h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-semibold mb-1">1. Instant Group Cart (No-App Web Link)</strong>
                  Host shares a 6-digit PIN or web link. Coworkers add items directly via webview without app download.
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-semibold mb-1">2. Auto-Split UPI Payment Gate</strong>
                  Each participant pays for their specific items + share of taxes/delivery via GPay/PhonePe; order dispatches when 100% paid.
                </li>
                <li className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-semibold mb-1">3. 10-Minute Cart Timeout & Item Lock</strong>
                  10-minute timer prevents 1 slow colleague from stalling lunch; locks items for 8 minutes during checkout.
                </li>
              </ul>
            </section>

            {/* 5. Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">5. Success Metrics & Guardrails</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star Metric</span>
                <p className="text-sm font-semibold">Group Orders Completed per Week (+30% growth target in corporate hubs)</p>
                <div className="pt-2 border-t border-slate-800 text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div>• Secondary: AOV increase from ₹320 to ₹950</div>
                  <div>• Guardrail: Host Cart Abandonment &lt; 12%</div>
                </div>
              </div>
            </section>

          </article>
        )}

        {/* ========================================================================= */}
        {/* 2. MAKEMYTRIP UDAAN CASE STUDY BODY (Minimal View) */}
        {/* ========================================================================= */}
        {study.id === 'makemytrip' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* Quick Overview Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Product Concept</span>
                  <span className="font-semibold text-slate-800">MakeMyTrip Udaan - Vernacular Aviation Assistant</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Target Segment</span>
                  <span className="font-semibold text-slate-800">First-Time Flyers from Tier-2/3 Regional Airports</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Primary Goals</span>
                  <span className="font-semibold text-slate-800">Regional Bookings (+25% YoY), Support Calls (-40%)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Full Notion Case Study</span>
                  <a href="https://app.notion.com/p/Product-Case-Study-Designing-MakeMyTrip-s-First-Time-Flyer-Experience-for-Tier-2-3-India-3a7be7f0e9f380b6a1d2e2807d0dc7f2?source=copy_link" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline">
                    View original Notion document ↗
                  </a>
                </div>
              </div>
            </div>

            {/* 1. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">1. Executive Summary</h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Government infrastructure schemes (UDAN) have operationalized 70+ airports across Tier-2/3 cities in India (Darbhanga, Bareilly, Jharsuguda, Ayodhya). However, over 12 million first-time flyers annually face extreme psychological intimidation—alienating English aviation jargon, luggage confusion, fear of unexpected airport counter fees, and terminal navigation stress.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Proposed Solution: "MakeMyTrip Udaan"</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  A dedicated vernacular flight onboarding experience featuring a Zero-Hidden-Fee Guarantee, Airport Step-by-Step Navigation Guide, and Vernacular Audio Announcements (Hindi, Tamil, Telugu, Marathi, Bengali).
                </p>
              </div>
            </section>

            {/* 2. User Personas */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. User Personas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-2">
                  <span className="font-bold text-slate-900 block">Ramesh Prasad (48) - Shop Owner, Darbhanga</span>
                  <p className="text-slate-600">Flying to Delhi to visit his daughter. Cannot read English baggage rules; terrified of extra airport fees.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-2">
                  <span className="font-bold text-slate-900 block">Sunil (24) - Job Seeker, Bareilly</span>
                  <p className="text-slate-600">Flying to Bengaluru for a job interview on a budget. Confused about Cabin vs. Checked luggage items.</p>
                </div>
              </div>
            </section>

            {/* 3. Core Solutions */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. Core Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <strong className="font-semibold text-slate-900 block">1. Zero Hidden Fee Guarantee</strong>
                  <p className="text-slate-600">Displays 15kg checked + 7kg cabin + free auto web check-in with bilingual bag dimensions.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <strong className="font-semibold text-slate-900 block">2. Airport Step-by-Step Navigator</strong>
                  <p className="text-slate-600">Interactive timeline tracking ID check ➔ Check-in Counter ➔ Security ➔ Boarding Gate.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <strong className="font-semibold text-slate-900 block">3. Vernacular Audio Assistant</strong>
                  <p className="text-slate-600">One-tap speaker button on boarding pass for regional audio announcements.</p>
                </div>
              </div>
            </section>

            {/* 4. Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">4. Success Metrics</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star Metric</span>
                <p className="text-sm font-semibold">First-Time Flyer Bookings Completed per Month (+25% YoY Target)</p>
                <div className="pt-2 border-t border-slate-800 text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div>• Tier-2 Conversion: 8.2% ➔ 12.5%</div>
                  <div>• Support Calls: -40% reduction</div>
                </div>
              </div>
            </section>

          </article>
        )}

        {/* ========================================================================= */}
        {/* 3. EV TRAVEL CASE STUDY BODY (Minimal View) */}
        {/* ========================================================================= */}
        {study.id === 'ev' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* Quick Overview Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Product Concept</span>
                  <span className="font-semibold text-slate-800">MMT EV-Drive - Real-Time Telemetry & Charger Booking</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Strategic Partner</span>
                  <span className="font-semibold text-slate-800">Grid-Lock Live Telemetry API</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Primary Goals</span>
                  <span className="font-semibold text-slate-800">Inter-City EV Trips (+25% QoQ), Booking Conversion (+18%)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Full Notion Case Study</span>
                  <a href="https://app.notion.com/p/Product-Case-Study-Eliminating-Range-Anxiety-in-Inter-City-EV-Travel-3a9be7f0e9f38000b3adfd2715f1aa00?source=copy_link" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline">
                    View original Notion document ↗
                  </a>
                </div>
              </div>
            </div>

            {/* 1. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">1. Executive Summary</h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                As Electric Vehicle (EV) adoption in India accelerates, inter-city road trips remain constrained by "Range Anxiety"—the fear of running out of battery charge without access to reliable, operational charging infrastructure.
              </p>
              <div className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Proposed Solution: "MMT EV-Drive"</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Embed automated EV route planning, guaranteed charger slot reservations via Grid-Lock's API, and EV-friendly hotel bundling directly into the MakeMyTrip app.
                </p>
              </div>
            </section>

            {/* 2. Core Features */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. Core Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <strong className="font-semibold text-slate-900 block">1. Smart EV Route Planner</strong>
                  <p className="text-slate-600">Auto-plots route based on EV vehicle model & starting battery %.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <strong className="font-semibold text-slate-900 block">2. Guaranteed Charger Booking</strong>
                  <p className="text-slate-600">Pre-book 30-minute charger slot via Grid-Lock telemetry API.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <strong className="font-semibold text-slate-900 block">3. EV Hotel & Meal Bundling</strong>
                  <p className="text-slate-600">Suggests co-located dining & MMT resort lounge pass during 35-min charge.</p>
                </div>
              </div>
            </section>

            {/* 3. Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. Success Metrics</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star Metric</span>
                <p className="text-sm font-semibold">Successful Inter-City EV Trips Completed per Month (+25% QoQ)</p>
                <div className="pt-2 border-t border-slate-800 text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div>• Charger Booking Conversion: &gt;35%</div>
                  <div>• Charger Wait Time: 28m ➔ &lt;3m</div>
                </div>
              </div>
            </section>

          </article>
        )}

        {/* ========================================================================= */}
        {/* 4. DUOLINGO B2 INTERMEDIATE PLATEAU CASE STUDY BODY (Minimal View) */}
        {/* ========================================================================= */}
        {study.id === 'duolingo' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* Metadata Overview Card */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Metadata</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block">Author</span>
                  <span className="font-semibold text-slate-800">Product Manager (Case Study Author)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Target Product</span>
                  <span className="font-semibold text-slate-800">Duolingo Mobile & iOS Lock Screen / Audio</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Focus Area</span>
                  <span className="font-semibold text-slate-800">Advanced Retention (D30 ➔ D90), AI Product Strategy</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Primary Metric</span>
                  <span className="font-semibold text-slate-800">D90 Retention (+28.4%) & Spoken Confidence (+45%)</span>
                </div>
              </div>
            </div>

            {/* 🎯 1. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">🎯 1. Executive Summary</h2>
              <p className="text-sm sm:text-base text-slate-700">
                While Duolingo has mastered beginner acquisition and early streak mechanics, it faces a massive <strong>Intermediate Churn Bottleneck</strong>: <strong>62% of users who reach Day 30 churn before Day 90</strong>.
              </p>

              <div className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r text-xs sm:text-sm space-y-2">
                <strong className="text-slate-900 block font-bold">The Root Cause: "The Fluency Illusion"</strong>
                <p className="text-slate-600 text-xs">
                  After 30+ days of matching vocabulary tiles, users experience the <strong>B2 Plateau</strong>—they can pass translation quizzes, but freeze up when trying to hold a real 2-minute conversation in the target language. Gamification alone no longer compensates for the lack of real-world speaking confidence.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block font-bold">The 2026 Solution: "Duolingo Real-World Micro-Missions"</strong>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-600">
                  <li><strong>2-Minute AI Audio Roleplays:</strong> Low-stakes voice scenarios (ordering coffee in Madrid, asking directions in Tokyo) with real-time feedback on pronunciation and filler words.</li>
                  <li><strong>Co-Op Guild Streaks:</strong> 3-person team streaks where teammates can perform 60-second "Rescue Sprints" to save a friend's breaking streak.</li>
                  <li><strong>Smart Lockscreen Ambient Flash-Scenarios:</strong> Passive 10-second contextual prompts based on user location (e.g., at an airport or coffee shop).</li>
                </ol>
              </div>

              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-1.5">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">Projected Metric Impact</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-[11px] text-slate-200 font-semibold">
                  <div>• D90 Retention: +28.4% (38% ➔ 48.8%)</div>
                  <div>• Super Conversion: +34.2%</div>
                  <div>• Spoken Confidence: +45%</div>
                </div>
              </div>
            </section>

            {/* 🔍 2. Strategic Context */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">🔍 2. Strategic Context & Funnel Bottleneck</h2>
              <p className="text-xs sm:text-sm text-slate-700">
                Duolingo's classic gamification (D1–D14 streaks, leaderboards) succeeds at building a micro-habit, but fails at <strong>mastery-driven retention (D30+)</strong>.
              </p>

              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-1 text-slate-800">
                <div className="font-bold text-slate-900">FUNNEL FLOW: THE B2 FLUENCY WALL</div>
                <div>Beginner Signup (Day 1) ➔ Habit Formation (Day 1–30)</div>
                <div className="pl-4 text-rose-600">└─► The B2 Fluency Wall (Day 30–60)</div>
                <div className="pl-8 text-rose-500">├─► Fails Real-World Speaking Test ➔ Demoralization ➔ Day 90 Churn (62% Loss)</div>
                <div className="pl-8 text-emerald-700 font-bold">└─► Enters AI Voice Micro-Missions ➔ Conversational Mastery ➔ D90 Retained Power User (+28.4%)</div>
              </div>
            </section>

            {/* 👤 3. User Research Table */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">👤 3. User Research & Behavioral Breakthroughs</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="p-3 border-r border-slate-200">User Segment</th>
                      <th className="p-3 border-r border-slate-200">Core Friction / Mindset</th>
                      <th className="p-3 border-r border-slate-200">Key Quote</th>
                      <th className="p-3">Product Opportunity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">
                        The Intermediate Plateaued Learner<br /><span className="text-[10px] font-normal text-slate-500">(Day 30–90)</span>
                      </td>
                      <td className="p-3 border-r border-slate-200">"I can tap words on screen, but I panic when a native speaker talks to me."</td>
                      <td className="p-3 italic text-slate-600 border-r border-slate-200">"I spent 50 days on French, went to Paris, and couldn't order a croissant."</td>
                      <td className="p-3 font-semibold text-emerald-700">Shift from passive word matching to low-stakes active voice roleplay.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold bg-slate-50 border-r border-slate-200">The Isolated Streak Runner</td>
                      <td className="p-3 border-r border-slate-200">"My streak feels like a chore, not a community."</td>
                      <td className="p-3 italic text-slate-600 border-r border-slate-200">"If I break my 40-day streak, nobody notices except the owl."</td>
                      <td className="p-3 font-semibold text-emerald-700">Shift from solo streak pressure to Co-Op Social Rescue Streaks.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 💡 5. RICE Matrix */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">💡 5. RICE Prioritization & Feature Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="p-3 border-r border-slate-200">Feature Candidate</th>
                      <th className="p-3 border-r border-slate-200">Reach</th>
                      <th className="p-3 border-r border-slate-200">Impact</th>
                      <th className="p-3 border-r border-slate-200">Confidence</th>
                      <th className="p-3 border-r border-slate-200">Effort</th>
                      <th className="p-3 border-r border-slate-200">RICE Score</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">1. AI Voice Roleplay Micro-Missions</td>
                      <td className="p-3 border-r border-slate-200">75%</td>
                      <td className="p-3 border-r border-slate-200">3.0</td>
                      <td className="p-3 border-r border-slate-200">90%</td>
                      <td className="p-3 border-r border-slate-200">2.0</td>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">101.2</td>
                      <td className="p-3 font-bold text-emerald-700">🚀 P0 (Primary Launch)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">2. Co-Op Guild Team Streaks (Rescue Sprints)</td>
                      <td className="p-3 border-r border-slate-200">80%</td>
                      <td className="p-3 border-r border-slate-200">2.5</td>
                      <td className="p-3 border-r border-slate-200">85%</td>
                      <td className="p-3 border-r border-slate-200">1.5</td>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">113.3</td>
                      <td className="p-3 font-bold text-emerald-700">🚀 P0 (Viral Growth)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">3. Location-Aware Lock Screen Prompts</td>
                      <td className="p-3 border-r border-slate-200">50%</td>
                      <td className="p-3 border-r border-slate-200">1.5</td>
                      <td className="p-3 border-r border-slate-200">70%</td>
                      <td className="p-3 border-r border-slate-200">2.0</td>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">26.2</td>
                      <td className="p-3 font-medium text-amber-700">⚡ P1 (Next Release)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">4. AR Object Translation Camera</td>
                      <td className="p-3 border-r border-slate-200">30%</td>
                      <td className="p-3 border-r border-slate-200">1.0</td>
                      <td className="p-3 border-r border-slate-200">60%</td>
                      <td className="p-3 border-r border-slate-200">3.0</td>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">6.0</td>
                      <td className="p-3 text-slate-500">⏳ P2 (Deferred)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 🛠️ 7. Product Specs */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">🛠️ 7. Deep Dive Product Specifications</h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 font-bold block text-sm">Feature 1: AI Voice Roleplay Micro-Missions (Multimodal GenAI)</strong>
                <p className="text-xs text-slate-600">At Day 14+, after completing a standard lesson, users unlock a 2-minute Voice Mission.</p>
                <div className="p-4 bg-slate-100 rounded font-mono text-xs text-slate-800 space-y-1">
                  <div><strong>Mascot Prompt:</strong> "You are at a tapas bar in Barcelona. Order 2 empanadas and ask for the check in Spanish."</div>
                  <div><strong>AI Barista:</strong> "¡Hola! ¿Qué te pongo hoy?"</div>
                  <div><strong>User Voice:</strong> "Quiero dos empanadas, por favor."</div>
                  <div className="text-emerald-700 font-semibold pt-1">💡 Low-Anxiety Tip: "Great job! Next time try: 'Me gustaría...'"</div>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 font-bold block text-sm">Feature 2: Co-Op Guild Streaks ("Rescue Sprints")</strong>
                <p className="text-xs text-slate-600">Users form 3-person Language Squads. If Teammate A forgets to practice by 9:00 PM, teammates receive an alert:</p>
                <div className="p-3 bg-slate-50 border-l-4 border-slate-900 italic text-slate-800 text-xs">
                  "Alex's 45-day streak is in danger! Complete a 60-second Rescue Quiz to shield the Squad Streak!"
                </div>
              </div>
            </section>

            {/* ⚖️ 9. Risk Matrix */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">⚖️ 9. Strategic Trade-offs & Risk Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <th className="p-3 border-r border-slate-200">Risk</th>
                      <th className="p-3 border-r border-slate-200">Impact</th>
                      <th className="p-3">PM Counter-Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">LLM Latency & API Cost</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-rose-600">High Cost / Latency</td>
                      <td className="p-3 font-medium text-slate-800">On-Device Small Spec Model for latency under 400ms; route complex feedback asynchronously.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Microphone Anxiety</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-600">Lower Engagement</td>
                      <td className="p-3 font-medium text-slate-800">Quiet Mode Toggle: Auto-detect background noise or allow 1-tap "Subway Mode" (Whisper / Silent Tap).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </article>
        )}

      </div>
    </div>
  );
};
''')

print('Wrote clean TSX for CaseStudyDetail.tsx!')
