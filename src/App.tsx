import React, { useState, useEffect } from 'react';
import { CASE_STUDIES, CaseStudy } from './data/projects';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { Navbar } from './components/Navbar';
import { ArrowRight, ArrowDown, Code2, Database, Brain, Mail, Sparkles, Layout, Cpu, Layers, Wrench, BarChart3, FileText, Users, Search, Target, DollarSign, Bot, Download, Award, Briefcase, Rocket, ExternalLink, MapPin, Zap, CheckCircle2, Linkedin, Github } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // IntersectionObserver to auto-update active Navbar tab as user scrolls
  useEffect(() => {
    if (selectedStudy) return;

    const sections = ['home', 'case-studies', 'experience', 'skills'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedStudy]);

  // Smooth scroll handler when a Nav button is clicked
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const yOffset = -80; // Account for sticky navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const categories = ['ALL', 'STRATEGY', 'GROWTH', '0-TO-1'];

  const filteredStudies = selectedCategory === 'ALL'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.category === selectedCategory);

  // Render detail view if a study card is active
  if (selectedStudy) {
    return <CaseStudyDetail study={selectedStudy} onBack={() => setSelectedStudy(null)} />;
  }

  // MAIN PORTFOLIO SINGLE PAGE WITH CONTINUOUS SCROLL
  return (
    <div className="min-h-screen bg-grid-pattern selection:bg-[#00DF89] text-[#1a1a1a]">
      
      {/* STICKY NAVBAR */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* 1. HERO SECTION */}
      <section id="home" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
          
          {/* Left Column: Dynamic Hero Typography & PM Canvas Flow */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top PM Role Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 bg-[#00DF89] border-2 border-[#1a1a1a] text-[#1a1a1a] text-xs font-black uppercase cartoon-shadow rotate-[-1deg]">
                ASSOCIATE PRODUCT MANAGER
              </span>
              <span className="text-xs font-mono font-bold text-slate-700 bg-white border-2 border-[#1a1a1a] px-3 py-1 cartoon-shadow">
                PM • BUSINESS ANALYSIS • UX • SYSTEMS
              </span>
            </div>
            
            {/* Dynamic Asymmetric Headline Composition */}
            <div className="space-y-3 pt-2">
              <div className="text-6xl sm:text-8xl font-black text-[#1a1a1a] tracking-tighter leading-none uppercase">
                I BUILD<br />
                <span className="text-6xl sm:text-8xl text-[#1a1a1a] underline decoration-[#00DF89] decoration-8 underline-offset-8">
                  PRODUCTS
                </span>
              </div>
              
              {/* Dynamic Value Conversion Flow */}
              <div className="flex flex-wrap items-center gap-3 pt-4 font-mono font-black text-sm text-[#1a1a1a]">
                <span className="text-slate-500 font-serif italic text-base">that turn</span>
                <span className="px-3 py-1.5 bg-rose-200 border-2 border-[#1a1a1a] cartoon-shadow uppercase">
                  USER PAIN <span className="text-rose-600">↓</span>
                </span>
                <span className="text-slate-500 font-serif italic text-base">INTO</span>
                <span className="px-3 py-1.5 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow uppercase">
                  BUSINESS IMPACT <span className="text-[#1a1a1a]">✨</span>
                </span>
              </div>
            </div>

            {/* Natural, Conversational PM Bio Copy */}
            <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed max-w-2xl pt-2">
              Product Management student with experience translating user problems into scalable digital solutions. I combine business analysis, product strategy, UX thinking, and engineering to ship products that improve customer experience and business metrics.
            </p>
            
            {/* PM Skill Chips with Icons */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3.5 py-1.5 bg-[#00DF89] border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono font-bold text-xs cartoon-shadow hover:scale-105 transition-transform cursor-pointer">
                ⚡ Strategy
              </span>
              <span className="px-3.5 py-1.5 bg-sky-200 border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono font-bold text-xs cartoon-shadow hover:scale-105 transition-transform cursor-pointer">
                🔍 Research
              </span>
              <span className="px-3.5 py-1.5 bg-amber-200 border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono font-bold text-xs cartoon-shadow hover:scale-105 transition-transform cursor-pointer">
                📊 Analytics
              </span>
              <span className="px-3.5 py-1.5 bg-purple-200 border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono font-bold text-xs cartoon-shadow hover:scale-105 transition-transform cursor-pointer">
                🧩 Systems Thinking
              </span>
              <span className="px-3.5 py-1.5 bg-rose-200 border-2 border-[#1a1a1a] text-[#1a1a1a] font-mono font-bold text-xs cartoon-shadow hover:scale-105 transition-transform cursor-pointer">
                🚀 Product Delivery
              </span>
            </div>

            {/* PM Execution Flow Canvas */}
            <div className="pt-6">
              <div className="text-xs font-mono font-black uppercase text-slate-500 mb-3 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-[#00DF89]" /> PRODUCT MANAGEMENT CANVAS
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                <div className="p-2.5 bg-white border-2 border-[#1a1a1a] cartoon-shadow text-center">
                  <div className="text-[9px] font-mono font-black text-slate-500">STEP 01</div>
                  <div className="text-xs font-black uppercase text-rose-600">PROBLEM</div>
                </div>
                <div className="p-2.5 bg-white border-2 border-[#1a1a1a] cartoon-shadow text-center">
                  <div className="text-[9px] font-mono font-black text-slate-500">STEP 02</div>
                  <div className="text-xs font-black uppercase text-sky-600">RESEARCH</div>
                </div>
                <div className="p-2.5 bg-white border-2 border-[#1a1a1a] cartoon-shadow text-center">
                  <div className="text-[9px] font-mono font-black text-slate-500">STEP 03</div>
                  <div className="text-xs font-black uppercase text-amber-600">IDEATE</div>
                </div>
                <div className="p-2.5 bg-white border-2 border-[#1a1a1a] cartoon-shadow text-center">
                  <div className="text-[9px] font-mono font-black text-slate-500">STEP 04</div>
                  <div className="text-xs font-black uppercase text-purple-600">BUILD</div>
                </div>
                <div className="p-2.5 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow text-center">
                  <div className="text-[9px] font-mono font-black text-[#1a1a1a]">STEP 05</div>
                  <div className="text-xs font-black uppercase text-[#1a1a1a]">SHIP</div>
                </div>
                <div className="p-2.5 bg-white border-2 border-[#1a1a1a] cartoon-shadow text-center">
                  <div className="text-[9px] font-mono font-black text-slate-500">STEP 06</div>
                  <div className="text-xs font-black uppercase text-emerald-600">MEASURE</div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Right Column: Pinned PM Identity Card */}
          <div className="lg:col-span-4 relative">
            <div className="tape-strip tape-strip-yellow hidden sm:block" />

            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow-xl p-6 sm:p-8 space-y-6 relative rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Memoji Avatar Photo Box */}
              <div className="flex justify-center">
                <div className="p-3 bg-[#f7f7f3] border-3 border-[#1a1a1a] cartoon-shadow rotate-[-2deg]">
                  <img 
                    src="/avatar.png" 
                    alt="Aditi Verma Memoji" 
                    className="w-36 sm:w-44 h-auto object-contain"
                  />
                </div>
              </div>

              {/* Identity Info */}
              <div className="text-center space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a1a1a] uppercase tracking-tight">
                  Aditi Verma
                </h2>
                <div className="inline-block px-3 py-1 bg-[#00DF89] border-2 border-[#1a1a1a] text-[#1a1a1a] font-black text-xs uppercase cartoon-shadow">
                  Associate Product Manager
                </div>
                <div className="flex items-center justify-center gap-1 text-xs font-mono font-bold text-slate-600 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>India • Available for Roles</span>
                </div>
              </div>

              {/* Quick Action Links */}
              <div className="pt-2">
                <div className="grid grid-cols-3 gap-1.5">
                  <a
                    href="https://www.linkedin.com/in/aditi-verma-8b8220287"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] cartoon-shadow font-black text-[10px] uppercase text-center hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <Linkedin className="w-3 h-3 text-[#0077b5]" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/adjienjeknwc"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] cartoon-shadow font-black text-[10px] uppercase text-center hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <Github className="w-3 h-3 text-[#1a1a1a]" /> GitHub
                  </a>
                  <a
                    href="mailto:aditivermauk@gmail.com"
                    className="py-2 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] cartoon-shadow font-black text-[10px] uppercase text-center hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-rose-500" /> Email
                  </a>
                </div>
              </div>

              {/* Sticky Note Badge */}
              <div className="bg-[#fef08a] border-2 border-[#1a1a1a] p-3 text-xs font-bold text-slate-800 rotate-[-2deg] cartoon-shadow text-center">
                "Turning complex user pain points into simple, high-performing product flows."
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 2. FEATURED CASE STUDIES */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-3 border-[#1a1a1a] scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="bg-[#00DF89] border-2 border-[#1a1a1a] px-3 py-1 text-xs font-black uppercase cartoon-shadow">
              Featured Work
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight mt-3 text-[#1a1a1a]">
              Product & Strategy Case Studies
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-mono font-black border-2 border-[#1a1a1a] transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00DF89] text-[#1a1a1a] cartoon-shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Case Studies Grid (TEXT & METRICS ONLY - NO IMAGES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-8 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 border-2 border-[#1a1a1a] ${study.badgeColor} cartoon-shadow`}>
                    {study.type}
                  </span>
                  <span className="text-[9px] font-mono font-bold bg-[#00DF89] text-[#1a1a1a] border border-[#1a1a1a] px-2 py-0.5">
                    {study.focusMetric}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#1a1a1a] uppercase tracking-tight mb-3 hover:text-emerald-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-xs font-medium text-slate-600 mb-6 leading-relaxed">
                  {study.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-0.5 text-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t-2 border-[#1a1a1a] text-xs font-black uppercase text-[#1a1a1a]">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 PROFESSIONAL EXPERIENCE SECTION */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-3 border-[#1a1a1a] scroll-mt-24">
        <div className="mb-8">
          <span className="bg-[#00DF89] border-2 border-[#1a1a1a] px-3.5 py-1 text-xs font-black uppercase cartoon-shadow">
            Enterprise Internship
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-3 text-[#1a1a1a]">
            Professional Experience
          </h2>
          <p className="text-sm font-medium text-slate-600 mt-1">
            Hands-on technology consulting, LLM product shipping, functional spec writing, and Agile delivery.
          </p>
        </div>

        <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow-xl p-8 sm:p-10 space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-3 border-[#1a1a1a]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-black text-[#00DF89] border-2 border-[#1a1a1a] font-mono font-black text-xs uppercase cartoon-shadow">
                  May 2026 – Jul 2026
                </span>
                <span className="px-3 py-1 bg-[#00DF89] text-[#1a1a1a] border-2 border-[#1a1a1a] font-black text-xs uppercase cartoon-shadow flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> [Live] Shipped Production Product
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#1a1a1a] tracking-tight">
                AI Business Analyst Intern — Insurance Domain Technology Consulting
              </h3>
              <p className="text-base font-bold text-slate-800 mt-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-600" />
                <span>EY (Ernst & Young Services Pvt. Ltd.)</span>
              </p>
            </div>
          </div>

          {/* Bullet Points Grid / List */}
          <div className="space-y-4 pt-2">
            
            <div className="p-5 bg-[#f7f7f3] border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-emerald-600 shrink-0" />
                <h4 className="font-black text-sm uppercase text-[#1a1a1a]">
                  Shipped an LLM-Powered Product in Production (15m ➔ &lt;5s Workflow Compression)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pl-7">
                Designed and integrated a 3-agent Google Gemini pipeline (Business Analyst agent ➔ Product Designer agent ➔ Compliance QA agent) into the Betacare Insurance Portal — took the feature from prompt design to live, deployed tool, compressing a 15-minute manual broker workflow to <strong>under 5 seconds</strong>.
              </p>
            </div>

            <div className="p-5 bg-[#f7f7f3] border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                <h4 className="font-black text-sm uppercase text-[#1a1a1a]">
                  Solved Hard Production Constraint End-to-End (&lt;2s Dual-Mode Execution Engine)
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pl-7">
                Identified Vercel’s 10-second serverless timeout as a blocking issue; independently scoped, specced, and shipped a Dual-Mode Execution Engine (Python CrewAI subprocess in dev / Node.js Gemini proxy in production), delivering AI responses in <strong>under 2 seconds</strong> without changing the user-facing spec.
              </p>
            </div>

            <div className="p-5 bg-[#f7f7f3] border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-600 shrink-0" />
                <h4 className="font-black text-sm uppercase text-[#1a1a1a]">
                  Authored Developer-Ready Functional Specs Across 3 Stakeholder Groups
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pl-7">
                Authored BRDs, FSDs, user stories, and acceptance criteria clear enough to bridge business and engineering — translating ambiguous insurance workflows into testable requirements across 3 stakeholder groups.
              </p>
            </div>

            <div className="p-5 bg-[#f7f7f3] border-2 border-[#1a1a1a] cartoon-shadow space-y-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600 shrink-0" />
                <h4 className="font-black text-sm uppercase text-[#1a1a1a]">
                  Agile Backlog Ownership & Senior Leadership Strategic Recommendations
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pl-7">
                Managed Agile/Jira backlog end-to-end and conducted competitive benchmarking and market analysis using Excel for client-facing strategic recommendations to senior leadership.
              </p>
            </div>

          </div>

          {/* Tech & Skills Used Badges */}
          <div className="pt-4 border-t-2 border-[#1a1a1a] flex flex-wrap gap-2 items-center">
            <span className="text-xs font-black uppercase text-slate-600 mr-2">Key Skills & Tech:</span>
            <span className="text-[10px] font-mono font-bold bg-[#00DF89] text-[#1a1a1a] border border-[#1a1a1a] px-2.5 py-1 cartoon-shadow">
              Google Gemini API (3-Agent Pipeline)
            </span>
            <span className="text-[10px] font-mono font-bold bg-amber-300 text-[#1a1a1a] border border-[#1a1a1a] px-2.5 py-1 cartoon-shadow">
              Dual-Mode Subprocess / Node.js Proxy
            </span>
            <span className="text-[10px] font-mono font-bold bg-sky-300 text-[#1a1a1a] border border-[#1a1a1a] px-2.5 py-1 cartoon-shadow">
              BRD & FSD Specs
            </span>
            <span className="text-[10px] font-mono font-bold bg-rose-300 text-[#1a1a1a] border border-[#1a1a1a] px-2.5 py-1 cartoon-shadow">
              Jira & Agile Backlog
            </span>
            <span className="text-[10px] font-mono font-bold bg-purple-300 text-[#1a1a1a] border border-[#1a1a1a] px-2.5 py-1 cartoon-shadow">
              Excel Market Benchmarking
            </span>
          </div>

        </div>
      </section>

      {/* 3. CORE COMPETENCIES (FRESHER APM & BA SKILLSET) */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-3 border-[#1a1a1a] scroll-mt-24">
        <div className="mb-10">
          <span className="bg-[#00DF89] border-2 border-[#1a1a1a] px-3.5 py-1 text-xs font-black uppercase cartoon-shadow">
            APM & Business Analyst Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-3 text-[#1a1a1a]">
            Fresher Product Management & Business Analysis Matrix
          </h2>
          <p className="text-sm font-medium text-slate-600 mt-1">
            Industry-standard frameworks, requirement engineering, prioritization models, data querying, and product discovery skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 01 // CORE BA */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  01 // CORE BA
                </span>
                <FileText className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">BUSINESS ANALYSIS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Converting stakeholder needs into structured requirements & specs.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Requirement Gathering</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">BRD & FRD</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">User Stories & AC</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Process Mapping (As-Is/To-Be)</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Gap Analysis</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Root Cause Analysis</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Stakeholder Management</span>
              </div>
            </div>

            {/* 02 // PRODUCT STRATEGY */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-sky-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  02 // PRODUCT STRATEGY
                </span>
                <Target className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">PRODUCT MANAGEMENT</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Driving product vision, customer discovery, and 0-to-1 lifecycle.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Product Thinking</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Customer Discovery</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">MVP Definition</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Product Lifecycle</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Roadmapping</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Go-to-Market Basics</span>
              </div>
            </div>

            {/* 03 // FRAMEWORKS */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-emerald-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  03 // FRAMEWORKS
                </span>
                <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">PRIORITIZATION & FRAMEWORKS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Industry-standard scoring and analytical decision frameworks.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#00DF89] border border-[#1a1a1a] px-2 py-1 text-[#1a1a1a]">RICE Scoring</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">MoSCoW</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Kano Model</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">HEART Metrics</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">AARRR Funnel</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">North Star Metric</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Jobs To Be Done (JTBD)</span>
              </div>
            </div>

            {/* 04 // SQL & DATA */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-purple-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  04 // SQL & DATA
                </span>
                <Database className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">SQL DATABASE QUERYING</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Relational data querying, complex aggregations, and subqueries.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">SELECT & WHERE</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">GROUP BY & HAVING</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">JOINs (Inner/Outer)</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">CASE Statements</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Subqueries & CTEs</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Window Functions</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">LeetCode & StrataScratch</span>
              </div>
            </div>

            {/* 05 // SPREADSHEETS */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-amber-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  05 // SPREADSHEETS
                </span>
                <BarChart3 className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">EXCEL & FINANCIAL MODELING</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Mastery over data lookup, pivot tables, and dashboard modeling.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Pivot Tables</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">VLOOKUP / XLOOKUP</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">INDEX MATCH</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">SUMIFS & COUNTIFS</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Conditional Formatting</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Power Query</span>
              </div>
            </div>

            {/* 06 // VISUALIZATION */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-rose-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  06 // VISUALIZATION
                </span>
                <Layers className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">DATA VISUALIZATION</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Building executive dashboards and funnel trend visualizations.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Power BI</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Tableau</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Looker Studio</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">KPI Dashboards</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Funnel Charts</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Trend Analysis</span>
              </div>
            </div>

            {/* 07 // AGILE SCRUM */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  07 // AGILE SCRUM
                </span>
                <Users className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">AGILE & SPRINT DELIVERY</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Managing sprint ceremonies, backlogs, and story point velocity.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Sprint Planning</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Product Backlog Refinement</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Daily Standup & Retros</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Definition of Done (DoD)</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Story Points & Velocity</span>
              </div>
            </div>

            {/* 08 // JIRA TOOLING */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-emerald-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  08 // JIRA TOOLING
                </span>
                <Wrench className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">JIRA & CONFLUENCE</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Creating Epics, User Stories, bug tracking, and Confluence docs.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Creating Epics & Stories</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Sprint Boards</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Bug Tracking</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Confluence Specs</span>
              </div>
            </div>

            {/* 09 // WIREFRAMING */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-indigo-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  09 // WIREFRAMING
                </span>
                <Layout className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">WIREFRAMING & PROTOTYPING</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Designing low-fidelity wireframes, user flows, and interactive mockups.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Figma</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Balsamiq & Miro</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">FigJam</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Low-Fidelity Wireframes</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Clickable Prototypes</span>
              </div>
            </div>

            {/* 10 // UX BASICS */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-rose-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  10 // UX BASICS
                </span>
                <Users className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">UX & USER CENTRICITY</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">User personas, pain point discovery, accessibility, and design thinking.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">User Personas</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">User Interviews</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Heuristic Evaluation</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Accessibility Basics (a11y)</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Design Thinking</span>
              </div>
            </div>

            {/* 11 // ANALYTICS */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  11 // ANALYTICS
                </span>
                <BarChart3 className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">PRODUCT ANALYTICS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">DAU/WAU/MAU, churn analysis, retention cohorts, and A/B testing.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">DAU / WAU / MAU</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Retention & Churn</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Conversion & Activation Rate</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Funnel & Cohort Analysis</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">A/B Testing Basics</span>
              </div>
            </div>

            {/* 12 // API TECH */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-sky-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  12 // API TECH
                </span>
                <Cpu className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">APIS & TECH LITERACY</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">REST APIs, JSON payloads, authentication, and system design basics.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">REST APIs & JSON</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">HTTP Methods (GET/POST)</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Authentication (OAuth/JWT)</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">System Design Basics</span>
              </div>
            </div>

            {/* 13 // DOCUMENTATION */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-emerald-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  13 // DOCUMENTATION
                </span>
                <FileText className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">DOCUMENTATION SPECS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Writing high-clarity PRDs, BRDs, FRDs, release notes, and RTM.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">PRDs & Product Specs</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">BRDs & FRDs</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">User Stories & Release Notes</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Traceability Matrix (RTM)</span>
              </div>
            </div>

            {/* 14 // COMMUNICATION */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-amber-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  14 // COMMUNICATION
                </span>
                <Users className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">COMMUNICATION & ALIGNMENT</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Executive summaries, storytelling, requirement clarification, client comms.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Presentation Skills</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Executive Summaries</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Product Storytelling</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Requirement Clarification</span>
              </div>
            </div>

            {/* 15 // MARKET RESEARCH */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-purple-300 px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  15 // MARKET RESEARCH
                </span>
                <Search className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">MARKET & COMPETITOR ANALYSIS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">SWOT analysis, feature comparison matrices, pricing, and industry research.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">SWOT Analysis</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Competitor Benchmarking</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Feature Matrix Comparison</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Pricing & Industry Research</span>
              </div>
            </div>

            {/* 16 // AI WORKFLOWS */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  16 // AI WORKFLOWS
                </span>
                <Bot className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">AI TOOLS & PROMPTING</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Leveraging LLMs for PRD drafting, SQL assistance, research, and coding.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#00DF89] border border-[#1a1a1a] px-2 py-1 text-[#1a1a1a]">ChatGPT & Claude</span>
                <span className="text-[10px] font-mono font-bold bg-[#00DF89] border border-[#1a1a1a] px-2 py-1 text-[#1a1a1a]">Gemini & Notion AI</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">GitHub Copilot</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">PRD & Story Generation</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">SQL & Query Assistance</span>
              </div>
            </div>

            {/* 17 // SDLC & CODING */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  17 // SDLC & CODING
                </span>
                <Code2 className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">SDLC & TECH FUNDAMENTALS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Software development lifecycle, Agile, Scrum, Kanban, QA, and UAT.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Agile, Scrum & Kanban</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">DevOps & CI/CD Concepts</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">QA & UAT Process</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Variables, Loops & APIs</span>
              </div>
            </div>

            {/* 18 // BUSINESS FUNDAMENTALS */}
            <div className="bg-white border-3 border-[#1a1a1a] cartoon-shadow cartoon-shadow-hover p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-black uppercase bg-[#00DF89] px-2 py-0.5 border border-[#1a1a1a] cartoon-shadow">
                  18 // BUSINESS FUNDAMENTALS
                </span>
                <DollarSign className="w-4 h-4 text-[#1a1a1a]" />
              </div>
              <h3 className="font-black text-lg uppercase text-[#1a1a1a] mb-2">BUSINESS FUNDAMENTALS</h3>
              <p className="text-xs text-slate-600 font-medium mb-4">Revenue models, unit economics, ROI, TAM/SAM/SOM, pricing strategies.</p>
              
              <div className="flex flex-wrap gap-1.5">
                <span className="text-[10px] font-mono font-bold bg-[#00DF89] border border-[#1a1a1a] px-2 py-1 text-[#1a1a1a]">Revenue & Profit Models</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Unit Economics & ROI</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">TAM, SAM, SOM Sizing</span>
                <span className="text-[10px] font-mono font-bold bg-[#f7f7f3] border border-[#1a1a1a] px-2 py-1">Pricing Strategies</span>
              </div>
            </div>

          </div>
      </section>

      {/* Footer Copyright */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-3 border-[#1a1a1a] text-center text-xs font-mono font-black text-slate-500">
        ADITI VERMA © 2026 • ASSOCIATE PRODUCT MANAGER PORTFOLIO
      </footer>

    </div>
  );
}
