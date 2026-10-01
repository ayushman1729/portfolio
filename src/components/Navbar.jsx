import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none flex justify-center">
      <header
        className={`pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#0c0f18]/90 backdrop-blur-md border border-slate-200/90 dark:border-zinc-800 shadow-md shadow-slate-200/50 dark:shadow-black/50 py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/90 dark:bg-[#0c0f18]/90 backdrop-blur-md border border-slate-200 dark:border-zinc-800/80 shadow-sm shadow-slate-200/40 dark:shadow-black/40 py-2.5 sm:py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img
                src="/avatar.png"
                alt={personalInfo.name}
                className="w-8 h-8 rounded-full object-cover border border-slate-300 dark:border-zinc-700 group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0c0f18]" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-red-500 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">
                Gurugram • {time || 'IST'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-zinc-900/90 p-1 rounded-full border border-slate-200/80 dark:border-zinc-800 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Switcher */}
          <div className="hidden sm:flex items-center gap-2">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-300 hover:text-red-500 border border-slate-200 dark:border-zinc-700/60 transition-all hover:scale-105 active:scale-95"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-red-500" />
              <span>Resume</span>
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white shadow-sm shadow-red-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
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
          <div className="sm:hidden pt-4 pb-2 border-t border-slate-200 dark:border-zinc-800 mt-3 space-y-1 text-sm font-medium animate-in slide-in-from-top-2 duration-150">
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
                className="flex-1 py-2 text-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-xs"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
