'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AudioVisualizerBarsProps {
  active: boolean;
  frequencyData?: number[]; // Normalized 0-1 values for bars
  barCount?: number;
}

export function AudioVisualizerBars({
  active,
  frequencyData = [],
  barCount = 18,
}: AudioVisualizerBarsProps) {
  const bars = Array.from({ length: barCount }, (_, i) => {
    const val = frequencyData[i % frequencyData.length] || (active ? 0.3 + Math.sin(i * 0.5) * 0.3 : 0.08);
    return Math.max(0.08, Math.min(val, 1));
  });

  return (
    <div className="flex items-center justify-center gap-1.5 h-10 px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
      {bars.map((heightFactor, i) => (
        <motion.span
          key={i}
          animate={{
            height: active ? `${Math.max(6, heightFactor * 32)}px` : '4px',
            backgroundColor: active
              ? i % 2 === 0
                ? '#bc62b4'
                : '#00f0ff'
              : 'rgba(255, 255, 255, 0.2)',
          }}
          transition={{
            duration: 0.1,
            ease: 'easeOut',
          }}
          className="w-1 rounded-full will-change-transform shadow-[0_0_8px_rgba(188,98,180,0.4)]"
        />
      ))}
    </div>
  );
}
