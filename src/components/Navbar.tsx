import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'STACK', href: '#stack' },
  { label: 'WORK', href: '#projects' },
  { label: 'TEMPLATES', href: '#templates' },
  { label: 'EXPERIENCE', href: '#experience' },
];

export const Navbar: React.FC = () => {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHidden = scrollDirection === 'down' && !isAtTop && !mobileMenuOpen;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isHidden ? -120 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
      >
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-[#141010]/10 px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="group flex items-center gap-1.5 focus:outline-none"
          >
            <span className="font-display font-black text-xl tracking-[-0.04em] text-[#141010] group-hover:text-[#d4261c] transition-colors">
              ES
            </span>
            <span className="w-2 h-2 rounded-full bg-[#d4261c] animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-extrabold uppercase tracking-wider text-[#141010]/80">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="hover:text-[#d4261c] transition-colors py-1 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4261c] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141010] text-[#fff3e6] text-xs font-extrabold uppercase tracking-wider hover:bg-[#d4261c] hover:text-white transition-all shadow-sm hover:shadow"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="md:hidden p-2 text-[#141010] hover:text-[#d4261c] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-20 left-4 right-4 z-40 bg-white rounded-[30px] border border-[#141010]/10 shadow-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-base font-extrabold uppercase tracking-tight text-[#141010] hover:text-[#d4261c] py-2 border-b border-[#141010]/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="mt-2 w-full py-3 rounded-full bg-[#d4261c] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

