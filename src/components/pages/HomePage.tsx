'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import HomeHero from '@/components/home/HomeHero';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/home/CTASection';
import StickyHelpBanner from '@/components/home/StickyHelpBanner';
import { ORDER_FORM_PATH } from '@/constants/orderNavigation';

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    if (searchParams.get('scrollTo') === 'form') {
      router.replace(ORDER_FORM_PATH);
      return;
    }

    const handleScroll = () => {
      const hero = document.getElementById('home-hero');
      if (hero) {
        setShowHelper(hero.getBoundingClientRect().bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchParams, router]);

  return (
    <>
      <main className="bg-gray-50 overflow-x-hidden">
        <HomeHero />
        <ServicesGrid />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>
      <StickyHelpBanner show={showHelper} />
    </>
  );
}
