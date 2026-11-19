import React from 'react';
import { ArrowUp, Heart, Code2, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141010] text-[#fff3e6] rounded-t-[36px] sm:rounded-t-[56px] pt-16 sm:pt-24 lg:pt-28 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden relative select-none w-full max-w-full">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 w-full min-w-0">
        {/* Top Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/15 pb-16">
          {/* Column 1: Slogan & Status */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4261c] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#fff3e6]/80">
                STATUS: AVAILABLE
              </span>
            </div>
            <p className="text-sm text-[#fff3e6]/70 leading-relaxed">
              Open for full-stack engineering roles, FinTech consultations, free website templates, and bespoke contracts for 2026.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#d4261c]">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs font-extrabold uppercase tracking-wider text-[#fff3e6]/80">
              <li>
                <a href="#about" className="hover:text-[#d4261c] transition-colors">
                  01 / ABOUT
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4261c] transition-colors">
                  02 / SERVICES
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-[#d4261c] transition-colors">
                  03 / TECH STACK
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#d4261c] transition-colors">
                  04 / SELECTED WORK
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-[#d4261c] transition-colors">
                  05 / FREE TEMPLATES
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#d4261c] transition-colors">
                  06 / EXPERIENCE
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Coordinates */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#d4261c]">
              COORDINATES
            </div>
            <div className="text-xs font-bold space-y-1 text-[#fff3e6]/80">
              <div>Phnom Penh, Cambodia</div>
              <div>Time Zone: UTC+07:00 (Indochina)</div>
              <div>Language: English, Khmer</div>
            </div>
          </div>

          {/* Column 4: Back To Top */}
          <div className="space-y-4 flex flex-col items-start md:items-end justify-between">
            <div className="text-xs font-black uppercase tracking-widest text-[#d4261c]">
              SCROLL TO SUMMIT
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-4 rounded-full bg-white/10 hover:bg-[#d4261c] hover:text-white transition-all text-[#fff3e6] group focus:outline-none"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Giant Brand Name */}
        <div className="text-center overflow-hidden">
          <div className="font-display font-black text-[13.5vw] uppercase leading-[0.85] tracking-[-0.05em] text-[#fff3e6] hover:text-[#d4261c] transition-colors duration-500 whitespace-nowrap">
            EAR SOKCHAN
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-bold uppercase tracking-wider text-[#fff3e6]/60">
          <div>
            © 2026 EAR SOKCHAN · ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-2">
            <span>BUILT WITH REACT 18 + LENIS + FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

