'use client';

import { motion } from 'framer-motion';
import { FaFire, FaCode } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';

const GITHUB_USERNAME = "mandeep6207";

const STATS_URL = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=0D1117&ring=00D4FF&fire=8B5CF6&currStreakLabel=00D4FF&sideLabels=FFFFFF&dates=94A3B8`;

const GRAPH_URL = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=00D4FF&line=8B5CF6&point=00D4FF&area=true`;

const SNAKE_URL =
  "https://raw.githubusercontent.com/mandeep6207/snk/output/github-snake-dark.svg";

export default function GitHubStats() {
  return (
    <SectionWrapper id="github-stats">

      {/* ===================== */}
      {/* GitHub Battle Stats */}
      {/* ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title font-display text-3xl md:text-4xl font-bold">
          <FaFire className="inline mr-3 text-orange-400" />
          GitHub <span className="gradient-text">Battle Stats</span>
        </h2>

        <p className="section-subtitle mt-4 text-gray-400 max-w-2xl mx-auto">
          Live GitHub activity, contribution streaks, and coding consistency —
          showcasing my open-source journey and development momentum.
        </p>
      </motion.div>

      {/* ===================== */}
      {/* Stats + Graph */}
      {/* ===================== */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        {/* Contribution Streak Stats */}
        <motion.div
          className="glass-card p-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={STATS_URL}
            alt="GitHub Streak Stats"
            loading="lazy"
            className="w-full"
          />
        </motion.div>

        {/* Contribution Activity Graph */}
        <motion.div
          className="glass-card p-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={GRAPH_URL}
            alt="GitHub Activity Graph"
            loading="lazy"
            className="w-full"
          />
        </motion.div>

      </div>

      {/* ===================== */}
      {/* Snake Animation Section */}
      {/* ===================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">
          🐍 Snake Eating My{" "}
          <span className="gradient-text">Contributions</span>
        </h3>
      </motion.div>

      <motion.div
        className="glass-card p-6 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={SNAKE_URL}
          alt="Snake Contribution Animation"
          loading="lazy"
          className="w-full"
        />
      </motion.div>

    </SectionWrapper>
  );
}