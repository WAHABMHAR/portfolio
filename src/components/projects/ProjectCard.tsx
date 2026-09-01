'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink, Github, Sparkles, Activity } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  // Spring physics for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    mouseX.set(nx - 0.5);
    mouseY.set(ny - 0.5);

    setGlarePosition({
      x: nx * 100,
      y: ny * 100,
      opacity: 0.15,
    });
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl overflow-hidden backdrop-blur-xl bg-[#0d0b14]/80 border border-white/[0.08] hover:border-[#bc62b4]/40 transition-colors duration-300 shadow-xl group flex flex-col justify-between ${
        project.bentoSpan || 'col-span-1'
      }`}
    >
      {/* Dynamic Glare Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.18) 0%, transparent 65%)`,
          opacity: glarePosition.opacity,
        }}
        aria-hidden="true"
      />

      {/* Card Header / Preview Bar */}
      <div>
        <div
          className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-white/[0.08] flex items-center justify-center p-6"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}15 0%, #0d0b14 70%)`,
          }}
        >
          {/* Simulated Browser Bar */}
          <div className="absolute top-0 left-0 right-0 px-4 py-2.5 bg-black/40 border-b border-white/[0.06] backdrop-blur-md flex items-center justify-between font-mono text-[11px] text-text-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
            </div>
            <span className="truncate max-w-[200px] text-text-secondary">{project.subtitle}</span>
            <span className="text-[10px] uppercase text-text-muted font-bold">{project.category}</span>
          </div>

          {/* Decorative Floating Matrix / Grid */}
          <div
            className="absolute inset-0 top-8 opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle, ${project.accentColor}50 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
            aria-hidden="true"
          />

          {/* Center Visual Motif / Title Badge */}
          <div className="relative z-10 text-center flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg border border-white/15 backdrop-blur-md"
              style={{ backgroundColor: `${project.accentColor}25`, borderColor: `${project.accentColor}60` }}
            >
              {project.badge === 'AI/ML' ? '🧠' : project.badge === 'Enterprise' ? '🏢' : '⚡'}
            </div>
            <span className="font-mono text-xs text-text-secondary font-medium tracking-wide">
              {project.metrics}
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 sm:p-7 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#bc62b4] transition-colors">
              {project.title}
            </h3>
            <Badge
              variant={
                project.badge === 'Enterprise'
                  ? 'purple'
                  : project.badge === 'AI/ML'
                  ? 'cyan'
                  : project.badge === 'Live'
                  ? 'emerald'
                  : 'outline'
              }
              dot
            >
              {project.badge}
            </Badge>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-text-secondary border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer / Action Links */}
      <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center gap-4 border-t border-white/[0.04]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-primary hover:text-white transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Preview
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-text-secondary hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            Architecture Repo
          </a>
        )}
      </div>
    </motion.div>
  );
}
