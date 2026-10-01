import React from 'react';
import { certifications, activities, personalInfo } from '../data/portfolioData';
import { Award, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Capsule Container */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0f18] border border-zinc-200/80 dark:border-zinc-800 shadow-xl dark:shadow-2xl shadow-zinc-200/50 dark:shadow-black/60 relative overflow-hidden transition-colors">
          
          <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-1">
                04 // ACCREDITATIONS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Education & Credentials
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-500 hidden sm:block">
              FOUNDATIONAL RIGOR
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Certifications */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <span className="text-red-500">❖</span>
                <span>CERTIFICATIONS</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-sm font-bold text-zinc-950 dark:text-white">
                        {cert.name}
                      </h4>
                      <span className="text-[10px] font-mono text-red-600 dark:text-red-400 font-semibold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 whitespace-nowrap">
                        VERIFIED
                      </span>
                    </div>
                    <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                      Issuer: {cert.issuer}
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {cert.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Formal Education & Activities */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <span className="text-red-500">❖</span>
                <span>DEGREE & INITIATIVES</span>
              </h3>

              <div className="space-y-4">
                {/* Degree Card */}
                <div className="p-5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-zinc-500">{personalInfo.education.period}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">GRADUATING 2026</span>
                  </div>
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 font-mono">
                    {personalInfo.education.university}, {personalInfo.education.location}
                  </p>
                </div>

                {/* Campus Activities */}
                {activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                  >
                    <div className="text-sm font-bold text-zinc-950 dark:text-white mb-1">
                      {act.title}
                    </div>
                    <div className="text-xs font-mono text-red-600 dark:text-red-400 mb-2">
                      {act.event}
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {act.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
