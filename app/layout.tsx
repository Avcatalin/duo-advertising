import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import RevealInit from '@/components/RevealInit';
import CookieBanner from '@/components/CookieBanner';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: {
    template: '%s — Duo Advertising',
    default: 'Duo Advertising — Digital products, built with intention',
  },
  description:
    'Duo Advertising is a web agency helping businesses design, build, and improve digital platforms that support growth. We create custom websites, eCommerce experiences, and HubSpot solutions, including CRM setup, pipeline configuration, HubSpot CMS development, custom modules, landing pages, and integrations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" />
        <Nav />
        {children}
        <RevealInit />
        <CookieBanner />
        <BackToTop />
      </body>
    </html>
  );
}
