import React from 'react';

/**
 * VortexHubIcon - Exact vector reproduction of the Vortex Hub brand mark (Image 1)
 * Features 8 spiraling aperture blades separated by crisp white channels,
 * with a central white circular aperture containing the signature 2-tone 'V' mark.
 */
export const VortexHubIcon = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      {/* Exact color gradients matching Image 1 around the vortex circle */}
      {/* Top / Top-Right: Bright Purple & Violet */}
      <linearGradient id="vhGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>

      <linearGradient id="vhGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>

      {/* Right / Bottom-Right: Deep Violet to Dark Purple */}
      <linearGradient id="vhGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6D28D9" />
        <stop offset="100%" stopColor="#4C1D95" />
      </linearGradient>

      <linearGradient id="vhGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4C1D95" />
        <stop offset="100%" stopColor="#2E1065" />
      </linearGradient>

      {/* Bottom / Bottom-Left: Dark Navy Blue & Deep Indigo */}
      <linearGradient id="vhGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E1065" />
        <stop offset="100%" stopColor="#1B1464" />
      </linearGradient>

      <linearGradient id="vhGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1B1464" />
        <stop offset="100%" stopColor="#0F0C31" />
      </linearGradient>

      {/* Left / Top-Left: Indigo & Bright Violet Accent */}
      <linearGradient id="vhGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#4338CA" />
      </linearGradient>

      <linearGradient id="vhGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>

      {/* V-Leg Right Arm Gradient */}
      <linearGradient id="vhVRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>

    {/* White Base Circle Frame */}
    <circle cx="100" cy="100" r="96" fill="#FFFFFF" />

    {/* 8 Spiraling Aperture Blades with White Channel Outlines */}
    <g id="Vortex-Spiral-Blades">
      {/* Blade 0 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad0)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Blade 1 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad1)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(45 100 100)"
      />
      {/* Blade 2 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad2)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(90 100 100)"
      />
      {/* Blade 3 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad3)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(135 100 100)"
      />
      {/* Blade 4 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad4)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(180 100 100)"
      />
      {/* Blade 5 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad5)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(225 100 100)"
      />
      {/* Blade 6 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad6)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(270 100 100)"
      />
      {/* Blade 7 */}
      <path
        d="M 100 6 C 136 6, 168 22, 186 52 C 158 70, 126 90, 84 94 C 80 58, 86 28, 100 6 Z"
        fill="url(#vhGrad7)"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinejoin="round"
        transform="rotate(315 100 100)"
      />
    </g>

    {/* Central White Aperture Cutout */}
    <circle cx="100" cy="100" r="35" fill="#FFFFFF" />

    {/* Central 2-Tone Signature 'V' Emblem */}
    <g id="Vortex-Center-V">
      {/* Left Arm (Dark Navy #1B1464) */}
      <path
        d="M 68 72 L 84 72 L 100 104 L 100 136 Z"
        fill="#1B1464"
      />
      {/* Right Arm (Bright Purple Gradient) */}
      <path
        d="M 100 104 L 116 72 L 132 72 L 100 136 Z"
        fill="url(#vhVRightGrad)"
      />
    </g>
  </svg>
);

/**
 * VortexHubLogo - Full Brand Logo with Icon & "Vortex Hub" Typography
 * Enforces LTR direction so it ALWAYS displays as Vortex (Navy/White) + Hub (Purple Gradient)
 */
export const VortexHubLogo = ({ theme = "light", className = "" }) => {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`} dir="ltr">
      {/* Vortex Aperture Iris Icon */}
      <VortexHubIcon className="w-10 h-10 md:w-11 md:h-11 group-hover:scale-105 transition-transform duration-300 shrink-0" />
      
      {/* Brand Text Typography (Strictly LTR: Vortex + Hub) */}
      <div className="flex items-center gap-1.5 font-sans tracking-tight leading-none text-2xl md:text-3xl font-extrabold select-none" dir="ltr">
        <span className={isDark ? 'text-white font-extrabold' : 'text-[#0F172A] font-extrabold'}>
          Vortex
        </span>
        <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent font-black">
          Hub
        </span>
      </div>
    </div>
  );
};

export default VortexHubLogo;
