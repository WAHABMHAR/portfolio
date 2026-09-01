export interface DomainSkill {
  name: string;
  percentage: number;
  description: string;
  tags: string[];
}

export interface TechCard {
  name: string;
  category: 'AI & Automation' | 'Frontend & Mobile' | 'Backend & Web3' | 'Tools & Cloud';
  iconName: string;
  badge?: string;
  proficiency: string;
  highlight?: boolean;
}

export const domainSkills: DomainSkill[] = [
  {
    name: 'AI Agents, n8n & Autonomous Workflows',
    percentage: 98,
    description: 'Enterprise autonomous agents, multi-step n8n pipelines, intelligent chatbots, and AI assistant systems.',
    tags: ['n8n', 'AI Agents', 'AI Automations', 'Chatbots', 'AI Assistants', 'Principles of AI'],
  },
  {
    name: 'Full-Stack React & Next.js Ecosystem',
    percentage: 96,
    description: 'Hardware-accelerated web platforms, 60fps GSAP animations, React Redux/RTK state, and TanStack React Query.',
    tags: ['Next.js', 'React.js', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Material UI', 'Ant Design'],
  },
  {
    name: 'Cross-Platform Mobile Engineering (React Native & Expo)',
    percentage: 94,
    description: 'High-performance iOS & Android applications with native bridges, Expo ecosystem, and real-time offline sync.',
    tags: ['React Native', 'Expo', 'Google Maps API', 'Leaflet', 'Redux Toolkit', 'Mobile UI'],
  },
  {
    name: 'Backend Microservices, Python, Databases & Web3',
    percentage: 92,
    description: 'Resilient event-driven APIs, NestJS architecture, Node/Express, Python scripts, MongoDB, and Solidity smart contracts.',
    tags: ['Node.js', 'Express.js', 'NestJS', 'Python', 'MongoDB', 'Solidity', 'Postman'],
  },
];

export const techCards: TechCard[] = [
  // AI & Automation
  { name: 'n8n Workflow Engine', category: 'AI & Automation', iconName: 'Cpu', badge: 'Core Focus', proficiency: 'Expert', highlight: true },
  { name: 'AI Agents & Orchestration', category: 'AI & Automation', iconName: 'Bot', badge: 'Autonomous', proficiency: 'Expert', highlight: true },
  { name: 'AI Automations & Pipelines', category: 'AI & Automation', iconName: 'Workflow', badge: 'Production', proficiency: 'Expert' },
  { name: 'Chatbots & AI Assistants', category: 'AI & Automation', iconName: 'Sparkles', badge: 'Multi-Turn', proficiency: 'Expert' },
  { name: 'Principles of AI', category: 'AI & Automation', iconName: 'Binary', badge: 'Architecture', proficiency: 'Advanced' },

  // Frontend & Mobile
  { name: 'Next.js App Router', category: 'Frontend & Mobile', iconName: 'Layers', badge: 'Full-Stack', proficiency: 'Expert', highlight: true },
  { name: 'React.js & TypeScript', category: 'Frontend & Mobile', iconName: 'Code', badge: 'Modern Stack', proficiency: 'Expert', highlight: true },
  { name: 'React Native & Expo', category: 'Frontend & Mobile', iconName: 'Smartphone', badge: 'Mobile Apps', proficiency: 'Expert', highlight: true },
  { name: 'GSAP Animation Platform', category: 'Frontend & Mobile', iconName: 'Zap', badge: '60 FPS Motion', proficiency: 'Expert' },
  { name: 'Tailwind CSS & SASS(SCSS)', category: 'Frontend & Mobile', iconName: 'Palette', badge: 'Styling', proficiency: 'Expert' },
  { name: 'Material UI & Ant Design', category: 'Frontend & Mobile', iconName: 'Box', badge: 'Component UI', proficiency: 'Expert' },
  { name: 'React Redux & RTK', category: 'Frontend & Mobile', iconName: 'Atom', badge: 'State Management', proficiency: 'Expert' },
  { name: 'React Query (TanStack)', category: 'Frontend & Mobile', iconName: 'Database', badge: 'Server State', proficiency: 'Expert' },
  { name: 'Google Maps API & Leaflet', category: 'Frontend & Mobile', iconName: 'MapPin', badge: 'Geospatial', proficiency: 'Expert' },
  { name: 'HTML5, CSS3, JavaScript', category: 'Frontend & Mobile', iconName: 'FileCode2', badge: 'Core Web', proficiency: 'Expert' },
  { name: 'WordPress (Front-End)', category: 'Frontend & Mobile', iconName: 'Globe', badge: 'CMS / Themes', proficiency: 'Advanced' },
  { name: 'Bootstrap', category: 'Frontend & Mobile', iconName: 'Palette', badge: 'Responsive', proficiency: 'Advanced' },

  // Backend & Web3
  { name: 'Node.js & Express.js', category: 'Backend & Web3', iconName: 'Server', badge: 'Runtime', proficiency: 'Expert', highlight: true },
  { name: 'NestJS', category: 'Backend & Web3', iconName: 'Shield', badge: 'Enterprise API', proficiency: 'Advanced' },
  { name: 'Python', category: 'Backend & Web3', iconName: 'Terminal', badge: 'Data & Backend', proficiency: 'Advanced' },
  { name: 'MongoDB', category: 'Backend & Web3', iconName: 'HardDrive', badge: 'NoSQL Database', proficiency: 'Expert' },
  { name: 'Solidity (Web3)', category: 'Backend & Web3', iconName: 'Coins', badge: 'Smart Contracts', proficiency: 'Proficient' },

  // Tools & Cloud
  { name: 'GitHub & Git Version Control', category: 'Tools & Cloud', iconName: 'GitBranch', badge: 'CI/CD & Collab', proficiency: 'Expert' },
  { name: 'Postman & REST API Testing', category: 'Tools & Cloud', iconName: 'Radio', badge: 'API Tooling', proficiency: 'Expert' },
];
