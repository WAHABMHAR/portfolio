import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import './globals.css';

const DynamicThreeBackground = dynamic(
  () => import('@/components/canvas/ThreeBackground'),
  { ssr: false }
);

const DynamicDotMatrix = dynamic(
  () => import('@/components/canvas/DotMatrixBackground'),
  { ssr: false }
);

const DynamicCustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor'),
  { ssr: false }
);

export const metadata: Metadata = {
  metadataBase: new URL('https://wahabmehar.com'),
  title: 'Wahab Mehar | Full-Stack Developer & AI Workflows Expert',
  description:
    'High-performance Next.js 14 portfolio for Wahab Mehar — Full-Stack Developer & AI Workflows Expert with 6+ years experience in React, Next.js, Node.js, Python, PostgreSQL, and autonomous n8n workflows.',
  keywords: [
    'Wahab Mehar',
    'Full-Stack Developer',
    'AI Workflows Expert',
    'n8n Workflows',
    'Next.js 14 Developer',
    'React Developer',
    'Python Developer',
    'PostgreSQL',
    'AI Agents',
  ],
  authors: [{ name: 'Wahab Mehar' }],
  openGraph: {
    title: 'Wahab Mehar | Full-Stack Developer & AI Workflows Expert',
    description:
      'Enterprise full-stack web applications, autonomous AI agent workflows, and hardware-accelerated Next.js systems.',
    url: 'https://wahabmehar.com',
    siteName: 'Wahab Mehar Portfolio',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Wahab Mehar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07070b] text-[#f0f0f5] antialiased selection:bg-[#bc62b4]/30 selection:text-white">
        <SmoothScroll>
          <DynamicCustomCursor />
          <DynamicDotMatrix />
          <DynamicThreeBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
