import type { Metadata } from 'next';

import './globals.css';

import { fontBody, fontHeading, siteConfig } from '@/lib/config';
import { SupabaseClientProvider } from '@/provider/supabase-provider';
import { ThemeProvider } from '@/provider/theme-provider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
    siteName: siteConfig.name,
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    card: 'summary_large_image',
    site: siteConfig.links.twitter,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={(fontHeading.variable, fontBody.variable)}>
        <SupabaseClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SupabaseClientProvider>
      </body>
    </html>
  );
}
