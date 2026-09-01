export interface Project {
  id: string;
  title: string;
  badge: 'Live' | 'Enterprise' | 'AI/ML' | 'Architecture' | 'Web3';
  subtitle: string;
  description: string;
  longDescription?: string;
  metrics?: string;
  tags: string[];
  category: 'All' | 'Web Apps' | 'AI & Automation' | 'Full-Stack';
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
  featured?: boolean;
  bentoSpan?: string; // Tailwind grid span
}

export const projectCategories = ['All', 'Web Apps', 'AI & Automation', 'Full-Stack'] as const;

export const projects: Project[] = [
  {
    id: 'driver-book',
    title: 'Driver Book',
    badge: 'Enterprise',
    subtitle: 'Online Trucking Industry Logistics & Live Telemetry',
    description:
      'High-throughput multi-tenant trucking management platform featuring real-time vehicle GPS tracking, Google Maps route optimization, automated Stripe billing, and low-latency WebSocket data streaming.',
    metrics: 'Multi-Tenant Architecture · Real-time Fleet Telemetry',
    tags: ['React.js', 'NestJS', 'MongoDB', 'Express.js', 'Google Maps API', 'Ant Design', 'Stripe API', 'WebSockets'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://mydriverbook.com/',
    accentColor: '#bc62b4',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    id: 'xoommaps',
    title: 'Xoommaps',
    badge: 'Live',
    subtitle: 'High-Precision Fleet Tracking & Geospatial Mapping Suite',
    description:
      'Cloud geospatial mapping ecosystem delivering real-time vehicle monitoring, geofence trip triggers, multi-tenant fleet dispatching, and secure Stripe payment processing.',
    metrics: 'Sub-second GPS Sync · Multi-Tenant Routing',
    tags: ['React.js', 'NestJS', 'MongoDB', 'Express.js', 'Google Maps API', 'Stripe API', 'WebSockets', 'Pure CSS'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://www.xoommaps.com/',
    accentColor: '#00f0ff',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'gigfalcon',
    title: 'Gigfalcon',
    badge: 'Enterprise',
    subtitle: 'Global Freelance Marketplace & Milestone Escrow',
    description:
      'Full-scale talent marketplace featuring dual-database persistence with MongoDB & PostgreSQL, real-time WebSocket messaging, dynamic proposal bidding, and secure Stripe escrow checkout.',
    metrics: 'Dual-DB Architecture · Instant WebSocket Chat',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Material-UI', 'Stripe API', 'WebSockets'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://www.gigfalcon.com/',
    accentColor: '#28ca41',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    id: 'skylinx-tech',
    title: 'Skylinx Technologies',
    badge: 'Architecture',
    subtitle: 'Enterprise Cloud IT Agency & Distributed Services',
    description:
      'High-performance agency portal powered by RabbitMQ asynchronous task distribution, Redis low-latency caching layers, automated cron scheduling jobs, and scalable Node.js microservices.',
    metrics: 'RabbitMQ Queues · Redis Accelerated Caching',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redis', 'RabbitMQ', 'Cron Jobs'],
    category: 'Web Apps',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://skylinxtech.com/',
    accentColor: '#c445f5',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'metalabs-tech',
    title: 'Metalabs Tech',
    badge: 'Live',
    subtitle: 'Software Development & Digital Product Engineering Agency',
    description:
      'Modern, high-converting digital agency platform engineered with React.js and Node.js micro-architecture, responsive design systems, and rapid service inquiry pipelines.',
    metrics: '100% Responsive UI · Optimized Performance',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Web Apps',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://metalabstech.com/',
    accentColor: '#00f0ff',
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'fintiate',
    title: 'Fintiate',
    badge: 'Enterprise',
    subtitle: 'Fintech Wealth Analytics & Investment Ecosystem',
    description:
      'Institutional-grade wealth management platform featuring live WebSocket portfolio market telemetry, encrypted Stripe transaction flows, and automated investor analytics.',
    metrics: 'Encrypted Stripe Gateway · Real-Time Market Streaming',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'WebSockets', 'Tailwind CSS'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://www.fintiate.com/',
    accentColor: '#bc62b4',
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    id: 'pulse-rex',
    title: 'Pulse Rex',
    badge: 'Live',
    subtitle: 'Decentralized Web3 Crypto Staking & Yield Protocol',
    description:
      'Decentralized finance portal integrated with MetaMask wallet connectivity, smart contract Solidity interaction, and automated reward staking mechanisms on the blockchain.',
    metrics: 'MetaMask Wallet Integration · Web3 Smart Contracts',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI', 'MetaMask', 'Web3', 'Solidity'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://pulsrex.netlify.app/',
    accentColor: '#f59e0b',
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
  {
    id: 'maxebels',
    title: 'Maxebels',
    badge: 'Live',
    subtitle: 'Esports Tournament Gaming & Competitive Matchmaking',
    description:
      'Interactive gaming tournament platform featuring real-time bracket matchmaking via WebSockets, team roster management, and automated Stripe prize distribution.',
    metrics: 'Live Tournament Bracket WebSockets · Stripe Payouts',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'WebSockets', 'Tailwind CSS'],
    category: 'Web Apps',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://www.maxebels.com/',
    accentColor: '#28ca41',
    bentoSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
  },
  {
    id: 'crown-industrial',
    title: 'Crown Industrial Rental',
    badge: 'Live',
    subtitle: 'Commercial Fleet Logistics & Heavy Equipment Rental',
    description:
      'High-performance Next.js commercial rental portal built for heavy machinery logistics, fleet booking availability, and instant quote estimations.',
    metrics: 'High-Performance Next.js Stack · Fast Conversions',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Node.js'],
    category: 'Web Apps',
    githubUrl: 'https://github.com/WAHABMHAR',
    liveUrl: 'https://crownindustrialrental.com/',
    accentColor: '#00f0ff',
    bentoSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
  },
];
