'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiAgentWorkflow } from '@/data/ai-agents';
import { Badge } from '@/components/ui/Badge';
import { X, ArrowRight, CheckCircle2, Cpu, Zap, Activity, Layers, Terminal } from 'lucide-react';

interface WorkflowDetailModalProps {
  workflow: AiAgentWorkflow | null;
  onClose: () => void;
}

export function WorkflowDetailModal({ workflow, onClose }: WorkflowDetailModalProps) {
  if (!workflow) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0b14] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 flex flex-col gap-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] border border-white/10 text-text-secondary hover:text-white hover:border-[#bc62b4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="purple" dot>{workflow.badge}</Badge>
              <Badge variant="cyan">{workflow.triggerType}</Badge>
              <span className="text-xs font-mono text-text-muted">
                {workflow.nodesCount} Pipeline Nodes
              </span>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl">{workflow.icon}</span>
              <h3 className="text-2xl font-bold text-white">{workflow.title}</h3>
            </div>
            <p className="text-sm font-mono text-accent-primary">{workflow.tagline}</p>
          </div>

          {/* ROI Metric Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            {workflow.roiMetrics.map((roi) => (
              <div key={roi.label} className="flex flex-col">
                <span className="text-xs font-mono text-text-muted">{roi.label}</span>
                <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
                  {roi.value}
                </span>
              </div>
            ))}
          </div>

          {/* Deep Architecture Breakdown */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-accent-primary" />
              Architectural Logic & Execution Flow
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed bg-white/[0.01] p-4 rounded-xl border border-white/[0.04]">
              {workflow.architectureSummary}
            </p>
          </div>

          {/* Node-by-Node Pipeline Visualizer */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted font-semibold flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-accent-secondary" />
              Active n8n Workflow Step Sequence
            </h4>
            <div className="flex flex-col gap-2.5">
              {workflow.workflowSteps.map((step, idx) => (
                <div
                  key={step.name}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#bc62b4]/20 border border-[#bc62b4]/40 text-accent-primary text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white">{step.name}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-text-muted border border-white/[0.06]">
                        {step.service}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Impact Callout */}
          <div className="p-4 rounded-xl bg-[#28ca41]/10 border border-[#28ca41]/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#28ca41] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-mono font-bold text-[#28ca41] uppercase tracking-wider">
                Production Client Impact
              </span>
              <p className="text-xs sm:text-sm text-text-primary">{workflow.clientImpact}</p>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-text-muted">
              Ready to deploy in your stack?
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium bg-[#bc62b4] text-white hover:bg-[#a84aa0] shadow-md shadow-[#bc62b4]/30 transition-colors"
            >
              Request Custom Workflow Build
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
