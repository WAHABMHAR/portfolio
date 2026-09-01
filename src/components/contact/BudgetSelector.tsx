'use client';

import React from 'react';

const budgetTiers = [
  { id: '1k-3k', label: '$1k - $3k' },
  { id: '3k-10k', label: '$3k - $10k' },
  { id: '10k+', label: '$10k+' },
  { id: 'enterprise', label: 'Custom Enterprise' },
];

const projectTypeOptions = [
  'n8n AI Workflows',
  'Next.js Web App',
  'Custom LLM Agent',
  'Full-Stack System',
  'RAG & Vector Search',
];

interface BudgetSelectorProps {
  selectedBudget: string;
  onSelectBudget: (budget: string) => void;
  selectedTypes: string[];
  onToggleType: (type: string) => void;
}

export function BudgetSelector({
  selectedBudget,
  onSelectBudget,
  selectedTypes,
  onToggleType,
}: BudgetSelectorProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Project Scope Multi-Select */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold">
          Project Type (Select All Applicable)
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypeOptions.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                type="button"
                key={type}
                onClick={() => onToggleType(type)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#bc62b4]/20 text-[#f5b8f0] border-[#bc62b4] shadow-[0_0_15px_rgba(188,98,180,0.3)]'
                    : 'bg-white/[0.03] text-text-secondary border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {isSelected ? '✓ ' : '+ '}
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Budget Pill Selector */}
      <div className="flex flex-col gap-2.5">
        <label className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold">
          Anticipated Budget Range
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {budgetTiers.map((tier) => {
            const isSelected = selectedBudget === tier.id;
            return (
              <button
                type="button"
                key={tier.id}
                onClick={() => onSelectBudget(tier.id)}
                className={`py-2 px-3 rounded-xl text-xs font-mono font-medium text-center transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#bc62b4] to-[#8e3f88] text-white border-[#bc62b4] shadow-[0_0_20px_rgba(188,98,180,0.4)]'
                    : 'bg-white/[0.03] text-text-secondary border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {tier.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
