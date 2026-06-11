'use client';

import { ShieldCheck, Clock, DollarSign, RotateCcw, type LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import StatsBar from './why-choose-us/StatsBar';
import FeatureCard from './why-choose-us/FeatureCard';

const features: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'AI-Free Content',
    desc: 'Every assignment is written from scratch by humans, guaranteed.',
    icon: ShieldCheck,
  },
  {
    title: 'On-Time Delivery',
    desc: 'We never miss a deadline. Get your work when you need it most.',
    icon: Clock,
  },
  {
    title: 'Affordable Prices',
    desc: 'Premium quality student-friendly pricing with regular discounts.',
    icon: DollarSign,
  },
  {
    title: 'Money-Back Guarantee',
    desc: 'Your satisfaction is our priority or get a full refund.',
    icon: RotateCcw,
  },
];

const WhyChooseUs = () => (
  <div className="bg-navy relative overflow-hidden">
    <StatsBar />

    <section className="py-20 md:py-28 relative z-10">
      <div className="max-w-site mx-auto px-4">
        <SectionHeader
          title="Why Trusted by Thousands?"
          light
          className="mb-12 md:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default WhyChooseUs;
