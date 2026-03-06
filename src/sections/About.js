'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBullseye, FaRocket, FaHeart, FaLightbulb, FaPray } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { aboutData } from '@/data/portfolio';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: '-50px' });

  return (
    <SectionWrapper id="about">
      <h2 className="section-title font-display">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="section-subtitle">
        Passionate about leveraging AI to solve real-world problems and drive innovation.
      </p>

      {/* Vision, Goals, Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: FaBullseye,
            title: 'Career Vision',
            text: aboutData.careerVision,
            color: 'from-primary/20 to-primary/5',
          },
          {
            icon: FaRocket,
            title: 'Short-Term Goal',
            text: aboutData.shortTermGoal,
            color: 'from-accent/20 to-accent/5',
          },
          {
            icon: FaLightbulb,
            title: 'Long-Term Vision',
            text: aboutData.longTermVision,
            color: 'from-yellow-500/20 to-yellow-500/5',
          },
          {
            icon: FaHeart,
            title: 'Values',
            text: aboutData.values.join(' • '),
            color: 'from-red-500/20 to-red-500/5',
          },
          {
            icon: FaPray,
            title: 'Tech Philosophy',
            text: aboutData.techPhilosophy,
            color: 'from-green-500/20 to-green-500/5',
          },
          {
            icon: FaRocket,
            title: 'Devotion-Driven Mindset',
            text: aboutData.devotionMindset,
            color: 'from-primary/20 to-accent/5',
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            className="glass-card p-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
              <card.icon className="text-white text-lg" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Education Timeline */}
      <div className="mt-16">
        <h3 className="font-display text-2xl font-bold text-center mb-12">
          <FaGraduationCap className="inline mr-2 text-primary" />
          Education <span className="gradient-text">Journey</span>
        </h3>

        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ transformOrigin: 'top', background: 'linear-gradient(to bottom, #00D4FF, #8B5CF6)' }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />

          {aboutData.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="relative pl-20 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
            >
              {/* Dot */}
              <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 z-10" />

              <div className="glass-card p-6">
                <span className="text-primary text-sm font-medium">{edu.period}</span>
                <h4 className="font-display font-semibold text-lg mt-1">{edu.degree}</h4>
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm mt-2">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
