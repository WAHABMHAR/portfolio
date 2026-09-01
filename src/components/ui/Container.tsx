import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id, ...props }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn('max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 w-full', className)}
      {...props}
    >
      {children}
    </div>
  );
}
