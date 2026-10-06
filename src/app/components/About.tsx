import { motion, useInView, Variants } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Zap, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import profileImg from '../../assets/sokchan_profile.png';

const ease = [0.22, 1, 0.36, 1] as const;

const lineUp: Variants = {
  hidden: { y: '110%' },
  show: (i: number) => ({ y: '0%', transition: { delay: i * 0.1, duration: 1, ease } }),
};

const STAR =
  'M129.93 50.646L116.232 48.9802C111.751 48.4343 109.428 43.3722 111.948 39.6444L119.654 28.2507C123.099 23.1553 117.565 16.8 112.007 19.4694L99.5786 25.437C95.5135 27.3904 90.808 24.3818 90.9043 19.8894L91.1954 6.158C91.3263 0.0180817 83.219 -2.35089 79.9925 2.88452L72.78 14.5926C70.4202 18.4238 64.8285 18.4238 62.4676 14.5926L55.254 2.88452C52.0286 -2.35089 43.9213 0.0180817 44.0522 6.158L44.3443 19.8894C44.4396 24.3818 39.7351 27.3904 35.669 25.437L23.2402 19.4694C17.6821 16.8 12.1488 23.1553 15.5938 28.2507L23.2987 39.6444C25.8197 43.3722 23.4967 48.4343 19.0151 48.9802L5.31715 50.646C-0.807961 51.3912 -2.01005 59.7149 3.65522 62.1473L16.3263 67.5873C20.4725 69.3662 21.2689 74.8751 17.7946 77.7448L7.176 86.5175C2.42825 90.4403 5.93821 98.0899 12.0265 97.0874L25.6412 94.8455C30.0957 94.1111 33.7582 98.3171 32.3938 102.601L28.2271 115.693C26.3639 121.548 33.4726 126.095 38.0494 121.975L48.2849 112.765C51.6337 109.751 56.9992 111.318 58.1797 115.656L61.7859 128.912C63.3981 134.84 71.8495 134.84 73.4616 128.912L77.0679 115.656C78.2483 111.318 83.6139 109.751 86.9626 112.765L97.1982 121.975C101.776 126.095 108.885 121.548 107.02 115.693L102.854 102.601C101.49 98.3171 105.152 94.1111 109.606 94.8455L123.221 97.0874C129.309 98.0899 132.82 90.4403 128.072 86.5175L117.453 77.7448C113.98 74.8751 114.775 69.3662 118.921 67.5873L131.592 62.1473C137.259 59.7149 136.056 51.3912 129.93 50.646Z';

