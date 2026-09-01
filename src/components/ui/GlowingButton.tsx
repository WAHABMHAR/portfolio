'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowingButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'ghost' | 'cyan' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  glow?: boolean;
}

export function GlowingButton({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  download,
  children,
  icon,
  glow = true,
  className,
  ...props
}: GlowingButtonProps) {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#bc62b4] via-[#a84aa0] to-[#8e3f88] text-white border border-[#bc62b4]/40 hover:border-[#bc62b4] shadow-[0_0_25px_rgba(188,98,180,0.35)] hover:shadow-[0_0_35px_rgba(188,98,180,0.55)]',
    cyan:
      'bg-gradient-to-r from-[#00c6d7] to-[#0099ff] text-[#07070b] font-semibold border border-[#00f0ff]/50 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)]',
    emerald:
      'bg-gradient-to-r from-[#28ca41] to-[#1da433] text-[#07070b] font-semibold border border-[#28ca41]/50 shadow-[0_0_25px_rgba(40,202,65,0.3)] hover:shadow-[0_0_35px_rgba(40,202,65,0.5)]',
    ghost:
      'bg-white/[0.04] text-text-primary border border-white/10 hover:border-[#bc62b4]/50 hover:bg-white/[0.08] hover:text-white',
  };

  const baseClasses = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 backdrop-blur-md cursor-pointer select-none group',
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={baseClasses}
      >
        {children}
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={baseClasses}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
}
