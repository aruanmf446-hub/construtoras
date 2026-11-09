/**
 * Hero WebGL layer — raw WebGL (no library) for a tiny footprint.
 *
 * Effects, all subtle and tied to architecture:
 *  - luminance-weighted pointer parallax (pseudo depth)
 *  - a slow raking "golden hour" light sweep across façades
 *  - brise-soleil fragmentation when the page scrolls
 *  - vignette + grain
 *
 * Renders only while visible; releases the GL context on teardown.
 */

const VERT = `
attribute vec2 p;
varying vec2 vUv;
void main(){ vUv = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uRes;
uniform vec2 uImg;
uniform vec2 uMouse;
uniform float uTime;
uniform float uScroll;
uniform float uSlats;

float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec2 cover(vec2 uv){
  float rs = uRes.x / uRes.y;
  float ri = uImg.x / uImg.y;
  vec2 s = rs < ri ? vec2(rs / ri, 1.0) : vec2(1.0, ri / rs);
  return (uv - 0.5) * s + 0.5;
}

void main(){
  vec2 uv = vUv;
  // brise fragmentation driven by scroll
  float cols = uSlats;
  float col = floor(uv.x * cols);
  float k = (hash(vec2(col, 3.1)) - 0.5);
  uv.y += k * uScroll * 0.06;
  uv = cover(uv);
  // zoom out slightly so displacement never shows edges
  uv = (uv - 0.5) * (0.94 - uScroll * 0.04) + 0.5;

  vec3 base = texture2D(uTex, uv).rgb;
  float lum = dot(base, vec3(0.299, 0.587, 0.114));
  // pseudo-depth parallax: brighter = nearer façades
  vec2 disp = uMouse * (0.006 + lum * 0.012);
  vec3 col3 = vec3(
    texture2D(uTex, uv + disp * 1.02).r,
    texture2D(uTex, uv + disp).g,
    texture2D(uTex, uv + disp * 0.98).b
  );

  // raking light sweep (diagonal band)
  float t = uTime * 0.045;
  float band = sin((vUv.x * 0.8 + vUv.y * 0.6 - t) * 6.2831 * 0.6);
  band = smoothstep(0.82, 1.0, band);
  col3 += vec3(1.0, 0.78, 0.52) * band * lum * 0.22;

  // slat seams appear as the page scrolls
  float seam = smoothstep(0.0, 0.004, abs(fract(vUv.x * cols) - 0.5) - 0.497);
  col3 *= mix(1.0, 0.55 + 0.45 * (1.0 - seam), uScroll);

  // vignette + grain
  vec2 q = vUv - 0.5;
  col3 *= 1.0 - dot(q, q) * 0.55;
  col3 += (hash(vUv * uRes + uTime) - 0.5) * 0.035;
  col3 *= 1.0 - uScroll * 0.35;
  gl_FragColor = vec4(col3, 1.0);
}
`;

interface Options {
  pointer: boolean;
}

export async function createHeroShader(canvas: HTMLCanvasElement, src: string, root: HTMLElement, opts: Options) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
  if (!gl) return null;

  const compile = (type: number, code: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, code);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || 'shader');
    return s;
  };
  const prog = gl.createProgram()!;
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const u = (n: string) => gl.getUniformLocation(prog, n);
  const uRes = u('uRes'), uImg = u('uImg'), uMouse = u('uMouse'), uTime = u('uTime'), uScroll = u('uScroll'), uSlats = u('uSlats');

  // Texture
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
  await img.decode();
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform2f(uImg, img.naturalWidth, img.naturalHeight);
  gl.uniform1f(uSlats, window.innerWidth < 700 ? 5 : 7);

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
    gl.uniform2f(uRes, w, h);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMove = (e: PointerEvent) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
  };
  if (opts.pointer) window.addEventListener('pointermove', onMove, { passive: true });

  let visible = true;
  let raf = 0;
  const start = performance.now();
  let lastDraw = 0;
  const frame = (now: number) => {
    raf = 0;
    if (!visible || document.hidden) return;
    // ~30 fps is plenty for slow ambient motion and halves GPU work.
    if (now - lastDraw < 32) {
      raf = requestAnimationFrame(frame);
      return;
    }
    lastDraw = now;
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    const rect = root.getBoundingClientRect();
    const scroll = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
    gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.uniform1f(uTime, (now - start) / 1000);
    gl.uniform1f(uScroll, scroll);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    raf = requestAnimationFrame(frame);
  };
  const play = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) play();
  });
  io.observe(root);
  const onVis = () => !document.hidden && play();
  document.addEventListener('visibilitychange', onVis);

  // First frame, then reveal.
  frame(performance.now());
  canvas.classList.add('is-ready');

  const destroy = () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    ro.disconnect();
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('visibilitychange', onVis);
    gl.deleteTexture(tex);
    gl.deleteBuffer(buf);
    gl.deleteProgram(prog);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  };
  window.addEventListener('pagehide', (e) => !e.persisted && destroy(), { once: true });
  canvas.addEventListener('webglcontextlost', () => {
    destroy();
    canvas.remove();
  });
  return { destroy };
}
