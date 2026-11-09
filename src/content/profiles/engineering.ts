/** Engenharia especializada — infrastructure, technical solutions, corporate clients. */
import type { ContentOverrides } from '../index';

export const engineering: ContentOverrides = {
  hero: {
    eyebrow: 'Engenharia · Infraestrutura · Industrial',
    title: ['Engenharia', 'em *grande escala*'],
    subtitle:
      'Execução de infraestrutura viária, plantas industriais e instalações corporativas, com engenharia de campo e planejamento das frentes de serviço.',
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
      { title: 'Plantas industriais', description: 'Galpões logísticos, silos e instalações industriais com projeto, suprimentos e execução integrados.', tags: ['EPC', 'Entrega integrada'], image: { src: 'demo/industrial.jpg', alt: 'Complexo industrial (imagem demonstrativa)' } },
      { title: 'Edifícios corporativos', description: 'Sedes e campi corporativos com coordenação de estruturas, instalações e montagem.', tags: ['Corporativo', 'Retrofit'], image: { src: 'demo/corporate.jpg', alt: 'Sede corporativa (imagem demonstrativa)' } },
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
    eyebrow: 'Projetos de engenharia',
    title: ['Infraestrutura', 'que *conecta*'],
    intro: 'Infraestrutura viária, instalações industriais e conjuntos corporativos entregues ou em execução.',
    slugs: ['viaduto-vale-sereno', 'polo-logistico-sul', 'campus-orion', 'sede-atlas'],
  },
  projectSpotlight: { eyebrow: 'Obra em destaque', slug: 'viaduto-vale-sereno' },

  aboutIntro: {
    title: ['Engenharia', 'de *campo*'],
    lead: 'Integramos planejamento, geotecnia, estruturas e montagem na execução de infraestrutura e instalações industriais.',
    body: ['A coordenação técnica define métodos executivos, acessos e sequências de montagem antes da mobilização.', 'Em campo, as equipes acompanham produção, segurança e interfaces com a operação do cliente.'],
  },
  history: { title: ['Trajetória', 'em *engenharia*'], chapters: [
    { kicker: '1998 — 2006', title: 'Primeiros contratos', text: 'A empresa inicia suas atividades em projetos de estruturas e acompanhamento de campo. A equipe desenvolve métodos de planejamento e controle da execução.', image: { src: 'demo/detail-concrete.jpg', alt: 'Escada e hall em concreto aparente (imagem demonstrativa)' } },
    { kicker: '2007 — 2015', title: 'Infraestrutura e indústria', text: 'A atuação se amplia para estruturas viárias e instalações industriais. Novas equipes passam a coordenar fundações, pré-moldados e montagem.', image: { src: 'demo/infrastructure.jpg', alt: 'Viaduto de concreto sob névoa (imagem demonstrativa)' } },
    { kicker: '2016 — 2025', title: 'Planejamento integrado', text: 'Modelos BIM apoiam a coordenação de estruturas e instalações. O planejamento conecta suprimentos, montagem e liberação das frentes de serviço.', image: { src: 'demo/industrial.jpg', alt: 'Complexo industrial com galpões e silos (imagem demonstrativa)' } },
  ] },
  timeline: { items: [
    { year: '1998', title: 'Fundação', text: 'Início das atividades em projetos e acompanhamento de campo.' },
    { year: '2003', title: 'Estruturas', text: 'Ampliação da equipe dedicada a estruturas de concreto.' },
    { year: '2009', title: 'Infraestrutura viária', text: 'Entrada em contratos de pontes e viadutos.' },
    { year: '2014', title: 'Coordenação digital', text: 'Adoção de modelos BIM para compatibilização de projetos.' },
    { year: '2019', title: 'Operação regional', text: 'Mobilização de equipes no Sudeste e no Sul.' },
    { year: '2024', title: 'Montagem industrial', text: 'Integração do planejamento de suprimentos e montagem.' },
  ] },
  differentiators: { title: ['Métodos', 'de *execução*'], items: [
    { title: 'Geotecnia', text: 'Fundações e contenções definidas a partir das condições do solo e das cargas previstas.' },
    { title: 'Montagem', text: 'Sequências de içamento e posicionamento compatíveis com os acessos do canteiro.' },
    { title: 'Operação', text: 'Frentes de serviço planejadas conforme as restrições de tráfego e produção do cliente.' },
    { title: 'Controle', text: 'Acompanhamento de produção, materiais e inspeções ao longo da execução.' },
  ] },
  technology: { intro: 'Modelos digitais apoiam quantitativos, interferências e sequências de montagem de estruturas e instalações.', items: [
    { code: 'BIM', title: 'Coordenação técnica', text: 'Estruturas, instalações e equipamentos reunidos em modelos compatibilizados.' },
    { code: '4D·5D', title: 'Planejamento e custos', text: 'Cronograma e orçamento associados às etapas de execução.' },
    { code: 'PRÉ-MOLDADOS', title: 'Montagem industrializada', text: 'Produção e transporte de elementos coordenados com a disponibilidade de cada frente.' },
    { code: 'CAMPO', title: 'Controle de produção', text: 'Registros de avanço e inspeções orientam a liberação dos serviços.' },
  ] },
  contact: { intro: 'Informe a localização, o escopo e as restrições operacionais para orientar a análise técnica.', form: { subjects: ['Infraestrutura viária', 'Instalações industriais', 'Fundações e estruturas', 'Suprimentos e parcerias', 'Outros assuntos'] } },
  pages: { about: { title: ['Estruturas', 'e *infraestrutura*'], intro: 'Engenharia de campo, planejamento e montagem para infraestrutura e indústria.' }, projects: { title: ['Engenharia', 'em *execução*'], intro: 'Projetos viários, industriais e corporativos em diferentes etapas de execução.' }, contact: { intro: 'Propostas técnicas, suprimentos e contratos de engenharia.' } },
};
