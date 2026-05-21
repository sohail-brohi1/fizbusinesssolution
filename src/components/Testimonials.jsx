import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Sarah M.",
    country: "🇬🇧",
    text: "FizBussinessSolution saved my final semester. My dissertation was handled with such professionalism. 100% AI-free and beautifully written!",
    rating: 5,
  },
  {
    name: "Priya K.",
    country: "🇮🇳",
    text: "The best assignment help service I've ever used. The writers are subject matter experts and follow all university guidelines to the letter.",
    rating: 5,
  },
  {
    name: "James T.",
    country: "🇨🇦",
    text: "Incredible support and timely delivery. They managed my engineering course work 2 days before the deadline. Highly recommended!",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">What Our Students Say</h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-8">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-bold text-navy">4.8 / 5.0 Based on 10,000+ Reviews</span>
          </div>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={t.name}>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-navy font-bold">{t.name} {t.country}</h4>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-primary fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-navy font-bold">{t.name} {t.country}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-primary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