function BigTitle({ kicker, lines }: { kicker: string; lines: React.ReactNode[] }) {
  return (
    <div className="mb-14 sm:mb-20">
      <p className="cr-subtitle !text-[var(--cr-ink)]/70 mb-5">{kicker}</p>
      <h2 className="cr-display text-[var(--cr-ink)] text-6xl sm:text-8xl lg:text-[8.5rem]">
        {lines.map((l, i) => (
          <span key={i} className="cr-line-mask">
            <motion.span
              custom={i}
              variants={lineUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="block"
            >
              {l}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { icon: Code, color: '#104EFF', title: 'Full-Stack Development', description: 'Scalable web applications with modern technologies and clean architecture.' },
    { icon: Palette, color: '#F04C8A', title: 'Responsive Design', description: 'Mobile-first, user-friendly interfaces that work seamlessly on every device.' },
    { icon: Zap, color: '#E1611C', title: 'API Integration', description: 'Phillip Bank KHQR, Bakong KHQR and ABA PayWay payment gateways.' },
  ];

  const experienceHistory = [
    { period: '2026 — now', role: 'Junior Developer', company: 'TSD Co., Ltd. (Technology Solution Development)', description: 'Building full-stack SaaS applications, payment gateway integrations, and warehouse management systems.', link: 'https://tsdsolution.net', type: 'work' as const },
    { period: '2025 — 2026', role: 'Freelance Web Developer', company: 'Target Store Online Shop', description: 'Built the full-stack e-commerce platform targetclothe.com, including catalog, cart and KHQR payment integration.', type: 'work' as const },
    { period: '2022 — 2025', role: 'Computer Science Student', company: 'Royal University of Phnom Penh (RUPP)', description: 'Bachelor of Computer Science covering software engineering, algorithms, and web technologies.', type: 'education' as const },
    { period: '2022 — 2024', role: 'Security Guard', company: 'GSS CAMBODIA', description: 'Ensured safety and security of premises, maintained access control and monitored surveillance systems.', link: 'https://www.gss.com.kh/', type: 'work' as const },
  ];

  return (
    <section ref={ref} id="about" className="relative bg-[var(--cr-lav)] text-[var(--cr-ink)] pt-16 pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-36">

        {/* 1. ABOUT ME */}
        <div>
          <BigTitle
            kicker="About me"
            lines={[
              <>I craft <span className="cr-accent text-[var(--cr-pink)]">p</span>roducts</>,
              <>that <span className="cr-accent text-[var(--cr-blue)]">s</span>cale.</>,
            ]}
          />

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-5 relative"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-x-4 bottom-0 top-10 rounded-t-[200px] bg-[var(--cr-ink)]" />
                <img src={profileImg} alt="Ear Sokchan" loading="lazy" className="relative w-full h-auto" />
                <div className="cr-sticker cr-float -right-4 top-6 w-28 h-28">
                  <svg viewBox="0 0 136 134" className="cr-spin" fill="#C2EC40"><path d={STAR} /></svg>
                  <p>RUPP<br />graduate</p>
                </div>
                <span className="absolute -left-2 bottom-16 cr-accent text-3xl text-[var(--cr-lime)] -rotate-12 drop-shadow">
                  that's me!
                </span>
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="space-y-5 text-lg sm:text-xl leading-relaxed text-[var(--cr-ink)]/80"
              >
                <p className="cr-display text-4xl sm:text-5xl text-[var(--cr-ink)]">
                  Clean in form. <span className="cr-accent">Sharp</span> in function.
                </p>
                <p>
                  I'm <strong className="text-[var(--cr-ink)]">Sokchan</strong>, a Computer Science graduate from the Royal
                  University of Phnom Penh. Responsible, organized and hardworking — eager to keep learning and ship
                  things people actually use.
                </p>
                <p>
                  Currently a Junior Developer at{' '}
                  <a href="https://tsdsolution.com/" target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-[var(--cr-ink)] underline decoration-[var(--cr-pink)] decoration-2 underline-offset-4">
                    Technology Solution Development (TSD)
                  </a>
                  , Cambodia's leading software company serving businesses nationwide.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-3 gap-4">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 40, rotate: -3 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease }}
                    whileHover={{ y: -8, rotate: i % 2 ? 2 : -2 }}
                    className="rounded-[24px] bg-white border-2 border-[var(--cr-ink)] p-5 shadow-[6px_6px_0_var(--cr-ink)]"
                  >
                    <div className="w-12 h-12 rounded-full grid place-items-center mb-4 border-2 border-[var(--cr-ink)]"
                      style={{ background: f.color }}>
                      <f.icon size={20} className="text-white" />
                    </div>
                    <h3 className="cr-display text-2xl text-[var(--cr-ink)] mb-2">{f.title}</h3>
                    <p className="text-sm text-[var(--cr-ink)]/70 leading-relaxed">{f.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. TIMELINE */}
        <div>
          <BigTitle
            kicker="Career & education"
            lines={[<>My <span className="cr-accent text-[var(--cr-pink)]">j</span>ourney</>]}
          />

          <div className="border-t-2 border-[var(--cr-ink)]">
            {experienceHistory.map((item, i) => {
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b-2 border-[var(--cr-ink)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[var(--cr-ink)] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <div className="relative md:col-span-3 cr-display text-3xl text-[var(--cr-ink)] group-hover:text-[var(--cr-lime)] transition-colors px-2">
                    {item.period}
                  </div>
                  <div className="relative md:col-span-5 px-2">
                    <h4 className="cr-display text-4xl sm:text-5xl text-[var(--cr-ink)] group-hover:text-white transition-colors">
                      {item.role}
                    </h4>
                    <p className="mt-2 text-sm font-semibold text-[var(--cr-ink)]/70 group-hover:text-[var(--cr-lav)] transition-colors">
                      {'link' in item && item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">{item.company}</a>
                      ) : item.company}
                    </p>
                  </div>
                  <div className="relative md:col-span-4 px-2 flex gap-4 items-start">
                    <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border-2 border-[var(--cr-ink)] group-hover:border-[var(--cr-lime)] bg-[var(--cr-lime)] text-[var(--cr-ink)]">
                      <Icon size={12} /> {item.type === 'work' ? 'work' : 'study'}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--cr-ink)]/75 group-hover:text-white/75 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}