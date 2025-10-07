import '@app/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Thái Cường & Thu Phương',
};

const icielnovecentosans = localFont({
  src: '../../assets/fonts/icielnovecentosans-normal.ttf',
  variable: '--font-icielnovecentosans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${icielnovecentosans.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
