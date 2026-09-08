import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Zap, Briefcase, GraduationCap } from 'lucide-react';
import profileImg from '../../assets/sokchan_profile.png';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies and clean architecture.',
    },
    {
      icon: Palette,
      title: 'Responsive Design',
      description: 'Creating mobile-first, user-friendly interfaces that work seamlessly across all devices.',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Integration of Phillip Bank KHQR API, Bakong KHQR API, and ABA PayWay payment gateway.',
    },
  ];

  const skillsList = [
    { name: 'Web Development', percentage: 72 },
    { name: 'Full-Stack & API Integration (KHQR, ABA, Bakong)', percentage: 68 },
    { name: 'UX / UI Design & Responsive Layouts', percentage: 65 },
    { name: 'Designing Graphic & Edit Video', percentage: 55 },
    { name: 'Apps & Mobile Development', percentage: 50 },
  ];

  const experienceHistory = [
    {
      period: '2026 - PRESENT',
      role: 'Junior Developer',
      company: 'TSD Co., Ltd. (Technology Solution Development)',
      description: 'Building full-stack SaaS applications, payment gateway integrations, and warehouse management systems.',
      type: 'work' as const,
    },
    {
      period: '2025 - 2026',
      role: 'Freelance Web Developer',
      company: 'Target Store Online Shop',
      description: 'Built & developed full-stack e-commerce platform (targetclothe.com) for a client business, including catalog browsing, cart management, and KHQR payment integration.',
      type: 'work' as const,
    },
    {
      period: '2022 - 2025',
      role: 'Computer Science Student',
      company: 'Royal University of Phnom Penh (RUPP)',
      description: 'Bachelor of Computer Science degree covering software engineering, algorithms, and web technologies.',
      type: 'education' as const,
    },
  ];

  return (
    <section ref={ref} id="about" className="min-h-screen bg-white py-28 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* SECTION 1: ABOUT ME */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
              About Me
            </h2>
            <p className="text-lg text-black/60 max-w-2xl mx-auto">
              Junior Developer &bull; Computer Science Graduate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-black/5">
                <img
                  src={profileImg}
                  alt="Sokchan Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-black/70 space-y-4 text-base md:text-lg leading-relaxed"
              >
                <p>
                  I'm Sokchan, a Computer Science graduate from the Royal University of Phnom Penh (RUPP). I consider myself a responsible, organized, and hardworking individual.
                </p>
                <p>
                  I'm eager to apply my knowledge and gain new experiences in my professional career. Currently working as a Junior Developer at{' '}
                  <a
                    href="https://tsdsolution.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-black underline decoration-black/20 underline-offset-4 hover:decoration-black transition-colors"
                  >
                    Technology Solution Development (TSD)
                  </a>
                  , Cambodia's leading software company serving businesses nationwide.
                </p>
              </motion.div>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 items-start p-4 rounded-xl border border-black/5 bg-black/[0.02]"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-lg shrink-0 mt-0.5">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black mb-1">{feature.title}</h3>
                      <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: EXPERIENCE (ANALYSIS & PERFORMANCE) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Experience Details & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Subheading Badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-black" />
              <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                MORE INFORMATION ABOUT ME
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black leading-tight">
              Experience
              <span className="block text-black/40 text-lg font-medium mt-2">
                Junior Developer at TSD Co., Ltd.
              </span>
            </h2>

            {/* Intro Paragraph */}
            <p className="text-base text-black/70 leading-relaxed">
              I'm a Computer Science graduate from the Royal University of Phnom Penh (RUPP) currently
              working as a Junior Developer at{' '}
              <a
                href="https://tsdsolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-black underline decoration-black/20 underline-offset-4 hover:decoration-black transition-colors"
              >
                Technology Solution Development (TSD)
              </a>
              , Cambodia's #1 software development company since 2013 — powering thousands of businesses
              nationwide with POS, ERP, CRM, e-commerce, and mobile solutions. I build full-stack web
              applications, e-commerce platforms, payment gateway integrations, and warehouse management
              systems.
            </p>

            {/* Quick Stats / Performance Analysis */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '2+', label: 'Years Coding' },
                { value: '6+', label: 'Projects Shipped' },
                { value: '6', label: 'Payment APIs' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-black/[0.03] border border-black/5 rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-black text-black">{stat.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-black/50 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-black text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-black/80 transition-colors shadow-sm"
            >
              Learn More
            </button>
          </motion.div>

          {/* Right Column: Skill Performance Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/[0.02] border border-black/10 rounded-3xl p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-black">Performance Analysis</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">
                Skill Proficiency
              </span>
            </div>

            <div className="space-y-7">
              {skillsList.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-semibold text-black">{skill.name}</span>
                    <span className="font-mono text-xs font-bold text-black/60 tabular-nums">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-black/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-black rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SECTION 3: WORK EXPERIENCE & EDUCATION TIMELINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4"
        >
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
              Work Experience & Education
            </h3>
            <p className="text-sm text-black/60 max-w-xl mx-auto">
              My professional career history and academic qualifications
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10" />

            {experienceHistory.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center mb-10 last:mb-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 w-2 h-2 rounded-full bg-black ring-4 ring-white z-10" />

                  {/* Card */}
                  <div
                    className={`w-[calc(100%-3.5rem)] md:w-[calc(50%-3.5rem)] ml-10 md:ml-0 ${
                      isLeft ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:border-black hover:shadow-md transition-colors">
                      <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            item.type === 'work'
                              ? 'bg-black text-white'
                              : 'bg-black/5 text-black/60 border border-black/10'
                          }`}
                        >
                          <Icon size={12} />
                          {item.type === 'work' ? 'Work' : 'Education'}
                        </span>
                        <span className="text-xs font-mono font-semibold text-black/40">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-black">{item.role}</h4>
                      <p className="text-xs font-semibold text-black/50 mb-3">{item.company}</p>
                      <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}