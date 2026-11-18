import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Terminal,
  Zap,
  CreditCard,
  Smartphone,
  Server,
  Workflow,
  Sparkles,
} from 'lucide-react';

interface TechChip {
  name: string;
  category: string;
  level: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TECH_ITEMS: TechChip[] = [
  // Frontend
  { name: 'REACT 18', category: 'CORE FRONTEND', level: 'ADVANCED', icon: Code2 },
  { name: 'TYPESCRIPT', category: 'LANGUAGE', level: 'STRICT', icon: Terminal },
  { name: 'NEXT.JS APP ROUTER', category: 'FRAMEWORK', level: 'PRODUCTION', icon: Globe },
  { name: 'TAILWIND CSS', category: 'STYLING ENGINE', level: 'EXPERT', icon: Zap },
  { name: 'FRAMER MOTION', category: 'ANIMATION', level: 'PHYSICS', icon: Sparkles },
  { name: 'LENIS SCROLL', category: 'SMOOTH ENGINE', level: 'INTEGRATED', icon: Workflow },

  // Payments & Hardware
  { name: 'BAKONG KHQR', category: 'FINTECH RAIL', level: 'NATIVE API', icon: CreditCard },
  { name: 'ABA PAYWAY', category: 'PAYMENT GATEWAY', level: 'PRODUCTION', icon: CreditCard },
  { name: 'WEBUSB / ESC-POS', category: 'HARDWARE PROTOCOL', level: 'HARDWARE', icon: Cpu },
  { name: 'WEBSOCKETS & WEBRTC', category: 'REALTIME', level: 'LOW-LATENCY', icon: Smartphone },

  // Backend & Databases
  { name: 'NODE.JS', category: 'RUNTIME', level: 'SCALE', icon: Server },
  { name: 'EXPRESS / FASTIFY', category: 'REST APIS', level: 'HIGH-THROUGHPUT', icon: Layers },
  { name: 'MONGODB', category: 'NOSQL DATABASE', level: 'SCHEMA DESIGN', icon: Database },
  { name: 'POSTGRESQL', category: 'RELATIONAL DB', level: 'ACID / RBAC', icon: Database },
  { name: 'PRISMA ORM', category: 'DATA MAPPING', level: 'TYPE-SAFE', icon: Workflow },
  { name: 'DOCKER & VERCEL', category: 'DEPLOYMENT', level: 'CI/CD', icon: Globe },
];

export const TechStack: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 py-8">
      <div
        id="stack"
        className="bg-[#141010] text-[#fff3e6] rounded-[56px] py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden relative shadow-2xl"
      >
        {/* Background Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#d4261c]/20 blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
            <Reveal>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d4261c]">
                  <span className="w-8 h-0.5 bg-[#d4261c]" />
                  <span>03 / TECHNICAL SPECIFICATION</span>
                </div>
                <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.98] tracking-[-0.045em] text-[#fff3e6]">
                  PRODUCTION STACK
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base text-[#fff3e6]/70 max-w-md font-normal leading-relaxed">
                Battle-tested tools and frameworks deployed in production environments across
                e-commerce, FinTech, and enterprise operations.
              </p>
            </Reveal>
          </div>

          {/* Large Chips That Jump On Hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {TECH_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.name} delay={idx * 0.04}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.04,
                      transition: { type: 'spring', stiffness: 350, damping: 14 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="p-5 sm:p-6 rounded-[30px] bg-white/5 border border-white/10 hover:border-[#d4261c] hover:bg-[#d4261c] hover:text-white transition-colors duration-200 group cursor-default shadow-sm hover:shadow-2xl flex flex-col justify-between h-40"
                  >
                    {/* Top Row: Icon and Level */}
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors text-[#d4261c] group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/10 text-[#fff3e6]/80 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        {item.level}
                      </span>
                    </div>

                    {/* Bottom: Name and Category */}
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#fff3e6]/60 group-hover:text-white/80 transition-colors">
                        {item.category}
                      </div>
                      <div className="font-display font-black text-lg sm:text-xl uppercase tracking-[-0.03em] text-[#fff3e6] group-hover:text-white transition-colors mt-1">
                        {item.name}
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <Reveal delay={0.2}>
            <div className="p-8 rounded-[30px] bg-white/5 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#d4261c]">
                  PERFORMANCE PROMISE
                </span>
                <p className="font-display font-black text-xl sm:text-2xl uppercase tracking-[-0.03em] text-[#fff3e6]">
                  ZERO RENDER JANK · SUB-100MS RESPONSES · FULL TYPE VERIFICATION
                </p>
              </div>
              <div className="shrink-0">
                <div className="px-5 py-2.5 rounded-full bg-[#d4261c] text-white text-xs font-extrabold uppercase tracking-wider">
                  LIGHTHOUSE 98+ BENCHMARK
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

