import React from 'react';
import { Activity, CheckCircle2 } from 'lucide-react';

export const LaborexLogoCard = ({ isThumbnail = false }) => {
  return (
    <div className={`w-full h-full bg-[#113D2F] relative overflow-hidden flex flex-col justify-between p-6 select-none ${isThumbnail ? 'min-h-[220px]' : 'min-h-[380px]'}`}>
      
      {/* Background Heartbeat / ECG pulse wave watermark (matching Image 1 & 2) */}
      <svg className="absolute -left-8 -top-4 w-72 h-72 text-[#195642] opacity-40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>

      {/* Top Bar: Production Badge (from Image 2) */}
      <div className="flex justify-end relative z-10">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F7F0] text-[#106938] border border-[#9DE8CA] shadow-2xs">
          Production
        </span>
      </div>

      {/* Center Layout: Laborex Pharma Logo with Hygieia Pill (from Image 2 & 1) */}
      <div className="relative z-10 flex items-center justify-between gap-4 my-auto px-2">
        {/* Circle Avatar on Bottom/Left with Pulse line (from Image 1 & 2) */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0E3227] border-2 border-[#1E694F] flex items-center justify-center shadow-lg shrink-0">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#2AD088]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>

        {/* Logo Text & Pill Icon (matching Image 2 & Image 1) */}
        <div className="flex items-center gap-3 text-right">
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-tight text-[#6BE8B7]">
              LABOREX
            </div>
            <div className="text-lg sm:text-xl font-extrabold tracking-wide text-[#48C99B]">
              PHARMA
            </div>
            <div className="h-0.5 w-full bg-[#1E694F] my-1" />
            <div className="text-[10px] font-bold text-[#A1F0D4] tracking-widest uppercase">
              FOR DISTRIBUTION
            </div>
          </div>

          {/* Green Capsule Pill with Hygieia Mortar/Bowl icon (from Image 2 & Image 1) */}
          <div className="w-12 h-20 sm:w-14 sm:h-22 rounded-full bg-[#106938] border-2 border-[#2AD088]/40 flex flex-col items-center justify-between p-1 shadow-xl shrink-0">
            <div className="w-full h-1/2 rounded-t-full bg-[#106938]" />
            <div className="w-full h-1/2 rounded-b-full bg-[#0B4A27] flex items-center justify-center border-t border-[#1E694F]">
              {/* Bowl of Hygieia / Mortar Icon */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M8 6h8M6 10h12a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zM12 14v6M9 20h6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Badge: إدارة أدوية، أمن، ثقة (from Image 1) */}
      <div className="relative z-10 self-start">
        <div className="bg-white text-[#0E3227] px-3.5 py-1.5 rounded-full shadow-md border border-white flex items-center gap-2 text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-[#106938] shrink-0" />
          <span>إدارة أدوية، أمن، ثقة</span>
        </div>
      </div>

    </div>
  );
};

export default LaborexLogoCard;
