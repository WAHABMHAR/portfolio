'use client';

import React from 'react';
import { projectCategories } from '@/data/projects';

interface ProjectFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function ProjectFilter({
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-10">
      {projectCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium font-mono transition-all duration-200 cursor-pointer border ${
              isActive
                ? 'bg-[#bc62b4] text-white border-[#bc62b4] shadow-[0_0_20px_rgba(188,98,180,0.4)]'
                : 'bg-white/[0.03] text-text-secondary border-white/10 hover:border-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
