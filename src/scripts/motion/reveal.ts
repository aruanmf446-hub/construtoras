/**
 * Declarative reveal engine. Sections only declare intent through attributes:
 *   data-reveal="lines | fade | mask | draw"
 *   data-slats          (brise-soleil slat reveal, on .slats containers)
 *   data-parallax="0.12"
 *   data-count="64" data-decimals="1"
 * Elements inside [data-intro] are skipped (the hero animates them itself).
 */
import { gsap, ScrollTrigger, motionOk, token } from './core';

const outside = (el: Element) => !el.closest('[data-intro]');
const all = <T extends Element = HTMLElement>(sel: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(sel)).filter(outside);

export function animateLines(el: Element, delay = 0) {
  return gsap.to(el.querySelectorAll('.line__inner'), {
    yPercent: 0,
    y: 0,
    duration: 1.3,
    ease: 'expo.out',
    stagger: 0.09,
    delay,
  });
}

export function animateSlats(el: Element, delay = 0) {
  const spans = el.querySelectorAll('span');
  return gsap.to(spans, {
    scaleY: 0,
    duration: 1.25,
    ease: 'expo.inOut',
    stagger: { each: 0.07, from: 'center' },
    delay,
    onComplete: () => ((el as HTMLElement).style.visibility = 'hidden'),
  });
}

function formatCount(el: HTMLElement, value: number) {
  const decimals = Number(el.dataset.decimals || 0);
  el.textContent = value.toLocaleString(document.documentElement.lang || 'pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function initReveals(scope: ParentNode = document) {
  if (!motionOk()) return;
  const k = token('--motion-intensity', 1);

  all('[data-reveal="lines"]', scope).forEach((el) => {
    gsap.set(el.querySelectorAll('.line__inner'), { yPercent: 110 });
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => animateLines(el) });
  });

  const fades = all('[data-reveal="fade"]', scope);
  if (fades.length) {
    ScrollTrigger.batch(fades, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
    });
  }

  all('[data-reveal="mask"]', scope).forEach((el) => {
    const img = el.querySelector('img');
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'expo.inOut' });
        if (img) gsap.fromTo(img, { scale: 1 + 0.18 * k }, { scale: 1, duration: 2, ease: 'expo.out' });
      },
    });
  });

  all('[data-reveal="draw"]', scope).forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => gsap.to(el, { scaleX: 1, duration: 1.6, ease: 'expo.inOut' }),
    });
  });

  all('[data-slats]', scope).forEach((el) => {
    ScrollTrigger.create({ trigger: el.parentElement || el, start: 'top 80%', once: true, onEnter: () => animateSlats(el) });
  });

  all('[data-parallax]', scope).forEach((el) => {
    const p = Number(el.dataset.parallax || 0.1) * k;
    gsap.fromTo(
      el,
      { yPercent: -p * 50 },
      {
        yPercent: p * 50,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });

  all('[data-count]', scope).forEach((el) => {
    const target = Number(el.dataset.count);
    const obj = { v: 0 };
    formatCount(el, 0);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(obj, { v: target, duration: 2.2, ease: 'expo.out', onUpdate: () => formatCount(el, obj.v) }),
    });
  });
}
