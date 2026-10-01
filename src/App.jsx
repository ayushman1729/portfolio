import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyHireMe from './components/WhyHireMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  
  // Default to Light theme as explicitly requested!
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Clear any previous dark preference to ensure light mode renders cleanly
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#080a0f] text-slate-800 dark:text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-red-500 selection:text-white transition-colors duration-200">
      
      {/* Floating Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      {/* Main Content */}
      <main className="flex-1 pt-24 sm:pt-28 space-y-12 sm:space-y-16">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          isDark={isDark}
        />
        <WhyHireMe />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
