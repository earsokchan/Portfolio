// ==============================================================================
// SERVICES & CAPABILITIES DATA REPOSITORY
// 12-column bento grid items in diverse sizes and color blocks.
// ==============================================================================

export type ServiceBgVariant = 'cream' | 'ink' | 'red' | 'white';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  colSpanDesktop: string; // Tailwind grid span, e.g. 'lg:col-span-8'
  colSpanTablet: string;  // e.g. 'md:col-span-6'
  bgVariant: ServiceBgVariant;
  iconName: 'Code2' | 'CreditCard' | 'Gauge' | 'Layers' | 'Smartphone' | 'ShieldCheck';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack-saas',
    number: '01',
    title: 'Full-Stack SaaS Architecture',
    tag: 'Web Applications',
    description:
      'End-to-end web engineering utilizing React 18, Next.js, and TypeScript. From high-availability REST/GraphQL APIs to sub-second UI interactions built to withstand heavy traffic.',
    features: [
      'Type-safe full-stack workflows',
      'Multi-tenant architecture & RBAC',
      'Microservices & resilient data modeling',
    ],
    colSpanDesktop: 'lg:col-span-8',
    colSpanTablet: 'md:col-span-12',
    bgVariant: 'ink',
    iconName: 'Layers',
  },
  {
    id: 'fintech-payments',
    number: '02',
    title: 'FinTech & Payment Rails',
    tag: 'Bakong KHQR & PayWay',
    description:
      'Seamless integration of Cambodian payment infrastructures (Bakong KHQR, ABA PayWay, Stripe). Instant callback webhooks, ledger reconciliation, and cryptographic signature verification.',
    features: [
      'Instantaneous dynamic KHQR generation',
      'Automated transaction settlement hooks',
      'Bank-grade validation & tokenization',
    ],
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-6',
    bgVariant: 'red',
    iconName: 'CreditCard',
  },
  {
    id: 'pos-realtime',
    number: '03',
    title: 'Point of Sale & Hardware',
    tag: 'Retail Infrastructure',
    description:
      'Custom offline-first retail POS software interfaced with thermal ESC/POS receipt printers, barcode lasers, cash drawers, and dual customer displays.',
    features: [
      'Zero-latency offline order caching',
      'WebUSB / WebSerial printer protocols',
      'Stock synchronization across branches',
    ],
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-6',
    bgVariant: 'white',
    iconName: 'Code2',
  },
  {
    id: 'performance-seo',
    number: '04',
    title: 'Ultra-Performance & Core Web Vitals',
    tag: 'Optimization',
    description:
      'Rigorous performance tuning targeting 99+ Lighthouse scores: code-splitting, critical CSS inlining, edge caching, image pipelines, and optimized bundle budgets.',
    features: [
      'Sub-second First Contentful Paint (FCP)',
      'Zero Cumulative Layout Shift (CLS)',
      'Next-gen image optimization pipelines',
    ],
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-6',
    bgVariant: 'cream',
    iconName: 'Gauge',
  },
  {
    id: 'pwa-mobile',
    number: '05',
    title: 'Progressive Web Apps & Mobile',
    tag: 'Cross-Platform',
    description:
      'Native-grade web apps with service worker background syncing, home-screen installability, offline caching, and push notifications.',
    features: [
      'Full offline resilience & sync',
      'Smooth 60fps gestural navigation',
      'Hardware camera & location API access',
    ],
    colSpanDesktop: 'lg:col-span-4',
    colSpanTablet: 'md:col-span-6',
    bgVariant: 'white',
    iconName: 'Smartphone',
  },
];

