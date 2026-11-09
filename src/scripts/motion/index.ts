/**
 * Motion bootstrap — loaded once per page by BaseLayout.
 */
import { ScrollTrigger, initSmoothScroll, motionOk, scrollToTarget, teardown } from './core';
import { initReveals } from './reveal';

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

async function boot() {
  try {
    if (motionOk()) {
      await initSmoothScroll();
      initReveals();
    }
  } catch (err) {
    console.warn('[motion] disabled:', err);
    document.documentElement.classList.add('motion-failsafe');
  }
  window.__motionReady = true;

  // In-page anchors go through the smooth scroller.
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash || url.hash === '#') return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    scrollToTarget(target);
    history.pushState(null, '', url.hash);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

  // Shared-element page transition: the clicked project image morphs into the next page hero.
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-project-link]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    document.querySelectorAll<HTMLElement>('[data-vt-media]').forEach((el) => (el.style.viewTransitionName = ''));
    const media = a.querySelector<HTMLElement>('[data-vt-media]') ?? a.closest('[data-project]')?.querySelector<HTMLElement>('[data-vt-media]');
    if (media) media.style.viewTransitionName = 'project-media';
  });
  window.addEventListener('pageshow', () =>
    document.querySelectorAll<HTMLElement>('[data-vt-media]').forEach((el) => (el.style.viewTransitionName = ''))
  );

  // Layout can move once fonts arrive.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

  // Arriving with a hash (e.g. /#contato from another page).
  if (location.hash) {
    const t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (t) requestAnimationFrame(() => setTimeout(() => scrollToTarget(t), 60));
  }
}

window.addEventListener('pagehide', (e) => {
  if (!e.persisted) teardown();
});

boot();
