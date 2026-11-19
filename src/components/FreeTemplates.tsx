import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEMPLATES, TemplateProduct } from '../data/templates';
import { Reveal } from './Reveal';
import {
  ArrowUpRight,
  Github,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  Layers,
  Code2,
  Smartphone,
  ExternalLink,
  Tag,
  Download,
} from 'lucide-react';

const CATEGORIES = [
  'ALL TEMPLATES',
  'FAST FOOD & RESTAURANT',
  'CAFE & BEVERAGE',
  'PORTFOLIO & PERSONAL',
] as const;

type TemplateCategory = (typeof CATEGORIES)[number];

export const FreeTemplates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory>('ALL TEMPLATES');
  const [modalTemplate, setModalTemplate] = useState<TemplateProduct | null>(null);
  const [spotlightId, setSpotlightId] = useState<string>('tube-coffee');

  const filteredTemplates = TEMPLATES.filter((tpl) => {
    if (selectedCategory === 'ALL TEMPLATES') return true;
    if (selectedCategory === 'FAST FOOD & RESTAURANT') {
      return tpl.category.includes('Restaurant') || tpl.category.includes('Fast Food');
    }
    if (selectedCategory === 'CAFE & BEVERAGE') {
      return tpl.category.includes('Cafe') || tpl.category.includes('Beverage');
    }
    if (selectedCategory === 'PORTFOLIO & PERSONAL') {
      return tpl.category.includes('Portfolio');
    }
    return true;
  });

  const spotlightTemplate =
    TEMPLATES.find((t) => t.id === spotlightId) ||
    filteredTemplates[0] ||
    TEMPLATES[0];

  const handleSpotlight = (id: string) => {
    setSpotlightId(id);
    const el = document.querySelector('#templates');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="templates"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#fff3e6] select-none w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 w-full min-w-0">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#141010]/15 pb-6 sm:pb-8 w-full min-w-0">
          <Reveal className="w-full min-w-0">
            <div className="space-y-3 w-full min-w-0">
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d4261c]">
                <span className="w-6 sm:w-8 h-0.5 bg-[#d4261c] shrink-0" />
                <span className="truncate">05 / DIGITAL TEMPLATE CATALOG & THEME STORE</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.98] tracking-[-0.04em] text-[#141010] break-words">
                FREE WEBSITE TEMPLATES
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="w-full md:max-w-md shrink-0">
            <p className="text-xs sm:text-sm md:text-base text-[#141010]/70 font-normal leading-relaxed">
              Open-source, production-ready website templates and theme starter kits crafted in pure HTML5, CSS3, vanilla JavaScript, and React. 100% free for personal and commercial deployment.
            </p>
          </Reveal>
        </div>

        {/* Category Tabs & Quick Spotlight Switcher */}
        <Reveal delay={0.15} className="w-full min-w-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full min-w-0">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 w-full md:w-auto">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#141010]/50 mr-1 hidden sm:inline">
                CATALOG FILTER:
              </span>
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (cat === 'FAST FOOD & RESTAURANT') setSpotlightId('kfc-fast-food');
                      if (cat === 'CAFE & BEVERAGE') setSpotlightId('tube-coffee');
                    }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 focus:outline-none flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#d4261c] text-white shadow-md scale-105'
                        : 'bg-white text-[#141010]/80 border border-[#141010]/15 hover:border-[#d4261c] hover:text-[#d4261c]'
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Spotlight Switcher */}
            <div className="flex flex-wrap items-center gap-2 pt-1 md:pt-0">
              <span className="text-xs font-black uppercase tracking-wider text-[#141010]/50 hidden lg:inline">
                SPOTLIGHT:
              </span>
              <button
                type="button"
                onClick={() => setSpotlightId('tube-coffee')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all ${
                  spotlightTemplate.id === 'tube-coffee'
                    ? 'bg-[#141010] text-[#fff3e6] shadow-md scale-105'
                    : 'bg-white text-[#141010]/70 border border-[#141010]/15 hover:border-[#d4261c]'
                }`}
              >
                ☕ TUBE COFFEE
              </button>
              <button
                type="button"
                onClick={() => setSpotlightId('kfc-fast-food')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all ${
                  spotlightTemplate.id === 'kfc-fast-food'
                    ? 'bg-[#141010] text-[#fff3e6] shadow-md scale-105'
                    : 'bg-white text-[#141010]/70 border border-[#141010]/15 hover:border-[#d4261c]'
                }`}
              >
                🍗 KFC FAST FOOD
              </button>
            </div>
          </div>
        </Reveal>

        {/* FEATURED PRODUCT HERO CARD */}
        <Reveal delay={0.2} className="w-full min-w-0">
          <div className="bg-white rounded-[24px] sm:rounded-[36px] border-2 border-[#141010]/15 shadow-xl overflow-hidden group hover:border-[#d4261c] transition-all duration-300 w-full min-w-0">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-8 lg:p-12 items-center w-full min-w-0">
              {/* Product Poster Visual (Left Column) */}
              <div className="lg:col-span-7 relative w-full min-w-0">
                <div className="relative rounded-[18px] sm:rounded-[28px] overflow-hidden border border-[#141010]/10 shadow-lg bg-[#141010] aspect-[16/10] sm:aspect-[4/3] w-full group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={spotlightTemplate.poster}
                    alt={`${spotlightTemplate.title} mockup showcase`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#d4261c] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5 truncate">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{spotlightTemplate.badge}</span>
                    </span>

                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#141010] text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow shrink-0">
                      {spotlightTemplate.price}
                    </span>
                  </div>

                  {/* Bottom Floating Poster Zoom Button */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10">
                    <button
                      type="button"
                      onClick={() => setModalTemplate(spotlightTemplate)}
                      className="px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md text-[#141010] text-[11px] sm:text-xs font-black uppercase tracking-wider hover:bg-[#d4261c] hover:text-white transition-colors shadow-lg flex items-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>INSPECT POSTER</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details & Actions (Right Column) */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full min-w-0">
                {/* Category & Badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#141010] text-[#fff3e6]">
                    {spotlightTemplate.category}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#d4261c] uppercase tracking-wider">
                    · HTML5 · CSS3 · JS
                  </span>
                </div>

                {/* Product Title & Tagline */}
                <div className="space-y-1.5 sm:space-y-2 w-full min-w-0">
                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[-0.04em] leading-[0.98] text-[#141010] break-words">
                    {spotlightTemplate.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#d4261c] break-words">
                    {spotlightTemplate.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#141010]/80 leading-relaxed font-normal break-words">
                  {spotlightTemplate.description}
                </p>

                {/* Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 py-2.5 sm:py-3 border-y border-[#141010]/10 w-full min-w-0">
                  {spotlightTemplate.specifications.map((spec) => (
                    <div key={spec.label} className="space-y-0.5 min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#141010]/50">
                        {spec.label}
                      </div>
                      <div className="text-xs font-bold text-[#141010] break-words">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checklist Highlights */}
                <div className="space-y-2 w-full min-w-0">
                  {spotlightTemplate.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-xs font-bold text-[#141010]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4261c] shrink-0 mt-0.5" />
                      <span className="break-words">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 w-full min-w-0">
                  {spotlightTemplate.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#fff3e6] text-[#141010] border border-[#141010]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Product Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2 w-full">
                  {spotlightTemplate.demoUrl ? (
                    <a
                      href={spotlightTemplate.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#d4261c] text-white text-xs font-black uppercase tracking-wider hover:bg-[#141010] transition-colors shadow-md inline-flex items-center justify-center gap-2 group"
                    >
                      <span>VISIT LIVE DEMO</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setModalTemplate(spotlightTemplate)}
                      className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#d4261c] text-white text-xs font-black uppercase tracking-wider hover:bg-[#141010] transition-colors shadow-md inline-flex items-center justify-center gap-2 group"
                    >
                      <span>VIEW HD POSTER</span>
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}

                  {spotlightTemplate.githubUrl && (
                    <a
                      href={spotlightTemplate.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#141010] text-[#fff3e6] text-xs font-black uppercase tracking-wider hover:bg-[#d4261c] transition-colors shadow-md inline-flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>GET SOURCE CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ADDITIONAL TEMPLATES PRODUCT CATALOG GRID */}
        <div className="space-y-6 sm:space-y-8 w-full min-w-0">
          <Reveal delay={0.1} className="w-full min-w-0">
            <div className="flex items-center justify-between border-b border-[#141010]/15 pb-4 w-full min-w-0">
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#141010]">
                MORE FREE TEMPLATES & THEMES ({filteredTemplates.length})
              </h3>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#d4261c]">
                100% OPEN SOURCE
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full min-w-0">
            {filteredTemplates.map((template, idx) => {
              return (
                <Reveal key={template.id} delay={idx * 0.08} className="w-full min-w-0 h-full">
                  <div className="w-full min-w-0 h-full bg-white rounded-[24px] sm:rounded-[30px] border border-[#141010]/15 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#d4261c] transition-all duration-300 flex flex-col justify-between group">
                    {/* Poster Card Top */}
                    <div className="w-full min-w-0">
                      {/* Poster Mockup Image */}
                      <div className="relative aspect-[16/10] bg-[#141010] overflow-hidden w-full">
                        <img
                          src={template.poster}
                          alt={`${template.title} preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                        {/* Badges on Top */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#141010] text-white">
                            {template.category}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#d4261c] text-white shadow">
                            {template.price}
                          </span>
                        </div>

                        {/* Poster Modal Button */}
                        <button
                          type="button"
                          onClick={() => setModalTemplate(template)}
                          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-[#141010] hover:bg-[#d4261c] hover:text-white transition-colors shadow"
                          aria-label={`Inspect poster for ${template.title}`}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Card Content Details */}
                      <div className="p-4 sm:p-6 lg:p-7 space-y-3.5 sm:space-y-4 w-full min-w-0">
                        <div className="space-y-1 w-full min-w-0">
                          <div className="text-[10px] font-black uppercase tracking-widest text-[#d4261c]">
                            {template.badge}
                          </div>
                          <h4 className="font-display font-black text-xl sm:text-2xl uppercase tracking-[-0.03em] leading-tight text-[#141010] break-words">
                            {template.title}
                          </h4>
                          <p className="text-xs font-semibold text-[#141010]/70 line-clamp-2 break-words">
                            {template.tagline}
                          </p>
                        </div>

                        <p className="text-xs text-[#141010]/75 leading-relaxed line-clamp-3 break-words">
                          {template.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="space-y-1.5 pt-2 border-t border-[#141010]/10 w-full min-w-0">
                          {template.features.slice(0, 2).map((feat, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#141010]/85">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#d4261c] shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1 w-full min-w-0">
                          {template.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#fff3e6] text-[#141010] border border-[#141010]/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Product Action Buttons Footer */}
                    <div className="p-4 pt-0 sm:p-6 sm:pt-0 lg:p-7 lg:pt-0 flex items-center gap-2 w-full min-w-0">
                      {template.demoUrl ? (
                        <a
                          href={template.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-0 py-2.5 px-3 rounded-full bg-[#d4261c] text-white text-xs font-black uppercase tracking-wider text-center hover:bg-[#141010] transition-colors shadow-sm flex items-center justify-center gap-1.5 truncate"
                        >
                          <span className="truncate">LIVE DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleSpotlight(template.id)}
                          className="flex-1 min-w-0 py-2.5 px-3 rounded-full bg-[#141010] text-[#fff3e6] text-xs font-black uppercase tracking-wider text-center hover:bg-[#d4261c] transition-colors shadow-sm flex items-center justify-center gap-1.5 truncate"
                        >
                          <span className="truncate">SPOTLIGHT</span>
                          <Sparkles className="w-3.5 h-3.5 text-[#d4261c] shrink-0" />
                        </button>
                      )}

                      {template.githubUrl && (
                        <a
                          href={template.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-full bg-[#141010] text-white hover:bg-[#d4261c] transition-colors shadow-sm shrink-0"
                          aria-label={`View ${template.title} code on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setModalTemplate(template)}
                        className="p-2.5 rounded-full border border-[#141010]/20 bg-white text-[#141010] hover:border-[#d4261c] hover:text-[#d4261c] transition-colors shrink-0"
                        aria-label="Inspect poster"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* FULL POSTER INSPECTION MODAL */}
      <AnimatePresence>
        {modalTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-[#141010]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8"
            onClick={() => setModalTemplate(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#141010]/10 bg-[#fff3e6]">
                <div className="min-w-0 pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#d4261c]">
                      TEMPLATE POSTER & SPECS
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#141010] text-[#fff3e6]">
                      {modalTemplate.price}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-[#141010] truncate">
                    {modalTemplate.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setModalTemplate(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#d4261c] hover:text-white transition-colors text-[#141010] shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
                <div className="rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#141010]/10 shadow-lg bg-[#141010]">
                  <img
                    src={modalTemplate.poster}
                    alt={`${modalTemplate.title} showcase poster`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-[#141010]/80 leading-relaxed font-normal break-words">
                    {modalTemplate.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                    {modalTemplate.demoUrl && (
                      <a
                        href={modalTemplate.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#d4261c] text-white text-xs font-black uppercase tracking-wider hover:bg-[#141010] transition-colors shadow-md"
                      >
                        <span>VISIT LIVE DEMO</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {modalTemplate.githubUrl && (
                      <a
                        href={modalTemplate.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#141010] text-[#fff3e6] text-xs font-black uppercase tracking-wider hover:bg-[#d4261c] transition-colors shadow-md"
                      >
                        <Github className="w-4 h-4" />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
