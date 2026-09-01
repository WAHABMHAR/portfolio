'use client';

import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  baseRadius: number;
  currentRadius: number;
  currentAlpha: number;
  targetAlpha: number;
  colorRgb: [number, number, number];
}

export default function DotMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameId = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; moved: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
    moved: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const SPACING = 38; // Clean, high-performance dot grid
    const PROXIMITY = 150;
    const PROXIMITY_SQ = PROXIMITY * PROXIMITY;

    const themeRgbs: [number, number, number][] = [
      [188, 98, 180], // #bc62b4
      [0, 240, 255],  // #00f0ff
      [196, 69, 245], // #c445f5
      [142, 63, 136], // #8e3f88
    ];

    let dots: Dot[] = [];

    function initDots() {
      dots = [];
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const colorRgb = themeRgbs[(r + c) % themeRgbs.length];
          dots.push({
            x: c * SPACING,
            y: r * SPACING,
            baseRadius: 1.4,
            currentRadius: 1.4,
            currentAlpha: 0.25,
            targetAlpha: 0.25,
            colorRgb,
          });
        }
      }
    }

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDots();
    }

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
      mouseRef.current.moved = true;
    }

    function handleMouseLeave() {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    }

    initDots();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // High performance render loop: NO expensive shadowBlur, fast squared distance checks
    function render() {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        const mouse = mouseRef.current;
        const mx = mouse.x;
        const my = mouse.y;
        const isActive = mouse.active;

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];
          const dx = dot.x - mx;
          const dy = dot.y - my;

          // Fast bounding box rejection before squaring
          if (isActive && Math.abs(dx) < PROXIMITY && Math.abs(dy) < PROXIMITY) {
            const distSq = dx * dx + dy * dy;
            if (distSq < PROXIMITY_SQ) {
              const dist = Math.sqrt(distSq);
              const factor = 1 - dist / PROXIMITY;
              dot.targetAlpha = 0.28 + factor * 0.72; // Brightens up to 1.0
              dot.currentRadius = dot.baseRadius + factor * 2.2;
            } else {
              dot.targetAlpha = 0.25;
              dot.currentRadius = dot.baseRadius;
            }
          } else {
            dot.targetAlpha = 0.25;
            dot.currentRadius = dot.baseRadius;
          }

          // Smooth interpolation
          dot.currentAlpha += (dot.targetAlpha - dot.currentAlpha) * 0.2;
          dot.currentRadius += (dot.baseRadius - dot.currentRadius) * 0.2;

          const [r, g, b] = dot.colorRgb;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${dot.currentAlpha})`;
          ctx.fill();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    }

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full will-change-transform"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
