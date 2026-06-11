'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationMap = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-full min-h-[280px] sm:min-h-[320px] md:h-[400px] bg-navy rounded-2xl md:rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-8 border-4 md:border-8 border-white shadow-2xl"
  >
    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80')] bg-cover bg-center grayscale" />
    <div className="relative z-10">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto animate-float shadow-xl shadow-primary/20">
        <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight px-2">
        London, United Kingdom
      </h2>
      <p className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest">
        Global Academic Support Hub
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {['Global Reach', '24/7 Operation', 'Expert Writers'].map((tag) => (
          <div
            key={tag}
            className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default LocationMap;
