'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageHero from '@/components/ui/PageHero';
import ContactFormLayout from '@/components/contact/ContactFormLayout';
import ContactForm from '@/components/contact/ContactForm';
import AnimateIn from '@/components/ui/AnimateIn';
import SectionHeader from '@/components/ui/SectionHeader';
import { scrollToOrderForm, shouldScrollToOrderForm, ORDER_FORM_PATH } from '@/constants/orderNavigation';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('scrollTo') === 'form') {
      router.replace(ORDER_FORM_PATH);
      return;
    }
    if (shouldScrollToOrderForm(searchParams)) {
      setTimeout(() => scrollToOrderForm(), 150);
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <PageHero
        title="Contact Us & Get Expert Help"
        subtitle="Reach our team 24/7 via WhatsApp, email, or the order form below. We typically respond within 2 hours."
        breadcrumb="Contact"
        badge="📞 24/7 Support Available"
        backgroundImage="https://images.unsplash.com/photo-1423666639043-f560172c73c7?w=1600&q=80"
        highlights={['WhatsApp Chat', 'Email Support', 'Free Quote in Minutes']}
        ctaLabel="Place Your Order"
        ctaHref="#order-form"
        waveColor="#f9fafb"
      />

      <ContactFormLayout />

      <section className="py-12 md:py-16 max-w-site mx-auto px-4 w-full">
        <SectionHeader
          title="Need Regular Help?"
          subtitle="For general questions, support, or anything that isn't an assignment order — use the form below."
          className="mb-10 md:mb-12"
        />
        <AnimateIn>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
