Created At: 2026-07-24T22:00:04Z
Completed At: 2026-07-24T22:00:04Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 581
Total Bytes: 32812
Showing lines 310 to 345
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
310:                   <span className="w-3 h-3 rounded-full bg-amber-500" />
311:                   <h3 className="font-black text-sm uppercase text-amber-900">🟡 Scenario B — Kafka Dead Letter Queue (DLQ) Recovery</h3>
312:                 </div>
313:                 <p className="text-xs text-slate-800 font-medium leading-relaxed">
314:                   Submitting a transaction with customer Account ID <code className="bg-amber-200 px-1">poison-pill</code> triggers a serialization exception. The serializer aspect intercepts the payload and routes it to <code className="bg-amber-200 px-1">loan-audit-stream.DLT</code> topic, safely committing Kafka offset without halting consumer processing threads.
315:                 </p>
316:               </div>
317:             </section>
318: 
319:             {/* 3. Microservices Directory */}
320:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
321:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
322:                 <LayersIcon className="w-6 h-6 text-amber-600" />
323:                 3. Microservices Directory
324:               </h2>
325:               <div className="overflow-x-auto">
326:                 <table className="neobrutalist-table text-xs">
327:                   <thead>
328:                     <tr>
329:                       <th>Service</th>
330:                       <th>Port</th>
331:                       <th>Responsibility</th>
332:                     </tr>
333:                   </thead>
334:                   <tbody>
335:                     <tr>
336:                       <td className="font-bold">🚪 api-gateway</td>
337:                       <td>8080</td>
338:                       <td>Routes external requests to backing microservice modules</td>
339:                     </tr>
340:                     <tr>
341:                       <td className="font-bold">👤 account-management-service</td>
342:                       <td>8083</td>
343:                       <td>Manages account balances & KYC status (PostgreSQL)</td>
344:                     </tr>
345:                     <tr>
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
