Created At: 2026-07-24T10:50:19Z
Completed At: 2026-07-24T10:50:19Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 725
Total Bytes: 52049
Showing lines 450 to 545
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
450: 
451:             {/* Section 4: Proposed Solution: "Anchor Moments" */}
452:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
453:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
454:                 <Layers className="w-6 h-6 text-emerald-600" />
455:                 4. Proposed Solution: "Anchor Moments"
456:               </h2>
457:               <p className="text-sm font-medium leading-relaxed">
458:                 Instead of relying on generic push notifications ("Duo misses you!"), design a feature that helps new users <strong>attach their Duolingo habit to an existing daily routine</strong> — a well-established behavior-design principle (habit stacking).
459:               </p>
460: 
461:               {/* Core Mechanic Intro */}
462:               <div className="p-4 bg-[#f7f7f3] border-2 border-[#1a1a1a] cartoon-shadow font-mono text-xs font-bold text-slate-800">
463:                 Core prompt during onboarding (after day 1, once a user completes their first lesson):<br />
464:                 <span className="text-emerald-700 italic">"When do you usually have 5 minutes free? Right after you wake up, during your commute, or before bed?"</span>
465:               </div>
466: 
467:               {/* Screen 1 */}
468:               <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-6 cartoon-shadow space-y-3">
469:                 <div className="flex items-center gap-2">
4
<truncated 4502 bytes>
prompting to pick a different anchor if the first one isn't sticking).
519:                 </p>
520:                 <span className="font-black text-xs uppercase text-slate-600 block">Why this over alternatives I considered and rejected:</span>
521:                 <ul className="space-y-2 text-xs font-medium text-slate-800 list-disc pl-5">
522:                   <li><strong>More notifications — rejected:</strong> Notification fatigue already hurts retention; adding volume without relevance worsens uninstalls.</li>
523:                   <li><strong>Harder streak penalties — rejected:</strong> Punitive mechanics work for already-engaged users, not new users who haven't formed the habit yet.</li>
524:                   <li><strong>AI-personalized content — rejected for v1:</strong> High engineering cost, and doesn't address the root problem (users forgetting to open the app).</li>
525:                 </ul>
526:               </div>
527:             </section>
528: 
529:             {/* Section 5: Prioritization & Trade-offs */}
530:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-6">
531:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
532:                 <Rocket className="w-6 h-6 text-emerald-600" />
533:                 5. Prioritization & Trade-offs
534:               </h2>
535:               
536:               <div className="overflow-x-auto">
537:                 <table className="neobrutalist-table">
538:                   <thead>
539:                     <tr>
540:                       <th>Priority</th>
541:                       <th>Feature</th>
542:                       <th>Reasoning</th>
543:                     </tr>
544:                   </thead>
545:                   <tbody>
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
