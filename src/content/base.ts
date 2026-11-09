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
    eyebrow: 'Incorporação · Construção · Arquitetura',
    title: ['Arquitetura', 'que *permanece*'],
    subtitle:
      'Edifícios com desenho autoral, espaços bem dimensionados e materiais escolhidos para durar.',
    primary: { label: 'Ver empreendimentos', to: 'projects' },
    secondary: { label: 'Fale conosco', to: 'contact' },
    meta: [
      { label: 'Desde', value: '1998' },
      { label: 'Sede', value: 'São Paulo' },
      { label: 'Lat / Long', value: '23°33′S 46°39′O' },
    ],
    imageAlt: 'Torre residencial com lâminas horizontais e brises em bronze ao entardecer (imagem demonstrativa)',
  },

  manifesto: {
    eyebrow: 'Manifesto',
    statement:
      'Um edifício participa da cidade e da rotina de quem o utiliza. Por isso, articulamos implantação, luz natural e escolha de materiais desde os primeiros estudos. Cada decisão de projeto deve encontrar uma solução viável na construção.',
    signature: 'Diretoria de Arquitetura',
  },

  aboutIntro: {
    eyebrow: 'A empresa',
    title: ['Projeto', 'e *execução*'],
    lead: 'Reunimos incorporação e construção para desenvolver edifícios do estudo do terreno ao acabamento da fachada.',
    body: [
      'Arquitetos, engenheiros e especialistas em planejamento coordenam as etapas do estudo inicial à entrega.',
      'A coordenação entre equipes antecipa incompatibilidades e orienta a execução no canteiro.',
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
    eyebrow: 'Projetos selecionados',
    title: ['Obras que', 'definem *lugares*'],
    intro: 'Uma seleção de empreendimentos residenciais, corporativos e de infraestrutura.',
    slugs: ['torre-halden-norte', 'residencial-brise', 'casa-espelho', 'sede-atlas'],
    cta: { label: 'Todos os projetos', to: 'projects' },
  },

  portfolio: {
    eyebrow: 'Portfólio',
    title: ['Diferentes usos,', 'novas *soluções*'],
    intro: 'Selecione uma categoria para consultar a implantação, os materiais e os dados de cada projeto.',
    allLabel: 'Todos',
  },

  projectSpotlight: { eyebrow: 'Lançamento em destaque', slug: 'torre-halden-norte' },

  services: {
    eyebrow: 'Especialidades',
    title: ['Do terreno', 'à *chave*'],
    intro: 'Coordenamos viabilidade, projeto, execução e assistência técnica ao longo do ciclo imobiliário.',
    items: [
      {
        title: 'Incorporação',
        description: 'Estudos de viabilidade, aquisição de terrenos, aprovações e estruturação de produto.',
        tags: ['Viabilidade', 'Produto', 'Legal'],
        image: { src: 'demo/campus.jpg', alt: 'Vista aérea de conjunto de edifícios (imagem demonstrativa)' },
      },
      {
        title: 'Construção',
        description: 'Gestão de obra com planejamento 4D, controle de qualidade e segurança em cada frente.',
        tags: ['Planejamento', 'Qualidade', 'Segurança'],
        image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com brises de madeira (imagem demonstrativa)' },
      },
      {
        title: 'Engenharia',
        description: 'Soluções estruturais, fundações especiais e compatibilização de projetos complementares.',
        tags: ['Estruturas', 'Fundações', 'BIM'],
        image: { src: 'demo/infrastructure.jpg', alt: 'Viaduto em concreto sob névoa (imagem demonstrativa)' },
      },
      {
        title: 'Arquitetura & Interiores',
        description: 'Coordenação de projeto autoral, especificação de materiais e áreas comuns.',
        tags: ['Projeto', 'Materiais', 'Paisagismo'],
        image: { src: 'demo/detail-interior.jpg', alt: 'Sala com fachada envidraçada e forro de madeira (imagem demonstrativa)' },
      },
      {
        title: 'Pós-obra',
        description: 'Assistência técnica, manuais do proprietário e acompanhamento da operação predial.',
        tags: ['Assistência', 'Manutenção'],
        image: { src: 'demo/corporate.jpg', alt: 'Sede corporativa com fachada em grelha de concreto (imagem demonstrativa)' },
      },
    ],
  },

  stats: {
    eyebrow: 'Em números',
    title: ['Escala com', '*consistência*'],
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
        text: 'A empresa inicia suas atividades como escritório de engenharia dedicado a residências unifamiliares. Projeto e acompanhamento de campo formam a base da operação.',
        image: { src: 'demo/pavilion.jpg', alt: 'Residência com volume em balanço sobre espelho d’água (imagem demonstrativa)' },
      },
      {
        kicker: '2007 — 2015',
        title: 'Verticalização',
        text: 'Os primeiros edifícios residenciais consolidam um método próprio de projeto integrado, unindo incorporação, arquitetura e construção.',
        image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com varandas e brises (imagem demonstrativa)' },
      },
      {
        kicker: '2016 — 2025',
        title: 'Escala e tecnologia',
        text: 'A adoção de BIM e planejamento 4D acompanha a expansão para torres e edifícios corporativos. Modelos digitais passam a apoiar a coordenação das equipes.',
        image: { src: 'demo/hero-tower.jpg', alt: 'Torre residencial ao entardecer (imagem demonstrativa)' },
      },
    ],
  },

  timeline: {
    eyebrow: 'Linha do tempo',
    title: ['Marcos', '*construídos*'],
    items: [
      { year: '1998', title: 'Fundação', text: 'Início das atividades como escritório de engenharia.' },
      { year: '2003', title: 'Primeira incorporação', text: 'Lançamento do primeiro empreendimento próprio.' },
      { year: '2009', title: 'Primeira torre', text: 'Entrega do primeiro edifício acima de 20 pavimentos.' },
      { year: '2014', title: 'Método integrado', text: 'Implantação de BIM em 100% dos projetos.' },
      { year: '2019', title: 'Novas praças', text: 'Abertura de escritórios regionais.' },
      { year: '2024', title: 'Construção industrializada', text: 'Linha própria de fachadas pré-fabricadas.' },
    ],
  },

  technology: {
    eyebrow: 'Tecnologia & inovação',
    title: ['Planejar', 'para *executar*'],
    intro: 'Modelos digitais permitem verificar interferências, estimar quantidades e definir sequências de execução antes da mobilização do canteiro.',
    image: { src: 'demo/detail-fins.jpg', alt: 'Detalhe de brises metálicos (imagem demonstrativa)' },
    items: [
      { code: 'BIM·LOD 400', title: 'Modelagem integrada', text: 'Arquitetura, estrutura e instalações compatibilizadas em um único modelo federado.' },
      { code: '4D·5D', title: 'Planejamento e custos', text: 'Cronograma físico e orçamento vinculados ao modelo para decisões em tempo real.' },
      { code: 'PRÉ-FAB', title: 'Industrialização', text: 'Fachadas e banheiros pré-fabricados reduzem resíduos e variabilidade.' },
      { code: 'IOT', title: 'Canteiro monitorado', text: 'Sensores de concretagem e controle de acesso conectados à central de obra.' },
    ],
  },

  sustainability: {
    eyebrow: 'Sustentabilidade',
    title: ['Construir', 'com *responsabilidade*'],
    intro: 'Desempenho ambiental é decisão de projeto. Orientação solar, ventilação natural e materiais de baixo carbono fazem parte do desenho desde o primeiro traço.',
    image: { src: 'demo/residence-louvers.jpg', alt: 'Fachada com brises de madeira para controle solar (imagem demonstrativa)' },
    figures: [
      { value: '−32%', label: 'consumo de energia*' },
      { value: '85%', label: 'resíduos reciclados*' },
      { value: '−40%', label: 'consumo de água*' },
    ],
    items: [
      { title: 'Envoltória eficiente', text: 'Brises, vidros de controle solar e massa térmica dimensionados por simulação.' },
      { title: 'Canteiro circular', text: 'Segregação de resíduos, logística reversa e reaproveitamento de formas.' },
      { title: 'Água', text: 'Reúso de águas cinzas, captação pluvial e paisagismo de baixa irrigação.' },
    ],
    note: '* Metas ilustrativas para demonstração do template.',
  },

  differentiators: {
    eyebrow: 'Diferenciais construtivos',
    title: ['Decisões', 'de *projeto*'],
    items: [
      { title: 'Projeto integrado', text: 'Incorporação, arquitetura e engenharia sob a mesma coordenação, do estudo à entrega.' },
      { title: 'Pé-direito', text: 'Alturas definidas conforme o uso dos ambientes e a entrada de luz natural.' },
      { title: 'Materiais', text: 'Pedras, metais e madeira especificados conforme exposição, uso e manutenção.' },
      { title: 'Plantas flexíveis', text: 'Posição de pilares e instalações estudada para permitir diferentes arranjos internos.' },
      { title: 'Acústica', text: 'Lajes e esquadrias especificadas conforme os requisitos acústicos de cada ambiente.' },
      { title: 'Transparência', text: 'Relatórios de obra periódicos e acesso a visitas técnicas programadas.' },
    ],
  },

  certifications: {
    eyebrow: 'Prêmios & certificações',
    title: ['Reconhecimento', '*técnico*'],
    intro: 'Os itens abaixo são exemplos de formato. Liste apenas certificações e prêmios efetivamente obtidos.',
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
    title: ['Relações', 'de *trabalho*'],
    items: [
      { name: 'Parceiro Um' },
      { name: 'Atelier Dois' },
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
    projectTitle: ['Detalhes', 'e *materiais*'],
    eyebrow: 'Galeria',
    title: ['Espaços', 'e *materiais*'],
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
    intro: 'Gire, aproxime e percorra os pavimentos da composição demonstrativa. Alterne entre dia e noite e revele as camadas construtivas.',
    note: 'Arraste para girar · use a rolagem ou o gesto de pinça para aproximar · torre demonstrativa',
    fallbackAlt: 'Torre residencial com brises verticais (imagem demonstrativa)',
    totalFloors: 42,
    floors: [
      { from: 1, to: 2, label: 'Térreo & lazer', text: 'Lobby com pé-direito duplo, jardins e espaços de convivência.' },
      { from: 3, to: 34, label: 'Pavimentos tipo', text: 'Apartamentos de 180 a 240 m² com varandas contínuas.' },
      { from: 35, to: 40, label: 'Gardens', text: 'Unidades com terraços ajardinados e planta flexível.' },
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
    title: ['Experiências', '*compartilhadas*'],
    items: [
      {
        quote: 'Espaço reservado para um depoimento real e autorizado de cliente. Use relatos verificáveis sobre a experiência de compra, obra ou entrega.',
        author: 'Nome do cliente',
        role: 'Proprietário · Empreendimento (exemplo)',
      },
      {
        quote: 'Exemplo de depoimento corporativo. Descreva resultados concretos — prazo, qualidade, relacionamento — com autorização do cliente.',
        author: 'Nome do executivo',
        role: 'Cargo · Empresa cliente (exemplo)',
      },
      {
        quote: 'Espaço para um depoimento autorizado de parceiro sobre a coordenação de projetos e o trabalho entre equipes.',
        author: 'Nome do parceiro',
        role: 'Escritório de arquitetura (exemplo)',
      },
    ],
    note: 'Depoimentos de exemplo — substitua por relatos reais e autorizados.',
  },

  locations: {
    eyebrow: 'Presença',
    title: ['Onde', '*construímos*'],
    intro: 'Presença ilustrativa no Sudeste e no Sul. As entregas somam 64 empreendimentos até 2025; os demais registros indicam frentes em andamento.',
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
    title: ['Vamos', 'construir *juntos*'],
    intro: 'Informe o assunto, a localização e a etapa do projeto. Para consultar um empreendimento, inclua o nome na mensagem.',
    form: {
      enabled: true,
      channel: 'whatsapp',
      subjects: ['Empreendimentos', 'Terrenos e parcerias', 'Obras corporativas', 'Imprensa', 'Outros assuntos'],
      labels: {
        name: 'Nome',
        email: 'E-mail',
        phone: 'Telefone',
        subject: 'Assunto',
        message: 'Mensagem',
        submit: 'Enviar mensagem',
        sent: 'Continue no WhatsApp ou no aplicativo de e-mail para enviar sua mensagem.',
      },
    },
  },

  pages: {
    projects: {
      eyebrow: 'Projetos',
      title: ['Obras &', '*empreendimentos*'],
      intro: 'Residências, edifícios corporativos e infraestrutura em diferentes cidades e escalas.',
      image: { src: 'demo/campus.jpg', alt: 'Vista aérea de um campus corporativo (imagem demonstrativa)' },
    },
    about: {
      eyebrow: 'Sobre',
      title: ['Uma empresa', 'feita de *obra*'],
      intro: 'Desde 1998 unindo incorporação, arquitetura e engenharia sob a mesma visão.',
      image: { src: 'demo/detail-concrete.jpg', alt: 'Interior em concreto aparente (imagem demonstrativa)' },
    },
    contact: {
      eyebrow: 'Contato',
      title: ['Fale com', 'a *equipe*'],
      intro: 'Atendimento comercial, parcerias e imprensa.',
    },
    notFound: {
      eyebrow: 'Erro 404',
      title: ['Página', '*não encontrada*'],
      intro: 'O endereço pode ter mudado ou a página foi removida.',
    },
  },

  footer: {
    statement: ['Cada detalhe,', 'uma *decisão*'],
    demoNote: 'Template demonstrativo · empresa, dados e imagens fictícios gerados para apresentação.',
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
