/**
 * Demo asset generator — original, procedural architecture renders.
 *
 * These scenes exist ONLY to give the template a cinematic look out of the box
 * without using photographs of real buildings. Replace the generated files in
 * `src/assets/media/demo` with your client's photography or renders.
 */
import * as THREE from 'three';

const P = new URLSearchParams(location.search);
const W = Number(P.get('w') || 2400);
const H = Number(P.get('h') || 1500);
const SCENE = P.get('scene') || 'hero-tower';
const T = Number(P.get('t') || 0); // 0..1 animation phase (video frames)

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(W, H);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.appendChild(renderer.domElement);

/* ------------------------------------------------------------------ */
/* Deterministic random                                                */
/* ------------------------------------------------------------------ */
let seed = 1337;
const rand = () => {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
};
const setSeed = (s) => (seed = s);

/* ------------------------------------------------------------------ */
/* Textures                                                            */
/* ------------------------------------------------------------------ */
function canvasTex(size, draw, repeat = [1, 1]) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

function concreteTex(base = [196, 190, 180], repeat = [2, 2], s = 7) {
  setSeed(s);
  return canvasTex(
    512,
    (g, n) => {
      g.fillStyle = `rgb(${base.join(',')})`;
      g.fillRect(0, 0, n, n);
      for (let i = 0; i < 90; i++) {
        const r = 20 + rand() * 120;
        const x = rand() * n,
          y = rand() * n;
        const d = (rand() - 0.5) * 22;
        const grd = g.createRadialGradient(x, y, 0, x, y, r);
        grd.addColorStop(0, `rgba(${base.map((v) => v + d).join(',')},0.35)`);
        grd.addColorStop(1, `rgba(${base.join(',')},0)`);
        g.fillStyle = grd;
        g.fillRect(x - r, y - r, r * 2, r * 2);
      }
      for (let i = 0; i < 5000; i++) {
        const v = rand() > 0.5 ? 255 : 0;
        g.fillStyle = `rgba(${v},${v},${v},${rand() * 0.06})`;
        g.fillRect(rand() * n, rand() * n, 1 + rand() * 2, 1 + rand() * 2);
      }
      // formwork lines
      g.strokeStyle = 'rgba(0,0,0,0.05)';
      g.lineWidth = 2;
      for (let y = 0; y <= n; y += n / 4) {
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(n, y);
        g.stroke();
      }
    },
    repeat
  );
}

function woodTex(repeat = [1, 1]) {
  setSeed(42);
  return canvasTex(
    512,
    (g, n) => {
      g.fillStyle = '#8a5a36';
      g.fillRect(0, 0, n, n);
      for (let x = 0; x < n; x += 1) {
        const v = Math.sin(x * 0.08 + Math.sin(x * 0.013) * 4) * 0.5 + 0.5;
        g.fillStyle = `rgba(${60 + v * 60},${36 + v * 34},${20 + v * 16},0.35)`;
        g.fillRect(x, 0, 1, n);
      }
      for (let i = 0; i < 1600; i++) {
        g.fillStyle = `rgba(40,20,10,${rand() * 0.15})`;
        g.fillRect(rand() * n, rand() * n, 1, 6 + rand() * 30);
      }
    },
    repeat
  );
}

function windowsTex(cols, rows, litRatio, s = 3, warm = '255,196,128') {
  setSeed(s);
  return canvasTex(
    1024,
    (g, n) => {
      g.fillStyle = '#000';
      g.fillRect(0, 0, n, n);
      const cw = n / cols,
        rh = n / rows;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (rand() < litRatio) {
            const a = 0.35 + rand() * 0.65;
            const grd = g.createLinearGradient(0, r * rh, 0, (r + 1) * rh);
            grd.addColorStop(0, `rgba(${warm},${a * 0.6})`);
            grd.addColorStop(1, `rgba(${warm},${a})`);
            g.fillStyle = grd;
            g.fillRect(c * cw + 1, r * rh + 2, cw - 2, rh - 4);
          }
        }
      }
    },
    [1, 1]
  );
}

