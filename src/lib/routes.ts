/**
 * Route helpers — resolve links based on which pages and sections are enabled,
 * so disabling a page never leaves a broken link behind.
 */
import { pages, sections } from '../config/sections.config';
import { site } from '../config/site.config';
import type { PageId, SectionId, SectionRef } from '../config/types';
import { content } from '../content';
import { projects } from '../content/projects';

export const sectionId = (ref: SectionRef): SectionId => (typeof ref === 'string' ? ref : ref.id);

/**
 * A section with no data renders nothing — it must also disappear from
 * numbering and navigation, so removing content never leaves dead anchors.
 */
const hasContent: Partial<Record<SectionId, () => boolean>> = {
  'featured-projects': () => projects.length > 0,
  portfolio: () => projects.length > 0,
  'project-details': () => projects.length > 0,
  services: () => content.services.items.length > 0,
  stats: () => content.stats.items.length > 0,
  history: () => content.history.chapters.length > 0,
  timeline: () => content.timeline.items.length > 0,
  differentiators: () => content.differentiators.items.length > 0,
  certifications: () => content.certifications.items.length > 0,
  partners: () => content.partners.items.length > 0,
  gallery: () => content.gallery.images.length > 0,
  testimonials: () => content.testimonials.items.length > 0,
  locations: () => content.locations.items.length > 0,
};

export const isSectionEnabled = (id: SectionId) => sections[id]?.enabled !== false && (hasContent[id]?.() ?? true);

export const anchorOf = (id: SectionId) => sections[id]?.anchor ?? id;

export const pageEnabled = (id: PageId) => pages[id]?.enabled !== false;

/** Normalises a configured path to the static output format ('/x/'). */
export const normPath = (p: string) => (p === '/' || p === '' ? '/' : `/${p.replace(/^\/+|\/+$/g, '')}/`);

/** Sections actually rendered on a page (globally enabled, in order). */
export function pageSections(id: PageId): SectionRef[] {
  return (pages[id]?.sections ?? []).filter((ref) => isSectionEnabled(sectionId(ref)));
}

export function pageHasSection(page: PageId, id: SectionId) {
  return pageEnabled(page) && pageSections(page).some((r) => sectionId(r) === id);
}

export const pageHref = (id: PageId) => (pageEnabled(id) ? normPath(pages[id].path) : null);

export function projectHref(slug: string) {
  return pageEnabled('project') ? normPath(`${pages.project.path}/${slug}`) : null;
}

export function whatsappHref(message = site.contact.whatsapp.message) {
  const n = site.contact.whatsapp.number;
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(message)}` : null;
}

/**
 * Resolves CTA targets ('projects', 'contact', 'about', 'whatsapp', '#anchor', URL).
 * `current` lets the resolver prefer an on-page anchor.
 */
export function resolveCta(to: string, current?: PageId): string | null {
  switch (to) {
    case 'projects':
      if (current && pageHasSection(current, 'featured-projects')) return pageHref('projects') ?? `#${anchorOf('featured-projects')}`;
      return pageHref('projects') ?? (pageHasSection('home', 'featured-projects') ? `/#${anchorOf('featured-projects')}` : null);
    case 'contact':
      if (current && pageHasSection(current, 'contact')) return `#${anchorOf('contact')}`;
      return pageHref('contact') ?? (pageHasSection('home', 'contact') ? `/#${anchorOf('contact')}` : `mailto:${site.contact.email}`);
    case 'about':
      return pageHref('about');
    case 'whatsapp':
      return whatsappHref();
    default:
      return to;
  }
}

/** Main navigation built from enabled pages. */
export function mainNav() {
  return (Object.keys(pages) as PageId[])
    .filter((id) => pages[id].enabled && pages[id].inNav)
    .map((id) => ({ id, label: pages[id].navLabel, href: normPath(pages[id].path) }));
}

/** Section index for the floating navigation (current page). */
export function sectionIndex(page: PageId | null, extra: SectionRef[] = []) {
  const list = page ? [...pageSections(page), ...extra] : extra;
  const seen = new Set<string>();
  return list
    .map(sectionId)
    .filter((id) => isSectionEnabled(id) && sections[id].navLabel && !seen.has(id) && seen.add(id))
    .map((id) => ({ id, label: sections[id].navLabel as string, anchor: anchorOf(id) }));
}
