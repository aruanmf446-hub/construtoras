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
    eyebrow: 'Nome da sua incorporadora aqui',
    title: ['Arquitetura', 'que *permanece*'],
    subtitle:
      'Residências com varandas amplas, luz natural e plantas que permitem diferentes formas de morar.',
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
      'Escolher onde morar é pensar em como você quer passar os seus dias. Na luz da sala, no espaço para receber e na privacidade dos quartos. Nossos projetos começam nessas escolhas e tomam forma na planta, nos materiais e na relação com a rua.',
    signature: 'Nome do responsável aqui · Arquitetura',
  },

  aboutIntro: {
    eyebrow: 'A empresa',
    title: ['Quem constrói', 'seu *endereço*'],
    lead: 'A Halden reúne incorporação e construção para acompanhar cada empreendimento da escolha do terreno à entrega das chaves.',
    body: [
      'Arquitetos e engenheiros trabalham juntos para que a planta, a estrutura e os acabamentos atendam ao uso dos espaços.',
      'Durante a construção, o cliente acompanha o andamento por relatórios e visitas técnicas programadas. Após a entrega, conta com assistência técnica e orientações de manutenção.',
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
    title: ['Conheça nossos', '*endereços*'],
    intro: 'De apartamentos com varandas contínuas a uma casa em balanço: conheça os projetos e veja como cada um organiza seus espaços.',
    slugs: ['torre-halden-norte', 'residencial-brise', 'casa-espelho', 'sede-atlas'],
    cta: { label: 'Todos os projetos', to: 'projects' },
  },

  portfolio: {
    eyebrow: 'Portfólio',
    title: ['Escolha o que', 'quer *conhecer*'],
    intro: 'Explore por categoria e consulte localização, áreas e estágio de cada projeto.',
    allLabel: 'Todos',
  },

  projectSpotlight: { eyebrow: 'Lançamento em destaque', slug: 'torre-halden-norte' },

  services: {
    eyebrow: 'Especialidades',
    title: ['Do terreno', 'à *chave*'],
    intro: 'Do estudo do terreno ao atendimento após a entrega, reunimos as equipes responsáveis por desenvolver e construir cada empreendimento.',
    items: [
      {
        title: 'Incorporação',
        description: 'Análise do terreno, definição do empreendimento e aprovações necessárias para viabilizar o projeto.',
        tags: ['Terrenos', 'Viabilidade', 'Aprovações'],
        image: { src: 'demo/campus.jpg', alt: 'Vista aérea de conjunto de edifícios (imagem demonstrativa)' },
      },
      {
        title: 'Construção',
        description: 'Planejamento das etapas, contratação de fornecedores e acompanhamento dos serviços até a entrega.',
        tags: ['Planejamento', 'Qualidade', 'Segurança'],
        image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com brises de madeira (imagem demonstrativa)' },
      },
      {
        title: 'Engenharia',
        description: 'Coordenação de estrutura e instalações para conciliar segurança, uso dos ambientes e manutenção.',
        tags: ['Estruturas', 'Fundações', 'BIM'],
        image: { src: 'demo/infrastructure.jpg', alt: 'Viaduto em concreto sob névoa (imagem demonstrativa)' },
      },
      {
        title: 'Arquitetura & Interiores',
        description: 'Desenho dos ambientes, escolha de acabamentos e integração das áreas comuns ao conjunto.',
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
    title: ['Etapas da', 'nossa *história*'],
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
    intro: 'Antes de construir, reunimos arquitetura, estrutura e instalações em modelos digitais. Isso permite identificar conflitos entre os projetos e planejar materiais, custos e etapas de execução.',
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
    intro: 'Proteção contra o sol, ventilação e uso da água entram no projeto desde o início. São escolhas que influenciam o conforto dos ambientes e o consumo durante o uso do edifício.',
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
    title: ['O que faz', '*diferença*'],
    items: [
      { title: 'Varandas para usar', text: 'Na Torre Halden Norte, varandas contínuas de 3 metros ampliam o espaço para estar e receber.' },
      { title: 'Luz na medida', text: 'Brises e painéis móveis filtram a luz e ajudam a preservar a privacidade dos ambientes.' },
      { title: 'Materiais e manutenção', text: 'A escolha de acabamentos considera o desgaste do uso e os cuidados necessários ao longo do tempo.' },
      { title: 'Plantas flexíveis', text: 'Na Torre Halden Norte, pilares nas bordas da planta permitem diferentes arranjos para os ambientes internos.' },
      { title: 'Conforto acústico', text: 'A especificação de lajes e esquadrias considera os ruídos entre ambientes e os sons que vêm da rua.' },
      { title: 'Acompanhamento da construção', text: 'Relatórios e visitas técnicas programadas permitem acompanhar as etapas antes da entrega das chaves.' },
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
    projectTitle: ['Detalhes', 'e *materiais*'],
    eyebrow: 'Galeria',
    title: ['Veja mais', 'de *perto*'],
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
    intro: 'Veja a organização dos 42 pavimentos da torre demonstrativa. Gire o modelo, aproxime a fachada e selecione as faixas para conhecer os tipos de apartamento.',
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
        quote: 'Depoimento ilustrativo. Em uma compra, informações claras sobre a planta, o andamento da construção e a entrega ajudam o cliente a avaliar sua escolha.',
        author: 'Nome do cliente aqui',
        role: 'Cliente · Nome do empreendimento aqui',
      },
      {
        quote: 'Depoimento ilustrativo. Para uma empresa contratante, a avaliação envolve orçamento, etapas de execução e condições para iniciar a operação.',
        author: 'Nome do responsável aqui',
        role: 'Cargo · Nome da empresa aqui',
      },
      {
        quote: 'Depoimento ilustrativo. Na parceria de projeto, a avaliação envolve decisões bem documentadas e coordenação entre arquitetura e engenharia.',
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
    title: ['Qual é o seu', 'próximo *endereço*?'],
    intro: 'Quer saber mais sobre um empreendimento? Conte qual chamou sua atenção e o que você procura em um imóvel. Nossa equipe pode orientar a consulta às áreas e características do projeto.',
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
        submit: 'Continuar conversa',
        sent: 'Sua mensagem está pronta. Conclua o envio no WhatsApp ou no aplicativo de e-mail.',
      },
    },
  },

  pages: {
    projects: {
      eyebrow: 'Projetos',
      title: ['Encontre seu', 'próximo *endereço*'],
      intro: 'Conheça os empreendimentos residenciais e os demais projetos da Halden. Compare áreas, cidades e soluções de arquitetura.',
      image: { src: 'demo/campus.jpg', alt: 'Vista aérea de um campus corporativo (imagem demonstrativa)' },
    },
    about: {
      eyebrow: 'Sobre',
      title: ['Antes do imóvel,', 'a *confiança*'],
      intro: 'Conheça a trajetória da Halden e as equipes que participam do desenvolvimento e da construção de cada empreendimento.',
      image: { src: 'demo/detail-concrete.jpg', alt: 'Interior em concreto aparente (imagem demonstrativa)' },
    },
    contact: {
      eyebrow: 'Contato',
      title: ['Fale com', 'a *equipe*'],
      intro: 'Informações sobre imóveis, terrenos e parcerias com a Halden.',
    },
    notFound: {
      eyebrow: 'Erro 404',
      title: ['Página', '*não encontrada*'],
      intro: 'O endereço pode ter mudado ou a página foi removida.',
    },
  },

  footer: {
    statement: ['Conheça seu', 'próximo *endereço*'],
    demoNote: 'Template personalizável · Halden é uma marca fictícia. Use o nome, o logotipo, os contatos e os dados da sua empresa.',
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
