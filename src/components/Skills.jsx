import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const groups = [
    { title: "Languages", items: skillsData.languages },
    { title: "Frontend Engineering", items: skillsData.frontend },
    { title: "Backend & REST APIs", items: skillsData.backend },
    { title: "Video & Media Protocols", items: skillsData.multimedia },
    { title: "Database Systems", items: skillsData.database },
    { title: "Testing & DevOps Tools", items: skillsData.tools }
  ];

  return (
    <section id="skills" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Capsule Container */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0f18] border border-zinc-200/80 dark:border-zinc-800 shadow-xl dark:shadow-2xl shadow-zinc-200/50 dark:shadow-black/60 relative overflow-hidden transition-colors">
          
          <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-1">
                03 // CAPABILITIES
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Technical Stack
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-500 hidden sm:block">
              PRODUCTION CAPABILITIES
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {groups.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    {group.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                    {group.items.length} TOOLS
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-800 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Card for Video Protocol */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-red-50 dark:from-red-950/30 via-zinc-50 dark:via-zinc-900/60 to-zinc-50 dark:to-zinc-950 border border-red-500/20 dark:border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <span className="text-red-600 dark:text-red-400 font-bold mr-2">✦ SPECIALTY:</span>
              <span>Low-Latency Real-Time Surveillance Pipelines (RTSP feeds transcoded to HLS via FFmpeg for browser clients).</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-red-600 dark:text-red-400 px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 whitespace-nowrap">
              GVD PRODUCTION SPEC
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
