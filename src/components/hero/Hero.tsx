'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { GlowingButton } from '@/components/ui/GlowingButton';
import { HeroOrbitalAvatar } from '@/components/canvas/HeroOrbitalAvatar';
import { TypewriterText } from '@/components/hero/TypewriterText';
import { StatsStrip } from '@/components/hero/StatsStrip';
import { personalInfo } from '@/data/personal';
import { ArrowRight, FileDown, Sparkles, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center overflow-hidden">
      <Container className="relative z-10 flex flex-col justify-between">
        {/* Top 2-Column Split: 60% Left, 40% Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (60% / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#28ca41]/10 text-[#54f06f] border border-[#28ca41]/30 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(40,202,65,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28ca41] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28ca41]" />
              </span>
              <span>✦ Available for Enterprise AI Deployments</span>
            </motion.div>

            {/* High-Impact H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-4 text-white"
            >
              Building <span className="text-gradient-purple-cyan">Autonomous AI</span> Systems & Fast UIs.
            </motion.h1>

            {/* Typewriter Role Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold font-mono text-text-secondary mb-6 min-h-[2.2rem] flex items-center gap-2"
            >
              <span className="text-[#bc62b4] text-lg">$</span>
              <TypewriterText roles={personalInfo.roles} className="text-white" />
            </motion.div>

            {/* High-Converting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-md text-text-secondary leading-relaxed max-w-xl mb-8"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Twin CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-4"
            >
              {/* Primary Solid Glow */}
              <GlowingButton
                as="a"
                href="#ai-agents"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore n8n AI Automations
              </GlowingButton>

              {/* Ghost Border Resume / Projects */}
              <GlowingButton
                as="a"
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noreferrer"
                download="Wahab_Mehar_Resume.pdf"
                variant="ghost"
                size="lg"
                icon={<FileDown className="w-4 h-4" />}
              >
                Download Resume
              </GlowingButton>
            </motion.div>

          </div>

          {/* Right Column (40% / 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <HeroOrbitalAvatar />
          </motion.div>

        </div>

        {/* Bottom Stats Strip */}
        <StatsStrip />
      </Container>
    </section>
  );
}
