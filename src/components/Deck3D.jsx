import React, { useState } from 'react';
import { Video, ShieldCheck, Cpu, Code2, Sparkles, ExternalLink, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Deck3D() {
  const [activeCard, setActiveCard] = useState(2); // Center card active by default
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const cards = [
    {
      id: 0,
      title: "RTSP // STREAM",
      subtitle: "Low Latency HLS Pipeline",
      category: "MEDIA ARCHITECTURE",
      badge: "ZERO LAG",
      bg: "bg-[#0b0d14] border-zinc-700/80 text-white",
      accent: "text-red-500",
      icon: <Video className="w-5 h-5 text-red-500" />,
      rot: -16,
      xOffset: -140,
      yOffset: 25,
      preview: "FFmpeg Transcoding • RTSP Ingestion • Browser HLS"
    },
    {
      id: 1,
      title: "CORE ARCHITECTURE",
      subtitle: "Full-Stack Web Systems",
      category: "SYSTEMS DESIGN",
      badge: "01 // LOGIC",
      bg: "bg-[#ff3b30] border-red-400 text-white shadow-xl shadow-red-500/20",
      accent: "text-zinc-950",
      icon: <Cpu className="w-5 h-5 text-white" />,
      rot: -8,
      xOffset: -70,
      yOffset: 10,
      preview: "React 19 • Next.js • Node.js • REST APIs • MongoDB"
    },
    {
      id: 2,
      title: "AYUSHMAN SINGH",
      subtitle: "Software Engineer Intern @ GVD",
      category: "CREATOR // ENGINEER",
      badge: "GURUGRAM, IN",
      bg: "bg-[#12141c] border-zinc-600 text-white shadow-2xl",
      accent: "text-red-500",
      isAvatar: true,
      rot: 0,
      xOffset: 0,
      yOffset: 0,
      preview: "Building web apps & high-throughput streaming systems"
    },
    {
      id: 3,
      title: "QR & CCTV SYNC",
      subtitle: "E-Commerce Packing Audit",
      category: "DISPUTE RESOLUTION",
      badge: "1:1 AUDIT",
      bg: "bg-zinc-100 border-white text-zinc-900 shadow-xl",
      accent: "text-red-600",
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      rot: 8,
      xOffset: 70,
      yOffset: 10,
      preview: "Automated scan timestamp queries with surveillance playback"
    },
    {
      id: 4,
      title: "ADMIN PORTAL",
      subtitle: "TanStack Query Engine",
      category: "ENTERPRISE DASHBOARD",
      badge: "CACHED STATE",
      bg: "bg-[#0f1118] border-zinc-700/80 text-white",
      accent: "text-red-400",
      icon: <Layers className="w-5 h-5 text-red-400" />,
      rot: 16,
      xOffset: 140,
      yOffset: 25,
      preview: "Protected dynamic routes • Axios • API deduplication"
    }
  ];

  return (
    <div
      className="relative w-full max-w-4xl mx-auto py-12 px-4 select-none perspective-1500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Graphic Dial / Compass circle from Reference Image 1 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full border border-dashed border-zinc-800 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-zinc-800/60 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
        </div>
        {/* Dial Indicators */}
        <div className="absolute top-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          ▲ ME // ENGINEER
        </div>
        <div className="absolute bottom-2 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          ▼ PORTFOLIO DECK
        </div>
      </div>

      {/* Cards Deck Container with 3D tilt */}
      <div
        className="relative h-[360px] sm:h-[420px] flex items-center justify-center preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 10}deg)`
        }}
      >
        {cards.map((card, idx) => {
          const isActive = activeCard === card.id;
          const zIndex = isActive ? 40 : 20 - Math.abs(2 - card.id);
          const currentRot = isActive ? 0 : card.rot;
          const currentX = isActive ? card.xOffset * 0.4 : card.xOffset;
          const currentY = isActive ? card.yOffset - 20 : card.yOffset;
          const scale = isActive ? 1.05 : 0.95;

          return (
            <div
              key={card.id}
              onClick={() => setActiveCard(card.id)}
              className={`absolute w-[210px] sm:w-[250px] h-[300px] sm:h-[350px] rounded-[24px] p-5 border flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out ${
                card.bg
              } ${
                isActive ? 'card-shadow-red ring-2 ring-red-500/50' : 'card-shadow-3d opacity-90 hover:opacity-100'
              }`}
              style={{
                transform: `translateX(${currentX}px) translateY(${currentY}px) rotateZ(${currentRot}deg) scale(${scale})`,
                zIndex
              }}
            >
              {/* Card Top Details */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase opacity-80">
                <span>{card.badge}</span>
                <span className="font-bold">{card.category}</span>
              </div>

              {/* Card Center Content / Avatar */}
              <div className="my-auto text-center py-2">
                {card.isAvatar ? (
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-zinc-700/80 mb-2 shadow-inner group">
                    <img
                      src="/avatar.png"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl mx-auto flex items-center justify-center bg-black/10 border border-white/10 mb-3 shadow-md">
                    {card.icon}
                  </div>
                )}
                
                <h4 className="font-extrabold text-sm sm:text-base tracking-tight leading-snug">
                  {card.title}
                </h4>
                <p className="text-[11px] opacity-75 font-mono mt-0.5">
                  {card.subtitle}
                </p>
              </div>

              {/* Card Bottom Details */}
              <div className="pt-3 border-t border-current/15 text-[10px] font-mono leading-tight flex items-center justify-between">
                <span className="truncate max-w-[150px]">{card.preview}</span>
                <span className="font-bold shrink-0">{isActive ? '● VIEW' : 'TAP'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Instructions */}
      <div className="text-center mt-4">
        <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-2">
          <span>[ INTERACTIVE 3D CARDS DECK ]</span>
          <span>•</span>
          <span className="text-red-500 font-semibold">CLICK ANY CARD TO INSPECT</span>
        </p>
      </div>
    </div>
  );
}
