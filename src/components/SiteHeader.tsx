'use client';

import MarqueeBanner from '@/components/MarqueeBanner';
import Navbar from '@/components/Navbar';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-[1000] w-full">
      <MarqueeBanner />
      <Navbar />
    </header>
  );
}
