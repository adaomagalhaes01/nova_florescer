import React from 'react';
export const HeroIllustration: React.FC = () => (
  <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxWidth: '520px' }}>
    {/* Background circle */}
    <circle cx="260" cy="260" r="240" fill="url(#bg-grad)" opacity="0.15" />
    <circle cx="260" cy="260" r="190" fill="url(#bg-grad)" opacity="0.1" />

    {/* Main organic shape / head silhouette */}
    <ellipse cx="260" cy="200" rx="110" ry="130" fill="url(#head-grad)" opacity="0.9" />

    {/* Tree growing from head */}
    {/* Trunk */}
    <path d="M260 160 Q255 140 260 110 Q265 140 260 160Z" fill="#0F5B3A" opacity="0.8" strokeWidth="2" />
    {/* Branches */}
    <path d="M260 130 Q230 110 200 90" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M260 120 Q285 100 310 82" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M260 140 Q240 120 215 108" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M260 135 Q278 115 298 105" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />

    {/* Leaves on tree */}
    {[
      { cx: 196, cy: 86, rx: 18, ry: 12, r: -30 },
      { cx: 312, cy: 78, rx: 18, ry: 12, r: 20 },
      { cx: 260, cy: 72, rx: 22, ry: 14, r: 0 },
      { cx: 235, cy: 100, rx: 14, ry: 9, r: -20 },
      { cx: 285, cy: 97, rx: 14, ry: 9, r: 15 },
      { cx: 215, cy: 108, rx: 13, ry: 8, r: -25 },
      { cx: 300, cy: 106, rx: 13, ry: 8, r: 20 },
    ].map((l, i) => (
      <ellipse
        key={i}
        cx={l.cx} cy={l.cy}
        rx={l.rx} ry={l.ry}
        fill={i % 2 === 0 ? '#2E7D32' : '#7CB342'}
        opacity={0.85 - i * 0.05}
        transform={`rotate(${l.r} ${l.cx} ${l.cy})`}
      />
    ))}

    {/* Circle around head */}
    <circle cx="260" cy="200" r="130" stroke="#7CB342" strokeWidth="1.5" strokeDasharray="8 6" fill="none" opacity="0.5" />

    {/* Flowing organic vine / body */}
    <path d="M220 310 Q180 350 170 400 Q175 430 220 450 Q270 465 310 445 Q355 420 350 390 Q340 355 300 320" stroke="#A5D6A7" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />

    {/* Decorative leaves around */}
    {[
      { x: 150, y: 300, s: 0.8, r: -30 },
      { x: 370, y: 280, s: 0.7, r: 40 },
      { x: 130, y: 380, s: 0.6, r: -50 },
      { x: 385, y: 370, s: 0.65, r: 30 },
      { x: 165, y: 450, s: 0.55, r: -20 },
      { x: 360, y: 440, s: 0.5, r: 25 },
    ].map((l, i) => (
      <g key={i} transform={`translate(${l.x}, ${l.y}) rotate(${l.r}) scale(${l.s})`}>
        <path d="M0 0 Q8 -20 0 -35 Q-8 -20 0 0Z" fill={i % 2 === 0 ? '#7CB342' : '#A5D6A7'} opacity="0.7" />
        <path d="M0 0 L0 -35" stroke="#2E7D32" strokeWidth="1" opacity="0.5" />
      </g>
    ))}

    {/* Small sparkles */}
    {[
      { x: 140, y: 140 }, { x: 390, y: 160 }, { x: 100, y: 250 },
      { x: 410, y: 290 }, { x: 160, y: 470 }, { x: 380, y: 460 },
    ].map((s, i) => (
      <circle key={i} cx={s.x} cy={s.y} r={3 + (i % 3)} fill="#7CB342" opacity={0.4 + (i % 3) * 0.15} />
    ))}

    {/* Ground / roots */}
    <path d="M180 460 Q230 480 260 478 Q290 480 340 460" stroke="#A5D6A7" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
    <path d="M220 470 Q220 490 210 505" stroke="#A5D6A7" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M260 476 Q260 496 255 508" stroke="#A5D6A7" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M300 470 Q302 490 310 503" stroke="#A5D6A7" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />

    <defs>
      <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0F5B3A" />
        <stop offset="100%" stopColor="#7CB342" />
      </linearGradient>
      <linearGradient id="head-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#0F5B3A" stopOpacity="0.8" />
      </linearGradient>
    </defs>
  </svg>
);
