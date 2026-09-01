'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'AI & n8n Workflows', href: '#ai-agents' },
  { name: 'Tech Arsenal', href: '#skills' },
  { name: 'AI Assistants', href: '#chatbots' },
  { name: 'Jarvis Voice', href: '#jarvis' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'backdrop-blur-md bg-black/40 border-b border-white/5 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
        }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 group select-none cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#bc62b4] to-[#8e3f88] text-white font-mono font-bold text-sm shadow-md shadow-[#bc62b4]/30 group-hover:shadow-[#bc62b4]/60 transition-shadow">
              WM
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#28ca41] border-2 border-[#07070b] shadow-[0_0_8px_#28ca41]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#bc62b4] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                Full Stack & AI Workflows Expert
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-text-secondary hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <GlowingButton
              as="a"
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Get in Touch
            </GlowingButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-text-primary hover:text-white hover:border-[#bc62b4]/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden backdrop-blur-2xl bg-[#0d0b14]/95 border-b border-white/10 overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
                <GlowingButton
                  as="a"
                  href="#contact"
                  variant="primary"
                  size="md"
                  onClick={() => setMobileMenuOpen(false)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Initiate AI Project
                </GlowingButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
