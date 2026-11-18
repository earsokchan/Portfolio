import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/sokchan_profile.png';
import { Sparkles, Terminal, Code2 } from 'lucide-react';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = '';
            onComplete?.();
          }, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 10;
        return Math.min(100, prev + step);
      });
    }, 65);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="editorial-loader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 0.95,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#d4261c] text-[#fff3e6] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-hidden select-none"
        >
          {/* Top Row: Meta info */}
          <div className="flex justify-between items-center text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#fff3e6]/80 border-b border-[#fff3e6]/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fff3e6] animate-ping" />
              <span>EAR SOKCHAN — PORTFOLIO 2026</span>
            </div>
            <div className="hidden sm:block">PHNOM PENH, CAMBODIA · UTC+07:00</div>
          </div>

          {/* Center: Profile Image + Editorial Monogram & Name */}
          <div className="my-auto flex flex-col items-center justify-center text-center py-6">
            {/* Profile Image Arch/Circle Frame */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6 sm:mb-8"
            >
              {/* Outer Decorative Ring */}
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full sm:rounded-[36px] border-4 border-[#fff3e6] p-1.5 shadow-2xl relative bg-[#141010] overflow-hidden group">
                <img
                  src={profileImg}
                  alt="Ear Sokchan Portrait"
                  className="w-full h-full object-cover object-top rounded-full sm:rounded-[30px]"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Verified Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.35, type: 'spring', stiffness: 280, damping: 15 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-[#141010] text-[#fff3e6] px-3.5 py-1.5 rounded-full border-2 border-[#fff3e6] shadow-xl flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3 text-[#fff3e6]" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  DEV 2026
                </span>
              </motion.div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="text-[11px] sm:text-xs font-black tracking-[0.25em] uppercase text-[#fff3e6]/80 flex items-center justify-center gap-2">
                <span>FULL-STACK DEVELOPER</span>
                <span>·</span>
                <span>TSD CO., LTD.</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.95] tracking-[-0.045em] text-white">
                EAR SOKCHAN
              </h1>

              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#fff3e6]/75 max-w-md mx-auto pt-1">
                SAAS · BAKONG KHQR FINTECH · POS HARDWARE
              </p>
            </motion.div>
          </div>

          {/* Bottom Row: Percentage Counter & Progress Line */}
          <div className="space-y-4 pt-4 border-t border-[#fff3e6]/20">
            <div className="flex justify-between items-end font-display">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-[#fff3e6]/85">
                <Code2 className="w-4 h-4 text-[#fff3e6]" />
                <span>LOADING ASSETS & REPOSITORIES...</span>
              </div>
              <span className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.045em] leading-none text-white">
                {percent}%
              </span>
            </div>

            {/* Progress track */}
            <div className="w-full h-2 bg-[#fff3e6]/25 rounded-full overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
