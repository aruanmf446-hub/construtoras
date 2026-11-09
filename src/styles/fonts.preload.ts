/**
 * Fonts preloaded in <head> to avoid layout shift on the first, monumental
 * headline. Keep in sync with src/styles/fonts.css when changing fonts.
 */
import display from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url';
import serifItalic from '@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2?url';

export const fontPreloads: string[] = [display, serifItalic];
