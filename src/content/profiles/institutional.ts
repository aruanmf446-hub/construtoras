/** Construtora institucional — credibility, track record, technical capacity. */
import type { ContentOverrides } from '../index';

export const institutional: ContentOverrides = {
  hero: {
    eyebrow: 'Construtora · Desde 1998',
    title: ['Solidez', 'em cada *detalhe*'],
    subtitle:
      'Quase três décadas executando obras residenciais, corporativas e institucionais com rigor técnico, transparência e prazos cumpridos.',
    primary: { label: 'Conheça nossas obras', to: 'projects' },
    secondary: { label: 'Nossa trajetória', to: 'about' },
  },
  aboutIntro: {
    eyebrow: 'Institucional',
    title: ['Autoridade', 'que se *constrói*'],
    lead: 'Uma construtora reconhecida pela consistência: obras complexas entregues com qualidade mensurável e relacionamento de longo prazo.',
  },
  featuredProjects: {
    eyebrow: 'Obras executadas',
    title: ['Capacidade', '*comprovada*'],
    intro: 'Projetos que demonstram nossa amplitude técnica em diferentes escalas.',
    slugs: ['sede-atlas', 'campus-orion', 'torre-halden-norte', 'viaduto-vale-sereno'],
  },
};
