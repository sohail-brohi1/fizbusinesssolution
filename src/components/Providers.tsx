'use client';

import { Toaster } from 'react-hot-toast';
import type { ProvidersProps } from '@/types';

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
