import React from 'react';
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
                <span>📖 Open Notion Case Study</span>
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
                      <td className="font-black bg-[#f7f7f3]">Live Vercel Application</td>
                      <td>
                        <a href="https://grid-lock-vert.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-600 font-black underline flex items-center gap-1">
                          https://grid-lock-vert.vercel.app/ 🚀
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* SENTINELSCALE CASE STUDY BODY */}
        {study.id === 'sentinelscale' && (
          <div className="space-y-10 text-[#1a1a1a]">
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
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* SMARTSPEND INDIA CASE STUDY BODY */}
        {study.id === 'smartspend' && (
          <div className="space-y-10 text-[#1a1a1a]">
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
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* FINSTREAM CASE STUDY BODY */}
        {study.id === 'finstream' && (
          <div className="space-y-10 text-[#1a1a1a]">
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
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* RETAILPULSE CASE STUDY BODY */}
        {study.id === 'retailpulse' && (
          <div className="space-y-10 text-[#1a1a1a]">
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
                  </tbody>
                </table>
              </div>
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
