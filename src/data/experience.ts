// ==============================================================================
// EXPERIENCE & CAREER ARCHIVE
// Two or more large editorial cards that turn red and lift on hover.
// ==============================================================================

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string; // e.g. "Full-time", "Contract"
  summary: string;
  achievements: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tsd-co-ltd',
    period: '2023 — PRESENT',
    role: 'Junior Software Developer',
    company: 'TSD Co., Ltd.',
    companyUrl: 'https://tsd.com.kh/',
    location: 'Phnom Penh, Cambodia',
    type: 'Full-Time Engineering',
    summary:
      'Spearheading modern frontend and full-stack modules for client SaaS portals, payment gateways, and retail management ecosystems.',
    achievements: [
      'Architected high-conversion checkout flows integrating Bakong KHQR and ABA PayWay, processing thousands of daily transactions.',
      'Refactored legacy React single-page applications into modular TypeScript architectures, decreasing bundle sizes by 38%.',
      'Engineered cross-platform POS interfaces directly controlling hardware receipt printers and live inventory webhooks.',
      'Collaborated closely with product designers, backend engineers, and stakeholders to deliver sprint milestones on time.',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Bakong KHQR', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'freelance-eng',
    period: '2022 — 2023',
    role: 'Frontend & Full-Stack Engineer',
    company: 'Independent Practice / Contracts',
    location: 'Phnom Penh & Remote',
    type: 'Client Solutions',
    summary:
      'Partnered directly with startup founders and local commercial brands to conceptualize, design, and deploy bespoke web applications.',
    achievements: [
      'Delivered 6+ custom web applications with responsive design systems, achieving average Google Lighthouse scores of 96+.',
      'Engineered the Bantobchuol rental portal with interactive map filtering, real-time messaging, and digital lease workflows.',
      'Configured automated CI/CD deployment pipelines on Vercel and Railway with automated linting, test suites, and preview URLs.',
    ],
    skills: ['React', 'JavaScript (ESNext)', 'Tailwind CSS', 'PostgreSQL', 'Mapbox GL', 'Git/GitHub'],
  },
  {
    id: 'rupp-degree',
    period: '2020 — 2024',
    role: 'B.S. in Computer Science',
    company: 'Royal University of Phnom Penh (RUPP)',
    companyUrl: 'http://www.rupp.edu.kh/',
    location: 'Phnom Penh, Cambodia',
    type: 'Academic Distinction',
    summary:
      'Rigorous academic foundation in software engineering, algorithms, relational database theory, network architectures, and distributed systems.',
    achievements: [
      'Graduated with honors, presenting a capstone research project on distributed web application performance.',
      'Led university development study groups focused on modern JavaScript and open-source contribution.',
    ],
    skills: ['Data Structures', 'Algorithms', 'Database Design', 'Software Architecture', 'OOP', 'Networking'],
  },
];

