'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaRocket, FaCodeBranch } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { projects } from '@/data/portfolio';

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      className="glass-card overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onClick={() => onClick(project)}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{ minHeight: 0 }}
    >
      {/* Compact header */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <FaRocket className="text-lg text-white" />
            </motion.div>
            <span className="text-[10px] text-primary font-medium px-2 py-0.5 rounded-full glass">
              {project.category}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-xs font-medium text-white glass px-3 py-1.5 rounded-full">
            View Details →
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display font-bold text-sm mb-0.5 truncate">{project.title}</h3>
        <p className="text-primary text-[11px] font-medium mb-2 truncate">{project.subtitle}</p>
        <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent/80 font-medium">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center gap-1 text-gray-400 hover:text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub /> GitHub
          </a>
          {project.liveDemo && project.liveDemo !== '#' && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 text-gray-400 hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const myProjects = useMemo(() => projects.filter((p) => p.type === 'original'), []);
  const contributedProjects = useMemo(() => projects.filter((p) => p.type === 'contributed'), []);

  return (
    <SectionWrapper id="projects">
      <h2 className="section-title font-display">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="section-subtitle">
        Real-world AI/ML projects solving meaningful problems across healthcare, finance, and
        environmental research.
      </p>

      {/* ===== MY PROJECTS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
            <FaRocket className="text-lg text-white" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">My Projects</h3>
            <p className="text-gray-400 text-xs">{myProjects.length} original repositories</p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="projects-grid"
        >
          {myProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>

      {/* ===== CONTRIBUTED PROJECTS ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-400/30 flex items-center justify-center">
            <FaCodeBranch className="text-lg text-green-400" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-white">Contributed Projects</h3>
            <p className="text-gray-400 text-xs">
              {contributedProjects.length} open source contributions
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
          }}
          className="projects-grid"
        >
          {contributedProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>

              <span className="text-xs text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                {selectedProject.category}
              </span>

              <h3 className="font-display font-bold text-2xl mt-4 mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-primary font-medium mb-4">{selectedProject.subtitle}</p>

              <p className="text-gray-400 leading-relaxed mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-sm text-gray-300 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-4 mb-6">
                <h4 className="font-semibold text-sm text-primary mb-2">💡 Impact</h4>
                <p className="text-gray-400 text-sm">{selectedProject.impact}</p>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn-filled flex items-center gap-2 text-sm"
                >
                  <FaGithub /> View on GitHub
                </a>
                {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn text-sm"
                  >
                    <span className="flex items-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
