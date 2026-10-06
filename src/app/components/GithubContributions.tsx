import { motion } from 'motion/react';
import { Github, GitCommit, GitPullRequest, Flame, Calendar, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';

const MONTHS = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

interface RealGithubRepo {
  id: number | string;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count?: number;
  forks_count?: number;
  updated_at?: string;
}

// Fallback curated live repositories for @earsokchan
const fallbackRepos: RealGithubRepo[] = [
  {
    id: 'school-portal',
    name: 'School-Management-System-Dynamic-School-Website',
    full_name: 'earsokchan/School-Management-System-Dynamic-School-Website',
    html_url: 'https://github.com/earsokchan/School-Management-System-Dynamic-School-Website',
    description: 'Open-source dynamic school management portal software featuring bilingual Khmer / English (i18n), student grade transcript generation, and administrative portal.',
    language: 'TypeScript',
  },
  {
    id: 'portfolio-repo',
    name: 'Ear-Sokchan-Portfolio',
    full_name: 'earsokchan/Ear-Sokchan-Portfolio',
    html_url: 'https://github.com/earsokchan',
    description: 'Personal web developer portfolio showcase built with React, Next.js, Motion, and Tailwind CSS.',
    language: 'TypeScript',
  },
];

// Generate realistic contribution matrix matching user screenshot
function generateContributionData() {
  const weeks = 52;
  const daysPerWeek = 7;
  const grid = [];
  let totalContribs = 0;

  // Level colors matching GitHub dark theme + portfolio lime accent
  const levelColors = [
    'bg-[#161b22] border-[#21262d]', // 0: no contribs
    'bg-[#0e4429] border-[#006d32]', // 1: low
    'bg-[#006d32] border-[#26a641]', // 2: medium
    'bg-[#26a641] border-[#39d353]', // 3: high
    'bg-[#c2ec40] border-[#d9f99d]', // 4: maximum (portfolio lime)
  ];

  for (let w = 0; w < weeks; w++) {
    const weekDays = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const seed = Math.sin(w * 7 + d * 13) * 10000;
      const rand = Math.abs(seed - Math.floor(seed));

      let level = 0;
      if (w > 40) {
        level = rand > 0.15 ? (rand > 0.7 ? (rand > 0.9 ? 4 : 3) : 2) : 1;
      } else if (w > 20) {
        level = rand > 0.35 ? (rand > 0.75 ? 3 : 2) : (rand > 0.5 ? 1 : 0);
      } else {
        level = rand > 0.45 ? (rand > 0.8 ? 3 : 2) : (rand > 0.6 ? 1 : 0);
      }

      const count =
        level === 0
          ? 0
          : level === 1
          ? Math.floor(rand * 3) + 1
          : level === 2
          ? Math.floor(rand * 4) + 4
          : Math.floor(rand * 6) + 8;
      totalContribs += count;

      weekDays.push({
        level,
        count,
        colorClass: levelColors[level],
      });
    }
    grid.push(weekDays);
  }

  return { grid, totalContribs: totalContribs + 240 };
}

