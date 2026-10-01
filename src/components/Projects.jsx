import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, Search, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Full-Stack', 'Frontend'];

  const filtered = projects.filter((p) => {
    const matchesFilter = filter === 'All' || p.category.includes(filter);
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Capsule Container */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0f18] border border-slate-200/80 dark:border-zinc-800 shadow-md relative overflow-hidden transition-colors">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-zinc-800 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-1 flex items-center gap-2">
                <span>02 // FEATURED SYSTEMS</span>
                <span className="text-[10px] text-slate-400 font-normal">({projects.length} PROJECTS)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Featured Architectures
              </h2>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              
              {/* Search by tech */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by tech (e.g. Cloudinary, FFmpeg)..."
                  className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 text-xs text-slate-800 dark:text-zinc-200 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors w-full sm:w-56"
                />
              </div>

              {/* Filter tabs */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 font-mono text-xs">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                      filter === c
                        ? 'bg-red-500 text-white shadow-xs'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1200">
            {filtered.map((project, idx) => (
              <TiltCard
                key={idx}
                maxTilt={8}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800 hover:border-red-500/40 dark:hover:border-red-500/40 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category & Date */}
                  <div className="flex items-center justify-between text-[11px] font-mono mb-4 translate-z-10">
                    <span className="px-2.5 py-0.5 rounded-md bg-white dark:bg-zinc-900 text-red-600 dark:text-red-400 border border-slate-200 dark:border-zinc-800 font-semibold uppercase shadow-xs">
                      {project.category}
                    </span>
                    <span className="text-slate-400 dark:text-zinc-500">{project.date}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-500 transition-colors mb-2 translate-z-20">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-5 translate-z-10">
                    {project.tagline}
                  </p>

                  {/* Challenge vs Solution */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#07090e] border border-slate-200/80 dark:border-zinc-800/80 space-y-3 text-xs mb-6 translate-z-20 shadow-xs">
                    <div>
                      <span className="font-mono text-red-600 dark:text-red-400 font-bold uppercase tracking-wider block mb-0.5">
                        [ Problem Solved ]
                      </span>
                      <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider block mb-0.5">
                        [ Architecture Implemented ]
                      </span>
                      <p className="text-slate-700 dark:text-zinc-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Stack & Link */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800/80 translate-z-10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-900 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700/80 hover:border-red-500/50 transition-colors shadow-xs"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                      // GITHUB VERIFIED
                    </span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* GitHub Repos Banner */}
          <div className="mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-red-500">❖</span>
              <span>All 22+ code repositories, scripts, and full-stack projects are public on GitHub.</span>
            </div>
            <a
              href="https://github.com/ayushman1729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700 font-semibold shadow-xs"
            >
              <span>github.com/ayushman1729</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-red-500" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
