import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, Briefcase, Sparkles, Maximize2, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

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
import csComputerImg from '../../assets/image.png';
import sopheaLifestyleImg from '../../assets/image copy.png';

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredProjects = [
    {
      id: 'builware',
      category: 'Featured E-Commerce SaaS Platform',
      badge: 'Featured SaaS',
      title: 'Builware Platform',
      description: 'A comprehensive multi-store e-commerce & inventory SaaS ecosystem empowering businesses with real-time analytics, automated order fulfillment, and ABA PayWay / Bakong KHQR integration.',
      highlights: [
        'Multi-tenant Storefronts & Admin Management Console',
        'Integrated ABA PayWay & Bakong KHQR Digital Payments',
        'Real-time Sales Analytics, Inventory & Order Tracking',
      ],
      url: 'https://www.builware.app/',
      image: builwareAdminPoster,
      tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'ABA PayWay', 'Bakong KHQR'],
    },
    {
      id: 'gss-cambodia',
      category: 'Corporate Security Website Clone',
      badge: 'Featured Clone',
      title: 'GSS Cambodia Website Clone',
      description: 'Pixel-perfect web clone of the official GSS Cambodia corporate site featuring security service showcases, sleek responsive layouts, interactive hero banners, and high-performance serverless architecture.',
      highlights: [
        'High-Performance Next.js Serverless SSR Architecture',
        'Pixel-Perfect Responsive Layout & Smooth Micro-animations',
        'Security Solutions & Product Showcase Service Catalog',
      ],
      url: 'https://gss-cambodia.vercel.app/',
      orgUrl: 'https://www.gss.com.kh/',
      image: gssCambodiaPoster,
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive Design', 'Vercel'],
    },
  ];

  const mainProjects = [
    {
      category: 'Point of Sale (POS) System',
      title: 'Builware POS',
      description: 'Cloud POS and store management suite built for high-volume retail transactions, table management, product barcode scanning, and instant revenue analytics.',
      highlights: [
        'Instant Barcode Billing & Receipt Generation',
        'Live Inventory Tracking & Low Stock Alerts',
      ],
      url: 'https://demo.builware.app/dashboard',
      image: builwarePosPoster,
      tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    },
    {
      category: 'School Management System & Website',
      title: 'Hun Sen Kampong Tralach High School',
      description: 'Digital school portal and administrative platform facilitating student enrollment, grade recording, teacher portal management, and bilingual news distribution.',
      highlights: [
        'Student Academic Records & Grading Suite',
        'Bilingual Khmer/English Interface (i18n)',
      ],
      url: 'https://sms.builware.app/en',
      image: schoolManagementPoster,
      tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'i18n', 'Builware'],
    },
    {
      category: 'E-Commerce & Fashion',
      title: 'Target Store Online Shop',
      description: 'Modern clothing e-commerce store with interactive product catalogs, size/color variant selectors, shopping cart state management, and Bakong KHQR checkout.',
      highlights: [
        'Dynamic Product Filter & Variant Selectors',
        'Seamless KHQR Digital Payment Checkout',
      ],
      url: 'https://www.targetclothe.com/',
      image: targetStorePoster,
      tags: ['React.js', 'Bootstrap', 'Node.js', 'MySQL', 'KHQR API'],
    },
    {
      category: 'Room Rental Management System',
      title: 'Bantobchuol System',
      description: 'Property management platform designed for property owners to track monthly rental contracts, automatic utility bill calculations (water/electric), and tenant payment statuses.',
      highlights: [
        'Automatic Utility & Meter Calculation',
        'Monthly Rent Invoice & Receipt Generator',
      ],
      image: bantobchuolPoster,
      tags: ['React.js', 'Express', 'MongoDB', 'i18n', 'Node.js'],
    },
    {
      category: 'Developer Productivity SaaS',
      title: 'KottraKangea',
      description: 'Developer task tracking and productivity management tool built to streamline sprint planning, task assignments, code review workflows, and project timelines.',
      highlights: [
        'Kanban & Sprint Task Board Architecture',
        'Real-time Team Activity & Progress Metrics',
      ],
      url: 'https://kottrakangea.builware.app/',
      image: kottraKangeaPoster,
      tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Builware'],
    },
    {
      category: 'Warehouse & Inventory Management',
      title: 'DL-System Ice Warehouse',
      description: 'Enterprise ice plant supply chain and warehouse inventory system managing daily distribution routes, customer credit tracking, and stock movement logs.',
      highlights: [
        'Daily Production & Route Delivery Logs',
        'Customer Credit & Outstanding Balance Tracker',
      ],
      image: dlSystemPoster,
      tags: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    },
    {
      category: 'Digital Food & Cafe Menu',
      title: 'The Little Cafe (Menu Online)',
      description: 'Sleek mobile-first digital menu website for food & beverage ordering with instant category filtering, item customization, and QR code table scanning.',
      highlights: [
        'Mobile-Optimized Touch Menu Experience',
        'Instant Food Category Filtering & Search',
      ],
      url: 'https://thelittlecafe.vercel.app/',
      image: theLittleCafePoster,
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
    },
  ];

  const companyProjects = [
    {
      company: 'TSD Solution',
      companyUrl: 'https://tsdsolution.com/',
      category: 'Web Product Catalog',
      title: 'CS Computer Web Product Catalog',
      description: 'Corporate IT equipment and computer hardware web catalog showcasing tech specifications, pricing, brand filters, and direct customer inquiry channels.',
      highlights: [
        'Structured IT Hardware Specification Tables',
        'Brand Category Filtering & Product Search',
      ],
      url: 'https://tsdsolution.com/portfolio/cs-computer-web-product-catalog/',
      image: csComputerImg,
      tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Responsive Design'],
    },
    {
      company: 'TSD Solution',
      companyUrl: 'https://tsdsolution.com/',
      category: 'Personal Brand & Lifestyle Website',
      title: 'Sophea Lifestyle Website',
      description: 'Editorial personal brand and lifestyle blog built on custom WordPress architecture showcasing digital content, gallery portfolios, and publication articles.',
      highlights: [
        'Custom WordPress Theme & Gutenberg Layouts',
        'Editorial Article Publishing & Gallery System',
      ],
      url: 'https://tsdsolution.com/portfolio/website-development-in-cambodia-sophea-lifestyle/',
      image: sopheaLifestyleImg,
      tags: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'Responsive Design'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#fafafa] py-28 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm">
            <Sparkles size={13} /> Project Showcase
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-medium">
            Full-stack web applications, SaaS platforms, and digital solutions showcased with clean project insights and custom poster design.
          </p>
        </motion.div>

        {/* 1. FEATURED HERO PROJECTS (Split Poster + Details Layout) */}
        <div className="space-y-16 mb-24">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-black/10 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Poster Display Frame (7 Cols) */}
                <div className="lg:col-span-7">
                  <div
                    onClick={() => setSelectedImage(project.image)}
                    className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 cursor-pointer group shadow-sm"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3.5 py-1.5 bg-black/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md border border-white/20">
                        {project.badge}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/20">
                        <Maximize2 size={13} /> Click to expand poster
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clean Project Details (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-black/50 block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed font-normal mb-5">
                      {project.description}
                    </p>

                    {/* Key Feature Bullet Pills */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 block mb-2">
                        Key Capabilities
                      </span>
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-black/80 font-medium">
                          <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-black/5 rounded-lg text-xs font-semibold text-black/75 border border-black/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/10">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-xs font-bold hover:bg-black/80 transition-colors shadow-sm"
                      >
                        <ExternalLink size={14} /> Visit Live App
                      </a>
                    )}
                    {project.orgUrl && (
                      <a
                        href={project.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-black/5 border border-black/10 rounded-xl text-xs font-semibold text-black hover:bg-black/10 transition-colors"
                      >
                        <Globe size={14} /> Official Site
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-black/60 hover:text-black transition-colors ml-auto"
                    >
                      <Maximize2 size={13} /> View Artwork
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. MAIN PROJECTS GRID (Poster Top + Clean Details Below) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {mainProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-black/10 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Poster Artwork Image Frame */}
                <div
                  onClick={() => setSelectedImage(project.image)}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 cursor-pointer group mb-5 shadow-sm"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/20">
                      <Maximize2 size={13} /> Expand poster
                    </span>
                  </div>
                </div>

                {/* Clean Project Information */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 block mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-black/70 leading-relaxed font-normal mb-4">
                  {project.description}
                </p>

                {/* Key Feature Highlights */}
                <div className="space-y-1.5 mb-4 bg-black/[0.02] p-3 rounded-xl border border-black/5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-black/75 font-medium">
                      <CheckCircle2 size={13} className="text-black shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-black/5 rounded-md text-[11px] font-semibold text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-black/5 mt-2">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-black hover:underline"
                  >
                    <ExternalLink size={13} /> Visit Live App
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-black/40">Portfolio Showcase</span>
                )}
                <button
                  onClick={() => setSelectedImage(project.image)}
                  className="flex items-center gap-1 text-xs font-semibold text-black/60 hover:text-black transition-colors"
                >
                  <Maximize2 size={12} /> View Poster
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. COMPANY WORK SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-28 mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
            <Briefcase size={13} /> Professional Client Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            Company Deliverables
          </h2>
          <p className="text-base text-black/60 max-w-xl mx-auto font-medium">
            Production web applications delivered for company clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {companyProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-black/10 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  onClick={() => setSelectedImage(project.image)}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 cursor-pointer group mb-5 shadow-sm"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1.5">
                    <Briefcase size={12} /> {project.company}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-black/40 block mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-black/70 leading-relaxed font-normal mb-4">
                  {project.description}
                </p>

                <div className="space-y-1.5 mb-4 bg-black/[0.02] p-3 rounded-xl border border-black/5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-black/75 font-medium">
                      <CheckCircle2 size={13} className="text-black shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-black/5 rounded-md text-[11px] font-semibold text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/5 mt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-black hover:underline"
                >
                  <ExternalLink size={13} /> View Case Study
                </a>
                <a
                  href={project.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-semibold text-black/60 hover:text-black transition-colors"
                >
                  <Globe size={12} /> {project.company}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div
            className="relative max-w-6xl max-h-[92vh] bg-white p-3 sm:p-4 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-30 w-11 h-11 flex items-center justify-center bg-black text-white rounded-full hover:bg-black/80 transition-transform active:scale-95 shadow-xl border border-white/20"
            >
              <X size={22} />
            </button>
            <div className="overflow-auto max-h-[85vh] rounded-2xl bg-black/5 p-2">
              <img
                src={selectedImage}
                alt="Full size poster artwork"
                className="w-full h-auto object-contain rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}