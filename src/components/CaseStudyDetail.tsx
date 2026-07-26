import React from 'react';
import { CaseStudy } from '../data/projects';
import { 
  ArrowLeft, X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Calendar, 
  Wrench, Target, Users, MapPin, Compass, ShieldCheck, Rocket, RefreshCw, BarChart2
} from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
  onBack: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ study, onBack }) => {
  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 sm:px-6 lg:px-8 text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Top Minimal Navigation */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
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

        {/* ========================================================================= */}
        {/* CASE STUDY 1: MAKEMYTRIP UDAAN */}
        {/* ========================================================================= */}
        {study.id === 'makemytrip' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* 1. Cover Page */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  1. Cover Page
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-3">
                  MakeMyTrip Udaan: First-Time Flyer Experience for Tier-2/3 India
                </h1>
                <p className="text-sm text-slate-500 pt-1">
                  Product Strategy & Vernacular Onboarding Design
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Author</span>
                  <span className="font-bold text-slate-800 text-sm">Aditi Verma</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Duration</span>
                  <span className="font-bold text-slate-800 text-sm">4 Weeks (Concept to Spec)</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Role</span>
                  <span className="font-bold text-slate-800 text-sm">Associate Product Manager</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Tools Used</span>
                  <span className="font-bold text-slate-800 text-sm">Figma, Miro, SQL, Mixpanel, Jira, Notion</span>
                </div>
              </div>

              {study.liveUrl && (
                <div className="pt-2">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    <span>View Original Notion Documentation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>

            {/* 2. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. Executive Summary</h2>
              <div className="p-5 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-3">
                <div>
                  <strong className="text-slate-900 block font-bold">What Problem Did You Solve?</strong>
                  <p className="text-slate-600 text-xs">
                    Over 12M first-time flyers from Tier-2/3 cities abandon booking or face severe airport panic due to English aviation jargon, hidden baggage fees, and complex terminal procedures.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Who is the User?</strong>
                  <p className="text-slate-600 text-xs">
                    First-time flyers from non-metro towns (e.g., Darbhanga, Bareilly, Jharsuguda) traveling for work, family visits, or education.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">What Solution Did You Propose?</strong>
                  <p className="text-slate-600 text-xs">
                    <strong>MakeMyTrip Udaan</strong>: A dedicated vernacular flight assistant featuring a Zero-Hidden-Fee Guarantee, Airport Step-by-Step Timeline, and Vernacular Audio Onboarding in 6 Indian languages.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Expected Impact</strong>
                  <p className="text-slate-600 text-xs font-semibold text-emerald-700">
                    +25% increase in Tier-2/3 booking conversions (8.2% ➔ 10.3%) & -40% drop in baggage/terminal customer support tickets.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. Problem Statement</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                First-time travelers from regional Indian towns spend 45+ minutes struggling to complete flight bookings on mobile OTAs due to confusing baggage terminology (Cabin vs. Check-in), fear of surprise counter charges, and dread of getting lost inside modern airport terminals.
              </p>
            </section>

            {/* 4. Why This Problem? */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">4. Why This Problem? (Evidence & Signal)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">📊 Industry Growth Signal</span>
                  <p className="text-slate-600">UDAN regional connectivity scheme launched 70+ new airports, driving 12M+ first-time flyers annually.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">💬 Play Store & Forum Complaints</span>
                  <p className="text-slate-600">68% of negative reviews mention "charged extra ₹1500 for bag at airport" or "couldn't find gate".</p>
                </div>
              </div>
            </section>

            {/* 5. User Research */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">5. User Research & Insights</h2>
              <p className="text-xs text-slate-600">Conducted 8 semi-structured interviews with travelers from Patna, Darbhanga, and Bareilly.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">User Group</th>
                      <th className="p-3 border-r border-slate-200">Primary Pain Point</th>
                      <th className="p-3">Key Insight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">First-Time Flyer</td>
                      <td className="p-3 border-r border-slate-200">Scared of hidden charges & getting stopped at security</td>
                      <td className="p-3">Wants visual size guides and Hindi/Tamil audio instructions</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Frequent Relative Host</td>
                      <td className="p-3 border-r border-slate-200">Spends hours explaining check-in steps over phone</td>
                      <td className="p-3">Wants a shareable WhatsApp flight tracking & guide link</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. User Persona */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">6. User Persona</h2>
              <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-3 text-xs">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Ramesh Prasad (48)</span>
                    <span className="text-slate-500">Retail Shop Owner • Darbhanga, Bihar</span>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 font-bold">Tech Comfort: Moderate (WhatsApp/UPI)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Goals</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Fly to Delhi safely without making embarrassing mistakes.</li>
                      <li>Avoid paying unexpected baggage penalties at the counter.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Frustrations</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>English-only airport signs and aviation jargon ("PNR", "Boarding Pass vs Ticket").</li>
                      <li>Panic during terminal security checks.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. User Journey */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">7. User Journey Map</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-2 text-slate-800">
                <div className="font-bold text-slate-900 uppercase">CURRENT FLIGHT BOOKING & BOARDING FLOW</div>
                <div>1. Search Flights ➔ Confused by multiple fare types & baggage limits (🔴 Pain Point)</div>
                <div>2. Checkout ➔ Scared of hidden seat selection and add-on fees (🔴 Pain Point)</div>
                <div>3. Arrive at Airport ➔ Doesn't know which terminal door or check-in line (🔴 Pain Point)</div>
                <div>4. Security & Boarding ➔ Misplaces paper pass, panics at gate announcement (🔴 Pain Point)</div>
              </div>
            </section>

            {/* 8. Competitive Analysis */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">8. Competitive Analysis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Product</th>
                      <th className="p-3 border-r border-slate-200">Pros</th>
                      <th className="p-3">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">MakeMyTrip (Current)</td>
                      <td className="p-3 border-r border-slate-200">High inventory, trusted brand</td>
                      <td className="p-3">Heavy clutter, English-first, no vernacular audio assistance</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">EaseMyTrip</td>
                      <td className="p-3 border-r border-slate-200">Zero convenience fee marketing</td>
                      <td className="p-3">Basic UX, lacks airport guide features</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">IndiGo Direct App</td>
                      <td className="p-3 border-r border-slate-200">Direct flight status updates</td>
                      <td className="p-3">Single-airline focus, assumes high tech literacy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Define Opportunity */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">9. Define the Opportunity</h2>
              <p className="text-sm text-slate-700">
                No Indian travel OTA currently provides an end-to-end <strong>vernacular, zero-anxiety flight companion</strong> that bridges the gap between digital booking and physical airport navigation for Tier-2/3 first-timers.
              </p>
            </section>

            {/* 10. Product Goals */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">10. Product Goals</h2>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
                <li>Increase booking completion rate for Tier-2/3 users by 25%.</li>
                <li>Reduce baggage and airport guidance customer support queries by 40%.</li>
                <li>Build brand loyalty as India's most accessible regional travel platform.</li>
              </ul>
            </section>

            {/* 11. Success Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">11. Success Metrics</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">Primary & Guardrail Metrics</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div>
                    <span className="text-slate-400 block font-semibold">Primary Metric</span>
                    <span className="text-white font-bold">Tier-2/3 Booking Conversion (8.2% ➔ 10.3%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Engagement Metric</span>
                    <span className="text-white font-bold">Udaan Mode Toggle Adoption (&gt;35%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Guardrail Metric</span>
                    <span className="text-white font-bold">Checkout Cancellation Rate (&lt;3%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Feature Brainstorm */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">12. Feature Brainstorm</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">1. Vernacular Audio Ticket Explainer</div>
                <div className="p-3 bg-white border border-slate-200 rounded">2. Zero Hidden Baggage Calculator</div>
                <div className="p-3 bg-white border border-slate-200 rounded">3. Airport Timeline Navigation Checklist</div>
                <div className="p-3 bg-white border border-slate-200 rounded">4. WhatsApp Auto Boarding Pass Forwarder</div>
              </div>
            </section>

            {/* 13. Prioritization */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">13. Prioritization (RICE Framework)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Feature</th>
                      <th className="p-3 border-r border-slate-200">Impact</th>
                      <th className="p-3 border-r border-slate-200">Effort</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Zero Baggage Fee Guarantee</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">High</td>
                      <td className="p-3 border-r border-slate-200">Low</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Vernacular Audio Onboarding</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">High</td>
                      <td className="p-3 border-r border-slate-200">Medium</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Airport Step Timeline</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-amber-600">Medium</td>
                      <td className="p-3 border-r border-slate-200">Medium</td>
                      <td className="p-3 font-semibold text-amber-700">P2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 14. MVP Definition */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">14. MVP Scope (Version 1.0)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded space-y-1">
                  <strong className="text-emerald-900 font-bold block">Included in MVP</strong>
                  <ul className="list-disc pl-4 text-emerald-800 space-y-1">
                    <li>Simplified Udaan mode toggle on flight search screen.</li>
                    <li>Hindi & Tamil audio explainer buttons on ticket confirmation.</li>
                    <li>Visual 15kg checked / 7kg cabin baggage size checker.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-100 border border-slate-200 rounded space-y-1">
                  <strong className="text-slate-900 font-bold block">Excluded from MVP (Future)</strong>
                  <ul className="list-disc pl-4 text-slate-600 space-y-1">
                    <li>Live indoor airport AR navigation camera.</li>
                    <li>Automated cab pickup syncing at arrival airport.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 15. User Stories */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">15. User Stories</h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As a first-time flyer,</strong> I want to hear baggage limits spoken in Hindi so that I know exactly what items I can carry without paying extra.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As a regional traveler,</strong> I want a step-by-step checklist of airport entry steps so that I don't feel lost inside the terminal.
                </div>
              </div>
            </section>

            {/* 16. Wireframe Architecture */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">16. Screen Architecture & Rationale</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-1 text-slate-800">
                <div className="font-bold text-slate-900">SCREEN 1: Flight Search (Udaan Switch) ➔ Simplifies search filters</div>
                <div>SCREEN 2: Checkout (Zero-Hidden-Fee Card) ➔ Clarifies baggage rules before payment</div>
                <div>SCREEN 3: Digital Boarding Pass (Vernacular Audio & Gate Checklist) ➔ Guides user inside airport</div>
              </div>
            </section>

            {/* 17. Product Roadmap */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">17. Product Roadmap</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 1 (Months 1–2)</strong>
                  Launch Udaan Mode in Hindi & Tamil; Zero Baggage Fee guarantee card.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 2 (Months 3–4)</strong>
                  Add Telugu, Marathi, Bengali audio; WhatsApp auto boarding pass forwarding.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 3 (Months 5–6)</strong>
                  Airport terminal gate notifications & co-branded cab pickup passes.
                </div>
              </div>
            </section>

            {/* 18. Risks & Mitigations */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">18. Risks & Mitigation Strategies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Identified Risk</th>
                      <th className="p-3">Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Low Audio Adoption due to noisy public environments</td>
                      <td className="p-3">Provide high-contrast large font vernacular text fallbacks alongside audio.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Airline baggage rule changes causing confusion</td>
                      <td className="p-3">Real-time airline API sync to update weight limits dynamically per carrier.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 19. Launch Plan */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">19. Go-To-Market & Launch Plan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 1:</strong> Pilot launch on Darbhanga-Delhi route.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 2:</strong> Gather customer feedback & fix drop-off bugs.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 3:</strong> Expand to 10 Tier-2 airport routes.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 4:</strong> Pan-India rollout across all regional UDAN routes.</div>
              </div>
            </section>

            {/* 20. Reflection & Learnings */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">20. Reflection & Key Learnings</h2>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs space-y-2">
                <p><strong>What I Learned:</strong> Designing for first-time digital users requires removing jargon entirely and relying on clear visual metaphors and regional voice cues.</p>
                <p><strong>Future Opportunities:</strong> Partnering directly with regional airlines for dedicated airport assistance counters for MMT Udaan users.</p>
              </div>
            </section>

          </article>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 2: SWIGGY SQUAD PAY */}
        {/* ========================================================================= */}
        {study.id === 'swiggy' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* 1. Cover Page */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  1. Cover Page
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-3">
                  Swiggy Squad Pay: Fixing Workplace Group Ordering Friction
                </h1>
                <p className="text-sm text-slate-500 pt-1">
                  Product Strategy, Group Cart UX & Auto-Split UPI Integration
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Author</span>
                  <span className="font-bold text-slate-800 text-sm">Aditi Verma</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Duration</span>
                  <span className="font-bold text-slate-800 text-sm">3 Weeks</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Role</span>
                  <span className="font-bold text-slate-800 text-sm">Associate Product Manager</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Tools Used</span>
                  <span className="font-bold text-slate-800 text-sm">Figma, Miro, SQL, Mixpanel, Jira, Notion</span>
                </div>
              </div>

              {study.liveUrl && (
                <div className="pt-2">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    <span>View Original Notion Documentation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>

            {/* 2. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. Executive Summary</h2>
              <div className="p-5 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-3">
                <div>
                  <strong className="text-slate-900 block font-bold">What Problem Did You Solve?</strong>
                  <p className="text-slate-600 text-xs">
                    Group food ordering in tech parks and college dorms is painful: one host pays upfront (₹1,500+), manually collects custom orders over WhatsApp, and wastes days chasing individual UPI payments.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Who is the User?</strong>
                  <p className="text-slate-600 text-xs">
                    Corporate employees, tech teams, and college students ordering lunch together in groups of 3–8.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">What Solution Did You Propose?</strong>
                  <p className="text-slate-600 text-xs">
                    <strong>Swiggy Squad Pay</strong>: A web-link group cart enabling collaborative ordering without app downloads, automated itemized UPI splitting via GPay/PhonePe, and a 10-minute cart lock.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Expected Impact</strong>
                  <p className="text-slate-600 text-xs font-semibold text-emerald-700">
                    Average Order Value (AOV) increase from ₹320 to ₹950 (+196%) & viral user acquisition (K-factor &gt; 1.4).
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. Problem Statement</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Workplace group food ordering suffers from severe coordination friction—hosts absorb financial risk and manual accounting burden, leading to smaller solo orders, higher per-delivery logistics costs, and cart abandonment.
              </p>
            </section>

            {/* 4. Why This Problem? */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">4. Why This Problem? (Evidence & Signal)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">📊 Reddit & Corporate Surveys</span>
                  <p className="text-slate-600">74% of office workers report hating being the designated lunch order host due to uncollected payments.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">🚚 Logistics Unit Economics</span>
                  <p className="text-slate-600">Delivering 1 bundled group order to an office lobby is 60% cheaper for Swiggy than 5 individual rider trips.</p>
                </div>
              </div>
            </section>

            {/* 5. User Research */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">5. User Research & Insights</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">User Segment</th>
                      <th className="p-3 border-r border-slate-200">Pain Point</th>
                      <th className="p-3">Key Insight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Order Host (Rohan)</td>
                      <td className="p-3 border-r border-slate-200">Absorbs upfront cost & manually tracks custom items</td>
                      <td className="p-3">Wants auto-split links so colleagues pay directly before checkout</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Group Participant (Priya)</td>
                      <td className="p-3 border-r border-slate-200">Can't customize dietary preferences easily over text</td>
                      <td className="p-3">Wants a direct mobile link to select her own dish & add-ons</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. User Persona */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">6. User Persona</h2>
              <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-3 text-xs">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Rohan Sharma (26)</span>
                    <span className="text-slate-500">Software Engineer • Bengaluru Tech Park</span>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 font-bold">Tech Comfort: High (Daily GPay/Swiggy)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Goals</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Order team lunch efficiently in under 5 minutes.</li>
                      <li>Ensure everyone pays for their own meal instantly.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Frustrations</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Chasing teammates for ₹150 UPI transfers 3 days later.</li>
                      <li>Getting wrong orders due to WhatsApp message mix-ups.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. User Journey */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">7. User Journey Map</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-2 text-slate-800">
                <div className="font-bold text-slate-900 uppercase">CURRENT GROUP LUNCH FLOW</div>
                <div>1. Host asks "Who wants lunch?" on WhatsApp (🔴 Takes 20 mins)</div>
                <div>2. Host types 6 individual orders into Swiggy manually (🔴 Takes 15 mins)</div>
                <div>3. Host pays ₹1,450 on personal card (🔴 Financial Risk)</div>
                <div>4. Host sends UPI QR code in group chat & chases payments (🔴 High Social Friction)</div>
              </div>
            </section>

            {/* 8. Competitive Analysis */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">8. Competitive Analysis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Product</th>
                      <th className="p-3 border-r border-slate-200">Pros</th>
                      <th className="p-3">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Zomato Group Order</td>
                      <td className="p-3 border-r border-slate-200">Basic cart sharing</td>
                      <td className="p-3">Host still pays total bill; no itemized UPI splitting</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">UberEats (US)</td>
                      <td className="p-3 border-r border-slate-200">Bill split feature</td>
                      <td className="p-3">Requires all users to have app installed; not optimized for India UPI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Define Opportunity */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">9. Define the Opportunity</h2>
              <p className="text-sm text-slate-700">
                Create a frictionless <strong>web-native group cart + UPI deep-link auto-splitter</strong> that lets team members add items without downloading the app and pay their exact share before the order places.
              </p>
            </section>

            {/* 10. Product Goals */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">10. Product Goals</h2>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
                <li>Increase Swiggy corporate AOV from ₹320 to ₹950.</li>
                <li>Achieve organic viral coefficient K &gt; 1.4 via link invites.</li>
                <li>Reduce cart abandonment for group orders to under 12%.</li>
              </ul>
            </section>

            {/* 11. Success Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">11. Success Metrics</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star & Key Metrics</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div>
                    <span className="text-slate-400 block font-semibold">North Star Metric</span>
                    <span className="text-white font-bold">Group Orders Placed per Week (+30%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Financial Metric</span>
                    <span className="text-white font-bold">AOV Expansion (₹320 ➔ ₹950)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Guardrail Metric</span>
                    <span className="text-white font-bold">Checkout Timeout Rate (&lt;10%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Feature Brainstorm */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">12. Feature Brainstorm</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">1. Web-View Group Cart Link (No App Required)</div>
                <div className="p-3 bg-white border border-slate-200 rounded">2. Itemized UPI Auto-Split Gate (GPay / PhonePe)</div>
                <div className="p-3 bg-white border border-slate-200 rounded">3. 10-Minute Cart Lock Timer</div>
                <div className="p-3 bg-white border border-slate-200 rounded">4. Office Lobby Delivery Tagging</div>
              </div>
            </section>

            {/* 13. Prioritization */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">13. Prioritization Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Feature</th>
                      <th className="p-3 border-r border-slate-200">Impact</th>
                      <th className="p-3 border-r border-slate-200">Effort</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Web Group Cart Link</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">High</td>
                      <td className="p-3 border-r border-slate-200">Low</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">UPI Auto-Split Checkout</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">High</td>
                      <td className="p-3 border-r border-slate-200">Medium</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Cart Lock Timer</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-amber-600">Medium</td>
                      <td className="p-3 border-r border-slate-200">Low</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 14. MVP Definition */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">14. MVP Scope (Version 1.0)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded space-y-1">
                  <strong className="text-emerald-900 font-bold block">Included in MVP</strong>
                  <ul className="list-disc pl-4 text-emerald-800 space-y-1">
                    <li>WhatsApp shareable Group Cart link.</li>
                    <li>Individual item selection & dietary preference tagging.</li>
                    <li>Individual GPay/PhonePe auto-split checkout.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-100 border border-slate-200 rounded space-y-1">
                  <strong className="text-slate-900 font-bold block">Excluded from MVP</strong>
                  <ul className="list-disc pl-4 text-slate-600 space-y-1">
                    <li>Recurring scheduled team lunch subscriptions.</li>
                    <li>Corporate expense invoice generator.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 15. User Stories */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">15. User Stories</h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As an office host,</strong> I want to share a single link so my team can add their own food items without me taking notes.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As a coworker,</strong> I want to pay for my dish directly via UPI so I don't owe money to the host.
                </div>
              </div>
            </section>

            {/* 16. Wireframe Architecture */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">16. Screen Architecture & Rationale</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-1 text-slate-800">
                <div>SCREEN 1: Host Cart ➔ "Start Group Order" button generates 6-digit PIN & WhatsApp Link</div>
                <div>SCREEN 2: Coworker Web View ➔ Mobile web interface to pick items & add instructions</div>
                <div>SCREEN 3: Split Checkout ➔ Live status indicator showing who paid & total remaining</div>
              </div>
            </section>

            {/* 17. Product Roadmap */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">17. Product Roadmap</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 1</strong>
                  Web link group cart + itemized UPI split.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 2</strong>
                  Cart timer & auto-reminders via WhatsApp bot.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 3</strong>
                  Corporate billing integration & employee perk allowance.
                </div>
              </div>
            </section>

            {/* 18. Risks & Mitigations */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">18. Risks & Mitigation Strategies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Risk</th>
                      <th className="p-3">Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">One person delays checkout stalling the group</td>
                      <td className="p-3">10-minute auto-drop rule: host can place order with paid items only.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Restaurant item stock-out mid checkout</td>
                      <td className="p-3">Real-time inventory lock for 8 minutes once item enters group cart.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 19. Launch Plan */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">19. Go-To-Market & Launch Plan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 1:</strong> Beta pilot in 5 tech parks in Bengaluru.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 2:</strong> Refine payment auto-split UI based on drop-offs.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 3:</strong> Launch corporate email invite campaign.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 4:</strong> Pan-India launch across top 10 metro cities.</div>
              </div>
            </section>

            {/* 20. Reflection & Learnings */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">20. Reflection & Key Learnings</h2>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs space-y-2">
                <p><strong>What I Learned:</strong> Removing mandatory app downloads for secondary group members is critical for driving zero-friction adoption.</p>
                <p><strong>Future Opportunities:</strong> Partnering with corporate HR platforms (Darwinbox) for pre-subsidized team lunch credits.</p>
              </div>
            </section>

          </article>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 3: MMT X GRID-LOCK EV TRAVEL */}
        {/* ========================================================================= */}
        {study.id === 'ev' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* 1. Cover Page */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  1. Cover Page
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-3">
                  MMT EV-Drive: Eliminating Range Anxiety in Inter-City EV Travel
                </h1>
                <p className="text-sm text-slate-500 pt-1">
                  EV Route Planning, Live Telemetry Integration & Guaranteed Charger Slot Booking
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Author</span>
                  <span className="font-bold text-slate-800 text-sm">Aditi Verma</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Duration</span>
                  <span className="font-bold text-slate-800 text-sm">4 Weeks</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Role</span>
                  <span className="font-bold text-slate-800 text-sm">Associate Product Manager</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Tools Used</span>
                  <span className="font-bold text-slate-800 text-sm">Figma, Miro, SQL, Mixpanel, Jira, Notion</span>
                </div>
              </div>

              {study.liveUrl && (
                <div className="pt-2">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    <span>View Original Notion Documentation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>

            {/* 2. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. Executive Summary</h2>
              <div className="p-5 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-3">
                <div>
                  <strong className="text-slate-900 block font-bold">What Problem Did You Solve?</strong>
                  <p className="text-slate-600 text-xs">
                    EV owners avoid long inter-city highway trips (e.g., Delhi-Jaipur, Bengaluru-Coorg) due to "Range Anxiety"—broken highway chargers, long queues, and non-functional telemetry.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Who is the User?</strong>
                  <p className="text-slate-600 text-xs">
                    Electric Vehicle owners taking weekend inter-city road trips with family or friends.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">What Solution Did You Propose?</strong>
                  <p className="text-slate-600 text-xs">
                    <strong>MMT EV-Drive</strong>: Integrated EV route planner powered by Grid-Lock's telemetry API, guaranteeing 30-minute charger slot reservations and hotel/meal bundling.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Expected Impact</strong>
                  <p className="text-slate-600 text-xs font-semibold text-emerald-700">
                    +25% QoQ growth in inter-city EV road trip bookings & charger slot reservation conversion &gt; 35%.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. Problem Statement</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Inter-city EV drivers suffer from unpredicted battery drain and unreliable highway charging stations, causing high travel anxiety and preventing EV owners from taking weekend getaway road trips.
              </p>
            </section>

            {/* 4. Why This Problem? */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">4. Why This Problem? (Evidence & Signal)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">📊 EV Market Explosion</span>
                  <p className="text-slate-600">EV sales in India grew 140% YoY, but 82% of owners restrict usage strictly to intra-city commutes.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">⚡ Charging Infrastructure Deficit</span>
                  <p className="text-slate-600">Highway charging stations have a 32% broken telemetry rate on third-party apps.</p>
                </div>
              </div>
            </section>

            {/* 5. User Research */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">5. User Research & Insights</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">User Segment</th>
                      <th className="p-3 border-r border-slate-200">Pain Point</th>
                      <th className="p-3">Key Insight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">EV SUV Owner (Nexon/Tata)</td>
                      <td className="p-3 border-r border-slate-200">Arrives at highway charger to find 4 cars waiting in line</td>
                      <td className="p-3">Wants guaranteed pre-booked 30-minute charging slot tied to trip ETA</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Weekend Traveler</td>
                      <td className="p-3 border-r border-slate-200">Bored waiting 40 minutes at isolated charging points</td>
                      <td className="p-3">Wants chargers located at resorts, restaurants, or MMT partner hotels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. User Persona */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">6. User Persona</h2>
              <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-3 text-xs">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Ankit Mehta (34)</span>
                    <span className="text-slate-500">Product Lead • Gurgaon (Drives Tata Nexon EV)</span>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 font-bold">Tech Comfort: Very High</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Goals</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Drive family from Delhi to Jaipur on weekends stress-free.</li>
                      <li>Charge vehicle while having lunch at a clean highway resort.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Frustrations</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Offline or out-of-service chargers shown as "Available" on apps.</li>
                      <li>Wasting 1.5 hours waiting in line at highway charging plazas.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. User Journey */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">7. User Journey Map</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-2 text-slate-800">
                <div className="font-bold text-slate-900 uppercase">CURRENT INTER-CITY EV ROAD TRIP FLOW</div>
                <div>1. Enter Route ➔ Manually calculates battery range vs distance (🔴 High Anxiety)</div>
                <div>2. Drive on Highway ➔ Constant battery percentage checking (🔴 Range Anxiety)</div>
                <div>3. Arrive at Charger ➔ Charger broken or 45-min queue (🔴 Major Breakdown)</div>
                <div>4. Waiting ➔ Stranded at hot roadside spot with family (🔴 Poor Experience)</div>
              </div>
            </section>

            {/* 8. Competitive Analysis */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">8. Competitive Analysis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Product</th>
                      <th className="p-3 border-r border-slate-200">Pros</th>
                      <th className="p-3">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">PlugShare</td>
                      <td className="p-3 border-r border-slate-200">Crowdsourced charger location map</td>
                      <td className="p-3">No live telemetry, no slot reservation, no hotel booking</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Tata EZ Charge App</td>
                      <td className="p-3 border-r border-slate-200">Direct Tata network status</td>
                      <td className="p-3">Single-brand network, no trip routing or meal bundling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Define Opportunity */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">9. Define the Opportunity</h2>
              <p className="text-sm text-slate-700">
                Combine <strong>real-time Grid-Lock charger telemetry with MakeMyTrip's hotel & restaurant booking engine</strong> to offer guaranteed charging stops integrated with meal breaks.
              </p>
            </section>

            {/* 10. Product Goals */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">10. Product Goals</h2>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
                <li>Increase inter-city EV road trip bookings by 25% QoQ.</li>
                <li>Reduce highway charging wait times from 28 mins to under 3 mins via slot reservations.</li>
                <li>Drive hotel and resort dining revenue along major highway corridors.</li>
              </ul>
            </section>

            {/* 11. Success Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">11. Success Metrics</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star & Key Metrics</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div>
                    <span className="text-slate-400 block font-semibold">North Star Metric</span>
                    <span className="text-white font-bold">Inter-City EV Trips Completed (+25% QoQ)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Conversion Metric</span>
                    <span className="text-white font-bold">Charger Booking Conversion (&gt;35%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">UX Metric</span>
                    <span className="text-white font-bold">Average Wait Time (&lt;3 mins)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Feature Brainstorm */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">12. Feature Brainstorm</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">1. EV Model Battery Route Planner</div>
                <div className="p-3 bg-white border border-slate-200 rounded">2. Guaranteed Grid-Lock Charger Reservation</div>
                <div className="p-3 bg-white border border-slate-200 rounded">3. Resort Meal & Lounge Pass Sync</div>
                <div className="p-3 bg-white border border-slate-200 rounded">4. Emergency Roadside Battery Assistance</div>
              </div>
            </section>

            {/* 13. Prioritization */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">13. Prioritization Matrix</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Feature</th>
                      <th className="p-3 border-r border-slate-200">Impact</th>
                      <th className="p-3 border-r border-slate-200">Effort</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Grid-Lock Telemetry Slot Reservation</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">High</td>
                      <td className="p-3 border-r border-slate-200">Medium</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Smart Battery Route Planner</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">High</td>
                      <td className="p-3 border-r border-slate-200">Low</td>
                      <td className="p-3 font-bold text-emerald-700">P1 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Hotel & Meal Bundling</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-amber-600">Medium</td>
                      <td className="p-3 border-r border-slate-200">Medium</td>
                      <td className="p-3 font-semibold text-amber-700">P2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 14. MVP Definition */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">14. MVP Scope (Version 1.0)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded space-y-1">
                  <strong className="text-emerald-900 font-bold block">Included in MVP</strong>
                  <ul className="list-disc pl-4 text-emerald-800 space-y-1">
                    <li>EV Vehicle model selection & battery range calculation.</li>
                    <li>Grid-Lock API telemetry integration for live charger availability.</li>
                    <li>Guaranteed 30-min charger slot pre-booking.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-100 border border-slate-200 rounded space-y-1">
                  <strong className="text-slate-900 font-bold block">Excluded from MVP</strong>
                  <ul className="list-disc pl-4 text-slate-600 space-y-1">
                    <li>Autonomous vehicle OBD-II Bluetooth dongle sync.</li>
                    <li>Solar charging station carbon offset credits.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 15. User Stories */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">15. User Stories</h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As an EV driver,</strong> I want to reserve a fast charger slot 2 hours in advance so I don't wait in line on the highway.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As a road tripper,</strong> I want charger stops suggested at family-friendly restaurants so my family can eat while the car charges.
                </div>
              </div>
            </section>

            {/* 16. Wireframe Architecture */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">16. Screen Architecture & Rationale</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-1 text-slate-800">
                <div>SCREEN 1: Route Entry ➔ Pick vehicle model & current battery %</div>
                <div>SCREEN 2: EV Waypoint Map ➔ Displays optimal charger stops + live telemetry status</div>
                <div>SCREEN 3: Slot Reservation & Hotel Voucher ➔ Instant slot lock + 15% dining discount</div>
              </div>
            </section>

            {/* 17. Product Roadmap */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">17. Product Roadmap</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 1</strong>
                  Route planner + Grid-Lock slot booking on Delhi-Jaipur & BLR-Coorg corridors.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 2</strong>
                  Hotel & resort meal coupon bundling during charging stops.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 3</strong>
                  Emergency mobile roadside charging truck dispatch.
                </div>
              </div>
            </section>

            {/* 18. Risks & Mitigations */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">18. Risks & Mitigation Strategies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Risk</th>
                      <th className="p-3">Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Traffic delay causing user to miss reserved slot</td>
                      <td className="p-3">Dynamic ETA tracking auto-adjusts slot window by ±20 minutes.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Charger power grid outage</td>
                      <td className="p-3">Automatic rerouting alert to secondary backup station within 15 km.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 19. Launch Plan */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">19. Go-To-Market & Launch Plan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 1:</strong> Pilot launch on Delhi-Agra & Delhi-Jaipur highways.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 2:</strong> Partner with Tata & MG EV owner communities.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 3:</strong> Add Mumbai-Pune & Bengaluru-Mysore corridors.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 4:</strong> National campaign with MMT EV highway hotel discounts.</div>
              </div>
            </section>

            {/* 20. Reflection & Learnings */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">20. Reflection & Key Learnings</h2>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs space-y-2">
                <p><strong>What I Learned:</strong> Overcoming physical infrastructure limitations requires tight API integration between travel platforms and hardware telemetry networks.</p>
                <p><strong>Future Opportunities:</strong> Integrating live battery health analytics and charger speed predictions based on ambient temperature.</p>
              </div>
            </section>

          </article>
        )}

        {/* ========================================================================= */}
        {/* CASE STUDY 4: DUOLINGO B2 INTERMEDIATE PLATEAU */}
        {/* ========================================================================= */}
        {study.id === 'duolingo' && (
          <article className="space-y-12 text-slate-800 leading-relaxed">
            
            {/* 1. Cover Page */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  1. Cover Page
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 pt-3">
                  Duolingo: Conquering the B2 Intermediate Plateau
                </h1>
                <p className="text-sm text-slate-500 pt-1">
                  Advanced Retention Strategy, Multimodal AI Roleplays & Co-Op Guild Streaks
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Author</span>
                  <span className="font-bold text-slate-800 text-sm">Aditi Verma</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Duration</span>
                  <span className="font-bold text-slate-800 text-sm">4 Weeks</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Role</span>
                  <span className="font-bold text-slate-800 text-sm">Product Manager</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Tools Used</span>
                  <span className="font-bold text-slate-800 text-sm">Figma, Miro, SQL, Mixpanel, Jira, Notion</span>
                </div>
              </div>

              {study.liveUrl && (
                <div className="pt-2">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                  >
                    <span>View Original Notion Documentation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </section>

            {/* 2. Executive Summary */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">2. Executive Summary</h2>
              <div className="p-5 bg-slate-50 border-l-4 border-slate-900 rounded-r text-sm space-y-3">
                <div>
                  <strong className="text-slate-900 block font-bold">What Problem Did You Solve?</strong>
                  <p className="text-slate-600 text-xs">
                    Duolingo suffers from a massive <strong>Intermediate Churn Bottleneck</strong>: 62% of learners who reach Day 30 churn before Day 90 because tile-matching quizzes fail to build real-world conversational speaking confidence (The B2 Plateau).
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Who is the User?</strong>
                  <p className="text-slate-600 text-xs">
                    Intermediate language learners (Day 30–90) who can read vocabulary but freeze when attempting real 2-minute native conversations.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">What Solution Did You Propose?</strong>
                  <p className="text-slate-600 text-xs">
                    <strong>Duolingo Real-World Micro-Missions</strong>: 2-minute AI Voice Roleplays with real-time feedback, Co-Op Guild Streaks ("Rescue Sprints"), and Smart Lockscreen Ambient Flash-Scenarios.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-bold">Expected Impact</strong>
                  <p className="text-slate-600 text-xs font-semibold text-emerald-700">
                    +28.4% lift in Day 90 Retention (38% ➔ 48.8%), +34.2% Super/Max subscription conversion, and +45% user confidence in spoken fluency.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Problem Statement */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">3. Problem Statement</h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Intermediate users experience "The Fluency Illusion"—passing translation drills on app but freezing during real-life conversations. Without conversational mastery, streak gamification alone fails to sustain long-term Day 90 active retention.
              </p>
            </section>

            {/* 4. Why This Problem? */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">4. Why This Problem? (Evidence & Signal)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">📊 62% D30-D90 Churn Rate</span>
                  <p className="text-slate-600">Internal analytics show a steep retention drop after Unit 15 as learning shifts from simple words to conversational grammar.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded space-y-1">
                  <span className="font-bold text-slate-900 block">💬 User Interview Quotes</span>
                  <p className="text-slate-600 font-medium italic">"I spent 50 days on French, went to Paris, and couldn't even order a croissant without panicking."</p>
                </div>
              </div>
            </section>

            {/* 5. User Research */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">5. User Research & Insights</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">User Segment</th>
                      <th className="p-3 border-r border-slate-200">Pain Point</th>
                      <th className="p-3">Key Insight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Plateaued Learner (D30+)</td>
                      <td className="p-3 border-r border-slate-200">Panics during native speaking attempts</td>
                      <td className="p-3">Wants low-anxiety 2-minute AI voice simulations with safe corrections</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Isolated Streak Runner</td>
                      <td className="p-3 border-r border-slate-200">Streak feels like a lonely obligation</td>
                      <td className="p-3">Wants social team accountability where friends can help save streaks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. User Persona */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">6. User Persona</h2>
              <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-3 text-xs">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">Clara Lin (28)</span>
                    <span className="text-slate-500">Marketing Specialist • Day 45 Spanish Learner</span>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 font-bold">Tech Comfort: High</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Goals</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Hold fluent 2-minute conversations with native Spanish colleagues.</li>
                      <li>Transition from textbook grammar to natural speaking.</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold mb-1">Frustrations</strong>
                    <ul className="list-disc pl-4 space-y-1 text-slate-600">
                      <li>Tired of tapping matching tile buttons; feels no real progress.</li>
                      <li>Freezes up when hearing fast native spoken audio.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. User Journey */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">7. User Journey Map</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-2 text-slate-800">
                <div className="font-bold text-slate-900 uppercase">THE B2 FLUENCY WALL FUNNEL</div>
                <div>Day 1 ➔ Signup & easy vocabulary matching (High Engagement)</div>
                <div>Day 14 ➔ Unlocks simple sentences & maintains daily streak (Habit Formed)</div>
                <div>Day 30 ➔ Reaches B2 Plateau & fails real-world conversation test (🔴 Demoralization)</div>
                <div>Day 60–90 ➔ Streak breaks ➔ 62% User Churn (🔴 Value Deficit)</div>
              </div>
            </section>

            {/* 8. Competitive Analysis */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">8. Competitive Analysis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Product</th>
                      <th className="p-3 border-r border-slate-200">Pros</th>
                      <th className="p-3">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Babbel</td>
                      <td className="p-3 border-r border-slate-200">Strong real-life conversation focus</td>
                      <td className="p-3">Boring UI, lacks viral gamification & social loops</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">iTalki / Preply</td>
                      <td className="p-3 border-r border-slate-200">1-on-1 human tutors</td>
                      <td className="p-3">Expensive ($15/hr), high scheduling friction</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Duolingo (Current)</td>
                      <td className="p-3 border-r border-slate-200">World-class gamification & streaks</td>
                      <td className="p-3">Low active voice practice, high intermediate churn</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Define Opportunity */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">9. Define the Opportunity</h2>
              <p className="text-sm text-slate-700">
                Bridge the gap between gamified tile-matching and human tutors by embedding <strong>2-minute AI Voice Roleplays + Co-Op Team Streaks</strong> directly into the core Duolingo journey.
              </p>
            </section>

            {/* 10. Product Goals */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">10. Product Goals</h2>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
                <li>Lift Day 90 active retention rate by +28.4% (38% ➔ 48.8%).</li>
                <li>Increase Super & Max paid subscription conversion by +34.2%.</li>
                <li>Improve user self-reported spoken confidence score by +45%.</li>
              </ul>
            </section>

            {/* 11. Success Metrics */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">11. Success Metrics</h2>
              <div className="p-4 bg-slate-900 text-white rounded text-xs space-y-2">
                <span className="text-emerald-400 font-bold uppercase tracking-wider">North Star & Key Metrics</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div>
                    <span className="text-slate-400 block font-semibold">North Star Metric</span>
                    <span className="text-white font-bold">D90 Active Retention Rate (+28.4%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Monetization Metric</span>
                    <span className="text-white font-bold">Super/Max Conversion (+34.2%)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-semibold">Guardrail Metric</span>
                    <span className="text-white font-bold">Voice Anxiety Drop-off (&lt;4%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 12. Feature Brainstorm */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">12. Feature Brainstorm</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">1. 2-Minute AI Voice Roleplay Sprints</div>
                <div className="p-3 bg-white border border-slate-200 rounded">2. Co-Op Guild Streaks ("Rescue Sprints")</div>
                <div className="p-3 bg-white border border-slate-200 rounded">3. Lock Screen Ambient Flash-Scenarios</div>
                <div className="p-3 bg-white border border-slate-200 rounded">4. AR Object Translation Camera</div>
              </div>
            </section>

            {/* 13. Prioritization */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">13. Prioritization (RICE Framework)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Feature</th>
                      <th className="p-3 border-r border-slate-200">Reach</th>
                      <th className="p-3 border-r border-slate-200">Impact</th>
                      <th className="p-3 border-r border-slate-200">Effort</th>
                      <th className="p-3 border-r border-slate-200">RICE Score</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">AI Voice Micro-Missions</td>
                      <td className="p-3 border-r border-slate-200">75%</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">3.0</td>
                      <td className="p-3 border-r border-slate-200">2.0</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-slate-900">101.2</td>
                      <td className="p-3 font-bold text-emerald-700">P0 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Co-Op Guild Streaks</td>
                      <td className="p-3 border-r border-slate-200">80%</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-emerald-700">2.5</td>
                      <td className="p-3 border-r border-slate-200">1.5</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-slate-900">113.3</td>
                      <td className="p-3 font-bold text-emerald-700">P0 (MVP)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Lock Screen Flash Scenarios</td>
                      <td className="p-3 border-r border-slate-200">50%</td>
                      <td className="p-3 border-r border-slate-200">1.5</td>
                      <td className="p-3 border-r border-slate-200">2.0</td>
                      <td className="p-3 border-r border-slate-200 font-bold text-slate-900">26.2</td>
                      <td className="p-3 font-semibold text-amber-700">P1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 14. MVP Definition */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">14. MVP Scope (Version 1.0)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded space-y-1">
                  <strong className="text-emerald-900 font-bold block">Included in MVP</strong>
                  <ul className="list-disc pl-4 text-emerald-800 space-y-1">
                    <li>2-minute AI Voice Roleplay scenario ("Barcelona Cafe").</li>
                    <li>Low-anxiety instant feedback card (Accuracy, Tempo, Filler words).</li>
                    <li>3-person Co-Op Guild Squad Streak & 60-second Rescue Sprint alerts.</li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-100 border border-slate-200 rounded space-y-1">
                  <strong className="text-slate-900 block font-bold">Excluded from MVP</strong>
                  <ul className="list-disc pl-4 text-slate-600 space-y-1">
                    <li>AR Camera object scanning.</li>
                    <li>Multiplayer live voice rooms.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 15. User Stories */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">15. User Stories</h2>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As an intermediate learner,</strong> I want to practice speaking with an AI character in real-time so that I build confidence without fear of judgment.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong>As a squad member,</strong> I want to complete a 60-second rescue sprint so I can save my friend's breaking streak.
                </div>
              </div>
            </section>

            {/* 16. Wireframe Architecture */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">16. Screen Architecture & Rationale</h2>
              <div className="p-4 bg-slate-100 rounded text-xs font-mono space-y-1 text-slate-800">
                <div>SCREEN 1: AI Voice Roleplay ("Barcelona Cafe") ➔ Interactive voice mascot & prompt</div>
                <div>SCREEN 2: Co-Op Guild Squad Alert ➔ "Alex's streak is in danger! Complete 60s Rescue Sprint"</div>
                <div>SCREEN 3: Fluency Progress Dashboard ➔ Tracks conversational confidence vs target level</div>
              </div>
            </section>

            {/* 17. Product Roadmap */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">17. Product Roadmap</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 1</strong>
                  AI Voice Roleplay MVP + 3-Person Co-Op Squad Streaks.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 2</strong>
                  iOS Lock Screen Ambient Flash-Scenarios & Location Triggers.
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <strong className="text-slate-900 block font-bold border-b pb-1 mb-1">Phase 3</strong>
                  Custom AI roleplay creator for specialized industry vocabulary (Medical, Tech).
                </div>
              </div>
            </section>

            {/* 18. Risks & Mitigations */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">18. Risks & Mitigation Strategies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold">
                      <th className="p-3 border-r border-slate-200">Risk</th>
                      <th className="p-3">Mitigation Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">LLM Latency causing awkward pauses in voice mode</td>
                      <td className="p-3">On-device small spec model for sub-400ms initial response.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold border-r border-slate-200">Microphone Anxiety in public places</td>
                      <td className="p-3">Subway / Quiet Mode toggle permitting silent tap & whisper responses.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 19. Launch Plan */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">19. Go-To-Market & Launch Plan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 1:</strong> Closed beta with 10,000 Day 30+ Spanish learners.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 2:</strong> A/B test voice roleplay vs control cohort.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 3:</strong> Launch Co-Op Squad Streaks to 50% user base.</div>
                <div className="p-3 bg-white border border-slate-200 rounded"><strong>Week 4:</strong> Global rollout across iOS & Android.</div>
              </div>
            </section>

            {/* 20. Reflection & Learnings */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b pb-2">20. Reflection & Key Learnings</h2>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs space-y-2">
                <p><strong>What I Learned:</strong> Gamification drives initial acquisition, but true long-term retention requires delivering tangible real-world mastery and social belonging.</p>
                <p><strong>Future Opportunities:</strong> Live AI conversation coaching during real phone calls and video meetings.</p>
              </div>
            </section>

          </article>
        )}

      </div>
    </div>
  );
};
