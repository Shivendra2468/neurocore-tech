import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

// 🎯 GLOBAL GOOGLE SEO MASTER COMPLEX - यह कोड गूगल सर्च इंजन को आपकी साइट इंडेक्स करने पर मजबूर कर देगा
export const metadata: Metadata = {
  title: 'NeuroCore.tech | Advanced AI Mainframe & Elite Interface Systems',
  description: 'Experience the world\'s most advanced AI operations, custom systems deployment, and tactical high-performance interfaces engineered exclusively by NeuroCore.',
  keywords: [
    'NeuroCore', 
    'NeuroCore.tech', 
    'Artificial Intelligence', 
    'Premium UI Design', 
    'Futuristic Web Systems', 
    'Shivx Gaming', 
    'Next.js Premium Template'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'NeuroCore.tech | Mainframe',
    description: 'The multi-million dollar neural network landing portal.',
    url: 'https://neurocore.tech',
    siteName: 'NeuroCore',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#01060a] selection:bg-[#00f0ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}