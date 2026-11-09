/** Converts the active theme tokens into CSS custom properties. */
import { themes } from '../config/theme.config';
import { site } from '../config/site.config';
import type { ThemeTokens } from '../config/types';

export function activeTheme(): ThemeTokens {
  return themes[site.theme] ?? Object.values(themes)[0];
}

const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

export function themeCss(theme = activeTheme()): string {
  const vars: string[] = [];
  const walk = (obj: Record<string, unknown>, prefix: string) => {
    for (const [k, v] of Object.entries(obj)) {
      if (v && typeof v === 'object') walk(v as Record<string, unknown>, `${prefix}-${kebab(k)}`);
      else vars.push(`${prefix}-${kebab(k)}: ${v};`);
    }
  };
  const { scheme, ...tokens } = theme;
  walk(tokens as Record<string, unknown>, '-');
  return `:root{color-scheme:${scheme};${vars.join('')}}`;
}
