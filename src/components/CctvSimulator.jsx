import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Video, QrCode, ShieldCheck, Radio, CheckCircle2, Clock, Box, PackageCheck } from 'lucide-react';

export default function CctvSimulator({ isDark }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('ECOM-ORD-8921');
  const [playbackSec, setPlaybackSec] = useState(14);
  const [activeStage, setActiveStage] = useState('PLAYING_CLIP'); // 'START_SCAN' | 'PACKING' | 'CLOSE_SCAN' | 'PLAYING_CLIP'

  // Pre-configured real-world audit records
  const auditRecords = {
    'ECOM-ORD-8921': {
      orderId: 'ECOM-30291847192',
      seller: 'E-Commerce Fulfillment Bay #3',
      item: 'Sony WH-1000XM5 Wireless Headphones',
      cctvChannel: 'CAM 02 - Overhead Packing Station',
      startScanTime: '14:22:04',
      closeScanTime: '14:22:38',
      duration: '34s',
      status: 'VERIFIED // DISPUTE RESOLVED',
      disputeReason: 'Customer claimed: Empty box received'
    },
    'ECOM-ORD-8922': {
      orderId: 'ECOM-89301928410',
      seller: 'Consumer Electronics Bay #1',
      item: 'Apple iPhone 15 Pro (256GB Natural Titanium)',
      cctvChannel: 'CAM 01 - High-Res Serial Inspection',
      startScanTime: '15:10:12',
      closeScanTime: '15:10:49',
      duration: '37s',
      status: 'VERIFIED // DISPUTE RESOLVED',
      disputeReason: 'Customer claimed: Wrong color received'
    },
    'ECOM-ORD-8923': {
      orderId: 'ECOM-77491028472',
      seller: 'Fulfillment Retail Station Bay #4',
      item: 'Logitech MX Master 3S Mouse',
      cctvChannel: 'CAM 03 - Packing Conveyor',
      startScanTime: '16:04:20',
      closeScanTime: '16:04:46',
      duration: '26s',
      status: 'VERIFIED // AUDIT PASSED',
      disputeReason: 'Pre-dispatch automated QA check'
    }
  };

  const current = auditRecords[activeTab];

  // Playback timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaybackSec((prev) => (prev >= 34 ? 0 : prev + 1));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0f18] border border-slate-200 dark:border-zinc-800 shadow-md overflow-hidden text-xs transition-colors">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-zinc-900/80 border-b border-slate-200 dark:border-zinc-800 gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="font-extrabold text-slate-900 dark:text-white font-mono uppercase tracking-wide">
            E-Commerce Warehouse CCTV Packaging Audit System
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono font-bold">
            GVD PIPELINE
          </span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-zinc-400">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">● RTSP/HLS 0.18s</span>
          <span>•</span>
          <span>MongoDB Index Log</span>
        </div>
      </div>

      {/* 2-Scan Step Explainer Banner (Explaining the exact user logic!) */}
      <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900/40 grid grid-cols-1 md:grid-cols-3 gap-3">
        
        <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-red-200/60 dark:border-red-800/40">
          <div className="w-6 h-6 rounded-lg bg-red-500 text-white font-bold font-mono flex items-center justify-center text-xs shrink-0">
            1
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-[11px]">Start Packing Scan</span>
            <span className="text-[10px] text-slate-500 dark:text-zinc-400">Seller scans item barcode at start</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-red-200/60 dark:border-red-800/40">
          <div className="w-6 h-6 rounded-lg bg-red-500 text-white font-bold font-mono flex items-center justify-center text-xs shrink-0">
            2
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white block text-[11px]">Close Packing Scan</span>
            <span className="text-[10px] text-slate-500 dark:text-zinc-400">Box is sealed & shipping label scanned</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 dark:bg-zinc-900/60 border border-red-200/60 dark:border-red-800/40">
          <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold font-mono flex items-center justify-center text-xs shrink-0">
            ✓
          </div>
          <div>
            <span className="font-bold text-emerald-700 dark:text-emerald-400 block text-[11px]">CCTV Clip Extracted</span>
            <span className="text-[10px] text-slate-500 dark:text-zinc-400">FFmpeg serves exact footage to resolve disputes</span>
          </div>
        </div>

      </div>

      {/* Simulator Main Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left 8 Cols: Video Viewport & Scrubber */}
        <div className="lg:col-span-8 p-4 sm:p-5 bg-slate-950 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-zinc-800 min-h-[320px]">
          
          {/* Top Status inside CCTV viewport */}
          <div className="flex items-center justify-between z-10 text-[11px] font-mono">
            <div className="px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700 backdrop-blur-md flex items-center gap-2">
              <span className="text-red-400 font-bold">REC ●</span>
              <span>{current.cctvChannel}</span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700 backdrop-blur-md text-emerald-400 font-semibold">
              EVIDENCE VERIFIED
            </div>
          </div>

          {/* Central Visual Camera Viewport */}
          <div className="my-auto py-8 text-center relative select-none">
            <div className="max-w-xs mx-auto p-4 rounded-2xl bg-zinc-900/90 border border-dashed border-red-500/60 relative">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2 border-b border-zinc-800 mb-3">
                <span className="text-red-400 font-bold">PACKING BAY #3</span>
                <span>ORDER: {current.orderId}</span>
              </div>

              <div className="flex items-center justify-center gap-4 py-2">
                <Box className="w-10 h-10 text-red-500 animate-bounce" />
                <div className="text-left font-mono">
                  <div className="font-bold text-white text-xs">{current.item}</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">
                    Start: <span className="text-white font-semibold">{current.startScanTime}</span>
                  </div>
                  <div className="text-[10px] text-zinc-400">
                    Close: <span className="text-white font-semibold">{current.closeScanTime}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 mt-2 text-[10px] font-mono text-emerald-400">
                DISPUTE DEFENSE: Packaging Footage Verified (00:{playbackSec < 10 ? '0' + playbackSec : playbackSec} / 00:34)
              </div>
            </div>
          </div>

          {/* Scrubber & Controls */}
          <div className="space-y-2 pt-2 border-t border-zinc-800 z-10 font-mono">
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setPlaybackSec(0)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                  title="Rewind to Start Scan"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <span className="text-zinc-200">
                  00:{playbackSec < 10 ? '0' + playbackSec : playbackSec} / 00:34
                </span>
              </div>

              <span className="text-xs text-red-400 font-bold">
                FFmpeg HLS Video Slice
              </span>
            </div>

            {/* Scrubber Bar */}
            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-red-500 h-full transition-all duration-300"
                style={{ width: `${(playbackSec / 34) * 100}%` }}
              />
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Order Queue & Dispute Proof Data */}
        <div className="lg:col-span-4 p-4 sm:p-5 bg-white dark:bg-[#0c0f18] flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[11px] font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>SELECT DISPUTED ORDER:</span>
              <span className="text-red-500">LIVE DB</span>
            </div>

            {/* Tab selector */}
            <div className="space-y-2">
              {Object.keys(auditRecords).map((key) => {
                const rec = auditRecords[key];
                const isSelected = activeTab === key;
                return (
                  <div
                    key={key}
                    onClick={() => {
                      setActiveTab(key);
                      setPlaybackSec(0);
                    }}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-red-50/80 dark:bg-zinc-900 border-red-500/80 shadow-xs'
                        : 'bg-slate-50/60 dark:bg-zinc-950/60 border-slate-200 dark:border-zinc-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 dark:text-white font-mono">
                        {rec.orderId}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-semibold bg-white dark:bg-zinc-800 text-red-600 dark:text-red-400 border border-slate-200 dark:border-zinc-700">
                        {rec.duration} CLIP
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-700 dark:text-zinc-300 font-medium truncate">
                      {rec.item}
                    </div>

                    <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-1 flex justify-between font-mono">
                      <span>Start: {rec.startScanTime}</span>
                      <span>Close: {rec.closeScanTime}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Dispute Defense Specs */}
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/80 border border-slate-200 dark:border-zinc-800 text-[11px] font-mono space-y-1.5">
            <div className="text-slate-500 dark:text-zinc-400">DISPUTE CLAIM:</div>
            <div className="font-bold text-red-600 dark:text-red-400">"{current.disputeReason}"</div>
            <div className="pt-1.5 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
              <span>RESOLUTION:</span>
              <span>100% VIDEO VERIFIED</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
