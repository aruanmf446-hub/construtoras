/** Structured data helpers (schema.org JSON-LD). */
import { site } from '../config/site.config';
import type { Project } from '../content/projects';

/** Resolve URLs against the site's deployment subpath (e.g. GitHub Pages). */
export const absolute = (path: string) => {
  if (/^https?:\/\//.test(path)) return path;
  const siteRoot = new URL(site.url.replace(/\/$/, '') + '/');
  const base = siteRoot.pathname.replace(/\/$/, '');
  const relative = base && path.startsWith(base + '/')
    ? path.slice(base.length + 1)
    : path.replace(/^\/+/, '');
  return new URL(relative, siteRoot).toString();
};

export function organizationLd(logoUrl?: string) {
  const c = site.contact;
  return {
    '@context': 'https://schema.org',
    '@type': site.seo.schemaType,
    '@id': absolute('/#organization'),
    name: site.identity.name,
    legalName: site.identity.legalName,
    description: site.identity.description,
    slogan: site.identity.tagline,
    url: site.url,
    logo: logoUrl ? absolute(logoUrl) : undefined,
    foundingDate: String(site.identity.foundingYear),
    email: c.email,
    telephone: c.phone.href.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.address.street,
      addressLocality: c.address.city,
      addressRegion: c.address.region,
      postalCode: c.address.postalCode,
      addressCountry: c.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: c.geo.lat, longitude: c.geo.lng },
    sameAs: site.social.map((s) => s.url),
  };
}

export function projectLd(p: Project, url: string, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.name,
    description: p.summary,
    url,
    image: image ? absolute(image) : undefined,
    dateCreated: p.year,
    locationCreated: { '@type': 'Place', address: `${p.location.city}, ${p.location.region}` },
    creator: { '@id': absolute('/#organization') },
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absolute(it.url) })),
  };
}
