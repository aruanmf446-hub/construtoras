/**
 * ─────────────────────────────────────────────────────────────────────
 *  DESIGN SYSTEM — design tokens
 *  Every value here becomes a CSS custom property (see lib/theme.ts).
 *  Pick the active preset in site.config.ts → `theme`, or create a new one.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { ThemeTokens } from './types';

const base: Omit<ThemeTokens, 'scheme' | 'color'> = {
  font: {
    // Fonts are self-hosted via @fontsource (see src/styles/fonts.css).
    display: "'Archivo Variable', 'Archivo', 'Helvetica Neue', Arial, sans-serif",
    displayStretch: '72%',
    displayWeight: 340,
    displayTransform: 'uppercase',
    serif: "'Instrument Serif', 'Times New Roman', serif",
    body: "'Inter Tight Variable', 'Inter Tight', system-ui, sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, monospace",
  },
  type: {
    mega: 'clamp(3.6rem, min(14.5vw, 26vh), 17rem)',
    xxl: 'clamp(3.2rem, 9vw, 9.5rem)',
    xl: 'clamp(2.4rem, 5.6vw, 5.8rem)',
    lg: 'clamp(1.7rem, 3vw, 3rem)',
    md: 'clamp(1.2rem, 1.6vw, 1.55rem)',
    body: 'clamp(1rem, 0.96rem + 0.18vw, 1.125rem)',
    small: '0.875rem',
    label: '0.7rem',
    displayLeading: 0.86,
    displayTracking: '-0.01em',
  },
  shape: {
    radius: '0px',
    buttonRadius: '0px',
    border: '1px',
  },
  image: {
    filter: 'saturate(0.92) contrast(1.04)',
    grain: 0.06,
  },
  motion: {
    ease: 'cubic-bezier(0.77, 0, 0.175, 1)',
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    duration: 1.2,
    intensity: 1,
  },
  layout: {
    maxWidth: '1680px',
    margin: 'clamp(1rem, 4vw, 4rem)',
    gutter: 'clamp(0.75rem, 1.6vw, 1.5rem)',
    sectionSpace: 'clamp(6rem, 14vw, 13rem)',
  },
};

export const themes: Record<string, ThemeTokens> = {
  /** Warm charcoal, bone typography, brushed brass accent. */
  graphite: {
    ...base,
    scheme: 'dark',
    color: {
      bg: '#0e0d0c',
      bgAlt: '#151311',
      surface: '#1c1a17',
      ink: '#ece6dc',
      inkMuted: '#a49c90',
      inkSubtle: '#6f685f',
      line: 'rgba(236, 230, 220, 0.14)',
      accent: '#c9a47c',
      accentInk: '#0e0d0c',
      inverseBg: '#e9e3d8',
      inverseInk: '#141210',
      scrim: 'rgba(10, 9, 8, 0.55)',
    },
  },

  /** Light travertine stone, ink black, terracotta accent. */
  travertine: {
    ...base,
    scheme: 'light',
    color: {
      bg: '#ece7de',
      bgAlt: '#e3ddd2',
      surface: '#f4f1eb',
      ink: '#171512',
      inkMuted: '#5f5850',
      inkSubtle: '#8f877c',
      line: 'rgba(23, 21, 18, 0.16)',
      accent: '#a5502f',
      accentInk: '#f4f1eb',
      inverseBg: '#171512',
      inverseInk: '#ece7de',
      scrim: 'rgba(14, 12, 10, 0.5)',
    },
    font: { ...base.font, displayWeight: 360 },
  },

  /** Nocturnal blue-black, cool white, oxidised copper. Serif display variant. */
  nocturne: {
    ...base,
    scheme: 'dark',
    color: {
      bg: '#0a0d12',
      bgAlt: '#0f141b',
      surface: '#141b24',
      ink: '#e8edf2',
      inkMuted: '#94a1ae',
      inkSubtle: '#5d6b79',
      line: 'rgba(232, 237, 242, 0.13)',
      accent: '#d08a5c',
      accentInk: '#0a0d12',
      inverseBg: '#dfe5ea',
      inverseInk: '#0a0d12',
      scrim: 'rgba(6, 9, 13, 0.55)',
    },
    font: {
      ...base.font,
      display: "'Instrument Serif', 'Times New Roman', serif",
      displayStretch: '100%',
      displayWeight: 400,
      displayTransform: 'none',
    },
    type: { ...base.type, displayLeading: 0.9, displayTracking: '-0.02em' },
  },
};
