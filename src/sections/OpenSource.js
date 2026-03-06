'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaCode } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { openSourceRoles, personalInfo } from '@/data/portfolio';

const roleIcons = {
  gdg: FaUsers,
  opensource: FaCode,
  code: FaCodeBranch,
  github: FaGithub,
};

// Generate a contribution graph visual (placeholder)
function ContributionGraph() {
  const weeks = 52;
  const days = 7;

  const cells = useMemo(() => {
    return Array.from({ length: weeks * days }, () => {
      const r = Math.random();
      if (r > 0.7) return 4;
      if (r > 0.5) return 3;
      if (r > 0.3) return 2;
      if (r > 0.15) return 1;
      return 0;
    });
  }, []);

  const levels = [
    'bg-gray-800',
    'bg-primary/20',
    'bg-primary/40',
    'bg-primary/60',
    'bg-primary/90',
  ];

  return (
    <div className="overflow-x-auto pb-2">
      <div className="inline-grid gap-[3px]" style={{ gridTemplateRows: `repeat(${days}, 1fr)`, gridAutoFlow: 'column' }}>
        {cells.map((level, i) => (
          <motion.div
            key={i}
            className={`contribution-cell ${levels[level]}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.001, duration: 0.3 }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 justify-end">
        <span className="text-xs text-gray-500">Less</span>
        {levels.map((cls, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
        ))}
        <span className="text-xs text-gray-500">More</span>
      </div>
    </div>
  );
}

export default function OpenSource() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    // Fetch GitHub data dynamically
    async function fetchGitHub() {
      try {
        const res = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}`);
        if (res.ok) {
          const data = await res.json();
          setGithubData(data);
        }
      } catch (err) {
        console.log('GitHub API not available, using placeholders');
      }
    }
    fetchGitHub();
  }, []);

  return (
    <SectionWrapper id="opensource">
      <h2 className="section-title font-display">
        Open Source & <span className="gradient-text">Leadership</span>
      </h2>
      <p className="section-subtitle">
        Building communities, driving open source adoption, and leading technical teams.
      </p>

      {/* GitHub Stats */}
      <motion.div
        className="glass-card p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <FaGithub className="text-white text-xl" />
          </div>
          <div>
            <h3 className="font-display font-semibold">GitHub Activity</h3>
            <p className="text-xs text-gray-500">@{personalInfo.githubUsername}</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: FaCodeBranch, label: 'Repos', value: githubData?.public_repos || '10+' },
            { icon: FaStar, label: 'Stars', value: '50+' },
            { icon: FaUsers, label: 'Followers', value: githubData?.followers || '100+' },
            { icon: FaCode, label: 'Contributions', value: '500+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass p-3 rounded-xl">
              <stat.icon className="text-primary mx-auto mb-1" />
              <p className="text-lg font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <ContributionGraph />
      </motion.div>

      {/* Leadership Roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {openSourceRoles.map((role, i) => {
          const Icon = roleIcons[role.icon] || FaUsers;
          return (
            <motion.div
              key={role.org}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary text-lg" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{role.role}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{role.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
