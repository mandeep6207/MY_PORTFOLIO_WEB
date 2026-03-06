'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { navLinks } from '@/data/portfolio';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass py-3'
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display font-bold text-xl gradient-text"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          >
            MK<span className="text-primary">.</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-primary"
                    layoutId="navIndicator"
                    style={{ transform: 'translateX(-50%)' }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              className="p-2 rounded-lg glass text-gray-400 hover:text-primary transition-colors"
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {darkMode ? <BsSunFill size={18} /> : <BsMoonStarsFill size={18} />}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg glass text-gray-400 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 glass p-6 pt-20"
              style={{ background: 'rgba(10, 10, 15, 0.95)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
