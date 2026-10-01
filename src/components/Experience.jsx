import React from 'react';
import { experience } from '../data/portfolioData';
import { Building2, Calendar, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Capsule Container */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0f18] border border-zinc-200/80 dark:border-zinc-800 shadow-xl dark:shadow-2xl shadow-zinc-200/50 dark:shadow-black/60 relative overflow-hidden transition-colors">
          
          {/* Section Marker */}
          <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-1 flex items-center gap-2">
                <span>02 // PRODUCTION WORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Work Experience
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-500 hidden sm:block">
              GENIUS VISION DIGITAL • GURUGRAM
            </div>
          </div>

          {/* Experience List */}
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pb-5 mb-5 border-b border-zinc-200/80 dark:border-zinc-800/80">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 font-semibold">
                        CURRENT ROLE
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-1 flex items-center gap-2">
                      <span className="text-zinc-900 dark:text-white">{exp.company}</span>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-red-500 transition-colors"
                        title="Company Website"
                      >
                        <ArrowUpRight className="w-4 h-4 inline" />
                      </a>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex sm:flex-col sm:items-end gap-2 sm:gap-1">
                    <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{exp.period}</span>
                    <span className="text-zinc-400 dark:text-zinc-500">{exp.location}</span>
                  </div>
                </div>

                {/* Narrative Description */}
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Concrete Deliverables */}
                <div className="space-y-3 mb-6">
                  {exp.contributions.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <span className="text-red-500 font-bold mt-0.5">▪</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-zinc-500 mr-1 uppercase">Stack:</span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
