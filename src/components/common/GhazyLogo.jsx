import React from 'react';

/**
 * GhazyIcon - Bold 3D Hexagonal Capital 'G' Logo Mark (Image 2)
 */
export const GhazyIcon = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 200 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Black Background / Dark Base Frame */}
    <path
      d="M100 8 L188 58 L188 162 L100 212 L12 162 L12 58 Z"
      fill="#0B1220"
    />

    {/* Outer Bold Cyan Hexagon Line */}
    <path
      d="M100 12 L182 59 L182 159 L100 206 L18 159 L18 59 Z"
      stroke="#00BCD4"
      strokeWidth="12"
      strokeLinejoin="miter"
    />

    {/* Left Outer Cyan Geometric Circuit Tracks */}
    <path
      d="M32 67 L95 31"
      stroke="#00BCD4"
      strokeWidth="10"
      strokeLinecap="square"
    />
    <path
      d="M32 67 L32 151 L95 187"
      stroke="#00BCD4"
      strokeWidth="10"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M48 83 L48 139 L95 167"
      stroke="#00BCD4"
      strokeWidth="8"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />

    {/* Right Outer Slate/Grey Geometric Circuit Tracks */}
    <path
      d="M105 31 L168 67 L168 151 L105 187"
      stroke="#5A6E7F"
      strokeWidth="10"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M152 83 L152 139 L105 167"
      stroke="#5A6E7F"
      strokeWidth="8"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />

    {/* ════════════════════════════════════════════════════════ */}
    {/* CENTER PIECE: PROMINENT BOLD 3D CAPITAL LETTER 'G'       */}
    {/* ════════════════════════════════════════════════════════ */}
    <g id="Center-Capital-G">
      {/* Inner G Hexagonal Border Shield */}
      <path
        d="M100 52 L144 77 L144 131 L100 156 L56 131 L56 77 Z"
        stroke="#00BCD4"
        strokeWidth="7"
        strokeLinejoin="miter"
      />

      {/* 3D Capital 'G' Top Horizontal Bar (Cyan Face + Grey 3D Bevel) */}
      <polygon points="72,74 128,74 120,84 80,84" fill="#00BCD4" />
      <polygon points="80,84 120,84 112,92 80,92" fill="#475569" />

      {/* Capital 'G' Left Vertical Stem (Cyan Face + Dark 3D Shadow) */}
      <polygon points="72,74 80,84 80,124 72,134" fill="#00BCD4" />
      <polygon points="80,84 88,92 88,116 80,124" fill="#334155" />

      {/* Capital 'G' Bottom Horizontal Bar (Cyan Face + Grey 3D Bevel) */}
      <polygon points="72,134 128,134 120,124 80,124" fill="#00BCD4" />
      <polygon points="80,124 120,124 112,116 88,116" fill="#475569" />

      {/* Capital 'G' Right Vertical Lower Arm (Cyan Face + Dark 3D Shadow) */}
      <polygon points="128,134 128,100 120,107 120,124" fill="#00BCD4" />
      <polygon points="120,107 112,113 112,116 120,124" fill="#334155" />

      {/* Capital 'G' Middle Inner Crossbar Pointing Left (Cyan Face) */}
      <polygon points="128,100 102,100 110,107 120,107" fill="#00BCD4" />
      <polygon points="102,100 110,107 102,107" fill="#38BDF8" />
    </g>
  </svg>
);

/**
 * GhazyLogo - Full Brand Logo with Icon & "GhazyGroup" Typography (Image 1)
 * Enforces LTR direction so it ALWAYS displays as Ghazy (Blue) + Group (Dark/White)
 */
export const GhazyLogo = ({ theme = "light", className = "" }) => {
  const isDark = theme === "dark";

  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer ${className}`} dir="ltr">
      {/* Bold 3D Hexagonal Capital 'G' Icon */}
      <GhazyIcon className="w-10 h-10 md:w-11 md:h-11 group-hover:scale-105 transition-transform duration-200 shrink-0" />
      
      {/* Brand Text Typography (Strictly LTR: Ghazy in Blue + Group in Dark/White) */}
      <div className="flex items-center font-sans tracking-tight leading-none text-2xl md:text-3xl font-extrabold select-none" dir="ltr">
        <span className="text-[#0284c7] font-black">
          Ghazy
        </span>
        <span className={isDark ? 'text-white font-bold' : 'text-[#374151] font-bold'}>
          Group
        </span>
      </div>
    </div>
  );
};

export default GhazyLogo;
