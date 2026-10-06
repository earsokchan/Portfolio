import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'projects', href: '#projects' },
  { name: 'skills', href: '#skills' },
  { name: 'contact', href: '#contact' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden && !open ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Arrow-shaped glass pill nav */}
          <nav className="relative flex items-center gap-6 sm:gap-10 pl-5 pr-12 py-3">
            <svg
              className="absolute inset-0 w-full h-full -z-10"
              viewBox="0 0 538 52"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0.73 7.55C0.73 3.78 5.09 0.73 10.46 0.73H499.93C502.44 0.73 504.86 1.41 506.67 2.63L533.73 20.81C537.73 23.49 537.73 27.97 533.73 30.65L506.67 48.83C504.86 50.05 502.44 50.73 499.93 50.73H10.46C5.09 50.73 0.73 47.68 0.73 43.91V7.55Z"
                fill="#D3C5F6"
                fillOpacity="0.12"
                stroke="white"
                strokeOpacity="0.12"
                strokeWidth="1.4"
              />
            </svg>
            <div className="absolute inset-0 -z-20 rounded-xl backdrop-blur-md" />

            <button
              onClick={() => go('#home')}
              className="cr-display text-2xl text-white leading-none tracking-wide"
              aria-label="Home"
            >
              sok<span className="cr-accent text-[var(--cr-lime)]">c</span>han
            </button>

            <ul className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => go(item.href)}
                    className="cr-roll-host text-sm font-medium text-white/80 hover:text-white"
                  >
                    <span className="cr-roll">
                      <span className="cr-roll-stack">
                        <span>{item.name}</span>
                        <span className="text-[var(--cr-lime)]">{item.name}</span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative w-7 h-5 flex flex-col justify-between"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`h-[2px] bg-white transition-transform ${open ? 'translate-y-[9px] rotate-45' : ''}`} />
              <span className={`h-[2px] bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] bg-white transition-transform ${open ? '-translate-y-[9px] -rotate-45' : ''}`} />
            </button>
          </nav>

          <button id="nav-cta" onClick={() => go('#contact')} className="cr-btn hidden sm:inline-flex">
            let's talk
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--cr-lav)] flex flex-col justify-center px-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.name}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => go(item.href)}
                className="cr-display text-left text-[var(--cr-ink)] text-7xl py-2"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