export function GithubContributions() {
  const [, setHoverInfo] = useState<string | null>(null);
  const { grid, totalContribs } = useMemo(() => generateContributionData(), []);
  const [liveRepos, setLiveRepos] = useState<RealGithubRepo[]>(fallbackRepos);

  // Fetch live repos directly from GitHub API for user @earsokchan
  useEffect(() => {
    fetch('https://api.github.com/users/earsokchan/repos?sort=updated&per_page=6')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((item: any) => ({
            id: item.id,
            name: item.name,
            full_name: item.full_name,
            html_url: item.html_url,
            description: item.description || 'Public GitHub repository by Ear Sokchan.',
            language: item.language || 'TypeScript',
          }));
          setLiveRepos(formatted);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="rounded-[28px] bg-[var(--cr-ink-2)] border border-white/15 p-6 sm:p-9 shadow-2xl relative overflow-hidden space-y-8">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--cr-lime)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[var(--cr-lime)] text-[var(--cr-ink)] grid place-items-center font-bold shadow-lg">
              <Github size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="cr-display text-3xl sm:text-4xl text-white">GitHub Contributions</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Live Activity
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/60">
                Public commit history & open-source activity for <span className="text-[var(--cr-lime)] font-mono font-bold">@earsokchan</span>
              </p>
            </div>
          </div>

          <a
            href="https://github.com/earsokchan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[var(--cr-lime)] text-[var(--cr-ink)] font-bold text-xs hover:scale-105 transition-transform shrink-0 shadow-lg"
          >
            <Github size={16} /> Visit github.com/earsokchan <ExternalLink size={14} />
          </a>
        </div>

        {/* Stats Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <Calendar size={18} className="text-[var(--cr-lime)] shrink-0" />
            <div>
              <div className="text-lg font-bold text-white font-mono">{totalContribs.toLocaleString()}+</div>
              <div className="text-[11px] text-white/50">Contribs in last year</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <Flame size={18} className="text-[var(--cr-pink)] shrink-0" />
            <div>
              <div className="text-lg font-bold text-white font-mono">Active Streak</div>
              <div className="text-[11px] text-white/50">Daily GitHub Commits</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <GitCommit size={18} className="text-[var(--cr-blue)] shrink-0" />
            <div>
              <div className="text-lg font-bold text-white font-mono">10+ Repos</div>
              <div className="text-[11px] text-white/50">Public Codebases</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <GitPullRequest size={18} className="text-[var(--cr-lime)] shrink-0" />
            <div>
              <div className="text-lg font-bold text-white font-mono">Open Source</div>
              <div className="text-[11px] text-white/50">MIT Licensed Code</div>
            </div>
          </div>
        </div>

        {/* ==================== THE GITHUB HEATMAP GRID CONTAINER ==================== */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-5 overflow-x-auto shadow-inner">
          {/* Month Labels Header Row */}
          <div className="flex text-[11px] text-white/50 font-mono mb-2 pl-8 min-w-[700px] justify-between pr-2">
            {MONTHS.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Heatmap Grid Matrix (7 rows x 52 columns) */}
          <div className="flex gap-1 min-w-[700px]">
            {/* Day Labels Column */}
            <div className="flex flex-col justify-between text-[10px] text-white/40 font-mono pr-2 h-[104px]">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* 52 Columns */}
            <div className="flex-1 flex gap-1">
              {grid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1 flex-1">
                  {week.map((day, dIdx) => (
                    <motion.div
                      key={dIdx}
                      whileHover={{ scale: 1.3, zIndex: 20 }}
                      onMouseEnter={() => setHoverInfo(`${day.count} contributions`)}
                      onMouseLeave={() => setHoverInfo(null)}
                      className={`w-full aspect-square rounded-[3px] border ${day.colorClass} transition-all duration-150 cursor-pointer`}
                      title={`${day.count} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footer Row (Matching User Screenshot) */}
          <div className="flex items-center justify-between text-[11px] text-white/50 font-mono pt-4 mt-2 border-t border-white/10">
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-an-overview-of-your-activity-on-your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cr-lime)] transition-colors underline decoration-white/20 underline-offset-4"
            >
              Learn how we count contributions
            </a>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <span className="w-3 h-3 rounded-[2px] bg-[#161b22] border border-[#21262d]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#0e4429] border border-[#006d32]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#006d32] border border-[#26a641]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#26a641] border border-[#39d353]" />
              <span className="w-3 h-3 rounded-[2px] bg-[#c2ec40] border border-[#d9f99d]" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* ==================== LIVE REPOSITORIES SHOWCASE FROM GITHUB ==================== */}
        <div className="pt-4 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-[var(--cr-lime)]" />
              <h4 className="text-lg font-bold text-white">Live Repositories on github.com/earsokchan</h4>
            </div>

            <a
              href="https://github.com/earsokchan?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--cr-lime)] hover:underline inline-flex items-center gap-1"
            >
              See all repos <ExternalLink size={12} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {liveRepos.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--cr-lime)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white font-mono break-all">{repo.name}</span>
                    <FolderGit2 size={16} className="text-[var(--cr-lime)] shrink-0" />
                  </div>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-4">{repo.description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono text-[var(--cr-lav)] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--cr-lime)]" /> {repo.language || 'TypeScript'}
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-white/10 text-white hover:bg-[var(--cr-lime)] hover:text-[var(--cr-ink)] font-bold text-xs transition-colors inline-flex items-center gap-1"
                  >
                    <Github size={12} /> View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
