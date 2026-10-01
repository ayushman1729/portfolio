import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Briefcase, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const coreStrengths = [
    "Modern React 19 / Next.js Component Architecture",
    "High-Performance RESTful API Engineering with Postman & Express",
    "Real-time Video Ingestion (RTSP Streams to browser HLS via FFmpeg)",
    "Efficient Database Modeling with MongoDB & Mongoose Indexing",
    "State Management with TanStack Query (React Query) & Redux Toolkit",
    "WordPress to Modern JavaScript Full-Stack Migration & SEO Boost"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Scalable Systems with Seamless User Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a dedicated <strong className="text-white font-semibold">Full-Stack Software Engineer</strong> based in Gurugram, India. Currently working as an intern at <strong className="text-cyan-400 font-semibold">Genius Vision Digital (GVD)</strong>, I specialize in engineering responsive modern frontends and resilient backend architectures.
            </p>
            <p className="text-slate-400">
              My hands-on experience spans developing enterprise web applications using 
              <strong className="text-slate-200"> React.js, Next.js, Node.js, and MongoDB</strong>. At GVD, I have spearheaded the migration of legacy web systems into modular Next.js platforms, engineered 8+ RESTful APIs, and built low-latency video streaming pipelines connecting RTSP CCTV feeds with browser HLS video players.
            </p>
            <p className="text-slate-400">
              I believe in clean, maintainable architecture, structured state management with TanStack Query, and designing solutions that directly solve business disputes and optimize user flows.
            </p>

            {/* Core Strengths Checklist */}
            <div className="pt-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Core Competencies & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {coreStrengths.map((strength, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Quick Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    Education
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {personalInfo.education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300 pl-1">
                <p className="font-medium text-white">
                  {personalInfo.education.institution}
                </p>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{personalInfo.education.location}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <span>{personalInfo.education.period}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 font-medium">
                    {personalInfo.education.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Current Position Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-purple-500/40 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Current Engagement
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Software Engineer Intern
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-300 pl-1">
                <p className="font-medium text-white">Genius Vision Digital (GVD)</p>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>Gurugram, Haryana</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <span>Jul 2026 – Present</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    Active Production Role
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
