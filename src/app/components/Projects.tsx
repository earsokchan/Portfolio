import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import targetClotheImg from '../../assets/targetclothe_preview.png';
import banthobjulImg from '../../assets/banthobjul.png';
import dlSystemImg from '../../assets/DL-system.png';
import builwareImg from '../../assets/builware.png';
import bantobchuolDashboard from '../../assets/SCR-20260902-kgwo.png';
import bantobchuolRoom from '../../assets/SCR-20260902-khai.png';
import bantobchuolSettings from '../../assets/SCR-20260902-khwk.png';
import bantobchuolCustomers from '../../assets/SCR-20260902-kkqc.png';
import bantobchuolPayments from '../../assets/SCR-20260902-kkyq.png';
import kottraKangeaWork from '../../assets/SCR-20260901-iudn.png';
import kottraKangeaDashboard from '../../assets/SCR-20260901-iuji.png';
import kottraKangeaClients from '../../assets/SCR-20260901-iumn.png';
import kottraKangeaTasks from '../../assets/SCR-20260901-iuqa.png';
import kottraKangeaCalendar from '../../assets/SCR-20260901-iutg.png';
import kottraKangeaPerformance from '../../assets/SCR-20260901-iuwl.png';
import kottraKangeaReports from '../../assets/SCR-20260901-iuzd.png';
import kottraKangeaUsers from '../../assets/SCR-20260901-iveh.png';
import kottraKangeaLogin from '../../assets/SCR-20260901-ivjr.png';
import theLittleCafeImg from '../../assets/thelittlacafe.jpeg';

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const featuredProject = {
    category: 'Featured E-Commerce SaaS Platform',
    title: 'Builware Platform',
    url: 'https://www.builware.app/',
    description: 'Professional multi-store e-commerce SaaS platform (builware.app) allowing merchants to build and launch online stores to sell 24/7. Features no-code store builder, comprehensive admin dashboard, inventory management, order tracking, shipping integration, and ABA PayWay & Bakong KHQR payment gateway.',
    image: builwareImg,
    images: [
      builwareImg,
      'https://www.builware.app/imgs/templates/admin_1.png',
      'https://www.builware.app/imgs/templates/admin_2.png',
      'https://www.builware.app/imgs/templates/admin_3.png',
      'https://www.builware.app/imgs/templates/admin_4.png',
      'https://www.builware.app/imgs/templates/Home.jpeg',
      'https://www.builware.app/imgs/templates/Category.jpeg',
      'https://www.builware.app/imgs/templates/View%20Detail.jpeg',
      'https://www.builware.app/imgs/templates/Cart.png',
      'https://www.builware.app/imgs/templates/Shiping.png',
      'https://www.builware.app/imgs/templates/Shipping%20methon.png',
      'https://www.builware.app/imgs/templates/Aba%20Payment.png',
      'https://www.builware.app/imgs/templates/History%20Order.png',
      'https://www.builware.app/imgs/templates/tracking%20order.png',
    ],
    tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'ABA PayWay', 'Bakong KHQR'],
  };

  const otherProjects = [
    {
      category: 'E-Commerce & Fashion',
      title: 'Target Store Online Shop',
      url: 'https://www.targetclothe.com/',
      description: 'Full-stack online clothing and fashion e-commerce web application (targetclothe.com) built as a freelance project for a client business. Features product catalog browsing, cart management, order checkout, and integrated Phillip Bank KHQR payment gateway.',
      image: targetClotheImg,
      tags: ['React.js', 'Bootstrap', 'Node.js', 'MySQL', 'KHQR API'],
    },
    {
      category: 'Room Rental Management System',
      title: 'Bantobchuol System',
      description: 'Comprehensive Room Rent Management System featuring revenue analytics dashboard, water & electricity consumption tracking, room & customer management, multi-language support (Khmer, English), and payment tracking.',
      image: bantobchuolDashboard,
      images: [bantobchuolDashboard, bantobchuolRoom, bantobchuolCustomers, bantobchuolPayments, bantobchuolSettings],
      tags: ['React.js', 'Express', 'MongoDB', 'i18n', 'Node.js'],
    },
    {
      category: 'Developer Productivity SaaS',
      title: 'KottraKangea',
      url: 'https://kottrakangea.builware.app/',
      description: 'Full-featured developer work management & performance dashboard (kottrakangea.builware.app) built on the Builware platform. Helps developers track client projects, manage task categories, monitor deadlines, view performance analytics, calendar scheduling, and generate reports — all in one workspace.',
      image: kottraKangeaDashboard,
      images: [kottraKangeaDashboard, kottraKangeaWork, kottraKangeaClients, kottraKangeaTasks, kottraKangeaCalendar, kottraKangeaPerformance, kottraKangeaReports, kottraKangeaUsers, kottraKangeaLogin],
      tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB', 'Builware'],
    },
    {
      category: 'Warehouse & Inventory Management',
      title: 'DL-System Ice Warehouse',
      description: 'Comprehensive ice production and warehouse management system featuring sales tracking, ice quantity monitoring, debt tracking, inventory management, and employee activity reporting.',
      image: dlSystemImg,
      tags: ['Laravel', 'MySQL', 'Bootstrap', 'Chart.js'],
    },
    {
      category: 'Digital Food & Cafe Menu',
      title: 'The Little Cafe (Menu Online)',
      url: 'https://thelittlecafe.vercel.app/',
      description: 'Interactive online food & cafe menu digital web application (thelittlecafe.vercel.app). Features multi-category menu filtering (Food, Pizza, Drinks, Seblak, Bread), dual currency display in USD & KHR, item detail previews, and responsive mobile-friendly ordering interface.',
      image: theLittleCafeImg,
      tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Vercel'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-28 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Professional work and freelance projects showcasing full-stack development expertise
          </p>
        </motion.div>

        {/* 1. BUILWARE PLATFORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-black/10 rounded-3xl p-6 sm:p-10 shadow-sm mb-24"
        >
          {/* Scrollable image slider */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-black/40 flex items-center gap-1.5">
                <Maximize2 size={13} /> {featuredProject.images.length} screenshots — scroll to view
              </span>
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Featured Platform
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
              {featuredProject.images.map((imgSrc, imgIndex) => (
                <div
                  key={imgIndex}
                  onClick={() => setSelectedImage(imgSrc)}
                  className="snap-start shrink-0 min-w-[280px] sm:min-w-[420px] max-w-[560px] aspect-video rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-black/5 cursor-pointer hover:border-black/30 hover:shadow-md transition-colors relative group"
                >
                  <ImageWithFallback
                    src={imgSrc}
                    alt={`${featuredProject.title} screen ${imgIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading={imgIndex < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Maximize2 size={12} /> Click to expand
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr className="border-black/10 my-8" />

          {/* Builware Details */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-black/50">
              {featuredProject.category}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
              {featuredProject.title}
            </h3>
            <p className="text-base text-black/70 leading-relaxed max-w-4xl">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-black/5 rounded-md text-xs font-semibold text-black/70">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl text-xs font-semibold hover:bg-black/80 transition-colors shadow-sm"
              >
                <ExternalLink size={14} /> Visit Website
              </a>
              <button className="flex items-center gap-2 px-6 py-3 bg-black/5 border border-black/10 rounded-xl text-xs font-semibold text-black hover:bg-black/10 transition-colors">
                <Github size={14} /> Source Code
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. OTHER PROJECTS — alternating 2-col with center vertical line */}
        <div className="relative space-y-24 md:before:block md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:top-4 md:before:bottom-4 md:before:w-[2px] md:before:bg-black/15">
          {otherProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const hasMultipleImages = 'images' in project && project.images && project.images.length > 1;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Center dot on the line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black ring-4 ring-white border border-black z-10" />

                {/* Image Side */}
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  {hasMultipleImages ? (
                    /* Multi-image horizontal slider */
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-black/40 flex items-center gap-1.5">
                          <Maximize2 size={13} /> {(project as { images: string[] }).images.length} screenshots — scroll to view
                        </span>
                      </div>
                      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
                        {(project as { images: string[] }).images.map((imgSrc, imgIndex) => (
                          <div
                            key={imgIndex}
                            onClick={() => setSelectedImage(imgSrc)}
                            className="snap-start shrink-0 w-[82%] sm:w-[75%] rounded-2xl overflow-hidden border border-black/10 shadow-md bg-white cursor-pointer hover:shadow-xl hover:border-black/25 transition-colors duration-300 relative group"
                          >
                            {/* Browser chrome bar */}
                            <div className="flex items-center gap-1.5 px-3 py-2 bg-black/[0.04] border-b border-black/[0.07]">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                            </div>
                            {/* Screenshot */}
                            <div className="aspect-video overflow-hidden bg-black/5">
                              <ImageWithFallback
                                src={imgSrc}
                                alt={`${project.title} screen ${imgIndex + 1}`}
                                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                                loading={imgIndex < 1 ? 'eager' : 'lazy'}
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-end justify-center pb-4">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                                <Maximize2 size={12} /> View full
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Scroll dots */}
                      <div className="flex justify-center gap-1.5 mt-2">
                        {(project as { images: string[] }).images.map((_, i) => (
                          <span key={i} className="w-1.5 h-1.5 rounded-full bg-black/20" />
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Single image */
                    <div
                      onClick={() => setSelectedImage(project.image)}
                      className="relative rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-black/5 group cursor-pointer"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto max-h-[460px] object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-md flex items-center gap-1.5">
                          <Maximize2 size={13} /> Click to view full image
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Detail Side */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                  <span className="text-xs font-bold uppercase tracking-wider text-black/50 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base text-black/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black/5 rounded-md text-xs font-semibold text-black/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {'url' in project && project.url ? (
                      <a
                        href={(project as { url: string }).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-xs font-semibold hover:bg-black/80 transition-colors shadow-sm"
                      >
                        <ExternalLink size={14} /> Visit Website
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-xs font-semibold hover:bg-black/80 transition-all shadow-sm">
                        <ExternalLink size={14} /> Live Demo
                      </button>
                    )}
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-black/5 border border-black/10 rounded-xl text-xs font-semibold text-black hover:bg-black/10 transition-colors">
                      <Github size={14} /> Source Code
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div
            className="relative max-w-5xl max-h-[92vh] bg-white p-3 rounded-2xl overflow-hidden shadow-2xl border border-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-black/80 transition-colors shadow-md"            >
              <X size={20} />
            </button>
            <div className="overflow-auto max-h-[85vh] rounded-xl bg-black/5 p-2">
              <img
                src={selectedImage}
                alt="Full size view"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}