/**
 * ─────────────────────────────────────────────────────────────────────
 *  INSTITUTIONAL CONTENT (shared by every profile)
 *  Profile-specific copy overrides these values in content/profiles/*.ts
 *
 *  All data below is FICTITIOUS demo content. Replace before publishing.
 * ─────────────────────────────────────────────────────────────────────
 */
import type { SiteContent } from './schema';

export const base: SiteContent = {
  hero: {
    eyebrow: 'Nome da sua construtora aqui',
    title: ['Construção', 'do início à *entrega*'],
    subtitle:
      'Construímos condomínios, edifícios comerciais e instalações industriais. Planejamento, gestão de equipes e execução em cada etapa da obra.',
    primary: { label: 'Conheça nossas obras', to: 'projects' },
    secondary: { label: 'Solicitar orçamento', to: 'contact' },
    meta: [
      { label: 'Desde', value: '1998' },
      { label: 'Sede', value: 'São Paulo' },
      { label: 'Lat / Long', value: '23°33′S 46°39′O' },
    ],
    imageAlt: 'Torre residencial com lâminas horizontais e brises em bronze ao entardecer (imagem demonstrativa)',
  },

  manifesto: {
    eyebrow: 'Como construímos',
    statement:
      'Uma obra exige escopo definido, orçamento e uma sequência de execução. Antes de mobilizar o canteiro, planejamos equipes, materiais e serviços. Durante a construção, acompanhamos o avanço, verificamos as etapas e mantemos o contratante informado até a entrega.',
    signature: 'Nome do responsável aqui · Responsável técnico',
  },

  aboutIntro: {
    eyebrow: 'A empresa',
    title: ['Quem executa', 'sua *obra*'],
    lead: 'A Halden é uma construtora com atuação em condomínios residenciais, edifícios comerciais, instalações industriais e infraestrutura.',
    body: [
      'Nossa atuação reúne planejamento, contratação de serviços, compra de materiais e coordenação das equipes no canteiro. O trabalho segue os projetos e o escopo definido com o contratante.',
      'Relatórios e visitas técnicas permitem acompanhar a execução. Na entrega, proprietários e responsáveis pela operação recebem orientações de uso e manutenção, com atendimento de assistência técnica.',
    ],
    image: { src: 'demo/detail-fins.jpg', alt: 'Detalhe de fachada com brises verticais em bronze (imagem demonstrativa)' },
    imageSecondary: { src: 'demo/detail-concrete.jpg', alt: 'Interior em concreto aparente com luz zenital (imagem demonstrativa)' },
    facts: [
      { label: 'Fundação', value: '1998' },
      { label: 'Equipe técnica', value: '180 profissionais' },
      { label: 'Atuação', value: 'Sudeste e Sul' },
    ],
    cta: { label: 'Conheça nossa história', to: 'about' },
  },

  featuredProjects: {
    eyebrow: 'Obras selecionadas',
    title: ['Construções em', '*destaque*'],
    intro: 'Condomínios, residências e edifícios corporativos. Consulte as dimensões, os sistemas construtivos e o estágio de cada empreendimento.',
    slugs: ['torre-halden-norte', 'residencial-brise', 'casa-espelho', 'sede-atlas'],
    cta: { label: 'Todos os projetos', to: 'projects' },
  },

  portfolio: {
    eyebrow: 'Portfólio',
    title: ['Explore por', '*segmento*'],
    intro: 'Explore por categoria e consulte localização, áreas e estágio de cada projeto.',
    allLabel: 'Todos',
  },

  projectSpotlight: { eyebrow: 'Empreendimento em destaque', slug: 'torre-halden-norte' },

  services: {
    eyebrow: 'Especialidades',
    title: ['Do planejamento', 'à *entrega*'],
    intro: 'Organizamos orçamento, cronograma, suprimentos e execução para conduzir a construção conforme o escopo contratado.',
    items: [
      {
        title: 'Planejamento e orçamento',
        description: 'Levantamento de serviços, custos, etapas e necessidades do canteiro antes do início da execução.',
        tags: ['Orçamento', 'Cronograma', 'Logística'],
        image: { src: 'demo/campus.jpg', alt: 'Vista aérea de conjunto de edifícios (imagem demonstrativa)' },
      },
      {
        title: 'Construção',
        description: 'Coordenação das equipes de campo, dos fornecedores e das frentes de serviço, das fundações aos acabamentos.',
        tags: ['Planejamento', 'Qualidade', 'Segurança'],
        image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com brises de madeira (imagem demonstrativa)' },
      },
      {
        title: 'Engenharia',
        description: 'Acompanhamento técnico de fundações, estruturas e instalações, com verificação dos serviços executados.',
        tags: ['Estruturas', 'Fundações', 'BIM'],
        image: { src: 'demo/infrastructure.jpg', alt: 'Viaduto em concreto sob névoa (imagem demonstrativa)' },
      },
      {
        title: 'Coordenação de projetos',
        description: 'Análise conjunta dos projetos para identificar interferências e orientar os serviços antes da execução.',
        tags: ['Arquitetura', 'Instalações', 'Compatibilização'],
        image: { src: 'demo/detail-interior.jpg', alt: 'Sala com fachada envidraçada e forro de madeira (imagem demonstrativa)' },
      },
      {
        title: 'Entrega e assistência técnica',
        description: 'Assistência técnica, manuais do proprietário e acompanhamento da operação predial.',
        tags: ['Assistência', 'Manutenção'],
        image: { src: 'demo/corporate.jpg', alt: 'Sede corporativa com fachada em grelha de concreto (imagem demonstrativa)' },
      },
    ],
  },

  stats: {
    eyebrow: 'Em números',
    title: ['Nossa trajetória', 'em *números*'],
    items: [
      { value: 27, label: 'Anos de atuação', detail: '1998–2025' },
      { value: 1.8, decimals: 1, suffix: 'mi', label: 'm² construídos', detail: 'residencial e corporativo' },
      { value: 64, label: 'Empreendimentos entregues' },
      { value: 98, suffix: '%', label: 'Entregas no prazo', detail: 'últimos 10 anos' },
    ],
    note: 'Indicadores ilustrativos referentes a 2025 — substitua pelos dados reais da empresa.',
  },

  history: {
    eyebrow: 'Trajetória',
    title: ['Desde', '*1998*'],
    chapters: [
      {
        kicker: '1998 — 2006',
        title: 'Fundação e primeiras obras',
        text: 'A empresa inicia suas atividades na execução de construções residenciais. As primeiras equipes se dedicam aos serviços de campo e ao acompanhamento técnico das etapas.',
        image: { src: 'demo/pavilion.jpg', alt: 'Residência com volume em balanço sobre espelho d’água (imagem demonstrativa)' },
      },
      {
        kicker: '2007 — 2015',
        title: 'Verticalização',
        text: 'A construtora passa a executar condomínios verticais e amplia a coordenação de fornecedores. Fundações, estruturas, instalações e acabamentos integram o planejamento dos contratos.',
        image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com varandas e brises (imagem demonstrativa)' },
      },
      {
        kicker: '2016 — 2025',
        title: 'Escala e tecnologia',
        text: 'A execução de edifícios corporativos acompanha a ampliação da equipe técnica. Modelos digitais apoiam o levantamento de materiais e o planejamento das frentes de serviço.',
        image: { src: 'demo/hero-tower.jpg', alt: 'Torre residencial ao entardecer (imagem demonstrativa)' },
      },
    ],
  },

  timeline: {
    eyebrow: 'Linha do tempo',
    title: ['Etapas da', 'nossa *história*'],
    items: [
      { year: '1998', title: 'Fundação', text: 'Início das atividades de construção e acompanhamento técnico.' },
      { year: '2003', title: 'Novos contratos', text: 'Ampliação das equipes para a construção de edifícios residenciais.' },
      { year: '2009', title: 'Primeira torre', text: 'Entrega do primeiro edifício acima de 20 pavimentos.' },
      { year: '2014', title: 'Método integrado', text: 'Implantação de BIM em 100% dos projetos.' },
      { year: '2019', title: 'Novas praças', text: 'Abertura de escritórios regionais.' },
      { year: '2024', title: 'Construção industrializada', text: 'Linha própria de fachadas pré-fabricadas.' },
    ],
  },

  technology: {
    eyebrow: 'Tecnologia & inovação',
    title: ['Planejar', 'para *executar*'],
    intro: 'Modelos digitais apoiam o levantamento de materiais e a análise dos projetos antes da execução. No canteiro, o planejamento orienta a sequência dos serviços e o acompanhamento dos custos.',
    image: { src: 'demo/detail-fins.jpg', alt: 'Detalhe de brises metálicos (imagem demonstrativa)' },
    items: [
      { code: 'BIM·LOD 400', title: 'Modelagem integrada', text: 'Estrutura, tubulações e arquitetura são verificadas em conjunto antes de chegar ao canteiro.' },
      { code: '4D·5D', title: 'Planejamento e custos', text: 'As etapas de construção são ligadas ao orçamento para acompanhar prazos e necessidades de materiais.' },
      { code: 'PRÉ-FAB', title: 'Industrialização', text: 'Componentes produzidos em fábrica ajudam a padronizar medidas e reduzir cortes e ajustes no canteiro.' },
      { code: 'IOT', title: 'Canteiro monitorado', text: 'Sensores de concretagem e controle de acesso conectados à central de obra.' },
    ],
  },

  sustainability: {
    eyebrow: 'Sustentabilidade',
    title: ['Construir', 'com *responsabilidade*'],
    intro: 'Na construção, o cuidado ambiental envolve uso de água, controle de materiais e destinação de resíduos. A execução também incorpora os sistemas de proteção solar e reúso previstos nos projetos.',
    image: { src: 'demo/residence-louvers.jpg', alt: 'Fachada com brises de madeira para controle solar (imagem demonstrativa)' },
    figures: [
      { value: '−32%', label: 'consumo de energia*' },
      { value: '85%', label: 'resíduos reciclados*' },
      { value: '−40%', label: 'consumo de água*' },
    ],
    items: [
      { title: 'Proteção solar', text: 'Brises e vidros especificados conforme a orientação das fachadas para controlar a incidência de sol nos ambientes.' },
      { title: 'Resíduos da construção', text: 'Separação de materiais no canteiro para reaproveitamento e destinação adequada.' },
      { title: 'Água', text: 'Reúso de águas cinzas, captação pluvial e paisagismo de baixa irrigação.' },
    ],
    note: '* Metas ilustrativas para demonstração do template.',
  },

  differentiators: {
    eyebrow: 'Diferenciais construtivos',
    title: ['Gestão em', 'cada *etapa*'],
    items: [
      { title: 'Escopo e orçamento', text: 'Serviços, quantidades e custos são organizados para definir o que será executado e acompanhar as decisões do contrato.' },
      { title: 'Cronograma e equipes', text: 'A sequência dos serviços considera a disponibilidade de equipes, os acessos ao canteiro e a chegada dos materiais.' },
      { title: 'Compras e fornecedores', text: 'A contratação de serviços e a compra de materiais acompanham as especificações e as necessidades de cada frente de trabalho.' },
      { title: 'Controle da execução', text: 'Inspeções e registros de campo verificam os serviços antes da liberação das etapas seguintes.' },
      { title: 'Segurança no canteiro', text: 'A organização das frentes de serviço inclui orientação das equipes e cuidados com circulação, equipamentos e atividades simultâneas.' },
      { title: 'Acompanhamento da construção', text: 'Relatórios e visitas técnicas programadas permitem ao cliente acompanhar os serviços e as próximas etapas da execução.' },
    ],
  },

  certifications: {
    eyebrow: 'Prêmios & certificações',
    title: ['Referências', '*ilustrativas*'],
    intro: 'Esta seção demonstra a apresentação de prêmios e certificações. Os registros abaixo são ilustrativos e não comprovam qualificações da Halden.',
    items: [
      { year: '2025', name: 'Nome da certificação ambiental', issuer: 'Entidade certificadora', category: 'Sustentabilidade' },
      { year: '2024', name: 'Nome do prêmio de arquitetura', issuer: 'Instituição organizadora', category: 'Arquitetura' },
      { year: '2023', name: 'Certificação de gestão da qualidade', issuer: 'Organismo acreditado', category: 'Qualidade' },
      { year: '2022', name: 'Programa de qualidade na construção', issuer: 'Entidade setorial', category: 'Construção' },
    ],
    note: 'Conteúdo ilustrativo — não representa prêmios reais.',
  },

  partners: {
    eyebrow: 'Clientes & parceiros',
    title: ['Construir exige', '*colaboração*'],
    items: [
      { name: 'Nome do parceiro aqui' },
      { name: 'Nome do escritório aqui' },
      { name: 'Grupo Três' },
      { name: 'Quatro Engenharia' },
      { name: 'Cinco Capital' },
      { name: 'Estúdio Seis' },
      { name: 'Sete Materiais' },
      { name: 'Oito Fundações' },
    ],
    note: 'Nomes fictícios, usados apenas para ilustrar a apresentação de clientes e parceiros.',
  },

  gallery: {
    projectTitle: ['Construção', 'em *detalhe*'],
    eyebrow: 'Galeria',
    title: ['Estruturas', 'e *acabamentos*'],
    images: [
      { src: 'demo/detail-concrete.jpg', alt: 'Hall em concreto aparente com escada e luz zenital (imagem demonstrativa)', caption: 'Hall · concreto aparente' },
      { src: 'demo/pavilion.jpg', alt: 'Residência em balanço sobre espelho d’água ao pôr do sol (imagem demonstrativa)', caption: 'Residência · concreto e vidro' },
      { src: 'demo/detail-fins.jpg', alt: 'Brises verticais em bronze sob luz rasante (imagem demonstrativa)', caption: 'Fachada · brises em bronze' },
      { src: 'demo/detail-interior.jpg', alt: 'Living com forro de madeira e caixilhos pretos (imagem demonstrativa)', caption: 'Sala · forro de madeira' },
      { src: 'demo/night-tower.jpg', alt: 'Torre iluminada à noite (imagem demonstrativa)', caption: 'Fachada · vidro e metal' },
      { src: 'demo/corporate.jpg', alt: 'Edifício corporativo com grelha de concreto (imagem demonstrativa)', caption: 'Edifício · grelha de concreto' },
    ],
  },

  experience3d: {
    eyebrow: 'Experiência 3D',
    title: ['Explore', 'a *torre*'],
    intro: 'Explore a torre demonstrativa de 42 pavimentos. Gire o modelo e use o controle de camadas para visualizar a composição do edifício; as faixas indicam os usos dos pavimentos.',
    note: 'Arraste para girar · use a rolagem ou o gesto de pinça para aproximar · torre demonstrativa',
    fallbackAlt: 'Torre residencial com brises verticais (imagem demonstrativa)',
    totalFloors: 42,
    floors: [
      { from: 1, to: 2, label: 'Térreo & lazer', text: 'Lobby com pé-direito duplo, jardins e espaços de convivência.' },
      { from: 3, to: 34, label: 'Pavimentos tipo', text: 'Apartamentos de 180 a 240 m² com varandas contínuas.' },
      { from: 35, to: 40, label: 'Apartamentos com terraço', text: 'Unidades com terraços ajardinados e planta flexível.' },
      { from: 41, to: 42, label: 'Coberturas', text: 'Unidades duplex de 420 m² com piscina privativa.' },
    ],
    labels: {
      start: 'Iniciar experiência 3D',
      loading: 'Carregando cena',
      error: 'A experiência 3D não está disponível neste dispositivo.',
      day: 'Dia',
      night: 'Noite',
      views: { facade: 'Fachada', aerial: 'Aérea', street: 'Rua' },
      explode: 'Camadas',
      floors: 'Pavimentos',
    },
  },

  testimonials: {
    eyebrow: 'Depoimentos',
    title: ['Clientes', 'e *parceiros*'],
    items: [
      {
        quote: 'Depoimento ilustrativo. Este espaço pode apresentar a avaliação de um cliente sobre o acompanhamento da construção e a entrega do empreendimento.',
        author: 'Nome do cliente aqui',
        role: 'Cliente · Nome do empreendimento aqui',
      },
      {
        quote: 'Depoimento ilustrativo. Para uma empresa contratante, a avaliação envolve orçamento, etapas de execução e condições para iniciar a operação.',
        author: 'Nome do responsável aqui',
        role: 'Cargo · Nome da empresa aqui',
      },
      {
        quote: 'Depoimento ilustrativo. Este espaço pode apresentar a avaliação de um parceiro sobre a coordenação das equipes e dos serviços no canteiro.',
        author: 'Nome do parceiro aqui',
        role: 'Nome do escritório aqui',
      },
    ],
    note: 'Conteúdo ilustrativo · personalize os nomes e inclua apenas depoimentos reais e autorizados.',
  },

  locations: {
    eyebrow: 'Presença',
    title: ['Onde', '*construímos*'],
    intro: 'Conheça as regiões onde desenvolvemos e construímos nossos projetos. Os dados ilustrativos reúnem 64 entregas até 2025, além de empreendimentos em andamento.',
    items: [
      { city: 'São Paulo', region: 'SP', lat: -23.55, lng: -46.63, kind: 'Sede', detail: '36 entregas em SP, incluindo Campinas' },
      { city: 'Rio de Janeiro', region: 'RJ', lat: -22.91, lng: -43.17, kind: 'Escritório', detail: '15 entregas no RJ' },
      { city: 'Belo Horizonte', region: 'MG', lat: -19.92, lng: -43.94, kind: 'Escritório', detail: '12 entregas em MG, incluindo Nova Lima' },
      { city: 'Curitiba', region: 'PR', lat: -25.43, lng: -49.27, kind: 'Obra', detail: '2 obras em andamento' },
      { city: 'Florianópolis', region: 'SC', lat: -27.6, lng: -48.55, kind: 'Obra', detail: '1 entrega e 1 obra em andamento' },
      { city: 'Porto Alegre', region: 'RS', lat: -30.03, lng: -51.23, kind: 'Obra', detail: 'Polo Logístico Sul em andamento' },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: ['Qual é o seu', 'próximo *projeto*?'],
    intro: 'Precisa construir um condomínio, um edifício comercial ou uma instalação industrial? Conte onde será a obra e em que etapa estão os projetos. Essas informações ajudam a iniciar a análise de escopo e orçamento.',
    form: {
      enabled: true,
      channel: 'whatsapp',
      subjects: ['Construção de condomínios', 'Obras comerciais', 'Obras industriais e infraestrutura', 'Terrenos e incorporação', 'Assistência técnica e outros assuntos'],
      labels: {
        name: 'Nome',
        email: 'E-mail',
        phone: 'Telefone',
        subject: 'Assunto',
        message: 'Mensagem',
        submit: 'Continuar conversa',
        sent: 'Sua mensagem está pronta. Conclua o envio no WhatsApp ou no aplicativo de e-mail.',
      },
    },
  },

  pages: {
    projects: {
      eyebrow: 'Projetos',
      title: ['Obras e', '*empreendimentos*'],
      intro: 'Condomínios residenciais, edifícios corporativos, hotéis, instalações industriais e infraestrutura. Conheça também as construções residenciais e consulte o estágio de cada empreendimento.',
      image: { src: 'demo/campus.jpg', alt: 'Vista aérea de um campus corporativo (imagem demonstrativa)' },
    },
    about: {
      eyebrow: 'Sobre',
      title: ['Uma empresa,', 'diferentes *frentes*'],
      intro: 'Conheça a trajetória da construtora, sua atuação e as equipes responsáveis pelo planejamento e pela execução dos contratos.',
      image: { src: 'demo/detail-concrete.jpg', alt: 'Interior em concreto aparente (imagem demonstrativa)' },
    },
    contact: {
      eyebrow: 'Contato',
      title: ['Fale com', 'a *equipe*'],
      intro: 'Orçamentos de construção, terrenos e parcerias, além de atendimento de assistência técnica.',
    },
    notFound: {
      eyebrow: 'Erro 404',
      title: ['Página', '*não encontrada*'],
      intro: 'O endereço pode ter mudado ou a página foi removida.',
    },
  },

  footer: {
    statement: ['Vamos conversar', 'sobre sua *obra*'],
    description: 'Construtora com atuação em condomínios, edifícios comerciais, instalações industriais e infraestrutura. Planejamento, execução e assistência técnica.',
    legalName: 'Halden Construção e Incorporação (empresa fictícia)',
    demoNote: 'Template demonstrativo · Halden, dados, projetos e imagens são ilustrativos. Personalize nome, marca, contatos e informações da sua empresa.',
  },

  ui: {
    mainNavigation: 'Principal',
    pages: 'Páginas',
    opensNewTab: 'abre em nova aba',
    home: 'Início',
    projects: 'Projetos',
    breadcrumbs: 'Trilha de navegação',
    aboutProject: 'Sobre o projeto',
    projectGallery: 'Galeria do projeto',
    gallery: 'Galeria',
    projectFilm: 'Filme do projeto',
    typologies: 'Tipologias',
    projectDemo: 'Projeto demonstrativo · imagens geradas proceduralmente',
    projectInquiry: 'Olá! Tenho interesse no projeto {project}.',
    email: 'E-mail',
    phone: 'Telefone',
    address: 'Endereço',
    contact: 'Contato',
    chatNow: 'Conversar agora',
    validationError: 'Revise os campos indicados antes de continuar.',
    projectCount: 'projetos',
    filterCategory: 'Filtrar por categoria',
    number: 'Nº',
    project: 'Projeto',
    category: 'Categoria',
    recognition: 'Reconhecimento',
    issuer: 'Entidade',
    previousTestimonial: 'Depoimento anterior',
    nextTestimonial: 'Próximo depoimento',
    carousel: 'carrossel',
    enlargeImage: 'Ampliar imagem',
    expandedGallery: 'Galeria ampliada',
    previousImage: '← Anterior',
    nextImage: 'Próxima →',
    navigation: 'Navegação',
    footer: 'Rodapé',
    viewMap: 'Ver no mapa ↗',
    experienceControls: 'Controles da experiência 3D',
    views: 'Vistas',
    lighting: 'Iluminação',
    menu: 'Menu',
    close: 'Fechar',
    skip: 'Pular para o conteúdo',
    scroll: 'Role para explorar',
    viewProject: 'Ver projeto',
    allProjects: 'Todos os projetos',
    nextProject: 'Próximo projeto',
    onThisPage: 'Nesta página',
    whatsapp: 'WhatsApp',
    backHome: 'Voltar ao início',
    status: 'Status',
    location: 'Local',
    year: 'Ano',
    area: 'Área',
    illustrative: 'Conteúdo ilustrativo',
  },
};
