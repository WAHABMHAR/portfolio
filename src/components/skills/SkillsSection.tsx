'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DomainProgressIndicators } from '@/components/skills/DomainProgressIndicators';
import { TactileTechTablet } from '@/components/skills/TactileTechTablet';

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        <SectionHeading
          number="03"
          badge="Technical Stack & Mastery"
          title="Skills & Engineering Arsenal"
          subtitle="Battle-tested toolchains, frameworks, and AI systems built for extreme speed, strict type safety, and enterprise reliability."
        />

        {/* 2-Column Layout: Left Progress Indicators, Right Tactile Tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <DomainProgressIndicators />
          </div>

          <div className="lg:col-span-7">
            <TactileTechTablet />
          </div>
        </div>
      </Container>
    </section>
  );
}
