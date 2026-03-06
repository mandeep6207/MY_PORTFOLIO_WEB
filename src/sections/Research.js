'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaLightbulb, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { research } from '@/data/portfolio';

export default function Research() {
  return (
    <SectionWrapper id="research">
      <h2 className="section-title font-display">
        Research & <span className="gradient-text">Patents</span>
      </h2>
      <p className="section-subtitle">
        Innovative AI research contributions with filed patents driving real-world impact.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {research.map((item, i) => (
          <motion.div
            key={item.id}
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <FaFlask className="text-primary text-xl" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaCheckCircle className="text-green-400 text-sm" />
                    <span className="text-xs font-medium text-green-400">{item.status}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1.5">
                    <FaFileAlt className="text-primary" />
                    Patent No: {item.patentNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <div className="space-y-3">
                <div className="glass p-4 rounded-xl">
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <FaLightbulb /> Innovation
                  </h4>
                  <p className="text-gray-400 text-sm">{item.innovation}</p>
                </div>

                <div className="glass p-4 rounded-xl">
                  <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    🎯 Impact
                  </h4>
                  <p className="text-gray-400 text-sm">{item.impact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
