import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Server, Database, Bot, Cpu, Sparkles, Terminal, Wrench, Layers } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainCategories = [
    {
      name: 'Frontend Engineering',
      icon: Code2,
      description: 'Building high-performance, responsive web interfaces',
      skills: [
        { name: 'React.js / Next.js', level: 75 },
        { name: 'HTML5 / CSS3 / Tailwind CSS', level: 82 },
        { name: 'JavaScript (ES6+) / TypeScript', level: 70 },
        { name: 'Flutter (Mobile UI)', level: 48 },
      ],
    },
    {
      name: 'Backend & APIs',
      icon: Server,
      description: 'Scalable server architecture & payment gateway integrations',
      skills: [
        { name: 'Node.js / Express.js', level: 68 },
        { name: 'Laravel (PHP)', level: 60 },
        { name: 'RESTful API & Webhooks', level: 72 },
        { name: 'Payment APIs (KHQR, ABA PayWay, Bakong)', level: 74 },
      ],
    },
    {
      name: 'Database & Infrastructure',
      icon: Database,
      description: 'Database management, cloud hosting & deployment',
      skills: [
        { name: 'MySQL / PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 72 },
        { name: 'Vercel / Cloudflare / Hostinger', level: 74 },
        { name: 'AWS EC2 / Docker', level: 55 },
      ],
    },
    {
      name: 'AI-Powered Workflows',
      icon: Bot,
      description: 'Advanced AI pair-programming & automated coding tools',
      skills: [
        { name: 'Antigravity & Cursor AI', level: 80 },
        { name: 'GitHub Copilot & OpenAI Codex', level: 78 },
        { name: 'Claude AI & DeepSeek', level: 76 },
        { name: 'Grok & OpenCode', level: 70 },
      ],
    },
  ];

  const aiTools = [
    { name: 'Antigravity', tag: 'Agentic AI Assistant' },
    { name: 'Cursor', tag: 'AI Code Editor' },
    { name: 'GitHub Copilot', tag: 'AI Code Completion' },
    { name: 'OpenAI Codex', tag: 'Code Generation' },
    { name: 'Claude AI', tag: 'Reasoning & Architecture' },
    { name: 'DeepSeek', tag: 'Code Analysis' },
    { name: 'Grok', tag: 'AI Research' },
    { name: 'OpenCode', tag: 'Open-Source AI' },
  ];

  const additionalToolCategories = [
    {
      group: 'Payments & Fintech APIs',
      tools: ['Phillip Bank KHQR API', 'Bakong Payment API', 'ABA PayWay Gateway', 'Telegram Bot API'],
    },
    {
      group: 'Cloud Hosting & Servers',
      tools: ['Vercel Cloud', 'Cloudflare CDN', 'Hostinger VPS', 'Render Platform', 'AWS EC2 / S3', 'Firebase Backend'],
    },
    {
      group: 'DevOps & Tooling',
      tools: ['Git & GitHub', 'Docker Containers', 'Linux Terminal (zsh)', 'Windows OS', 'Nginx Web Server', 'Postman API Studio'],
    },
    {
      group: 'Build Tools & Utilities',
      tools: ['Vite Build Engine', 'pnpm / npm / yarn', 'i18n Multi-Language', 'Figma Design System', 'Bootstrap / Tailwind', 'Chart.js & Recharts'],
    },
  ];

  return (
    <section ref={ref} id="skills" className="min-h-screen bg-white py-28 px-6 border-t border-black/5">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/5 border border-black/10 rounded-full text-xs font-bold uppercase tracking-wider text-black mb-4">
            <Cpu size={14} /> Technology Stack & AI Workflows
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Modern frameworks, full-stack tools, and AI coding assistants powering my development workflow
          </p>
        </motion.div>

        {/* 2x2 Grid Category Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {mainCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white border border-black/10 rounded-3xl p-8 shadow-sm hover:border-black hover:shadow-md transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-black text-white rounded-2xl shrink-0">
                    <category.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black">{category.name}</h3>
                    <p className="text-xs text-black/50">{category.description}</p>
                  </div>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5 pt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-semibold text-black">{skill.name}</span>
                        <span className="text-xs font-mono text-black/50">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.08, ease: 'easeOut' }}
                          className="h-full bg-black rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Section: AI Assistants & Developer Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
            <Sparkles size={16} className="text-white" /> AI Pair-Programming Stack
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            AI Coding Tools & Models
          </h3>
          <p className="text-sm text-white/70 max-w-2xl mb-8 leading-relaxed">
            I leverage state-of-the-art AI coding assistants and LLMs to accelerate development velocity, maintain code quality, and solve complex system architecture challenges.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 border border-white/15 rounded-2xl p-4 hover:bg-white hover:text-black transition-colors group cursor-default"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold group-hover:text-black">{tool.name}</span>
                  <Terminal size={14} className="opacity-40 group-hover:opacity-100" />
                </div>
                <span className="text-[11px] opacity-60 group-hover:opacity-80 block">{tool.tag}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Additional Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-4 space-y-8"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Wrench size={20} className="text-black" />
            <h3 className="text-2xl font-bold text-black tracking-tight text-center">
              Additional Tools & Technologies
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {additionalToolCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm hover:border-black transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={16} className="text-black/60" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-black">{cat.group}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-black/5 border border-black/5 rounded-xl text-xs font-semibold text-black hover:bg-black hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}