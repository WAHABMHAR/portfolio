'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

export type JarvisState = 'idle' | 'listening' | 'thinking' | 'speaking';

interface JarvisFaceProps {
  state: JarvisState;
  audioFrequency?: number; // 0 to 1
  volume?: number; // 0 to 100
}

/**
 * High-Performance Hardware-Accelerated 60 FPS Sci-Fi AI Robotic Face (State Machine Canvas)
 * Uses direct GPU composited layers and 2D hardware acceleration for locked 60 FPS performance
 * with zero main-thread CPU vertex bottlenecks.
 */
export default function JarvisOrbCanvas({
  state,
  audioFrequency = 0,
  volume = 0,
}: JarvisFaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  const isListening = state === 'listening';
  const isThinking = state === 'thinking';
  const isSpeaking = state === 'speaking';
  const effectiveVolume = volume > 0 ? volume : Math.round(audioFrequency * 100);

  // State Machine parameters
  const stateValues = useMemo(() => {
    return {
      isListening,
      isThinking,
      isSpeaking,
      volume: effectiveVolume,
    };
  }, [isListening, isThinking, isSpeaking, effectiveVolume]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Retina display resolution scale
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = 360;
    const height = 340;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let startTime = performance.now();

    function drawSciFiRobotFace(time: number) {
      if (!ctx) return;

      const elapsed = (time - startTime) * 0.001;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // --- 1. Outer Gyro Energy Rings (Accelerates when thinking) ---
      const ringSpeed = stateValues.isThinking ? 4.5 : 0.8;
      const ring1Angle = elapsed * ringSpeed;
      const ring2Angle = -elapsed * (ringSpeed * 0.8);

      // Ring 1 (Magenta-Violet dashed arc)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(ring1Angle);
      ctx.beginPath();
      ctx.arc(0, 0, 132, 0, Math.PI * 1.4);
      ctx.strokeStyle = stateValues.isListening ? 'rgba(0, 240, 255, 0.7)' : 'rgba(188, 98, 180, 0.65)';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([12, 8]);
      ctx.stroke();
      ctx.restore();

      // Ring 2 (Cyan dashed counter-arc)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(ring2Angle);
      ctx.beginPath();
      ctx.arc(0, 0, 144, 0, Math.PI * 1.2);
      ctx.strokeStyle = stateValues.isThinking ? 'rgba(196, 69, 245, 0.8)' : 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.restore();

      // --- 2. Dark Obsidian Cyber Helmet Chassis ---
      const floatY = Math.sin(elapsed * 2) * (stateValues.isThinking ? 2 : 5);
      const headCenterY = centerY + floatY;

      // Outer Chassis Glow
      const chassisGrad = ctx.createRadialGradient(
        centerX,
        headCenterY,
        40,
        centerX,
        headCenterY,
        115
      );
      chassisGrad.addColorStop(0, '#161224');
      chassisGrad.addColorStop(0.7, '#0d0b14');
      chassisGrad.addColorStop(1, '#07070b');

      ctx.beginPath();
      ctx.arc(centerX, headCenterY, 105, 0, Math.PI * 2);
      ctx.fillStyle = chassisGrad;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = stateValues.isListening
        ? 'rgba(0, 240, 255, 0.6)'
        : stateValues.isSpeaking
        ? 'rgba(188, 98, 180, 0.7)'
        : 'rgba(255, 255, 255, 0.12)';
      ctx.stroke();

      // --- 3. Glossy Cyber Visor Screen ---
      const visorGrad = ctx.createLinearGradient(
        centerX - 85,
        headCenterY - 45,
        centerX + 85,
        headCenterY + 45
      );
      visorGrad.addColorStop(0, 'rgba(12, 10, 20, 0.95)');
      visorGrad.addColorStop(0.5, 'rgba(6, 5, 11, 0.98)');
      visorGrad.addColorStop(1, 'rgba(15, 12, 26, 0.95)');

      ctx.beginPath();
      ctx.roundRect(centerX - 82, headCenterY - 54, 164, 108, 48);
      ctx.fillStyle = visorGrad;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.stroke();

      // --- 4. Expressive Cybernetic Neon Eyes ---
      const eyeColor = stateValues.isListening
        ? '#00f0ff'
        : stateValues.isSpeaking
        ? '#bc62b4'
        : stateValues.isThinking
        ? '#c445f5'
        : '#00f0ff';

      const blink = Math.sin(elapsed * 2.8) > 0.96 ? 0.15 : 1;
      const leftEyeX = centerX - 36;
      const rightEyeX = centerX + 36;
      const eyeY = headCenterY - 12;

      // Draw Left Eye (Crescent Smiling Arc)
      ctx.save();
      ctx.translate(leftEyeX, eyeY);
      ctx.scale(1, blink);
      ctx.beginPath();
      if (stateValues.isThinking) {
        // Rotating scanning eye
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.strokeStyle = eyeColor;
        ctx.lineWidth = 3;
        ctx.stroke();
      } else {
        // Expressive smiling curved eye
        ctx.arc(0, 0, 14, Math.PI * 0.15, Math.PI * 0.85);
        ctx.strokeStyle = eyeColor;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      ctx.restore();

      // Draw Right Eye (Crescent Smiling Arc)
      ctx.save();
      ctx.translate(rightEyeX, eyeY);
      ctx.scale(1, blink);
      ctx.beginPath();
      if (stateValues.isThinking) {
        ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.strokeStyle = eyeColor;
        ctx.lineWidth = 3;
        ctx.stroke();
      } else {
        ctx.arc(0, 0, 14, Math.PI * 0.15, Math.PI * 0.85);
        ctx.strokeStyle = eyeColor;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      ctx.restore();

      // --- 5. Dynamic Robotic Smiling Mouth / Waveform ---
      const mouthY = headCenterY + 26;
      const mouthColor = stateValues.isSpeaking ? '#00f0ff' : '#bc62b4';

      ctx.save();
      ctx.translate(centerX, mouthY);

      if (stateValues.isSpeaking) {
        // Live speech waveform morphing with volume amplitude
        const volFactor = Math.max(0.2, stateValues.volume / 100);
        const waveCount = 5;
        const waveWidth = 48;
        const step = waveWidth / waveCount;

        ctx.beginPath();
        for (let i = -2; i <= 2; i++) {
          const x = i * step;
          const barHeight = (Math.sin(elapsed * 18 + i) * 12 + 8) * volFactor;
          ctx.moveTo(x, -barHeight / 2);
          ctx.lineTo(x, barHeight / 2);
        }
        ctx.strokeStyle = mouthColor;
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      } else if (stateValues.isListening) {
        // Attentive wide smiling crescent
        ctx.beginPath();
        ctx.arc(0, -6, 22, Math.PI * 0.2, Math.PI * 0.8);
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      } else if (stateValues.isThinking) {
        // High-tech processing matrix dot line
        ctx.beginPath();
        ctx.moveTo(-16, 0);
        ctx.lineTo(16, 0);
        ctx.strokeStyle = '#c445f5';
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
      } else {
        // Friendly resting sci-fi smile arc
        ctx.beginPath();
        ctx.arc(0, -8, 20, Math.PI * 0.22, Math.PI * 0.78);
        ctx.strokeStyle = '#bc62b4';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      ctx.restore();

      // --- 6. Antenna Beacon & Ear Nodes ---
      const beaconColor = stateValues.isListening ? '#00f0ff' : '#bc62b4';
      ctx.beginPath();
      ctx.arc(centerX, headCenterY - 110, 5, 0, Math.PI * 2);
      ctx.fillStyle = beaconColor;
      ctx.fill();

      // Left Ear
      ctx.beginPath();
      ctx.roundRect(centerX - 114, headCenterY - 14, 10, 28, 4);
      ctx.fillStyle = '#1f1a30';
      ctx.fill();
      ctx.strokeStyle = beaconColor;
      ctx.stroke();

      // Right Ear
      ctx.beginPath();
      ctx.roundRect(centerX + 104, headCenterY - 14, 10, 28, 4);
      ctx.fillStyle = '#1f1a30';
      ctx.fill();
      ctx.strokeStyle = beaconColor;
      ctx.stroke();

      animFrameRef.current = requestAnimationFrame(drawSciFiRobotFace);
    }

    animFrameRef.current = requestAnimationFrame(drawSciFiRobotFace);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [stateValues]);

  return (
    <div className="relative w-full h-[260px] sm:h-[320px] md:h-[340px] flex items-center justify-center select-none pointer-events-none">
      {/* Background Soft Aura */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: isListening
            ? 'radial-gradient(circle, #00f0ff 0%, transparent 70%)'
            : isSpeaking
            ? 'radial-gradient(circle, #bc62b4 0%, transparent 70%)'
            : 'radial-gradient(circle, #8e3f88 0%, transparent 70%)',
        }}
      />

      {/* Hardware-Accelerated 60 FPS Canvas */}
      <canvas
        ref={canvasRef}
        style={{ width: '360px', height: '340px' }}
        className="max-w-full h-auto drop-shadow-[0_0_25px_rgba(188,98,180,0.35)]"
      />
    </div>
  );
}
