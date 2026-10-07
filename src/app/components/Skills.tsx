import { motion, AnimatePresence, Variants } from 'motion/react';
import { useState, useRef } from 'react';
import {
  Code2,
  Server,
  Database,
  Bot,
  Sparkles,
  Check,
  ChevronRight,
  Terminal,
  Cpu,
  Filter
} from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

// Kinetic Line Mask Reveal Variants
const lineUp: Variants = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { delay: i * 0.1, duration: 0.9, ease },
  }),
};

// Sticker Pop Animations
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

// Official Vector Brand Icons
const RealTechIcons: Record<string, React.FC<{ className?: string }>> = {
  React: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#150734" />
      <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="38" ry="14" fill="none" stroke="#61DAFB" strokeWidth="5" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="6" fill="#61DAFB" />
    </svg>
  ),
  Nextjs: () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      <rect width="120" height="120" rx="22" fill="#000000" />
      <path d="M42 36v48M42 36l36 48M78 36v34" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
  Cursor: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect width="100" height="100" rx="18" fill="#000000" stroke="#00F0FF" strokeWidth="3" />
      <path d="M30 22L75 48L52 54L66 78L54 84L40 60L25 72V22Z" fill="#00F0FF" />
    </svg>
  ),
};

interface TechSkill {
  name: string;
  category: string;
  iconKey: keyof typeof RealTechIcons;
  featured?: boolean;
  highlightNote?: string;
}

interface SkillCategory {
  id: string;
  code: string;
  name: string;
  icon: React.ElementType;
  description: string;
  accentColor: string;
  skills: TechSkill[];
}

