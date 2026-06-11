'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, GraduationCap, ShieldCheck, Clock, Star } from 'lucide-react';
import WhatsAppLink from '@/components/ui/WhatsAppLink';
import { WHATSAPP_URL } from '@/constants/whatsapp';
import { ORDER_FORM_PATH } from '@/constants/orderNavigation';

import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80',
  'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=1600&q=80',
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1600&q=80',
];

const typingTexts = [
  'Expert Assignment Help',
  'AI-Free Guaranteed Work',
  'On-Time Every Time',
  'Trusted by 10,000+ Students',
];

const stats = [
  { icon: GraduationCap, value: '10K+', label: 'Happy Students' },
  { icon: Star, value: '4.8/5', label: 'Average Rating' },
  { icon: ShieldCheck, value: '100%', label: 'Plagiarism Free' },
  { icon: Clock, value: '24/7', label: 'Live Support' },
];

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home-hero" className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy">
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="h-full w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="w-full h-full bg-cover bg-center scale-105"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-navy/95 via-navy/85 to-navy-light/90" />
      <div className="absolute inset-0 z-[1] opacity-20 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-[1] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-[100px] z-[1] animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-site mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-bold mb-8 border border-white/20 text-white uppercase tracking-wider"
          >
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            Rated #1 Assignment Help Service
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]"
          >
            Get Professional{' '}
            <span className="gradient-text">Academic Help</span>
          </motion.h1>

          <div className="h-12 sm:h-14 mb-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90 border-l-4 border-primary pl-5"
              >
                {typingTexts[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            100% original, AI-free academic writing by subject matter experts.
            Delivered on time, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <Link
              href={ORDER_FORM_PATH}
              className="px-10 py-4 bg-primary text-white font-bold rounded-xl text-lg shadow-xl shadow-primary/40 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] transition-all text-center"
            >
              Order My Essay
            </Link>
            <WhatsAppLink
              href={WHATSAPP_URL}
              className="px-10 py-4 bg-[#25D366] text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/30 hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] transition-all"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.125l-.694 2.54 2.6-.682c.847.459 1.763.702 2.837.702 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.435 8.16c-.145.412-.724.756-1.196.804-.428.044-.984.062-1.58-.13-.393-.127-.887-.311-1.536-.612-1.071-.497-2.115-1.542-2.612-2.613-.23-.497-.417-1.127-.417-1.78s.22-1.25.612-1.63c.2-.2.434-.247.578-.247.144 0 .288.002.414.009.13.007.31.026.475.4.165.375.568 1.346.618 1.447.05.101.1.22.025.37-.075.148-.112.247-.225.37-.113.123-.238.274-.338.371-.113.108-.23.226-.1.448.13.22.58.956 1.246 1.547.854.76 1.57.994 1.795 1.108.225.112.358.093.493-.06.134-.154.577-.668.73-.895.153-.227.306-.192.518-.112.213.08 1.343.633 1.573.748.23.115.383.172.438.267.055.096.055.556-.09.968zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp
            </WhatsAppLink>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-start sm:items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Icon className="w-5 h-5 text-primary mb-2" />
                <span className="text-xl md:text-2xl font-bold text-white">{value}</span>
                <span className="text-[11px] text-white/50 uppercase tracking-wider font-semibold mt-0.5">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link
        href={ORDER_FORM_PATH}
        aria-label="Go to order form"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Place Order</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </Link>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}
