Created At: 2026-07-24T21:58:52Z
Completed At: 2026-07-24T21:58:52Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 379
Total Bytes: 19491
Showing lines 20 to 50
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
20:           >
21:             <ArrowLeft className="w-4 h-4" />
22:             Back to Portfolio
23:           </button>
24:           
25:           <button
26:             onClick={onBack}
27:             className="w-10 h-10 bg-white text-[#1a1a1a] border-3 border-[#1a1a1a] cartoon-shadow flex items-center justify-center font-black hover:bg-[#00DF89] transition-colors cursor-pointer"
28:           >
29:             <X className="w-5 h-5" />
30:           </button>
31:         </div>
32: 
33:         {/* Header Card */}
34:         <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow-lg p-8 sm:p-10 mb-12 relative overflow-hidden">
35:           <div className="inline-block px-3 py-1 bg-[#00DF89] border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase tracking-wider mb-4 cartoon-shadow">
36:             {study.type}
37:           </div>
38:           <h1 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] tracking-tight uppercase mb-4 leading-tight">
39:             {study.title}
40:           </h1>
41:           <p className="text-base sm:text-lg text-slate-700 font-medium mb-6">
42:             {study.subtitle}
43:           </p>
44:           
45:           <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-4 border-t-2 border-[#1a1a1a] text-slate-800">
46:             <div><strong>Role:</strong> {study.role}</div>
47:             <div className="hidden sm:block">•</div>
48:             <div><strong>Focus Metric:</strong> <span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">{study.focusMetric}</span></div>
49:           </div>
50:         </div>
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
