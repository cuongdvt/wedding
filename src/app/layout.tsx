import '@app/globals.css';
import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Thái Cường & Thu Phương',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
};
