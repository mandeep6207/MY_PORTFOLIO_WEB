'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

// Shield badge data organized by category
const skillCategories = [
  {
    title: '🤖 AI / ML & Data Science',
    badges: [
      { name: 'Python', logo: 'python', color: '3776AB' },
      { name: 'Machine Learning', logo: 'scikit-learn', color: 'F7931E', label: 'Applied' },
      { name: 'Deep Learning', logo: 'pytorch', color: 'EE4C2C', label: 'Basics' },
      { name: 'NLP', logo: 'spacy', color: '09A3D5', label: 'Learning' },
      { name: 'Computer Vision', logo: 'opencv', color: '5C3EE8', label: 'Learning' },
      { name: 'Generative AI', logo: 'openai', color: '412991', label: 'Exploring' },
      { name: 'Pandas', logo: 'pandas', color: '150458', label: 'Data Analysis' },
      { name: 'NumPy', logo: 'numpy', color: '013243', label: 'Numerical Computing' },
      { name: 'Power BI', logo: 'powerbi', color: 'F2C811', label: 'Data Visualization' },
      { name: 'Excel', logo: 'microsoftexcel', color: '217346', label: 'Analytics' },
      { name: 'EDA', logo: 'plotly', color: '3F4F75', label: 'Data Analytics' },
    ],
  },
  {
    title: '⚙️ AI Workflow, Automation & Tools',
    badges: [
      { name: 'AI Agents', logo: 'probot', color: '00B0D8', label: 'Learning & Building' },
      { name: 'n8n', logo: 'n8n', color: 'EA4B71', label: 'Workflow Automation' },
      { name: 'API Integration', logo: 'fastapi', color: '009688', label: 'AI Apps' },
      { name: 'Jupyter', logo: 'jupyter', color: 'F37626' },
      { name: 'Google Colab', logo: 'googlecolab', color: 'F9AB00' },
      { name: 'Claude AI', logo: 'anthropic', color: 'D4A574' },
    ],
  },
  {
    title: '💾 Data Engineering & Backend',
    badges: [
      { name: 'MySQL', logo: 'mysql', color: '4479A1' },
      { name: 'PostgreSQL', logo: 'postgresql', color: '4169E1' },
      { name: 'MongoDB', logo: 'mongodb', color: '47A248' },
      { name: 'Firebase', logo: 'firebase', color: 'DD2C00' },
      { name: 'SQL', logo: 'amazondynamodb', color: '4053D6' },
    ],
  },
  {
    title: '💻 Development & Ecosystem',
    badges: [
      { name: 'JavaScript', logo: 'javascript', color: 'F7DF1E', logoColor: 'black' },
      { name: 'HTML/CSS', logo: 'html5', color: 'E34F26' },
      { name: 'GitHub', logo: 'github', color: '181717' },
      { name: 'VS Code', logo: 'visualstudiocode', color: '007ACC' },
      { name: 'Figma', logo: 'figma', color: 'F24E1E' },
      { name: 'System Design', logo: 'diagramsdotnet', color: 'F08705', label: 'Learning' },
      { name: 'Blockchain', logo: 'ethereum', color: '3C3C3D', label: 'Basics' },
    ],
  },
];

function ShieldBadge({ name, logo, color, label, logoColor = 'white', delay = 0 }) {
  const badgeText = label ? `${name}-${label}` : name;
  const encodedText = encodeURIComponent(badgeText).replace(/-/g, '--').replace(/_/g, '__').replace(/ /g, '_');
  const badgeUrl = `https://img.shields.io/badge/${encodedText}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;

  return (
    <motion.div
      className="inline-block"
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3, ease: 'easeOut' }}
    >
      <motion.div
        className="shield-badge-wrap"
        whileHover={{ scale: 1.08, y: -3 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={badgeUrl}
          alt={label ? `${name} - ${label}` : name}
          loading="lazy"
          className="shield-badge-img"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="section-title font-display">
        Tech <span className="gradient-text">Arsenal</span>
      </h2>
      <p className="section-subtitle">
        Tools, frameworks, and technologies powering my AI/ML and data science journey.
      </p>

      <div className="space-y-8">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
          >
            <h3 className="font-display font-semibold text-lg md:text-xl mb-5 text-gray-200">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {category.badges.map((badge, badgeIdx) => (
                <ShieldBadge
                  key={badge.name}
                  {...badge}
                  delay={catIdx * 0.05 + badgeIdx * 0.04}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
