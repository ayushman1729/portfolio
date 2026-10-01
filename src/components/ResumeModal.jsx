import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Building2, GraduationCap } from 'lucide-react';
import { personalInfo, experience, projects, skillsData, certifications, activities } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0c0e14] border border-slate-200 dark:border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-800 dark:text-zinc-100">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/80">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-slate-900 dark:text-white">Ayushman Singh — Resume Preview</span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-400 font-mono">SWE 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-800 dark:text-zinc-200 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-zinc-800 pb-5">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{personalInfo.name}</h1>
            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mt-0.5">{personalInfo.role}</p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-zinc-400 mt-2 font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs text-slate-500 dark:text-zinc-400 font-mono mb-2">
              Professional Summary
            </h3>
            <p className="text-slate-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
              Full-Stack Software Engineer with hands-on experience building scalable web applications using React.js, Next.js, Node.js, and MongoDB. Proven track record in developing RESTful APIs, optimizing web performance, and integrating video streaming technologies (RTSP/FFmpeg). Passionate about writing clean, maintainable code and migrating legacy applications to modern JavaScript frameworks.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs text-slate-500 dark:text-zinc-400 font-mono mb-2">
              Education
            </h3>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900 dark:text-white">{personalInfo.education.degree}</span>
              <span className="font-mono text-slate-500 dark:text-zinc-400 text-xs">{personalInfo.education.period}</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-zinc-400">
              {personalInfo.education.university}, {personalInfo.education.location}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs text-slate-500 dark:text-zinc-400 font-mono mb-3">
              Work Experience
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{exp.role}</span>
                    <span className="text-slate-500 dark:text-zinc-400 ml-2">— {exp.company}</span>
                  </div>
                  <span className="font-mono text-slate-500 dark:text-zinc-400 text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 dark:text-zinc-300 text-xs leading-relaxed">
                  {exp.contributions.map((c, cIdx) => (
                    <li key={cIdx}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs text-slate-500 dark:text-zinc-400 font-mono mb-3">
              Selected Projects
            </h3>
            <div className="space-y-4">
              {projects.slice(0, 3).map((p, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">{p.title}</span>
                    <span className="font-mono text-slate-500 dark:text-zinc-400 text-xs">{p.date}</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed">
                    {p.solution}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    Stack: {p.tech.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-xs text-slate-500 dark:text-zinc-400 font-mono mb-2">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-slate-900 dark:text-zinc-200">Languages:</strong> {skillsData.languages.join(', ')}</div>
              <div><strong className="text-slate-900 dark:text-zinc-200">Frontend:</strong> {skillsData.frontend.join(', ')}</div>
              <div><strong className="text-slate-900 dark:text-zinc-200">Backend:</strong> {skillsData.backend.join(', ')}</div>
              <div><strong className="text-slate-900 dark:text-zinc-200">Media/Video:</strong> {skillsData.multimedia.join(', ')}</div>
              <div><strong className="text-slate-900 dark:text-zinc-200">Databases:</strong> {skillsData.database.join(', ')}</div>
              <div><strong className="text-slate-900 dark:text-zinc-200">Tools:</strong> {skillsData.tools.join(', ')}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
