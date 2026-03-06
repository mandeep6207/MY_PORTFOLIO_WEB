'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaRocket, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { personalInfo, rotatingTexts } from '@/data/portfolio';

// Carousel image data — each image paired with its professional label
const carouselData = [
  { image: '/images/1.png', label: 'B.Tech Data Science Student' },
  { image: '/images/2.png', label: 'AI/ML Developer' },
  { image: '/images/3.png', label: 'Patent Contributor' },
  { image: '/images/4.png', label: 'Open Source Leader' },
  { image: '/images/5.png', label: 'Tech Lead GDG On Campus' },
  { image: '/images/6.png', label: 'State Lead OSCG 2026' },
  { image: '/images/7.png', label: 'Data Analyst Aspirant' },
  { image: '/images/8.png', label: 'ISRO Research Collaborator' },
];

const ITEM_COUNT = carouselData.length;
const ROTATION_SPEED = 0.20; // degrees per frame — slow & smooth

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animFrameRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  // JS-driven smooth rotation animation
  useEffect(() => {
    let angle = 0;
    const animate = () => {
      if (!isPaused) {
        angle += ROTATION_SPEED;
        if (angle >= 360) angle -= 360;
        setRotationAngle(angle);

        // Determine which item is closest to the front (0 degrees)
        const sliceAngle = 360 / ITEM_COUNT;
        const normalizedAngle = ((angle % 360) + 360) % 360;
        const frontIndex = Math.round((360 - normalizedAngle) / sliceAngle) % ITEM_COUNT;
        setActiveIndex(frontIndex);
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused]);

  // Compute 3D positions for each carousel item
  const getItemStyle = (index) => {
    const sliceAngle = 360 / ITEM_COUNT;
    const itemAngle = sliceAngle * index + rotationAngle;
    const radian = (itemAngle * Math.PI) / 180;
    const radius = 260; // orbit radius

    const x = Math.sin(radian) * radius;
    const z = Math.cos(radian) * radius;

    // Depth-based scaling and opacity — aggressive falloff so only front 2-3 visible
    const normalizedZ = (z + radius) / (2 * radius); // 0 (back) to 1 (front)
    const scale = 0.3 + normalizedZ * 0.8; // 0.3 at back, 1.1 at front
    const opacity = Math.pow(normalizedZ, 2.5); // aggressive: back items nearly invisible
    const blur = normalizedZ < 0.4 ? 4 : normalizedZ < 0.6 ? 2 : 0;
    const zIndex = Math.round(normalizedZ * 100);

    // Vertical floating offset — subtle sine wave
    const floatY = Math.sin(radian * 0.5 + Date.now() * 0.001) * 4;

    return {
      transform: `translateX(${x}px) translateY(${floatY}px) scale(${scale})`,
      opacity,
      zIndex,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      transition: 'filter 0.3s ease',
    };
  };

  const isActive = (index) => index === activeIndex;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)',
            top: '-10%',
            right: '-10%',
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            bottom: '-5%',
            left: '-5%',
          }}
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="gradient-text">Mandeep Kumar</span>
            </h1>

            <div className="h-10 mb-6">
              <p className="text-xl sm:text-2xl text-primary font-medium font-display">
                {displayText}
                <span className="animate-blink border-r-2 border-primary ml-1" />
              </p>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              {personalInfo.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="neon-btn-filled flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                className="neon-btn text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center gap-2">
                  <FaRocket /> View Projects
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                className="neon-btn text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="flex items-center gap-2">
                  <FaEnvelope /> Contact Me
                </span>
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '4+', label: 'Projects' },
                { value: '2', label: 'Patents' },
                { value: '800+', label: 'Community' },
                { value: '5+', label: 'Certs' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Enhanced 3D Carousel */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="hero-carousel-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Large glow backdrop */}
              <div className="hero-carousel-glow" />

              {/* Orbit ring visual */}
              <div className="hero-carousel-ring" />

              {/* Carousel items */}
              <div className="hero-carousel-stage">
                {carouselData.map((item, index) => (
                  <div
                    key={index}
                    className={`hero-carousel-item ${isActive(index) ? 'active' : ''}`}
                    style={getItemStyle(index)}
                  >
                    <div className="hero-carousel-img-wrap">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={300}
                        height={450}
                        className="hero-carousel-img"
                        priority={index < 3}
                      />
                      {/* Neon border glow for active */}
                      {isActive(index) && (
                        <div className="hero-carousel-active-glow" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic label under carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <p className="hero-carousel-label">
                  <span className="hero-carousel-label-dot" />
                  {carouselData[activeIndex]?.label}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaChevronDown className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
