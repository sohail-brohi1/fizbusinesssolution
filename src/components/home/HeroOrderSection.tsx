import HeroSection from '@/components/HeroSection';
import OrderForm from '@/components/OrderForm';

export default function HeroOrderSection() {
  return (
    <section className="relative w-full bg-navy lg:bg-transparent overflow-hidden">
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 lg:min-h-[min(100vh,900px)] shadow-2xl relative z-10">
        <div className="w-full min-h-[50vh] sm:min-h-[55vh] lg:min-h-0 lg:h-full order-1 relative">
          <HeroSection
            breadcrumb="Contact"
            badge="📞 24/7 Support Available"
            title="Contact &"
            titleHighlight="Place Your Order"
            subtitle="Questions about your assignment? Our experts are ready on WhatsApp, email, or the form beside you — typically within 2 hours."
            typingTexts={[
              'Fastest Response on WhatsApp',
              'Expert Writers On Standby',
              'Free Quote in Minutes',
              'Confidential & Secure',
            ]}
            images={[
              'https://images.unsplash.com/photo-1423666639043-f560172c73c7?w=1400&q=80',
              'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&q=80',
              'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80',
            ]}
          />
        </div>
        <div
          id="order-form"
          className="w-full flex items-start lg:items-center justify-center bg-white p-4 sm:p-6 lg:p-8 order-2 border-t lg:border-t-0 lg:border-l border-gray-100 scroll-mt-[110px]"
        >
          <div className="w-full max-w-xl py-4 lg:py-6">
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
}