/* ------------------------------------------------------------------ */
/* Sky + environment                                                   */
/* ------------------------------------------------------------------ */
function skyMaterial({ top, horizon, bottom, sunDir, sunColor, sunSize = 0.9995, glow = 0.35 }) {
  return new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color(top) },
      horizon: { value: new THREE.Color(horizon) },
      bottom: { value: new THREE.Color(bottom) },
      sunDir: { value: sunDir.clone().normalize() },
      sunColor: { value: new THREE.Color(sunColor) },
      sunSize: { value: sunSize },
      glow: { value: glow },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: `
      uniform vec3 top, horizon, bottom, sunColor, sunDir; uniform float sunSize, glow;
      varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 col = h > 0.0 ? mix(horizon, top, pow(clamp(h,0.0,1.0), 0.55)) : mix(horizon, bottom, pow(clamp(-h,0.0,1.0),0.4));
        float d = max(dot(normalize(vDir), sunDir), 0.0);
        col += sunColor * pow(d, 8.0) * glow;
        col += sunColor * pow(d, 160.0) * 0.6;
        col += sunColor * smoothstep(sunSize, 1.0, d) * 4.0;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
}

function setupSky(scene, opts) {
  const sky = new THREE.Mesh(new THREE.SphereGeometry(4000, 48, 24), skyMaterial(opts));
  scene.add(sky);
  // environment from a copy of the sky
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), skyMaterial(opts)));
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(envScene, 0.02).texture;
  return sky;
}

function sun(scene, dir, color, intensity, size = 120, mapSize = 4096) {
  const l = new THREE.DirectionalLight(color, intensity);
  l.position.copy(dir.clone().normalize().multiplyScalar(400));
  l.castShadow = true;
  l.shadow.mapSize.set(mapSize, mapSize);
  const c = l.shadow.camera;
  c.left = -size;
  c.right = size;
  c.top = size;
  c.bottom = -size;
  c.near = 10;
  c.far = 1200;
  l.shadow.bias = -0.0004;
  l.shadow.normalBias = 0.04;
  l.shadow.radius = 4;
  scene.add(l);
  scene.add(l.target);
  return l;
}

/* ------------------------------------------------------------------ */
/* Materials                                                           */
/* ------------------------------------------------------------------ */
const M = {
  concrete: (tint = [198, 192, 182], rep = [2, 2]) =>
    new THREE.MeshStandardMaterial({ map: concreteTex(tint, rep), roughness: 0.92, metalness: 0 }),
  darkConcrete: () => new THREE.MeshStandardMaterial({ map: concreteTex([92, 90, 86], [3, 3], 11), roughness: 0.95 }),
  glass: (tint = 0x1a2026, rough = 0.06) =>
    new THREE.MeshStandardMaterial({ color: tint, roughness: rough, metalness: 0.95, envMapIntensity: 2.2 }),
  bronze: () => new THREE.MeshStandardMaterial({ color: 0x8c6a46, roughness: 0.38, metalness: 0.85 }),
  black: () => new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.55, metalness: 0.4 }),
  wood: (rep) => new THREE.MeshStandardMaterial({ map: woodTex(rep), roughness: 0.7 }),
  ground: (tint = [120, 116, 108], rep = [40, 40]) =>
    new THREE.MeshStandardMaterial({ map: concreteTex(tint, rep, 21), roughness: 0.98 }),
  water: () => new THREE.MeshStandardMaterial({ color: 0x0b1416, roughness: 0.04, metalness: 1, envMapIntensity: 1.4 }),
  white: () => new THREE.MeshStandardMaterial({ color: 0xe9e4da, roughness: 0.8 }),
  emissive: (color, intensity = 2) =>
    new THREE.MeshStandardMaterial({ color: 0x000000, emissive: color, emissiveIntensity: intensity }),
};

function box(w, h, d, mat, x = 0, y = 0, z = 0, parent) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  (parent || current).add(m);
  return m;
}

function ground(mat, size = 3000) {
  const g = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
  g.rotation.x = -Math.PI / 2;
  g.receiveShadow = true;
  current.add(g);
  return g;
}

let current;

/* ------------------------------------------------------------------ */
/* Building kits                                                       */
/* ------------------------------------------------------------------ */
/** Tower of stacked floors with protruding slabs and vertical fins. */
function slabTower({
  floors = 30,
  fh = 3.6,
  w = 24,
  d = 24,
  slab = 0.45,
  over = 1.2,
  finStep = 2.4,
  finDepth = 0.9,
  finW = 0.22,
  glass,
  slabMat,
  finMat,
  lit = 0,
  litSeed = 3,
  x = 0,
  z = 0,
  twist = 0,
  base = 2,
}) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  current.add(group);
  const prev = current;
  current = group;
  const litMatWarm = lit > 0 ? M.emissive(0xff9a48, 0.75) : null;
  setSeed(litSeed);
  for (let i = 0; i < floors; i++) {
    const y = base + i * fh;
    const f = new THREE.Group();
    f.position.y = y;
    f.rotation.y = twist * i;
    group.add(f);
    // slab
    box(w + over * 2, slab, d + over * 2, slabMat, 0, 0, 0, f);
    // glass core
    box(w, fh - slab, d, glass, 0, fh / 2, 0, f);
    // interior lights
    if (lit > 0) {
      const sides = [
        [0, d / 2 + 0.03, 0, w],
        [0, -d / 2 - 0.03, Math.PI, w],
        [w / 2 + 0.03, 0, Math.PI / 2, d],
        [-w / 2 - 0.03, 0, -Math.PI / 2, d],
      ];
      for (const [sx, sz, ry, len] of sides) {
        const segs = Math.round(len / finStep);
        for (let s = 0; s < segs; s++) {
          if (rand() < lit) {
            const seg = new THREE.Mesh(new THREE.PlaneGeometry(finStep * 0.96, (fh - slab) * 0.86), litMatWarm);
            const off = -len / 2 + finStep * (s + 0.5);
            seg.position.set(sx + (ry === 0 || ry === Math.PI ? off : 0), (fh - slab) / 2 + slab / 2, sz + (ry === 0 || ry === Math.PI ? 0 : off));
            seg.rotation.y = ry;
            f.add(seg);
          }
        }
      }
    }
    // fins
    if (finMat) {
      const fx = Math.floor(w / finStep);
      const fz = Math.floor(d / finStep);
      for (let k = 0; k <= fx; k++) {
        const px = -w / 2 + (k * w) / fx;
        box(finW, fh - slab, finDepth, finMat, px, fh / 2, d / 2 + over - finDepth / 2, f);
        box(finW, fh - slab, finDepth, finMat, px, fh / 2, -d / 2 - over + finDepth / 2, f);
      }
      for (let k = 0; k <= fz; k++) {
        const pz = -d / 2 + (k * d) / fz;
        box(finDepth, fh - slab, finW, finMat, w / 2 + over - finDepth / 2, fh / 2, pz, f);
        box(finDepth, fh - slab, finW, finMat, -w / 2 - over + finDepth / 2, fh / 2, pz, f);
      }
    }
  }
  // roof slab + crown
  const top = new THREE.Group();
  top.position.y = base + floors * fh;
  top.rotation.y = twist * floors;
  group.add(top);
  box(w + over * 2, slab * 1.6, d + over * 2, slabMat, 0, 0, 0, top);
  box(w * 0.6, fh * 0.9, d * 0.5, slabMat, 0, fh * 0.45, 0, top);
  // podium
  box(w + over * 2 + 6, base, d + over * 2 + 6, slabMat, 0, base / 2, 0, group);
  current = prev;
  return group;
}

/** Simple block massing with punched grid façade. */
function gridBlock({ w, h, d, x = 0, z = 0, mat, glass, cols = 10, rows = 6, depth = 0.6, ry = 0 }) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = ry;
  current.add(g);
  box(w - depth * 2, h, d - depth * 2, glass, 0, h / 2, 0, g);
  // horizontal bands
  for (let r = 0; r <= rows; r++) {
    const y = (r * h) / rows;
    box(w, 0.6, d, mat, 0, Math.min(y, h - 0.3) + 0.3, 0, g);
  }
  // verticals front/back
  for (let c = 0; c <= cols; c++) {
    const px = -w / 2 + (c * w) / cols;
    box(0.5, h, depth, mat, px, h / 2, d / 2 - depth / 2, g);
    box(0.5, h, depth, mat, px, h / 2, -d / 2 + depth / 2, g);
  }
  const dc = Math.max(2, Math.round((cols * d) / w));
  for (let c = 0; c <= dc; c++) {
    const pz = -d / 2 + (c * d) / dc;
    box(depth, h, 0.5, mat, w / 2 - depth / 2, h / 2, pz, g);
    box(depth, h, 0.5, mat, -w / 2 + depth / 2, h / 2, pz, g);
  }
  return g;
}

function trees(count, area, center = [0, 0], avoid = 0, s = 9) {
  setSeed(s);
  const trunk = new THREE.MeshStandardMaterial({ color: 0x3a2c22, roughness: 1 });
  const leaf = new THREE.MeshStandardMaterial({ color: 0x3d4a33, roughness: 1, flatShading: true });
  for (let i = 0; i < count; i++) {
    const x = center[0] + (rand() - 0.5) * area;
    const z = center[1] + (rand() - 0.5) * area;
    if (Math.hypot(x - center[0], z - center[1]) < avoid) continue;
    const s2 = 0.7 + rand() * 0.8;
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.15 * s2, 0.22 * s2, 3 * s2, 6), trunk);
    t.position.set(x, 1.5 * s2, z);
    t.castShadow = true;
    current.add(t);
    const c = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2 * s2, 1), leaf);
    c.position.set(x, 3.8 * s2, z);
    c.scale.y = 0.85;
    c.castShadow = true;
    c.receiveShadow = true;
    current.add(c);
  }
}

function people(count, area, center = [0, 0], s = 5) {
  setSeed(s);
  const mat = new THREE.MeshStandardMaterial({ color: 0x1b1b1b, roughness: 1 });
  for (let i = 0; i < count; i++) {
    const p = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 1.2, 2, 6), mat);
    p.position.set(center[0] + (rand() - 0.5) * area, 0.82, center[1] + (rand() - 0.5) * area);
    p.castShadow = true;
    current.add(p);
  }
}

/* ------------------------------------------------------------------ */
/* Scenes                                                              */
/* ------------------------------------------------------------------ */
const camera = new THREE.PerspectiveCamera(35, W / H, 0.5, 6000);

const scenes = {
  /* Dusk tower — hero */
  'hero-tower'(scene, night = false) {
    const sunDir = new THREE.Vector3(-0.75, night ? 0.02 : 0.12, 0.55);
    setupSky(scene, night
      ? { top: 0x05070b, horizon: 0x2a2320, bottom: 0x050505, sunDir, sunColor: 0xff8a4a, glow: 0.25 }
      : { top: 0x14243a, horizon: 0xf3b07a, bottom: 0x1a1612, sunDir, sunColor: 0xffb070, glow: 0.7 });
    scene.fog = new THREE.FogExp2(night ? 0x14110f : 0x6d5848, night ? 0.0016 : 0.0013);
    sun(scene, sunDir, 0xffc08a, night ? 0.4 : 4.2, 140);
    scene.add(new THREE.HemisphereLight(0x8aa0b8, 0x2a2018, night ? 0.15 : 0.55));
    ground(M.ground([70, 66, 60]));
    const slabMat = M.concrete([214, 206, 194], [1, 1]);
    slabTower({ floors: 42, fh: 3.7, w: 22, d: 22, glass: M.glass(0x161b20), slabMat, finMat: M.bronze(), lit: night ? 0.55 : 0.32, litSeed: 4 });
    // context towers
    slabTower({ floors: 24, fh: 3.6, w: 26, d: 18, x: -70, z: -40, glass: M.glass(0x1c2228), slabMat: M.concrete([150, 146, 140]), finMat: null, lit: night ? 0.5 : 0.18, litSeed: 9 });
    slabTower({ floors: 30, fh: 3.6, w: 18, d: 18, x: 60, z: -90, glass: M.glass(0x1c2228), slabMat: M.concrete([140, 136, 130]), finMat: null, lit: night ? 0.5 : 0.2, litSeed: 12 });
    for (let i = 0; i < 14; i++) {
      setSeed(100 + i);
      const h = 18 + rand() * 50;
      gridBlock({ w: 20 + rand() * 20, h, d: 20 + rand() * 16, x: -260 + i * 40 + rand() * 10, z: -220 - rand() * 120, mat: M.concrete([120, 116, 110]), glass: M.glass(0x20262c), cols: 8, rows: Math.round(h / 4) });
    }
    trees(40, 120, [0, 0], 28);
    people(18, 40, [8, 22]);
    const k = T;
    camera.fov = 32;
    camera.position.set(46 - k * 12, 5 + k * 3, 96 - k * 8);
    camera.lookAt(-4 + k * 2, 58 + k * 6, 0);
  },

  'night-tower'(scene) {
    scenes['hero-tower'](scene, true);
    camera.position.set(-50, 12, 95);
    camera.lookAt(0, 72, 0);
  },

  /* Mid-rise residential with timber louvers */
  'residence-louvers'(scene) {
    const sunDir = new THREE.Vector3(0.9, 0.35, 0.5);
    setupSky(scene, { top: 0x6d8aa6, horizon: 0xe9d6bd, bottom: 0x3a342c, sunDir, sunColor: 0xffd7a0, glow: 0.4 });
    scene.fog = new THREE.FogExp2(0xcbb79e, 0.0018);
    sun(scene, sunDir, 0xffe0b8, 3.6, 70);
    scene.add(new THREE.HemisphereLight(0xbfd4ea, 0x5a4a3a, 0.7));
    ground(M.ground([150, 144, 134]));
    const slabMat = M.concrete([226, 220, 208], [1, 1]);
    const wood = M.wood([1, 4]);
    const glass = M.glass(0x232a2e, 0.1);
    const floors = 9,
      fh = 3.3,
      w = 42,
      d = 16;
    for (let i = 0; i < floors; i++) {
      const y = 1 + i * fh;
      const shift = i % 2 === 0 ? 0 : 1.4;
      box(w + 3, 0.4, d + 4 + shift, slabMat, 0, y, shift / 2);
      box(w, fh - 0.4, d, glass, 0, y + fh / 2, 0);
      // louvers - sliding panels, some open
      setSeed(200 + i);
      const n = 34;
      for (let k = 0; k < n; k++) {
        if (rand() < 0.28) continue;
        const px = -w / 2 + (k + 0.5) * (w / n) + (rand() < 0.3 ? 0.6 : 0);
        box(0.12, fh - 0.5, 0.5, wood, px, y + fh / 2, d / 2 + 1.6 + shift);
      }
      // railing glass line
      box(w + 2.6, 1.1, 0.04, M.glass(0x6b7a80, 0.02), 0, y + 0.75, d / 2 + 1.9 + shift);
    }
    box(w + 3, 0.6, d + 4, slabMat, 0, 1 + floors * fh, 0);
    box(w + 14, 1, d + 20, M.concrete([180, 174, 164]), 0, 0.5, 2);
    // planters on roof
    trees(28, 160, [0, 30], 34, 13);
    people(10, 30, [0, 22]);
    camera.fov = 30;
    camera.position.set(-48, 9, 66);
    camera.lookAt(4, 15, 0);
  },

  /* Corporate HQ, deep concrete grid */
  corporate(scene) {
    const sunDir = new THREE.Vector3(-0.5, 0.55, 0.65);
    setupSky(scene, { top: 0x4f6f90, horizon: 0xd6dde2, bottom: 0x3a3a38, sunDir, sunColor: 0xfff3e0, glow: 0.3 });
    scene.fog = new THREE.FogExp2(0xc4ccd2, 0.0016);
    sun(scene, sunDir, 0xfff4e6, 3.8, 110);
    scene.add(new THREE.HemisphereLight(0xc8d8ea, 0x4a4640, 0.7));
    ground(M.ground([170, 166, 160]));
    const mat = M.concrete([224, 220, 212], [1, 1]);
    gridBlock({ w: 90, h: 34, d: 34, mat, glass: M.glass(0x1d2329), cols: 18, rows: 7, depth: 1.6 });
    gridBlock({ w: 40, h: 54, d: 30, x: 58, z: -24, mat, glass: M.glass(0x1d2329), cols: 8, rows: 12, depth: 1.6 });
    // water mirror
    const water = new THREE.Mesh(new THREE.PlaneGeometry(120, 30), M.water());
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0.06, 34);
    scene.add(water);
    trees(20, 200, [0, 60], 50, 4);
    people(14, 60, [0, 24]);
    camera.fov = 28;
    camera.position.set(-120, 16, 120);
    camera.lookAt(10, 18, 0);
  },

  /* Infrastructure — viaduct in mist */
  infrastructure(scene) {
    const sunDir = new THREE.Vector3(0.6, 0.12, -0.8);
    setupSky(scene, { top: 0x7d8890, horizon: 0xe7dccb, bottom: 0x6c6a64, sunDir, sunColor: 0xffe2b8, glow: 0.7 });
    scene.fog = new THREE.FogExp2(0xcfc5b6, 0.0042);
    sun(scene, sunDir, 0xffe6c4, 2.8, 300);
    scene.add(new THREE.HemisphereLight(0xdfe6ea, 0x5d5a52, 0.9));
    ground(M.ground([110, 112, 100]));
    const mat = M.concrete([200, 196, 188], [4, 1]);
    // deck
    const len = 900;
    box(18, 2.2, len, mat, 0, 34, -len / 2 + 120);
    box(18.6, 1.2, len, M.concrete([170, 166, 158]), 0, 35.6, -len / 2 + 120);
    for (let i = 0; i < 18; i++) {
      const z = 120 - i * 52;
      box(5, 34, 3.2, mat, -4, 17, z);
      box(5, 34, 3.2, mat, 4, 17, z);
      box(16, 3, 5, mat, 0, 32, z);
    }
    // lane lights
    for (let i = 0; i < 40; i++) box(0.2, 4, 0.2, M.black(), 8.6, 38, 120 - i * 25);
    trees(160, 600, [0, -100], 18, 33);
    camera.fov = 34;
    camera.position.set(-46, 6, 160);
    camera.lookAt(0, 26, 0);
  },

  /* Pavilion cantilever over water at dusk */
  pavilion(scene) {
    const sunDir = new THREE.Vector3(0.9, 0.05, -0.4);
    setupSky(scene, { top: 0x253041, horizon: 0xd99a6c, bottom: 0x1a1612, sunDir, sunColor: 0xff9a5a, glow: 0.8 });
    scene.fog = new THREE.FogExp2(0x705a4a, 0.004);
    sun(scene, sunDir, 0xffa766, 2.6, 60);
    scene.add(new THREE.HemisphereLight(0x6d82a0, 0x2a2018, 0.5));
    ground(M.ground([58, 56, 50]));
    const water = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), M.water());
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0.2, 30);
    scene.add(water);
    const mat = M.concrete([220, 212, 200], [2, 1]);
    // lower volume
    box(34, 0.8, 18, mat, 0, 3.4, 0);
    box(32, 3, 16, M.glass(0x15191c, 0.05), 0, 1.5 + 0.4, 0);
    box(30, 2.6, 14, M.emissive(0xffb070, 1.3), 0, 1.7 + 0.4, 0);
    // upper cantilever
    box(46, 3.6, 12, mat, 10, 6.6, -2);
    box(44, 1.2, 0.2, M.emissive(0xffc080, 2.2), 10, 6.2, 4.05);
    box(3, 3.4, 3, mat, -10, 1.7, -6);
    // deck
    box(20, 0.3, 12, M.wood([4, 1]), -6, 0.35, 12);
    trees(30, 120, [-20, -40], 20, 7);
    camera.fov = 30;
    camera.position.set(-38, 3.2, 52);
    camera.lookAt(6, 4, 0);
  },

  /* Aerial campus */
  campus(scene) {
    const sunDir = new THREE.Vector3(-0.7, 0.45, 0.4);
    setupSky(scene, { top: 0x587796, horizon: 0xdcd8d0, bottom: 0x3a3a38, sunDir, sunColor: 0xfff0d8, glow: 0.3 });
    scene.fog = new THREE.FogExp2(0xc9c9c4, 0.0022);
    sun(scene, sunDir, 0xfff1dc, 3.4, 200);
    scene.add(new THREE.HemisphereLight(0xd0dcea, 0x4d4a42, 0.7));
    ground(M.ground([126, 130, 112]));
    const mat = M.concrete([226, 222, 214], [1, 1]);
    setSeed(77);
    for (let i = 0; i < 9; i++) {
      const x = (i % 3) * 70 - 70 + rand() * 8,
        z = Math.floor(i / 3) * 60 - 60 + rand() * 8;
      const h = 8 + rand() * 18;
      gridBlock({ w: 44 + rand() * 10, h, d: 26, x, z, mat, glass: M.glass(0x1d2329), cols: 10, rows: Math.round(h / 4), depth: 0.8, ry: (rand() - 0.5) * 0.2 });
      box(48, 0.2, 30, M.concrete([90, 98, 74]), x, h + 0.7, z);
    }
    trees(220, 400, [0, 0], 0, 44);
    camera.fov = 30;
    camera.position.set(-260, 210, 260);
    camera.lookAt(0, 0, 0);
  },

  /* Industrial / logistics */
  industrial(scene) {
    const sunDir = new THREE.Vector3(0.6, 0.3, 0.6);
    setupSky(scene, { top: 0x445f78, horizon: 0xe5d8c4, bottom: 0x3a3630, sunDir, sunColor: 0xffe2b0, glow: 0.4 });
    scene.fog = new THREE.FogExp2(0xcdc3b2, 0.0024);
    sun(scene, sunDir, 0xffe6c0, 3.4, 220);
    scene.add(new THREE.HemisphereLight(0xcdd8e6, 0x4a463c, 0.7));
    ground(M.ground([140, 136, 128]));
    const shell = new THREE.MeshStandardMaterial({ color: 0xcfcbc4, roughness: 0.55, metalness: 0.4 });
    for (let i = 0; i < 3; i++) {
      const z = -i * 70;
      box(180, 16, 50, shell, 0, 8, z);
      for (let k = 0; k < 18; k++) box(0.4, 16.2, 0.6, M.black(), -90 + k * 10.6, 8.1, z + 25.2);
      for (let k = 0; k < 14; k++) box(5, 6, 0.4, M.darkConcrete(), -80 + k * 12, 3, z + 25.3);
    }
    // silos
    for (let i = 0; i < 4; i++) {
      const s = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 40, 48), shell);
      s.position.set(120 + i * 16, 20, -40);
      s.castShadow = s.receiveShadow = true;
      scene.add(s);
    }
    camera.fov = 30;
    camera.position.set(-160, 40, 180);
    camera.lookAt(20, 6, -40);
  },

  /* Abstract close-ups for galleries */
  'detail-fins'(scene) {
    const sunDir = new THREE.Vector3(-1, 0.4, 0.25);
    setupSky(scene, { top: 0x6c7f92, horizon: 0xd8cbb8, bottom: 0x2a2620, sunDir, sunColor: 0xffd6a0, glow: 0.3 });
    sun(scene, sunDir, 0xffdcb0, 4, 30);
    scene.add(new THREE.HemisphereLight(0xb8c8da, 0x3a3028, 0.35));
    const slabMat = M.concrete([220, 214, 202], [1, 1]);
    slabTower({ floors: 12, fh: 3.6, w: 22, d: 22, glass: M.glass(0x15191d), slabMat, finMat: M.bronze(), base: 0 });
    camera.fov = 26;
    camera.position.set(-30, 18, 34);
    camera.lookAt(-10, 26, 10);
  },

  'detail-concrete'(scene) {
    const sunDir = new THREE.Vector3(0.4, 0.8, 0.3);
    scene.background = new THREE.Color(0x0e0d0c);
    const env = new THREE.Scene();
    env.add(new THREE.Mesh(new THREE.SphereGeometry(100), skyMaterial({ top: 0x404040, horizon: 0x807870, bottom: 0x101010, sunDir, sunColor: 0xffffff })));
    scene.environment = new THREE.PMREMGenerator(renderer).fromScene(env).texture;
    const mat = M.concrete([196, 190, 180], [1, 1]);
    // interior hall with skylight slots
    box(60, 1, 40, mat, 0, 0, 0);
    box(60, 24, 1, mat, 0, 12, -20);
    box(1, 24, 40, mat, -30, 12, 0);
    for (let i = 0; i < 6; i++) box(60, 1.2, 4.5, mat, 0, 24, -18 + i * 7);
    // stairs
    for (let i = 0; i < 14; i++) box(10, 0.4, 1.2, mat, -10, 0.7 + i * 0.6, -18 + 1.2 + i * 1.1 + 4);
    box(16, 0.6, 6, mat, 6, 9, -16);
    const l = sun(scene, sunDir, 0xfff0d8, 7, 50);
    l.position.set(30, 120, 40);
    scene.add(new THREE.AmbientLight(0x60584f, 0.25));
    scene.fog = new THREE.FogExp2(0x1d1a17, 0.012);
    people(2, 8, [-2, -6], 3);
    camera.fov = 40;
    camera.position.set(24, 3, 22);
    camera.lookAt(-6, 10, -12);
  },

  'detail-interior'(scene) {
    const sunDir = new THREE.Vector3(-0.9, 0.25, 0.3);
    setupSky(scene, { top: 0x7a8ea2, horizon: 0xeadcc8, bottom: 0x3a322a, sunDir, sunColor: 0xffd8a8, glow: 0.4 });
    const mat = M.concrete([226, 220, 210], [1, 1]);
    // living room with full-height glass and timber ceiling
    box(30, 0.4, 20, M.concrete([180, 170, 156], [3, 3]), 0, 0, 0);
    box(30, 0.4, 20, M.wood([6, 4]), 0, 4.2, 0);
    box(30, 4.2, 0.4, mat, 0, 2.1, -10);
    box(0.4, 4.2, 20, mat, 15, 2.1, 0);
    for (let i = 0; i < 7; i++) box(0.12, 4, 0.12, M.black(), -15, 2.1, -10 + i * 3.33);
    // furniture blocks
    box(6, 0.8, 2.4, M.white(), 2, 0.6, -2);
    box(6, 1.6, 0.6, M.white(), 2, 1, -3.2);
    box(3, 0.5, 3, M.wood([1, 1]), 2, 0.45, 1.5);
    box(4, 0.9, 1.2, M.darkConcrete(), 10, 0.65, -8);
    const l = sun(scene, sunDir, 0xffdcb0, 5, 30);
    scene.add(new THREE.HemisphereLight(0xc0d0e0, 0x403428, 0.4));
    trees(30, 80, [-40, 0], 10, 2);
    ground(M.ground([90, 96, 78]));
    camera.fov = 44;
    camera.position.set(13, 1.7, 8);
    camera.lookAt(-6, 1.8, -4);
  },
};

/* ------------------------------------------------------------------ */
const scene = new THREE.Scene();
current = scene;
(scenes[SCENE] || scenes['hero-tower'])(scene);
camera.aspect = W / H;
camera.updateProjectionMatrix();
renderer.render(scene, camera);
window.__done = true;
