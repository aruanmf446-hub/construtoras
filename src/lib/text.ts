/** `*word*` → <em class="accent">word</em>. Escapes everything else. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function accent(text: string): string {
  return esc(text).replace(/\*(.+?)\*/g, '<em class="accent">$1</em>');
}

export const plain = (text: string) => text.replace(/\*/g, '');
export const linesToText = (lines: string[]) => lines.map(plain).join(' ');
export const pad = (n: number, len = 2) => String(n).padStart(len, '0');
