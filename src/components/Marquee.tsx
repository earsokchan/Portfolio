import React from 'react';

const MARQUEE_ITEMS = [
  'REACT 18',
  'TYPESCRIPT',
  'FREE THEME TEMPLATES',
  'NEXT.JS ARCHITECTURE',
  'HTML5 & CSS3',
  'BAKONG KHQR',
  'VANILLA JAVASCRIPT',
  'ABA PAYWAY',
  'OFFLINE-FIRST POS',
  'RESPONSIVE DESIGN',
  'FRAMER MOTION',
  'TAILWIND CSS',
  'LENIS SMOOTH SCROLL',
  'NODE.JS & REST APIS',
  'EDITORIAL UI/UX',
  'WEBGL & THREE.JS',
  'HIGH CORE WEB VITALS',
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full py-8 sm:py-12 overflow-hidden select-none">
      <div className="-rotate-1 bg-[#141010] text-[#fff3e6] border-y-2 border-[#d4261c] shadow-2xl overflow-hidden py-4 sm:py-5">
        <div className="flex animate-marquee group cursor-default">
          {/* First strip */}
          <div className="flex items-center gap-8 px-4 shrink-0">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`m1-${idx}`} className="flex items-center gap-8">
                <span className="font-display font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-[-0.04em] whitespace-nowrap">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4261c] shrink-0" />
              </div>
            ))}
          </div>

          {/* Duplicate strip for seamless infinite loop */}
          <div className="flex items-center gap-8 px-4 shrink-0" aria-hidden="true">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`m2-${idx}`} className="flex items-center gap-8">
                <span className="font-display font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-[-0.04em] whitespace-nowrap">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#d4261c] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

