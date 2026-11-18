import React from 'react';
import { SERVICES, ServiceItem } from '../data/services';
import { TiltCard } from './TiltCard';
import { Reveal } from './Reveal';
import {
  Code2,
  CreditCard,
  Gauge,
  Layers,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const ICON_MAP = {
  Code2,
  CreditCard,
  Gauge,
  Layers,
  Smartphone,
  ShieldCheck,
};

export const Services: React.FC = () => {
  const getVariantStyles = (variant: ServiceItem['bgVariant']) => {
    switch (variant) {
      case 'ink':
        return {
          cardBg: 'bg-[#141010] text-[#fff3e6] border border-white/10',
          numberColor: 'text-[#d4261c]',
          tagBg: 'bg-white/10 text-[#fff3e6]',
          iconColor: 'text-[#d4261c]',
          checkColor: 'text-[#d4261c]',
          textColor: 'text-[#fff3e6]/80',
        };
      case 'red':
        return {
          cardBg: 'bg-[#d4261c] text-[#fff3e6] border border-white/15',
          numberColor: 'text-white',
          tagBg: 'bg-[#141010]/30 text-white',
          iconColor: 'text-white',
          checkColor: 'text-white',
          textColor: 'text-[#fff3e6]/90',
        };
      case 'cream':
        return {
          cardBg: 'bg-[#fff3e6] text-[#141010] border border-[#141010]/15',
          numberColor: 'text-[#d4261c]',
          tagBg: 'bg-[#141010]/10 text-[#141010]',
          iconColor: 'text-[#d4261c]',
          checkColor: 'text-[#d4261c]',
          textColor: 'text-[#141010]/80',
        };
      case 'white':
      default:
        return {
          cardBg: 'bg-white text-[#141010] border border-[#141010]/10',
          numberColor: 'text-[#d4261c]',
          tagBg: 'bg-[#141010]/5 text-[#141010]',
          iconColor: 'text-[#d4261c]',
          checkColor: 'text-[#d4261c]',
          textColor: 'text-[#141010]/80',
        };
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#fff3e6]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#141010]/15 pb-8">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d4261c]">
                <span className="w-8 h-0.5 bg-[#d4261c]" />
                <span>02 / CAPABILITIES & BENTO SERVICES</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.98] tracking-[-0.045em] text-[#141010]">
                CORE DISCIPLINES
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#141010]/70 max-w-md font-normal leading-relaxed">
              Specialized engineering services tailored for high-stakes consumer platforms,
              enterprise applications, and native digital commerce.
            </p>
          </Reveal>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {SERVICES.map((service, index) => {
            const styles = getVariantStyles(service.bgVariant);
            const Icon = ICON_MAP[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className={`col-span-12 ${service.colSpanTablet} ${service.colSpanDesktop}`}
              >
                <Reveal delay={index * 0.08}>
                  <TiltCard
                    maxTilt={7}
                    scaleOnHover={1.015}
                    className={`h-full rounded-[30px] p-8 sm:p-10 shadow-sm transition-shadow duration-300 hover:shadow-2xl ${styles.cardBg}`}
                  >
                    <div className="flex flex-col justify-between h-full space-y-8">
                      {/* Card Top Row: Number, Tag, and Icon */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-display font-black text-2xl sm:text-3xl tracking-[-0.04em] ${styles.numberColor}`}
                          >
                            {service.number}
                          </span>
                          <span
                            className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${styles.tagBg}`}
                          >
                            {service.tag}
                          </span>
                        </div>
                        <div className={`p-3 rounded-2xl bg-white/10 ${styles.iconColor}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Card Body: Title and Description */}
                      <div className="space-y-3">
                        <h3 className="font-display font-black text-2xl sm:text-3xl uppercase leading-[0.98] tracking-[-0.045em]">
                          {service.title}
                        </h3>
                        <p className={`text-sm sm:text-base leading-relaxed ${styles.textColor}`}>
                          {service.description}
                        </p>
                      </div>

                      {/* Card Bottom: Features List */}
                      <div className="space-y-2 pt-4 border-t border-current/15">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wide">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${styles.checkColor}`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

