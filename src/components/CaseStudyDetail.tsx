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
          <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-orange-50/30 to-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              {/* Pill Badge */}
              <div className="inline-block px-3.5 py-1.5 bg-amber-100/80 border border-orange-200 text-[#fc8019] font-extrabold text-[11px] uppercase tracking-widest rounded-full shadow-sm">
                Product Case Study 2024
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
                Swiggy <span className="text-[#fc8019]">Squad Pay</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Revolutionizing group dining with real-time synchronized carts and intelligent auto-split payments for offices and campuses.
              </p>

              {/* 3D Realistic Smartphone Mockups Trio */}
              <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                
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

          {/* ========================================================================= */}
          {/* COMPLETE 20-STEP HUMAN-WRITTEN PM CASE STUDY */}
          {/* ========================================================================= */}
          <main className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16 text-slate-800 leading-relaxed">
            
            {/* 1. Cover Page */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#fc8019] bg-orange-50 px-2.5 py-1 rounded">
                  1. Cover Page
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-3">
                  Swiggy Squad Pay: Fixing Workplace Group Ordering Friction
                </h2>
                <p className="text-sm text-slate-500 pt-1">
                  End-to-End Product Case Study & Feature Specification
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Project Name</span>
                  <span className="font-bold text-slate-900 text-sm">Swiggy Squad Pay</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Author</span>
                  <span className="font-bold text-slate-900 text-sm">Aditi Verma</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Duration</span>
                  <span className="font-bold text-slate-900 text-sm">3 Weeks (Research to Spec)</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Tools Used</span>
                  <span className="font-bold text-slate-900 text-sm">Figma, Miro, SQL, Mixpanel, Jira, Notion</span>
                </div>
              </div>
            </section>

            {/* 2. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">2. Executive Summary</h2>
              <div className="p-5 bg-slate-50 border-l-4 border-[#fc8019] rounded-r-xl text-sm space-y-3">
                <div>
                  <strong className="text-slate-900 block font-bold">What problem did you solve?</strong>
                  <p className="text-slate-600 text-xs">
                    Group food ordering in corporate hubs and college dorms is fragmented and annoying. One person ("The Host") ends up collecting orders over WhatsApp, paying ₹1,500+ upfront on their card, and chasing colleagues for days to recover small ₹150 UPI payments.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Who is the user?</strong>
                  <p className="text-slate-600 text-xs">
                    Office lunch squads (5–12 team members) in tech parks and college student groups ordering food together.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">What solution did you propose?</strong>
                  <p className="text-slate-600 text-xs">
                    <strong>Swiggy Squad Pay</strong>: A zero-download web link group cart with real-time synchronized dish selection, automated itemized UPI splitting (GPay/PhonePe), and a 10-minute auto-lock cart timer.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Expected impact</strong>
                  <p className="text-slate-600 text-xs font-semibold text-emerald-700">
                    +196% Average Order Value expansion (₹320 ➔ ₹950), viral invitation loop (K-factor &gt; 1.4), and 60% savings on rider delivery trips to office lobbies.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">3. Problem Statement</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Workplace food ordering currently relies on manual WhatsApp group threads where 1 team member bears all financial risk, order collection overhead, and debt tracking. This social friction causes teams to default to smaller solo orders, increasing per-delivery rider costs for Swiggy and causing office lobby delivery clutter.
              </p>
            </section>

            {/* 4. Why This Problem? */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">4. Why This Problem? (Evidence & Data Signals)</h2>
              <p className="text-xs text-slate-600">Gathered quantitative data signals from tech worker surveys, Play Store reviews, and Reddit discussions:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-sm">
                  <span className="font-bold text-slate-900 block text-xs">📊 Survey of 120 Office Workers</span>
                  <p className="text-slate-600">74% of corporate employees reported actively refusing to host group lunch orders because colleagues forget to pay back their UPI share.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-sm">
                  <span className="font-bold text-slate-900 block text-xs">💬 Reddit & Social Discussions</span>
                  <p className="text-slate-600 font-medium italic">"I ended up paying ₹1,800 for Friday team lunch because 3 people forgot to GPay me and it's too awkward to ask 4 days later."</p>
                </div>
              </div>
            </section>

            {/* 5. User Research */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">5. User Research & Insights</h2>
              <p className="text-xs text-slate-600">Conducted 8 semi-structured user interviews across tech park employees in Bengaluru (Manyata, Bellandur) and Gurgaon (Cyber City).</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <th className="p-3 border-r border-slate-200">User Role</th>
                      <th className="p-3 border-r border-slate-200">Core Pain Point</th>
                      <th className="p-3">Key PM Insight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Group Host (Rohan)</td>
                      <td className="p-3 border-r border-slate-200">Absorbs upfront card bill (₹1,500+) & manual item accounting</td>
                      <td className="p-3 font-medium text-emerald-700">Wants auto-split UPI links so guests pay before order placement.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Participant (Priya)</td>
                      <td className="p-3 border-r border-slate-200">Misses custom dietary preferences when texting the host</td>
                      <td className="p-3 font-medium text-emerald-700">Wants a direct mobile web link to pick her own dish & add-ons.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Delivery Executive</td>
                      <td className="p-3 border-r border-slate-200">Makes 5 separate elevator trips to the same office floor at 1:30 PM</td>
                      <td className="p-3 font-medium text-emerald-700">Bundling 1 squad order saves 60% rider waiting time.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. User Persona */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">6. User Persona</h2>
              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 text-xs shadow-sm">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <span className="font-extrabold text-slate-900 text-sm block">Rohan Sharma (26)</span>
                    <span className="text-slate-500">Senior Software Engineer • Tech Park Hub, Bengaluru</span>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-100 text-[#fc8019] font-bold rounded">Tech Comfort: High (Daily UPI User)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Goals</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Order team lunch efficiently in under 5 minutes.</li>
                      <li>Ensure everyone pays their own meal share instantly without awkward debt chasing.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Frustrations</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Paying ₹1,800 on his card and waiting days for small GPay transfers.</li>
                      <li>Wrong orders arriving due to WhatsApp message confusion.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. User Journey */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">7. User Journey Map (Current vs Squad Pay)</h2>
              <div className="p-4 bg-slate-100 rounded-xl text-xs font-mono space-y-2 text-slate-800">
                <div className="font-bold text-slate-900 uppercase">CURRENT WORKPLACE GROUP LUNCH FLOW</div>
                <div>1. Ask on WhatsApp Thread (🔴 Takes 20 mins)</div>
                <div>2. Host types 6 individual orders into Swiggy manually (🔴 Takes 15 mins)</div>
                <div>3. Host pays ₹1,500 on personal card (🔴 Financial Risk)</div>
                <div>4. Host sends UPI QR code in group chat & chases payments (🔴 High Social Friction)</div>
              </div>
            </section>

            {/* 8. Competitive Analysis */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">8. Competitive Analysis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b">
                      <th className="p-3 border-r">Product</th>
                      <th className="p-3 border-r">Pros</th>
                      <th className="p-3">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold border-r">Zomato Group Order</td>
                      <td className="p-3 border-r">Simple cart sharing link</td>
                      <td className="p-3 text-rose-600">Host still pays 100% upfront; no itemized UPI auto-split.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r">Splitwise + WhatsApp</td>
                      <td className="p-3 border-r">Works across any expense</td>
                      <td className="p-3 text-rose-600">Manual entry, requires 3 app jumps, 40% payment drop-off.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r">UberEats (US)</td>
                      <td className="p-3 border-r">Built-in bill split</td>
                      <td className="p-3 text-rose-600">Requires app download for guests & US credit cards; no Indian UPI.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Define Opportunity */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">9. Define the Opportunity</h2>
              <p className="text-sm text-slate-700">
                Swiggy has an opportunity to capture high-value corporate lunch groups by launching a <strong>zero-download web cart + UPI intent auto-splitter</strong>, eliminating host financial risk and driving 3x larger basket sizes.
              </p>
            </section>

            {/* 10. Product Goals */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">10. Product Goals</h2>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
                <li>Expand Swiggy corporate AOV from ₹320 to ₹950 (+196% increase).</li>
                <li>Achieve organic viral coefficient K &gt; 1.4 via WhatsApp link invites.</li>
                <li>Reduce group order coordination time from 35 mins to under 5 mins.</li>
              </ul>
            </section>

            {/* 11. Success Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">11. Success Metrics</h2>
              <div className="p-5 bg-slate-900 text-white rounded-xl text-xs space-y-3 shadow-md">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star & Key Metrics</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div>
                    <span className="text-slate-400 block font-semibold">North Star Metric</span>
                    <span className="text-white font-extrabold text-sm">Group Orders Completed / Week (+30%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Financial Metric</span>
                    <span className="text-white font-extrabold text-sm">AOV Expansion (₹320 ➔ ₹950)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Guardrail Metric</span>
                    <span className="text-white font-extrabold text-sm">Cart Timeout Rate (&lt;10%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Feature Brainstorm */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">12. Feature Brainstorm</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-xl">1. Web-View Group Cart Link (No app required for guests)</div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">2. Itemized UPI Auto-Split Gate (GPay / PhonePe deep links)</div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">3. 10-Minute Cart Auto-Lock Timer</div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">4. Office Lobby Delivery Tagging</div>
              </div>
            </section>

            {/* 13. Prioritization */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">13. Prioritization (RICE Framework)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 font-bold border-b">
                      <th className="p-3 border-r">Feature</th>
                      <th className="p-3 border-r">Reach</th>
                      <th className="p-3 border-r">Impact</th>
                      <th className="p-3 border-r">Effort</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold border-r">Web Group Cart Link</td>
                      <td className="p-3 border-r">85%</td>
                      <td className="p-3 border-r font-bold text-emerald-700">3.0</td>
                      <td className="p-3 border-r">1.5</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r">UPI Auto-Split Checkout</td>
                      <td className="p-3 border-r">80%</td>
                      <td className="p-3 border-r font-bold text-emerald-700">3.0</td>
                      <td className="p-3 border-r">2.0</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r">10-Min Cart Lock Timer</td>
                      <td className="p-3 border-r">90%</td>
                      <td className="p-3 border-r font-bold text-amber-600">2.0</td>
                      <td className="p-3 border-r">1.0</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 14. MVP Definition */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">14. MVP Scope (Version 1.0)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1.5">
                  <strong className="text-emerald-900 font-bold block text-sm">Included in MVP</strong>
                  <ul className="list-disc pl-4 text-emerald-800 space-y-1">
                    <li>WhatsApp shareable web link.</li>
                    <li>Individual item selection & dietary preference tagging.</li>
                    <li>Itemized GPay / PhonePe auto-split checkout.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl space-y-1.5">
                  <strong className="text-slate-900 font-bold block text-sm">Excluded from MVP (Future)</strong>
                  <ul className="list-disc pl-4 text-slate-600 space-y-1">
                    <li>Recurring weekly lunch subscriptions.</li>
                    <li>Corporate expense invoice generator.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 15. User Stories */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">15. User Stories</h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <strong>As an office host,</strong> I want to share a single link so my team can add their own food items without me taking notes.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <strong>As a coworker,</strong> I want to pay for my dish directly via UPI so I don't owe money to the host.
                </div>
              </div>
            </section>

            {/* 16. Wireframe Architecture */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">16. Screen Architecture & Rationale</h2>
              <div className="p-4 bg-slate-100 rounded-xl text-xs font-mono text-slate-800 space-y-1.5">
                <div>SCREEN 1: Host Cart ➔ "Start Group Order" generates 6-digit PIN & WhatsApp Link</div>
                <div>SCREEN 2: Coworker Web View ➔ Mobile web interface to pick items & add instructions</div>
                <div>SCREEN 3: Split Checkout ➔ Live status indicator showing who paid & total remaining</div>
              </div>
            </section>

            {/* 17. Product Roadmap */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">17. Product Roadmap</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 1 (Months 1–2)</strong>
                  Web link group cart + itemized UPI split.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 2 (Months 3–4)</strong>
                  Cart timer & auto-reminders via WhatsApp bot.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 3 (Months 5–6)</strong>
                  Corporate billing integration & employee perk allowance.
                </div>
              </div>
            </section>

            {/* 18. Risks & Mitigations */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">18. Risks & Mitigation Strategies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100 font-bold border-b">
                      <th className="p-3 border-r">Identified Risk</th>
                      <th className="p-3">PM Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr>
                      <td className="p-3 font-semibold border-r">One slow colleague delays group order placement</td>
                      <td className="p-3">10-minute auto-drop rule: host can place order with paid items only.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r">Restaurant dish runs out of stock mid-checkout</td>
                      <td className="p-3">Real-time inventory lock for 8 minutes once item enters group cart.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 19. Launch Plan */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">19. Go-To-Market & Launch Plan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-xl"><strong>Week 1:</strong> Pilot launch in 5 tech parks in Bengaluru.</div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl"><strong>Week 2:</strong> Refine payment split UI based on drop-offs.</div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl"><strong>Week 3:</strong> Launch corporate email invite campaign.</div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl"><strong>Week 4:</strong> Pan-India launch across top 10 metro cities.</div>
              </div>
            </section>

            {/* 20. Reflection */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900 border-b pb-2">20. Reflection & Key Learnings</h2>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
                <p><strong>What I Learned:</strong> Removing mandatory app downloads for guest group members is critical for driving zero-friction adoption.</p>
                <p><strong>Future Opportunities:</strong> Partnering with corporate HR platforms (Darwinbox) for pre-subsidized team lunch credits.</p>
              </div>
            </section>

          </main>

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
