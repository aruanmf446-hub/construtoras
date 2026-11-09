/**
 * Shared types for every configuration file.
 * You normally never need to edit this file.
 */

/* ---------- Sections ------------------------------------------------ */
export const SECTION_IDS = [
  'hero',
  'manifesto',
  'about-intro',
  'featured-projects',
  'portfolio',
  'project-details',
  'services',
  'stats',
  'history',
  'timeline',
  'technology',
  'sustainability',
  'differentiators',
  'certifications',
  'partners',
  'gallery',
  'experience-3d',
  'testimonials',
  'locations',
  'contact',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/** A section reference inside a page. A plain id uses the section defaults. */
export type SectionRef =
  | SectionId
  | {
      id: SectionId;
      /** Visual variant, when the section offers more than one. */
      variant?: string;
      /** Extra props forwarded to the section component. */
      props?: Record<string, unknown>;
    };

export interface SectionSetting {
  /** Global switch. `false` removes the section from every page. */
  enabled: boolean;
  /** Label shown in the floating navigation index. Omit to hide from the index. */
  navLabel?: string;
  /** DOM id / URL anchor. Defaults to the section id. */
  anchor?: string;
}

/* ---------- Pages --------------------------------------------------- */
export type PageId = 'home' | 'projects' | 'project' | 'about' | 'contact';

export interface PageSetting {
  enabled: boolean;
  path: string;
  navLabel: string;
  /** Show in the main navigation. */
  inNav: boolean;
  sections: SectionRef[];
}

/* ---------- Profiles ------------------------------------------------ */
export type ProfileId = 'developer' | 'institutional' | 'engineering';

/* ---------- Hero ---------------------------------------------------- */
export type HeroMode = 'image' | 'video' | 'webgl';

/* ---------- Theme --------------------------------------------------- */
export interface ThemeTokens {
  /** 'dark' or 'light' — used for logo selection and browser UI colour. */
  scheme: 'dark' | 'light';
  color: {
    bg: string;
    bgAlt: string;
    surface: string;
    ink: string;
    inkMuted: string;
    inkSubtle: string;
    line: string;
    accent: string;
    accentInk: string;
    /** Inverted band (used by a few sections for rhythm). */
    inverseBg: string;
    inverseInk: string;
    /** Overlay over photography to guarantee text contrast. */
    scrim: string;
  };
  font: {
    display: string;
    displayStretch: string;
    displayWeight: number;
    displayTransform: 'uppercase' | 'none';
    serif: string;
    body: string;
    mono: string;
  };
  type: {
    /** Fluid sizes, any CSS length / clamp(). */
    mega: string;
    xxl: string;
    xl: string;
    lg: string;
    md: string;
    body: string;
    small: string;
    label: string;
    displayLeading: number;
    displayTracking: string;
  };
  shape: {
    radius: string;
    buttonRadius: string;
    border: string;
  };
  image: {
    /** CSS filter applied to photography. */
    filter: string;
    /** Film grain overlay opacity (0 disables). */
    grain: number;
  };
  motion: {
    ease: string;
    easeOut: string;
    duration: number;
    /** Multiplier applied to every reveal distance (0.5 calmer, 1.5 bolder). */
    intensity: number;
  };
  layout: {
    maxWidth: string;
    margin: string;
    gutter: string;
    sectionSpace: string;
  };
}
