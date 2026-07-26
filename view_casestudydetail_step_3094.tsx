Created At: 2026-07-24T22:00:06Z
Completed At: 2026-07-24T22:00:06Z
File Path: `file:///Users/aditi/Downloads/stitch_minimalist_product_strategy_portfolio/src/components/CaseStudyDetail.tsx`
Total Lines: 581
Total Bytes: 32812
Showing lines 380 to 415
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
380:                 &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;[Apache Kafka Broker + Zookeeper]<br />
381:                 &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──► Consumed by [Notification & Audit Service :8082]<br />
382:                 &nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──► Poison payloads → [loan-audit-stream.DLT (Dead Letter Queue)]
383:               </div>
384:             </section>
385: 
386:             {/* 5. Tech Stack Breakdown */}
387:             <section className="bg-white border-3 border-[#1a1a1a] cartoon-shadow p-8 space-y-4">
388:               <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 border-b-3 border-[#1a1a1a] pb-3">
389:                 <Server className="w-6 h-6 text-amber-600" />
390:                 5. Tech Stack Breakdown
391:               </h2>
392:               <div className="overflow-x-auto">
393:                 <table className="neobrutalist-table text-xs">
394:                   <thead>
395:                     <tr>
396:                       <th>Layer</th>
397:                       <th>Technologies</th>
398:                     </tr>
399:                   </thead>
400:                   <tbody>
401:                     <tr>
402:                       <td className="font-bold bg-[#f7f7f3]">Backend Engine</td>
403:                       <td>Java 21, Spring Boot 3.3.x (Web, JPA, AOP), Camunda 8 (Zeebe), Spring Kafka, Resilience4j, Maven</td>
404:                     </tr>
405:                     <tr>
406:                       <td className="font-bold bg-[#f7f7f3]">Frontend Control Tower</td>
407:                       <td>React.js, TypeScript, Tailwind CSS v4, Vite, Lucide Icons</td>
408:                     </tr>
409:                     <tr>
410:                       <td className="font-bold bg-[#f7f7f3]">Databases & Infra</td>
411:                       <td>PostgreSQL 16, Apache Kafka, Elasticsearch, Zookeeper, Docker Compose</td>
412:                     </tr>
413:                   </tbody>
414:                 </table>
415:               </div>
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
