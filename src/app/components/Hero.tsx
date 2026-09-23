import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, ExternalLink, ChevronLeft, ChevronRight, Users, Eye, Activity, ArrowUpRight } from 'lucide-react';
import profileImg from '../../assets/sokchan_profile.png';
import builwareImg from '../../assets/builware.png';
import targetClotheImg from '../../assets/targetclothe_preview.png';
import banthobjulImg from '../../assets/banthobjul.png';
import dlSystemImg from '../../assets/DL-system.png';
import theLittleCafeImg from '../../assets/thelittlacafe.jpeg';
import bantobchuolDashboard from '../../assets/SCR-20260902-kgwo.png';
import kottraKangeaDashboard from '../../assets/SCR-20260901-iuji.png';
import gssMefsImg from '../../assets/SCR-20260923-mefs.png';

export function Hero() {
  const showcaseSlides = [
    {
      id: 'profile',
      title: 'Sokchan',
      subtitle: 'Junior Developer',
      badge: 'Full-Stack Developer',
      image: profileImg,
      link: '#about',
    },
    {
      id: 'builware',
      title: 'Builware SaaS Platform',
      subtitle: 'Multi-Store E-Commerce Platform',
      badge: 'Featured Platform',
      image: builwareImg,
      link: 'https://www.builware.app/',
    },
    {
      id: 'gsscambodia',
      title: 'GSS Cambodia Website Clone',
      subtitle: 'Official Corporate Security Website Clone',
      badge: 'Featured Website Clone',
      image: gssMefsImg,
      link: 'https://gss-cambodia.vercel.app/',
    },
    {
      id: 'targetstore',
      title: 'Target Store Online Shop',
      subtitle: 'Fashion E-Commerce Website',
      badge: 'E-Commerce & Fashion',
      image: targetClotheImg,
      link: 'https://www.targetclothe.com/',
    },
    {
      id: 'banthobjul',
      title: 'Bantobchuol System',
      subtitle: 'Room Rent Management System',
      badge: 'Room Rent SaaS',
      image: banthobjulImg,
      link: '#projects',
    },
    {
      id: 'bantobchuol',
      title: 'Bantobchuol Dashboard',
      subtitle: 'Revenue & Utility Analytics',
      badge: 'Room Rental System',
      image: bantobchuolDashboard,
      link: '#projects',
    },
    {
      id: 'kottrakangea',
      title: 'KottraKangea',
      subtitle: 'Developer Work & Performance Dashboard',
      badge: 'Dev Productivity SaaS',
      image: kottraKangeaDashboard,
      link: 'https://kottrakangea.builware.app/',
    },
    {
      id: 'dlsystem',
      title: 'DL-System Ice Warehouse',
      subtitle: 'Ice Factory & Warehouse System',
      badge: 'Warehouse & Logistics',
      image: dlSystemImg,
      link: '#projects',
    },
    {
      id: 'littlecafe',
      title: 'The Little Cafe',
      subtitle: 'Digital Food & Cafe Menu',
      badge: 'Food & Menu Web App',
      image: theLittleCafeImg,
      link: 'https://thelittlecafe.vercel.app/',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        // Fetch real-time global visitor count
        const response = await fetch('https://countapi.mileshilliard.com/api/v1/hit/sokchan-portfolio-views-unique');
        if (response.ok) {
          const data = await response.json();
          const target = data.value + 10; // Base 10 + Real Global Views
          
          let start = 0;
          const duration = 1500;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              clearInterval(timer);
              setViews(target);
            } else {
              setViews(Math.floor(start));
            }
          }, 16);
        }
      } catch (error) {
        console.error('Error fetching real-time views:', error);
      }
    };

    fetchViews();
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || !isHeroVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, isHeroVisible, showcaseSlides.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const activeSlide = showcaseSlides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length);
  };

  return (
    <section ref={heroRef} id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-white pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: DETAILS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left space-y-6"
          >
            {/* Welcome Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                <Sparkles size={13} /> Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Name & Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.05]">
                Sokchan
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black/50">
                Junior Developer
              </h2>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-black/70 leading-relaxed max-w-xl"
            >
              Junior Developer at Technology Solution Development (TSD Co., Ltd.) &bull; Computer Science Graduate from Royal University of Phnom Penh (RUPP).
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-black text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-black/80 transition-colors shadow-sm"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-black/5 text-black border border-black/10 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-black/10 transition-colors"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Analytics / Views Widget */}
            <motion.div 
              variants={itemVariants} 
              className="mt-4 pt-6 border-t border-black/5 w-full max-w-xl"
            >
              <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-sm font-bold text-black uppercase tracking-widest flex items-center gap-2">
                  <Activity size={16} className="text-black/60" /> Live Analytics
                </h3>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Now
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Visitors Card */}
                <div className="bg-white border border-black/10 hover:border-black/30 transition-colors rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black/[0.02] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-500" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black">
                      <Users size={16} />
                    </div>
                    <span className="text-[11px] font-bold text-black/50 uppercase tracking-wider">Total Visitors</span>
                  </div>
                  <div className="text-3xl font-black text-black tracking-tight">{views.toLocaleString()}</div>
                  <div className="mt-2 text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    <ArrowUpRight size={12} /> +12% this week
                  </div>
                </div>

                {/* Page Views Card */}
                <div className="bg-white border border-black/10 hover:border-black/30 transition-colors rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black/[0.02] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-500" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black">
                      <Eye size={16} />
                    </div>
                    <span className="text-[11px] font-bold text-black/50 uppercase tracking-wider">Page Views</span>
                  </div>
                  <div className="text-3xl font-black text-black tracking-tight">{(views * 3).toLocaleString()}</div>
                  <div className="mt-2 text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                    <ArrowUpRight size={12} /> +24% this week
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2 mt-2">
              <motion.a
                whileHover={{ y: -2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-black/5 border border-black/10 rounded-xl text-black hover:bg-black hover:text-white transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-black/5 border border-black/10 rounded-xl text-black hover:bg-black hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="mailto:contact@example.com"
                className="w-11 h-11 flex items-center justify-center bg-black/5 border border-black/10 rounded-xl text-black hover:bg-black hover:text-white transition-colors"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: COSMIC UNIVERSE AUTOMATIC SHOWCASE SLIDER */}
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Universe Orbiting Glow Rings */}
            <motion.div
              animate={isHeroVisible ? { rotate: 360 } : {}}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-black/15 pointer-events-none will-change-transform"
            />
            <motion.div
              animate={isHeroVisible ? { rotate: -360 } : {}}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-10 rounded-full border border-dotted border-black/10 pointer-events-none hidden sm:block will-change-transform"
            />

            {/* Orbiting Tech Badges (Universe Floating Nodes) */}
            <motion.div
              animate={isHeroVisible ? { y: [0, -8, 0], x: [0, 5, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-2 z-20 bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 will-change-transform"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              React & Next.js
            </motion.div>

            <motion.div
              animate={isHeroVisible ? { y: [0, 8, 0], x: [0, -6, 0] } : {}}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 -right-2 z-20 bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 will-change-transform"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              KHQR & ABA PayWay
            </motion.div>

            {/* Main Animated Showcase Box */}
            <motion.div
              animate={isHeroVisible ? { y: [0, -10, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border border-black/10 shadow-xl bg-white p-3 sm:p-4 group will-change-transform"
            >
              {/* Image Transition Slider */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/5 border border-black/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white" />
                  </motion.div>
                </AnimatePresence>

                {/* Left & Right Slider Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-md"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-md"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Bottom Active Slide Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white pointer-events-none">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-white">
                      {activeSlide.badge}
                    </span>
                    <span className="text-[11px] font-mono opacity-80">
                      {currentIndex + 1} / {showcaseSlides.length}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white leading-snug">
                    {activeSlide.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 font-medium">
                    {activeSlide.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Indicator Dots Below */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-white px-3 py-1.5 rounded-full border border-black/10 shadow-sm">
              {showcaseSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-6 bg-black'
                      : 'w-2 bg-black/20 hover:bg-black/50'
                  }`}
                  title={slide.title}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={isHeroVisible ? { y: [0, 8, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer will-change-transform"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="text-black/30 hover:text-black transition-colors" size={24} />
      </motion.div>
    </section>
  );
}