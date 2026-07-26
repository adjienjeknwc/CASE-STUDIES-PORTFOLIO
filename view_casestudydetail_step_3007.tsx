Created At: 2026-07-24T21:54:45Z
Completed At: 2026-07-24T21:54:45Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 1430
Total Bytes: 99553
Showing lines 1350 to 1430
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
1350:                     </tr>
1351:                     <tr>
1352:                       <td className="font-bold">AI misclassification of concerns</td>
1353:                       <td className="font-bold">Medium</td>
1354:                       <td>Pair output with confidence indicators & disclaimers.</td>
1355:                     </tr>
1356:                   </tbody>
1357:                 </table>
1358:               </div>
1359:             </section>
1360: 
1361:             {/* 14. Roadmap */}
1362:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
1363:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
1364:                 <Rocket className="w-6 h-6 text-purple-600" />
1365:                 14. Roadmap — What I'd Prioritize Next
1366:               </h2>
1367:               <div className="overflow-x-auto">
1368:                 <table className="neobrutalist-table text-xs">
1369:                   <thead>
1370:                     <tr>
1371:                       <th>Priority</th>
1372:                       <th>Initiative</th>
1373:                       <th>Reasoning</th>
1374:                     </tr>
1375:                   </thead>
1376:                   <tbody>
1377:                     <tr>
1378:                       <td className="font-bold text-[#00DF89] bg-black px-3">P0</td>
1379:                       <td className="font-bold">Backend proxy for Gemini API key</td>
138
<truncated 1129 bytes>
:                     </tr>
1397:                   </tbody>
1398:                 </table>
1399:               </div>
1400:             </section>
1401: 
1402:             {/* 15. Key Takeaways */}
1403:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
1404:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
1405:                 <CheckCircle2 className="w-6 h-6 text-purple-600" />
1406:                 15. Key Takeaways
1407:               </h2>
1408:               <ul className="space-y-2 text-xs sm:text-sm font-bold text-slate-800 list-disc pl-5">
1409:                 <li>Dermalink differentiates on <strong>brand-agnostic positioning</strong> rather than selling a proprietary DTC formula.</li>
1410:                 <li><strong>Client-side eye redaction</strong> is strong privacy thinking that converts legal liability into a trust feature.</li>
1411:                 <li>Key pre-launch fix is <strong>trust infrastructure</strong>: backend API proxy & regulated health claim copy adjustment.</li>
1412:               </ul>
1413:             </section>
1414: 
1415:           </div>
1416:         )}
1417: 
1418:         {/* Fallback for other case studies */}
1419:         {study.id !== 'swiggy' && study.id !== 'duolingo' && study.id !== 'makemytrip' && study.id !== 'dermalink' && (
1420:           <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 text-[#1a1a1a]">
1421:             <h2 className="text-2xl font-black uppercase mb-4 border-b-3 border-[#1a1a1a] pb-3">Executive Summary</h2>
1422:             <p className="text-base font-medium leading-relaxed">{study.summary}</p>
1423:           </div>
1424:         )}
1425: 
1426:       </div>
1427:     </div>
1428:   );
1429: };
1430: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
