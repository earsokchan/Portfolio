import React from 'react';
import { Reveal } from './Reveal';
import { ArrowUpRight, Award, CheckCircle2, Code2, Globe } from 'lucide-react';

const STATS = [
  {
    number: '10+',
    label: 'PROJECTS SHIPPED',
    detail: 'From SaaS to POS & PWA architectures',
  },
  {
    number: '02+',
    label: 'YEARS IN PRODUCTION',
    detail: 'Full-time software engineering at TSD Co., Ltd.',
  },
  {
    number: '100%',
    label: 'FINTECH PRECISION',
    detail: 'Bakong KHQR & ABA PayWay transactions',
  },
  {
    number: 'RUPP',
    label: 'HONORS GRADUATE',
    detail: 'Computer Science B.S. degree in Phnom Penh',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#fff3e6] text-[#141010]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d4261c]">
            <span className="w-8 h-0.5 bg-[#d4261c]" />
            <span>01 / PHILOSOPHY & BACKGROUND</span>
          </div>
        </Reveal>

        {/* Huge Statement with highlighted words in primary color */}
        <Reveal delay={0.1}>
          <div className="max-w-6xl">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.98] tracking-[-0.045em] text-[#141010]">
              I BUILD DIGITAL PLATFORMS WHERE{' '}
              <span className="text-[#d4261c] underline decoration-4 underline-offset-8">
                METICULOUS TYPOGRAPHY
              </span>{' '}
              MEETS{' '}
              <span className="text-[#d4261c]">HIGH-VELOCITY CODE</span>. FROM
              COMPLEX SAAS SYSTEMS TO MISSION-CRITICAL{' '}
              <span className="bg-[#141010] text-[#fff3e6] px-3 py-1 rounded-xl inline-block my-1">
                FINTECH PROTOCOLS
              </span>
              , I ENGINEER PRODUCTS THAT USERS TRUST AND BUSINESSES SCALE UPON.
            </h2>
          </div>
        </Reveal>

        {/* Bio Breakdown & Narrative */}
        <div className="grid lg:grid-cols-12 gap-10 items-start pt-6 border-t border-[#141010]/15">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#d4261c]">
              CORE MANIFESTO
            </span>
            <p className="font-display font-black text-2xl sm:text-3xl uppercase tracking-[-0.03em] leading-tight text-[#141010]">
              SPEED, RESILIENCE, AND UNCOMPROMISING AESTHETIC INTEGRITY.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#141010]/80 leading-relaxed font-normal">
            <p>
              Based in Phnom Penh, Cambodia, I specialize in bridging intricate technical
              requirements with refined editorial user interfaces. Currently serving as Junior
              Software Developer at <strong>TSD Co., Ltd.</strong>, I work daily on high-stakes
              e-commerce engines, POS terminal drivers, and real-time payment webhooks.
            </p>
            <p>
              My approach eliminates bloat. Every line of TypeScript is purposeful, every
              Framer Motion transition is physically grounded, and every database transaction
              is validated for zero-drop reliability.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#141010]/10 text-xs font-extrabold uppercase tracking-wider text-[#141010]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4261c]" />
                <span>CLEAN ARCHITECTURE</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#141010]/10 text-xs font-extrabold uppercase tracking-wider text-[#141010]">
                <Globe className="w-3.5 h-3.5 text-[#d4261c]" />
                <span>GLOBAL PERFORMANCE STANDARDS</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#141010]/10 text-xs font-extrabold uppercase tracking-wider text-[#141010]">
                <Award className="w-3.5 h-3.5 text-[#d4261c]" />
                <span>FIRST-CLASS TYPE SAFETY</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.1}>
              <div className="bg-white rounded-[30px] p-8 border border-[#141010]/10 shadow-sm hover:shadow-xl hover:border-[#d4261c] transition-all duration-300 group">
                <div className="font-display font-black text-5xl sm:text-6xl uppercase tracking-[-0.045em] text-[#d4261c] group-hover:scale-105 transition-transform origin-left">
                  {stat.number}
                </div>
                <div className="font-display font-extrabold text-sm uppercase tracking-wider text-[#141010] mt-4 mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-[#141010]/70 leading-normal">
                  {stat.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

