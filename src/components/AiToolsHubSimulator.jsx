import React, { useState } from 'react';
import { PenTool, Sparkles, Copy, Check, RotateCcw, ExternalLink, Zap, Layers, Cpu, Globe } from 'lucide-react';

export default function AiToolsHubSimulator({ isDark }) {
  const presets = [
    {
      title: "Developer Bio",
      text: "I am a Computer Science Engineering graduate with hands-on experience in React.js, Next.js, and Node.js. I have worked on REST APIs, authentication, and database integration.",
      tone: "formal"
    },
    {
      title: "Medical Note",
      text: "Patients diagnosed with hypertension should avoid excessive sodium intake and exercise daily. Our clinic recommends regular blood pressure monitoring.",
      tone: "professional"
    },
    {
      title: "Project Follow-up",
      text: "I wanted to check if you had time to review the technical design document we discussed on Friday. Let me know when you are free to chat.",
      tone: "casual"
    }
  ];

  const [inputVal, setInputVal] = useState(presets[0].text);
  const [tone, setTone] = useState("formal");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [outputVal, setOutputVal] = useState(
    "As a credentialed Computer Science Engineering graduate possessing demonstrable practical proficiency across React.js, Next.js, and Node.js. Technical background encompasses the engineering of RESTful architectures, authentication protocols, and database integration."
  );
  const [stats, setStats] = useState({
    latency: "34ms",
    model: "Gemini 3.8 Flash (Active)",
    tokens: "52 tokens",
    semanticScore: "99.4%"
  });

  const runRewrite = (customText = inputVal, customTone = tone) => {
    setIsProcessing(true);
    setTimeout(() => {
      let result = "";
      if (customTone === "formal") {
        result = customText
          .replace(/\bI am a\b/gi, "As a credentialed")
          .replace(/\bwith hands-on experience in\b/gi, "possessing demonstrable practical proficiency across")
          .replace(/\bI have worked on\b/gi, "Technical background encompasses the engineering of")
          .replace(/\bavoid\b/gi, "refrain from")
          .replace(/\bshould avoid\b/gi, "ought to refrain from")
          .replace(/\bexcessive\b/gi, "disproportionate")
          .replace(/\bdaily\b/gi, "on a diurnal basis")
          .replace(/\bour clinic\b/gi, "our healthcare institution")
          .replace(/\brecommends\b/gi, "advocates")
          .replace(/\bregular\b/gi, "systematic and periodic")
          .replace(/\bpatients\b/gi, "individuals receiving clinical care")
          .replace(/\bwanted to check\b/gi, "am writing to inquire regarding whether you had occasion to review")
          .replace(/\bfree to chat\b/gi, "available for formal consultation");
      } else if (customTone === "casual") {
        result = customText
          .replace(/\bI am a\b/gi, "Hey! I'm a")
          .replace(/\bwith hands-on experience in\b/gi, "who loves building real stuff with")
          .replace(/\bI have worked on\b/gi, "I've built projects handling")
          .replace(/\bavoid\b/gi, "steer clear of")
          .replace(/\bexcessive\b/gi, "too much")
          .replace(/\bdaily\b/gi, "every single day")
          .replace(/\bour clinic\b/gi, "our team")
          .replace(/\brecommends\b/gi, "suggests")
          .replace(/\bregular\b/gi, "keeping an eye on")
          .replace(/\bpatients\b/gi, "anyone")
          .replace(/\bwanted to check\b/gi, "just wanted to see")
          .replace(/\bfree to chat\b/gi, "free to catch up");
      } else if (customTone === "academic") {
        result = `Empirical evaluation of the provided premise: "${customText}". Analysis substantiates enhanced conceptual precision and rigor across structured discourse.`;
      } else {
        result = customText
          .replace(/\bI am a\b/gi, "I am an experienced")
          .replace(/\bwith hands-on experience in\b/gi, "with proven background in")
          .replace(/\bI have worked on\b/gi, "I engineered solutions featuring")
          .replace(/\bavoid\b/gi, "limit")
          .replace(/\bexcessive\b/gi, "excess")
          .replace(/\bdaily\b/gi, "consistent daily")
          .replace(/\bour clinic\b/gi, "our healthcare practice")
          .replace(/\brecommends\b/gi, "strongly advises")
          .replace(/\bregular\b/gi, "routine")
          .replace(/\bpatients\b/gi, "individuals");
      }

      setOutputVal(result);
      setStats({
        latency: `${Math.floor(Math.random() * 20 + 25)}ms`,
        model: "Gemini 3.8 Flash (Active)",
        tokens: `${Math.floor(result.split(/\s+/).length * 1.3)} tokens`,
        semanticScore: `${(98.5 + Math.random()).toFixed(1)}%`
      });
      setIsProcessing(false);
    }, 400);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Simulator Control Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wide">
            Next.js 16 AI Engine Pipeline
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-bold">
            GEMINI 3.8 FLASH
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setInputVal(presets[0].text);
              setTone(presets[0].tone);
              runRewrite(presets[0].text, presets[0].tone);
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-zinc-800 transition flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset State</span>
          </button>
          <a
            href="https://ai-tools-hub-ten-nu.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 transition flex items-center gap-1.5 shadow-sm shadow-purple-600/30 cursor-pointer"
          >
            <span>Open Standalone App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Preset Action Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-purple-500" /> Click to test inputs:
        </span>
        {presets.map((p, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInputVal(p.text);
              setTone(p.tone);
              runRewrite(p.text, p.tone);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer border ${
              inputVal === p.text
                ? 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30'
                : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Main Interactive Workbench */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Input Textarea */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-1.5">
                <PenTool className="w-3.5 h-3.5 text-purple-500" /> Original Input
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {inputVal.split(/\s+/).filter(Boolean).length} words
              </span>
            </div>
            <textarea
              rows={5}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type or paste any text to rewrite..."
              className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-3 text-xs text-slate-900 dark:text-zinc-100 focus:outline-none focus:border-purple-500 resize-none font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-slate-500 dark:text-zinc-400">Tone:</span>
              <select
                value={tone}
                onChange={(e) => {
                  setTone(e.target.value);
                  runRewrite(inputVal, e.target.value);
                }}
                className="bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs rounded-lg px-2 py-1 text-slate-800 dark:text-zinc-200 focus:outline-none"
              >
                <option value="formal">Formal</option>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="academic">Academic</option>
              </select>
            </div>

            <button
              onClick={() => runRewrite(inputVal, tone)}
              disabled={isProcessing}
              className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3" />
              <span>{isProcessing ? "Processing..." : "Rewrite Text"}</span>
            </button>
          </div>
        </div>

        {/* Right: Output */}
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> AI Rewritten Result
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {outputVal.split(/\s+/).filter(Boolean).length} words
              </span>
            </div>
            <div className="min-h-[120px] bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 rounded-xl p-3 text-xs text-slate-800 dark:text-zinc-200 leading-relaxed font-sans overflow-auto">
              {isProcessing ? (
                <div className="flex items-center gap-2 text-slate-400 py-6">
                  <div className="w-3.5 h-3.5 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                  <span>Synthesizing output with Gemini 3.8 Flash...</span>
                </div>
              ) : (
                outputVal
              )}
            </div>
          </div>

          <div className="flex items-center justify-end mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-xs font-medium text-slate-700 dark:text-zinc-300 flex items-center gap-1.5 transition cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy Output"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Execution Payload Terminal */}
      <div className="p-3.5 rounded-2xl bg-slate-900 dark:bg-black border border-slate-800 text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1 text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Model: <strong className="text-white">{stats.model}</strong>
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Latency: <strong className="text-white">{stats.latency}</strong>
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Layers className="w-3.5 h-3.5 text-emerald-400" /> Context: <strong className="text-white">{stats.tokens}</strong>
          </span>
        </div>

        <span className="text-[11px] text-purple-400 font-semibold">
          ✓ Verified Production Build on Vercel
        </span>
      </div>
    </div>
  );
}
