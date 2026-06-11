import { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';
import LoadingSpinner from '@/components/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Contact Us | WhatsApp +971543800388',
  description: 'Get in touch with FizBussinessSolution 24/7. Contact us via WhatsApp, email, or our contact form for expert academic help.',
  alternates: { canonical: 'https://fizbussinesssolution.com/contact' },
};

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ContactPage />
    </Suspense>
  );
}
