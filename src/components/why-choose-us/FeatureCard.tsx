'use client';

import { motion } from 'framer-motion';
import type { FeatureCardProps } from '@/types';

const FeatureCard = ({ title, desc, icon: Icon, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all text-left h-full"
  >
    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default FeatureCard;
