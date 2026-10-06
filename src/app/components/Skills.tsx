import { motion, useInView, Variants } from 'motion/react';
import { useRef } from 'react';
import {
  Code2,
  Server,
  Database,
  Bot,
  Sparkles,
  Check
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

// Header animation variants (like Hero & About headers)
const lineUp: Variants = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { delay: i * 0.1, duration: 0.9, ease },
  }),
};

const popSticker: Variants = {
  hidden: { scale: 0, rotate: -20, opacity: 0 },
  show: (d: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { delay: d, type: 'spring', stiffness: 200, damping: 15 },
  }),
};

const STAR_PATH =
  'M129.93 50.646L116.232 48.9802C111.751 48.4343 109.428 43.3722 111.948 39.6444L119.654 28.2507C123.099 23.1553 117.565 16.8 112.007 19.4694L99.5786 25.437C95.5135 27.3904 90.808 24.3818 90.9043 19.8894L91.1954 6.158C91.3263 0.0180817 83.219 -2.35089 79.9925 2.88452L72.78 14.5926C70.4202 18.4238 64.8285 18.4238 62.4676 14.5926L55.254 2.88452C52.0286 -2.35089 43.9213 0.0180817 44.0522 6.158L44.3443 19.8894C44.4396 24.3818 39.7351 27.3904 35.669 25.437L23.2402 19.4694C17.6821 16.8 12.1488 23.1553 15.5938 28.2507L23.2987 39.6444C25.8197 43.3722 23.4967 48.4343 19.0151 48.9802L5.31715 50.646C-0.807961 51.3912 -2.01005 59.7149 3.65522 62.1473L16.3263 67.5873C20.4725 69.3662 21.2689 74.8751 17.7946 77.7448L7.176 86.5175C2.42825 90.4403 5.93821 98.0899 12.0265 97.0874L25.6412 94.8455C30.0957 94.1111 33.7582 98.3171 32.3938 102.601L28.2271 115.693C26.3639 121.548 33.4726 126.095 38.0494 121.975L48.2849 112.765C51.6337 109.751 56.9992 111.318 58.1797 115.656L61.7859 128.912C63.3981 134.84 71.8495 134.84 73.4616 128.912L77.0679 115.656C78.2483 111.318 83.6139 109.751 86.9626 112.765L97.1982 121.975C101.776 126.095 108.885 121.548 107.02 115.693L102.854 102.601C101.49 98.3171 105.152 94.1111 109.606 94.8455L123.221 97.0874C129.309 98.0899 132.82 90.4403 128.072 86.5175L117.453 77.7448C113.98 74.8751 114.775 69.3662 118.921 67.5873L131.592 62.1473C137.259 59.7149 136.056 51.3912 129.93 50.646Z';

