import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Globe, X, Github, Code2, FolderGit2 } from 'lucide-react';
import { GithubContributions } from './GithubContributions';

// Poster Showcase Imports
import builwareAdminPoster from '../../assets/builware_admin_poster.png';
import gssCambodiaPoster from '../../assets/gss_cambodia_poster.png';
import builwarePosPoster from '../../assets/builware_pos_poster.png';
import schoolManagementPoster from '../../assets/school_management_poster.png';
import targetStorePoster from '../../assets/target_store_poster.png';
import bantobchuolPoster from '../../assets/bantobchuol_poster.png';
import kottraKangeaPoster from '../../assets/kottrakangea_poster.png';
import theLittleCafePoster from '../../assets/thelittlacafe_poster.png';
import dlSystemPoster from '../../assets/dl_system_poster.png';
import portfolioPoster from '../../assets/portfolio_poster.png';

export type PersonalProject = {
  id: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  url?: string;
  orgUrl?: string;
  company?: string;
  companyUrl?: string;
  image: string;
  tags: string[];
};

export type OpenSourceRepo = {
  id: string;
  title: string;
  repoName: string;
  description: string;
  language: string;
  langColor: string;
  license: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
};

const ACCENTS = ['#C2EC40', '#F04C8A', '#104EFF', '#E1611C', '#D3C5F6', '#EA3323'];

const featuredProjects: PersonalProject[] = [
  {
    id: 'builware-saas',
    category: 'E-Commerce SaaS Platform',
    title: 'Builware Platform',
    description:
      'A multi-store e-commerce & inventory SaaS ecosystem empowering businesses with real-time analytics, automated order fulfillment, and ABA PayWay / Bakong KHQR integration.',
    highlights: [
      'Multi-tenant storefronts & admin console',
      'ABA PayWay & Bakong KHQR payments',
      'Real-time sales, inventory & order tracking',
    ],
    url: 'https://www.builware.app/',
    image: builwareAdminPoster,
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'ABA PayWay', 'Bakong KHQR'],
  },
  {
    id: 'gss-clone',
    category: 'Corporate Website Clone',
    title: 'GSS Cambodia',
    description:
      'Pixel-perfect clone of the official GSS Cambodia corporate site with security service showcases, responsive layouts, interactive hero banners and serverless architecture.',
    highlights: [
      'Next.js serverless SSR architecture',
      'Pixel-perfect responsive layout & motion',
      'Security solutions & product catalog',
    ],
    url: 'https://gss-cambodia.vercel.app/',
    orgUrl: 'https://www.gss.com.kh/',
    image: gssCambodiaPoster,
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
  },
];

const mainProjects: PersonalProject[] = [
  {
    id: 'builware-pos',
    category: 'Point of Sale System',
    title: 'Builware POS',
    description:
      'Cloud POS and store management suite for high-volume retail transactions, barcode scanning and instant revenue analytics.',
    highlights: ['Instant barcode billing & receipts', 'Live inventory & low-stock alerts'],
    url: 'https://demo.builware.app/dashboard',
    image: builwarePosPoster,
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Chart.js'],
  },
  {
    id: 'school-sms',
    category: 'School Management System',
    title: 'Hun Sen Kampong Tralach High School',
    description:
      'Digital school portal facilitating student enrollment, grade recording, teacher management and bilingual news distribution.',
    highlights: ['Academic records & grading suite', 'Bilingual Khmer / English (i18n)'],
    url: 'https://sms.builware.app/en',
    image: schoolManagementPoster,
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'i18n'],
  },
  {
    id: 'target-store',
    category: 'E-Commerce & Fashion',
    title: 'Target Store Online Shop',
    description:
      'Modern clothing store with interactive catalogs, size/color variants, cart state management and Bakong KHQR checkout.',
    highlights: ['Dynamic filters & variant selectors', 'Seamless KHQR checkout'],
    url: 'https://www.targetclothe.com/',
    image: targetStorePoster,
    tags: ['React.js', 'Bootstrap', 'Node.js', 'MySQL', 'KHQR API'],
  },
  {
    id: 'bantobchuol',
    category: 'Room Rental Management',
    title: 'Bantobchuol System',
    description:
      'Property management platform tracking rental contracts, automatic water/electric bill calculation and tenant payment status.',
    highlights: ['Automatic utility & meter calculation', 'Monthly invoice & receipt generator'],
    image: bantobchuolPoster,
    tags: ['React.js', 'Express', 'MongoDB', 'i18n', 'Node.js'],
  },
  {
    id: 'kottrakangea',
    category: 'Developer Productivity SaaS',
    title: 'KottraKangea',
    description:
      'Task tracking and productivity tool streamlining sprint planning, assignments, code review workflows and timelines.',
    highlights: ['Kanban & sprint task boards', 'Real-time team activity metrics'],
    url: 'https://kottrakangea.builware.app/',
    image: kottraKangeaPoster,
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 'dl-system',
    category: 'Warehouse & Inventory',
    title: 'DL-System Ice Warehouse',
    description:
      'Ice plant supply chain and warehouse system managing distribution routes, customer credit tracking and stock movement logs.',
    highlights: ['Daily production & delivery logs', 'Customer credit & balance tracker'],
    image: dlSystemPoster,
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
  },
  {
    id: 'little-cafe',
    category: 'Digital Cafe Menu',
    title: 'The Little Cafe',
    description:
      'Mobile-first digital menu for food & beverage ordering with instant category filtering and QR table scanning.',
    highlights: ['Touch-optimized menu experience', 'Instant category filter & search'],
    url: 'https://thelittlecafe.vercel.app/',
    image: theLittleCafePoster,
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'portfolio-source',
    category: 'Free Open Source Portfolio',
    title: 'Developer Portfolio',
    description:
      'The complete open-source code for this personal developer portfolio. Features smooth animations, dynamic project fetching, and modern React practices.',
    highlights: ['Modern UI with Motion animations', 'Reusable React components & modular structure'],
    url: 'https://github.com/earsokchan/Portfolio',
    image: portfolioPoster,
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
  },
];

