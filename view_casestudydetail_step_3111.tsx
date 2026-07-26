Created At: 2026-07-24T22:00:34Z
Completed At: 2026-07-24T22:00:35Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 368
Total Bytes: 21262
Showing lines 50 to 120
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
50:             )}
51:           </div>
52: 
53:           <h1 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] tracking-tight uppercase mb-4 leading-tight">
54:             {study.title}
55:           </h1>
56:           <p className="text-base sm:text-lg text-slate-700 font-medium mb-6">
57:             {study.subtitle}
58:           </p>
59:           
60:           <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-4 border-t-2 border-[#1a1a1a] text-slate-800">
61:             <div><strong>Role:</strong> {study.role}</div>
62:             <div className="hidden sm:block">•</div>
63:             <div><strong>Focus Metric:</strong> <span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">{study.focusMetric}</span></div>
64:           </div>
65:         </div>
66: 
67:         {/* SENTINELSCALE CASE STUDY BODY */}
68:         {study.id === 'sentinelscale' && (
69:           <div className="space-y-10 text-[#1a1a1a]">
70:             
71:             {/* Quick Facts Table */}
72:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
73:               <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
74:                 <Zap className="w-4 h-4 text-purple-600" /> 📌 QUICK FACTS
75:               </h2>
76:               <div className="overflow-x-auto">
77:                 <table className="neobrutalist-table text-xs">
78:                   <tbody>
79:                     <tr>
80:                 
<truncated 1037 bytes>
ale.git 🚀
96:                         </a>
97:                       </td>
98:                     </tr>
99:                     <tr>
100:                       <td className="font-black bg-[#f7f7f3]">Tech Stack</td>
101:                       <td>Go, Python, Next.js, Apache Kafka, PostgreSQL 16 + pgvector, ONNX Runtime, Gemini 2.5, D3.js, Docker</td>
102:                     </tr>
103:                     <tr>
104:                       <td className="font-black bg-[#f7f7f3]">Status</td>
105:                       <td><span className="bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] font-bold">Functional MVP & One-Click Codespaces Sandbox</span></td>
106:                     </tr>
107:                   </tbody>
108:                 </table>
109:               </div>
110:             </section>
111: 
112:             {/* 1. Overview */}
113:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
114:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
115:                 <Shield className="w-6 h-6 text-purple-600" />
116:                 1. Overview & System Vision
117:               </h2>
118:               <p className="text-sm sm:text-base leading-relaxed font-medium">
119:                 SentinelScale is a distributed API gatekeeper and telemetry observability engine built to protect and monitor API traffic in real time. It pairs a sub-5ms Go reverse-proxy edge layer with an adaptive, three-tier AI threat classification pipeline — from lightweight regex checks at the edge, to local ONNX transformer inference, up to a Gemini-powered deep semantic scan for high-risk payloads. Visualized live through a Next.js console with real-time stats and a D3-powered anomaly scatterplot.
120:               </p>
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