export function Skills() {
  const ref = useRef(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const mainCategories: SkillCategory[] = [
    {
      id: 'frontend',
      code: 'CAT // 01',
      name: 'Frontend Engineering',
      icon: Code2,
      description: 'High-performance, responsive web application interfaces & state engines',
      accentColor: '#104EFF',
      skills: [
        { name: 'React.js', category: 'UI Framework', iconKey: 'React', featured: true, highlightNote: 'Powers targetclothe.com & TSD SaaS platforms' },
        { name: 'Next.js', category: 'Full-Stack App', iconKey: 'Nextjs', featured: true, highlightNote: 'SSR/SSG production web applications' },
        { name: 'Tailwind CSS', category: 'Styling Engine', iconKey: 'Tailwind', featured: true, highlightNote: 'Utility-first responsive design systems' },
        { name: 'TypeScript', category: 'Type Safety', iconKey: 'TypeScript', featured: true, highlightNote: 'Strict type checking & zero-defect codebase' },
        { name: 'JavaScript', category: 'Core Language', iconKey: 'JavaScript', highlightNote: 'Modern ES6+ async/await & Web APIs' },
        { name: 'HTML5 & CSS3', category: 'Web Standards', iconKey: 'HTML5', highlightNote: 'Semantic markup, CSS Grid & Flexbox' },
        { name: 'Flutter UI', category: 'Mobile Apps', iconKey: 'Flutter', highlightNote: 'Cross-platform mobile UI development' },
        { name: 'Vite Engine', category: 'Build Tool', iconKey: 'Vite', highlightNote: 'Lightning fast HMR & production bundler' },
      ],
    },
    {
      id: 'backend',
      code: 'CAT // 02',
      name: 'Backend & Payment Systems',
      icon: Server,
      description: 'Scalable backend microservices & NBC Bakong payment gateways',
      accentColor: '#F04C8A',
      skills: [
        { name: 'Node.js', category: 'JS Runtime', iconKey: 'NodeJS', featured: true, highlightNote: 'Event-driven REST APIs & microservices' },
        { name: 'Express.js', category: 'REST API', iconKey: 'Express', highlightNote: 'Routing, middleware & authentication APIs' },
        { name: 'Laravel (PHP)', category: 'MVC Framework', iconKey: 'Laravel', featured: true, highlightNote: 'Robust backend logic, Eloquent ORM & web APIs' },
        { name: 'KHQR Payment', category: 'Bakong Gateway', iconKey: 'KHQR', featured: true, highlightNote: 'National Bakong QR payment integration' },
        { name: 'ABA PayWay', category: 'Checkout API', iconKey: 'ABAPayWay', featured: true, highlightNote: 'E-commerce credit card & ABA mobile checkout' },
        { name: 'Bakong API', category: 'National Fintech', iconKey: 'Bakong', highlightNote: 'Direct NBC Bakong inter-bank transfers' },
      ],
    },
    {
      id: 'cloud',
      code: 'CAT // 03',
      name: 'Database & Cloud Infrastructure',
      icon: Database,
      description: 'Database architecture, containerization & edge server hosting',
      accentColor: '#C2EC40',
      skills: [
        { name: 'MySQL DB', category: 'Relational SQL', iconKey: 'MySQL', featured: true, highlightNote: 'Relational schemas, queries & indexing' },
        { name: 'PostgreSQL', category: 'Enterprise DB', iconKey: 'PostgreSQL', highlightNote: 'Complex JSON queries & spatial data' },
        { name: 'MongoDB', category: 'NoSQL Document', iconKey: 'MongoDB', featured: true, highlightNote: 'Document collections & aggregation pipelines' },
        { name: 'Vercel Cloud', category: 'Edge Platform', iconKey: 'Vercel', featured: true, highlightNote: 'Automated CI/CD deployments & edge functions' },
        { name: 'AWS EC2', category: 'Cloud Server', iconKey: 'AWS', highlightNote: 'Linux server administration & Nginx reverse proxy' },
        { name: 'Docker', category: 'Containers', iconKey: 'Docker', featured: true, highlightNote: 'Containerization, compose multi-service setups' },
      ],
    },
    {
      id: 'ai',
      code: 'CAT // 04',
      name: 'AI Pair-Programming Stack',
      icon: Bot,
      description: 'Agentic AI coding engines & LLM pair-programming workflows',
      accentColor: '#E1611C',
      skills: [
        { name: 'Antigravity AI', category: 'Agentic Pairing', iconKey: 'Antigravity', featured: true, highlightNote: 'Deepmind agentic IDE assistant for rapid dev' },
        { name: 'Claude 3.7', category: 'Architecture', iconKey: 'Claude', featured: true, highlightNote: 'Complex system design & prompt engineering' },
        { name: 'OpenAI Codex', category: 'Code Gen', iconKey: 'OpenAI', highlightNote: 'Automated snippet generation & boilerplate' },
        { name: 'DeepSeek R1', category: 'Code Analysis', iconKey: 'DeepSeek', highlightNote: 'Deep logic verification & bug detection' },
        { name: 'Cursor AI', category: 'IDE Assistant', iconKey: 'Cursor', featured: true, highlightNote: 'In-editor inline autocomplete & refactoring' },
        { name: 'Figma System', category: 'UI Design', iconKey: 'Figma', highlightNote: 'Figma design tokens & wireframe translation' },
      ],
    },
  ];

  // Marquee items for auto-scrolling ticker bands
  const marqueeItems = [
    { name: 'React.js', iconKey: 'React', category: 'Frontend' },
    { name: 'Next.js', iconKey: 'Nextjs', category: 'Full-Stack' },
    { name: 'TypeScript', iconKey: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', iconKey: 'Tailwind', category: 'Styling' },
    { name: 'Node.js', iconKey: 'NodeJS', category: 'Backend' },
    { name: 'Laravel', iconKey: 'Laravel', category: 'PHP' },
    { name: 'KHQR Payment', iconKey: 'KHQR', category: 'Fintech' },
    { name: 'ABA PayWay', iconKey: 'ABAPayWay', category: 'Checkout' },
    { name: 'MongoDB', iconKey: 'MongoDB', category: 'Database' },
    { name: 'MySQL', iconKey: 'MySQL', category: 'Database' },
    { name: 'Docker', iconKey: 'Docker', category: 'DevOps' },
    { name: 'Vercel', iconKey: 'Vercel', category: 'Cloud' },
    { name: 'Antigravity AI', iconKey: 'Antigravity', category: 'AI Pairing' },
    { name: 'Claude 3.7', iconKey: 'Claude', category: 'LLM' },
    { name: 'DeepSeek R1', iconKey: 'DeepSeek', category: 'Analysis' },
  ];

  // Workflow steps for AI pair-programming section
  const workflowSteps = [
    {
      step: '01',
      title: 'Architect & Design Specs',
      tool: 'Claude 3.7 & Figma',
      iconKey: 'Claude',
      color: '#D97706',
      description: 'Deconstruct requirements into clean modular schemas, database entities, and component design systems.',
    },
    {
      step: '02',
      title: 'Agentic Code Construction',
      tool: 'Antigravity & Cursor AI',
      iconKey: 'Antigravity',
      color: '#C2EC40',
      description: 'Generate high-quality TypeScript/PHP code, custom components, and payment gateway handler integration.',
    },
    {
      step: '03',
      title: 'Deep Logic & Security Audit',
      tool: 'DeepSeek R1 & OpenAI',
      iconKey: 'DeepSeek',
      color: '#3B82F6',
      description: 'Verify edge-case handling, validate API endpoints, and ensure zero-regression refactoring.',
    },
    {
      step: '04',
      title: 'Build & Edge Deployment',
      tool: 'Vite & Vercel Cloud',
      iconKey: 'Vercel',
      color: '#FFFFFF',
      description: 'Run automated build checks, bundle optimization, and push instant edge updates to live production environments.',
    },
  ];

  // Filter categories
  const filterTabs = [
    { id: 'all', label: 'All Stacks' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Fintech' },
    { id: 'cloud', label: 'Cloud & Database' },
    { id: 'ai', label: 'AI Workflows' },
  ];

  // Filtered Categories
  const filteredCategories = activeFilter === 'all' 
    ? mainCategories 
    : mainCategories.filter(cat => cat.id === activeFilter);

  const totalSkillsCount = mainCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section ref={ref} id="skills" className="cr-skin relative bg-[var(--cr-ink)] py-28 px-5 sm:px-8 border-t border-white/10 overflow-hidden">
      
      {/* Background radial glow effects */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #c2ec40, transparent)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #f04c8a, transparent)' }}
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ==================== HEADER SECTION (CRENCY AGENCY STYLE) ==================== */}
        <div className="relative">
          {/* Top Subtitle Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="cr-pill cr-pill--lime">
              <span className="w-2 h-2 rounded-full bg-[var(--cr-ink)] animate-pulse" />
              Frameworks, Libraries & AI Workflows
            </span>
          </motion.div>

          {/* Large Display Title with Kinetic Mask Reveal */}
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
                Frameworks & <span className="cr-accent text-[var(--cr-lime)]">L</span>ibraries.
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
                AI-powered <span className="cr-accent text-[var(--cr-pink)]">w</span>orkflows.
              </motion.span>
            </span>
          </h2>

          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed"
            >
              An interactive ecosystem of official framework libraries, national KHQR payment gateways, databases, and agentic AI pair-programming engines powering my daily engineering velocity.
            </motion.p>

            {/* Counter pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shrink-0"
            >
              <Cpu className="text-[var(--cr-lime)]" size={18} />
              <span className="cr-counter text-xs text-white">
                [ {totalSkillsCount} PRODUCTION TECHS ]
              </span>
            </motion.div>
          </div>

          {/* Decorative Crency Agency Rotating Star Sticker */}
          <motion.div
            custom={0.8}
            variants={popSticker}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="cr-sticker cr-float right-[2%] top-[6%] w-32 h-32 hidden lg:grid"
          >
            <svg viewBox="0 0 136 134" className="cr-spin" fill="#C2EC40">
              <path d={STAR_PATH} />
            </svg>
            <p className="!text-[var(--cr-ink)] font-bold">
              <span className="cr-num">100%</span>
              official
              <br />
              icons
            </p>
          </motion.div>
        </div>

        {/* ==================== AUTO-RUNNING INFINITE MARQUEE TICKER BANDS ==================== */}
        <div className="space-y-4 py-4 overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
          {/* Marquee Band 1: Auto-scrolling Left */}
          <div className="cr-marquee relative flex items-center">
            {[0, 1].map((k) => (
              <div key={k} className="cr-marquee-track flex items-center gap-5 pr-5" aria-hidden={k === 1}>
                {marqueeItems.map((item) => {
                  const IconComp = RealTechIcons[item.iconKey as keyof typeof RealTechIcons];
                  return (
                    <div
                      key={item.name + k}
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[var(--cr-ink-2)] border border-white/15 text-white shadow-lg hover:scale-105 hover:border-[var(--cr-lime)] transition-all cursor-default"
                    >
                      <div className="w-6 h-6 shrink-0">
                        {IconComp ? <IconComp /> : null}
                      </div>
                      <span className="text-xs font-bold tracking-wide">{item.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-[var(--cr-lav)]">
                        {item.category}
                      </span>
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
                className="cr-marquee-track flex items-center gap-5 pr-5"
                aria-hidden={k === 1}
                style={{ animationDirection: 'reverse', animationDuration: '34s' }}
              >
                {[...marqueeItems].reverse().map((item) => {
                  const IconComp = RealTechIcons[item.iconKey as keyof typeof RealTechIcons];
                  return (
                    <div
                      key={item.name + '-rev-' + k}
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[var(--cr-ink-3)] border border-white/15 text-white shadow-lg hover:scale-105 hover:border-[var(--cr-pink)] transition-all cursor-default"
                    >
                      <div className="w-6 h-6 shrink-0">
                        {IconComp ? <IconComp /> : null}
                      </div>
                      <span className="text-xs font-bold tracking-wide">{item.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-[var(--cr-lav)]">
                        {item.category}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ==================== INTERACTIVE FILTER CONTROL TABS ==================== */}
        <div className="flex flex-wrap items-center gap-2.5 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--cr-lav)] mr-2 flex items-center gap-1.5">
            <Filter size={14} className="text-[var(--cr-lime)]" /> Filter Category:
          </span>
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[var(--cr-lime)] text-[var(--cr-ink)] shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ==================== CRENCY AGENCY CATEGORIES & TECH CARDS ==================== */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1, ease }}
                className="relative flex items-stretch rounded-[28px] bg-[var(--cr-ink-2)] border border-[rgba(211,197,246,0.16)] overflow-hidden shadow-2xl hover:border-[var(--cr-lime)]/40 transition-all duration-500 group"
              >
                {/* Agency Vertical Spine Header */}
                <div className="flex justify-center items-center w-[46px] flex-none py-5 border-r border-white/5 bg-[var(--cr-ink-3)] hidden md:flex transition-colors group-hover:bg-[var(--cr-ink-2)]">
                  <span className="cr-spine text-white/30 group-hover:text-[var(--cr-lime)] group-hover:tracking-[0.26em]">
                    {category.code}
                  </span>
                </div>

                {/* Main Card Body */}
                <div className="flex-1 min-w-0 flex flex-col p-6 sm:p-9 w-full">
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7 border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="w-14 h-14 rounded-2xl grid place-items-center shrink-0 shadow-xl border border-white/10"
                        style={{ background: category.accentColor, color: '#150734' }}
                      >
                        <category.icon size={26} />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[var(--cr-lav)] md:hidden">
                            {category.code}
                          </span>
                          <h3 className="cr-display text-3xl sm:text-4xl text-white tracking-wide">
                            {category.name}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-white/60 mt-1 font-medium">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 self-start sm:self-center">
                      <span className="cr-pill cr-pill--ghost text-xs">
                        {category.skills.length} TECHS
                      </span>
                    </div>
                  </div>

                  {/* Grid of Floating Tech Skill Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => {
                      const RealIcon = RealTechIcons[skill.iconKey];
                      return (
                        <motion.div
                          key={skill.name}
                          animate={{ y: [0, -2, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: skillIndex * 0.3 + catIndex * 0.2,
                          }}
                          whileHover={{
                            y: -6,
                            scale: 1.02,
                            rotate: skillIndex % 2 === 0 ? 1 : -1,
                          }}
                          className="relative rounded-[20px] p-5 border transition-all duration-300 flex flex-col justify-between cursor-default group/card bg-[var(--cr-lime)] border-[var(--cr-lime)] shadow-[0_0_30px_rgba(194,236,64,0.15)] hover:shadow-[0_0_40px_rgba(194,236,64,0.3)]"
                        >
                          <div>
                            {/* Top Row: SVG Icon + Core Badge */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover/card:scale-110 drop-shadow-md">
                                {RealIcon ? <RealIcon /> : null}
                              </div>

                              {skill.featured && (
                                <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-[var(--cr-ink)] text-[var(--cr-lime)] transition-colors">
                                  <Check size={10} strokeWidth={3} /> Core
                                </span>
                              )}
                            </div>

                            {/* Tech Name & Category Tag */}
                            <h4 className="text-base font-bold transition-colors leading-snug text-[var(--cr-ink)]">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-semibold transition-colors mt-1 block text-[var(--cr-ink)]/70">
                              {skill.category}
                            </span>
                          </div>

                          {/* Highlight Note / Real Application Tooltip */}
                          {skill.highlightNote && (
                            <div className="mt-5 pt-4 border-t transition-colors border-[var(--cr-ink)]/20">
                              <p className="text-[11px] leading-relaxed font-medium flex items-start gap-1.5 text-[var(--cr-ink)]/90">
                                <span className="shrink-0 text-[var(--cr-ink)]">✦</span>
                                {skill.highlightNote}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ==================== AI PAIR-PROGRAMMING WORKFLOW SHOWCASE BANNER ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="rounded-[32px] bg-gradient-to-br from-[var(--cr-ink-2)] via-[var(--cr-ink-3)] to-[var(--cr-ink)] border-2 border-[var(--cr-lime)] p-8 sm:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-[var(--cr-lime)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 -top-20 w-64 h-64 bg-[var(--cr-pink)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            {/* Banner Header */}
            <div className="grid lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--cr-lime)] text-[var(--cr-ink)] text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Sparkles size={14} /> Agentic AI Engineering Stack
                </div>
                <h3 className="cr-display text-4xl sm:text-5xl lg:text-6xl text-[#ffffff] tracking-wide">
                  Supercharged by <span className="cr-accent text-[var(--cr-lime)]">A</span>I Assistants
                </h3>
                <p className="text-sm sm:text-base text-[#ffffff]/75 leading-relaxed max-w-xl">
                  I combine agentic AI pairing engines with official framework libraries to achieve 10x engineering velocity, rapid prototyping, and bug-free production deliveries.
                </p>
              </div>

              {/* AI Agent Cards */}
              <div className="lg:col-span-5 flex flex-wrap gap-3 justify-start lg:justify-end">
                {[
                  { name: 'Antigravity', role: 'Agentic IDE', iconKey: 'Antigravity', highlight: true },
                  { name: 'Claude 3.7', role: 'Architecture', iconKey: 'Claude', highlight: false },
                  { name: 'DeepSeek R1', role: 'Code Analysis', iconKey: 'DeepSeek', highlight: false },
                  { name: 'Cursor AI', role: 'Inline Pairing', iconKey: 'Cursor', highlight: false },
                ].map((aiTool, idx) => {
                  const ToolIcon = RealTechIcons[aiTool.iconKey as keyof typeof RealTechIcons];
                  return (
                    <motion.div
                      key={aiTool.name}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                      whileHover={{ scale: 1.08, rotate: idx % 2 === 0 ? 2 : -2 }}
                      className={`px-4 py-3 rounded-2xl border backdrop-blur-md text-xs font-bold flex items-center gap-3 transition-all cursor-default ${
                        aiTool.highlight
                          ? 'bg-[var(--cr-lime)] text-[var(--cr-ink)] border-[var(--cr-lime)] shadow-lg'
                          : 'bg-[#ffffff]/10 text-[#ffffff] border-white/20 hover:bg-[var(--cr-lime)] hover:text-[var(--cr-ink)]'
                      }`}
                    >
                      <div className="w-6 h-6 shrink-0">
                        {ToolIcon ? <ToolIcon /> : null}
                      </div>
                      <div>
                        <div className="leading-tight">{aiTool.name}</div>
                        <span className="opacity-70 text-[10px] font-mono block">
                          {aiTool.role}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 4-Step Interactive Workflow */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--cr-lav)] flex items-center gap-2">
                  <Terminal size={14} className="text-[var(--cr-lime)]" /> 4-Step AI Pair-Programming Cycle:
                </h4>
                <span className="text-xs font-mono text-[#ffffff]/50">
                  Click step to explore
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {workflowSteps.map((ws, index) => {
                  const IconComp = RealTechIcons[ws.iconKey as keyof typeof RealTechIcons];
                  const isSelected = activeWorkflowStep === index;
                  return (
                    <motion.div
                      key={ws.step}
                      onClick={() => setActiveWorkflowStep(index)}
                      whileHover={{ scale: 1.03 }}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#ffffff] text-[var(--cr-ink)] border-[var(--cr-lime)] shadow-xl'
                          : 'bg-[#ffffff]/5 text-[#ffffff] border-white/10 hover:bg-[#ffffff]/10'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`cr-counter text-xs px-2.5 py-1 rounded-full font-bold ${
                              isSelected
                                ? 'bg-[var(--cr-ink)] text-[var(--cr-lime)]'
                                : 'bg-[#ffffff]/10 text-[var(--cr-lav)]'
                            }`}
                          >
                            STEP {ws.step}
                          </span>
                          <div className="w-7 h-7 shrink-0">
                            {IconComp ? <IconComp /> : null}
                          </div>
                        </div>

                        <h5 className={`font-bold text-base mb-1 ${isSelected ? 'text-[var(--cr-ink)]' : 'text-[#ffffff]'}`}>
                          {ws.title}
                        </h5>
                        <span className={`text-[11px] font-mono block mb-2 ${isSelected ? 'text-[var(--cr-ink)]/70' : 'text-[var(--cr-lav)]'}`}>
                          {ws.tool}
                        </span>

                        <p className={`text-xs leading-relaxed ${isSelected ? 'text-[var(--cr-ink)]/80 font-medium' : 'text-[#ffffff]/60'}`}>
                          {ws.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 flex items-center justify-between">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-[var(--cr-ink)]' : 'text-[var(--cr-lime)]'}`}>
                          {isSelected ? 'Active Step' : 'View Workflow'}
                        </span>
                        <ChevronRight size={14} className={isSelected ? 'text-[var(--cr-ink)]' : 'text-white/40'} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Proof Metrics */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-6 text-white/80 font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--cr-lime)]" />
                  10x Engineering Velocity
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--cr-pink)]" />
                  Zero-Defect Refactoring
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--cr-blue)]" />
                  100% Production Ready
                </span>
              </div>

              <a
                href="#contact"
                className="cr-btn cr-btn--sm hover:scale-105 transition-transform"
              >
                let's build together
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}