// Real Official Brand SVG Components for Frameworks & Libraries
const RealTechIcons: Record<string, React.FC<{ className?: string }>> = {
  React: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="7" fill="#61DAFB" />
    </svg>
  ),
  Nextjs: () => (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <circle cx="60" cy="60" r="54" fill="#000000" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M42 36v48M42 36l36 48M78 36v34" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#3178C6" />
      <path d="M28 42h24M40 42v36M58 70c4 5 11 9 19 9 10 0 15-5 15-11 0-7-5-10-15-14l-4-2c-13-5-18-11-18-20 0-12 11-20 27-20 10 0 17 3 22 7l-5 11c-4-3-10-6-17-6-8 0-12 4-12 8 0 5 4 8 13 11l4 2c14 5 19 12 19 22 0 14-11 22-29 22-12 0-21-4-27-10z" fill="white" />
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#F7DF1E" />
      <path d="M36 78c3 4 8 7 14 7 8 0 13-4 13-13V40h12v32c0 15-9 22-24 22-11 0-19-5-23-11zM72 73c4 3 9 5 15 5 6 0 10-3 10-7 0-5-4-7-11-10l-4-2c-11-4-16-9-16-17 0-10 9-17 22-17 9 0 16 3 20 8l-6 8c-3-3-8-5-14-5-6 0-9 3-9 6 0 4 3 6 10 9l4 2c12 5 17 9 17 18 0 11-9 18-24 18-11 0-19-4-24-11z" fill="black" />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#0F172A" />
      <path d="M26 36c5-11 15-16 29-16 28 0 35 22 21 35-5 5-13 8-20 10-6 2-10 5-12 9-4 8 1 18 13 18 10 0 18-5 24-13" fill="none" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round" />
      <path d="M12 58c4-8 11-12 21-12 20 0 25 16 15 25-4 4-9 6-14 7-4 2-7 4-9 7-3 5 1 13 9 13 8 0 14-4 18-9" fill="none" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M12 8l8 74 30 10 30-10 8-74H12z" fill="#E34F26" />
      <path d="M50 82l22-7 6-59H50v66z" fill="#EF652A" />
      <path d="M50 32h20l-1 11H50v11h18l-2 21-16 5v-11l8-2 1-9H50V32z" fill="white" />
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M12 8l8 74 30 10 30-10 8-74H12z" fill="#1572B6" />
      <path d="M50 82l22-7 6-59H50v66z" fill="#33A9DC" />
      <path d="M50 32h20l-2 22H50v11h17l-2 21-15 5v-11l8-2 1-9H50V32z" fill="white" />
    </svg>
  ),
  Flutter: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M58 12L22 48l12 12 48-48H58z" fill="#45D1FD" />
      <path d="M46 60l12-12 24 24H58L46 60z" fill="#45D1FD" />
      <path d="M58 72l12 12H46l12-12z" fill="#09497D" />
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 8L12 30v44l38 22 38-22V30L50 8z" fill="#5FA04E" />
      <path d="M50 22L24 37v29l26 15 26-15V37L50 22z" fill="#1E293B" />
      <path d="M42 42v16l14 8V50L42 42z" fill="#5FA04E" />
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#1E293B" />
      <text x="50" y="62" fontSize="38" fontWeight="bold" fill="#F8FAFC" textAnchor="middle" fontFamily="sans-serif">ex</text>
    </svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#FF2D20" />
      <path d="M22 30l28-12 28 12v40L50 82 22 70V30z" fill="white" opacity="0.9" />
      <path d="M34 40l16-7 16 7v20l-16 7-16-7V40z" fill="#FF2D20" />
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#111827" />
      <path d="M50 12c-2 0-32 24-32 46 0 18 14 32 32 32s32-14 32-32C82 36 52 12 50 12zm0 66V22c12 16 22 36 22 36 0 12-10 20-22 20z" fill="#47A248" />
    </svg>
  ),
  MySQL: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#00758F" />
      <path d="M22 65c12-25 35-35 56-25-8 18-28 28-56 25z" fill="#F29111" />
      <path d="M30 45c10-15 28-20 45-12-6 12-22 18-45 12z" fill="white" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#336791" />
      <path d="M50 18c-18 0-30 12-30 30 0 20 18 34 30 34s30-14 30-34c0-18-12-30-30-30zm0 12c10 0 18 8 18 18S60 66 50 66 32 58 32 48s8-18 18-18z" fill="white" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#2496ED" />
      <rect x="22" y="44" width="14" height="12" rx="2" fill="white" />
      <rect x="40" y="44" width="14" height="12" rx="2" fill="white" />
      <rect x="58" y="44" width="14" height="12" rx="2" fill="white" />
      <rect x="40" y="28" width="14" height="12" rx="2" fill="white" />
      <path d="M14 62c5 14 24 16 38 16 26 0 36-10 38-16H14z" fill="white" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#232F3E" />
      <path d="M25 45l10-25h10l10 25H45l-2-6h-8l-2 6H25zm11-13l-3 9h6l-3-9zM55 20h10v20c0 4 3 6 7 6s7-2 7-6V20h10v21c0 9-7 15-17 15s-17-6-17-15V20z" fill="white" />
      <path d="M22 68c24 10 44 8 56-2m-6 0l8 4-2-8" stroke="#FF9900" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#000000" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M50 20L82 74H18L50 20z" fill="#FFFFFF" />
    </svg>
  ),
  KHQR: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#E21A22" />
      <rect x="18" y="18" width="28" height="28" fill="white" rx="4" />
      <rect x="24" y="24" width="16" height="16" fill="#E21A22" rx="2" />
      <rect x="54" y="18" width="28" height="28" fill="white" rx="4" />
      <rect x="60" y="24" width="16" height="16" fill="#E21A22" rx="2" />
      <rect x="18" y="54" width="28" height="28" fill="white" rx="4" />
      <rect x="24" y="60" width="16" height="16" fill="#E21A22" rx="2" />
      <path d="M54 54h12v12H54zm16 16h12v12H70zm-16 0h12v12H54zm16-16h12v12H70z" fill="white" />
    </svg>
  ),
  ABAPayWay: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#005C8A" />
      <path d="M25 30h50v40H25z" fill="none" stroke="#E5C158" strokeWidth="6" rx="4" />
      <path d="M25 45h50" stroke="#E5C158" strokeWidth="6" />
      <circle cx="60" cy="56" r="4" fill="#E5C158" />
    </svg>
  ),
  Bakong: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#003566" />
      <path d="M50 18L18 36v28l32 18 32-18V36L50 18z" fill="none" stroke="#C2EC40" strokeWidth="6" />
      <circle cx="50" cy="50" r="10" fill="#C2EC40" />
    </svg>
  ),
  Git: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M92 44L56 8a8 8 0 00-11 0L8 44a8 8 0 000 11l37 37a8 8 0 0011 0l36-36a8 8 0 000-12z" fill="#F05032" />
      <path d="M68 46a7 7 0 10-9-9l-9 9V28a7 7 0 10-6 0v27a7 7 0 104 6l13-13a7 7 0 007-2z" fill="white" />
    </svg>
  ),
  Vite: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M82 14L50 86 18 14h64z" fill="url(#vite-grad)" />
      <path d="M52 14L28 54h18l-4 24 28-44H52l4-20z" fill="#FFC920" />
      <defs>
        <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#1E1E1E" />
      <circle cx="38" cy="28" r="14" fill="#F24E1E" />
      <circle cx="62" cy="28" r="14" fill="#FF7262" />
      <circle cx="38" cy="50" r="14" fill="#A259FF" />
      <circle cx="62" cy="50" r="14" fill="#1ABCFE" />
      <circle cx="38" cy="72" r="14" fill="#0ACF83" />
    </svg>
  ),
  OpenAI: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#10A37F" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="white" strokeWidth="8" strokeDasharray="14 8" />
      <circle cx="50" cy="50" r="9" fill="white" />
    </svg>
  ),
  Claude: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#D97706" />
      <path d="M50 18l8 24 24 8-24 8-8 24-8-24-24-8 24-8 8-24z" fill="white" />
    </svg>
  ),
  DeepSeek: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#3B82F6" />
      <path d="M22 65c20-25 45-20 56 0M30 45c15-18 35-15 45 0" stroke="white" strokeWidth="7" fill="none" strokeLinecap="round" />
    </svg>
  ),
  Antigravity: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#150734" stroke="#C2EC40" strokeWidth="4" />
      <path d="M50 15L64 38L90 44L70 62L76 88L50 74L24 88L30 62L10 44L36 38L50 15Z" fill="#C2EC40" />
    </svg>
  ),
};

