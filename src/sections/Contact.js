'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setSending(true);

    // Simulate sending (replace with EmailJS or API route integration)
    try {
      // For EmailJS integration, uncomment and configure:
      // import emailjs from '@emailjs/browser';
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');

      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="section-title font-display">
        Get in <span className="gradient-text">Touch</span>
      </h2>
      <p className="section-subtitle">
        Have a project idea, collaboration opportunity, or just want to say hello? Let&apos;s connect!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display font-bold text-2xl mb-6">
            Let&apos;s build something <span className="gradient-text">amazing</span> together.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            I&apos;m always open to discussing new projects, creative ideas, research collaborations,
            or opportunities to be part of your vision. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {[
              { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mandeepkumar', href: personalInfo.linkedin },
              { icon: FaGithub, label: 'GitHub', value: 'github.com/mandeepkumar', href: personalInfo.github },
              { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-4 glass p-4 rounded-xl group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <item.icon className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                className="glass-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.2 }}
                >
                  <FaCheckCircle className="text-5xl text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="neon-btn text-sm"
                >
                  <span>Send Another Message</span>
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all outline-none text-sm resize-none"
                      placeholder="Tell me about your idea or project..."
                    />
                  </div>

                  {error && (
                    <motion.p
                      className="text-red-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    className="w-full neon-btn-filled flex items-center justify-center gap-2"
                    disabled={sending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
