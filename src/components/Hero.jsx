import React, { useState } from 'react';
import {
  Mail,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Building2,
  FileText,
  Radio,
  ExternalLink,
  Sparkles,
  Video,
  Layers,
  ShieldCheck,
  Activity,
  Home,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import CctvSimulator from './CctvSimulator';
import RentProofDemo from './RentProofDemo';

export default function Hero({ onOpenResume, isDark }) {
  const [copied, setCopied] = useState(false);
  const [activeDemo, setActiveDemo] = useState('cctv'); // 'cctv' | 'rentproof'

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pb-8 overflow-hidden">
      
      {/* Background Subtle Dot Pattern & Soft Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] pointer-events-none -z-10 subtle-dot-pattern opacity-60" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">
              Open to Software Engineering Roles (2026 Batch)
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-zinc-400 font-mono">
            <span>•</span>
            <span>GURUGRAM, HARYANA</span>
          </div>
        </div>

        {/* Hero Grid: Intro Left & Proper Profile Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 tracking-wider uppercase mb-1 block">
                FULL-STACK SOFTWARE ENGINEER
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                Ayushman Singh
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              Software Engineer Intern at{' '}
              <a
                href={personalInfo.company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-white font-semibold underline underline-offset-4 decoration-red-500/60 hover:decoration-red-500 transition-colors"
              >
                Genius Vision Digital (GVD)
              </a>
              . I engineer modern web systems using <strong className="text-slate-900 dark:text-zinc-200 font-semibold">React</strong> & <strong className="text-slate-900 dark:text-zinc-200 font-semibold">Next.js</strong>, design reliable RESTful APIs, and build low-latency video streaming pipelines with <strong className="text-slate-900 dark:text-zinc-200 font-semibold">RTSP & FFmpeg (HLS)</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white shadow-sm shadow-red-500/25 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 shadow-xs transition-all"
              >
                <FileText className="w-4 h-4 text-red-500" />
                <span>View Resume</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-mono bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 shadow-xs transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-zinc-800 shadow-xs transition-all"
                aria-label="GitHub"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-zinc-800 shadow-xs transition-all"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-zinc-800 shadow-xs transition-all"
                aria-label="Phone"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 border border-slate-200 dark:border-zinc-800 shadow-xs transition-all"
                aria-label="Email"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Proper World-Class Engineer Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#0c0f18] border border-slate-200/90 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
              
              {/* Card Profile Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/avatar.png"
                      alt={personalInfo.name}
                      className="w-13 h-13 rounded-2xl object-cover border-2 border-red-500 shadow-xs"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0c0f18]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                      SWE Intern @ GVD
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-500/20">
                  AVAILABLE
                </span>
              </div>

              {/* 4 Quantifiable Impact Stats Grid */}
              <div className="grid grid-cols-2 gap-3 py-5 border-b border-slate-100 dark:border-zinc-800 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800">
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white">10+</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Production Pages</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800">
                  <div className="text-xl font-extrabold text-red-600 dark:text-red-400">15+</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Next.js Modules</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800">
                  <div className="text-xl font-extrabold text-slate-900 dark:text-white">8+</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">REST Endpoints</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800">
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">&lt; 0.2s</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">Stream Latency</div>
                </div>
              </div>

              {/* Primary Tech Stack Chips */}
              <div className="py-4">
                <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block mb-2">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'RTSP/FFmpeg', 'Cloudinary', 'Java DSA'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-zinc-900 text-slate-800 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Quick Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-zinc-400 hover:text-red-500 flex items-center gap-1 font-semibold"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/ayushman1729</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Live Interactive Systems Showcase: CCTV vs RentProof Switcher */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <strong className="text-slate-900 dark:text-zinc-200 text-sm font-bold font-mono">
                INTERACTIVE SYSTEM ARCHITECTURE DEMOS:
              </strong>
            </div>

            {/* Toggle between CCTV Audit and RentProof */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono">
              <button
                onClick={() => setActiveDemo('cctv')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all font-semibold ${
                  activeDemo === 'cctv'
                    ? 'bg-red-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>1. E-Commerce CCTV Audit</span>
              </button>

              <button
                onClick={() => setActiveDemo('rentproof')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all font-semibold ${
                  activeDemo === 'rentproof'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>2. RentProof Inspection</span>
              </button>
            </div>
          </div>

          {/* Render chosen interactive demo */}
          {activeDemo === 'cctv' ? (
            <CctvSimulator isDark={isDark} />
          ) : (
            <RentProofDemo />
          )}
        </div>

      </div>
    </section>
  );
}
