'use client';

import { useState, useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import type { AnimatedCounterProps } from '@/types';

export const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''), 10);
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  const suffix = value.includes('+') ? '+' : '';
  const fraction = value.includes('/') ? value.substring(value.indexOf('/')) : '';

  return (
    <span ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 block">
      {count.toLocaleString()}{suffix}{fraction}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    { label: 'Students Served', value: '10,000+' },
    { label: 'Rating', value: '4.8/5' },
    { label: 'Expert Ph.D Writers', value: '500+' },
    { label: 'Student Support', value: '24/7' },
  ];

  return (
    <div className="bg-navy-light py-10 md:py-12">
      <div className="max-w-site mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center relative">
            <AnimatedCounter value={stat.value} />
            <p className="text-[10px] md:text-xs uppercase opacity-60 tracking-wider font-bold text-white">
              {stat.label}
            </p>
            {i < stats.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-2 w-px h-10 bg-white/20 -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
