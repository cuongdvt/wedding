import '@app/globals.css';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Wedding Invitation - Thái Cường & Thu Phương',
  description: 'The wedding of Thái Cường and Thu Phương',
  openGraph: {
    title: 'Wedding Invitation - Thái Cường & Thu Phương',
    description: 'The wedding of Thái Cường and Thu Phương',
    url: 'https://cuongdvt.github.io/wedding/',
    siteName: 'Wedding Invitation',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
