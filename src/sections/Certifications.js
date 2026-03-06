'use client';

import { motion } from 'framer-motion';
import { FaGoogle, FaAws, FaPython, FaRobot, FaChartLine, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { SiIbm } from 'react-icons/si';
import SectionWrapper from '@/components/SectionWrapper';
import { certifications } from '@/data/portfolio';

const certIcons = {
  google: FaGoogle,
  ibm: SiIbm,
  python: FaPython,
  ai: FaRobot,
  powerbi: FaChartLine,
};

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <h2 className="section-title font-display">
        <FaCertificate className="inline mr-2 text-primary" />
        <span className="gradient-text">Certifications</span>
      </h2>
      <p className="section-subtitle">
        Industry-recognized certifications validating expertise in data science, AI, and analytics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => {
          const Icon = certIcons[cert.icon] || FaCertificate;
          return (
            <motion.div
              key={cert.id}
              className="glass-card p-6 group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 group-hover:opacity-25 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${cert.color} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <Icon className="text-xl" style={{ color: cert.color }} />
                </div>

                <h3 className="font-display font-semibold text-base mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-600 text-xs mb-4">{cert.platform}</p>

                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  Verify Certificate <FaExternalLinkAlt size={10} />
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
