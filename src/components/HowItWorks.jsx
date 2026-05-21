import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Submit Requirements",
      desc: "Fill the form with your assignment details and specific instructions.",
      icon: ClipboardList,
    },
    {
      id: "02",
      title: "Expert Assigned",
      desc: "We match you with the best subject expert to handle your work.",
      icon: UserCheck,
    },
    {
      id: "03",
      title: "Receive Your Work",
      desc: "AI-free, proofread work delivered to your inbox on time, every time.",
      icon: FileCheck,
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Get your academic success in three simple steps</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative inline-block mb-8">
                  <div className="w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 relative group">
                    <step.icon className="w-12 h-12 text-primary transition-transform group-hover:scale-110" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.id}
                    </div>
                  </div>
                </div>
                <h3 className="text-navy font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
