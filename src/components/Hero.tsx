import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import profileImg from '../assets/sokchan_profile.png';
import { MagneticButton } from './MagneticButton';

const HEADLINE_LINES = [
  'ENGINEERING',
  'HIGH-VELOCITY',
  'WEB ARCHITECTURES',
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transform for the background giant outlined text
  const parallaxX = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  const lineVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        delay: 0.15 + i * 0.14,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative bg-[#d4261c] text-[#fff3e6] rounded-b-[56px] pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-12 md:px-16 overflow-hidden select-none"
    >
      {/* Giant Outlined Background Word with Scroll Parallax */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none overflow-hidden opacity-25"
      >
        <motion.div
          style={{ x: shouldReduceMotion ? 0 : parallaxX }}
          className="whitespace-nowrap font-display font-black text-[22vw] leading-none uppercase stroke-text tracking-[-0.04em]"
        >
          DEVELOPER · ARCHITECT · ENGINEER · DEVELOPER ·
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top Editorial Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 border-b border-[#fff3e6]/20 pb-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#fff3e6]/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fff3e6] animate-pulse" />
            <span>EAR SOKCHAN — PORTFOLIO 2026</span>
          </div>
          <div className="flex items-center gap-3 text-[#fff3e6]/80">
            <span>FULL-STACK DEVELOPER</span>
            <span>·</span>
            <span>PHNOM PENH, CAMBODIA</span>
          </div>
        </div>

        {/* Main Grid: Left Headline & Bio, Right Arch Visual */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Rising Words & Magnetic Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-1">
              {HEADLINE_LINES.map((line, idx) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    custom={idx}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    className="font-display font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[5.75rem] leading-[0.98] tracking-[-0.045em] text-[#fff3e6]"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-base sm:text-xl text-[#fff3e6]/85 max-w-xl font-normal leading-relaxed"
            >
              Junior Software Developer at <strong className="text-white font-semibold">TSD Co., Ltd.</strong> and Computer Science graduate from <strong className="text-white font-semibold">RUPP</strong>. Building enterprise SaaS platforms, offline-first POS systems, and native Bakong KHQR FinTech integrations.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                href="#projects"
                className="px-8 py-4 rounded-full bg-[#141010] text-[#fff3e6] font-display font-extrabold text-sm uppercase tracking-wider hover:bg-white hover:text-[#141010] transition-colors shadow-2xl flex items-center gap-2 group"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-[#141010] font-display font-extrabold text-sm uppercase tracking-wider hover:bg-[#141010] hover:text-[#fff3e6] transition-colors shadow-xl flex items-center gap-2 group"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>

            {/* Quick Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs font-bold uppercase tracking-wider text-[#fff3e6]/75"
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#fff3e6]" />
                <span>REACT 18 · TYPESCRIPT · NODE</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#fff3e6]" />
                <span>KHQR & ABA PAYWAY CERTIFIED</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Arch-Shaped Visual with Floating Tags & Rotating SVG Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Arch Visual Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[460px] sm:h-[540px] rounded-t-[160px] rounded-b-[30px] border-4 border-[#fff3e6]/30 bg-[#141010] overflow-hidden shadow-2xl flex items-end justify-center group"
              >
                {/* Arch Background Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#141010] via-[#221c1c] to-[#141010]" />
                <div className="absolute top-12 w-64 h-64 rounded-full bg-[#d4261c]/30 blur-2xl pointer-events-none" />

                {/* Profile Photo */}
                <img
                  src={profileImg}
                  alt="Ear Sokchan Portrait"
                  className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Bottom Gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#141010] to-transparent z-10" />

                {/* Arch Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                  <div className="text-[10px] font-black tracking-widest uppercase text-[#d4261c] bg-[#fff3e6] px-2.5 py-1 rounded-md inline-block mb-1">
                    ENGINEER PROFILE
                  </div>
                  <div className="font-display font-black text-2xl uppercase tracking-[-0.04em] text-white">
                    EAR SOKCHAN
                  </div>
                </div>
              </motion.div>

              {/* Floating Tag 1: Top-Left */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -left-4 z-30 bg-white text-[#141010] rounded-full px-4 py-2 shadow-xl border border-[#141010]/10 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4261c]" />
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  OPEN TO WORK 2026
                </span>
              </motion.div>

              {/* Floating Tag 2: Bottom-Right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-16 -right-4 sm:-right-8 z-30 bg-[#141010] text-[#fff3e6] rounded-full px-4 py-2 shadow-2xl border border-[#fff3e6]/20 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#d4261c] animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  BAKONG KHQR & PAYWAY
                </span>
              </motion.div>

              {/* Rotating Circular Text Badge (SVG textPath) */}
              <div className="absolute -top-8 -right-8 z-30 pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-[#141010] text-[#fff3e6] border-2 border-[#fff3e6]/30 shadow-2xl"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full p-1.5"
                    aria-hidden="true"
                  >
                    <path
                      id="circleTextPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text
                      className="text-[9.5px] font-extrabold uppercase tracking-[0.22em] fill-[#fff3e6]"
                    >
                      <textPath href="#circleTextPath" startOffset="0%">
                        ✦ EAR SOKCHAN ✦ FULL STACK ✦ 2026 ✦
                      </textPath>
                    </text>
                  </svg>
                  {/* Central Starlet / Dot */}
                  <div className="absolute w-3 h-3 rounded-full bg-[#d4261c]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <button
            type="button"
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#fff3e6]/75 hover:text-white transition-colors focus:outline-none"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#fff3e6]" />
          </button>
        </div>
      </div>
    </section>
  );
};

