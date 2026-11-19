import React from 'react';
import { EXPERIENCES } from '../data/experience';
import { Reveal } from './Reveal';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#fff3e6] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 w-full min-w-0">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#141010]/15 pb-8">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d4261c]">
                <span className="w-8 h-0.5 bg-[#d4261c]" />
                <span>06 / CAREER CHRONOLOGY</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.98] tracking-[-0.045em] text-[#141010]">
                EXPERIENCE
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#141010]/70 max-w-md font-normal leading-relaxed">
              Track record in enterprise full-stack development, software consultancy, and academic distinction. Hover cards to interact.
            </p>
          </Reveal>
        </div>

        {/* Large Experience Cards that turn red and lift on hover */}
        <div className="grid lg:grid-cols-2 gap-8">
          {EXPERIENCES.slice(0, 2).map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.12}>
              <div className="h-full rounded-[30px] border border-[#141010]/10 bg-white p-8 sm:p-12 transition-all duration-300 hover:bg-[#d4261c] hover:text-white group shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between cursor-default">
                <div className="space-y-6">
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-current/15 pb-4">
                    <div className="flex items-center gap-2 text-xs font-black tracking-wider uppercase opacity-80">
                      <Calendar className="w-3.5 h-3.5 text-[#d4261c] group-hover:text-white transition-colors" />
                      <span>{item.period}</span>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#141010]/5 group-hover:bg-white/20 transition-colors">
                      {item.type}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div>
                    <h3 className="font-display font-black text-3xl sm:text-4xl uppercase leading-[0.98] tracking-[-0.045em] mb-2">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-extrabold text-[#d4261c] group-hover:text-white transition-colors">
                      <span>{item.company}</span>
                      <span>·</span>
                      <span className="text-xs font-bold text-inherit opacity-85 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base leading-relaxed opacity-80 font-normal">
                    {item.summary}
                  </p>

                  {/* Bulleted Accomplishments */}
                  <div className="space-y-2.5 pt-2">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#d4261c] group-hover:text-white transition-colors mt-0.5" />
                        <span className="leading-normal opacity-90">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Skills Pills */}
                <div className="pt-8 mt-6 border-t border-current/15 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#141010]/5 group-hover:bg-white/20 group-hover:text-white text-[#141010] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education & Academic Card */}
        {EXPERIENCES[2] && (
          <Reveal delay={0.2}>
            <div className="rounded-[30px] border border-[#141010]/10 bg-white p-8 sm:p-10 transition-all duration-300 hover:bg-[#d4261c] hover:text-white group shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-default">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black tracking-wider uppercase text-[#d4261c] group-hover:text-white transition-colors">
                    {EXPERIENCES[2].period}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-widest px-3 py-0.5 rounded-full bg-[#141010]/5 group-hover:bg-white/20 transition-colors">
                    {EXPERIENCES[2].type}
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-[-0.04em]">
                  {EXPERIENCES[2].role} — {EXPERIENCES[2].company}
                </h3>
                <p className="text-sm opacity-80 max-w-2xl leading-relaxed">
                  {EXPERIENCES[2].summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                {EXPERIENCES[2].skills.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#141010]/5 group-hover:bg-white/20 group-hover:text-white text-[#141010] transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

