# Architecture Experience — template white-label para construtoras

Site estático (Astro + TypeScript + GSAP + Three.js) para construtoras, incorporadoras e empresas de engenharia. Toda a identidade, o conteúdo e a composição de seções ficam em arquivos de configuração: para entregar a um novo cliente você não precisa mexer nos componentes.

> O conteúdo de demonstração é **fictício**: a empresa "Halden", os projetos, os números, os depoimentos e as certificações são exemplos. As imagens foram geradas proceduralmente (`scripts/demo-assets`). Substitua tudo antes de publicar e defina `demo: false`.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + build estático em /dist
npm run preview
```

Requer Node 22.23+ (versão exigida pelo Astro 7; veja `.nvmrc`). Em Cloudflare Pages/Vercel, defina a variável `NODE_VERSION=22` ou a versão de Node do projeto.

---

## Onde fica cada coisa

| O quê | Arquivo |
| --- | --- |
| Marca, contatos, SEO, modo do hero, 3D, motion | `src/config/site.config.ts` |
| Cores, fontes, escala tipográfica, animação (design tokens) | `src/config/theme.config.ts` |
| Seções ligadas/desligadas, ordem, páginas | `src/config/sections.config.ts` |
| Composição padrão de cada perfil comercial | `src/config/profiles.ts` |
| Textos institucionais | `src/content/base.ts` |
| Textos específicos de cada perfil | `src/content/profiles/*.ts` |
| Projetos (geram `/projetos/<slug>`) | `src/content/projects.ts` |
| Imagens (otimizadas no build) | `src/assets/media/` |
| Vídeos, logos, favicon, modelos 3D | `public/media`, `public/brand`, `public/models` |
| Fontes | `src/styles/fonts.css` |

Componentes de interface ficam em `src/components`, as seções em `src/sections`, os templates de página em `src/templates` e as animações em `src/scripts`. Nenhum dado de cliente fica dentro deles.

---

## 1. Alterar a marca

Em `src/config/site.config.ts` → `identity`:

- `name`, `legalName`, `tagline`, `description`, `segment`, `foundingYear`
- `logo.onDark` / `logo.onLight`: SVGs em `public/brand/` (versão clara para fundos escuros, escura para fundos claros). Ajuste `width`/`height` com as proporções do arquivo.
- `logo.mark`: símbolo compacto usado na navegação flutuante.
- Com `null` nos logos, o site usa o nome em tipografia (wordmark).
- `favicon`: `public/brand/favicon.svg`. Substitua também `apple-touch-icon.png` (180×180).

## 2. Modificar a paleta de cores

Em `src/config/theme.config.ts` há três presets: `graphite` (escuro quente), `travertine` (claro) e `nocturne` (escuro frio com títulos serifados). Para trocar:

1. escolha o preset em `site.config.ts` → `theme: 'travertine'`; **ou**
2. duplique um preset, renomeie e edite `color`.

Cada token vira uma CSS variable (`--color-bg`, `--color-accent`, `--font-display`, `--motion-ease`, etc.). Os tokens mais importantes são `bg`, `ink`, `accent` e `scrim`. O `scrim` é a película sobre fotos que garante contraste do texto.

Ainda no tema: `shape.radius` (cantos, `0px` por padrão), `image.filter` (tratamento das fotos), `image.grain` (granulação; `0` desliga) e `motion.intensity` (amplitude das animações).

## 3. Substituir fontes

As fontes são servidas pelo próprio site, sem requisições externas.

1. Instale: `npm i @fontsource-variable/<fonte>` (ou `@fontsource/<fonte>`).
2. Importe em `src/styles/fonts.css` e remova os imports antigos.
3. Atualize `font.display`, `font.serif`, `font.body` e `font.mono` no tema.

`displayStretch` controla a largura de fontes variáveis com eixo `wdth`. Com fontes sem esse eixo, use `100%`. `displayTransform: 'none'` desliga a caixa-alta dos títulos.

## 4. Trocar imagens e vídeos

- **Imagens**: coloque em `src/assets/media/` (subpastas são permitidas) e referencie pelo caminho relativo, por exemplo `'cliente/fachada.jpg'`. O build gera WebP responsivo e o fallback JPG. Envie arquivos com pelo menos 2400 px de largura para imagens de tela cheia.
- **Hero** (`site.config.ts → hero`): `image`, `imageMobile` (recorte vertical opcional) e `video.mp4`/`video.webm` em `public/media/`.
- **Modo do hero**: `hero.mode` aceita `'image'`, `'video'` ou `'webgl'`. A estrutura é a mesma nos três. Se não houver vídeo, o modo vídeo exibe a imagem. Sem WebGL, ou com movimento reduzido, o modo WebGL também exibe a imagem.
- **Imagem de compartilhamento**: `seo.ogImage`. Cada projeto usa a própria capa.
- Remova `src/assets/media/demo` e `public/media/demo` quando não precisar mais delas.

## 5. Editar textos e informações

- Contatos, endereço, WhatsApp, redes sociais e SEO ficam em `site.config.ts`.
- Os textos de cada seção ficam em `src/content/base.ts`. Nos títulos, cada item do array é uma linha, e `*palavra*` aplica a fonte de destaque (itálico serifado).
- Os textos que mudam conforme o perfil ficam em `src/content/profiles/<perfil>.ts`. Escreva lá apenas o que difere do `base.ts`.
- `site.demo = false` remove os avisos de "conteúdo ilustrativo".

## 6. Adicionar ou excluir projetos

Em `src/content/projects.ts`, cada objeto é um projeto e gera `/projetos/<slug>/` automaticamente. Campos opcionais: `coverPortrait`, `typologies`, `video` e `model` (um `.glb` próprio para a experiência 3D na página do projeto).

Os projetos destacados na home ficam em `content.featuredProjects.slugs`, e o lançamento em destaque em `content.projectSpotlight.slug`. Listas, filtros, navegação e "próximo projeto" se ajustam a qualquer quantidade, inclusive zero.

## 7. Habilitar ou remover seções

Em `src/config/sections.config.ts` → `sections`:

```ts
testimonials: { enabled: false, navLabel: 'Depoimentos', anchor: 'depoimentos' },
```

Uma seção desativada (ou sem conteúdo) some de todas as páginas, da numeração (01, 02…) e do índice da navegação. As animações de cada seção ficam dentro do próprio componente, então desativar uma seção não quebra as demais.

Para desativar uma página inteira, use `pages.<pagina>.enabled = false`. A rota deixa de ser gerada e todos os links que apontavam para ela são resolvidos para outra opção (âncora, e-mail) ou removidos.

Seções disponíveis: `hero`, `manifesto`, `about-intro`, `featured-projects`, `portfolio`, `project-details`, `services`, `stats`, `history`, `timeline`, `technology`, `sustainability`, `differentiators`, `certifications`, `partners`, `gallery`, `experience-3d`, `testimonials`, `locations`, `contact`.

## 8. Alterar a ordem das seções

Cada página usa a lista do perfil ativo (`src/config/profiles.ts`). Para personalizar, substitua o array em `sections.config.ts`:

```ts
home: { enabled: true, path: '/', navLabel: 'Início', inNav: true,
        sections: ['hero', 'stats', { id: 'portfolio', variant: 'mosaic' }, 'contact'] },
```

Variantes: `portfolio` aceita `'index'` ou `'mosaic'`, e `project-details` aceita `'spotlight'` ou `'full'`.

**Perfis comerciais** (`site.config.ts → profile`):

- `developer`: incorporadora (empreendimentos, arquitetura, estilo de vida)
- `institutional`: construtora institucional (trajetória, capacidade técnica, autoridade)
- `engineering`: construtora e engenharia especializada (infraestrutura, soluções técnicas)

## 9. Publicar uma nova versão para outro cliente

1. Duplique o repositório.
2. Ajuste `site.config.ts`: `url`, identidade, contatos, `profile`, `theme` e `demo: false`.
3. Troque logos, imagens e vídeos, e edite `content/` e `projects.ts`.
4. Rode `npm run build`. A pasta `dist/` é o site completo.
5. Publique:
   - **Cloudflare Pages**: comando de build `npm run build`, diretório de saída `dist`.
   - **Vercel / Netlify**: o framework Astro é detectado automaticamente, com saída em `dist`.
   - **Qualquer hospedagem estática**: envie o conteúdo de `dist/`.

Sitemap (`/sitemap-index.xml`), `robots.txt`, canonicals, Open Graph e dados estruturados (`schema.org`) são gerados a partir da configuração.

---

### Experiência 3D

`site.config.ts → experience3d`:

- `source: 'procedural'` mostra uma torre demonstrativa original.
- `source: 'gltf'` com `modelUrl: '/models/edificio.glb'` carrega o modelo do cliente.

O Three.js só é baixado quando a seção se aproxima da tela. Em celulares, a cena começa após um toque. Sem WebGL, a `fallbackImage` fica no lugar. Os pavimentos destacáveis são configurados em `content.experience3d.floors`.

### Movimento e acessibilidade

- `prefers-reduced-motion` desliga revelações, parallax, scroll suave, WebGL do hero e rotação automática do 3D, e todo o conteúdo continua visível.
- Sem JavaScript, o site permanece completo e legível.
- `motion.smoothScroll` e `motion.pageTransitions` (View Transitions) podem ser desligados no `site.config.ts`.

### Imagens de demonstração

`npm run assets:demo` regenera as imagens e o vídeo procedurais. O script precisa de Playwright e ffmpeg e não é necessário para usar o template.
