'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const floatingBadges = [
  { text: 'AI n8n Expert ⚡', position: '-top-6 left-0 sm:-left-6', color: '#bc62b4', delay: 0 },
  { text: 'AI Agents 🧠', position: '-top-7 right-4 sm:right-6', color: '#00f0ff', delay: 0.1 },
  { text: 'Python 🐍', position: 'top-6 -right-8 sm:-right-14', color: '#fcd34d', delay: 0.2 },
  { text: 'AI Automation 🤖', position: 'top-22 -right-6 sm:-right-12', color: '#bc62b4', delay: 0.3 },
  { text: 'MERN ⚛️', position: 'top-8 -left-8 sm:-left-14', color: '#28ca41', delay: 0.4 },
  { text: 'AI Voice Agent 🎙️', position: 'bottom-16 -right-8 sm:-right-12', color: '#c445f5', delay: 0.5 },
  { text: 'PostgreSQL 🐘', position: 'bottom-12 -left-6 sm:-left-10', color: '#00f0ff', delay: 0.6 },
  { text: 'Chatbots 💬', position: 'bottom-0 -right-2 sm:-right-6', color: '#bc62b4', delay: 0.7 },
  { text: 'Supabase & Firebase 🔥', position: '-bottom-6 left-4 sm:left-6', color: '#f59e0b', delay: 0.8 },
];

export function HeroOrbitalAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full max-w-[500px] aspect-square mx-auto perspective-1000 select-none py-8 my-4"
    >
      {/* Outer Radial Glow Background */}
      <div
        className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-40 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(188,98,180,0.4) 0%, rgba(0,240,255,0.2) 50%, transparent 70%)',
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center w-[250px] h-[250px] sm:w-[290px] sm:h-[290px]"
      >
        {/* Orbital Ring 1: Outer Clockwise */}
        <div className="absolute inset-[-30px] sm:inset-[-38px] rounded-full border border-dashed border-[#bc62b4]/40 animate-spin-slow pointer-events-none" />

        {/* Orbital Ring 2: Inner Counter-Clockwise with Cyan Accent */}
        <div className="absolute inset-[-15px] sm:inset-[-19px] rounded-full border border-dashed border-[#00f0ff]/35 animate-spin-reverse pointer-events-none" />

        {/* Inner Glowing Halo Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#bc62b4]/60 shadow-[0_0_30px_rgba(188,98,180,0.4)] pointer-events-none" />

        {/* Central Avatar Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/15 bg-gradient-to-b from-[#141220] to-[#07070b] p-1.5 shadow-2xl flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0d0b14]">
            <Image
              src="/hero.png"
              alt="Wahab Mehar - Full Stack & AI Workflows Expert"
              fill
              sizes="(max-width: 640px) 250px, 290px"
              priority
              className="object-cover object-top filter contrast-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070b]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* 9 Floating Parallax Skill Badges */}
        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.text}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + badge.delay, duration: 0.45 }}
            whileHover={{ scale: 1.12, y: -4 }}
            className={`absolute ${badge.position} z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold backdrop-blur-xl bg-[#0d0b14]/92 border border-white/15 shadow-xl flex items-center gap-1.5 cursor-pointer whitespace-nowrap transition-colors duration-200`}
            style={{
              boxShadow: `0 8px 24px -4px ${badge.color}35`,
              borderColor: `${badge.color}50`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: badge.color, boxShadow: `0 0 8px ${badge.color}` }}
            />
            <span className="text-text-primary">{badge.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
