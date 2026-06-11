'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { TestimonialCardProps } from '@/types';

const TestimonialCard = ({ name, country, text, rating, index, animated = true }: TestimonialCardProps) => {
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
      }
    : {};

  const content = (
    <>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-navy font-bold">{name} {country}</h4>
          <div className="flex gap-0.5 mt-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-primary fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic leading-relaxed">&ldquo;{text}&rdquo;</p>
    </>
  );

  if (animated) {
    return (
      <motion.div
        {...animationProps}
        className="p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors h-full"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className="p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/30 transition-colors h-full">
      {content}
    </div>
  );
};

export default TestimonialCard;
