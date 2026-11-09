/**
 * GitHub Pages serves project sites under /<repository>/.
 * Astro handles generated assets; this pass fixes root-relative links
 * authored in the template (logos, videos, internal navigation, etc.).
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = new URL('../dist/', import.meta.url);
const base = '/construtoras';

function prefix(url) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  if (url === base || url.startsWith(base + '/')) return url;
  return base + url;
}

function prefixSrcset(value) {
  return value.split(',').map((part) =>
    part.replace(/^(\s*)(\/[^\s]*)/, (_match, space, url) => space + prefix(url))
  ).join(',');
}

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const original = await readFile(fullPath, 'utf8');
      const updated = original.replace(
        /\b(href|src|srcset|imagesrcset|poster|data-src-mobile|data-src|data-model-url)=(["'])(.*?)\2/g,
        (match, attribute, quote, value) => {
          const rewritten = attribute.toLowerCase().includes('srcset') ? prefixSrcset(value) : prefix(value);
          return `${attribute}=${quote}${rewritten}${quote}`;
        },
      );
      if (updated !== original) await writeFile(fullPath, updated, 'utf8');
    }
  }
}

await visit(outputDir.pathname);
console.log('GitHub Pages paths normalized under ' + base);
