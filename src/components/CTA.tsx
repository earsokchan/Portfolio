import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Github,
  Linkedin,
  Send,
  MessageSquare,
} from 'lucide-react';

export const CTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'sokchanear0@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="px-4 sm:px-8 py-12 bg-[#fff3e6]">
      <div className="bg-white rounded-[56px] border border-[#141010]/10 py-24 sm:py-32 px-6 sm:px-12 md:px-16 overflow-hidden relative shadow-xl">
        {/* Ambient Corner Accent */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#d4261c]/10 blur-3xl pointer-events-none"
        />

        <div className="max-w-6xl mx-auto space-y-12 text-center relative z-10">
          {/* Header Tag */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141010] text-[#fff3e6] text-xs font-black uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#d4261c] animate-ping" />
              <span>06 / INITIATE COLLABORATION</span>
            </div>
          </Reveal>

          {/* Giant Heading */}
          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] uppercase leading-[0.98] tracking-[-0.045em] text-[#141010]">
              LET'S WORK <br />
              <span className="text-[#d4261c]">TOGETHER.</span>
            </h2>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <p className="text-base sm:text-xl text-[#141010]/75 max-w-2xl mx-auto font-normal leading-relaxed">
              Have an ambitious SaaS product, FinTech integration, or high-performance web platform to build? Let's turn your vision into immaculate code.
            </p>
          </Reveal>

          {/* Magnetic Buttons Row */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {/* Primary Action */}
              <MagneticButton
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                className="px-8 sm:px-10 py-5 rounded-full bg-[#d4261c] text-white font-display font-black text-sm sm:text-base uppercase tracking-wider hover:bg-[#141010] transition-colors shadow-2xl flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              {/* Copy Email Button */}
              <MagneticButton
                onClick={handleCopyEmail}
                className="px-8 sm:px-10 py-5 rounded-full bg-[#fff3e6] text-[#141010] border border-[#141010]/20 font-display font-black text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:border-[#d4261c] hover:text-[#d4261c] transition-colors shadow-md flex items-center gap-3"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>COPY EMAIL: {email}</span>
                  </>
                )}
              </MagneticButton>
            </div>
          </Reveal>

          {/* Social Links Row with Magnetic Button wrappers */}
          <Reveal delay={0.4}>
            <div className="pt-10 border-t border-[#141010]/10 flex flex-wrap items-center justify-center gap-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#141010]/50 mr-2">
                DIRECT CHANNELS:
              </span>

              <MagneticButton
                href="https://github.com/sokchan-dev"
                target="_blank"
                className="px-5 py-2.5 rounded-full bg-white border border-[#141010]/15 text-xs font-extrabold uppercase tracking-wider text-[#141010] hover:bg-[#141010] hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </MagneticButton>

              <MagneticButton
                href="https://linkedin.com/in/sokchan-ear"
                target="_blank"
                className="px-5 py-2.5 rounded-full bg-white border border-[#141010]/15 text-xs font-extrabold uppercase tracking-wider text-[#141010] hover:bg-[#141010] hover:text-white transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </MagneticButton>

              <MagneticButton
                href="https://t.me/sokchan_ear"
                target="_blank"
                className="px-5 py-2.5 rounded-full bg-white border border-[#141010]/15 text-xs font-extrabold uppercase tracking-wider text-[#141010] hover:bg-[#141010] hover:text-white transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>TELEGRAM</span>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

