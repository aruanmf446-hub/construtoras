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
      'Torre residencial de 42 pavimentos em São Paulo, com varandas contínuas protegidas por brises de alumínio em tom bronze.',
    story: [
      { title: 'Conceito', text: 'As lajes formam varandas contínuas ao redor da torre. Brises verticais de alumínio anodizado em tom bronze filtram o sol da tarde.' },
      { title: 'Implantação', text: 'Os jardins ocupam 60% do terreno. Uma praça faz a transição entre a rua e o hall de entrada com pé-direito duplo.' },
      { title: 'Interiores', text: 'Os apartamentos tipo têm plantas de 180 a 240 m². Pilares periféricos permitem diferentes arranjos dos ambientes internos.' },
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
      { src: 'demo/night-tower.jpg', alt: 'Torre iluminada à noite (imagem demonstrativa)', caption: 'Fachada · vidro e metal' },
      { src: 'demo/detail-fins.jpg', alt: 'Detalhe dos brises em bronze (imagem demonstrativa)', caption: 'Fachada · brises de alumínio' },
      { src: 'demo/detail-interior.jpg', alt: 'Living com forro de madeira (imagem demonstrativa)', caption: 'Sala · forro de madeira' },
      { src: 'demo/detail-concrete.jpg', alt: 'Hall de entrada em concreto (imagem demonstrativa)', caption: 'Hall · concreto aparente' },
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
    tagline: 'Brises móveis de madeira para controle solar',
    category: 'Residencial',
    status: 'Em obras',
    year: '2026',
    location: { city: 'Curitiba', region: 'PR' },
    area: '14.200 m²',
    cover: 'demo/residence-louvers.jpg',
    coverAlt: 'Edifício residencial de nove pavimentos com brises de madeira (imagem demonstrativa)',
    summary: 'Edifício residencial de nove pavimentos em Curitiba, com painéis deslizantes de madeira para regular luz e privacidade.',
    story: [
      { title: 'Envoltória ativa', text: 'Os painéis de madeira deslizam diante das aberturas. Cada morador pode ajustar o sombreamento e a privacidade dos ambientes.' },
      { title: 'Lajes deslocadas', text: 'As lajes alternam sua posição entre os pavimentos. Esse deslocamento cria varandas sombreadas e marca as linhas horizontais da fachada.' },
    ],
    specs: [
      { label: 'Pavimentos', value: '9' },
      { label: 'Unidades', value: '36' },
      { label: 'Tipologias', value: '95 — 160 m²' },
      { label: 'Execução', value: '62%' },
    ],
    highlights: ['Painéis em madeira certificada', 'Ventilação cruzada', 'Rooftop ajardinado'],
    gallery: [
      { src: 'demo/detail-interior.jpg', alt: 'Interior com forro de madeira (imagem demonstrativa)', caption: 'Sala · forro de madeira' },
      { src: 'demo/detail-concrete.jpg', alt: 'Circulação em concreto (imagem demonstrativa)', caption: 'Circulação · concreto aparente' },
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
    summary: 'Residência unifamiliar em Nova Lima, com volume em balanço de 14 metros sobre um espelho d’água.',
    story: [
      { title: 'Estrutura', text: 'Uma viga-parede protendida sustenta o volume superior. A solução permite um balanço de 14 metros sem apoios intermediários.' },
      { title: 'Paisagem', text: 'O espelho d’água acompanha a projeção do volume superior. As superfícies envidraçadas conectam os ambientes internos ao jardim.' },
    ],
    specs: [
      { label: 'Área construída', value: '1.150 m²' },
      { label: 'Balanço', value: '14 m' },
      { label: 'Terreno', value: '5.400 m²' },
    ],
    highlights: ['Balanço protendido de 14 m', 'Caixilhos minimalistas', 'Espelho d’água junto ao térreo'],
    gallery: [
      { src: 'demo/detail-interior.jpg', alt: 'Sala com forro de madeira e fachada envidraçada (imagem demonstrativa)', caption: 'Sala · forro de madeira' },
      { src: 'demo/detail-concrete.jpg', alt: 'Escada em concreto (imagem demonstrativa)', caption: 'Escada · concreto aparente' },
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
    summary: 'Sede corporativa em São Paulo, com grelha de concreto pré-fabricado que sombreia as superfícies envidraçadas.',
    story: [
      { title: 'Pré-fabricação', text: 'A fachada reúne 1.800 peças de concreto produzidas em fábrica. A montagem dos elementos foi organizada em sete meses.' },
      { title: 'Espelho d’água', text: 'O espelho d’água frontal acompanha o percurso de entrada. Um reservatório de reúso integra o sistema hidráulico do conjunto.' },
    ],
    specs: [
      { label: 'Área', value: '46.000 m²' },
      { label: 'Pavimentos', value: '7 + 12' },
      { label: 'Peças pré-fabricadas', value: '1.800' },
    ],
    highlights: ['Fachada pré-fabricada', 'Lajes de 1.400 m² sem pilares internos', 'Reúso de água'],
    gallery: [
      { src: 'demo/campus.jpg', alt: 'Vista aérea de edifícios baixos entre árvores (imagem demonstrativa)', caption: 'Edifícios · concreto e vidro' },
      { src: 'demo/detail-concrete.jpg', alt: 'Hall com escada em concreto aparente (imagem demonstrativa)', caption: 'Hall · concreto aparente' },
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
    summary: 'Viaduto de 900 metros em Campinas, com vigas pré-moldadas e execução planejada para manter o tráfego local.',
    story: [
      { title: 'Método', text: 'As vigas pré-moldadas são lançadas com treliça. O método reduz a necessidade de apoios provisórios no vale.' },
      { title: 'Prazo', text: 'A execução foi dividida em três frentes simultâneas. O cronograma demonstrativo prevê 14 meses de trabalho.' },
    ],
    specs: [
      { label: 'Extensão', value: '900 m' },
      { label: 'Vãos', value: '52 m' },
      { label: 'Altura máxima', value: '34 m' },
    ],
    highlights: ['Vigas pré-moldadas', 'Tráfego mantido', '14 meses de execução'],
    gallery: [{ src: 'demo/industrial.jpg', alt: 'Canteiro industrial (imagem demonstrativa)', caption: 'Complexo industrial · metal' }],
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
    summary: 'Campus de tecnologia em Florianópolis, com nove pavilhões ligados por passarelas sombreadas e coberturas verdes.',
    story: [{ title: 'Implantação', text: 'Os pavilhões acompanham a topografia do terreno. A implantação demonstrativa prevê preservar 70% da vegetação existente.' }],
    specs: [
      { label: 'Área', value: '62.000 m²' },
      { label: 'Pavilhões', value: '9' },
      { label: 'Cobertura verde', value: '18.000 m²' },
    ],
    highlights: ['Coberturas verdes', '70% de vegetação preservada'],
    gallery: [{ src: 'demo/corporate.jpg', alt: 'Edifício corporativo (imagem demonstrativa)', caption: 'Edifício · grelha de concreto' }],
    demo: true,
  },
  {
    slug: 'polo-logistico-sul',
    name: 'Polo Logístico Sul',
    tagline: 'Complexo logístico com entrega por etapas',
    category: 'Industrial',
    status: 'Em obras',
    year: '2026',
    location: { city: 'Porto Alegre', region: 'RS' },
    area: '120.000 m²',
    cover: 'demo/industrial.jpg',
    coverAlt: 'Complexo logístico com galpões e silos (imagem demonstrativa)',
    summary: 'Complexo logístico em Porto Alegre, com três galpões e quatro silos executados em regime EPC e entregues por etapas.',
    story: [{ title: 'Fases', text: 'A execução está organizada em três etapas. A primeira entrega permite iniciar a operação de um galpão enquanto os demais são concluídos.' }],
    specs: [
      { label: 'Área', value: '120.000 m²' },
      { label: 'Galpões', value: '3' },
      { label: 'Docas', value: '84' },
    ],
    highlights: ['Regime EPC', 'Entrega faseada'],
    gallery: [{ src: 'demo/infrastructure.jpg', alt: 'Viaduto de acesso (imagem demonstrativa)', caption: 'Viaduto · concreto' }],
    demo: true,
  },
  {
    slug: 'mirante-noturno',
    name: 'Mirante 24',
    tagline: 'Hotel e residências em 24 pavimentos',
    category: 'Hotelaria',
    status: 'Lançamento',
    year: '2028',
    location: { city: 'Rio de Janeiro', region: 'RJ' },
    area: '28.000 m²',
    cover: 'demo/night-tower.jpg',
    coverAlt: 'Torre com janelas iluminadas à noite (imagem demonstrativa)',
    summary: 'Edifício de uso misto de 24 pavimentos no Rio de Janeiro, com hotel nos andares inferiores e residências com serviços nos superiores.',
    story: [{ title: 'Uso misto', text: 'Hotel e residências têm acessos independentes. Os moradores podem utilizar os serviços hoteleiros previstos para o conjunto.' }],
    specs: [
      { label: 'Pavimentos', value: '24' },
      { label: 'Quartos', value: '120' },
      { label: 'Residências', value: '48' },
    ],
    highlights: ['Hotel boutique', 'Residências com serviços'],
    gallery: [{ src: 'demo/detail-interior.jpg', alt: 'Sala envidraçada com forro de madeira (imagem demonstrativa)', caption: 'Sala · forro de madeira' }],
    demo: true,
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
