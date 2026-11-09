/**
 * Resolves media paths (relative to src/assets/media) into optimisable assets.
 * Drop new images into src/assets/media and reference them by path in content files.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/media/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function resolveImage(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = `/src/assets/media/${path.replace(/^\/+/, '')}`;
  const found = files[key];
  if (!found && import.meta.env.DEV) console.warn(`[media] image not found: ${key}`);
  return found?.default;
}

/** Fallback image used when a configured image is missing. */
export function firstAvailable(...paths: (string | null | undefined)[]) {
  for (const p of paths) {
    const img = resolveImage(p);
    if (img) return img;
  }
  return Object.values(files)[0]?.default;
}
