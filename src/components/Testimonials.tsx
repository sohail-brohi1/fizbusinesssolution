'use client';

import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import SectionHeader from './ui/SectionHeader';
import TestimonialCard from './testimonials/TestimonialCard';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah M.',
    country: '🇬🇧',
    text: 'FizBussinessSolution saved my final semester. My dissertation was handled with such professionalism. 100% AI-free and beautifully written!',
    rating: 5,
  },
  {
    name: 'Priya K.',
    country: '🇮🇳',
    text: "The best assignment help service I've ever used. The writers are subject matter experts and follow all university guidelines to the letter.",
    rating: 5,
  },
  {
    name: 'James T.',
    country: '🇨🇦',
    text: 'Incredible support and timely delivery. They managed my engineering coursework 2 days before the deadline. Highly recommended!',
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-site mx-auto px-4">
      <SectionHeader title="What Our Students Say" />

      <div className="flex items-center justify-center gap-1 text-yellow-400 mb-10 -mt-8">
        <Star className="w-5 h-5 fill-current" />
        <span className="font-bold text-navy text-sm md:text-base">4.8 / 5.0 Based on 10,000+ Reviews</span>
      </div>

      <div className="lg:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12 !overflow-visible"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.name}>
              <TestimonialCard {...t} index={i} animated={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:grid grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
