/**
 * ─────────────────────────────────────────────────────────────────────
 *  PROJECTS
 *  Each entry generates /projetos/<slug> at build time.
 *  Add, remove or reorder entries freely — every list adapts.
 *
 *  All projects below are FICTITIOUS. Images are procedural renders.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { MediaRef } from './schema';

export interface Project {
  slug: string;
  name: string;
  /** Short line shown under the name. */
  tagline: string;
  category: string;
  status: 'Lançamento' | 'Em obras' | 'Entregue' | string;
  year: string;
  location: { city: string; region: string; district?: string };
  area: string;
  /** Path relative to src/assets/media. */
  cover: string;
  coverAlt: string;
  /** Optional portrait crop for mobile. */
  coverPortrait?: string;
  summary: string;
  story: { title: string; text: string }[];
  specs: { label: string; value: string }[];
  highlights: string[];
  gallery: MediaRef[];
  typologies?: { name: string; area: string; detail: string }[];
  /** Optional per-project video (path in /public). */
  video?: string;
  /** Optional per-project .glb model (path in /public/models). */
  model?: string;
  /** Demo flag — shows an "illustrative project" note on the page. */
  demo?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'torre-halden-norte',
    name: 'Torre Halden Norte',
    tagline: 'Residencial vertical com fachada de brises em bronze',
    category: 'Residencial',
    status: 'Lançamento',
    year: '2027',
    location: { city: 'São Paulo', region: 'SP', district: 'Bairro Exemplo' },
    area: '38.400 m²',
    cover: 'demo/hero-tower.jpg',
    coverPortrait: 'demo/hero-tower-portrait.jpg',
    coverAlt: 'Torre com lajes horizontais e brises verticais em bronze ao entardecer (imagem demonstrativa)',
    summary:
      'Quarenta e dois pavimentos organizados em lâminas horizontais que sombreiam as varandas e desenham a silhueta da torre contra o céu.',
    story: [
      { title: 'Conceito', text: 'A torre parte de uma ideia simples: cada laje é uma varanda contínua, e cada varanda é protegida por brises verticais em alumínio anodizado bronze que filtram o sol poente.' },
      { title: 'Implantação', text: 'O térreo libera 60% do terreno para jardins abertos, criando uma praça de transição entre a rua e o lobby de pé-direito duplo.' },
      { title: 'Interiores', text: 'Plantas de 180 a 240 m² com pilares periféricos, garantindo flexibilidade total de layout e vistas desobstruídas.' },
    ],
    specs: [
      { label: 'Pavimentos', value: '42' },
      { label: 'Unidades', value: '84' },
      { label: 'Tipologias', value: '180 — 420 m²' },
      { label: 'Vagas', value: '3 a 5' },
      { label: 'Arquitetura', value: 'Estúdio demonstrativo' },
      { label: 'Entrega prevista', value: 'Dez 2027' },
    ],
    highlights: ['Varandas contínuas de 3 m', 'Brises em alumínio bronze', 'Lobby com pé-direito duplo', 'Piscina de raia de 25 m'],
    gallery: [
      { src: 'demo/night-tower.jpg', alt: 'Torre iluminada à noite (imagem demonstrativa)', caption: 'Fachada noturna' },
      { src: 'demo/detail-fins.jpg', alt: 'Detalhe dos brises em bronze (imagem demonstrativa)', caption: 'Detalhe dos brises' },
      { src: 'demo/detail-interior.jpg', alt: 'Living com forro de madeira (imagem demonstrativa)', caption: 'Living · unidade tipo' },
      { src: 'demo/detail-concrete.jpg', alt: 'Hall de entrada em concreto (imagem demonstrativa)', caption: 'Lobby' },
    ],
    typologies: [
      { name: 'Tipo', area: '180 m²', detail: '3 suítes · 3 vagas' },
      { name: 'Tipo ampliado', area: '240 m²', detail: '4 suítes · 4 vagas' },
      { name: 'Garden', area: '310 m²', detail: '4 suítes · terraço ajardinado' },
      { name: 'Cobertura duplex', area: '420 m²', detail: '4 suítes · piscina privativa' },
    ],
    video: '/media/demo/hero-loop.mp4',
    demo: true,
  },
  {
    slug: 'residencial-brise',
    name: 'Residencial Brise',
    tagline: 'Lâminas de madeira que respiram com a luz',
    category: 'Residencial',
    status: 'Em obras',
    year: '2026',
    location: { city: 'Curitiba', region: 'PR' },
    area: '14.200 m²',
    cover: 'demo/residence-louvers.jpg',
    coverAlt: 'Edifício residencial de nove pavimentos com brises de madeira (imagem demonstrativa)',
    summary: 'Nove pavimentos envoltos por painéis de madeira deslizantes que permitem a cada morador regular luz, ventilação e privacidade.',
    story: [
      { title: 'Envoltória ativa', text: 'Os painéis deslizantes transformam a fachada ao longo do dia, criando uma composição sempre diferente.' },
      { title: 'Lajes deslocadas', text: 'O deslocamento alternado das lajes cria varandas com sombra profunda e ritmo horizontal marcado.' },
    ],
    specs: [
      { label: 'Pavimentos', value: '9' },
      { label: 'Unidades', value: '36' },
      { label: 'Tipologias', value: '95 — 160 m²' },
      { label: 'Execução', value: '62%' },
    ],
    highlights: ['Painéis em madeira certificada', 'Ventilação cruzada', 'Rooftop ajardinado'],
    gallery: [
      { src: 'demo/detail-interior.jpg', alt: 'Interior com forro de madeira (imagem demonstrativa)', caption: 'Living' },
      { src: 'demo/detail-concrete.jpg', alt: 'Circulação em concreto (imagem demonstrativa)', caption: 'Circulação' },
    ],
    demo: true,
  },
  {
    slug: 'casa-espelho',
    name: 'Casa Espelho',
    tagline: 'Um volume suspenso sobre a água',
    category: 'Residencial',
    status: 'Entregue',
    year: '2023',
    location: { city: 'Nova Lima', region: 'MG' },
    area: '1.150 m²',
    cover: 'demo/pavilion.jpg',
    coverAlt: 'Residência com volume em balanço sobre espelho d’água ao pôr do sol (imagem demonstrativa)',
    summary: 'Residência unifamiliar com balanço estrutural de 14 metros, protendido, flutuando sobre um espelho d’água.',
    story: [
      { title: 'Estrutura', text: 'Uma viga-parede protendida permite que o volume superior avance 14 metros sem apoios intermediários.' },
      { title: 'Paisagem', text: 'O espelho d’água reflete o volume e resfria naturalmente o pavimento térreo.' },
    ],
    specs: [
      { label: 'Área construída', value: '1.150 m²' },
      { label: 'Balanço', value: '14 m' },
      { label: 'Terreno', value: '5.400 m²' },
    ],
    highlights: ['Balanço protendido de 14 m', 'Caixilhos minimalistas', 'Espelho d’água climatizante'],
    gallery: [
      { src: 'demo/detail-interior.jpg', alt: 'Living da residência (imagem demonstrativa)', caption: 'Living' },
      { src: 'demo/detail-concrete.jpg', alt: 'Escada em concreto (imagem demonstrativa)', caption: 'Escada' },
    ],
    demo: true,
  },
  {
    slug: 'sede-atlas',
    name: 'Sede Atlas',
    tagline: 'Grelha de concreto para um campus corporativo',
    category: 'Corporativo',
    status: 'Entregue',
    year: '2022',
    location: { city: 'São Paulo', region: 'SP' },
    area: '46.000 m²',
    cover: 'demo/corporate.jpg',
    coverAlt: 'Edifício corporativo com fachada em grelha profunda de concreto (imagem demonstrativa)',
    summary: 'Sede corporativa com fachada em grelha profunda de concreto pré-fabricado, que reduz a carga térmica em 30%.',
    story: [
      { title: 'Pré-fabricação', text: 'Mais de 1.800 peças de fachada produzidas em fábrica e montadas em 7 meses.' },
      { title: 'Espelho d’água', text: 'O lago frontal organiza o acesso e funciona como reservatório de reúso.' },
    ],
    specs: [
      { label: 'Área', value: '46.000 m²' },
      { label: 'Pavimentos', value: '7 + 12' },
      { label: 'Peças pré-fabricadas', value: '1.800' },
    ],
    highlights: ['Fachada pré-fabricada', 'Lajes de 1.400 m² sem pilares internos', 'Reúso de água'],
    gallery: [
      { src: 'demo/campus.jpg', alt: 'Vista aérea (imagem demonstrativa)', caption: 'Implantação' },
      { src: 'demo/detail-concrete.jpg', alt: 'Hall (imagem demonstrativa)', caption: 'Hall principal' },
    ],
    demo: true,
  },
  {
    slug: 'viaduto-vale-sereno',
    name: 'Viaduto Vale Sereno',
    tagline: 'Obra de arte especial com 900 m de extensão',
    category: 'Infraestrutura',
    status: 'Entregue',
    year: '2021',
    location: { city: 'Campinas', region: 'SP' },
    area: '900 m lineares',
    cover: 'demo/infrastructure.jpg',
    coverAlt: 'Viaduto de concreto com pilares duplos sob névoa (imagem demonstrativa)',
    summary: 'Viaduto em vigas pré-moldadas com pilares duplos a cada 52 metros, executado sem interrupção do tráfego local.',
    story: [
      { title: 'Método', text: 'Lançamento de vigas com treliça, reduzindo o impacto no vale e no tráfego.' },
      { title: 'Prazo', text: 'Execução em 14 meses com três frentes simultâneas.' },
    ],
    specs: [
      { label: 'Extensão', value: '900 m' },
      { label: 'Vãos', value: '52 m' },
      { label: 'Altura máxima', value: '34 m' },
    ],
    highlights: ['Vigas pré-moldadas', 'Tráfego mantido', '14 meses de execução'],
    gallery: [{ src: 'demo/industrial.jpg', alt: 'Canteiro industrial (imagem demonstrativa)', caption: 'Pátio de pré-moldados' }],
    demo: true,
  },
  {
    slug: 'campus-orion',
    name: 'Campus Orion',
    tagline: 'Nove pavilhões entre jardins',
    category: 'Corporativo',
    status: 'Entregue',
    year: '2020',
    location: { city: 'Florianópolis', region: 'SC' },
    area: '62.000 m²',
    cover: 'demo/campus.jpg',
    coverAlt: 'Vista aérea de nove edifícios baixos entre árvores (imagem demonstrativa)',
    summary: 'Campus de tecnologia com nove pavilhões conectados por passarelas sombreadas e coberturas verdes.',
    story: [{ title: 'Implantação', text: 'Os pavilhões seguem a topografia, preservando 70% da vegetação existente.' }],
    specs: [
      { label: 'Área', value: '62.000 m²' },
      { label: 'Pavilhões', value: '9' },
      { label: 'Cobertura verde', value: '18.000 m²' },
    ],
    highlights: ['Coberturas verdes', '70% de vegetação preservada'],
    gallery: [{ src: 'demo/corporate.jpg', alt: 'Edifício corporativo (imagem demonstrativa)', caption: 'Pavilhão central' }],
    demo: true,
  },
  {
    slug: 'polo-logistico-sul',
    name: 'Polo Logístico Sul',
    tagline: 'Infraestrutura industrial turn-key',
    category: 'Industrial',
    status: 'Em obras',
    year: '2026',
    location: { city: 'Porto Alegre', region: 'RS' },
    area: '120.000 m²',
    cover: 'demo/industrial.jpg',
    coverAlt: 'Complexo logístico com galpões e silos (imagem demonstrativa)',
    summary: 'Três galpões logísticos e quatro silos executados em regime EPC, com entrega faseada.',
    story: [{ title: 'Fases', text: 'Entrega em três fases para operação imediata do primeiro galpão.' }],
    specs: [
      { label: 'Área', value: '120.000 m²' },
      { label: 'Galpões', value: '3' },
      { label: 'Docas', value: '84' },
    ],
    highlights: ['Regime EPC', 'Entrega faseada'],
    gallery: [{ src: 'demo/infrastructure.jpg', alt: 'Viaduto de acesso (imagem demonstrativa)', caption: 'Acesso viário' }],
    demo: true,
  },
  {
    slug: 'mirante-noturno',
    name: 'Mirante 24',
    tagline: 'Hotel e residências em altura',
    category: 'Hotelaria',
    status: 'Lançamento',
    year: '2028',
    location: { city: 'Rio de Janeiro', region: 'RJ' },
    area: '28.000 m²',
    cover: 'demo/night-tower.jpg',
    coverAlt: 'Torre com janelas iluminadas à noite (imagem demonstrativa)',
    summary: 'Uso misto com hotel boutique nos primeiros pavimentos e residências com serviços acima.',
    story: [{ title: 'Uso misto', text: 'Acessos independentes e serviços hoteleiros compartilhados com as residências.' }],
    specs: [
      { label: 'Pavimentos', value: '24' },
      { label: 'Quartos', value: '120' },
      { label: 'Residências', value: '48' },
    ],
    highlights: ['Hotel boutique', 'Residências com serviços'],
    gallery: [{ src: 'demo/detail-interior.jpg', alt: 'Suíte (imagem demonstrativa)', caption: 'Suíte' }],
    demo: true,
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
