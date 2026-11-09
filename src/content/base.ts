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
      'Edifícios pensados para atravessar gerações — com rigor construtivo, desenho autoral e a calma das coisas bem resolvidas.',
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
      'Acreditamos que um edifício é uma promessa feita à cidade. Ele precisa ser preciso no detalhe, generoso no espaço e honesto nos materiais. Projetamos para a luz que entra às sete da manhã, para o silêncio de um corredor bem proporcionado e para o tempo, que é o único juiz da boa arquitetura.',
    signature: 'Diretoria de Arquitetura',
  },

  aboutIntro: {
    eyebrow: 'A empresa',
    title: ['Precisão', 'como *linguagem*'],
    lead: 'Somos uma construtora e incorporadora que trata cada obra como peça única: do estudo de massa ao último arremate de fachada.',
    body: [
      'Nossa equipe reúne arquitetos, engenheiros e especialistas em planejamento que trabalham em um único fluxo, do terreno à entrega das chaves.',
      'Essa integração reduz incertezas, protege prazos e permite que o desenho arquitetônico chegue intacto ao canteiro.',
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
    title: ['Índice de', '*projetos*'],
    intro: 'Filtre por categoria e explore cada empreendimento.',
    allLabel: 'Todos',
  },

  projectSpotlight: { eyebrow: 'Lançamento em destaque', slug: 'torre-halden-norte' },

  services: {
    eyebrow: 'Especialidades',
    title: ['Do terreno', 'à *chave*'],
    intro: 'Atuamos em todas as etapas do ciclo imobiliário, com equipes próprias e processos auditáveis.',
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
      { value: 27, label: 'Anos de atuação', detail: 'desde 1998' },
      { value: 1.8, decimals: 1, suffix: 'mi', label: 'm² construídos', detail: 'residencial e corporativo' },
      { value: 64, label: 'Empreendimentos entregues' },
      { value: 98, suffix: '%', label: 'Entregas no prazo', detail: 'últimos 10 anos' },
    ],
    note: 'Indicadores ilustrativos — substitua pelos dados reais da empresa.',
  },

  history: {
    eyebrow: 'Trajetória',
    title: ['Três décadas', 'de *obra*'],
    chapters: [
      {
        kicker: '1998 — 2006',
        title: 'Fundação e primeiras obras',
        text: 'A empresa nasce como um pequeno escritório de engenharia dedicado a residências unifamiliares, construindo reputação pela qualidade de execução.',
        image: { src: 'demo/pavilion.jpg', alt: 'Residência com volume em balanço sobre espelho d’água (imagem demonstrativa)' },
      },
      {
        kicker: '2007 — 2015',
        title: 'Verticalização',
        text: 'Os primeiros edifícios residenciais consolidam um método próprio de projeto integrado, unindo incorporação, arquitetura e construção.',
        image: { src: 'demo/residence-louvers.jpg', alt: 'Edifício residencial com varandas e brises (imagem demonstrativa)' },
      },
      {
        kicker: '2016 — hoje',
        title: 'Escala e tecnologia',
        text: 'Com BIM, planejamento 4D e certificações ambientais, a empresa amplia sua atuação para torres e empreendimentos corporativos.',
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
    title: ['Engenharia', 'em *camadas*'],
    intro: 'Cada edifício nasce primeiro como modelo digital. Antecipamos interferências, quantitativos e sequências de obra antes da primeira estaca.',
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
    title: ['O que não', 'se *negocia*'],
    items: [
      { title: 'Projeto integrado', text: 'Incorporação, arquitetura e engenharia sob a mesma coordenação, do estudo à entrega.' },
      { title: 'Pé-direito generoso', text: 'Proporções acima do padrão de mercado para luz natural e sensação de amplitude.' },
      { title: 'Materiais nobres', text: 'Especificação técnica rigorosa: pedras naturais, metais e madeira certificada.' },
      { title: 'Plantas flexíveis', text: 'Estrutura que permite personalização sem comprometer a engenharia.' },
      { title: 'Acústica', text: 'Lajes e esquadrias dimensionadas para conforto acústico real, medido em ensaio.' },
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
    title: ['Em boa', '*companhia*'],
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
    note: 'Nomes fictícios. Substitua pelos logotipos de parceiros autorizados (SVG em /public/partners).',
  },

  gallery: {
    eyebrow: 'Galeria',
    title: ['Luz, matéria', 'e *silêncio*'],
    images: [
      { src: 'demo/detail-concrete.jpg', alt: 'Hall em concreto aparente com escada e luz zenital (imagem demonstrativa)', caption: 'Hall · concreto aparente' },
      { src: 'demo/pavilion.jpg', alt: 'Residência em balanço sobre espelho d’água ao pôr do sol (imagem demonstrativa)', caption: 'Casa Espelho' },
      { src: 'demo/detail-fins.jpg', alt: 'Brises verticais em bronze sob luz rasante (imagem demonstrativa)', caption: 'Fachada · brises em bronze' },
      { src: 'demo/detail-interior.jpg', alt: 'Living com forro de madeira e caixilhos pretos (imagem demonstrativa)', caption: 'Living · forro em madeira' },
      { src: 'demo/night-tower.jpg', alt: 'Torre iluminada à noite (imagem demonstrativa)', caption: 'Torre Halden Norte' },
      { src: 'demo/corporate.jpg', alt: 'Edifício corporativo com grelha de concreto (imagem demonstrativa)', caption: 'Sede Atlas' },
    ],
  },

  experience3d: {
    eyebrow: 'Experiência 3D',
    title: ['Explore', 'a *torre*'],
    intro: 'Gire, aproxime e percorra os pavimentos da composição demonstrativa. Alterne entre dia e noite e revele as camadas construtivas.',
    totalFloors: 32,
    floors: [
      { from: 1, to: 2, label: 'Térreo & lazer', text: 'Lobby com pé-direito duplo, jardins e espaços de convivência.' },
      { from: 3, to: 24, label: 'Pavimentos tipo', text: 'Apartamentos de 180 a 240 m² com varandas contínuas.' },
      { from: 25, to: 30, label: 'Gardens', text: 'Unidades com terraços ajardinados e planta flexível.' },
      { from: 31, to: 32, label: 'Coberturas', text: 'Duplex com piscina privativa e vista de 360°.' },
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
    title: ['Relatos', 'de *quem vive*'],
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
        quote: 'Terceiro depoimento de exemplo. Este bloco aceita quantos relatos forem necessários e se adapta automaticamente.',
        author: 'Nome do parceiro',
        role: 'Escritório de arquitetura (exemplo)',
      },
    ],
    note: 'Depoimentos de exemplo — substitua por relatos reais e autorizados.',
  },

  locations: {
    eyebrow: 'Presença',
    title: ['Onde', '*construímos*'],
    intro: 'Escritórios e frentes de obra distribuídos pelas principais capitais do Sudeste e Sul.',
    items: [
      { city: 'São Paulo', region: 'SP', lat: -23.55, lng: -46.63, kind: 'Sede', detail: '18 obras entregues' },
      { city: 'Rio de Janeiro', region: 'RJ', lat: -22.91, lng: -43.17, kind: 'Escritório', detail: '9 obras entregues' },
      { city: 'Belo Horizonte', region: 'MG', lat: -19.92, lng: -43.94, kind: 'Escritório', detail: '6 obras entregues' },
      { city: 'Curitiba', region: 'PR', lat: -25.43, lng: -49.27, kind: 'Obra', detail: '2 obras em andamento' },
      { city: 'Florianópolis', region: 'SC', lat: -27.6, lng: -48.55, kind: 'Obra', detail: '1 obra em andamento' },
      { city: 'Porto Alegre', region: 'RS', lat: -30.03, lng: -51.23, kind: 'Obra', detail: 'Lançamento em breve' },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: ['Vamos', 'construir *juntos*'],
    intro: 'Conte sobre seu terreno, projeto ou interesse em nossos empreendimentos. Nossa equipe responde em até um dia útil.',
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
        sent: 'Abrimos seu aplicativo para concluir o envio.',
      },
    },
  },

  pages: {
    projects: {
      eyebrow: 'Projetos',
      title: ['Obras &', '*empreendimentos*'],
      intro: 'Residências, torres, sedes corporativas e infraestrutura — cada projeto com sua própria precisão.',
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
    statement: ['Arquitetura', 'que *permanece*'],
    demoNote: 'Template demonstrativo · empresa, dados e imagens fictícios gerados para apresentação.',
  },

  ui: {
    menu: 'Menu',
    close: 'Fechar',
    skip: 'Pular para o conteúdo',
    scroll: 'Role',
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
