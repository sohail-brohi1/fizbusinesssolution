'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Lock } from 'lucide-react';
import OrderForm from '@/components/OrderForm';
import SectionHeader from '@/components/ui/SectionHeader';

const perks = [
  { icon: CheckCircle2, text: 'Free plagiarism report included' },
  { icon: Zap, text: 'Get a quote in under 2 minutes' },
  { icon: Lock, text: 'Your data is 100% confidential' },
];

export default function OrderSection() {
  return (
    <section
      id="order-form"
      className="relative bg-gray-50 pt-4 pb-20 md:pb-28 scroll-mt-[110px]"
    >
      <div className="max-w-site mx-auto px-4">
        <SectionHeader
          title="Place Your Order"
          subtitle="Fill in the details below and our experts will get started on your assignment right away."
          className="mb-10 md:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Trust sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Why Order With Us?</h3>
                <ul className="space-y-4">
                  {[
                    'PhD-qualified writers in every subject',
                    'AI-free, human-written content guaranteed',
                    'Unlimited free revisions within 30 days',
                    'Money-back guarantee if requirements aren\'t met',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              {perks.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-navy">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-xl shadow-navy/5 border border-gray-100 p-6 sm:p-8 md:p-10"
          >
            <OrderForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
