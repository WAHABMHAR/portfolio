export interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  timestamp?: string;
}

export interface ChatbotItem {
  id: string;
  name: string;
  platform: 'n8n Chat' | 'Custom Next.js' | 'Voiceflow' | 'Botpress';
  avatarEmoji: string;
  tagline: string;
  description: string;
  simulatedDialogue: ChatMessage[];
  features: string[];
  metrics: string;
  liveDemoEndpoint?: string;
  color: string;
}

export const chatbots: ChatbotItem[] = [
  {
    id: 'enterprise-concierge',
    name: 'Wahab AI Concierge',
    platform: 'Custom Next.js',
    avatarEmoji: '⚡',
    tagline: 'Interactive Knowledge Assistant for Clients & Recruiters',
    description:
      'Grounded portfolio conversational agent built with Next.js edge runtime, vector search over project documentation, and live booking tool-calling.',
    simulatedDialogue: [
      { sender: 'user', text: 'Can Wahab build custom n8n workflows for our HubSpot CRM and Slack?' },
      { sender: 'bot', text: 'Yes! Wahab specializes in enterprise n8n workflows with webhook ingestion, GPT-4o intent scoring, and bi-directional HubSpot syncing with sub-second response times.' },
      { sender: 'user', text: 'What is his current availability for enterprise contracts?' },
      { sender: 'bot', text: 'Wahab is currently open for enterprise AI deployments and high-ticket freelance projects. Would you like to schedule a 15-min discovery call or submit a project scope below?' },
    ],
    features: ['Streaming response tokens', 'Tool-calling for calendar scheduling', '100% Grounded QA context', 'Edge runtime latency < 200ms'],
    metrics: '99.8% Accuracy · Instant Stream',
    color: '#bc62b4',
  },
  {
    id: 'voiceflow-support-bot',
    name: 'SaaS Tier-1 Support Specialist',
    platform: 'Voiceflow',
    avatarEmoji: '🛡️',
    tagline: 'Multi-Turn Customer Resolution & Escalation Flow',
    description:
      'Visual flow-engineered conversational bot resolving 65%+ of customer billing inquiries, password resets, and feature onboarding requests with human handoff fallback.',
    simulatedDialogue: [
      { sender: 'user', text: 'How do I upgrade our workspace to the Enterprise Tier?' },
      { sender: 'bot', text: 'I can upgrade your account right now! I will provision dedicated SSO and custom webhook limits. Would you like me to send the invoice to billing@yourcompany.com?' },
      { sender: 'user', text: 'Yes please, and notify our team Slack channel.' },
      { sender: 'bot', text: 'Done! Invoice dispatched and your #finance-notifications Slack channel has been pinged.' },
    ],
    features: ['Visual state machine transitions', 'Zendesk & Slack escalation triggers', 'Multi-turn memory state', 'Sentiment-based human routing'],
    metrics: '68% Automated Resolution',
    color: '#00f0ff',
  },
  {
    id: 'n8n-rag-analyst',
    name: 'Internal Financial & Ops Analyst Bot',
    platform: 'n8n Chat',
    avatarEmoji: '📊',
    tagline: 'Autonomous Database Query & Report Synthesizer',
    description:
      'Direct-chat interface connected to Postgres read replicas and n8n webhook nodes. Translates natural language questions into safe SQL queries and outputs visualized summaries.',
    simulatedDialogue: [
      { sender: 'user', text: 'Show me total MRR growth across Q3 and flag high-churn cohorts.' },
      { sender: 'bot', text: 'Analyzing database... Q3 MRR reached $142,500 (+18.4% MoM). Churn was isolated to the Starter plan tier (3.2%). Pro and Enterprise tiers maintained 99.1% retention.' },
      { sender: 'user', text: 'Export this summary into our Notion Executive dashboard.' },
      { sender: 'bot', text: 'Sync complete! A new report card has been created in Notion under "Q3 Revenue Performance".' },
    ],
    features: ['Text-to-SQL parameterized execution', 'Automated Notion card creation', 'Pinecone document citations', 'Role-based access permissions'],
    metrics: 'Instant SQL Querying · Zero Hallucination',
    color: '#28ca41',
  },
];
