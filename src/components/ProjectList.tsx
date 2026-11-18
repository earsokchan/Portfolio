import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '../data/projects';
import { Reveal } from './Reveal';
import {
  ArrowUpRight,
  Github,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';
import { useMouse } from '../hooks/useMouse';

const CATEGORIES = [
  'ALL',
  'SAAS & COMMERCE',
  'POS & SYSTEMS',
  'WEBGL & APPS',
  'OPEN SOURCE',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export const ProjectList: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('ALL');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const mouse = useMouse();
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating Image Cursor Coordinates using useSpring
  const springConfig = { stiffness: 260, damping: 22, mass: 0.35 };
  const previewX = useSpring(-500, springConfig);
  const previewY = useSpring(-500, springConfig);
  const tiltAngle = useSpring(0, { stiffness: 320, damping: 20 });

  useEffect(() => {
    if (!mouse.isTouch && mouse.x > 0) {
      previewX.set(mouse.x + 35);
      previewY.set(mouse.y - 140);

      // Tilt proportional to horizontal velocity (clamped)
      const clampedSpeed = Math.max(-25, Math.min(25, mouse.speedX * 18));
      tiltAngle.set(clampedSpeed);
    }
  }, [mouse.x, mouse.y, mouse.speedX, mouse.isTouch, previewX, previewY, tiltAngle]);

  // Modal ESC key handler
  useEffect(() => {
    if (!modalProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalProject]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') return PROJECTS;
    if (selectedFilter === 'SAAS & COMMERCE') {
      return PROJECTS.filter(
        (p) =>
          p.id === 'builware-saas' ||
          p.id === 'target-store' ||
          p.id === 'kottrakangea' ||
          p.id === 'gss-cambodia'
      );
    }
    if (selectedFilter === 'POS & SYSTEMS') {
      return PROJECTS.filter(
        (p) =>
          p.id === 'builware-pos' ||
          p.id === 'school-sms' ||
          p.id === 'bantobchuol' ||
          p.id === 'dl-system'
      );
    }
    if (selectedFilter === 'WEBGL & APPS') {
      return PROJECTS.filter(
        (p) => p.id === 'gps-speed-cam' || p.id === 'little-cafe'
      );
    }
    if (selectedFilter === 'OPEN SOURCE') {
      return PROJECTS.filter(
        (p) =>
          p.id === 'developer-portfolio' ||
          p.id === 'school-sms' ||
          Boolean(p.githubUrl)
      );
    }
    return PROJECTS;
  }, [selectedFilter]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 bg-[#fff3e6] relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#141010]/15 pb-8">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#d4261c]">
                <span className="w-8 h-0.5 bg-[#d4261c]" />
                <span>04 / SELECTED WORKS & ARCHIVE — {PROJECTS.length} PROJECTS</span>
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-[0.98] tracking-[-0.045em] text-[#141010]">
                PROJECT ARCHIVE
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-[#141010]/70 max-w-md font-normal leading-relaxed">
              Complete catalog of {PROJECTS.length} production systems, commercial SaaS products, and open-source software. Hover on desktop for dynamic cursor preview.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#141010]/50 mr-1 hidden sm:inline">
              FILTER ARCHIVE:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedFilter === cat;
              const count =
                cat === 'ALL'
                  ? PROJECTS.length
                  : cat === 'SAAS & COMMERCE'
                  ? 4
                  : cat === 'POS & SYSTEMS'
                  ? 4
                  : cat === 'WEBGL & APPS'
                  ? 2
                  : 3;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'bg-[#141010] text-[#fff3e6] shadow-md scale-105'
                      : 'bg-white text-[#141010]/80 border border-[#141010]/15 hover:border-[#d4261c] hover:text-[#d4261c]'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Numbered Project Rows */}
        <div className="divide-y divide-[#141010]/15 border-y border-[#141010]/15">
          {filteredProjects.map((project) => {
            const isHovered = activeProject?.id === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => !mouse.isTouch && setActiveProject(project)}
                onMouseLeave={() => !mouse.isTouch && setActiveProject(null)}
                className={`group relative transition-colors duration-300 ${
                  isHovered ? 'bg-[#d4261c] text-white' : 'bg-transparent text-[#141010]'
                }`}
              >
                <div className="py-8 sm:py-12 px-4 sm:px-8 flex flex-col gap-6">
                  {/* Top Row: Number, Title, Category, Action Buttons */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Left: Number & Big Title */}
                    <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                      <span
                        className={`font-display font-black text-2xl sm:text-4xl tracking-[-0.04em] ${
                          isHovered ? 'text-white/80' : 'text-[#d4261c]'
                        } transition-colors`}
                      >
                        {project.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          {project.badge && (
                            <span
                              className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded ${
                                isHovered
                                  ? 'bg-white text-[#d4261c]'
                                  : 'bg-[#141010] text-[#fff3e6]'
                              } transition-colors`}
                            >
                              {project.badge}
                            </span>
                          )}
                          <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                            {project.category} · {project.year}
                          </span>
                        </div>
                        <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.98] tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-2">
                          {project.title}
                        </h3>
                        {project.metrics && (
                          <div className="mt-1 text-xs font-extrabold uppercase tracking-widest opacity-85 underline decoration-dotted">
                            {project.metrics}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right: Tags & Quick Links */}
                    <div className="flex flex-wrap items-center gap-2.5 lg:justify-end">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border transition-colors ${
                            isHovered
                              ? 'border-white/30 bg-white/10 text-white'
                              : 'border-[#141010]/15 bg-white text-[#141010]/80'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}

                      {/* Modal Poster Button */}
                      <button
                        type="button"
                        onClick={() => setModalProject(project)}
                        aria-label={`Inspect poster for ${project.title}`}
                        className={`px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border transition-all ${
                          isHovered
                            ? 'border-white bg-white text-[#d4261c] hover:bg-[#141010] hover:text-white hover:border-[#141010]'
                            : 'border-[#141010]/20 bg-white text-[#141010] hover:border-[#d4261c] hover:text-[#d4261c]'
                        }`}
                      >
                        POSTER
                      </button>

                      {/* External Links */}
                      <div className="flex items-center gap-1.5 ml-1">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                            className={`p-2.5 rounded-full border transition-all ${
                              isHovered
                                ? 'border-white bg-white text-[#d4261c] hover:scale-110'
                                : 'border-[#141010]/20 bg-white text-[#141010] hover:border-[#d4261c] hover:text-[#d4261c]'
                            }`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit live demo for ${project.title}`}
                            className={`p-2.5 rounded-full border transition-all ${
                              isHovered
                                ? 'border-white bg-white text-[#d4261c] hover:scale-110'
                                : 'border-[#141010]/20 bg-white text-[#141010] hover:border-[#d4261c] hover:text-[#d4261c]'
                            }`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary & Key Highlights */}
                  <div className="pl-0 sm:pl-16 space-y-3">
                    <p
                      className={`text-sm sm:text-base max-w-4xl leading-relaxed transition-colors ${
                        isHovered ? 'text-white/95' : 'text-[#141010]/80'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm font-bold">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isHovered ? 'text-white' : 'text-[#d4261c]'
                            } transition-colors`}
                          />
                          <span className="opacity-90">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Thumbnail Card (Always visible on mobile / tablet screens) */}
                  <div className="block lg:hidden mt-2 rounded-[24px] overflow-hidden border border-black/10 shadow-md">
                    <img
                      src={project.image}
                      alt={`${project.title} poster showcase`}
                      className="w-full h-56 sm:h-80 object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Cursor Preview Image on Desktop (Hover Following Cursor with Velocity Tilt) */}
      {!mouse.isTouch && (
        <AnimatePresence>
          {activeProject && (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                x: previewX,
                y: previewY,
                rotate: tiltAngle,
              }}
              className="fixed top-0 left-0 pointer-events-none z-50 w-88 h-56 rounded-[26px] overflow-hidden shadow-2xl border-2 border-white bg-[#141010] hidden lg:block"
            >
              <img
                src={activeProject.image}
                alt={`${activeProject.title} Preview`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#d4261c] bg-white px-2 py-0.5 rounded inline-block mb-1">
                    {activeProject.category}
                  </div>
                  <div className="font-display font-black text-white text-lg uppercase tracking-tight">
                    {activeProject.title}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Full Poster Modal View (Optional Detailed Zoom) */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-[#141010]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-[32px] overflow-hidden shadow-2xl border border-white/20 max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-6 border-b border-[#141010]/10 bg-[#fff3e6]">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#d4261c]">
                    PROJECT POSTER & METRICS
                  </span>
                  <h4 className="font-display font-black text-2xl uppercase tracking-tight text-[#141010]">
                    {modalProject.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="p-2.5 rounded-full bg-white hover:bg-[#d4261c] hover:text-white transition-colors text-[#141010]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Poster Image Container */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div className="rounded-[20px] overflow-hidden border border-[#141010]/10 shadow-lg">
                  <img
                    src={modalProject.image}
                    alt={`${modalProject.title} showcase`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-base text-[#141010]/80 leading-relaxed font-normal">
                    {modalProject.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {modalProject.liveUrl && (
                      <a
                        href={modalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4261c] text-white text-xs font-black uppercase tracking-wider hover:bg-[#141010] transition-colors"
                      >
                        <span>VISIT LIVE DEMO</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {modalProject.githubUrl && (
                      <a
                        href={modalProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141010] text-[#fff3e6] text-xs font-black uppercase tracking-wider hover:bg-[#d4261c] transition-colors"
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
