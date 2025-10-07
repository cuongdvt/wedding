import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const fontHastegi: NextFontWithVariable = localFont({
  src: '../../assets/fonts/hastegi.otf',
  variable: '--font-icielnovecentosans',
  display: 'swap',
});

export const fontIcielnovecentosans: NextFontWithVariable = localFont({
  src: '../../assets/fonts/icielnovecentosans-normal.ttf',
  variable: '--font-icielnovecentosans',
  display: 'swap',
});

export const fontBegatri: NextFontWithVariable = localFont({
  src: '../../assets/fonts/begatri.otf',
  variable: '--font-begatri',
  display: 'swap',
});

export const fontEbgaramond: NextFontWithVariable = localFont({
  src: '../../assets/fonts/ebgaramond.ttf',
  variable: '--font-begatri',
  display: 'swap',
});
