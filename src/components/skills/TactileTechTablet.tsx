'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { techCards, TechCard } from '@/data/skills';
import {
  Cpu,
  Sparkles,
  Bot,
  Workflow,
  Database,
  Layers,
  Code,
  FileCode2,
  Palette,
  Zap,
  Box,
  Server,
  Shield,
  Terminal,
  HardDrive,
  Radio,
  Smartphone,
  Globe,
  MapPin,
  GitBranch,
  Atom,
  Binary,
  Coins,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5 text-[#bc62b4]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#00f0ff]" />,
  Bot: <Bot className="w-5 h-5 text-[#28ca41]" />,
  Workflow: <Workflow className="w-5 h-5 text-[#bc62b4]" />,
  Binary: <Binary className="w-5 h-5 text-[#c445f5]" />,
  Database: <Database className="w-5 h-5 text-[#00f0ff]" />,
  Layers: <Layers className="w-5 h-5 text-white" />,
  Code: <Code className="w-5 h-5 text-[#00f0ff]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#38bdf8]" />,
  Zap: <Zap className="w-5 h-5 text-[#facc15]" />,
  Palette: <Palette className="w-5 h-5 text-[#38bdf8]" />,
  Box: <Box className="w-5 h-5 text-[#bc62b4]" />,
  Atom: <Atom className="w-5 h-5 text-[#00f0ff]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#ea4335]" />,
  FileCode2: <FileCode2 className="w-5 h-5 text-[#e44d26]" />,
  Globe: <Globe className="w-5 h-5 text-[#21759b]" />,
  Server: <Server className="w-5 h-5 text-[#22c55e]" />,
  Shield: <Shield className="w-5 h-5 text-[#e11d48]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#3b82f6]" />,
  HardDrive: <HardDrive className="w-5 h-5 text-[#10b981]" />,
  Coins: <Coins className="w-5 h-5 text-[#f59e0b]" />,
  GitBranch: <GitBranch className="w-5 h-5 text-[#f05032]" />,
  Radio: <Radio className="w-5 h-5 text-[#f97316]" />,
};

type CategoryFilter = 'All' | 'AI & Automation' | 'Frontend & Mobile' | 'Backend & Web3' | 'Tools & Cloud';

const categories: CategoryFilter[] = [
  'All',
  'AI & Automation',
  'Frontend & Mobile',
  'Backend & Web3',
  'Tools & Cloud',
];

export function TactileTechTablet() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredCards =
    activeCategory === 'All'
      ? techCards
      : techCards.filter((c) => c.category === activeCategory);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0b14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl flex flex-col gap-6">
      {/* Header with status dots */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex flex-col">
          <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
            Tech Arsenal Matrix
          </span>
          <span className="text-base font-bold text-white">
            Hover cards for micro-physics feedback
          </span>
        </div>
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#bc62b4]/20 border border-[#bc62b4] text-white shadow-[0_0_12px_rgba(188,98,180,0.3)]'
                : 'bg-white/[0.03] border border-white/[0.06] text-text-muted hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Tactile Tech Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
        {filteredCards.map((card) => (
          <motion.div
            key={card.name}
            whileHover={{
              scale: 0.96,
              boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.7), 0 0 20px rgba(188, 98, 180, 0.25)',
              borderColor: 'rgba(188, 98, 180, 0.6)',
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between gap-3 cursor-pointer select-none transition-colors duration-200 group"
          >
            <div className="flex items-center justify-between">
              {/* Icon with spring physics */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="p-2 rounded-lg bg-black/40 border border-white/10 shrink-0"
              >
                {iconMap[card.iconName] || <Code className="w-5 h-5 text-accent-primary" />}
              </motion.div>

              {card.badge && (
                <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/[0.04] text-text-muted border border-white/[0.04] truncate max-w-[90px]">
                  {card.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-primary transition-colors truncate">
                {card.name}
              </span>
              <span className="text-[10px] font-mono text-text-muted mt-0.5">
                {card.proficiency}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
