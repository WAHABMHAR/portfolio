export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  roles: string[];
  headline: string;
  bio: string;
  location: string;
  availability: string;
  yearsOfExp: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cvUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Wahab Mehar',
  firstName: 'Wahab',
  lastName: 'Mehar',
  roles: [
    "Full-Stack Developer",
    "AI Workflows & n8n Expert",
    "React & Next.js Specialist",
    "Mobile Apps (React Native & Expo)",
    "AI Agents & Voice Assistants",
    "Backend & APIs (Node / NestJS / Python)",
  ],
  headline: 'Architecting Enterprise AI Systems, Mobile Apps & Ultra-Fast Web Experiences',
  bio: 'I’m a Full-Stack Developer with 5+ years of hands-on experience building web and mobile applications. I specialize in React.js, Next.js, React Native, Node.js, Express.js, MongoDB, and PostgreSQL. I also build AI Agents and workflow automations using n8n. I have experience with APIs, third-party integrations, Stripe, Google Maps, and AI integrations. I focus on writing clean, scalable code and delivering reliable solutions that meet business needs.',
  location: 'Lahore, Pakistan',
  availability: 'Available for Enterprise Level Project',
  yearsOfExp: '5+',
  email: 'wahabmhar@gmail.com',
  phone: '+92 313 4323250',
  github: 'https://github.com/WAHABMHAR',
  linkedin: 'https://www.linkedin.com/in/wahab-mehar-b7b2a81a0/',
  cvUrl: '/resume.pdf',
};

export const heroStats: StatItem[] = [
  { value: '5', suffix: '+', label: 'Years Experience', description: 'Full-Stack & Mobile Development' },
  { value: '30', suffix: '+', label: 'Projects Deployed', description: 'Web, Mobile, Enterprise & Web3' },
  { value: '100', suffix: '+', label: 'n8n & AI Workflows', description: 'Automations, Agents & Chatbots' },
  { value: '99.8', suffix: '%', label: 'Client Satisfaction', description: 'Reliable & scalable delivery' },
];

export const quickBioPoints = [
  '5+ years developing high-throughput web (React/Next.js) & mobile applications (React Native/Expo)',
  'Engineered multi-tenant fleet logistics, Google Maps live telemetry & Stripe payment ecosystems',
  'Autonomous AI Agents, enterprise n8n workflow automations, and intelligent chatbot integrations',
  'Robust distributed backend stacks: Node.js, NestJS, Python, PostgreSQL, MongoDB, Redis & WebSockets',
];
