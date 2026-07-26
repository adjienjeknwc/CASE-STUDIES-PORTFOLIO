import React from 'react';
import { CaseStudy } from '../data/projects';
import { ArrowLeft, AlertTriangle, Layers, X, Target, Lightbulb, CheckCircle2, TrendingUp, ShieldAlert, Rocket, ArrowRight, DollarSign, Clock, Users, BarChart3, HelpCircle, PhoneCall, Compass, ShieldCheck, Sparkles, Cpu, Eye, Lock, FileCode, Workflow, Zap, MapPin, Radio, CreditCard, Star, Activity, Server, Smartphone, Shield, Terminal, GitBranch, RefreshCw, Layers as LayersIcon, Scale, PieChart, Eye as EyeIcon, LayoutGrid, ShoppingCart, ExternalLink } from 'lucide-react';

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
                <span>🚀 Launch Live App / Repository</span>
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
                      <td className="font-black bg-[#f7f7f3]">GitHub Repository</td>
                      <td>
                        <a href="https://github.com/adjienjeknwc/sentinel-scale.git" target="_blank" rel="noreferrer" className="text-purple-600 font-black underline flex items-center gap-1">
                          https://github.com/adjienjeknwc/sentinel-scale.git 🚀
                        </a>
                      </td>
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
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Live Streamlit App</td>
                      <td>
                        <a href="https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app/" target="_blank" rel="noreferrer" className="text-emerald-600 font-black underline flex items-center gap-1">
                          https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app/ 🚀
                        </a>
                      </td>
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
                    <tr>
                      <td className="font-black bg-[#f7f7f3]">Live Demo Site</td>
                      <td>
                        <a href="https://adjienjeknwc.github.io/FinStream-/" target="_blank" rel="noreferrer" className="text-amber-600 font-black underline flex items-center gap-1">
                          https://adjienjeknwc.github.io/FinStream-/ 🚀
                        </a>
                      </td>
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
          </div>
        )}

        {/* Fallback for other case studies */}
        {study.id !== 'swiggy' && study.id !== 'duolingo' && study.id !== 'makemytrip' && study.id !== 'dermalink' && study.id !== 'gridlock' && study.id !== 'sentinelscale' && study.id !== 'finstream' && study.id !== 'smartspend' && study.id !== 'cogniflow' && study.id !== 'retailpulse' && (
          <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 text-[#1a1a1a]">
            <h2 className="text-2xl font-black uppercase mb-4 border-b-3 border-[#1a1a1a] pb-3">Executive Summary</h2>
            <p className="text-base font-medium leading-relaxed">{study.summary}</p>
          </div>
        )}

      </div>
    </div>
  );
};
