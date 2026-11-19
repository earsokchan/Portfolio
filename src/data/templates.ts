// ==============================================================================
// FREE THEMES & WEBSITE TEMPLATES DATA REPOSITORY
// Digital product showcase catalog for free open-source templates (HTML, CSS, JS, etc.)
// ==============================================================================

import kfcDemoPoster from '../assets/kfc_demo_poster.png';
import tubeCoffeePoster from '../assets/poster tube.png';
import theLittleCafePoster from '../assets/thelittlacafe_poster.png';
import portfolioPoster from '../assets/portfolio_poster.png';
import koiPoster from '../assets/poster KOI.png';

export interface TemplateProduct {
  id: string;
  title: string;
  badge: string;
  category: string;
  price: string;
  tagline: string;
  description: string;
  poster: string;
  demoUrl?: string;
  githubUrl?: string;
  stack: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  isFeatured?: boolean;
}

export const TEMPLATES: TemplateProduct[] = [
  {
    id: 'kfc-fast-food',
    title: 'KFC Fast Food Website Template',
    badge: 'FEATURED THEME · 100% FREE',
    category: 'Fast Food & Restaurant',
    price: '$0.00 FREE',
    tagline: 'High-conversion fast food ordering responsive template in pure HTML5, CSS3, and modern JS.',
    description:
      'A modern, pixel-perfect KFC brand fast-food ordering website showcase and free website template. Features interactive food menus (chicken buckets, zinger burgers, combos, sides, soft drinks), mobile-first hamburger drawer, promotional deal banners, and clean semantic HTML5, modern CSS3 animations, and vanilla JavaScript without heavy dependencies.',
    poster: kfcDemoPoster,
    demoUrl: 'https://kfc-demo-lime.vercel.app/',
    githubUrl: 'https://github.com/earsokchan/KFC-demo',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive UI', 'Vercel'],
    features: [
      'Fast & easy food ordering responsive UI across mobile, tablet & desktop',
      'Interactive menu categorization with live tabs & dynamic filter states',
      'Clean semantic HTML5, modern CSS3 animations, and vanilla JavaScript (zero bloat)',
      '100% free open-source website template ready for customization & instant deployment',
    ],
    specifications: [
      { label: 'Technology', value: 'Semantic HTML5 / CSS3 / Vanilla JS' },
      { label: 'Responsiveness', value: 'Mobile, Tablet & Desktop Tested' },
      { label: 'Bundle Size', value: '< 25 KB Zero-Dependency' },
      { label: 'License', value: 'MIT Open-Source / 100% Free' },
    ],
    isFeatured: true,
  },
  {
    id: 'tube-coffee',
    title: 'Tube Coffee Chain Website Template',
    badge: 'NEW COFFEE THEME · 100% FREE',
    category: 'Cafe & Beverage',
    price: '$0.00 FREE',
    tagline: 'Locally grown in Cambodia — Fast. Affordable. Quality coffee responsive website template.',
    description:
      'A vibrant, modern Cambodian coffee chain brand showcase and responsive website template. Features iconic yellow and white visual branding, interactive drink menus (Coconut Cream Latte, specialty espresso, frappes), store locator cards (42+ outlets across Cambodia), operating hours, and fluid cross-device viewports across iMac desktop, laptop, and mobile screens.',
    poster: tubeCoffeePoster,
    githubUrl: 'https://github.com/earsokchan',
    stack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive UI', 'Vercel'],
    features: [
      'Locally grown coffee branding with dynamic yellow & white visual theme',
      'Interactive beverage menu featuring Coconut Cream Latte & drink categories',
      'Store locator section highlighting 42+ stores across Cambodia & operating hours',
      '100% fluid responsive layout across iMac, MacBook, and mobile screens',
    ],
    specifications: [
      { label: 'Technology', value: 'Semantic HTML5 / CSS3 / Vanilla JS' },
      { label: 'Responsiveness', value: 'iMac, MacBook & Mobile Ready' },
      { label: 'Theme Style', value: 'Vibrant Yellow & Clean Modern' },
      { label: 'License', value: 'MIT Open-Source / 100% Free' },
    ],
    isFeatured: true,
  },
  {
    id: 'the-little-cafe',
    title: 'The Little Cafe — Digital Menu',
    badge: 'FREE CAFE THEME',
    category: 'Cafe & Hospitality',
    price: '$0.00 FREE',
    tagline: 'Mobile-first digital menu for food & beverage ordering with instant filtering.',
    description:
      'Touch-optimized digital menu template for cafes and boutique bistros. Includes instant category filtering, dietary preference tags, and self-service table QR code ordering workflow.',
    poster: theLittleCafePoster,
    demoUrl: 'https://thelittlecafe.vercel.app/',
    githubUrl: 'https://github.com/earsokchan',
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
    features: [
      'Touch-optimized digital menu experience with sub-second search',
      'Instant category filter & responsive item customization',
      'Self-service table QR code ordering workflow',
    ],
    specifications: [
      { label: 'Technology', value: 'React / Next.js / Tailwind CSS' },
      { label: 'Use Case', value: 'Cafe & Restaurant Digital Menus' },
      { label: 'Device Support', value: 'Mobile-First Fluid UI' },
      { label: 'License', value: 'Open-Source / Free' },
    ],
  },
  {
    id: 'koi-the-beverage',
    title: 'KOI Thé Beverage Showcase',
    badge: 'TEA & BEVERAGE',
    category: 'Beverage & Milk Tea',
    price: '$0.00 FREE',
    tagline: 'Minimalist Asian milk tea & beverage digital showcase with rich product cards.',
    description:
      'Artisan beverage brand showcase template featuring visual drink menus, sugar and ice customization controls, topping add-ons, and responsive cross-device layout.',
    poster: koiPoster,
    githubUrl: 'https://github.com/earsokchan',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    features: [
      'Artisan visual product cards for tea and beverage menus',
      'Customization selectors for ice, sugar, and toppings',
      'Fluid mobile, tablet, and desktop responsive layout',
    ],
    specifications: [
      { label: 'Technology', value: 'HTML5 / CSS3 / JavaScript' },
      { label: 'Aesthetic', value: 'Artisan Beverage House' },
      { label: 'Device Support', value: 'Multi-Screen Responsive' },
      { label: 'License', value: '100% Free Theme' },
    ],
  },
  {
    id: 'developer-portfolio',
    title: 'Developer Portfolio V1 Theme',
    badge: 'PORTFOLIO THEME',
    category: 'Portfolio & Personal',
    price: '$0.00 FREE',
    tagline: 'Modern open-source developer portfolio built with React 18, Vite, and Motion.',
    description:
      'Bold editorial aesthetic portfolio website template with smooth momentum scrolling, spring physics cursor previews, and modular TypeScript architecture.',
    poster: portfolioPoster,
    demoUrl: 'https://earsokchan.vercel.app/',
    githubUrl: 'https://github.com/earsokchan/Portfolio',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    features: [
      'Bold editorial aesthetic with cream, red, and ink color blocks',
      'Lenis smooth scroll + Framer Motion velocity-tilt cursor previews',
      '100% responsive, accessible colors, and modular architecture',
    ],
    specifications: [
      { label: 'Technology', value: 'React 18 / TypeScript / Tailwind CSS' },
      { label: 'Animations', value: 'Framer Motion + Lenis Smooth' },
      { label: 'Customization', value: 'Data-Driven Architecture' },
      { label: 'License', value: 'Open Source / Free' },
    ],
  },
];

