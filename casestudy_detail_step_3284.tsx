import re

code = '''import React from 'react';
import { CaseStudy } from '../data/projects';
import { ArrowLeft, AlertTriangle, Layers, X, Target, Lightbulb, CheckCircle2, TrendingUp, ShieldAlert, Rocket, ArrowRight, DollarSign, Clock, Users, BarChart3, HelpCircle, PhoneCall, Compass, ShieldCheck, Sparkles, Cpu, Eye, Lock, FileCode, Workflow, Zap, MapPin, Radio, CreditCard, Star, Activity, Server, Smartphone, Shield, Terminal, GitBranch, RefreshCw, Layers as LayersIcon, Scale, PieChart, Eye as EyeIcon, LayoutGrid, ShoppingCart, ExternalLink, FileText, CheckSquare, Award } from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onBack }) => {
  return (
    <div className="min-h-screen bg-grid-pattern py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
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

        {/* SWIGGY CASE STUDY BODY */}
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
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">Swiggy Workplace Group Ordering</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager (Case Study)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Feature-Gap Product Case Study</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Focus Metric</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Delivery Cost Efficiency & Group AOV</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. The Problem */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                1. The Problem
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Walk into any mid-sized office building around 1 PM in any Indian city, and you'll likely see three or four Swiggy delivery riders arriving within twenty minutes of each other, each carrying a single order for a different employee on a different floor of the same building.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold">
                <div className="p-4 bg-amber-50 border-2 border-[#1a1a1a] space-y-2">
                  <span className="uppercase text-amber-900 block font-black">🛵 Platform Inefficiency</span>
                  <p className="text-slate-700 font-medium">Multiple riders making near-identical trips to the same address cluster causes logistics cost bloat — fuel, rider time, and delivery capacity are spent redundantly.</p>
                </div>
                <div className="p-4 bg-amber-50 border-2 border-[#1a1a1a] space-y-2">
                  <span className="uppercase text-amber-900 block font-black">👥 User Friction</span>
                  <p className="text-slate-700 font-medium">If a group of colleagues wants to order together, there's no built-in way to combine orders while paying individually. Someone places a big order and collects debt via UPI transfers.</p>
                </div>
                <div className="p-4 bg-amber-50 border-2 border-[#1a1a1a] space-y-2">
                  <span className="uppercase text-amber-900 block font-black">🍳 Restaurant Strain</span>
                  <p className="text-slate-700 font-medium">Restaurants receive scattered individual orders during peak lunch rushes instead of batched, predictable preparation queues.</p>
                </div>
              </div>
            </section>

            {/* 2. Why This Gap Exists */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                2. Why This Gap Exists and Why It Matters
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Consumer food delivery apps were designed around individual or single-household use cases. Group ordering features exist on some platforms, but they assume a single payer or a shared party setting. Workplace lunch ordering is a distinct behavioral pattern: high frequency, tight time windows, shared physical destination, but independent financial responsibility.
              </p>
            </section>

            {/* 3. Research Approach */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Target className="w-6 h-6 text-amber-500" />
                3. Hypothesis-Driven Research Framework
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <thead>
                    <tr>
                      <th>Hypothesis</th>
                      <th>Target Metric</th>
                      <th>Expected Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold">H1: Office workers prefer individual UPI billing</td>
                      <td>Payment Split Conversion Rate</td>
                      <td>Eliminates manual debt collection friction among colleagues</td>
                    </tr>
                    <tr>
                      <td className="font-bold">H2: Delivery drivers prefer consolidated lobby drops</td>
                      <td>Rider Wait Time & Fuel Overhead</td>
                      <td>Reduces drop-off time from 12 mins to &lt;3 mins at building lobby</td>
                    </tr>
                    <tr>
                      <td className="font-bold">H3: Restaurants benefit from batched lunch orders</td>
                      <td>Kitchen Order Prep Efficiency</td>
                      <td>Increases kitchen throughput during peak 1-2 PM lunch rush</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Proposed Solution */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Rocket className="w-6 h-6 text-amber-500" />
                4. Proposed Solution: "Workplace Group Order Lobby"
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">📍 Location-Triggered Group Cart</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Detects office building hubs and creates a shared group cart with a 6:30 PM cutoff for dinner or 1:00 PM for lunch.
                  </p>
                </div>
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">💳 Individual UPI Payment Links</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Every participant receives a personalized UPI payment request for their exact items, tax, and split fee.
                  </p>
                </div>
              </div>

              {/* UI Mockup Display */}
              <div className="bg-[#f7f7f3] border-3 border-[#1a1a1a] cartoon-shadow p-6 space-y-3">
                <h3 className="font-black text-sm uppercase flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-amber-500" /> 📱 Interactive UI Prototype: Shared Order Together Lobby
                </h3>
                <div className="border-2 border-[#1a1a1a] overflow-hidden bg-white">
                  <img src="/swiggy_screen2.png" alt="Swiggy Group Order Lobby UI Mockup" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs font-mono text-slate-600">
                  Figure 4.1: Live 6:30 countdown lobby featuring restaurant headers, participant avatars, itemized cart breakdowns, and individual UPI checkout locks.
                </p>
              </div>
            </section>

          </div>
        )}

        {/* DUOLINGO CASE STUDY BODY */}
        {study.id === 'duolingo' && (
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
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">Duolingo Mobile App</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager (Case Study)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Metric-First Product Case Study</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Focus Metric</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">New User 7-Day Retention (3-5% Lift)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Problem Statement */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                1. Problem Statement & Habit Crystallization Window
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Duolingo has one of the strongest onboarding funnels in consumer tech, but like most habit-based apps, it loses a large share of new users within the first week. Industry benchmarks show language apps lose 60-75% of new users before Day 7 — the critical window where habit formation either crystallizes or dies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold pt-2">
                <div className="p-4 bg-emerald-50 border-2 border-[#1a1a1a] space-y-1">
                  <span className="uppercase text-emerald-900 font-black block">Day 1 Retention</span>
                  <p className="text-slate-700 font-medium">Onboarding UX metric (streaks, mascot duo), already heavily optimized by Duolingo.</p>
                </div>
                <div className="p-4 bg-emerald-50 border-2 border-[#1a1a1a] space-y-1">
                  <span className="uppercase text-emerald-900 font-black block">Day 7 Inflection</span>
                  <p className="text-slate-700 font-black text-emerald-800">Habit crystallization window — optimal leverage to diagnose why users drop off.</p>
                </div>
                <div className="p-4 bg-emerald-50 border-2 border-[#1a1a1a] space-y-1">
                  <span className="uppercase text-emerald-900 font-black block">Day 30+ Retention</span>
                  <p className="text-slate-700 font-medium">Lagging indicator — by then, habit formation has already succeeded or failed.</p>
                </div>
              </div>
            </section>

            {/* 2. Context & Why This Matters */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                2. Business Context & Monetization Impact
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Duolingo's business model depends on daily active engagement — ad revenue, Super Duolingo subscriptions, and streak-based monetization all compound with retention. Streaks reward established habits, but they don't solve early drop-off for users who haven't built a routine yet.
              </p>
            </section>

            {/* 3. Proposed Solution & UI Assets */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Rocket className="w-6 h-6 text-emerald-600" />
                3. Proposed Solution: "Anchor Moments" & Micro-Lessons
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-4 cartoon-shadow space-y-3">
                  <h3 className="font-black text-xs uppercase text-emerald-700">Screen 1: Anchor Onboarding</h3>
                  <div className="border border-[#1a1a1a] overflow-hidden bg-white">
                    <img src="/duolingo_screen1.png" alt="Duolingo Anchor Onboarding Screen" className="w-full h-auto object-cover" />
                  </div>
                  <p className="text-xs text-slate-700 font-medium">Prompts user during onboarding: "When do you usually have 5 minutes free? (Coffee, Commute, Bedtime)"</p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-4 cartoon-shadow space-y-3">
                  <h3 className="font-black text-xs uppercase text-emerald-700">Screen 2: Micro-Lesson Selector</h3>
                  <div className="border border-[#1a1a1a] overflow-hidden bg-white">
                    <img src="/duolingo_screen2.png" alt="Duolingo Micro Lesson Selector" className="w-full h-auto object-cover" />
                  </div>
                  <p className="text-xs text-slate-700 font-medium">Offers flexible session durations: "Got 1 minute or 10 minutes?" to prevent session skip cognitive load.</p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-4 cartoon-shadow space-y-3">
                  <h3 className="font-black text-xs uppercase text-emerald-700">Screen 3: Contextual Cues</h3>
                  <div className="border border-[#1a1a1a] overflow-hidden bg-white">
                    <img src="/duolingo_screen3.png" alt="Duolingo Contextual Cues Notification" className="w-full h-auto object-cover" />
                  </div>
                  <p className="text-xs text-slate-700 font-medium">Replaces generic Duo nag notifications with contextual cued triggers timed to their chosen routine.</p>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* MAKEMYTRIP CASE STUDY BODY */}
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
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">MakeMyTrip Mobile Application</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager (Case Study)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>0-to-1 Product Case Study</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Target Segment</td>
                      <td>First-Time Domestic Flyers from Tier-2/3 India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. The Opportunity */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-cyan-600" />
                1. The Opportunity & Market Context
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                India's domestic aviation market has expanded rapidly beyond metro cities, driven by the UDAN regional connectivity scheme and rising middle-class incomes in Tier-2/3 cities (e.g., Bareilly, Darbhanga, Jharsuguda). A large share of new flyers are booking their first flight. MakeMyTrip is built for experienced flyers who know PNRs, layovers, and airport security — creating high anxiety for first-time domestic flyers.
              </p>
            </section>

            {/* 2. Proposed Solution: First Flight Mode */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Rocket className="w-6 h-6 text-cyan-600" />
                2. Proposed Solution: "First Flight Mode"
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">💡 Plain-Language Fare Rules</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Translates cryptic fare rules and baggage policies into plain-language summaries (e.g., "7 kg handbag included, ₹500 for extra 5 kg").
                  </p>
                </div>
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">🛫 Step-by-Step Airport Guidance</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Visual airport walkthrough timeline guiding first-timers from Check-in counter ➔ Security gate ➔ Boarding lounge.
                  </p>
                </div>
              </div>

              {/* MMT UI Screen Mockup */}
              <div className="bg-[#f7f7f3] border-3 border-[#1a1a1a] cartoon-shadow p-6 space-y-3">
                <h3 className="font-black text-sm uppercase flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-cyan-600" /> 📱 Interactive UI Prototype: Plain-Language Fare Rules & "Simple View"
                </h3>
                <div className="border-2 border-[#1a1a1a] overflow-hidden bg-white">
                  <img src="/mmt_screen1.png" alt="MakeMyTrip Simple View UI Mockup" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs font-mono text-slate-600">
                  Figure 2.1: Flight details view featuring flight header (IndiGo DEL to BLR ₹5,432), active "Simple View" toggle, plain-language baggage allowance breakdown, and refund rules.
                </p>
              </div>
            </section>

          </div>
        )}

        {/* DERMALINK CASE STUDY BODY */}
        {study.id === 'dermalink' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">Dermalink — AI Facial Skincare Auditor</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Analyst (Retrospective Case Study)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Core Tech</td>
                      <td>React 19, TypeScript, Vite, Gemini 2.5 Flash (Vision)</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Data Used</td>
                      <td>Synthetic dataset (simulated user outcomes)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Executive Summary */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
                1. Executive Summary & Diagnostic Vision
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Dermalink turns a selfie into a structured skincare diagnosis: it maps the face into three zones, identifies concerns per zone, and generates a morning/night routine priced across three budget tiers — all without a dermatologist visit or a store aisle of guesswork.
              </p>
            </section>

            {/* 2. Tri-Zone Facial Mapping & Privacy Masking */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Eye className="w-6 h-6 text-purple-600" />
                2. Tri-Zone Facial Mapping & Biometric Privacy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-purple-600">🛡️ Client-Side Eye Redaction</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Client-side canvas masking blacks out eyes before image payload transmission, converting privacy liability into a trust feature.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-purple-600">📐 Tri-Zone Moisture & Redness Mapping</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Evaluates T-Zone, Cheeks, and Chin independently for tailored moisture and barrier restoration recommendations.
                  </p>
                </div>
              </div>

              {/* Dermalink Diagram Display */}
              <div className="bg-[#f7f7f3] border-3 border-[#1a1a1a] cartoon-shadow p-6 space-y-3">
                <h3 className="font-black text-sm uppercase flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-600" /> 📊 Tri-Zone Diagnostic Map & Metrics Dashboard
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="border-2 border-[#1a1a1a] overflow-hidden bg-white">
                    <img src="/dermalink_zone_map.png" alt="Dermalink Tri-Zone Facial Map" className="w-full h-auto object-cover" />
                  </div>
                  <div className="border-2 border-[#1a1a1a] overflow-hidden bg-white">
                    <img src="/dermalink_metrics.png" alt="Dermalink Simulated Metrics Dashboard" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* BETACARE CASE STUDY BODY */}
        {study.id === 'betacare' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-rose-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">BetaCare — Life Insurance Agent Command Center</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Lead Systems Architect & Business Analyst</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Enterprise Agentic Workspace & BA Case Study</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Notion Case Study</td>
                      <td>
                        <a href="https://app.notion.com/p/Case-Study-Betacare-Life-Insurance-Agent-Portal-390be7f0e9f3805ca6c8db8d2335204b?source=copy_link" target="_blank" rel="noreferrer" className="text-rose-600 font-black underline flex items-center gap-1">
                          Open Betacare BA Case Study on Notion 📖
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Tech Stack</td>
                      <td>React 18 (Vite), Node.js, Express, MongoDB (Mongoose), Framer Motion, Tailwind CSS</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Status</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Functional MVP & Operational Case Study</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Background & Context */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-rose-600" />
                1. Background & Operational Context
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Betacare Life Insurance, a premium provider of Term, Whole Life, and ULIP (Unit Linked Insurance Plan) policies, faced severe operational bottlenecks in their agent sales channels. Agents relied on disconnected systems, manual spreadsheets, and physical paperwork to move prospects through the conversion funnel: Prospect Lead Intake ➡️ Manual Quote Calculation ➡️ Underwriting Risk Evaluation ➡️ Manual Policy Generation.
              </p>
            </section>

            {/* 2. The Problem Statement */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
                2. Operational Bottlenecks & Pain Points
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-rose-600">⏳ Long Turnaround Times (14 Days)</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Average cycle time from initial prospect contact to policy activation exceeded 14 business days due to manual handoffs between sales and underwriting divisions.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-rose-600">📉 High Lead Drop-off Rates</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Disjointed quotation sharing tools allowed prospects to seek competitor options before a final quote proposal was delivered.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-rose-600">🚦 Underwriting Bottlenecks</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    70% of low-risk applications (e.g., term policies for young applicants with no medical complications) were queued for manual assessment, causing backlogs.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase text-rose-600">📊 Zero Real-Time Visibility</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Agents had no visual metrics tracking their performance, pipeline values, or active collections.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Business Process Flow */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Workflow className="w-6 h-6 text-rose-600" />
                3. Business Process Flow (As-Is vs. To-Be)
              </h2>
              
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 bg-rose-50 border-2 border-[#1a1a1a] space-y-2">
                  <span className="font-black text-rose-900 uppercase block">[AS-IS MANUAL FLOW — 14 DAYS]</span>
                  <p className="text-slate-800 font-bold">
                    Prospect Contact ➔ Paper Form ➔ Data Entry ➔ Underwriting Queue (7 Days) ➔ Review ➔ Approved ➔ Manual Payment ➔ Policy Active (14 Days)
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 border-2 border-[#1a1a1a] space-y-2">
                  <span className="font-black text-emerald-900 uppercase block">[TO-BE AUTOMATED PORTAL FLOW — &lt;15 MINS]</span>
                  <p className="text-slate-800 font-bold">
                    Portal Lead Intake ➔ Instant Validation ➔ Auto-Quote Gen ➔ Instant Underwriting (Auto-Approved) ➔ Digital Payment ➔ Instant Active Policy (&lt;15 Mins)
                  </p>
                </div>
              </div>
            </section>

            {/* 4. BRD Highlights */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <FileText className="w-6 h-6 text-rose-600" />
                4. Business Requirements Document (BRD) Highlights
              </h2>

              <div className="space-y-4 text-xs font-bold">
                <div className="p-4 bg-[#f7f7f3] border-2 border-[#1a1a1a] space-y-1">
                  <span className="font-black uppercase text-rose-600">FR-1: Standardized Lead Acquisition Wizard</span>
                  <p className="text-slate-700 font-medium">6-stage validation funnel mapping customer profiles, contact credentials, financial parameters, and uploaded identity proofs (Aadhaar/PAN) to ensure 100% data integrity before database insertion.</p>
                </div>

                <div className="p-4 bg-[#f7f7f3] border-2 border-[#1a1a1a] space-y-1">
                  <span className="font-black uppercase text-rose-600">FR-2: Automated Rules-Engine Underwriting</span>
                  <p className="text-slate-700 font-medium">Automatically evaluates risk factors (Age, Income-to-Sum-Assured ratio) to route cases to "Auto-Approved", "Pending KYC Verification", or "Underwriter Manual Review" within milliseconds.</p>
                </div>

                <div className="p-4 bg-[#f7f7f3] border-2 border-[#1a1a1a] space-y-1">
                  <span className="font-black uppercase text-rose-600">FR-3: Fast Quote Engine</span>
                  <p className="text-slate-700 font-medium">Generate and compare Term, Whole Life, and ULIP options instantly from a prospect's dashboard, outputting premium calculations on-screen.</p>
                </div>

                <div className="p-4 bg-[#f7f7f3] border-2 border-[#1a1a1a] space-y-1">
                  <span className="font-black uppercase text-rose-600">FR-4: Live Pipeline Analytics</span>
                  <p className="text-slate-700 font-medium">Interactive KPI modules (active leads, pending cases, active policies) and aggregate premium collections trend analytics directly from the MongoDB registry.</p>
                </div>
              </div>
            </section>

            {/* 5. Business Value Delivered */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <TrendingUp className="w-6 h-6 text-rose-600" />
                5. Business Value Delivered & Impact Metrics
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Pre-Implementation (As-Is)</th>
                      <th>Post-Implementation (To-Be)</th>
                      <th>Target Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold bg-[#f7f7f3]">Turnaround Time (TAT)</td>
                      <td>14 Days</td>
                      <td className="font-bold text-emerald-600">&lt; 15 Minutes</td>
                      <td className="font-black bg-[#00DF89] text-[#1a1a1a]">98.9% Reduction</td>
                    </tr>
                    <tr>
                      <td className="font-bold bg-[#f7f7f3]">Manual Underwriting Overhead</td>
                      <td>100% of cases</td>
                      <td>30% of cases (Manual Review)</td>
                      <td className="font-bold">70% Automation</td>
                    </tr>
                    <tr>
                      <td className="font-bold bg-[#f7f7f3]">Form Error Rate</td>
                      <td>24% (Missing data/invalid attachments)</td>
                      <td className="font-bold text-emerald-600">0% (Enforced validation)</td>
                      <td className="font-bold">100% Quality Improvement</td>
                    </tr>
                    <tr>
                      <td className="font-bold bg-[#f7f7f3]">Sales Conversion Rate</td>
                      <td>12.4%</td>
                      <td>18.6% (Projected)</td>
                      <td className="font-bold text-rose-600">50% Higher Conversion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Key Functional Features Built */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Layers className="w-6 h-6 text-rose-600" />
                6. Core Features & System Architecture
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">1. 6-Step Client Profiling Wizard</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Personal Details, Contact Info, Financial Parameters, Insurance Parameters, Document Uploads (PAN/Aadhaar), and Compliance Review.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">2. Interactive Agent Hub</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    KPI Counters, SVG Premium Collections Trend Chart, and Real-time Live Activity Feed powered by MongoDB streams.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">3. Underwriting Center</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Auto-generates underwriting cases upon lead submission with one-click policy issuance and digital customer dashboards.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase">4. Modern UI Design System</h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Spring-animated splash loader (Framer Motion), native dark mode, and responsive sidebar navigation.
                  </p>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* GRID-LOCK CASE STUDY BODY */}
        {study.id === 'gridlock' && (
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
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">Grid-Lock — EV Charging Platform</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Full-Stack Developer & Product Owner</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Full-Stack MERN Peer-to-Peer Marketplace</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Live Vercel Application</td>
                      <td>
                        <a href="https://grid-lock-vert.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-600 font-black underline flex items-center gap-1">
                          https://grid-lock-vert.vercel.app/ 🚀
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Tech Stack</td>
                      <td>React.js, Leaflet Maps, Tailwind CSS, Node.js, Express, MongoDB, Socket.io</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Status</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Functional MVP & Live Deployment</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-cyan-600" />
                1. Overview & Product Vision
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                Grid-Lock is a full-stack MERN marketplace connecting EV drivers with everyday people who host home charging stations. Drivers can locate nearby chargers on a live map, reserve time slots for cars or bikes, pay through an integrated wallet, and leave reviews — while hosts get a dedicated dashboard to list and manage their own stations. A Socket.io real-time layer powers live price bidding, so charging costs can flex dynamically instead of being fixed.
              </p>
              <div className="p-4 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow font-bold text-xs text-[#1a1a1a] flex items-center justify-between">
                <span>Try the Live Vercel Application:</span>
                <a href="https://grid-lock-vert.vercel.app/" target="_blank" rel="noreferrer" className="px-3 py-1 bg-black text-[#00DF89] font-mono font-black text-xs uppercase border border-[#1a1a1a]">
                  Open Grid-Lock App →
                </a>
              </div>
            </section>

            {/* 2. Key Features */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Layers className="w-6 h-6 text-cyan-600" />
                2. Key Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-600" />
                    <h3 className="font-black text-sm uppercase">📍 Live GPS Tracking</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Interactive Leaflet map displaying nearby home chargers in real-time based on driver GPS coordinates.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-600" />
                    <h3 className="font-black text-sm uppercase">🗓️ Booking System</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Seamless time slot reservation tailored specifically for vehicle types (Cars vs. Bikes).
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-cyan-600" />
                    <h3 className="font-black text-sm uppercase">💳 Wallet & Payments</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Integrated dummy payment gateway with an in-app wallet system for instant slot settlement.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-cyan-600" />
                    <h3 className="font-black text-sm uppercase">🔄 Real-Time Price Bidding</h3>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Socket.io real-time layer streaming live price bidding on high-demand charging slots.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. System Architecture */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Cpu className="w-6 h-6 text-cyan-600" />
                3. System Architecture
              </h2>
              <div className="p-4 bg-black text-[#00DF89] font-mono text-xs overflow-x-auto leading-relaxed border-2 border-[#1a1a1a]">
                [React Client (Vite/Leaflet/Tailwind)]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;│ REST API + WebSocket (Socket.io)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;▼<br />
                [Express.js Server (Node.js runtime)]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;├──► [MongoDB (Users, Stations, Bookings, Wallet)]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;└──► [Socket.io (Live Price Bidding, Real-Time Updates)]
              </div>
            </section>

          </div>
        )}

        {/* SENTINELSCALE CASE STUDY BODY */}
        {study.id === 'sentinelscale' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">SentinelScale — API Observability & AI Gateway</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Lead Systems Architect & Core Developer</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Distributed Systems & AI Security Engine</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">GitHub Repository</td>
                      <td>
                        <a href="https://github.com/adjienjeknwc/sentinel-scale.git" target="_blank" rel="noreferrer" className="text-purple-600 font-black underline flex items-center gap-1">
                          https://github.com/adjienjeknwc/sentinel-scale.git 🚀
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Tech Stack</td>
                      <td>Go, Python, Next.js, Apache Kafka, PostgreSQL 16 + pgvector, ONNX Runtime, Gemini 2.5, D3.js, Docker</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Status</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Functional MVP & One-Click Codespaces Sandbox</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Shield className="w-6 h-6 text-purple-600" />
                1. Overview & System Vision
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                SentinelScale is a distributed API gatekeeper and telemetry observability engine built to protect and monitor API traffic in real time. It pairs a sub-5ms Go reverse-proxy edge layer with an adaptive, three-tier AI threat classification pipeline — from lightweight regex checks at the edge, to local ONNX transformer inference, up to a Gemini-powered deep semantic scan for high-risk payloads. Visualized live through a Next.js console with real-time stats and a D3-powered anomaly scatterplot.
              </p>
              <div className="p-4 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow font-bold text-xs text-[#1a1a1a] flex items-center justify-between">
                <span>Explore the GitHub Repository & Devcontainer Sandbox:</span>
                <a href="https://github.com/adjienjeknwc/sentinel-scale.git" target="_blank" rel="noreferrer" className="px-3 py-1 bg-black text-[#00DF89] font-mono font-black text-xs uppercase border border-[#1a1a1a]">
                  Open Repository →
                </a>
              </div>
            </section>

            {/* 2. Core Engineering Highlights */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Cpu className="w-6 h-6 text-purple-600" />
                2. Core Engineering Highlights
              </h2>

              <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                <h3 className="font-black text-sm uppercase text-[#1a1a1a]">⚡ Sub-5ms Ingress Edge (Go)</h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Built in Go using <code className="bg-purple-100 px-1">net/http/httputil</code> reverse-proxy buffers. Telemetry extraction is offloaded to detached execution routines, while verified clean payloads are cached in a <code className="bg-purple-100 px-1">sync.Map</code> SHA-256 store to bypass deeper evaluation entirely — keeping edge processing overhead below 1ms.
                </p>
              </div>

              <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-3">
                <h3 className="font-black text-sm uppercase text-[#1a1a1a]">🧠 Adaptive Multi-Tier Threat Classification</h3>
                <div className="overflow-x-auto">
                  <table className="neobrutalist-table text-xs">
                    <thead>
                      <tr>
                        <th>Tier</th>
                        <th>Location</th>
                        <th>Method & Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold text-[#00DF89] bg-black px-2">Tier 1 — Ingress</td>
                        <td>Go Gateway</td>
                        <td>Lightweight local regex + SHA-256 cache validation; clean hits pass immediately.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-purple-600 bg-black px-2">Tier 2 — Local ONNX</td>
                        <td>Python Audit Engine</td>
                        <td>Transformer models via onnxruntime detect SQL injection & Unicode obfuscation.</td>
                      </tr>
                      <tr>
                        <td className="font-bold text-rose-500 bg-black px-2">Tier 3 — Gemini Deep Scan</td>
                        <td>Python Audit Engine</td>
                        <td>Semantic evaluation via google-genai SDK returning structured JSON threat assessments.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                <h3 className="font-black text-sm uppercase text-[#1a1a1a]">📊 Database Consolidation via pgvector</h3>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  A single PostgreSQL 16 instance handles operational and vector workloads: time-indexed operational logs (<code className="bg-purple-100 px-1">api_telemetry_logs</code>) and high-dimensional vector threat signatures (<code className="bg-purple-100 px-1">adversarial_signatures</code>) indexed with HNSW cosine similarity.
                </p>
              </div>
            </section>

            {/* 3. System Architecture Diagram */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Workflow className="w-6 h-6 text-purple-600" />
                3. System Architecture & Telemetry Pipeline
              </h2>
              <div className="p-4 bg-black text-[#00DF89] font-mono text-xs overflow-x-auto leading-relaxed border-2 border-[#1a1a1a]">
                Incoming API Request → [Go Ingress Gateway (Port 8080)]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;├──► Async Telemetry Event → [Apache Kafka Broker]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br />
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Python AI Audit Engine (ONNX + Gemini 2.5)]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──► [PostgreSQL 16 + pgvector HNSW Store]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──► Real-Time Stream → [Next.js D3 Console]<br />
                &nbsp;&nbsp;&nbsp;&nbsp;└──► Pass clean request downstream (&lt;5ms overhead)
              </div>
            </section>

          </div>
        )}

        {/* SMARTSPEND INDIA CASE STUDY BODY */}
        {study.id === 'smartspend' && (
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
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">SmartSpend India — AI-Driven Grocery Inflation Radar</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Product Manager & Data Architect</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Data Product & Consumer Analytics Engine</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Live Streamlit App</td>
                      <td>
                        <a href="https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app/" target="_blank" rel="noreferrer" className="text-emerald-600 font-black underline flex items-center gap-1">
                          https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app/ 🚀
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Tech Stack</td>
                      <td>Python 3.9, Pandas, NumPy, Streamlit, Plotly Express, SQLite3</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Coverage</td>
                      <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">10 Major Indian Metropolitan Areas</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-emerald-600" />
                1. Overview & Product Vision
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                SmartSpend India is an interactive, consumer-focused data product that tracks grocery retail inflation and optimizes grocery lists across 10 major Indian metropolitan areas. It translates raw historical pricing data into a localized cost index (₹), exposes hidden "shrinkflation" through standardized unit pricing (₹/KG), and generates automated, rule-based AI savings tips — all inside a clean, 3-step interface with zero configuration overhead.
              </p>
              <div className="p-4 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow font-bold text-xs text-[#1a1a1a] flex items-center justify-between">
                <span>Try the Live Interactive Streamlit Application:</span>
                <a href="https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app/" target="_blank" rel="noreferrer" className="px-3 py-1 bg-black text-[#00DF89] font-mono font-black text-xs uppercase border border-[#1a1a1a]">
                  Open Streamlit App →
                </a>
              </div>
            </section>

            {/* 2. Core Features */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <PieChart className="w-6 h-6 text-emerald-600" />
                2. Core Analytical Capabilities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-600" /> 🪜 3-Step UI Architecture
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Streamlined action layout living directly on the main viewport — no sidebar, zero configuration overhead. Users reach insights in seconds.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" /> 🤖 AI Copilot Insight Engine
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Rule-based matrix checks evaluating item trends and regional store variance into plain-language, actionable money-saving tips.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-600" /> ⚖️ Fuzzy Price-Per-Gram Tracker
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Computes standardized unit pricing (₹/KG) to visually flag shrinkflation — where package sizes drop while sticker prices hold steady.
                  </p>
                </div>

                <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-2">
                  <h3 className="font-black text-sm uppercase flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600" /> 🗺️ Multi-City Scaling Matrix
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Vectorized NumPy multipliers scaling historical price curves dynamically across 10 Indian metros even with sparse per-city records.
                  </p>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* FINSTREAM CASE STUDY BODY */}
        {study.id === 'finstream' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">FinStream — Enterprise Banking & Loan Platform</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Lead Systems Architect & Core Developer</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Enterprise Banking Microservices Backend & Control Tower</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Live Demo Site</td>
                      <td>
                        <a href="https://adjienjeknwc.github.io/FinStream-/" target="_blank" rel="noreferrer" className="text-amber-600 font-black underline flex items-center gap-1">
                          https://adjienjeknwc.github.io/FinStream-/ 🚀
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Tech Stack</td>
                      <td>Java 21, Spring Boot 3.3, Camunda 8 (Zeebe), Apache Kafka, Resilience4j, PostgreSQL 16, Elasticsearch, React, TypeScript</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-amber-600" />
                1. Overview & System Vision
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                FinStream is a reference implementation of a resilient, event-driven core banking microservices backend paired with an administrative compliance control tower. Built to demonstrate production-ready patterns for enterprise financial systems: Enterprise Integration Patterns (EIP), workflow orchestration via Camunda 8, circuit-breaker fault tolerance (Resilience4j), and Kafka-based dead-letter recovery — all observable in real time through an interactive control tower.
              </p>
              <div className="p-4 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow font-bold text-xs text-[#1a1a1a] flex items-center justify-between">
                <span>View Live Deployment & Interactive Resiliency Simulations:</span>
                <a href="https://adjienjeknwc.github.io/FinStream-/" target="_blank" rel="noreferrer" className="px-3 py-1 bg-black text-[#00DF89] font-mono font-black text-xs uppercase border border-[#1a1a1a]">
                  Launch FinStream Demo →
                </a>
              </div>
            </section>

            {/* 2. Interactive Resiliency Scenarios */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <ShieldAlert className="w-6 h-6 text-amber-600" />
                2. Live Resiliency & Fault Isolation Scenarios
              </h2>

              <div className="bg-rose-50 border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <h3 className="font-black text-sm uppercase text-rose-900">🔴 Scenario A — Resilience4j Circuit Breaker Trip</h3>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  Toggling "Simulate Circuit Failover" degrades Credit Bureau API downstream health. The Circuit Breaker badge trips from <strong>CLOSED</strong> to <strong>OPEN — FAILOVER ACTIVE</strong>. New loan applications execute a fallback scorer defaulting applicant credit rating to 600 safely to prevent risk leakage.
                </p>
              </div>

              <div className="bg-amber-50 border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <h3 className="font-black text-sm uppercase text-amber-900">🟡 Scenario B — Kafka Dead Letter Queue (DLQ) Recovery</h3>
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  Submitting a transaction with customer Account ID <code className="bg-amber-200 px-1">poison-pill</code> triggers a serialization exception. The serializer aspect intercepts the payload and routes it to <code className="bg-amber-200 px-1">loan-audit-stream.DLT</code> topic, safely committing Kafka offset without halting consumer processing threads.
                </p>
              </div>
            </section>

          </div>
        )}

        {/* RETAILPULSE CASE STUDY BODY */}
        {study.id === 'retailpulse' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">RetailPulse — Pantry & Revenue Acceleration Platform</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Full-Stack Developer & Business Analyst</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>Full-Stack MERN Enterprise Retail Engine</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Live Application</td>
                      <td>
                        <a href="https://retail-pulse-eta.vercel.app" target="_blank" rel="noreferrer" className="text-amber-600 font-black underline">
                          https://retail-pulse-eta.vercel.app 🚀
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-amber-600" />
                1. Overview & Business Impact
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                RetailPulse is a robust full-stack web application designed to optimize pantry management and drive revenue acceleration for small-to-medium retail businesses. By leveraging the MERN stack, the platform bridges the gap between real-time inventory tracking and actionable financial analytics, minimizing waste while maximizing profitability.
              </p>
              <div className="p-4 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow font-bold text-xs text-[#1a1a1a] flex items-center justify-between">
                <span>Try the Live Vercel Application:</span>
                <a href="https://retail-pulse-eta.vercel.app" target="_blank" rel="noreferrer" className="px-3 py-1 bg-black text-[#00DF89] font-mono font-black text-xs uppercase border border-[#1a1a1a]">
                  Open RetailPulse →
                </a>
              </div>
            </section>

          </div>
        )}

        {/* COGNIFLOW CASE STUDY BODY */}
        {study.id === 'cogniflow' && (
          <div className="space-y-10 text-[#1a1a1a]">
            
            {/* Quick Facts Table */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
              <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600" /> 📌 QUICK FACTS
              </h2>
              <div className="overflow-x-auto">
                <table className="neobrutalist-table text-xs">
                  <tbody>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Product</td>
                      <td className="font-bold">CogniFlow — AI User Journey & Conversion Predictor</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">My Role</td>
                      <td>Lead Product Architect & Developer</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Type</td>
                      <td>AI Vision & Predictive UX Analytics Engine</td>
                    </tr>
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Core Tech</td>
                      <td>React, Gemini 2.5 Flash (Vision), Express.js, Node.js, Canvas API</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 1. Overview */}
            <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
              <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
                <Compass className="w-6 h-6 text-indigo-600" />
                1. Executive Summary & Gaze Tracking
              </h2>
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                CogniFlow is a full-stack predictive layout optimization tool designed to evaluate screen real estate and conversion potential before writing code. Powered by the Google Gemini computer vision model, CogniFlow maps visual priority, scores visual hierarchy, and introduces an interactive blueprint simulation engine.
              </p>
            </section>

          </div>
        )}

        {/* Fallback for other case studies */}
        {study.id !== 'swiggy' && study.id !== 'duolingo' && study.id !== 'makemytrip' && study.id !== 'dermalink' && study.id !== 'gridlock' && study.id !== 'sentinelscale' && study.id !== 'finstream' && study.id !== 'smartspend' && study.id !== 'cogniflow' && study.id !== 'retailpulse' && study.id !== 'betacare' && (
          <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 text-[#1a1a1a]">
            <h2 className="text-2xl font-black uppercase mb-4 border-b-3 border-[#1a1a1a] pb-3">Executive Summary</h2>
            <p className="text-base font-medium leading-relaxed">{study.summary}</p>
          </div>
        )}

      </div>
    </div>
  );
};
