import React from 'react';
import { stats } from '../data/portfolioData';
import { Layout, Cpu, Network, Zap } from 'lucide-react';

export default function Stats() {
  const icons = [
    <Layout className="w-5 h-5 text-cyan-400" />,
    <Cpu className="w-5 h-5 text-purple-400" />,
    <Network className="w-5 h-5 text-blue-400" />,
    <Zap className="w-5 h-5 text-amber-400" />
  ];

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700/80 transition-all group"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                {icons[idx % icons.length]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
