/**
 * Content types. Headline lines accept `*word*` to set a word in the accent serif.
 */
export type Lines = string[];

export interface Cta {
  label: string;
  /** 'projects' | 'contact' | 'about' | 'whatsapp' | any URL / anchor (#id). */
  to: string;
}

export interface MediaRef {
  /** Path relative to src/assets/media (e.g. 'demo/pavilion.jpg'). */
  src: string;
  alt: string;
  caption?: string;
}

export interface PageHeader {
  eyebrow: string;
  title: Lines;
  intro: string;
  image?: MediaRef;
}

export interface SiteContent {
  hero: {
    eyebrow: string;
    title: Lines;
    subtitle: string;
    primary: Cta;
    secondary?: Cta;
    meta: { label: string; value: string }[];
    imageAlt: string;
    /** Optional per-profile override of site.hero.image / imageMobile. */
    image?: string;
    imageMobile?: string;
  };
  manifesto: { eyebrow: string; statement: string; signature: string; image?: MediaRef };
  aboutIntro: {
    eyebrow: string;
    title: Lines;
    lead: string;
    body: string[];
    image: MediaRef;
    imageSecondary?: MediaRef;
    facts: { label: string; value: string }[];
    cta?: Cta;
  };
  featuredProjects: { eyebrow: string; title: Lines; intro: string; slugs: string[]; cta?: Cta };
  portfolio: { eyebrow: string; title: Lines; intro: string; allLabel: string };
  projectSpotlight: { eyebrow: string; slug: string };
  services: {
    eyebrow: string;
    title: Lines;
    intro: string;
    items: { title: string; description: string; tags: string[]; image?: MediaRef }[];
  };
  stats: {
    eyebrow: string;
    title: Lines;
    items: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string; detail?: string }[];
    note?: string;
  };
  history: {
    eyebrow: string;
    title: Lines;
    chapters: { kicker: string; title: string; text: string; image: MediaRef }[];
  };
  timeline: { eyebrow: string; title: Lines; items: { year: string; title: string; text: string }[] };
  technology: {
    eyebrow: string;
    title: Lines;
    intro: string;
    image?: MediaRef;
    items: { code: string; title: string; text: string }[];
  };
  sustainability: {
    eyebrow: string;
    title: Lines;
    intro: string;
    image: MediaRef;
    figures: { value: string; label: string }[];
    items: { title: string; text: string }[];
    note?: string;
  };
  differentiators: { eyebrow: string; title: Lines; intro?: string; items: { title: string; text: string }[] };
  certifications: {
    eyebrow: string;
    title: Lines;
    intro: string;
    items: { year: string; name: string; issuer: string; category: string }[];
    note?: string;
  };
  partners: { eyebrow: string; title: Lines; items: { name: string; logo?: string }[]; note?: string };
  gallery: { projectTitle: Lines; eyebrow: string; title: Lines; images: MediaRef[] };
  experience3d: {
    eyebrow: string;
    title: Lines;
    intro: string;
    floors: { from: number; to: number; label: string; text: string }[];
    note: string;
    fallbackAlt: string;
    totalFloors: number;
    labels: {
      start: string;
      loading: string;
      error: string;
      day: string;
      night: string;
      views: { facade: string; aerial: string; street: string };
      explode: string;
      floors: string;
    };
  };
  testimonials: { eyebrow: string; title: Lines; items: { quote: string; author: string; role: string }[]; note?: string };
  locations: {
    eyebrow: string;
    title: Lines;
    intro: string;
    items: { city: string; region: string; lat: number; lng: number; kind: string; detail?: string }[];
  };
  contact: {
    eyebrow: string;
    title: Lines;
    intro: string;
    form: {
      enabled: boolean;
      /** 'whatsapp' opens WhatsApp with the message, 'email' opens the mail client. */
      channel: 'whatsapp' | 'email';
      subjects: string[];
      labels: { name: string; email: string; phone: string; subject: string; message: string; submit: string; sent: string };
    };
  };
  pages: { projects: PageHeader; about: PageHeader; contact: PageHeader; notFound: PageHeader };
  footer: { statement: Lines; description: string; legalName: string; demoNote: string };
  ui: {
    mainNavigation: string;
    pages: string;
    opensNewTab: string;
    home: string;
    projects: string;
    breadcrumbs: string;
    aboutProject: string;
    projectGallery: string;
    gallery: string;
    projectFilm: string;
    typologies: string;
    projectDemo: string;
    projectInquiry: string;
    email: string;
    phone: string;
    address: string;
    contact: string;
    chatNow: string;
    validationError: string;
    projectCount: string;
    filterCategory: string;
    number: string;
    project: string;
    category: string;
    recognition: string;
    issuer: string;
    previousTestimonial: string;
    nextTestimonial: string;
    carousel: string;
    enlargeImage: string;
    expandedGallery: string;
    previousImage: string;
    nextImage: string;
    navigation: string;
    footer: string;
    viewMap: string;
    experienceControls: string;
    views: string;
    lighting: string;
    menu: string;
    close: string;
    skip: string;
    scroll: string;
    viewProject: string;
    allProjects: string;
    nextProject: string;
    onThisPage: string;
    whatsapp: string;
    backHome: string;
    status: string;
    location: string;
    year: string;
    area: string;
    illustrative: string;
  };
}
