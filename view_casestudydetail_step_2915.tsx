Created At: 2026-07-24T10:50:23Z
Completed At: 2026-07-24T10:50:23Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 725
Total Bytes: 52049
Showing lines 600 to 725
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
600:             {/* Section 7: Risks & Open Questions */}
601:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
602:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
603:                 <ShieldAlert className="w-6 h-6 text-emerald-600" />
604:                 7. Risks & Open Questions
605:               </h2>
606:               <div className="space-y-3 text-xs sm:text-sm font-medium text-slate-800">
607:                 <div className="p-3 bg-[#f7f7f3] border-2 border-[#1a1a1a]">
608:                   <strong>Risk:</strong> Users may not accurately predict their own free time (stated preference ≠ revealed behavior). <span className="text-emerald-700 font-bold">Mitigation:</span> Use the "re-prompt if not sticking" mechanism to course-correct.
609:                 </div>
610:                 <div className="p-3 bg-[#f7f7f3] border-2 border-[#1a1a1a]">
611:                   <strong>Risk:</strong> Adding a question during onboarding could increase drop-off before day 1. <span className="text-emerald-700 font-bold">Mitigation:</span> Place it after the first lesson, not before signup.
612:                 </div>
613:                 <div className="p-3 bg-[#fef08a] border-2 border-[#1a1a1a] text-slate-900 font-bold">
614:                   <strong>Open Question:</strong> Does H3 actually explain the biggest share of churn, or are H1/H2 bigger drivers? In an actual PM role, I'd want funnel data b
<truncated 4855 bytes>
lack text-sm uppercase text-[#1a1a1a]">Screen 1: Plain-Language Fare Details</h3>
693:                   </div>
694:                   <p className="text-xs text-slate-700 leading-relaxed font-medium">
695:                     Translates complex airline jargon (Baggage Allowance, Cabin vs Check-in, Web Check-in) into clear everyday English & Hindi with visual comparisons.
696:                   </p>
697:                 </div>
698: 
699:                 <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-3">
700:                   <div className="flex items-center gap-2">
701:                     <span className="w-3 h-3 bg-[#00DF89] border border-[#1a1a1a] rounded-full inline-block" />
702:                     <h3 className="font-black text-sm uppercase text-[#1a1a1a]">Screen 2: Airport Checklist Timeline</h3>
703:                   </div>
704:                   <p className="text-xs text-slate-700 leading-relaxed font-medium">
705:                     Provides a step-by-step countdown checklist starting 3 hours before flight (e.g. When to reach airport, Security Check, Boarding Pass rules).
706:                   </p>
707:                 </div>
708:               </div>
709:             </section>
710:           </div>
711:         )}
712: 
713:         {/* Fallback for other case studies */}
714:         {study.id !== 'swiggy' && study.id !== 'duolingo' && study.id !== 'makemytrip' && (
715:           <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 text-[#1a1a1a]">
716:             <h2 className="text-2xl font-black uppercase mb-4 border-b-3 border-[#1a1a1a] pb-3">Executive Summary</h2>
717:             <p className="text-base font-medium leading-relaxed">{study.summary}</p>
718:           </div>
719:         )}
720: 
721:       </div>
722:     </div>
723:   );
724: };
725: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
