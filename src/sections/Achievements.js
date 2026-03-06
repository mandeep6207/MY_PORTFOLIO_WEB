'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaGlobe, FaBriefcase, FaUniversity } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { achievements } from '@/data/portfolio';

const iconMap = {
  rocket: FaRocket,
  patent: FaLightbulb,
  leadership: FaUsers,
  globe: FaGlobe,
  briefcase: FaBriefcase,
  academic: FaUniversity,
};

const colorMap = {
  Research: 'from-blue-500/20 to-primary/20',
  Innovation: 'from-yellow-500/20 to-orange-500/20',
  Leadership: 'from-accent/20 to-purple-500/20',
  Professional: 'from-green-500/20 to-emerald-500/20',
  Academic: 'from-red-500/20 to-pink-500/20',
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <h2 className="section-title font-display">
        Key <span className="gradient-text">Achievements</span>
      </h2>
      <p className="section-subtitle">
        Milestones that highlight my technical contributions, leadership, and research impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, i) => {
          const Icon = iconMap[item.icon] || FaRocket;
          return (
            <motion.div
              key={item.title}
              className="glass-card p-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[item.category] || 'from-primary/20 to-accent/20'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white text-xl" />
              </div>

              <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">
                {item.category}
              </span>
              <h3 className="font-display font-bold text-lg mt-1 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
