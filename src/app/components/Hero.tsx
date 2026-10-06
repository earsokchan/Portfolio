import { useEffect, useState } from 'react';
import { motion, Variants } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImg from '../../assets/sokchan_profile.png';

const STAR =
  'M129.93 50.646L116.232 48.9802C111.751 48.4343 109.428 43.3722 111.948 39.6444L119.654 28.2507C123.099 23.1553 117.565 16.8 112.007 19.4694L99.5786 25.437C95.5135 27.3904 90.808 24.3818 90.9043 19.8894L91.1954 6.158C91.3263 0.0180817 83.219 -2.35089 79.9925 2.88452L72.78 14.5926C70.4202 18.4238 64.8285 18.4238 62.4676 14.5926L55.254 2.88452C52.0286 -2.35089 43.9213 0.0180817 44.0522 6.158L44.3443 19.8894C44.4396 24.3818 39.7351 27.3904 35.669 25.437L23.2402 19.4694C17.6821 16.8 12.1488 23.1553 15.5938 28.2507L23.2987 39.6444C25.8197 43.3722 23.4967 48.4343 19.0151 48.9802L5.31715 50.646C-0.807961 51.3912 -2.01005 59.7149 3.65522 62.1473L16.3263 67.5873C20.4725 69.3662 21.2689 74.8751 17.7946 77.7448L7.176 86.5175C2.42825 90.4403 5.93821 98.0899 12.0265 97.0874L25.6412 94.8455C30.0957 94.1111 33.7582 98.3171 32.3938 102.601L28.2271 115.693C26.3639 121.548 33.4726 126.095 38.0494 121.975L48.2849 112.765C51.6337 109.751 56.9992 111.318 58.1797 115.656L61.7859 128.912C63.3981 134.84 71.8495 134.84 73.4616 128.912L77.0679 115.656C78.2483 111.318 83.6139 109.751 86.9626 112.765L97.1982 121.975C101.776 126.095 108.885 121.548 107.02 115.693L102.854 102.601C101.49 98.3171 105.152 94.1111 109.606 94.8455L123.221 97.0874C129.309 98.0899 132.82 90.4403 128.072 86.5175L117.453 77.7448C113.98 74.8751 114.775 69.3662 118.921 67.5873L131.592 62.1473C137.259 59.7149 136.056 51.3912 129.93 50.646Z';
const DECAGON =
  'M58.5 0l17.28 8.288 18.874 3.402 9.084 16.81L117 42.292l-2.582 18.913L117 80.119l-13.262 13.792-9.084 16.81-18.874 3.402L58.5 122.411l-17.28-8.288-18.874-3.402-9.084-16.81L0 80.119l2.582-18.914L0 42.292 13.262 28.5l9.084-16.81L41.22 8.288z';

const line: Variants = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { delay: 0.15 + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pop: Variants = {
  hidden: { scale: 0, rotate: -30, opacity: 0 },
  show: (d: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { delay: d, type: 'spring', stiffness: 180, damping: 14 },
  }),
};

