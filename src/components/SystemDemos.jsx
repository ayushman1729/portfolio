import React, { useState } from 'react';
import { Video, Home, ShieldCheck, Terminal, Sparkles, Layers } from 'lucide-react';
import CctvSimulator from './CctvSimulator';
import RentProofDemo from './RentProofDemo';

export default function SystemDemos({ isDark }) {
  const [activeDemo, setActiveDemo] = useState('cctv'); // 'cctv' | 'rentproof'

  return (
    <section id="demos" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Outer Frame with macOS-style window header */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white dark:bg-[#0c0f18] border border-slate-200/90 dark:border-zinc-800 shadow-xl shadow-slate-200/40 dark:shadow-black/50 overflow-hidden transition-all">
          
          {/* Window Titlebar */}
          <div className="px-5 py-4 bg-slate-50 dark:bg-zinc-900/90 border-b border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Window Dots & Identifier */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 border border-rose-500/30" />
                <span className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500/30" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500/30" />
              </div>
              <div className="h-4 w-px bg-slate-300 dark:bg-zinc-700 mx-1 hidden sm:block" />
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 dark:text-zinc-200">
                <Terminal className="w-3.5 h-3.5 text-red-500" />
                <span>interactive-systems.dev</span>
                <span className="text-[10px] font-normal text-slate-400 dark:text-zinc-500 hidden md:inline">
                  // Live Production Simulators
                </span>
              </div>
            </div>

            {/* Interactive Demo Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/70 dark:bg-zinc-950 border border-slate-300/60 dark:border-zinc-800 text-xs font-mono">
              <button
                onClick={() => setActiveDemo('cctv')}
                className={`px-3.5 py-1.5 rounded-xl flex items-center gap-2 transition-all font-semibold ${
                  activeDemo === 'cctv'
                    ? 'bg-red-500 text-white shadow-sm shadow-red-500/25 scale-[1.02]'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>1. E-Commerce CCTV Audit</span>
              </button>

              <button
                onClick={() => setActiveDemo('rentproof')}
                className={`px-3.5 py-1.5 rounded-xl flex items-center gap-2 transition-all font-semibold ${
                  activeDemo === 'rentproof'
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/25 scale-[1.02]'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>2. RentProof Inspection</span>
              </button>
            </div>

          </div>

          {/* Subheading & Explanation */}
          <div className="px-6 py-4 bg-slate-50/50 dark:bg-zinc-900/40 border-b border-slate-200/60 dark:border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-slate-900 dark:text-white block sm:inline mr-2">
                {activeDemo === 'cctv'
                  ? 'Surveillance & Barcode Linkage Pipeline (GVD)'
                  : 'Property Dispute & Move-In/Out Evidence Workflow'}
              </span>
              <span className="text-slate-500 dark:text-zinc-400">
                {activeDemo === 'cctv'
                  ? 'Simulate start-scan & close-scan packaging events with FFmpeg video snippet extraction.'
                  : 'Document property conditions with JWT authentication, role comparison & Cloudinary assets.'}
              </span>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto font-mono text-[11px]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">LIVE INTERACTIVE</span>
            </div>
          </div>

          {/* Active Demo Render Area */}
          <div className="p-4 sm:p-6 bg-slate-100/50 dark:bg-[#07090e]/80">
            {activeDemo === 'cctv' ? (
              <CctvSimulator isDark={isDark} />
            ) : (
              <RentProofDemo />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
