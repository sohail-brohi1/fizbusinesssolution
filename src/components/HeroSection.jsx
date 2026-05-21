import React, { useState, useEffect } from 'react';
/* Import Swiper segments */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
/* Import Lucide icons */
import { Star, CheckCircle2 } from 'lucide-react';

/* CSS imports for Swiper */
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80",
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=1400&q=80",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1400&q=80",
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1400&q=80"
  ];

  const typingTexts = [
    "Expert Assignment Help",
    "AI-Free Guaranteed Work",
    "On-Time Every Time",
    "Trusted by 10,000+ Students"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex-1 w-full h-full bg-navy flex items-center p-8 md:p-12 lg:px-16 lg:py-12 overflow-hidden">
      {/* Background Carousel Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-left max-w-2xl mx-auto lg:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-bold mb-6 border border-white/20 text-white uppercase tracking-wider">
            ⭐ 4.8/5 — Rated #1 Assignment Help Service
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Get Professional <br />
            Academic Help
          </h1>

          <div className="h-10 sm:h-12 mb-6 sm:mb-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-primary border-l-4 border-primary pl-4"
              >
                {typingTexts[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-gray-300 text-base sm:text-lg max-w-md mb-8 sm:mb-10 leading-relaxed">
            100% original, AI-free academic writing by subject matter experts. 
            Delivered on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('order-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg text-lg shadow-xl shadow-primary/30 w-full sm:w-auto"
            >
              Order My Essay
            </motion.button>
            <motion.a
              href="https://wa.me/971543800388"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg text-lg flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/30 w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.125l-.694 2.54 2.6-.682c.847.459 1.763.702 2.837.702 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.435 8.16c-.145.412-.724.756-1.196.804-.428.044-.984.062-1.58-.13-.393-.127-.887-.311-1.536-.612-1.071-.497-2.115-1.542-2.612-2.613-.23-.497-.417-1.127-.417-1.78s.22-1.25.612-1.63c.2-.2.434-.247.578-.247.144 0 .288.002.414.009.13.007.31.026.475.4.165.375.568 1.346.618 1.447.05.101.1.22.025.37-.075.148-.112.247-.225.37-.113.123-.238.274-.338.371-.113.108-.23.226-.1.448.13.22.58.956 1.246 1.547.854.76 1.57.994 1.795 1.108.225.112.358.093.493-.06.134-.154.577-.668.73-.895.153-.227.306-.192.518-.112.213.08 1.343.633 1.573.748.23.115.383.172.438.267.055.096.055.556-.09.968zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat Now
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-white/60">
            <span className="text-xs flex items-center gap-1">✓ AI-Free Content</span>
            <span className="text-xs flex items-center gap-1">✓ Money-Back Guarantee</span>
            <span className="text-xs flex items-center gap-1">✓ 24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default HeroSection;
