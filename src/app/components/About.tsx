import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import devIllustration from '../../assets/dev_illustration.png';
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
    { name: 'Web Development', percentage: 90 },
    { name: 'Full-Stack & API Integration (KHQR, ABA, Bakong)', percentage: 88 },
    { name: 'UX / UI Design & Responsive Layouts', percentage: 82 },
    { name: 'Designing Graphic & Edit Video', percentage: 75 },
    { name: 'Apps & Mobile Development', percentage: 70 },
  ];

  const experienceHistory = [
    {
      period: '2026 - PRESENT',
      role: 'Junior Developer',
      company: 'TSD Co., Ltd. (Technology Solution Development)',
      description: 'Building full-stack SaaS applications, payment gateway integrations, and warehouse management systems.',
    },
    {
      period: '2025 - 2026',
      role: 'Freelance Web Developer',
      company: 'Target Store Online Shop',
      description: 'Built & developed full-stack e-commerce platform (targetclothe.com) for a client business, including catalog browsing, cart management, and KHQR payment integration.',
    },
    {
      period: '2022 - 2025',
      role: 'Computer Science Student',
      company: 'Royal University of Phnom Penh (RUPP)',
      description: 'Bachelor of Computer Science degree covering software engineering, algorithms, and web technologies.',
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
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
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
                  I'm eager to apply my knowledge and gain new experiences in my professional career. Currently working as a Junior Developer at Technology Solution Development TSD Co., Ltd.
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

        {/* SECTION 2: EXPERIENCE (SCREENSHOT LAYOUT) */}
        <div className="pt-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Developer Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-black/[0.02] p-4 sm:p-6">
                <img
                  src={devIllustration}
                  alt="Developer workspace"
                  className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right Column: Experience Details & Skill Bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Subheading Badge */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-[2px] bg-black" />
                <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                  MORE INFORMATION ABOUT ME
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                Experience
              </h2>

              {/* Intro Paragraph */}
              <p className="text-base text-black/70 leading-relaxed">
                Hello Everyone! My name is Sokchan. I am a Junior Developer at TSD Co., Ltd. I graduated with a Bachelor's Degree in Computer Science from the Royal University of Phnom Penh (RUPP). I specialize in building full-stack web applications, e-commerce platforms, payment gateway integrations, and warehouse management systems.
              </p>

              {/* Percentage Progress Bars */}
              <div className="space-y-5 pt-2">
                {skillsList.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5 text-sm font-semibold text-black">
                      <span>{skill.name}</span>
                      <span className="font-mono text-xs text-black/60">{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 bg-black/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 0.9, delay: index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-black rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3.5 bg-black text-white rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-black/80 transition-all shadow-sm"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 3: WORK EXPERIENCE & EDUCATION CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3">
              Work Experience & Education
            </h3>
            <p className="text-sm text-black/60 max-w-xl mx-auto">
              My professional career history and academic qualifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experienceHistory.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-black/5 text-black/60 rounded-md text-xs font-bold uppercase tracking-wider mb-4">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-black mb-1">{item.role}</h4>
                  <p className="text-xs font-semibold text-black/50 mb-3">{item.company}</p>
                  <p className="text-sm text-black/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}