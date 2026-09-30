import type { MetadataRoute } from 'next';
import { PUBLIC_ROUTES, SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Do not manufacture last-modified dates at build time.
  return PUBLIC_ROUTES.map(path => ({ url: new URL(path, SITE_URL).toString() }));
}
