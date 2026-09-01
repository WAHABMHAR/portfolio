'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiAgentWorkflow } from '@/data/ai-agents';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, RotateCw, Sparkles, Zap, Layers, CheckCircle2 } from 'lucide-react';

interface AgentFlipCardProps {
  workflow: AiAgentWorkflow;
  index: number;
  onOpenModal: (workflow: AiAgentWorkflow) => void;
}

export function AgentFlipCard({ workflow, index, onOpenModal }: AgentFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Letter stagger animation for Front Face title hover
  const titleLetters = workflow.title.split('');

  return (
    <div
      className="group relative h-[440px] w-full perspective-1200 select-none cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full preserve-3d transition-shadow duration-300"
      >
        {/* ========================================================
            FRONT FACE (Normal state, 0deg)
            ======================================================== */}
        <div className="absolute inset-0 backface-hidden rounded-2xl bg-[#0d0b14]/90 border border-white/[0.08] group-hover:border-[#bc62b4]/50 shadow-xl backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
          {/* Top subtle glow */}
          <div
            className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-20 -z-10"
            style={{ backgroundColor: workflow.color }}
          />

          {/* Front Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="purple" dot>
                {workflow.badge}
              </Badge>
              <span className="text-xs font-mono text-text-muted">
                {workflow.nodesCount} Nodes
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-3.5 mt-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg border border-white/10"
                style={{ backgroundColor: `${workflow.color}18` }}
              >
                {workflow.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {workflow.title}
                </h3>
                <span className="text-xs font-mono text-accent-primary mt-1">
                  {workflow.tagline}
                </span>
              </div>
            </div>

            {/* Short Teaser Description */}
            <p className="text-sm text-text-secondary leading-relaxed mt-2 line-clamp-4">
              {workflow.shortTeaser}
            </p>
          </div>

          {/* Front Bottom Tags & Flip Indicator */}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-wrap gap-1.5">
              {workflow.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-text-secondary border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
              {workflow.tags.length > 3 && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-text-muted">
                  +{workflow.tags.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-text-muted group-hover:text-accent-primary transition-colors">
              <span className="flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5" />
                Flip for ROI & Flow
              </span>
              <span className="text-[11px] uppercase tracking-wider text-text-muted">
                Enterprise
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE (Flipped state, 180deg)
            ======================================================== */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-[#141220] border border-[#bc62b4]/40 shadow-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
          {/* Back Header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
              <span className="text-xs font-mono font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-accent-secondary" />
                Architecture & ROI
              </span>
              <span className="text-xs font-mono text-text-muted">
                {workflow.triggerType.split('/')[0]}
              </span>
            </div>

            {/* Key ROI Badges */}
            <div className="grid grid-cols-2 gap-2 my-1">
              {workflow.roiMetrics.slice(0, 2).map((roi) => (
                <div
                  key={roi.label}
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col"
                >
                  <span className="text-[11px] font-mono text-text-muted">{roi.label}</span>
                  <span className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                    {roi.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Architectural Summary */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                System Logic
              </span>
              <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                {workflow.architectureSummary}
              </p>
            </div>
          </div>

          {/* Back Action Button */}
          <div className="flex flex-col gap-2 pt-3 border-t border-white/[0.08]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(workflow);
              }}
              className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#bc62b4] to-[#8e3f88] text-white flex items-center justify-center gap-2 shadow-lg shadow-[#bc62b4]/30 hover:shadow-[#bc62b4]/60 transition-all cursor-pointer"
            >
              <span>Open Agent / View Flow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono text-center text-text-muted">
              Interactive node graph & pipeline breakdown
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