export function Hero() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://countapi.mileshilliard.com/api/v1/hit/sokchan-portfolio-views-unique')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setViews(d.value + 10))
      .catch(() => {});
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-36 sm:pt-44 pb-0">
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #3b1d8f, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cr-subtitle mb-6"
        >
          Full-stack developer · Phnom Penh
        </motion.p>

        {/* HEADLINE */}
        <h1 className="relative cr-display text-white text-[17vw] sm:text-[13vw] lg:text-[10.5rem] select-none">
          <span className="cr-line-mask">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
              I build <span className="cr-accent text-[var(--cr-lime)]">w</span>ebsites
            </motion.span>
          </span>
          <span className="cr-line-mask">
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
              people <span className="cr-accent text-[var(--cr-pink)]">t</span>rust.
            </motion.span>
          </span>
          <span className="cr-line-mask">
            <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block text-[var(--cr-lav)]">
              Built to <span className="cr-accent text-white">s</span>cale.
            </motion.span>
          </span>

          {/* Hand-drawn line */}
          <svg
            aria-hidden
            viewBox="0 0 3113 706"
            fill="none"
            preserveAspectRatio="none"
            className="cr-draw absolute left-[-4%] top-[18%] w-[108%] h-[70%] pointer-events-none"
          >
            <path
              pathLength={1}
              d="M1.6 601.5C456.8 312.3 941.6 804 1170.1 233.5c43-75 239-160.5 371.5-134 85.85 17.17 897.99 268.99 673.5 527.5-42.93 49.43-312.5 77.18-312.5-331 0-212.5 267.2-306.3 556-291.5 288.8 14.8 339.43 203.77 336.5 256-1.77 31.5-17.5 119.39-96 107.5-52.5-7.95-44-70-19-107.5s126-73.7 204 35.5c97.5 136.5 255 168.5 220.5 303.5-27.37 107.08-351.5 182.5-589.5-49-190.4-185.2-239.5-247.5-246.5-254.5"
              stroke="#C2EC40"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </h1>

        {/* Stickers */}
        <motion.div custom={1.1} variants={pop} initial="hidden" animate="show"
          className="cr-sticker cr-float right-[2%] top-[8%] w-28 h-28 sm:w-36 sm:h-36">
          <svg viewBox="0 0 136 134" className="cr-spin" fill="#C2EC40"><path d={STAR} /></svg>
          <p><span className="cr-num">2+</span>years<br />building</p>
        </motion.div>

        <motion.div custom={1.3} variants={pop} initial="hidden" animate="show"
          className="cr-sticker cr-float-2 right-[24%] top-[44%] w-28 h-28 sm:w-32 sm:h-32 hidden md:grid">
          <svg viewBox="0 0 117 123" className="cr-spin-rev" fill="#F04C8A"><path d={DECAGON} /></svg>
          <p className="!text-white">KHQR<br />& ABA<br />PayWay</p>
        </motion.div>

        <motion.div custom={1.5} variants={pop} initial="hidden" animate="show"
          className="cr-sticker cr-float left-[46%] top-[6%] hidden lg:grid">
          <div className="cr-sway px-5 py-3 rounded-2xl bg-[var(--cr-orange)] text-white text-sm font-semibold shadow-xl">
            open to work ✦
          </div>
        </motion.div>

        <motion.div custom={1.7} variants={pop} initial="hidden" animate="show"
          className="cr-sticker cr-float-2 left-[2%] bottom-[-2%] w-32 h-32 hidden sm:grid">
          <svg viewBox="0 0 136 134" className="cr-spin-rev" fill="#104EFF"><path d={STAR} /></svg>
          <p className="!text-white"><span className="cr-num">10+</span>projects<br />shipped</p>
        </motion.div>

        {/* Bottom row: intro + portrait */}
        <div className="relative grid lg:grid-cols-12 gap-10 items-end mt-14 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 pb-16"
          >
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-xl">
              Hi, I'm <span className="text-white font-semibold">Ear Sokchan</span> — Junior Developer at TSD Co., Ltd.
              and Computer Science graduate from RUPP. I design and ship SaaS platforms, POS systems and
              e-commerce stores that are <span className="cr-highlight font-semibold">clean in form, sharp in function.</span>
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              <button id="hero-cta-work" className="cr-btn"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                see my work
              </button>
              <button id="hero-cta-contact" className="cr-btn cr-btn--ghost"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                get in touch
              </button>
            </div>

            <div className="flex items-center gap-6 mt-10">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 grid place-items-center rounded-full border border-white/20 text-white hover:bg-[var(--cr-lime)] hover:text-[var(--cr-ink)] hover:border-transparent transition-colors">
                  <Icon size={18} />
                </a>
              ))}
              {views !== null && (
                <span className="text-xs text-white/50 font-medium">
                  <span className="text-[var(--cr-lime)] font-bold">{views.toLocaleString()}</span> visitors so far
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] sm:w-[380px]">
              <div className="absolute inset-x-6 bottom-0 top-16 rounded-t-[200px] bg-[var(--cr-lav)]" />
              <img src={profileImg} alt="Ear Sokchan portrait" className="relative w-full h-auto object-contain" />
              <span className="absolute left-0 top-24 cr-accent text-3xl text-[var(--cr-lime)] -rotate-12">
                hello there!
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative bg-[var(--cr-lime)] text-[var(--cr-ink)] py-4 -rotate-1 scale-105 z-10">
        <div className="cr-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="cr-marquee-track" aria-hidden={k === 1}>
              {['Next.js', 'React', 'Node.js', 'Laravel', 'MongoDB', 'MySQL', 'Tailwind', 'TypeScript', 'KHQR', 'ABA PayWay'].map((t) => (
                <span key={t} className="cr-display text-3xl flex items-center gap-12">
                  {t}
                  <svg viewBox="0 0 136 134" className="w-6 h-6" fill="currentColor"><path d={STAR} /></svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Wave into lavender About */}
      <svg className="cr-wave relative -mt-6" viewBox="0 0 2315 160" fill="none" preserveAspectRatio="none" aria-hidden>
        <path d="M-6 6L311 47c188 28 607 84 781 74 217-13 678-103 895-115 218-13 386 0 431 0l-103 154H0Z" fill="#D3C5F6" />
      </svg>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[var(--cr-ink)]/60 hover:text-[var(--cr-ink)] cr-float"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}