// DEDICATED SEPARATE OPEN SOURCE & FREE SOURCE CODE PROJECTS
const openSourceRepos: OpenSourceRepo[] = [
  {
    id: 'school-portal-cms',
    title: 'School Management System Dynamic Website',
    repoName: 'earsokchan/School-Management-System-Dynamic-School-Website',
    description:
      'Open-source dynamic school management portal software featuring bilingual Khmer / English (i18n), student grade transcript generation, and administrative portal.',
    language: 'TypeScript',
    langColor: '#3178C6',
    license: 'MIT',
    githubUrl: 'https://github.com/earsokchan/School-Management-System-Dynamic-School-Website',
    demoUrl: 'https://sms.builware.app/en',
    tags: ['Next.js', 'MongoDB', 'i18n', 'Education'],
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio Source Code',
    repoName: 'earsokchan/Portfolio',
    description:
      'Open-source repository for my personal developer portfolio featuring smooth scrolling, beautiful UI components, and fully responsive design built with React, Vite, and Tailwind CSS.',
    language: 'TypeScript',
    langColor: '#3178C6',
    license: 'MIT',
    githubUrl: 'https://github.com/earsokchan/Portfolio',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Portfolio'],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function SectionTitle({ kicker, children }: { kicker: string; children: React.ReactNode }) {
  return (
    <div className="mb-14 sm:mb-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="cr-subtitle mb-5"
      >
        {kicker}
      </motion.p>
      <h2 className="cr-display text-white text-6xl sm:text-8xl lg:text-[8.5rem]">
        <span className="cr-line-mask">
          <motion.span
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease }}
            className="block"
          >
            {children}
          </motion.span>
        </span>
      </h2>
    </div>
  );
}

