/**
 * ─────────────────────────────────────────────────────────────────────
 *  IDENTITY & GLOBAL SETTINGS
 *  Everything that identifies the client lives here.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { HeroMode, ProfileId } from './types';

export const site = {
  /** Production URL (used for canonicals, sitemap and Open Graph). No trailing slash. */
  url: 'https://halden-demo.pages.dev',
  lang: 'pt-BR',
  locale: 'pt_BR',

  /**
   * Commercial profile:
   *  - 'developer'     → Incorporadora imobiliária (empreendimentos, lifestyle)
   *  - 'institutional' → Construtora institucional (trajetória, autoridade)
   *  - 'engineering'   → Construtora e engenharia especializada (infraestrutura)
   * Changes section composition and narrative copy (see config/profiles.ts and content/profiles/*).
   */
  profile: 'developer' as ProfileId,

  /** Theme preset name from config/theme.config.ts */
  theme: 'graphite',

  /**
   * Demo mode shows small "conteúdo ilustrativo" notes next to fictitious data
   * (stats, testimonials, certifications). Set to `false` once real content is in place.
   */
  demo: true,

  identity: {
    name: 'Halden',
    legalName: 'Halden Arquitetura & Construção (empresa fictícia)',
    tagline: 'Arquitetura que permanece.',
    description:
      'Incorporadora e construtora dedicada a edifícios de alto padrão, onde precisão técnica e desenho arquitetônico caminham juntos.',
    segment: 'Incorporação e construção de alto padrão',
    foundingYear: 1998,
    /** Logos live in /public/brand. Set to `null` to fall back to a typographic wordmark. */
    logo: {
      onDark: '/brand/logo-light.svg' as string | null,
      onLight: '/brand/logo-dark.svg' as string | null,
      /** Compact mark used in the floating navigation. */
      mark: '/brand/mark.svg' as string | null,
      /** Intrinsic size of the wordmark files (avoids layout shift). */
      width: 162,
      height: 28,
    },
    favicon: '/brand/favicon.svg',
  },

  contact: {
    phone: { display: '+55 (11) 0000-0000', href: 'tel:+551100000000' },
    whatsapp: {
      /** International format, digits only. */
      number: '5511900000000',
      message: 'Olá! Gostaria de saber mais sobre os empreendimentos.',
    },
    email: 'contato@exemplo.com.br',
    address: {
      street: 'Av. Exemplo, 1000 — 12º andar',
      district: 'Distrito Demo',
      city: 'São Paulo',
      region: 'SP',
      postalCode: '00000-000',
      country: 'BR',
    },
    hours: 'Seg — Sex · 9h às 18h',
    geo: { lat: -23.5617, lng: -46.6559 },
    /** Optional external map link (no embeds required). */
    mapUrl: 'https://www.openstreetmap.org/?mlat=-23.5617&mlon=-46.6559#map=15/-23.5617/-46.6559',
  },

  social: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'YouTube', url: 'https://youtube.com/' },
  ],

  seo: {
    titleTemplate: '%s — Halden',
    defaultTitle: 'Halden — Arquitetura que permanece',
    description:
      'Template demonstrativo de experiência digital para construtoras e incorporadoras: empreendimentos, obras e trajetória apresentados com linguagem cinematográfica.',
    /** Image path relative to src/assets/media. Rendered to 1200×630 at build time. */
    ogImage: 'demo/hero-tower.jpg',
    keywords: ['construtora', 'incorporadora', 'arquitetura', 'alto padrão', 'engenharia'],
    /** schema.org type: 'GeneralContractor' | 'RealEstateAgent' | 'HomeAndConstructionBusiness' | 'Organization' */
    schemaType: 'GeneralContractor',
  },

  hero: {
    /**
     * 'image' → cinematic still with brise-soleil reveal
     * 'video' → background loop (falls back to the image when no video exists)
     * 'webgl' → shader-driven image (falls back to the image without WebGL)
     */
    mode: 'webgl' as HeroMode,
    image: 'demo/hero-tower.jpg',
    imageMobile: 'demo/hero-tower-portrait.jpg',
    video: {
      mp4: '/media/demo/hero-loop.mp4' as string | null,
      webm: '/media/demo/hero-loop.webm' as string | null,
    },
  },

  experience3d: {
    /** 'procedural' renders the original demo tower. 'gltf' loads `modelUrl` (place .glb in /public/models). */
    source: 'procedural' as 'procedural' | 'gltf',
    modelUrl: null as string | null,
    /** Image shown before loading and whenever 3D is not available. */
    fallbackImage: 'demo/night-tower.jpg',
    /** On touch / small screens the scene only starts after a tap. */
    tapToStartOnMobile: true,
  },

  motion: {
    /** Inertial scrolling on desktop (disabled automatically for touch and reduced motion). */
    smoothScroll: true,
    /** Cross-document page transitions (View Transitions API, progressive enhancement). */
    pageTransitions: true,
    /** Intro animation on first load. */
    intro: true,
  },
};

export type Site = typeof site;
