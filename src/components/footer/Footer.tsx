'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { personalInfo } from '@/data/personal';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="py-12 border-t border-white/[0.08] relative bg-[#07070b]/80 backdrop-blur-xl">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bc62b4] to-[#8e3f88] text-white font-mono font-bold text-xs flex items-center justify-center shadow-md">
              WM
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">
                {personalInfo.name}
              </span>
              <span className="text-xs text-text-muted">
                Senior Software Engineer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:text-white hover:border-[#bc62b4] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:text-white hover:border-[#00f0ff] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:text-white hover:border-[#28ca41] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-muted hover:text-accent-primary transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-xs font-mono text-text-muted">
          © {new Date().getFullYear()} Wahab Mehar. All rights reserved. Designed for high-ticket enterprise client conversions.
        </div>
      </Container>
    </footer>
  );
}
