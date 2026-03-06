'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers, FaStar, FaTools } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { experiences } from '@/data/portfolio';

const typeIcons = {
  leadership: FaUsers,
  internship: FaBriefcase,
  training: FaGraduationCap,
};

const typeColors = {
  leadership: 'from-primary to-blue-600',
  internship: 'from-accent to-purple-600',
  training: 'from-green-400 to-emerald-600',
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="experience">
      <h2 className="section-title font-display">
        Professional <span className="gradient-text">Experience</span>
      </h2>
      <p className="section-subtitle">
        A journey through leadership roles, internships, and intensive training programs.
      </p>

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-px"
          style={{ transformOrigin: 'top', background: 'linear-gradient(to bottom, #00D4FF, #8B5CF6, #00D4FF)' }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {experiences.map((exp, i) => {
          const Icon = typeIcons[exp.type] || FaBriefcase;
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              className={`relative mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
              } pl-20 md:pl-0`}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 top-2 md:-translate-x-1/2 z-10">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${typeColors[exp.type] || 'from-primary to-accent'} flex items-center justify-center shadow-lg`}>
                  <Icon className="text-white text-xs" />
                </div>
              </div>

              <div className="glass-card p-6 hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-lg">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-xs text-gray-500 glass px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaTools className="text-primary" /> Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaStar className="text-yellow-400" /> Achievements
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-yellow-400 mt-0.5">✦</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills gained */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
