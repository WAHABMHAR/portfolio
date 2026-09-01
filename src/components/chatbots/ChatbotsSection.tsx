'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { InteractiveBotCard } from '@/components/chatbots/InteractiveBotCard';
import { chatbots } from '@/data/chatbots';

export function ChatbotsSection() {
  return (
    <section id="chatbots" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        <SectionHeading
          number="04"
          badge="Live Conversational AI"
          title="AI Assistants & Chatbot Deployments"
          subtitle="Interactive LLM agents engineered across Voiceflow, Botpress, n8n Chat, and custom Next.js edge runtimes. Tested with live interactive streaming."
        />

        {/* 3-Column Bot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {chatbots.map((bot, idx) => (
            <InteractiveBotCard key={bot.id} bot={bot} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
