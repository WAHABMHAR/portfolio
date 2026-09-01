'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type BaseProps = {
  label: string;
  id: string;
  className?: string;
  value?: string;
};

type TextInputProps = BaseProps & {
  isTextarea?: false;
  rows?: never;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

type TextareaInputProps = BaseProps & {
  isTextarea: true;
  rows?: number;
  type?: never;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

type FloatingInputProps = TextInputProps | TextareaInputProps;

export function FloatingInput({
  label,
  id,
  isTextarea = false,
  rows = 4,
  value,
  onChange,
  className,
  required,
  type = 'text',
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = Boolean(value && String(value).length > 0);

  return (
    <div className="relative w-full">
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={cn(
            'w-full pt-6 pb-2.5 px-4 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-transparent transition-all duration-200 resize-none outline-none backdrop-blur-md',
            isFocused
              ? 'border-[#bc62b4] shadow-[0_0_20px_rgba(188,98,180,0.25)] bg-white/[0.05]'
              : 'border-white/10 hover:border-white/20',
            className
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={cn(
            'w-full pt-6 pb-2.5 px-4 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-transparent transition-all duration-200 outline-none backdrop-blur-md',
            isFocused
              ? 'border-[#bc62b4] shadow-[0_0_20px_rgba(188,98,180,0.25)] bg-white/[0.05]'
              : 'border-white/10 hover:border-white/20',
            className
          )}
        />
      )}

      {/* Floating Animated Label */}
      <label
        htmlFor={id}
        className={cn(
          'absolute left-4 font-mono transition-all duration-200 pointer-events-none select-none',
          isFocused || hasValue
            ? 'top-2 text-[10px] text-accent-primary font-semibold'
            : 'top-4 text-xs text-text-muted'
        )}
      >
        {label}
      </label>
    </div>
  );
}
