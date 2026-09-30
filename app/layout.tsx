import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import RevealInit from '@/components/RevealInit';
import CookieBanner from '@/components/CookieBanner';
import BackToTop from '@/components/BackToTop';
import { GoogleTagManager } from '@next/third-parties/google';
import { SITE_URL } from '@/lib/seo';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'optional' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'optional' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
        <main>{children}</main>
        <RevealInit />
        <CookieBanner />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'Duo Advertising',
            legalName: 'Duo Design Advertising SRL',
            url: SITE_URL,
            email: 'contact@duoadv.com',
            telephone: '+40771190628',
            sameAs: ['https://linkedin.com/company/duoadv/'],
          }).replace(/</g, '\\u003c') }}
        />
      </body>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </html>
  );
}