interface TechSkill {
  name: string;
  category: string;
  iconKey: keyof typeof RealTechIcons;
  featured?: boolean;
}

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  description: string;
  accentColor: string;
  skills: TechSkill[];
}

export function Skills() {
  const ref = useRef(null);

  const mainCategories: SkillCategory[] = [
    {
      name: 'Frontend Engineering',
      icon: Code2,
      description: 'High-performance, responsive web application interfaces',
      accentColor: '#104EFF',
      skills: [
        { name: 'React.js', category: 'UI Framework', iconKey: 'React', featured: true },
        { name: 'Next.js', category: 'Full-Stack App', iconKey: 'Nextjs', featured: true },
        { name: 'Tailwind CSS', category: 'Styling Engine', iconKey: 'Tailwind', featured: true },
        { name: 'TypeScript', category: 'Type Safety', iconKey: 'TypeScript', featured: true },
        { name: 'JavaScript', category: 'Core Language', iconKey: 'JavaScript' },
        { name: 'HTML5 & CSS3', category: 'Web Standards', iconKey: 'HTML5' },
        { name: 'Flutter UI', category: 'Mobile Apps', iconKey: 'Flutter' },
      ],
    },
    {
      name: 'Backend & Payment Systems',
      icon: Server,
      description: 'Scalable backend services & fintech gateway integrations',
      accentColor: '#F04C8A',
      skills: [
        { name: 'Node.js', category: 'JS Runtime', iconKey: 'NodeJS', featured: true },
        { name: 'Express.js', category: 'REST API', iconKey: 'Express' },
        { name: 'Laravel (PHP)', category: 'MVC Framework', iconKey: 'Laravel', featured: true },
        { name: 'KHQR Payment', category: 'Bakong Gateway', iconKey: 'KHQR', featured: true },
        { name: 'ABA PayWay', category: 'Checkout API', iconKey: 'ABAPayWay', featured: true },
        { name: 'Bakong API', category: 'National Fintech', iconKey: 'Bakong' },
      ],
    },
    {
      name: 'Database & Cloud Hosting',
      icon: Database,
      description: 'Database architecture, containerization & cloud hosting',
      accentColor: '#C2EC40',
      skills: [
        { name: 'MySQL DB', category: 'Relational SQL', iconKey: 'MySQL', featured: true },
        { name: 'PostgreSQL', category: 'Enterprise DB', iconKey: 'PostgreSQL' },
        { name: 'MongoDB', category: 'NoSQL Document', iconKey: 'MongoDB', featured: true },
        { name: 'Vercel Cloud', category: 'Edge Platform', iconKey: 'Vercel', featured: true },
        { name: 'AWS EC2', category: 'Cloud Server', iconKey: 'AWS' },
        { name: 'Docker', category: 'Containers', iconKey: 'Docker', featured: true },
      ],
    },
    {
      name: 'AI Pair-Programming Stack',
      icon: Bot,
      description: 'Agentic AI coding tools & LLM pair-programming workflows',
      accentColor: '#E1611C',
      skills: [
        { name: 'Antigravity AI', category: 'Agentic Pairing', iconKey: 'Antigravity', featured: true },
        { name: 'Claude AI', category: 'Architecture', iconKey: 'Claude', featured: true },
        { name: 'OpenAI Codex', category: 'Code Gen', iconKey: 'OpenAI' },
        { name: 'DeepSeek', category: 'Code Analysis', iconKey: 'DeepSeek' },
        { name: 'Vite Engine', category: 'Build Engine', iconKey: 'Vite' },
        { name: 'Figma System', category: 'UI Design', iconKey: 'Figma' },
      ],
    },
  ];

  // Marquee item list featuring official SVGs for the auto-scrolling ticker bands
  const marqueeItems = [
    { name: 'React.js', iconKey: 'React', color: '#00D8FF' },
    { name: 'Next.js', iconKey: 'Nextjs', color: '#FFFFFF' },
    { name: 'TypeScript', iconKey: 'TypeScript', color: '#3178C6' },
    { name: 'Tailwind CSS', iconKey: 'Tailwind', color: '#38BDF8' },
    { name: 'Node.js', iconKey: 'NodeJS', color: '#5FA04E' },
    { name: 'Laravel', iconKey: 'Laravel', color: '#FF2D20' },
    { name: 'KHQR Payment', iconKey: 'KHQR', color: '#E21A22' },
    { name: 'ABA PayWay', iconKey: 'ABAPayWay', color: '#005C8A' },
    { name: 'MongoDB', iconKey: 'MongoDB', color: '#47A248' },
    { name: 'MySQL', iconKey: 'MySQL', color: '#00758F' },
    { name: 'Docker', iconKey: 'Docker', color: '#2496ED' },
    { name: 'Vercel', iconKey: 'Vercel', color: '#FFFFFF' },
    { name: 'Antigravity AI', iconKey: 'Antigravity', color: '#C2EC40' },
    { name: 'Claude AI', iconKey: 'Claude', color: '#D97706' },
  ];

  return (
    <section ref={ref} id="skills" className="cr-skin relative bg-[var(--cr-ink)] py-28 px-5 sm:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background radial glow effect like Hero header */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #c2ec40, transparent)' }}
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== HEADER SECTION (HEADER ANIMATION) ==================== */}
        <div className="relative">
          {/* Top Subtitle Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="cr-subtitle !text-[var(--cr-lav)]">
              Frameworks, Libraries & AI Workflows
            </span>
          </motion.div>

          {/* Large Header Display Title with Kinetic Mask Reveal */}
          <h2 className="cr-display text-white text-6xl sm:text-8xl lg:text-[8.5rem] tracking-tight">
            <span className="cr-line-mask">
              <motion.span
                custom={0}
                variants={lineUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="block"
              >
                Technical <span className="cr-accent text-[var(--cr-lime)]">S</span>kills.
              </motion.span>
            </span>
            <span className="cr-line-mask">
              <motion.span
                custom={1}
                variants={lineUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className="block text-[var(--cr-lav)] text-5xl sm:text-7xl lg:text-[7rem]"
              >
                Real <span className="cr-accent text-[var(--cr-pink)]">l</span>ibraries & tools.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed"
          >
            An interactive ecosystem of official framework libraries, payment gateways, databases, and AI coding assistants powering my daily development workflow.
          </motion.p>

          {/* Decorative Floating Header Sticker */}
          <motion.div
            custom={0.8}
            variants={popSticker}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="cr-sticker cr-float right-[3%] top-[8%] w-32 h-32 hidden lg:grid"
          >
            <svg viewBox="0 0 136 134" className="cr-spin" fill="#C2EC40">
              <path d={STAR_PATH} />
            </svg>
            <p className="!text-[var(--cr-ink)] font-bold">
              <span className="cr-num">100%</span>
              real
              <br />
              icons
            </p>
          </motion.div>
        </div>

        {/* ==================== AUTO-RUNNING INFINITE MARQUEE TICKER BANDS ==================== */}
        <div className="space-y-4 py-4 overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
          {/* Marquee Band 1: Auto-scrolling Left */}
          <div className="cr-marquee relative flex items-center">
            {[0, 1].map((k) => (
              <div key={k} className="cr-marquee-track flex items-center gap-6 pr-6" aria-hidden={k === 1}>
                {marqueeItems.map((item) => {
                  const IconComp = RealTechIcons[item.iconKey as keyof typeof RealTechIcons];
                  return (
                    <div
                      key={item.name + k}
                      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[var(--cr-ink-2)] border border-white/15 text-white shadow-lg hover:scale-105 transition-transform"
                    >
                      <div className="w-7 h-7 shrink-0">
                        {IconComp ? <IconComp /> : null}
                      </div>
                      <span className="text-sm font-bold tracking-wide">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Marquee Band 2: Auto-scrolling Right */}
          <div className="cr-marquee relative flex items-center">
            {[0, 1].map((k) => (
              <div
                key={k}
                className="cr-marquee-track flex items-center gap-6 pr-6"
                aria-hidden={k === 1}
                style={{ animationDirection: 'reverse', animationDuration: '32s' }}
              >
                {[...marqueeItems].reverse().map((item) => {
                  const IconComp = RealTechIcons[item.iconKey as keyof typeof RealTechIcons];
                  return (
                    <div
                      key={item.name + '-rev-' + k}
                      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[var(--cr-ink-3)] border border-white/15 text-white shadow-lg hover:scale-105 transition-transform"
                    >
                      <div className="w-7 h-7 shrink-0">
                        {IconComp ? <IconComp /> : null}
                      </div>
                      <span className="text-sm font-bold tracking-wide">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== 2x2 CATEGORIES WITH AUTO-BREATHING REAL TECH CARDS ==================== */}
        <div className="grid lg:grid-cols-2 gap-8">
          {mainCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIndex * 0.1, ease }}
              className="rounded-[28px] bg-[var(--cr-ink-2)] border border-[rgba(211,197,246,0.16)] p-7 sm:p-9 shadow-2xl flex flex-col justify-between hover:border-[var(--cr-lime)]/50 transition-colors duration-500 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-5">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl grid place-items-center shrink-0 shadow-lg border border-white/10"
                    style={{ background: category.accentColor, color: '#150734' }}
                  >
                    <category.icon size={26} />
                  </motion.div>
                  <div>
                    <h3 className="cr-display text-3xl sm:text-4xl text-white tracking-wide">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-0.5 font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Grid of Auto-Floating Real Tech Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                  {category.skills.map((skill, skillIndex) => {
                    const RealIcon = RealTechIcons[skill.iconKey];
                    return (
                      <motion.div
                        key={skill.name}
                        animate={{
                          y: [0, -4, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: skillIndex * 0.4 + catIndex * 0.2,
                        }}
                        whileHover={{
                          y: -8,
                          scale: 1.06,
                          rotate: skillIndex % 2 === 0 ? 1.5 : -1.5,
                        }}
                        className={`relative rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between cursor-default ${
                          skill.featured
                            ? 'bg-white/10 border-white/20 hover:bg-white hover:text-[var(--cr-ink)] shadow-lg'
                            : 'bg-white/5 border-white/10 hover:bg-white/15 hover:border-white/30'
                        } group/card`}
                      >
                        {/* Top Row: Official SVG Icon + Core Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover/card:scale-110 drop-shadow-md">
                            {RealIcon ? <RealIcon /> : null}
                          </div>

                          {skill.featured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--cr-lime)] text-[var(--cr-ink)]">
                              <Check size={10} strokeWidth={3} /> Core
                            </span>
                          )}
                        </div>

                        {/* Tech Name & Category Tag */}
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover/card:text-[var(--cr-ink)] transition-colors leading-snug">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-medium text-white/50 group-hover/card:text-[var(--cr-ink)]/70 transition-colors mt-0.5 block">
                            {skill.category}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================== AI PAIR-PROGRAMMING HIGHLIGHT BANNER ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="rounded-[32px] bg-gradient-to-r from-[var(--cr-ink-2)] via-[var(--cr-ink-3)] to-[var(--cr-ink-2)] border-2 border-[var(--cr-lime)] p-8 sm:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[var(--cr-lime)]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--cr-lime)] text-[var(--cr-ink)] text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} /> AI-Native Development Stack
              </div>
              <h3 className="cr-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide">
                Supercharged by <span className="cr-accent text-[var(--cr-lime)]">A</span>I Assistants
              </h3>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
                I leverage agentic AI pairing engines (Antigravity, Cursor, Copilot, Claude & DeepSeek) with official framework libraries to accelerate velocity and ship production systems.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-3 justify-start lg:justify-end">
              {[
                { name: 'Antigravity', role: 'Agentic AI', iconKey: 'Antigravity' },
                { name: 'Cursor AI', role: 'IDE Pair', iconKey: 'React' },
                { name: 'Claude 3.7', role: 'Architecture', iconKey: 'Claude' },
                { name: 'DeepSeek R1', role: 'Analysis', iconKey: 'DeepSeek' },
              ].map((aiTool, idx) => {
                const ToolIcon = RealTechIcons[aiTool.iconKey as keyof typeof RealTechIcons];
                return (
                  <motion.div
                    key={aiTool.name}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                    whileHover={{ scale: 1.08, rotate: idx % 2 === 0 ? 2 : -2 }}
                    className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2.5 hover:bg-[var(--cr-lime)] hover:text-[var(--cr-ink)] hover:border-transparent transition-all cursor-default"
                  >
                    <div className="w-5 h-5 shrink-0">
                      {ToolIcon ? <ToolIcon /> : null}
                    </div>
                    <span>{aiTool.name}</span>
                    <span className="opacity-50 text-[10px] font-mono">· {aiTool.role}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}