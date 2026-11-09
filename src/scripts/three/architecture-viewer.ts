/**
 * Architecture viewer — Three.js, loaded on demand.
 *
 * Procedural mode renders an ORIGINAL demonstration tower (not a real building).
 * GLTF mode loads the client's own model (site.config → experience3d.modelUrl).
 *
 * Features: orbit + zoom, camera presets, day/night, floor highlight,
 * exploded "construction layers" view. Renders only while visible and
 * disposes every GPU resource on teardown.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export interface ViewerOptions {
  container: HTMLElement;
  floors: number;
  accent: string;
  reducedMotion: boolean;
  lowPower: boolean;
  modelUrl?: string | null;
}

export type ViewName = 'facade' | 'aerial' | 'street';

export interface Viewer {
  setView(v: ViewName): void;
  setNight(on: boolean): void;
  setExploded(on: boolean): void;
  highlight(range: [number, number] | null): void;
  dispose(): void;
  hasFloors: boolean;
}

const FH = 3.6; // floor height (m)
const W = 22;
const D = 18;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export async function createViewer(opts: ViewerOptions): Promise<Viewer> {
  const { container, floors, reducedMotion, lowPower } = opts;
  const renderer = new THREE.WebGLRenderer({ antialias: !lowPower, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPower ? 1.25 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = !lowPower;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  container.appendChild(renderer.domElement);
  renderer.domElement.setAttribute('aria-hidden', 'true');

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;

  const camera = new THREE.PerspectiveCamera(32, 1, 1, 3000);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.enablePan = false;
  controls.minDistance = 40;
  controls.maxDistance = 420;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.autoRotate = !reducedMotion;
  controls.autoRotateSpeed = 0.35;

  /* ---------- Sky ---------- */
  const skyUniforms = {
    top: { value: new THREE.Color('#5b7896') },
    horizon: { value: new THREE.Color('#e4d6c2') },
  };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(1500, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: skyUniforms,
      vertexShader: 'varying vec3 v; void main(){ v = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }',
      fragmentShader: 'uniform vec3 top, horizon; varying vec3 v; void main(){ float h = clamp(v.y,0.,1.); gl_FragColor = vec4(mix(horizon, top, pow(h,.5)),1.); }',
    })
  );
  scene.add(sky);
  scene.fog = new THREE.Fog('#d9cdbd', 300, 1400);

  /* ---------- Lights ---------- */
  const hemi = new THREE.HemisphereLight('#cfdbe8', '#4a4036', 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff0dc', 3);
  sun.position.set(-120, 180, 140);
  sun.castShadow = !lowPower;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -90, right: 90, top: 160, bottom: -40, near: 10, far: 600 });
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  /* ---------- Ground ---------- */
  const groundMat = new THREE.MeshStandardMaterial({ color: '#8d877d', roughness: 1 });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(900, 64), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const grid = new THREE.GridHelper(400, 40, '#6d675f', '#7a746b');
  (grid.material as THREE.Material).transparent = true;
  (grid.material as THREE.Material).opacity = 0.25;
  grid.position.y = 0.05;
  scene.add(grid);

  /* ---------- Building ---------- */
  const disposables: { dispose(): void }[] = [envTex, pmrem];
  const building = new THREE.Group();
  scene.add(building);

  const slabMat = new THREE.MeshStandardMaterial({ color: '#e1dbd1', roughness: 0.85 });
  const glassMat = new THREE.MeshStandardMaterial({ color: '#1d252c', roughness: 0.08, metalness: 0.9, transparent: true, opacity: 1 });
  const glassHi = new THREE.MeshStandardMaterial({ color: '#1d252c', roughness: 0.2, metalness: 0.4, emissive: new THREE.Color(opts.accent), emissiveIntensity: 0.6, transparent: true, opacity: 1 });
  const finMat = new THREE.MeshStandardMaterial({ color: '#8c6a46', roughness: 0.4, metalness: 0.8 });
  const lightMat = new THREE.MeshStandardMaterial({ color: '#000', emissive: new THREE.Color('#ffb36b'), emissiveIntensity: 0 });
  const coreMat = new THREE.MeshStandardMaterial({ color: '#b8b1a6', roughness: 0.9 });
  disposables.push(slabMat, glassMat, glassHi, finMat, lightMat, coreMat, groundMat);

  const slabGeo = new THREE.BoxGeometry(W + 3, 0.5, D + 3);
  const glassGeo = new THREE.BoxGeometry(W, FH - 0.5, D);
  const coreGeo = new THREE.BoxGeometry(6, FH, 6);
  disposables.push(slabGeo, glassGeo, coreGeo);

  type Floor = { slab: THREE.Mesh; glass: THREE.Mesh; lights: THREE.Mesh; core: THREE.Mesh; baseY: number };
  const floorList: Floor[] = [];
  const hasFloors = !opts.modelUrl;

  const finsGroup = new THREE.Group();
  building.add(finsGroup);
  let fins: THREE.InstancedMesh | null = null;
  const finBase: THREE.Matrix4[] = [];
  const finDir: THREE.Vector3[] = [];

  if (hasFloors) {
    // Interior light panels: random lit bays per floor (deterministic).
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
    for (let i = 0; i < floors; i++) {
      const y = 2 + i * FH;
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.y = y;
      const glass = new THREE.Mesh(glassGeo, glassMat);
      glass.position.y = y + FH / 2;
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.y = y + FH / 2;
      const lightsGeo = new THREE.BoxGeometry(W - 0.4, FH - 1.2, D - 0.4);
      disposables.push(lightsGeo);
      const lights = new THREE.Mesh(lightsGeo, lightMat);
      lights.position.y = y + FH / 2;
      lights.visible = rnd() > 0.35;
      [slab, glass, core].forEach((m) => {
        m.castShadow = !lowPower;
        m.receiveShadow = !lowPower;
        building.add(m);
      });
      building.add(lights);
      floorList.push({ slab, glass, lights, core, baseY: y });
    }
    // roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(W + 3, 1, D + 3), slabMat);
    roof.position.y = 2 + floors * FH;
    roof.castShadow = true;
    building.add(roof);
    disposables.push(roof.geometry);
    // podium
    const podium = new THREE.Mesh(new THREE.BoxGeometry(W + 14, 2, D + 14), coreMat);
    podium.position.y = 1;
    podium.receiveShadow = podium.castShadow = !lowPower;
    building.add(podium);
    disposables.push(podium.geometry);

    // Fins — a single instanced mesh
    const finGeo = new THREE.BoxGeometry(0.22, floors * FH, 0.9);
    disposables.push(finGeo);
    const positions: [number, number, number, number][] = [];
    const step = 2.2;
    for (let x = -W / 2; x <= W / 2 + 0.01; x += step) {
      positions.push([x, D / 2 + 1.1, 0, 1]);
      positions.push([x, -D / 2 - 1.1, 0, -1]);
    }
    for (let z = -D / 2; z <= D / 2 + 0.01; z += step) {
      positions.push([W / 2 + 1.1, z, Math.PI / 2, 2]);
      positions.push([-W / 2 - 1.1, z, Math.PI / 2, -2]);
    }
    fins = new THREE.InstancedMesh(finGeo, finMat, positions.length);
    fins.castShadow = !lowPower;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    positions.forEach(([a, b, rot, side], i) => {
      const isX = Math.abs(side) === 2;
      const pos = new THREE.Vector3(isX ? a : a, 2 + (floors * FH) / 2, isX ? b : b);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot);
      m.compose(pos, q, new THREE.Vector3(1, 1, 1));
      fins!.setMatrixAt(i, m);
      finBase.push(m.clone());
      finDir.push(isX ? new THREE.Vector3(Math.sign(side), 0, 0) : new THREE.Vector3(0, 0, Math.sign(side)));
    });
    finsGroup.add(fins);
  } else if (opts.modelUrl) {
    const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
    const gltf = await new GLTFLoader().loadAsync(opts.modelUrl);
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const scale = 120 / Math.max(size.x, size.y, size.z);
    model.scale.setScalar(scale);
    box.setFromObject(model);
    model.position.sub(new THREE.Vector3((box.min.x + box.max.x) / 2, box.min.y, (box.min.z + box.max.z) / 2));
    model.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = mesh.receiveShadow = !lowPower;
        disposables.push(mesh.geometry);
        (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).forEach((mt) => disposables.push(mt));
      }
    });
    building.add(model);
  }

  // Context buildings (low-poly blocks)
  const ctxMat = new THREE.MeshStandardMaterial({ color: '#a39c91', roughness: 0.95 });
  disposables.push(ctxMat);
  let s2 = 3;
  const r2 = () => ((s2 = (s2 * 16807) % 2147483647) - 1) / 2147483646;
  for (let i = 0; i < 26; i++) {
    const a = r2() * Math.PI * 2;
    const dist = 70 + r2() * 170;
    const h = 8 + r2() * 46;
    const g = new THREE.BoxGeometry(14 + r2() * 20, h, 14 + r2() * 20);
    disposables.push(g);
    const b = new THREE.Mesh(g, ctxMat);
    b.position.set(Math.cos(a) * dist, h / 2, Math.sin(a) * dist);
    b.rotation.y = r2() * 0.4;
    b.castShadow = b.receiveShadow = !lowPower;
    scene.add(b);
  }

  /* ---------- Highlight ring ---------- */
  const ringGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(W + 6, 0.1, D + 6));
  const ringMat = new THREE.LineBasicMaterial({ color: opts.accent, transparent: true, opacity: 0 });
  const ring = new THREE.LineSegments(ringGeo, ringMat);
  scene.add(ring);
  disposables.push(ringGeo, ringMat);

  /* ---------- State + animation ---------- */
  const height = 2 + floors * FH;
  const views: Record<ViewName, { pos: THREE.Vector3; target: THREE.Vector3 }> = {
    facade: { pos: new THREE.Vector3(150, 70, 190), target: new THREE.Vector3(0, height * 0.45, 0) },
    aerial: { pos: new THREE.Vector3(-170, 260, 150), target: new THREE.Vector3(0, height * 0.3, 0) },
    street: { pos: new THREE.Vector3(40, 4, 70), target: new THREE.Vector3(0, height * 0.6, 0) },
  };
  const state = {
    night: 0,
    nightTarget: 0,
    explode: 0,
    explodeTarget: 0,
    camPos: views.facade.pos.clone(),
    camTarget: views.facade.target.clone(),
    tweening: false,
    range: null as [number, number] | null,
  };
  camera.position.copy(views.facade.pos);
  controls.target.copy(views.facade.target);
  controls.addEventListener('start', () => {
    state.tweening = false;
    controls.autoRotate = false;
  });

  const day = { top: new THREE.Color('#5b7896'), hor: new THREE.Color('#e4d6c2'), fog: new THREE.Color('#d9cdbd'), ground: new THREE.Color('#8d877d') };
  const nite = { top: new THREE.Color('#05070c'), hor: new THREE.Color('#2a2420'), fog: new THREE.Color('#141110'), ground: new THREE.Color('#1c1a17') };

  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(1, h);
    camera.fov = w < 700 ? 42 : 32;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  const tmp = new THREE.Matrix4();
  const tv = new THREE.Vector3();
  let visible = true;
  let raf = 0;
  let last = performance.now();
  let k = 0.06;

  const tick = (now: number) => {
    raf = 0;
    if (!visible || document.hidden) return;
    // Frame-rate independent easing (same feel at 30 or 120 fps).
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;
    k = reducedMotion ? 1 : 1 - Math.exp(-dt * 3.2);

    // day / night
    state.night = lerp(state.night, state.nightTarget, k);
    const n = state.night;
    skyUniforms.top.value.copy(day.top).lerp(nite.top, n);
    skyUniforms.horizon.value.copy(day.hor).lerp(nite.hor, n);
    (scene.fog as THREE.Fog).color.copy(day.fog).lerp(nite.fog, n);
    groundMat.color.copy(day.ground).lerp(nite.ground, n);
    sun.intensity = lerp(3, 0.15, n);
    hemi.intensity = lerp(0.9, 0.12, n);
    lightMat.emissiveIntensity = lerp(0, 2.2, n);
    renderer.toneMappingExposure = lerp(1, 1.15, n);

    // exploded layers
    state.explode = lerp(state.explode, state.explodeTarget, k);
    const e = state.explode;
    floorList.forEach((f, i) => {
      const off = e * i * 1.4;
      f.slab.position.y = f.baseY + off;
      f.glass.position.y = f.baseY + FH / 2 + off;
      f.core.position.y = f.baseY + FH / 2 + off;
      f.lights.position.y = f.baseY + FH / 2 + off;
      f.glass.scale.setScalar(1 - e * 0.12);
    });
    glassMat.opacity = 1 - e * 0.55;
    if (fins) {
      for (let i = 0; i < finBase.length; i++) {
        tmp.copy(finBase[i]);
        tv.copy(finDir[i]).multiplyScalar(e * 9);
        tmp.elements[12] += tv.x;
        tmp.elements[14] += tv.z;
        tmp.elements[13] += e * floors * 0.7;
        fins.setMatrixAt(i, tmp);
      }
      fins.instanceMatrix.needsUpdate = true;
    }

    // highlight ring follows selection
    if (state.range) {
      const mid = (state.range[0] + state.range[1]) / 2 - 1;
      const f = floorList[Math.max(0, Math.min(floorList.length - 1, Math.round(mid)))];
      if (f) ring.position.y = lerp(ring.position.y, f.slab.position.y + 0.3, Math.min(1, k * 3));
      ringMat.opacity = lerp(ringMat.opacity, 1, k);
    } else ringMat.opacity = lerp(ringMat.opacity, 0, k);

    // camera tween
    if (state.tweening) {
      camera.position.lerp(state.camPos, k);
      controls.target.lerp(state.camTarget, k);
      if (camera.position.distanceTo(state.camPos) < 0.5) state.tweening = false;
    }

    controls.update();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  };
  const play = () => {
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  };

  const io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible) play();
  });
  io.observe(container);
  const onVis = () => !document.hidden && play();
  document.addEventListener('visibilitychange', onVis);
  play();

  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    io.disconnect();
    ro.disconnect();
    document.removeEventListener('visibilitychange', onVis);
    controls.dispose();
    fins?.dispose();
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
    });
    (sky.material as THREE.Material).dispose();
    disposables.forEach((d) => d.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    renderer.domElement.remove();
  };

  return {
    hasFloors,
    setView(v) {
      state.camPos.copy(views[v].pos);
      state.camTarget.copy(views[v].target);
      state.tweening = true;
      controls.autoRotate = false;
      play();
    },
    setNight(on) {
      state.nightTarget = on ? 1 : 0;
    },
    setExploded(on) {
      state.explodeTarget = on ? 1 : 0;
    },
    highlight(range) {
      state.range = range;
      floorList.forEach((f, i) => {
        const inRange = range && i + 1 >= range[0] && i + 1 <= range[1];
        f.glass.material = inRange ? glassHi : glassMat;
      });
      if (range) {
        const y = 2 + ((range[0] + range[1]) / 2) * FH;
        state.camTarget.set(0, y, 0);
        state.camPos.set(110, y + 30, 140);
        state.tweening = true;
        controls.autoRotate = false;
      }
    },
    dispose,
  };
}