function CaseCard({
  project,
  index,
  large = false,
  onOpen,
}: {
  project: PersonalProject;
  index: number;
  large?: boolean;
  onOpen: (p: PersonalProject) => void;
}) {
  const accent = ACCENTS[index % ACCENTS.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease }}
      className={`cr-case group ${large ? 'lg:grid lg:grid-cols-12' : ''}`}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={`cr-case-media block w-full text-left ${large ? 'lg:col-span-7 lg:aspect-auto lg:h-full' : ''}`}
        aria-label={`Open ${project.title} poster`}
      >
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="cr-case-cursor">view case</span>
        <span
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: accent, color: '#150734' }}
        >
          {project.company ?? project.category}
        </span>
      </button>

      <div className={`p-6 sm:p-8 flex flex-col ${large ? 'lg:col-span-5 lg:p-10 justify-between' : ''}`}>
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="cr-display text-5xl leading-none" style={{ color: accent }}>
              {num}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="w-12 h-12 shrink-0 grid place-items-center rounded-full border border-white/20 text-white transition-all duration-500 group-hover:rotate-45 hover:!bg-[var(--cr-lime)] hover:!text-[var(--cr-ink)] hover:border-transparent"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
          </div>

          {!project.company && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cr-lav)]/70 mb-2">
              {project.category}
            </p>
          )}
          <h3 className={`cr-display text-white mb-4 ${large ? 'text-5xl sm:text-6xl' : 'text-4xl'}`}>
            {project.title}
          </h3>
          <p className="text-sm sm:text-[15px] text-white/65 leading-relaxed mb-5">{project.description}</p>

          <ul className="space-y-2 mb-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-white/85">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: accent }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="cr-tag">
                {t}
              </span>
            ))}
          </div>
          {(project.orgUrl || project.companyUrl) && (
            <a
              href={project.orgUrl ?? project.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[var(--cr-lime)] hover:underline"
            >
              <Globe size={14} /> {project.company ?? 'Official site'}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<PersonalProject | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="projects" className="relative bg-[var(--cr-ink)] pb-32 space-y-32">
      {/* Wave from lavender About into dark */}
      <svg className="cr-wave rotate-180 -mt-px" viewBox="0 0 2315 160" fill="none" preserveAspectRatio="none" aria-hidden>
        <path d="M-6 6L311 47c188 28 607 84 781 74 217-13 678-103 895-115 218-13 386 0 431 0l-103 154H0Z" fill="#D3C5F6" />
      </svg>

      {/* ==================== SECTION 1: MY PERSONAL WORK ==================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10">
        <SectionTitle kicker="My Personal Work">
          My Personal <span className="cr-accent text-[var(--cr-lime)]">w</span>ork.
        </SectionTitle>

        <div className="space-y-10 mb-10">
          {featuredProjects.map((p, i) => (
            <CaseCard key={p.id} project={p} index={i} large onOpen={setActive} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {mainProjects.map((p, i) => (
            <div key={p.id} className={i % 2 === 1 ? 'md:mt-24' : ''}>
              <CaseCard project={p} index={i + featuredProjects.length} onOpen={setActive} />
            </div>
          ))}
        </div>
      </div>

      {/* ==================== SECTION 2: DEDICATED OPEN SOURCE & FREE SOURCE CODE ROW ==================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 border-t border-white/10">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--cr-lime)] text-[var(--cr-ink)] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Code2 size={14} /> Free Public Repositories & Open Source
          </motion.div>

          <h2 className="cr-display text-white text-6xl sm:text-8xl lg:text-[8.5rem] tracking-tight">
            <span className="cr-line-mask">
              <motion.span
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, ease }}
                className="block"
              >
                Open Source <span className="cr-accent text-[var(--cr-lime)]">c</span>ode.
              </motion.span>
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/75 max-w-2xl leading-relaxed mt-4">
            Free, open-source repositories, SDK wrappers, and full-stack starter templates published on GitHub for the developer community.
          </p>
        </div>

        {/* Dedicated Grid of Open Source Code Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceRepos.map((repo, idx) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[24px] bg-[var(--cr-ink-2)] border border-white/15 p-6 sm:p-7 shadow-xl hover:border-[var(--cr-lime)] transition-colors flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Folder Icon + Repo Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--cr-lime)] text-[var(--cr-ink)] grid place-items-center font-bold shadow-md">
                    <FolderGit2 size={22} />
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Free Code · {repo.license}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="cr-display text-2xl text-white mb-1 group-hover:text-[var(--cr-lime)] transition-colors">
                  {repo.title}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-3 block">{repo.repoName}</p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-5">{repo.description}</p>
              </div>

              <div>
                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {repo.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-white/80 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Row (Language & Get Code) */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: repo.langColor }} />
                    {repo.language}
                  </span>

                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--cr-lime)] text-[var(--cr-ink)] font-bold text-xs hover:scale-105 transition-transform shadow-md"
                  >
                    <Github size={14} /> Get Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contributions Activity Heatmap Grid */}
        <div className="mt-14">
          <GithubContributions />
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-[#150734]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full cursor-default"
            >
              <img src={active.image} alt={active.title} className="w-full max-h-[80vh] object-contain rounded-3xl" />
              <div className="flex items-center justify-between gap-4 mt-5">
                <h4 className="cr-display text-white text-3xl sm:text-4xl">{active.title}</h4>
                {active.url && (
                  <a href={active.url} target="_blank" rel="noopener noreferrer" className="cr-btn">
                    visit live <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute -top-4 -right-4 w-12 h-12 grid place-items-center rounded-full bg-[var(--cr-lime)] text-[var(--cr-ink)] hover:rotate-90 transition-transform duration-500"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}