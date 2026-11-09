/**
 * Motion core — shared GSAP / ScrollTrigger / Lenis instances.
 * Everything is progressive: without JS or with reduced motion,
 * content is fully visible and static.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const motionOk = () => root.classList.contains('motion-ok') && !reducedMotion();
export const isTouch = () => window.matchMedia('(hover: none), (pointer: coarse)').matches;

/** Reads a numeric theme token, e.g. --motion-intensity */
export function token(name: string, fallback = 1) {
  const v = parseFloat(getComputedStyle(root).getPropertyValue(name));
  return Number.isFinite(v) ? v : fallback;
}

type LenisLike = { raf(t: number): void; scrollTo(t: unknown, o?: unknown): void; on(e: string, cb: () => void): void; destroy(): void; stop(): void; start(): void };
let lenis: LenisLike | null = null;

export async function initSmoothScroll() {
  if (lenis || !motionOk() || isTouch() || root.dataset.smooth !== 'true') return null;
  const { default: Lenis } = await import('lenis');
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 }) as unknown as LenisLike;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export const getLenis = () => lenis;

export function scrollToTarget(target: string | HTMLElement) {
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  if (!el) return false;
  if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
  else el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' });
  return true;
}

export function lockScroll(locked: boolean) {
  if (lenis) locked ? lenis.stop() : lenis.start();
  root.style.overflow = locked ? 'hidden' : '';
}

/** Releases every animation resource (used on pagehide). */
export function teardown() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  lenis?.destroy();
  lenis = null;
}

export { gsap, ScrollTrigger };
