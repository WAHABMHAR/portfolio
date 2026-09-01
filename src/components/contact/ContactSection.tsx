'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactStateMachine } from '@/components/contact/ContactStateMachine';
import { personalInfo } from '@/data/personal';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        <SectionHeading
          number="05"
          badge="Start a Project"
          title="Let's Build Something High-Impact"
          subtitle="Looking to deploy enterprise n8n workflows, automate multi-channel pipelines, or construct a next-gen web product? Let's discuss your timeline & architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column (5 cols): Direct Info & Value Propositions */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0b14]/90 border border-white/10 backdrop-blur-2xl shadow-xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
                  Direct Communication Channels
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Available for contracts, full-time remote opportunities, and advisory roles for AI workflows & frontend architecture.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="flex flex-col gap-3.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#bc62b4] hover:bg-white/[0.06] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-accent-primary group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-text-muted">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate max-w-[220px]">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#28ca41] hover:bg-white/[0.06] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-accent-emerald group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-text-muted">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-accent-secondary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-text-muted">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location} (PKT / UTC+5)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.08]">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#bc62b4] text-xs font-mono font-medium text-center text-text-secondary hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00f0ff] text-xs font-mono font-medium text-center text-text-secondary hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Response SLA Guarantees */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-primary shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">&lt; 24h SLA</span>
                  <span className="text-[10px] text-text-muted">Guaranteed reply</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-accent-emerald shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">NDA Ready</span>
                  <span className="text-[10px] text-text-muted">Enterprise safe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): State Machine Form */}
          <div className="lg:col-span-7">
            <ContactStateMachine />
          </div>
        </div>
      </Container>
    </section>
  );
}
