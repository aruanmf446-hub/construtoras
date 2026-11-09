/**
 * ─────────────────────────────────────────────────────────────────────
 *  SECTIONS & PAGES
 *  1. `sections` — global on/off switch + navigation label per section.
 *  2. `pages`    — which pages exist and the ORDER of sections in each.
 *
 *  By default each page uses the composition of the active profile
 *  (config/profiles.ts). Replace any `sections:` array with your own list
 *  to customise the order for a specific client, e.g.:
 *
 *    sections: ['hero', 'featured-projects', 'stats', 'contact'],
 * ─────────────────────────────────────────────────────────────────────
 */
import { site } from './site.config';
import { profiles } from './profiles';
import type { PageId, PageSetting, SectionId, SectionSetting } from './types';

const preset = profiles[site.profile];

export const sections: Record<SectionId, SectionSetting> = {
  hero:                { enabled: true },
  manifesto:           { enabled: true, navLabel: 'Manifesto' },
  'about-intro':       { enabled: true, navLabel: 'A empresa', anchor: 'empresa' },
  'featured-projects': { enabled: true, navLabel: 'Projetos', anchor: 'projetos' },
  portfolio:           { enabled: true, navLabel: 'Portfólio', anchor: 'portfolio' },
  'project-details':   { enabled: true, navLabel: 'Em destaque', anchor: 'destaque' },
  services:            { enabled: true, navLabel: 'Especialidades', anchor: 'especialidades' },
  stats:               { enabled: true, navLabel: 'Números', anchor: 'numeros' },
  history:             { enabled: true, navLabel: 'Trajetória', anchor: 'trajetoria' },
  timeline:            { enabled: true, navLabel: 'Linha do tempo', anchor: 'linha-do-tempo' },
  technology:          { enabled: true, navLabel: 'Tecnologia', anchor: 'tecnologia' },
  sustainability:      { enabled: true, navLabel: 'Sustentabilidade', anchor: 'sustentabilidade' },
  differentiators:     { enabled: true, navLabel: 'Diferenciais', anchor: 'diferenciais' },
  certifications:      { enabled: true, navLabel: 'Certificações', anchor: 'certificacoes' },
  partners:            { enabled: true, navLabel: 'Parceiros', anchor: 'parceiros' },
  gallery:             { enabled: true, navLabel: 'Galeria', anchor: 'galeria' },
  'experience-3d':     { enabled: true, navLabel: 'Experiência 3D', anchor: 'experiencia-3d' },
  testimonials:        { enabled: true, navLabel: 'Depoimentos', anchor: 'depoimentos' },
  locations:           { enabled: true, navLabel: 'Presença', anchor: 'presenca' },
  contact:             { enabled: true, navLabel: 'Contato', anchor: 'contato' },
};

export const pages: Record<PageId, PageSetting> = {
  home:     { enabled: true, path: '/',          navLabel: 'Início',   inNav: true, sections: preset.home },
  projects: { enabled: true, path: '/projetos',  navLabel: 'Projetos', inNav: true, sections: preset.projects },
  /** Individual project pages (/projetos/[slug]). Disabling removes every project link. */
  project:  { enabled: true, path: '/projetos',  navLabel: 'Projeto',  inNav: false, sections: preset.project },
  about:    { enabled: true, path: '/sobre',     navLabel: 'Sobre',    inNav: true, sections: preset.about },
  contact:  { enabled: true, path: '/contato',   navLabel: 'Contato',  inNav: true, sections: preset.contact },
};
