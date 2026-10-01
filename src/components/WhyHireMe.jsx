import React from 'react';
import { Layers, Video, ShieldCheck, Cpu, Zap, CheckCircle2 } from 'lucide-react';

export default function WhyHireMe() {
  const points = [
    {
      icon: <Layers className="w-5 h-5 text-red-500" />,
      title: "Production Next.js & React Architecture",
      desc: "Migrated live platforms from WordPress to Next.js at Genius Vision Digital, engineering 15+ reusable components for cross-browser consistency and superior SEO."
    },
    {
      icon: <Video className="w-5 h-5 text-purple-600" />,
      title: "Rare Video Streaming Competency (RTSP / FFmpeg)",
      desc: "Engineered low-latency video ingestion pipelines linking CCTV camera channels to browser HLS playback, solving real-world warehouse packaging disputes."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Robust RESTful APIs & Auth",
      desc: "Designed and tested 8+ REST API endpoints using Postman, validating strict JSON payload schemas, scan event streams, and JWT authentication."
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      title: "Strong CS & Algorithm Fundamentals",
      desc: "Comprehensive Data Structures & Algorithms training in Java (Apna College), with deep problem-solving skills across arrays, trees, graphs, and dynamic programming."
    }
  ];

  return (
    <section className="py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Container */}
        <div className="p-7 sm:p-9 rounded-[28px] bg-white dark:bg-[#0c0f18] border border-slate-200/80 dark:border-zinc-800 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 mb-7 border-b border-slate-100 dark:border-zinc-800/80">
            <div>
              <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider block mb-1">
                KEY ADVANTAGES FOR RECRUITERS & ENGINEERING MANAGERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Why Hire Ayushman?
              </h2>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 self-start sm:self-auto">
              Ready for Day-1 Production Impact
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs shrink-0 mt-0.5">
                  {pt.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
