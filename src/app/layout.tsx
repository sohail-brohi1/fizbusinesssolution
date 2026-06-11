import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Providers from '@/components/Providers';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CookieConsent from '@/components/CookieConsent';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://fizbussinesssolution.com'),
  title: {
    default: 'Assignment Help UK | Expert Academic Writing | FizBussinessSolution',
    template: '%s | FizBussinessSolution',
  },
  description:
    'Get AI-free, expert assignment help in UK, USA, Canada & Australia. Dissertations, essays, coursework — 100% original, on-time delivery.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'FizBussinessSolution',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'FizBussinessSolution',
              url: 'https://fizbussinesssolution.com',
              logo: 'https://fizbussinesssolution.com/apple-icon',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971543800388',
                contactType: 'customer service',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
          <ScrollToTopButton />
          <FloatingWhatsApp />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
