/** Construtora institucional — credibility, track record, technical capacity. */
import type { ContentOverrides } from '../index';

export const institutional: ContentOverrides = {
  hero: {
    eyebrow: 'Construtora · Desde 1998',
    title: ['Solidez', 'em cada *detalhe*'],
    subtitle:
      'Desde 1998, execução de edifícios residenciais, corporativos e institucionais, com planejamento de campo e acompanhamento de cada etapa.',
    primary: { label: 'Conheça nossas obras', to: 'projects' },
    secondary: { label: 'Nossa trajetória', to: 'about' },
  },
  aboutIntro: {
    eyebrow: 'Institucional',
    title: ['Experiência', 'em *execução*'],
    body: ['O planejamento reúne orçamento, cronograma e logística de canteiro antes da mobilização.', 'Durante a execução, as equipes acompanham materiais, serviços e interfaces entre fornecedores.'],
    lead: 'Coordenamos equipes, fornecedores e sistemas construtivos para executar projetos residenciais, corporativos e institucionais.',
  },
  featuredProjects: {
    eyebrow: 'Obras executadas',
    title: ['Construção', 'em diferentes *escalas*'],
    intro: 'Uma seleção demonstrativa de edifícios e infraestrutura, com dados de execução e soluções construtivas.',
    slugs: ['sede-atlas', 'campus-orion', 'torre-halden-norte', 'viaduto-vale-sereno'],
  },

  services: {
    title: ['Da preparação', 'à *entrega*'],
    intro: 'Planejamento, execução e assistência técnica para edifícios residenciais, corporativos e institucionais.',
    items: [
      { title: 'Planejamento', description: 'Orçamento, cronograma e logística de canteiro definidos conforme o projeto.', tags: ['Custos', 'Prazos', 'Logística'], image: { src: 'demo/campus.jpg', alt: 'Vista aérea de conjunto de edifícios (imagem demonstrativa)' } },
      { title: 'Construção', description: 'Coordenação de equipes e fornecedores em cada etapa da execução.', tags: ['Estruturas', 'Instalações', 'Acabamentos'], image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com brises de madeira (imagem demonstrativa)' } },
      { title: 'Engenharia', description: 'Soluções de fundações e estruturas compatíveis com o terreno e o projeto.', tags: ['Estruturas', 'Fundações', 'BIM'], image: { src: 'demo/infrastructure.jpg', alt: 'Viaduto em concreto sob névoa (imagem demonstrativa)' } },
      { title: 'Coordenação técnica', description: 'Compatibilização de arquitetura, estrutura e instalações antes da execução.', tags: ['BIM', 'Projetos'], image: { src: 'demo/detail-interior.jpg', alt: 'Sala com fachada envidraçada e forro de madeira (imagem demonstrativa)' } },
      { title: 'Assistência técnica', description: 'Orientação de uso, manutenção e atendimento após a entrega.', tags: ['Manuais', 'Manutenção'], image: { src: 'demo/corporate.jpg', alt: 'Sede corporativa com fachada em grelha de concreto (imagem demonstrativa)' } },
    ],
  },
  contact: { intro: 'Informe o uso previsto, a localização e a fase do projeto para orientar a análise da construção.', form: { subjects: ['Orçamento de construção', 'Coordenação de projetos', 'Assistência técnica', 'Imprensa', 'Outros assuntos'] } },
  pages: { about: { intro: 'Desde 1998, planejamento e execução de edifícios residenciais, corporativos e institucionais.' }, contact: { intro: 'Propostas de construção, fornecedores e assistência técnica.' } },

  history: { chapters: [
    { kicker: '1998 — 2006', title: 'Primeiras construções', text: 'A empresa inicia suas atividades na execução de residências unifamiliares. O acompanhamento de campo orienta a formação das primeiras equipes.', image: { src: 'demo/pavilion.jpg', alt: 'Residência com volume em balanço sobre espelho d’água (imagem demonstrativa)' } },
    { kicker: '2007 — 2015', title: 'Edifícios e novos contratos', text: 'A construtora passa a executar edifícios residenciais e corporativos. A coordenação de fornecedores acompanha o aumento da escala dos contratos.', image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com varandas e brises (imagem demonstrativa)' } },
    { kicker: '2016 — 2025', title: 'Planejamento digital', text: 'Modelos BIM apoiam a compatibilização dos projetos. Cronogramas integrados orientam suprimentos e sequências de execução.', image: { src: 'demo/hero-tower.jpg', alt: 'Torre residencial ao entardecer (imagem demonstrativa)' } },
  ] },
  timeline: { items: [
    { year: '1998', title: 'Fundação', text: 'Início das atividades de construção e acompanhamento técnico.' },
    { year: '2003', title: 'Novos contratos', text: 'Ampliação da equipe para execução de edifícios.' },
    { year: '2009', title: 'Construção vertical', text: 'Entrega do primeiro edifício acima de 20 pavimentos.' },
    { year: '2014', title: 'Coordenação digital', text: 'Adoção de BIM na compatibilização dos projetos.' },
    { year: '2019', title: 'Operação regional', text: 'Mobilização de equipes em novas cidades.' },
    { year: '2024', title: 'Pré-fabricação', text: 'Integração de fachadas pré-fabricadas ao planejamento de execução.' },
  ] },
  differentiators: { items: [
    { title: 'Coordenação', text: 'Projetos, fornecedores e equipes de campo sob a mesma programação.' },
    { title: 'Planejamento', text: 'Cronogramas vinculados à contratação de serviços e ao recebimento de materiais.' },
    { title: 'Materiais', text: 'Especificações verificadas conforme as condições de uso e manutenção.' },
    { title: 'Execução', text: 'Serviços acompanhados por inspeções e registros de campo.' },
    { title: 'Instalações', text: 'Interfaces entre sistemas verificadas antes do fechamento dos ambientes.' },
    { title: 'Acompanhamento', text: 'Relatórios periódicos de avanço e visitas técnicas programadas.' },
  ] },
};
