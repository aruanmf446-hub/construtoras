/**
 * Renders the procedural demo imagery used by the template.
 *   npm run assets:demo            -> all stills + hero video
 *   npm run assets:demo -- stills  -> stills only
 *
 * Requires: Playwright (Chromium) + ffmpeg (for the video loop).
 * Output:
 *   src/assets/media/demo/*.jpg   (optimised at build time by astro:assets)
 *   public/media/demo/hero-loop.{mp4,webm}
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// Playwright is resolved from the local install or a global one (NODE_PATH).
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const outStills = path.join(root, 'src/assets/media/demo');
const outVideo = path.join(root, 'public/media/demo');
fs.mkdirSync(outStills, { recursive: true });
fs.mkdirSync(outVideo, { recursive: true });

const html = `<!doctype html><html><head><style>html,body{margin:0;background:#000}canvas{display:block}</style>
<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>
</head><body><script type="module" src="/scripts/demo-assets/scenes.js"></script></body></html>`;

const types = { '.js': 'text/javascript', '.html': 'text/html' };
const server = http
  .createServer((req, res) => {
    const url = new URL(req.url, 'http://x');
    if (url.pathname === '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      return res.end(html);
    }
    const file = path.join(root, decodeURIComponent(url.pathname));
    if (!file.startsWith(root) || !fs.existsSync(file)) {
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  })
  .listen(0);
const port = server.address().port;

const STILLS = [
  // name, scene, w, h
  ['hero-tower', 'hero-tower', 2400, 1500],
  ['night-tower', 'night-tower', 2400, 1500],
  ['residence-louvers', 'residence-louvers', 2400, 1500],
  ['corporate', 'corporate', 2400, 1500],
  ['infrastructure', 'infrastructure', 2400, 1500],
  ['pavilion', 'pavilion', 2400, 1500],
  ['campus', 'campus', 2400, 1500],
  ['industrial', 'industrial', 2400, 1500],
  ['detail-fins', 'detail-fins', 1600, 2000],
  ['detail-concrete', 'detail-concrete', 1600, 2000],
  ['detail-interior', 'detail-interior', 2400, 1500],
  ['hero-tower-portrait', 'hero-tower', 1200, 2000],
];

const mode = process.argv[2] || 'all';
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage();
page.on('console', (m) => m.type() === 'error' && console.error('[page]', m.text()));
page.on('pageerror', (e) => console.error('[pageerror]', e.message));

async function shot(scene, w, h, t, file) {
  await page.setViewportSize({ width: w, height: h });
  await page.goto(`http://localhost:${port}/?scene=${scene}&w=${w}&h=${h}&t=${t}`);
  await page.waitForFunction(() => window.__done === true, null, { timeout: 180000 });
  const data = await page.evaluate(() => document.querySelector('canvas').toDataURL('image/png'));
  fs.writeFileSync(file, Buffer.from(data.split(',')[1], 'base64'));
}

const only = process.argv[3];
if (mode === 'all' || mode === 'stills') {
  for (const [name, scene, w, h] of STILLS) {
    if (only && only !== name) continue;
    const png = path.join(outStills, `${name}.png`);
    const t0 = Date.now();
    await shot(scene, w, h, 0, png);
    // light grade + vignette, export JPG
    execFileSync('convert', [png, '-modulate', '100,94,100', '(', '-size', `${w}x${h}`, 'radial-gradient:white-gray35', ')', '-compose', 'multiply', '-composite', '-sigmoidal-contrast', '3,45%', '-attenuate', '0.35', '+noise', 'Gaussian', '-quality', '88', png.replace('.png', '.jpg')]);
    fs.unlinkSync(png);
    console.log(`✓ ${name} (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
  }
}

if (mode === 'all' || mode === 'video') {
  const frames = path.join(root, 'node_modules/.cache/hero-frames');
  fs.rmSync(frames, { recursive: true, force: true });
  fs.mkdirSync(frames, { recursive: true });
  const N = 150; // 6.25s @ 24fps
  for (let i = 0; i < N; i++) {
    // ping-pong easing so the loop is seamless
    const p = i / N;
    const t = 0.5 - 0.5 * Math.cos(p * Math.PI * 2);
    await shot('hero-tower', 1600, 900, t.toFixed(4), path.join(frames, `f${String(i).padStart(4, '0')}.png`));
    if (i % 25 === 0) console.log(`  frame ${i}/${N}`);
  }
  const vf = 'format=yuv420p,eq=saturation=0.94';
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '24', '-i', path.join(frames, 'f%04d.png'), '-vf', vf, '-c:v', 'libx264', '-crf', '26', '-preset', 'slow', '-movflags', '+faststart', '-an', path.join(outVideo, 'hero-loop.mp4')]);
  try {
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', '24', '-i', path.join(frames, 'f%04d.png'), '-vf', vf, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '40', '-an', path.join(outVideo, 'hero-loop.webm')]);
  } catch {
    console.warn('webm encoding skipped (libvpx-vp9 unavailable)');
  }
  console.log('✓ hero video');
}

await browser.close();
server.close();
