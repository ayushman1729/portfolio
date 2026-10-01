import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Credentials', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full border-b border-slate-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-sm transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/avatar.png"
              alt={personalInfo.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-300 dark:border-zinc-700 group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-red-500 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
              Gurugram, IN • {time || 'IST'}
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:text-red-500 border border-slate-200 dark:border-zinc-700 transition-all hover:scale-105 active:scale-95 shadow-xs"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-red-500" />
            <span>Resume</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-slate-950 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 border-t border-slate-200 dark:border-zinc-800 space-y-1 text-sm font-medium bg-white dark:bg-zinc-950">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-red-500"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-center rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 font-semibold text-xs"
            >
              View Resume
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2 text-center rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
