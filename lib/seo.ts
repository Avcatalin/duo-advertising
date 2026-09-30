import type { Metadata } from 'next';

// Production redirects the apex domain to www.
export const SITE_URL = 'https://www.duoadv.com';

const pages = {
  '/': ['Duo Advertising — Digital products, built with intention', 'Website design and development, WordPress and WooCommerce, HubSpot CMS and CRM, Figma design, and Next.js services from Duo Advertising.'],
  '/about': ['About', 'Learn about Duo Advertising, our hands-on approach to website design and development, and the principles behind our WordPress and HubSpot work.'],
  '/services': ['Web Design, Development & HubSpot Services', 'Explore HubSpot CRM and CMS implementation, WordPress and WooCommerce development, Figma design, and Next.js website services.'],
  '/process': ['Our Website Design & Development Process', 'See how a Duo Advertising project moves from scoping and written deliverables through design, development, launch, and ongoing support.'],
  '/contact': ['Contact', 'Discuss your website, eCommerce, or HubSpot project with Duo Advertising. Send a project brief, describe your idea, or contact us by email or phone.'],
  '/privacy-policy': ['Privacy Policy', 'Read how Duo Design Advertising SRL collects, uses, stores, and protects personal data, and how to exercise your privacy rights.'],
  '/cookie-policy': ['Cookie Policy', 'Learn about cookies on the Duo Advertising website, third-party services, consent, and how to manage your cookie preferences.'],
} as const;

export const PUBLIC_ROUTES = Object.keys(pages) as (keyof typeof pages)[];

export function pageMetadata(path: keyof typeof pages): Metadata {
  const [title, description] = pages[path];
  const fullTitle = path === '/' ? title : `${title} — Duo Advertising`;
  const url = new URL(path, SITE_URL).toString();
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: { title: fullTitle, description, url, siteName: 'Duo Advertising', type: 'website', locale: 'en_GB' },
    twitter: { card: 'summary', title: fullTitle, description },
  };
}
