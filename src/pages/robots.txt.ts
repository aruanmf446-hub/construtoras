import type { APIRoute } from 'astro';
import { site } from '../config/site.config';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', `${site.url.replace(/\/$/, '')}/`)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
