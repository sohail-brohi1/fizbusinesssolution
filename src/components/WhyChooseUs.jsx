import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ShieldCheck, Clock, DollarSign, RotateCcw } from 'lucide-react';

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2 block">
      {count.toLocaleString()}{value.includes('+') ? '+' : ''}{value.includes('/') ? value.substring(value.indexOf('/')) : ''}
    </span>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Students Served", value: "10,000+" },
    { label: "Rating", value: "4.8/5" },
    { label: "Expert Ph.D Writers", value: "500+" },
    { label: "Student Support", value: "24/7" },
  ];

  return (
    <div className="bg-navy-light py-8 flex flex-wrap items-center justify-around text-white border-y border-white/10">
      {stats.map((stat, i) => (
        <React.Fragment key={stat.label}>
          <div className="text-center px-4">
            <Counter value={stat.value} />
            <p className="text-[10px] uppercase opacity-60 tracking-wider font-bold">{stat.label}</p>
          </div>
          {i < stats.length - 1 && <div className="hidden lg:block w-px h-10 bg-white/20"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "AI-Free Content",
      desc: "Every assignment is written from scratch by humans, guaranteed.",
      icon: ShieldCheck,
    },
    {
      title: "On-Time Delivery",
      desc: "We never miss a deadline. Get your work when you need it most.",
      icon: Clock,
    },
    {
      title: "Affordable Prices",
      desc: "Premium quality student-friendly pricing with regular discounts.",
      icon: DollarSign,
    },
    {
      title: "Money-Back Guarantee",
      desc: "Your satisfaction is our priority or get a full refund.",
      icon: RotateCcw,
    },
  ];

  return (
    <div className="bg-navy relative overflow-hidden">
      <StatsBar />
      
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Trusted by Thousands?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all text-left"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
