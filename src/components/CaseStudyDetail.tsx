import React, { useState } from 'react';
import { CaseStudy } from '../data/projects';
import { 
  ArrowLeft, X, ExternalLink, Share2, Clock, CheckCircle2, ShieldCheck, Zap, 
  Users, ChevronDown, ChevronUp, Copy, Check, MessageSquare, Lock, CreditCard,
  Sparkles, AlertCircle, ArrowRight
} from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onBack }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [showFullDocumentation, setShowFullDocumentation] = useState(true);

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-[#fc8019] selection:text-white">
      
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#fc8019] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 bg-amber-100 text-[#fc8019] rounded-full">
              {study.type}
            </span>
            <button
              onClick={onBack}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. SWIGGY SQUAD PAY VISUAL CASE STUDY */}
      {/* ========================================================================= */}
      {study.id === 'swiggy' ? (
        <div>
          
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-white pt-12 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* Pill Badge */}
              <div className="inline-block px-3.5 py-1.5 bg-amber-100/80 border border-orange-200 text-[#fc8019] font-extrabold text-[11px] uppercase tracking-widest rounded-full shadow-sm">
                UX & Product Strategy Case Study 2024
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Swiggy <span className="text-[#fc8019]">Squad Pay</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Revolutionizing group dining with real-time synchronized carts and intelligent auto-split payments for offices and campuses.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#overview"
                  className="px-6 py-3.5 bg-[#fc8019] hover:bg-[#e06d0e] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Launch Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setShowFullDocumentation(!showFullDocumentation)}
                  className="px-6 py-3.5 bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  {showFullDocumentation ? 'Hide PM Specs' : 'Read 20-Step PM Specs'}
                </button>
              </div>

              {/* 3D Realistic Smartphone Mockups Trio */}
              <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                
                {/* PHONE 1: Start Group Order (Left) */}
                <div className="bg-slate-900 p-3 rounded-[36px] shadow-2xl border-4 border-slate-800 transform md:-rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-[28px] overflow-hidden text-left p-4 space-y-3 min-h-[460px] flex flex-col justify-between border border-slate-100">
                    
                    <div className="space-y-3">
                      {/* Notch / Header */}
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono border-b pb-2">
                        <span>9:41 AM</span>
                        <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto"></div>
                        <span>100%</span>
                      </div>

                      {/* App Header */}
                      <div className="flex items-center gap-2 text-[#fc8019]">
                        <div className="w-6 h-6 bg-[#fc8019] text-white rounded-full font-black text-xs flex items-center justify-center">S</div>
                        <span className="font-extrabold text-xs tracking-tight text-slate-900">Swiggy Squad Pay</span>
                      </div>

                      {/* Card Content */}
                      <div className="bg-orange-50/70 border border-orange-200/80 rounded-xl p-3 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#fc8019]">Start Group Order</span>
                        <h4 className="font-extrabold text-xs text-slate-900">Office & Campus Lunch</h4>
                        
                        <div className="bg-white p-2 rounded-lg border border-orange-200 flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500 text-[10px]">Squad PIN:</span>
                          <span className="font-black text-slate-900">482-910</span>
                        </div>
                      </div>

                      {/* WhatsApp Share Button */}
                      <button 
                        onClick={handleCopyLink}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{copiedLink ? 'Link Copied!' : 'Share Order Link via WhatsApp'}</span>
                      </button>

                      {/* Participant Avatars */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Joined Participants (3)</span>
                        <div className="space-y-1 text-[11px]">
                          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                            <span className="font-semibold text-slate-800">Rohan Sharma (Host)</span>
                            <span className="text-[9px] bg-amber-100 text-[#fc8019] px-1.5 py-0.5 rounded font-bold">READY</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                            <span className="font-semibold text-slate-800">Priya Verma</span>
                            <span className="text-[9px] bg-amber-100 text-[#fc8019] px-1.5 py-0.5 rounded font-bold">READY</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded">
                            <span className="font-semibold text-slate-800">Ankit Mehta</span>
                            <span className="text-[9px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold">ADDING...</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 bg-[#fc8019] text-white font-extrabold text-xs rounded-xl shadow-md">
                      Create Squad Cart ➔
                    </button>
                  </div>
                </div>

                {/* PHONE 2: Live Cart & Auto-Lock Timer (Center Elevated) */}
                <div className="bg-slate-900 p-3 rounded-[36px] shadow-2xl border-4 border-[#fc8019] transform md:-translate-y-4 hover:translate-y-0 transition-transform duration-300 z-10">
                  <div className="bg-white rounded-[28px] overflow-hidden text-left p-4 space-y-3 min-h-[490px] flex flex-col justify-between border border-slate-100">
                    
                    <div className="space-y-2.5">
                      {/* Notch / Header */}
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono border-b pb-2">
                        <span>9:42 AM</span>
                        <div className="w-12 h-2.5 bg-[#fc8019] rounded-full mx-auto"></div>
                        <span>100%</span>
                      </div>

                      {/* Timer Banner */}
                      <div className="bg-[#fc8019] text-white p-2 rounded-xl text-center space-y-0.5 shadow">
                        <div className="flex items-center justify-center gap-1 text-[11px] font-black tracking-wider uppercase">
                          <Clock className="w-3.5 h-3.5 animate-pulse" />
                          <span>Cart Auto-Lock in 04:12 min</span>
                        </div>
                        <p className="text-[9px] opacity-90">Auto-sends to kitchen once timer expires</p>
                      </div>

                      {/* Live Items */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                          <span>Live Cart Items</span>
                          <span>Qty</span>
                        </div>

                        <div className="space-y-1 text-[11px]">
                          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-900 block">Paneer Butter Masala</span>
                              <span className="text-[9px] text-emerald-600 font-semibold">Rohan • Paid ₹240</span>
                            </div>
                            <span className="font-extrabold text-slate-900">₹240</span>
                          </div>

                          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-900 block">Butter Chicken</span>
                              <span className="text-[9px] text-emerald-600 font-semibold">Vikram • Paid ₹320</span>
                            </div>
                            <span className="font-extrabold text-slate-900">₹320</span>
                          </div>

                          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-900 block">Garlic Naan x4</span>
                              <span className="text-[9px] text-emerald-600 font-semibold">Pooja • Paid ₹160</span>
                            </div>
                            <span className="font-extrabold text-slate-900">₹160</span>
                          </div>

                          <div className="p-2 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-900 block">Jeera Rice</span>
                              <span className="text-[9px] text-[#fc8019] font-bold">Megha • Unpaid ₹120</span>
                            </div>
                            <span className="font-extrabold text-amber-700">₹120</span>
                          </div>
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="border-t pt-2 space-y-1 text-[10px] text-slate-600">
                        <div className="flex justify-between"><span>Subtotal:</span><span>₹840</span></div>
                        <div className="flex justify-between"><span>Taxes & Delivery:</span><span>₹142</span></div>
                        <div className="flex justify-between font-black text-xs text-slate-900 pt-1 border-t"><span>Grand Total:</span><span className="text-[#fc8019]">₹982</span></div>
                      </div>
                    </div>

                    <button className="w-full py-3 bg-[#fc8019] text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-1">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Lock Cart & Send to Kitchen (₹982)</span>
                    </button>
                  </div>
                </div>

                {/* PHONE 3: Auto-Split Checkout (Right) */}
                <div className="bg-slate-900 p-3 rounded-[36px] shadow-2xl border-4 border-slate-800 transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded-[28px] overflow-hidden text-left p-4 space-y-3 min-h-[460px] flex flex-col justify-between border border-slate-100">
                    
                    <div className="space-y-3">
                      {/* Notch / Header */}
                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono border-b pb-2">
                        <span>9:43 AM</span>
                        <div className="w-12 h-2.5 bg-slate-900 rounded-full mx-auto"></div>
                        <span>100%</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-900">
                        <CreditCard className="w-4 h-4 text-[#fc8019]" />
                        <span>Auto-Split Checkout</span>
                      </div>

                      {/* Payment Summary */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5 text-xs">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Your Share Breakup</span>
                        <div className="flex justify-between text-slate-700 text-[11px]">
                          <span>Paneer Butter Masala</span>
                          <span className="font-semibold">₹240</span>
                        </div>
                        <div className="flex justify-between text-slate-700 text-[11px]">
                          <span>Delivery & Tax Share</span>
                          <span className="font-semibold">₹38</span>
                        </div>
                        <div className="flex justify-between font-black text-xs text-slate-900 pt-1.5 border-t">
                          <span>Total Amount Due:</span>
                          <span className="text-emerald-600">₹278</span>
                        </div>
                      </div>

                      {/* Payment Options */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Choose Payment Method</span>
                        <div className="space-y-1 text-[11px]">
                          <div className="p-2 border-2 border-[#fc8019] bg-orange-50/50 rounded-lg flex items-center justify-between font-bold text-slate-900">
                            <span>Google Pay (UPI)</span>
                            <span className="w-3 h-3 bg-[#fc8019] rounded-full"></span>
                          </div>
                          <div className="p-2 border border-slate-200 rounded-lg flex items-center justify-between text-slate-700">
                            <span>PhonePe</span>
                            <span className="w-3 h-3 border border-slate-300 rounded-full"></span>
                          </div>
                          <div className="p-2 border border-slate-200 rounded-lg flex items-center justify-between text-slate-700">
                            <span>PayTM UPI</span>
                            <span className="w-3 h-3 border border-slate-300 rounded-full"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2.5 bg-[#fc8019] text-white font-extrabold text-xs rounded-xl shadow-md">
                      Pay My Share ₹278 ➔
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Project Overview Section */}
          <section id="overview" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
            
            {/* Overview Intro Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Text */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-[#fc8019] rounded-full"></div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">Project Overview</h2>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Office and campus group lunches are often plagued by chaotic coordination. Manually tracking orders, constant follow-ups, and the awkward friction of split payments lead to delayed orders and frustrated teams. <strong>Swiggy Squad Pay</strong> was designed to eliminate these pain points.
                </p>
              </div>

              {/* Core Feature Top Right Card */}
              <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-[#fc8019]">
                  <span className="text-[10px] font-black uppercase tracking-wider">Core Feature</span>
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900">Real-Time Sync</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Live cart updates for every participant as they add items directly via web or mobile link.
                </p>
              </div>
            </div>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Card 1: The Problem */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 bg-amber-100 text-[#fc8019] rounded-xl flex items-center justify-center font-bold text-sm">
                  👥
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">The Problem</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fragmented communication channels and manual debt tracking for group meals in corporate environments.
                </p>
              </div>

              {/* Card 2: The Solution */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-sm">
                  💳
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">The Solution</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A synchronized "Squad Cart" where everyone adds their own items, and payments are auto-split at checkout.
                </p>
              </div>

              {/* Card 3: One-Click Invite */}
              <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 bg-orange-100 text-[#fc8019] rounded-xl flex items-center justify-center font-bold text-sm">
                  🔗
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">One-Click Invite</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  WhatsApp & Direct link integration for instant group forming without requiring app downloads.
                </p>
              </div>

              {/* Card 4: Secure Split */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-2 shadow-md">
                <div className="w-8 h-8 bg-slate-800 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-sm">
                  🛡️
                </div>
                <h3 className="text-sm font-extrabold text-white">Secure Split</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Payment gateway integration ensuring everyone pays their exact fair share before kitchen dispatch.
                </p>
              </div>

            </div>

          </section>

          {/* Designed for Maximum Velocity Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50/50 via-amber-50/30 to-white border-y border-slate-200/60">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Text Column */}
              <div className="md:col-span-8 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Designed for <span className="text-[#fc8019] italic">Maximum Velocity</span>
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="w-7 h-7 bg-orange-100 text-[#fc8019] rounded-lg flex items-center justify-center font-bold shrink-0 mt-0.5">⚡</div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block text-sm">60% Faster Checkout</strong>
                      <p className="text-slate-600 text-xs">Removing the manual share calculation reduces order-to-kitchen time significantly.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold shrink-0 mt-0.5">🛡️</div>
                    <div>
                      <strong className="text-slate-900 font-extrabold block text-sm">Zero Order Mismatches</strong>
                      <p className="text-slate-600 text-xs">Individual item ownership in the cart eliminates human error in group coordination.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 3D Badge Icon */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-40 h-40 bg-gradient-to-tr from-[#fc8019] to-amber-400 rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl transform rotate-6 hover:rotate-0 transition-transform duration-300 border-4 border-white">
                  🍽️
                </div>
              </div>

            </div>
          </section>

          {/* End of Presentation Footer */}
          <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#fc8019]">
                End of Presentation
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Thank you for viewing the Swiggy Squad Pay Case Study.
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-3 bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-[#fc8019] text-white font-extrabold flex items-center justify-center text-xs">
                    AV
                  </div>
                  <div className="text-left text-xs">
                    <span className="font-bold text-white block">Aditi Verma</span>
                    <span className="text-slate-400 text-[10px]">Lead Designer / APM • 2024</span>
                  </div>
                </div>

                <a
                  href="mailto:aditivermauk@gmail.com"
                  className="px-6 py-3 bg-[#fc8019] hover:bg-[#e06d0e] text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
                >
                  Contact for Collaboration ➔
                </a>
              </div>

              <div className="text-[10px] text-slate-500 pt-8 border-t border-slate-800/60">
                © 2024 Swiggy Product Strategy Portfolio • Aditi Verma
              </div>

            </div>
          </footer>

        </div>
      ) : null}

      {/* ========================================================================= */}
      {/* OTHER CASE STUDIES (MakeMyTrip, EV, Duolingo) */}
      {/* ========================================================================= */}
      {study.id !== 'swiggy' && (
        <div className="max-w-4xl mx-auto py-12 px-4 space-y-10">
          <div className="border-b border-slate-200 pb-4">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider rounded">
              {study.type}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 pt-3">{study.title}</h1>
            <p className="text-base text-slate-600 pt-1">{study.subtitle}</p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Case Study Overview</h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div><span className="text-slate-400 block font-semibold">Author</span><span className="font-bold text-slate-900">Aditi Verma</span></div>
              <div><span className="text-slate-400 block font-semibold">Role</span><span className="font-bold text-slate-900">{study.role}</span></div>
              <div><span className="text-slate-400 block font-semibold">Focus Metric</span><span className="font-bold text-slate-900">{study.focusMetric}</span></div>
              <div><span className="text-slate-400 block font-semibold">Notion Link</span>{study.liveUrl && <a href={study.liveUrl} target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">View Notion ↗</a>}</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
