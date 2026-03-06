'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
