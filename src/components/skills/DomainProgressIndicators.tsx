'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { domainSkills } from '@/data/skills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function DomainProgressIndicators() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const bars = containerRef.current?.querySelectorAll('.progress-fill');
      if (!bars) return;

      bars.forEach((bar) => {
        const targetWidth = bar.getAttribute('data-percent') || '0';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${targetWidth}%`,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          Core Engineering Mastery
        </h3>
        <p className="text-sm text-text-secondary">
          Architectural depth across AI automation, client rendering engines, and distributed backend services.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {domainSkills.map((domain) => (
          <div key={domain.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{domain.name}</span>
              <span className="text-xs font-mono font-bold text-accent-primary">
                {domain.percentage}%
              </span>
            </div>

            {/* Progress Bar Track */}
            <div className="relative w-full h-2 rounded-full bg-white/[0.06] overflow-hidden p-0.5 border border-white/[0.04]">
              <div
                data-percent={domain.percentage}
                className="progress-fill h-full rounded-full bg-gradient-to-r from-[#bc62b4] via-[#a84aa0] to-[#00f0ff] shadow-[0_0_12px_rgba(188,98,180,0.6)]"
                style={{ width: '0%' }}
              />
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              {domain.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {domain.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-text-secondary border border-white/[0.05]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
