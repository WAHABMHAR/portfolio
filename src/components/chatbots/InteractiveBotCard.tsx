'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChatbotItem } from '@/data/chatbots';
import { Badge } from '@/components/ui/Badge';
import { Bot, Send, Sparkles, MessageSquare, Play, CheckCircle2 } from 'lucide-react';

interface InteractiveBotCardProps {
  bot: ChatbotItem;
  index: number;
}

export function InteractiveBotCard({ bot, index }: InteractiveBotCardProps) {
  const [messages, setMessages] = useState<typeof bot.simulatedDialogue>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputTest, setInputTest] = useState('');
  const [customReplies, setCustomReplies] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);

  // Simulate auto-streaming messages into the card preview
  useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];

    // Reset messages
    setMessages([]);
    setIsTyping(true);

    bot.simulatedDialogue.forEach((msg, i) => {
      const delay = (i + 1) * 1600;
      const t = setTimeout(() => {
        setIsTyping(i % 2 === 0);
        setMessages((prev) => [...prev, msg]);
        if (i === bot.simulatedDialogue.length - 1) {
          setIsTyping(false);
        }
      }, delay);
      timeoutIds.push(t);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [bot]);

  function handleSendCustom(e: React.FormEvent) {
    e.preventDefault();
    if (!inputTest.trim()) return;

    const userMsg = inputTest.trim();
    setInputTest('');
    setCustomReplies((prev) => [...prev, { sender: 'user', text: userMsg }]);

    setTimeout(() => {
      setCustomReplies((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `[${bot.name}] Received: "${userMsg}". Querying RAG index & executing n8n tool pipeline... Result generated in 180ms!`,
        },
      ]);
    }, 700);
  }

  const allDisplayMessages = [...messages, ...customReplies];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl bg-[#0d0b14]/90 border border-white/[0.08] hover:border-[#00f0ff]/40 shadow-xl backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 group"
    >
      {/* Bot Card Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Badge
            variant={
              bot.platform === 'Custom Next.js'
                ? 'purple'
                : bot.platform === 'n8n Chat'
                ? 'emerald'
                : 'cyan'
            }
            dot
          >
            {bot.platform}
          </Badge>
          <span className="text-xs font-mono text-text-muted">{bot.metrics}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl shadow-md">
            {bot.avatarEmoji}
          </div>
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent-secondary transition-colors">
              {bot.name}
            </h3>
            <span className="text-xs text-text-muted">{bot.tagline}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-1">
          {bot.description}
        </p>
      </div>

      {/* Simulated Live-Chat Terminal Screen */}
      <div className="my-5 rounded-xl bg-black/50 border border-white/[0.06] p-3.5 flex flex-col justify-between h-[230px] overflow-hidden">
        {/* Chat Header Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.04] font-mono text-[10px] text-text-muted">
          <span className="flex items-center gap-1.5 text-accent-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
            Live Session Active
          </span>
          <span>Edge RAG</span>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto py-2.5 flex flex-col gap-2.5 pr-1">
          {allDisplayMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-xl px-3 py-1.5 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#bc62b4] text-white font-medium rounded-tr-none'
                    : 'bg-white/[0.06] border border-white/10 text-text-primary rounded-tl-none font-mono text-[11px]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Interactive Custom Test Input Line */}
        <form onSubmit={handleSendCustom} className="pt-2 border-t border-white/[0.04] flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a test query..."
            value={inputTest}
            onChange={(e) => setInputTest(e.target.value)}
            className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white placeholder:text-text-muted focus:outline-none focus:border-accent-secondary"
          />
          <button
            type="submit"
            aria-label="Send test query"
            className="p-1.5 rounded-lg bg-accent-secondary/20 border border-accent-secondary/40 text-accent-secondary hover:bg-accent-secondary hover:text-black transition-colors cursor-pointer"
          >
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>

      {/* Feature Bullet Strip */}
      <div className="flex flex-col gap-1.5 pt-2 border-t border-white/[0.04]">
        {bot.features.slice(0, 2).map((feat) => (
          <div key={feat} className="flex items-center gap-1.5 text-[11px] text-text-secondary">
            <CheckCircle2 className="w-3 h-3 text-accent-primary shrink-0" />
            <span className="truncate">{feat}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
