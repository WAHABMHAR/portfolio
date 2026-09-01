'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AudioVisualizerBars } from '@/components/jarvis/AudioVisualizerBars';
import { useJarvisVoice, JarvisVoiceStatus } from '@/hooks/useJarvisVoice';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Send,
  Calendar,
  DollarSign,
  Mail,
  Search,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Zap,
} from 'lucide-react';

const DynamicJarvisOrb = dynamic(
  () => import('@/components/jarvis/JarvisOrbCanvas'),
  { ssr: false }
);

const samplePrompts = [
  { text: 'Schedule a 15-min call with Wahab', icon: Calendar, color: '#bc62b4' },
  { text: 'I have a project with $5k budget', icon: DollarSign, color: '#00f0ff' },
  { text: 'Send a direct priority message', icon: Mail, color: '#28ca41' },
  { text: 'What are his latest n8n automation projects?', icon: Search, color: '#c445f5' },
];

export function JarvisVoiceSection() {
  const {
    status,
    isListening,
    isProcessing,
    isSpeaking,
    transcript,
    jarvisResponse,
    audioVolume,
    toolExecuted,
    isMuted,
    errorMessage,
    startListening,
    stopListening,
    toggleMute,
    sendTextMessage,
  } = useJarvisVoice();

  const [manualInput, setManualInput] = useState('');

  // Map hook status to 3D Canvas JarvisState
  const canvasState =
    status === 'listening'
      ? 'listening'
      : status === 'processing'
      ? 'thinking'
      : status === 'speaking'
      ? 'speaking'
      : 'idle';

  function handleMicToggle() {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }

  function handleManualSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!manualInput.trim()) return;
    const q = manualInput;
    setManualInput('');
    sendTextMessage(q);
  }

  return (
    <section id="jarvis" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        {/* Outer Dark Obsidian Glass Card with Animated Glowing Border */}
        <div
          className="relative rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden border backdrop-blur-2xl shadow-2xl transition-all duration-300 animate-border-glow"
          style={{
            background: 'rgba(15, 15, 23, 0.75)',
            boxShadow: '0 0 45px rgba(188, 98, 180, 0.18)',
          }}
        >
          {/* Ambient Radial Background Glows */}
          <div
            className="absolute -top-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none -z-10"
            style={{ background: 'radial-gradient(circle, #bc62b4 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none -z-10"
            style={{ background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)' }}
          />

          {/* Section Header (Centered) */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#bc62b4]/15 text-[#f5b8f0] border border-[#bc62b4]/40 shadow-[0_0_15px_rgba(188,98,180,0.25)] mb-4 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#bc62b4] animate-pulse" />
              <span>✦ JARVIS VOICE INTERFACE</span>
            </motion.div>

            {/* H2 Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15]"
            >
              Talk with My <span className="text-gradient-purple-cyan">AI Co-Pilot</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-text-secondary leading-relaxed mt-4"
            >
              Experience real-time voice intelligence. Ask about my experience, book a meeting, or get an instant project estimate.
            </motion.p>
          </div>

          {/* 3D Hardware-Accelerated Sci-Fi AI Face Canvas */}
          <div className="relative flex flex-col items-center justify-center my-2">
            <DynamicJarvisOrb
              state={canvasState}
              audioFrequency={audioVolume / 100}
              volume={audioVolume}
            />

            {/* Dynamic Status Text */}
            <div className="flex items-center gap-2 mt-3 font-mono text-xs sm:text-sm font-semibold tracking-wide">
              {status === 'idle' && (
                <span className="text-text-muted flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-text-muted" />
                  Jarvis is ready...
                </span>
              )}
              {status === 'listening' && (
                <span className="text-accent-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-secondary animate-ping" />
                  Listening to you...
                </span>
              )}
              {status === 'processing' && (
                <span className="text-accent-primary flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-accent-primary" />
                  Processing request with n8n workflow engine...
                </span>
              )}
              {status === 'speaking' && (
                <span className="text-accent-emerald flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  Jarvis is speaking... ({audioVolume}%)
                </span>
              )}
            </div>

            {/* Live Audio Wave Visualizer Bars */}
            <div className="mt-4">
              <AudioVisualizerBars
                active={isSpeaking || isListening}
                frequencyData={[
                  audioVolume * 0.01,
                  audioVolume * 0.012,
                  audioVolume * 0.009,
                  audioVolume * 0.015,
                  audioVolume * 0.008,
                ]}
              />
            </div>
          </div>

          {/* Action Tool Execution Confirmation Badge */}
          <AnimatePresence>
            {toolExecuted && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-md mx-auto my-4 p-3 rounded-xl bg-[#28ca41]/10 border border-[#28ca41]/40 text-[#28ca41] text-xs font-mono font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(40,202,65,0.2)]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#28ca41]" />
                {toolExecuted === 'email_sent' && (
                  <span>✓ Priority Email Dispatched to Developer</span>
                )}
                {toolExecuted === 'calendar_booked' && (
                  <span>✓ 15-Min Discovery Session Booked on Calendar</span>
                )}
                {toolExecuted === 'search_completed' && (
                  <span>✓ Live Knowledge Base Query Completed</span>
                )}
                {!['email_sent', 'calendar_booked', 'search_completed'].includes(toolExecuted) && (
                  <span>✓ Autonomous Action Executed: {toolExecuted}</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Central Interactive Voice Controls & Live Transcripts */}
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 mt-6">
            {/* Primary Glowing Mic Button + Mute Switch */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleMicToggle}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className={`relative p-5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  isListening
                    ? 'bg-[#00f0ff] text-black shadow-[0_0_35px_#00f0ff]'
                    : 'bg-gradient-to-r from-[#bc62b4] via-[#a84aa0] to-[#8e3f88] text-white shadow-[0_0_30px_rgba(188,98,180,0.5)]'
                }`}
                aria-label="Toggle voice input"
              >
                {isListening ? (
                  <MicOff className="w-6 h-6 animate-pulse" />
                ) : (
                  <Mic className="w-6 h-6" />
                )}
              </motion.button>

              {/* Mute/Unmute Audio Output Toggle */}
              <button
                onClick={toggleMute}
                className={`p-3 rounded-full border transition-colors cursor-pointer ${
                  isMuted
                    ? 'bg-red-500/10 border-red-500/30 text-red-400'
                    : 'bg-white/[0.04] border-white/10 text-text-secondary hover:text-white hover:border-[#bc62b4]'
                }`}
                aria-label={isMuted ? 'Unmute voice' : 'Mute voice'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Error banner if any */}
            {errorMessage && (
              <p className="text-xs font-mono text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1.5 rounded-lg">
                {errorMessage}
              </p>
            )}

            {/* Live Transcript Stream Box */}
            <div className="w-full rounded-2xl bg-black/60 border border-white/[0.08] p-5 flex flex-col gap-3 shadow-inner">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-text-muted shrink-0 mt-0.5">
                  YOU
                </span>
                <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                  &ldquo;{transcript}&rdquo;
                </p>
              </div>

              <div className="h-px bg-white/[0.05]" />

              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-primary/20 text-accent-primary font-bold shrink-0 mt-0.5">
                  JARVIS
                </span>
                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                  {jarvisResponse}
                </p>
              </div>
            </div>

            {/* Optional Manual Text Submission Input */}
            <form onSubmit={handleManualSubmit} className="w-full flex items-center gap-2">
              <input
                type="text"
                placeholder="Or type a question for Jarvis..."
                value={manualInput}
                onChange={(e) => setManualInput(e.target.value)}
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-[#bc62b4] transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#bc62b4] text-white hover:bg-[#a84aa0] shadow-md shadow-[#bc62b4]/30 transition-all cursor-pointer"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* 4 Quick Action Prompt Badges */}
            <div className="w-full flex flex-col gap-2.5 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted text-center flex items-center justify-center gap-1.5">
                <Zap className="w-3 h-3 text-[#bc62b4]" /> Suggested Voice & Click Prompts:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {samplePrompts.map((prompt) => {
                  const Icon = prompt.icon;
                  return (
                    <button
                      key={prompt.text}
                      onClick={() => sendTextMessage(prompt.text)}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#bc62b4]/50 hover:bg-white/[0.06] text-left text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2.5 transition-all duration-200 cursor-pointer group"
                    >
                      <div
                        className="p-1.5 rounded-lg shrink-0"
                        style={{ backgroundColor: `${prompt.color}20`, color: prompt.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{prompt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
