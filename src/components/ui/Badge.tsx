import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'cyan' | 'emerald' | 'outline' | 'neutral';
  className?: string;
  dot?: boolean;
}

export function Badge({ children, variant = 'purple', className, dot = false }: BadgeProps) {
  const variantStyles = {
    purple: 'bg-[#bc62b4]/15 text-[#f5b8f0] border-[#bc62b4]/30',
    cyan: 'bg-[#00f0ff]/15 text-[#a6f7ff] border-[#00f0ff]/30',
    emerald: 'bg-[#28ca41]/15 text-[#9effad] border-[#28ca41]/30',
    outline: 'bg-white/[0.03] text-text-secondary border-border-subtle',
    neutral: 'bg-white/5 text-text-primary border-white/10',
  };

  const dotStyles = {
    purple: 'bg-[#bc62b4] shadow-[0_0_8px_#bc62b4]',
    cyan: 'bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]',
    emerald: 'bg-[#28ca41] shadow-[0_0_8px_#28ca41]',
    outline: 'bg-text-secondary',
    neutral: 'bg-text-primary',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border backdrop-blur-sm transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotStyles[variant])} />}
      {children}
    </span>
  );
}
