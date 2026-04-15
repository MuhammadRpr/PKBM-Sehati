import type { Metadata } from 'next';
import '@/styles/globals.css';
import { generateSiteMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
