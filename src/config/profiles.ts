/**
 * ─────────────────────────────────────────────────────────────────────
 *  COMMERCIAL PROFILES
 *  Default section composition for each business profile.
 *  The active profile is chosen in site.config.ts → `profile`.
 *  To customise a single client, edit config/sections.config.ts instead.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { ProfileId, SectionRef } from './types';

interface ProfilePreset {
  label: string;
  home: SectionRef[];
  about: SectionRef[];
  projects: SectionRef[];
  contact: SectionRef[];
  /** Sections appended to every project page, after the project story. */
  project: SectionRef[];
}

export const profiles: Record<ProfileId, ProfilePreset> = {
  /* Incorporadora — empreendimentos, arquitetura, estilo de vida */
  developer: {
    label: 'Incorporadora imobiliária',
    home: [
      'hero',
      'manifesto',
      'featured-projects',
      { id: 'project-details', variant: 'spotlight' },
      'experience-3d',
      'differentiators',
      'gallery',
      'stats',
      'testimonials',
      'locations',
      'contact',
    ],
    about: ['about-intro', 'history', 'timeline', 'sustainability', 'certifications', 'partners', 'contact'],
    projects: [{ id: 'portfolio', variant: 'index' }, 'contact'],
    contact: ['contact', 'locations'],
    project: ['experience-3d', 'contact'],
  },

  /* Construtora institucional — credibilidade, trajetória, capacidade técnica */
  institutional: {
    label: 'Construtora institucional',
    home: [
      'hero',
      'about-intro',
      'stats',
      'featured-projects',
      'services',
      'history',
      'differentiators',
      'certifications',
      'partners',
      'testimonials',
      'contact',
    ],
    about: ['manifesto', 'timeline', 'technology', 'sustainability', 'locations', 'contact'],
    projects: [{ id: 'portfolio', variant: 'mosaic' }, 'contact'],
    contact: ['contact', 'locations'],
    project: ['contact'],
  },

  /* Engenharia especializada — infraestrutura, soluções técnicas, clientes corporativos */
  engineering: {
    label: 'Construtora e engenharia especializada',
    home: [
      'hero',
      'stats',
      'services',
      'featured-projects',
      'technology',
      'experience-3d',
      'partners',
      'sustainability',
      'locations',
      'contact',
    ],
    about: ['about-intro', 'manifesto', 'timeline', 'differentiators', 'certifications', 'contact'],
    projects: [{ id: 'portfolio', variant: 'index' }, 'contact'],
    contact: ['contact', 'locations'],
    project: ['contact'],
  },
};
