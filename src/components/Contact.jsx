import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Capsule Container */}
        <div className="p-6 sm:p-10 rounded-[32px] bg-white dark:bg-[#0c0f18] border border-zinc-200/80 dark:border-zinc-800 shadow-xl dark:shadow-2xl shadow-zinc-200/50 dark:shadow-black/60 relative overflow-hidden transition-colors">
          
          <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold mb-1">
                06 // TRANSMISSION
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                Get In Touch
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-500 hidden sm:block">
              DIRECT PROTOCOL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left 5 cols: Direct Cards */}
            <div className="md:col-span-5 space-y-3 font-mono text-xs">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block mb-1">EMAIL // DIRECT</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-xs"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block mb-1">PHONE // WHATSAPP</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-zinc-900 dark:text-white hover:text-red-500 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-zinc-400" />
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block mb-1">LOCATION</span>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {personalInfo.location}
                  </span>
                </div>
                <MapPin className="w-4 h-4 text-red-500 mr-1" />
              </div>

              {/* Social Channels */}
              <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase block mb-1">PROFILES</span>
                  <span className="text-xs text-zinc-800 dark:text-zinc-200 font-semibold">LinkedIn & GitHub</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition-colors border border-zinc-200 dark:border-zinc-800 shadow-xs"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition-colors border border-zinc-200 dark:border-zinc-800 shadow-xs"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right 7 cols: Message Form */}
            <div className="md:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-7 rounded-2xl bg-zinc-50/90 dark:bg-zinc-950/60 border border-zinc-200/80 dark:border-zinc-800/80 space-y-4 shadow-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Ayushman, I saw your portfolio and would like to connect regarding..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-red-500 transition-colors resize-none shadow-xs"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white shadow-md shadow-red-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  {submitted && (
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                      Launching mail client...
                    </span>
                  )}
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
