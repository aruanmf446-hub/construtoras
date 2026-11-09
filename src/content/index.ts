/**
 * Content entry point: merges base content with the active profile overrides.
 * Components import `content` from here — never hard-code copy in components.
 */
import { site } from '../config/site.config';
import { base } from './base';
import type { SiteContent } from './schema';
import { developer } from './profiles/developer';
import { institutional } from './profiles/institutional';
import { engineering } from './profiles/engineering';

type DeepPartial<T> = T extends unknown[] ? T : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;
export type ContentOverrides = DeepPartial<SiteContent>;

function merge<T>(target: T, source: unknown): T {
  if (!source || typeof source !== 'object' || Array.isArray(source)) return (source ?? target) as T;
  const out: Record<string, unknown> = { ...(target as Record<string, unknown>) };
  for (const [k, v] of Object.entries(source)) {
    const t = out[k];
    out[k] = v && typeof v === 'object' && !Array.isArray(v) && t && typeof t === 'object' ? merge(t, v) : v;
  }
  return out as T;
}

const overrides = { developer, institutional, engineering }[site.profile] ?? {};

export const content: SiteContent = merge(base, overrides);
export type { SiteContent } from './schema';
