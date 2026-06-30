import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import RevealInit from '@/components/RevealInit';
import CookieBanner from '@/components/CookieBanner';
import BackToTop from '@/components/BackToTop';
import { GoogleTagManager } from '@next/third-parties/google';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });

export const metadata: Metadata = {
  title: {
    template: '%s — Duo Advertising',
    default: 'Duo Advertising — Digital products, built with intention',
  },
  description:
    'Duo Advertising is a web agency helping businesses design, build, and improve digital platforms that support growth. We create custom websites, eCommerce experiences, and HubSpot solutions, including CRM setup, pipeline configuration, HubSpot CMS development, custom modules, landing pages, and integrations.',
  verification: {
    google: process.env.GSC_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <div className="grain" />
        <Nav />
        {children}
        <RevealInit />
        <CookieBanner />
        <BackToTop />
      </body>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </html>
  );
}
