'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        <SectionHeading
          number="01"
          badge="Production Case Studies"
          title="Featured Web & Cloud Systems"
          subtitle="A selection of high-throughput web applications and full-stack software architectures built with Next.js, Node.js, and Python."
        />

        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Responsive Bento Grid (3-column on desktop, 1-2 on mobile/tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Container>
    </section>
  );
}
