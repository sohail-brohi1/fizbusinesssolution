import { Suspense } from 'react';
import type { Metadata } from 'next';
import HomePage from '@/components/pages/HomePage';
import LoadingSpinner from '@/components/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Assignment Help UK | Expert Academic Writing',
  description:
    'Get AI-free, expert assignment help in UK, USA, Canada & Australia. Dissertations, essays, coursework — 100% original, on-time delivery. 10,000+ students trust us.',
  alternates: { canonical: 'https://fizbussinesssolution.com/' },
  openGraph: {
    title: 'Assignment Help UK | Expert Academic Writing | FizBussinessSolution',
    description:
      'Get AI-free, expert assignment help in UK, USA, Canada & Australia. Dissertations, essays, coursework — 100% original, on-time delivery.',
    url: 'https://fizbussinesssolution.com',
    images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80'],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  );
}
