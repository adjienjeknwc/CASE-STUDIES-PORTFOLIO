Created At: 2026-07-24T10:47:11Z
Completed At: 2026-07-24T10:47:11Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 301
Total Bytes: 17800
Showing lines 50 to 110
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
50:         </div>
51: 
52:         {/* 1. SWIGGY CASE STUDY BODY */}
53:         {study.id === 'swiggy' && (
54:           <div className="space-y-10 text-[#1a1a1a]">
55:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8">
56:               <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
57:                 <AlertTriangle className="w-6 h-6 text-amber-500" />
58:                 1. The Problem
59:               </h2>
60:               <p className="text-sm sm:text-base leading-relaxed mb-6 font-medium">
61:                 Walk into any mid-sized office building around 1 PM in any Indian city, and you'll likely see 3-4 Swiggy delivery riders arriving within 20 minutes of each other, each carrying a single order for a different employee on a different floor of the same building.
62:               </p>
63:               
64:               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
65:                 <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-4 cartoon-shadow">
66:                   <span className="font-black text-xs uppercase text-amber-600 block mb-1">Platform Impact</span>
67:                   <p className="text-xs text-slate-700">Multiple riders making near-identical trips creates redundant delivery capacity and fuel costs.</p>
68:                 </div>
69:                 <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-4 cartoon-shadow">
70:                   <span className="f
<truncated 1063 bytes>
 Flow Breakdown
84:               </h2>
85:               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
86:                 <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-3">
87:                   <div className="flex items-center gap-2">
88:                     <span className="w-3 h-3 bg-[#00DF89] border border-[#1a1a1a] rounded-full inline-block" />
89:                     <h3 className="font-black text-sm uppercase text-[#1a1a1a]">Screen A: Shared Order Together Lobby</h3>
90:                   </div>
91:                   <p className="text-xs text-slate-700 leading-relaxed font-medium">
92:                     Host initiates an "Order Together" session from restaurant cart. Generates a unique 10-minute lobby countdown and direct WhatsApp shareable invite link for co-workers on the same floor.
93:                   </p>
94:                 </div>
95: 
96:                 <div className="bg-[#f7f7f3] border-2 border-[#1a1a1a] p-5 cartoon-shadow space-y-3">
97:                   <div className="flex items-center gap-2">
98:                     <span className="w-3 h-3 bg-amber-400 border border-[#1a1a1a] rounded-full inline-block" />
99:                     <h3 className="font-black text-sm uppercase text-[#1a1a1a]">Screen B: Itemized Checkout & Individual Payment</h3>
100:                   </div>
101:                   <p className="text-xs text-slate-700 leading-relaxed font-medium">
102:                     Each participant adds their own items to the shared cart and pays their individual itemized portion via UPI. The system triggers unified dispatch once all items are confirmed.
103:                   </p>
104:                 </div>
105:               </div>
106:             </section>
107:           </div>
108:         )}
109: 
110:         {/* 2. DUOLINGO CASE STUDY BODY */}
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
