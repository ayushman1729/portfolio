import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, Image as ImageIcon, UserCheck, ArrowRight, Download, Eye } from 'lucide-react';

export default function RentProofDemo() {
  const [activeRole, setActiveRole] = useState('Landlord'); // 'Landlord' | 'Tenant'
  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [disputeResolved, setDisputeResolved] = useState(false);

  const rooms = {
    'Living Room': {
      item: 'Hardwood Flooring & Wall Paint',
      moveInStatus: 'PRISTINE // 0 SCRATCHES',
      moveInDate: '12 Oct 2025 • Verified by Tenant',
      moveOutStatus: 'DEEP SCRATCHES & WALL CHIP',
      moveOutDate: '01 Oct 2026 • Logged by Landlord',
      evidenceUrl: 'Cloudinary Secure Asset #CLD-84920',
      depositStatus: 'Disputed ₹4,500 repair deduction',
      resolution: 'Cloudinary timestamped metadata verified landlord claim. Deposit deduction approved without legal friction.'
    },
    'Kitchen Bay': {
      item: 'Granite Countertop & Induction Hob',
      moveInStatus: 'EXCELLENT CONDITION',
      moveInDate: '12 Oct 2025 • High-Res Photo Uploaded',
      moveOutStatus: 'NORMAL WEAR & TEAR (CLEAN)',
      moveOutDate: '01 Oct 2026 • Verified',
      evidenceUrl: 'Cloudinary Secure Asset #CLD-84921',
      depositStatus: '100% Refund Approved',
      resolution: 'Both parties signed off on digital inspection report. Full deposit returned in 24 hours.'
    },
    'Master Bedroom': {
      item: 'Attached Wardrobe & Window Glazing',
      moveInStatus: 'INSPECTED & SIGNED',
      moveInDate: '12 Oct 2025 • Digital Signatures Stored',
      moveOutStatus: 'WINDOW LATCH BROKEN',
      moveOutDate: '01 Oct 2026 • Video Walkthrough Uploaded',
      evidenceUrl: 'Cloudinary Secure Asset #CLD-84922',
      depositStatus: 'Disputed ₹1,200 latch repair',
      resolution: 'Landlord uploaded repair invoice; tenant verified photo. Dispute closed amicably.'
    }
  };

  const current = rooms[selectedRoom];

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c0f18] border border-slate-200 dark:border-zinc-800 shadow-md overflow-hidden text-xs transition-colors">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-zinc-900/80 border-b border-slate-200 dark:border-zinc-800 gap-2">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="font-extrabold text-slate-900 dark:text-white font-mono uppercase tracking-wide">
            RentProof — Move-In vs Move-Out Inspection Visualizer
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
            MERN + CLOUDINARY
          </span>
        </div>

        {/* Role Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-zinc-800 font-mono text-[11px]">
          <span className="text-slate-500 dark:text-zinc-400 text-[10px] px-1">SIMULATE ROLE:</span>
          {['Landlord', 'Tenant'].map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-2.5 py-0.5 rounded-lg transition-all font-semibold ${
                activeRole === role
                  ? 'bg-white dark:bg-zinc-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Room Selector & Inspection Comparison View */}
        <div className="lg:col-span-8 p-5 bg-slate-50/50 dark:bg-[#07090e] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-zinc-800 space-y-4">
          
          {/* Room Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {Object.keys(rooms).map((room) => (
              <button
                key={room}
                onClick={() => setSelectedRoom(room)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all whitespace-nowrap ${
                  selectedRoom === room
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                    : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 hover:border-slate-300'
                }`}
              >
                {room}
              </button>
            ))}
          </div>

          {/* Side-by-Side Condition Evidence Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Move-In Evidence Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>MOVE-IN BASELINE</span>
                </span>
                <span className="text-slate-400">OCT 2025</span>
              </div>

              <div className="h-28 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-dashed border-slate-300 dark:border-zinc-800 flex flex-col items-center justify-center p-3 text-center">
                <ImageIcon className="w-6 h-6 text-emerald-500 mb-1" />
                <span className="font-bold text-slate-800 dark:text-zinc-200">{current.item}</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">{current.moveInStatus}</span>
              </div>

              <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">
                {current.moveInDate}
              </div>
            </div>

            {/* Move-Out Condition Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>MOVE-OUT INSPECTION</span>
                </span>
                <span className="text-slate-400">OCT 2026</span>
              </div>

              <div className="h-28 rounded-xl bg-slate-100 dark:bg-zinc-950 border border-dashed border-slate-300 dark:border-zinc-800 flex flex-col items-center justify-center p-3 text-center">
                <ImageIcon className="w-6 h-6 text-amber-500 mb-1" />
                <span className="font-bold text-slate-800 dark:text-zinc-200">{current.item}</span>
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono mt-0.5">{current.moveOutStatus}</span>
              </div>

              <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">
                {current.moveOutDate}
              </div>
            </div>

          </div>

          {/* Workflow Resolution Footer */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900/80 border border-slate-200 dark:border-zinc-800 text-[11px] text-slate-600 dark:text-zinc-300 leading-relaxed font-mono">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-1.5">EVIDENCE OUTCOME:</span>
            <span>{current.resolution}</span>
          </div>

        </div>

        {/* Right Column: Full-Stack Architecture & Features */}
        <div className="lg:col-span-4 p-5 bg-white dark:bg-[#0c0f18] flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
              Full-Stack Architecture
            </span>

            <div className="space-y-2.5 text-xs text-slate-600 dark:text-zinc-400 font-mono">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <span className="text-slate-400 block text-[10px]">AUTHENTICATION & ACCESS</span>
                <span className="font-bold text-slate-800 dark:text-zinc-200">JWT + Role-Based (RBAC)</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <span className="text-slate-400 block text-[10px]">MEDIA INGESTION & CDN</span>
                <span className="font-bold text-slate-800 dark:text-zinc-200">Cloudinary SDK Photo/Video</span>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                <span className="text-slate-400 block text-[10px]">REPORT GENERATION</span>
                <span className="font-bold text-slate-800 dark:text-zinc-200">Shareable Audit PDF Export</span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <a
              href="https://github.com/ayushman1729"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-xs transition-colors shadow-xs"
            >
              <span>Explore RentProof Source Code</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
