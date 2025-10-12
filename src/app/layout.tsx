import '@app/globals.css';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Wedding Invitation - Thái Cường & Thu Phương',
  description: 'The wedding of Thái Cường and Thu Phương',
};

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:url" content="https://cuongdvt.github.io/wedding/" />
        <meta property="og:title" content="Wedding Invitation - Thái Cường & Thu Phương" />
        <meta property="og:image" content="https://cuongdvt.github.io/wedding/images/1.jpg" />
        <meta property="og:description" content="The wedding of Thái Cường and Thu Phương" />
        <meta property="og:type" content="website" />
      </head>
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
