/** Engenharia especializada — infrastructure, technical solutions, corporate clients. */
import type { ContentOverrides } from '../index';

export const engineering: ContentOverrides = {
  hero: {
    eyebrow: 'Engenharia · Infraestrutura · Industrial',
    title: ['Engenharia', 'em *grande escala*'],
    subtitle:
      'Infraestrutura, plantas industriais e edifícios corporativos executados com engenharia própria, planejamento rigoroso e segurança operacional.',
    primary: { label: 'Projetos executados', to: 'projects' },
    secondary: { label: 'Solicitar proposta', to: 'contact' },
    image: 'demo/infrastructure.jpg',
    imageMobile: 'demo/infrastructure.jpg',
    imageAlt: 'Viaduto de concreto sob névoa matinal (imagem demonstrativa)',
  },
  services: {
    eyebrow: 'Soluções técnicas',
    title: ['Capacidade', '*operacional*'],
    intro: 'Equipes próprias, frota e engenharia de campo para obras de alta complexidade.',
    items: [
      { title: 'Infraestrutura viária', description: 'Viadutos, pontes e obras de arte especiais com métodos construtivos industrializados.', tags: ['OAE', 'Pré-moldados'], image: { src: 'demo/infrastructure.jpg', alt: 'Viaduto em concreto (imagem demonstrativa)' } },
      { title: 'Plantas industriais', description: 'Galpões logísticos, silos e instalações industriais com entrega turn-key.', tags: ['EPC', 'Turn-key'], image: { src: 'demo/industrial.jpg', alt: 'Complexo industrial (imagem demonstrativa)' } },
      { title: 'Edifícios corporativos', description: 'Sedes e campi corporativos com certificação de desempenho.', tags: ['Corporativo', 'Retrofit'], image: { src: 'demo/corporate.jpg', alt: 'Sede corporativa (imagem demonstrativa)' } },
      { title: 'Fundações especiais', description: 'Estacas, contenções e tratamentos de solo para cargas elevadas.', tags: ['Geotecnia'], image: { src: 'demo/detail-concrete.jpg', alt: 'Estrutura em concreto (imagem demonstrativa)' } },
    ],
  },
  stats: {
    eyebrow: 'Capacidade',
    title: ['Números', 'de *operação*'],
    items: [
      { value: 420, suffix: 'km', label: 'Vias e acessos executados' },
      { value: 38, label: 'Obras de arte especiais' },
      { value: 2.6, decimals: 1, suffix: 'mi', label: 'm² industriais' },
      { value: 0, label: 'Acidentes com afastamento', detail: 'últimos 24 meses' },
    ],
  },
  featuredProjects: {
    eyebrow: 'Projetos executados',
    title: ['Infraestrutura', 'que *conecta*'],
    intro: 'Obras de infraestrutura, industriais e corporativas.',
    slugs: ['viaduto-vale-sereno', 'polo-logistico-sul', 'campus-orion', 'sede-atlas'],
  },
  projectSpotlight: { eyebrow: 'Obra em destaque', slug: 'viaduto-vale-sereno' },
};
