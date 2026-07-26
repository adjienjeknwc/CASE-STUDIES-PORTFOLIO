Created At: 2026-07-24T22:00:38Z
Completed At: 2026-07-24T22:00:38Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 368
Total Bytes: 21262
Showing lines 320 to 368
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
320:                   </tbody>
321:                 </table>
322:               </div>
323:             </section>
324:           </div>
325:         )}
326: 
327:         {/* RETAILPULSE CASE STUDY BODY */}
328:         {study.id === 'retailpulse' && (
329:           <div className="space-y-10 text-[#1a1a1a]">
330:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-6">
331:               <h2 className="text-sm font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
332:                 <Zap className="w-4 h-4 text-amber-600" /> 📌 QUICK FACTS
333:               </h2>
334:               <div className="overflow-x-auto">
335:                 <table className="neobrutalist-table text-xs">
336:                   <tbody>
337:                     <tr>
338:                       <td className="font-black bg-[#f7f7f3]">Product</td>
339:                       <td className="font-bold">RetailPulse — Pantry & Revenue Acceleration Platform</td>
340:                     </tr>
341:                     <tr>
342:                       <td className="font-black bg-[#f7f7f3]">Live Application</td>
343:                       <td>
344:                         <a href="https://retail-pulse-eta.vercel.app" target="_blank" rel="noreferrer" className="text-amber-600 font-black underline">
345:                           https://retail-pulse-eta.vercel.app 🚀
346:                         </a>
347:                       </td>
348:                     </tr>
349:                   </tbody>
350:                 </table>
351:               </div>
352:             </section>
353:           </div>
354:         )}
355: 
356:         {/* Fallback for other case studies */}
357:         {study.id !== 'swiggy' && study.id !== 'duolingo' && study.id !== 'makemytrip' && study.id !== 'dermalink' && study.id !== 'gridlock' && study.id !== 'sentinelscale' && study.id !== 'finstream' && study.id !== 'smartspend' && study.id !== 'cogniflow' && study.id !== 'retailpulse' && (
358:           <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 text-[#1a1a1a]">
359:             <h2 className="text-2xl font-black uppercase mb-4 border-b-3 border-[#1a1a1a] pb-3">Executive Summary</h2>
360:             <p className="text-base font-medium leading-relaxed">{study.summary}</p>
361:           </div>
362:         )}
363: 
364:       </div>
365:     </div>
366:   );
367: };
368: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
