'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      // Initial offscreen center position
      gsap.set([dot, ring], {
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        pointerEvents: 'none',
      });

      // Snappy GSAP quickTo tracking (0.05s for dot, 0.16s for follower ring)
      const setDotX = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power2.out' });
      const setDotY = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power2.out' });

      const setRingX = gsap.quickTo(ring, 'x', { duration: 0.16, ease: 'power2.out' });
      const setRingY = gsap.quickTo(ring, 'y', { duration: 0.16, ease: 'power2.out' });

      let active = false;

      function onMouseMove(e: MouseEvent) {
        if (!active) {
          gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
          active = true;
        }
        setDotX(e.clientX);
        setDotY(e.clientY);
        setRingX(e.clientX);
        setRingY(e.clientY);
      }

      function onMouseDown() {
        gsap.to(dot, { scale: 0.6, duration: 0.1 });
        gsap.to(ring, { scale: 1.3, borderColor: '#00f0ff', duration: 0.1 });
      }

      function onMouseUp() {
        gsap.to(dot, { scale: 1, duration: 0.15 });
        gsap.to(ring, { scale: 1, borderColor: '#bc62b4', duration: 0.15 });
      }

      function onMouseLeave() {
        gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
        active = false;
      }

      function onMouseEnterElement(e: MouseEvent) {
        const target = e.target as HTMLElement | null;
        if (
          target &&
          (target.closest('a') ||
            target.closest('button') ||
            target.closest('[role="button"]') ||
            target.closest('input') ||
            target.closest('textarea') ||
            target.closest('.cursor-pointer'))
        ) {
          gsap.to(dot, { scale: 1.5, backgroundColor: '#00f0ff', duration: 0.15 });
          gsap.to(ring, {
            scale: 2.0,
            backgroundColor: 'rgba(188, 98, 180, 0.12)',
            borderColor: '#bc62b4',
            duration: 0.15,
          });
        } else {
          gsap.to(dot, { scale: 1, backgroundColor: '#bc62b4', duration: 0.15 });
          gsap.to(ring, {
            scale: 1,
            backgroundColor: 'transparent',
            borderColor: '#bc62b4',
            duration: 0.15,
          });
        }
      }

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseover', onMouseEnterElement, { passive: true });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mouseover', onMouseEnterElement);
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="hidden sm:block pointer-events-none select-none">
      {/* Primary GSAP Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#bc62b4] pointer-events-none z-[99999] shadow-[0_0_12px_#bc62b4] will-change-transform"
        aria-hidden="true"
      />

      {/* GSAP Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#bc62b4] pointer-events-none z-[99998] shadow-[0_0_20px_rgba(188,98,180,0.3)] will-change-transform"
        aria-hidden="true"
      />
    </div>
  );
}
