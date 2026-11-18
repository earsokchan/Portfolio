// ==============================================================================
// PROJECTS DATA REPOSITORY
// All 11 projects from Ear Sokchan's production & open-source catalog.
// ==============================================================================

import builwareAdminPoster from '../assets/builware_admin_poster.png';
import gpsSpeedCamPoster from '../assets/Poster@2x.png';
import gssCambodiaPoster from '../assets/gss_cambodia_poster.png';
import builwarePosPoster from '../assets/builware_pos_poster.png';
import schoolManagementPoster from '../assets/school_management_poster.png';
import targetStorePoster from '../assets/target_store_poster.png';
import bantobchuolPoster from '../assets/bantobchuol_poster.png';
import kottraKangeaPoster from '../assets/kottrakangea_poster.png';
import dlSystemPoster from '../assets/dl_system_poster.png';
import theLittleCafePoster from '../assets/thelittlacafe_poster.png';
import portfolioPoster from '../assets/portfolio_poster.png';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  metrics?: string;
  badge?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'builware-saas',
    number: '01',
    title: 'Builware Platform',
    category: 'E-Commerce SaaS Ecosystem',
    year: '2024 - 2025',
    tagline: 'Multi-store e-commerce & automated inventory platform with FinTech integration.',
    description:
      'A multi-store e-commerce & inventory SaaS ecosystem empowering businesses with real-time analytics, automated order fulfillment, and native Cambodian payment rails (ABA PayWay / Bakong KHQR).',
    highlights: [
      'Multi-tenant storefronts & unified merchant admin console',
      'ABA PayWay & Bakong KHQR dynamic QR payment settlement',
      'Real-time sales, inventory & order tracking webhooks',
    ],
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'ABA PayWay', 'Bakong KHQR'],
    liveUrl: 'https://www.builware.app/',
    githubUrl: 'https://github.com/earsokchan',
    image: builwareAdminPoster,
    metrics: '$250k+ GMV Processed',
    badge: 'FEATURED SAAS',
  },
  {
    id: 'gps-speed-cam',
    number: '02',
    title: 'GPS Speed Cam (Orbit 360)',
    category: 'GPS Video Camera App',
    year: '2024',
    tagline: 'High-precision telemetry video recording with Three.js 360° panoramic view.',
    description:
      'A camera app that records video with live GPS ground speed on screen. Track current, max and average speed plus trip distance, in VIDEO, DUAL CAM, 360 and 4K modes.',
    highlights: [
      'Live GPS speed readout with ±5m lock accuracy',
      'Trip stats: current, max, avg speed & distance',
      'Dual-cam capture & Three.js 360° panoramic viewer',
      '4K video recording with quick thumb controls',
    ],
    tags: ['Next.js 16', 'React 19', 'Three.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
    liveUrl: 'https://camera360-theta.vercel.app/',
    githubUrl: 'https://github.com/earsokchan',
    image: gpsSpeedCamPoster,
    metrics: '4K 60fps Telemetry',
    badge: 'WEBGL & CAMERA',
  },
  {
    id: 'gss-cambodia',
    number: '03',
    title: 'GSS Cambodia',
    category: 'Corporate Enterprise Portal',
    year: '2023 - 2024',
    tagline: 'Pixel-perfect corporate showcase with serverless architecture and motion design.',
    description:
      'Pixel-perfect clone of the official GSS Cambodia corporate site with security service showcases, responsive layouts, interactive hero banners, and serverless architecture.',
    highlights: [
      'Next.js serverless SSR architecture with sub-second loading',
      'Pixel-perfect responsive layout & custom physics motion',
      'Interactive security solutions & product catalog suite',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    liveUrl: 'https://gss-cambodia.vercel.app/',
    githubUrl: 'https://github.com/earsokchan',
    image: gssCambodiaPoster,
    metrics: '500+ Enterprise Users',
    badge: 'CORPORATE PORTAL',
  },
  {
    id: 'builware-pos',
    number: '04',
    title: 'Builware POS',
    category: 'Point of Sale System',
    year: '2024',
    tagline: 'Cloud POS and store management suite for high-volume retail transactions.',
    description:
      'Cloud POS and store management suite for high-volume retail transactions, instant barcode scanning, thermal receipt printing, cash drawer triggering, and revenue analytics.',
    highlights: [
      'Instant split-second barcode billing & ESC/POS receipts',
      'Live multi-warehouse inventory & low-stock alerts',
      'Offline cashier mode with automatic background sync',
    ],
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Chart.js', 'WebUSB'],
    liveUrl: 'https://demo.builware.app/dashboard',
    githubUrl: 'https://github.com/earsokchan',
    image: builwarePosPoster,
    metrics: '< 1.5s Checkout Cycle',
    badge: 'RETAIL POS',
  },
  {
    id: 'school-sms',
    number: '05',
    title: 'Hun Sen Kampong Tralach High School',
    category: 'School Management System',
    year: '2024',
    tagline: 'Digital school portal facilitating student enrollment, grades, and bilingual news.',
    description:
      'Digital school portal facilitating student enrollment, grade recording, teacher management, transcript generation, and bilingual news distribution in Khmer and English.',
    highlights: [
      'Comprehensive academic records & grading suite',
      'Bilingual Khmer / English (i18n) localization',
      'Automated transcript PDF generation and certificate export',
    ],
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'i18n', 'Tailwind CSS'],
    liveUrl: 'https://sms.builware.app/en',
    githubUrl: 'https://github.com/earsokchan/School-Management-System-Dynamic-School-Website',
    image: schoolManagementPoster,
    metrics: '2,000+ Students Managed',
    badge: 'EDTECH PLATFORM',
  },
  {
    id: 'target-store',
    number: '06',
    title: 'Target Store Online Shop',
    category: 'E-Commerce & Fashion',
    year: '2023',
    tagline: 'Modern clothing store with interactive catalogs and Bakong KHQR checkout.',
    description:
      'Modern clothing store featuring interactive catalogs, dynamic size/color variants, persistent shopping cart state management, and seamless Bakong KHQR payment processing.',
    highlights: [
      'Dynamic multi-attribute filters & real-time variant selectors',
      'Seamless Bakong KHQR checkout with instant confirmation',
      'Admin catalog management with bulk product import',
    ],
    tags: ['React.js', 'Bootstrap', 'Node.js', 'MySQL', 'KHQR API'],
    liveUrl: 'https://www.targetclothe.com/',
    githubUrl: 'https://github.com/earsokchan',
    image: targetStorePoster,
    metrics: '99.8% Payment Accuracy',
    badge: 'FASHION COMMERCE',
  },
  {
    id: 'bantobchuol',
    number: '07',
    title: 'Bantobchuol System',
    category: 'Room Rental Management',
    year: '2023',
    tagline: 'Property management platform tracking rental contracts and utility billing.',
    description:
      'Property management platform tracking residential rental contracts, automatic water/electric utility calculation from meter readings, and automated tenant invoice generation.',
    highlights: [
      'Automatic utility & electricity/water meter formula calculation',
      'Monthly digital invoice & receipt PDF generator',
      'Tenant contract timeline & security deposit tracking',
    ],
    tags: ['React.js', 'Express', 'MongoDB', 'i18n', 'Node.js'],
    liveUrl: 'https://bantobchuol.vercel.app/',
    githubUrl: 'https://github.com/earsokchan',
    image: bantobchuolPoster,
    metrics: '1,200+ Leases Logged',
    badge: 'PROPTECH SYSTEM',
  },
  {
    id: 'kottrakangea',
    number: '08',
    title: 'KottraKangea',
    category: 'Developer Productivity SaaS',
    year: '2024',
    tagline: 'Task tracking tool streamlining sprint planning, assignments, and timelines.',
    description:
      'Task tracking and productivity tool streamlining agile sprint planning, developer task assignments, code review workflows, and timeline roadmaps.',
    highlights: [
      'Kanban boards & sprint task management with drag-and-drop',
      'Real-time team activity metrics & velocity charts',
      'Automated milestone notifications and review pings',
    ],
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://kottrakangea.builware.app/',
    githubUrl: 'https://github.com/earsokchan',
    image: kottraKangeaPoster,
    metrics: '3x Sprint Velocity',
    badge: 'PRODUCTIVITY SAAS',
  },
  {
    id: 'dl-system',
    number: '09',
    title: 'DL-System Ice Warehouse',
    category: 'Warehouse & Supply Chain',
    year: '2023',
    tagline: 'Ice plant supply chain system managing distribution routes and stock movement.',
    description:
      'Ice plant supply chain and warehouse system managing distribution logistics, delivery routes, customer credit tracking, daily production batches, and stock movement logs.',
    highlights: [
      'Daily production batch logging & route delivery sheets',
      'Customer credit ledger & balance settlement tracker',
      'Comprehensive warehouse inventory ledger & reconciliation',
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js', 'PHP'],
    image: dlSystemPoster,
    githubUrl: 'https://github.com/earsokchan',
    metrics: '10k+ Daily Units Logged',
    badge: 'SUPPLY CHAIN',
  },
  {
    id: 'little-cafe',
    number: '10',
    title: 'The Little Cafe',
    category: 'Digital Cafe Menu & POS',
    year: '2023',
    tagline: 'Mobile-first digital menu for food & beverage ordering with QR table scanning.',
    description:
      'Mobile-first digital menu for food & beverage ordering with instant category filtering, dietary preference tags, and QR table scanning for fast customer checkout.',
    highlights: [
      'Touch-optimized digital menu experience with sub-second search',
      'Instant category filter & responsive item customization',
      'Self-service table QR code ordering workflow',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://thelittlecafe.vercel.app/',
    githubUrl: 'https://github.com/earsokchan',
    image: theLittleCafePoster,
    metrics: '35% Faster Ordering',
    badge: 'HOSPITALITY APP',
  },
  {
    id: 'developer-portfolio',
    number: '11',
    title: 'Developer Portfolio',
    category: 'Free Open Source Portfolio',
    year: '2026',
    tagline: 'Modern open-source developer portfolio built with React 18, Vite, and Motion.',
    description:
      'The complete open-source codebase for this personal developer portfolio. Features bold editorial aesthetics, Lenis smooth scrolling, spring cursor physics, and modular TypeScript architectures.',
    highlights: [
      'Bold editorial aesthetic with cream, red, and ink color blocks',
      'Lenis smooth scroll + Framer Motion velocity-tilt cursor previews',
      '100% responsive, zero emojis, semantic HTML & accessible colors',
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Vite'],
    liveUrl: 'https://earsokchan.vercel.app/',
    githubUrl: 'https://github.com/earsokchan/Portfolio',
    image: portfolioPoster,
    metrics: '100% Open Source',
    badge: 'OPEN SOURCE',
  },
];
