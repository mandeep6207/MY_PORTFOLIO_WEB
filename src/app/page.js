'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';
import Achievements from '@/sections/Achievements';
import Certifications from '@/sections/Certifications';
import OpenSource from '@/sections/OpenSource';
import Research from '@/sections/Research';
import GitHubStats from '@/sections/GitHubStats';
import Contact from '@/sections/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="animated-bg" />
          <StarField />
          <CustomCursor />
          <ScrollProgress />
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Achievements />
            <Certifications />
            <OpenSource />
            <GitHubStats />
            <Research />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
