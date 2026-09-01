export interface WorkflowNode {
  name: string;
  type: 'trigger' | 'action' | 'ai' | 'condition' | 'database' | 'output';
  service: string;
  description: string;
}

export interface AiAgentWorkflow {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  category: 'Enterprise Sales' | 'Finance & Ops' | 'Support & CX' | 'Growth & Media' | 'Knowledge & QA';
  icon: string;
  shortTeaser: string;
  tags: string[];
  roiMetrics: {
    label: string;
    value: string;
  }[];
  architectureSummary: string;
  stack: string[];
  nodesCount: number;
  triggerType: string;
  workflowSteps: WorkflowNode[];
  color: string;
  clientImpact: string;
}

export const aiAgentWorkflows: AiAgentWorkflow[] = [
  {
    id: 'lead-qualifier',
    title: 'Omnichannel Lead Qualifier & CRM Router',
    tagline: 'Autonomous Inbound Intent Scorer & Instant CRM Enrichment',
    badge: 'n8n Core · Webhook + LLM',
    category: 'Enterprise Sales',
    icon: '⚡',
    shortTeaser:
      'Catches inbound leads from web forms, WhatsApp, and Typeform, enriches company data via Clearbit/Apollo API, scores intent with GPT-4o, and routes high-ticket accounts to HubSpot & Slack in 3 seconds.',
    tags: ['n8n', 'OpenAI GPT-4o', 'HubSpot API', 'Slack Webhooks', 'Apollo.io'],
    roiMetrics: [
      { label: 'Time to First Touch', value: '< 15 Seconds' },
      { label: 'Conversion Lift', value: '+34.8%' },
      { label: 'Hours Saved/Wk', value: '28 hrs' },
    ],
    architectureSummary:
      'Multi-protocol webhook listener parses JSON payloads, triggers parallel enrichment sub-workflows, prompts a fine-tuned GPT-4o intent evaluator, assigns weighted lead scoring, and automatically provisions CRM deals with prioritized Slack notifications.',
    stack: ['n8n Cloud', 'OpenAI function calling', 'HubSpot REST API', 'Slack BlockKit', 'Redis Deduplication'],
    nodesCount: 18,
    triggerType: 'Webhook / Typeform / WhatsApp API',
    workflowSteps: [
      { name: 'Inbound Webhook Listener', type: 'trigger', service: 'n8n HTTP', description: 'Receives and sanitizes incoming lead payload' },
      { name: 'Data Deduplication & Validation', type: 'condition', service: 'n8n Code Node', description: 'Checks Redis cache for duplicate lead submissions' },
      { name: 'Apollo Company Enrichment', type: 'action', service: 'Apollo API', description: 'Fetches revenue, employee size, and tech stack' },
      { name: 'GPT-4o Intent Evaluator', type: 'ai', service: 'OpenAI API', description: 'Analyzes user message for urgency, budget, and ICP fit' },
      { name: 'HubSpot Deal & Contact Upsert', type: 'database', service: 'HubSpot API', description: 'Creates lead record with custom AI intent tags' },
      { name: 'Executive Slack Alert', type: 'output', service: 'Slack Webhook', description: 'Sends interactive BlockKit card with 1-click claim button' },
    ],
    color: '#bc62b4',
    clientImpact: 'Eliminated manual SDR routing delay, increasing qualified meeting bookings from enterprise prospects by 35%.',
  },
  {
    id: 'invoice-auditor',
    title: 'Autonomous Invoice & Receipt Financial Auditor',
    tagline: 'Document OCR, Line-Item Reconciliation & ERP Auto-Sync',
    badge: 'Vision AI + ERP Sync',
    category: 'Finance & Ops',
    icon: '🧾',
    shortTeaser:
      'Monitors AP inboxes for PDF invoices, executes Mindee OCR + GPT-4o Vision for tabular line-item extraction, validates PO numbers against PostgreSQL, and queues verified journal entries in QuickBooks.',
    tags: ['n8n', 'Mindee OCR', 'GPT-4o Vision', 'QuickBooks Online', 'PostgreSQL'],
    roiMetrics: [
      { label: 'Extraction Accuracy', value: '99.6%' },
      { label: 'Processing Speed', value: '4.2s / Invoice' },
      { label: 'Cost Reduction', value: '82%' },
    ],
    architectureSummary:
      'IMAP/Google Workspace email daemon triggers OCR parse upon PDF attachment receipt. Extracts tax identifiers, itemized rows, and currency conversions with dual verification, matching against active purchase orders before automated ledger posting.',
    stack: ['n8n Self-Hosted', 'Mindee OCR SDK', 'OpenAI Vision API', 'QuickBooks SDK', 'PostgreSQL'],
    nodesCount: 24,
    triggerType: 'IMAP / Google Workspace Daemon',
    workflowSteps: [
      { name: 'AP Inbox Attachment Watcher', type: 'trigger', service: 'Gmail/IMAP', description: 'Extracts incoming vendor PDF attachments' },
      { name: 'Mindee Deep OCR Parsing', type: 'action', service: 'Mindee OCR', description: 'Extracts bounding boxes and raw textual tokens' },
      { name: 'GPT-4o Vision Table Parser', type: 'ai', service: 'OpenAI Vision', description: 'Normalizes line items, tax IDs, and payment terms' },
      { name: 'ERP Purchase Order Validator', type: 'database', service: 'PostgreSQL', description: 'Verifies invoice total against open PO registry' },
      { name: 'QuickBooks Bill Creator', type: 'action', service: 'QuickBooks API', description: 'Drafts reconciled expense bill ready for CFO sign-off' },
      { name: 'Discrepancy Email Alert', type: 'output', service: 'SendGrid', description: 'Flags mismatched line items back to vendor' },
    ],
    color: '#00f0ff',
    clientImpact: 'Automated 1,200+ monthly vendor receipts for an e-commerce brand, cutting manual accounting overhead by 30 hours per week.',
  },
  {
    id: 'support-triage',
    title: 'Real-Time Customer Support Triage Agent',
    tagline: 'Multi-Channel NLP Triage, Pinecone RAG & Escalation Bridge',
    badge: 'RAG Pipeline + Triage',
    category: 'Support & CX',
    icon: '🛡️',
    shortTeaser:
      'Aggregates incoming tickets across Zendesk, WhatsApp, and Intercom. Queries a Pinecone Vector Database containing company documentation to instantly resolve 68% of Tier-1 issues or seamlessly escalate.',
    tags: ['n8n', 'Pinecone Vector DB', 'Claude 3.5 Sonnet', 'Zendesk', 'WhatsApp Cloud API'],
    roiMetrics: [
      { label: 'Tier-1 Auto-Resolution', value: '68.4%' },
      { label: 'Avg Resolution Time', value: '1.2 Mins' },
      { label: 'CSAT Rating', value: '4.9 / 5.0' },
    ],
    architectureSummary:
      'Event-driven webhook receiver normalizes user message streams, runs semantic similarity search on Pinecone chunked knowledge embeddings, generates cited resolutions via Claude 3.5 Sonnet, and maintains persistent conversation state.',
    stack: ['n8n Workflow', 'Pinecone Vector Index', 'Anthropic Claude 3.5', 'WhatsApp Webhooks', 'Zendesk REST'],
    nodesCount: 21,
    triggerType: 'Zendesk / Intercom / WhatsApp Webhook',
    workflowSteps: [
      { name: 'Omnichannel Event Receiver', type: 'trigger', service: 'n8n Webhook', description: 'Captures ticket events from multiple channels' },
      { name: 'Embedding Generator', type: 'action', service: 'OpenAI text-embedding-3', description: 'Transforms customer query into 1536-dim vector' },
      { name: 'Pinecone Vector Matcher', type: 'database', service: 'Pinecone', description: 'Fetches top-k relevant knowledge base documentation' },
      { name: 'Claude 3.5 Grounded Answer', type: 'ai', service: 'Claude 3.5 Sonnet', description: 'Drafts human-like, strict grounded response' },
      { name: 'Confidence Gate Check', type: 'condition', service: 'n8n Code', description: 'Routes to human agent if confidence is below 92%' },
      { name: 'Customer Channel Dispatcher', type: 'output', service: 'WhatsApp / Zendesk', description: 'Delivers instant response and updates ticket status' },
    ],
    color: '#28ca41',
    clientImpact: 'Reduced average first response time from 42 minutes to 15 seconds while increasing customer satisfaction score to 4.9/5.',
  },
  {
    id: 'social-orchestrator',
    title: 'Autonomous Social Content Orchestrator',
    tagline: 'Trend Analysis, Multi-Channel Copywriting & Auto-Publishing',
    badge: 'LLM Orchestration',
    category: 'Growth & Media',
    icon: '🚀',
    shortTeaser:
      'Scrapes daily industry RSS feeds and GitHub trending repos, prompts Claude 3.5 Sonnet to draft platform-optimized posts (LinkedIn carousels, X threads, newsletters), generates hero visuals, and schedules via Buffer.',
    tags: ['n8n', 'Claude 3.5 Sonnet', 'DALL-E 3', 'Buffer API', 'RSS Scraper'],
    roiMetrics: [
      { label: 'Weekly Posts Produced', value: '25+ Posts' },
      { label: 'Organic Impressions', value: '+310%' },
      { label: 'Creator Time Saved', value: '18 hrs/wk' },
    ],
    architectureSummary:
      'Cron-scheduled workflow collects high-signal RSS topics, scores virality potential using LLM criteria, generates threaded post variations tailored per platform tone, prompts image generation, and syncs queue schedules.',
    stack: ['n8n Cron', 'Anthropic Claude 3.5', 'OpenAI DALL-E 3', 'Buffer REST API', 'Notion Database'],
    nodesCount: 16,
    triggerType: 'Cron Schedule (Daily 07:00 UTC)',
    workflowSteps: [
      { name: 'Trend Ingestion & RSS Scraper', type: 'trigger', service: 'n8n Schedule + HTTP', description: 'Pulls top 50 trending news items daily' },
      { name: 'Virality Scoring Filter', type: 'ai', service: 'Claude 3.5 Sonnet', description: 'Selects the top 3 highest-impact discussion topics' },
      { name: 'Multi-Format Post Synthesizer', type: 'ai', service: 'Claude 3.5 Sonnet', description: 'Generates LinkedIn long-form and Twitter thread' },
      { name: 'Automated Graphic Generator', type: 'action', service: 'DALL-E 3 API', description: 'Renders custom branded 16:9 banner visuals' },
      { name: 'Notion Review Board Sync', type: 'database', service: 'Notion API', description: 'Populates draft cards for 1-click human signoff' },
      { name: 'Buffer Social Scheduler', type: 'output', service: 'Buffer API', description: 'Schedules approved posts across social handles' },
    ],
    color: '#bc62b4',
    clientImpact: 'Boosted executive personal branding reach by 4x while completely eliminating content production bottleneck.',
  },
  {
    id: 'cold-outreach',
    title: 'Cold Outreach Hyper-Personalization Engine',
    tagline: 'Perplexity Deep Research, ICP Scoring & Dynamic Email Generation',
    badge: 'AI Research + Email Engine',
    category: 'Enterprise Sales',
    icon: '🎯',
    shortTeaser:
      'Pulls prospect leads from Apollo, queries Perplexity AI to investigate recent company press releases and 10-K filings, generates bespoke 1-to-1 icebreaker copy, and uploads directly to Smartlead campaign sequences.',
    tags: ['n8n', 'Perplexity Sonar', 'Apollo API', 'Smartlead.ai', 'Claude 3.5'],
    roiMetrics: [
      { label: 'Email Open Rate', value: '78.2%' },
      { label: 'Positive Reply Rate', value: '14.6%' },
      { label: 'Weekly Leads Processed', value: '2,500' },
    ],
    architectureSummary:
      'Orchestrates API calls across lead databases and real-time search models. Extracts proprietary prospect hooks, checks spam compliance filters, and automates multi-stage follow-up personalization.',
    stack: ['n8n Engine', 'Perplexity Online API', 'Apollo REST', 'Smartlead API', 'ZeroBounce Validator'],
    nodesCount: 22,
    triggerType: 'Batch Apollo Webhook / CSV Trigger',
    workflowSteps: [
      { name: 'Prospect List Ingestion', type: 'trigger', service: 'n8n CSV / Webhook', description: 'Ingests targeted B2B prospect profiles' },
      { name: 'ZeroBounce Deliverability Check', type: 'condition', service: 'ZeroBounce API', description: 'Guarantees 99%+ deliverability rate' },
      { name: 'Perplexity Deep Company Search', type: 'ai', service: 'Perplexity Sonar', description: 'Finds recent funding, hiring surges, and initiatives' },
      { name: 'Personalized Hook Generator', type: 'ai', service: 'Claude 3.5 Sonnet', description: 'Writes context-rich, non-generic intro sentences' },
      { name: 'Smartlead Sequence Injector', type: 'action', service: 'Smartlead.ai API', description: 'Enrolls contact into warmed-up sending mailboxes' },
      { name: 'CRM Pipeline Attribution', type: 'output', service: 'HubSpot', description: 'Tracks outbound attribution across the funnel' },
    ],
    color: '#00f0ff',
    clientImpact: 'Increased sales qualified outbound meetings from 4/mo to 22/mo for a B2B SaaS enterprise.',
  },
  {
    id: 'knowledge-qa',
    title: 'Enterprise Knowledge Base QA Agent',
    tagline: 'Notion/Confluence Sync, Hybrid Chunking & RAG Assistant',
    badge: 'RAG Pipeline + Enterprise Sync',
    category: 'Knowledge & QA',
    icon: '🧠',
    shortTeaser:
      'Continuously synchronizes internal Notion workspaces, Google Docs, and Confluence wikis into an updated hybrid vector store, providing engineering and sales teams with accurate, hallucination-free internal search.',
    tags: ['n8n', 'LangChain', 'OpenAI Embeddings', 'Qdrant / Pinecone', 'Notion API'],
    roiMetrics: [
      { label: 'Internal Search Time', value: 'Down 85%' },
      { label: 'Knowledge Freshness', value: '< 5 Mins Sync' },
      { label: 'Team Adoption', value: '98%' },
    ],
    architectureSummary:
      'Continuous change-data-capture webhook triggers on doc updates, re-indexes markdown token trees with recursive chunking, pushes dense vectors to Qdrant, and powers an internal Slack bot assistant with source citation.',
    stack: ['n8n Self-Hosted', 'Notion Webhooks', 'Qdrant Vector DB', 'GPT-4o', 'Slack Bolt API'],
    nodesCount: 20,
    triggerType: 'Notion / Confluence CDC Webhook',
    workflowSteps: [
      { name: 'Notion Change Detector', type: 'trigger', service: 'Notion Webhook', description: 'Listens for published and edited internal documents' },
      { name: 'Markdown Tree Tokenizer', type: 'action', service: 'n8n Code Node', description: 'Extracts headings, code blocks, and metadata tags' },
      { name: 'Recursive Text Chunking', type: 'action', service: 'LangChain Chunker', description: 'Splits text into 500-token semantic chunks with overlap' },
      { name: 'Vector Index Upsert', type: 'database', service: 'Qdrant DB', description: 'Updates vector embeddings with document IDs' },
      { name: 'Slack Bot Query Handler', type: 'ai', service: 'GPT-4o + Vector Search', description: 'Answers staff questions with direct deep links' },
      { name: 'Audit Log & Analytics Sync', type: 'output', service: 'Datadog / BigQuery', description: 'Logs unanswered queries to identify knowledge gaps' },
    ],
    color: '#c445f5',
    clientImpact: 'Saved engineering teams an average of 4.5 hours per week previously lost searching through fragmented documentation.',
  },
];
