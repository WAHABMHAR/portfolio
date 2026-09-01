'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AgentFlipCard } from '@/components/ai-agents/AgentFlipCard';
import { WorkflowDetailModal } from '@/components/ai-agents/WorkflowDetailModal';
import { aiAgentWorkflows, AiAgentWorkflow } from '@/data/ai-agents';

export function AiAgentsSection() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<AiAgentWorkflow | null>(null);

  return (
    <section id="ai-agents" className="py-24 md:py-32 lg:py-40 relative">
      <Container>
        <SectionHeading
          number="02"
          badge="Enterprise Automation Suite"
          title="Autonomous AI Agents & n8n Workflows"
          subtitle="Production-grade automation architectures designed for high-ticket clients. Integrating OpenAI GPT-4o, Claude 3.5 Sonnet, Vector RAG pipelines, and ERP systems with zero-downtime execution."
        />

        {/* 3D Flip Card Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aiAgentWorkflows.map((workflow, idx) => (
            <AgentFlipCard
              key={workflow.id}
              workflow={workflow}
              index={idx}
              onOpenModal={setSelectedWorkflow}
            />
          ))}
        </div>

        {/* Interactive Pipeline Modal */}
        <WorkflowDetailModal
          workflow={selectedWorkflow}
          onClose={() => setSelectedWorkflow(null)}
        />
      </Container>
    </section>
  );
}
