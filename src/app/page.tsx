import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Hero } from '@/components/hero/Hero';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { AiAgentsSection } from '@/components/ai-agents/AiAgentsSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ChatbotsSection } from '@/components/chatbots/ChatbotsSection';
import { JarvisVoiceSection } from '@/components/sections/JarvisVoiceSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-[#f0f0f5] selection:bg-[#bc62b4]/30 selection:text-white">
      {/* Dynamic Transparent Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Web Projects Bento Grid */}
      <ProjectsSection />

      {/* Enterprise AI Agents & n8n Workflows */}
      <AiAgentsSection />

      {/* Skills & Tech Arsenal */}
      <SkillsSection />

      {/* AI Assistant Chatbots */}
      <ChatbotsSection />

      {/* JARVIS AI Voice Assistant Section */}
      <JarvisVoiceSection />

      {/* Conversion-Focused Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
