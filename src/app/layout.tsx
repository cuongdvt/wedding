import '@app/globals.css';
import type { Metadata } from 'next';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Thái Cường & Thu Phương',
};

const icielnovecentosans: NextFontWithVariable = localFont({
  src: '../../assets/fonts/icielnovecentosans-normal.ttf',
  variable: '--font-icielnovecentosans',
  display: 'swap',
});

interface Props {
  children: React.ReactElement;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${icielnovecentosans.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
