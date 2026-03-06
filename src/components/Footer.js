'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl gradient-text mb-2">
              Mandeep Kumar
            </h3>
            <p className="text-gray-500 text-sm">
              AI/ML Engineer & Data Scientist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {[
              { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <div className="flex justify-end">
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-xl glass text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <FaArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Mandeep Kumar. Built with{' '}
            <FaHeart className="text-red-500 inline" size={12} /> and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
