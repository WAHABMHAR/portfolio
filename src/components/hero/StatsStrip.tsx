'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { heroStats } from '@/data/personal';

function CounterNumber({ value, suffix }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value);
  const isDecimal = value.includes('.');

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (numericValue - start) * easeOut;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(numericValue);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="font-mono font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix && <span className="text-[#bc62b4] ml-0.5">{suffix}</span>}
    </span>
  );
}

export function StatsStrip() {
  return (
    <div className="w-full pt-10 mt-8 border-t border-white/[0.08]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col gap-1 ${
              i > 0 ? 'md:border-l md:border-white/[0.08] md:pl-6 lg:pl-8' : ''
            }`}
          >
            <div className="flex items-baseline">
              <CounterNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs uppercase tracking-wider font-mono font-semibold text-text-primary">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-[11px] text-text-muted hidden sm:block">
                {stat.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
