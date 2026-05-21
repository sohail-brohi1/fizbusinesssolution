import React from 'react';
import { motion } from 'framer-motion';
/* Import icons from lucide-react */
import { 
  BookOpen, 
  FileText, 
  Pencil, 
  Home, 
  Scroll, 
  Search, 
  Briefcase, 
  Stethoscope,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { name: "Assignment Help", icon: BookOpen, desc: "Professional help with complex academic assignments." },
  { name: "Dissertation Writing", icon: Scroll, desc: "Step-by-step guidance for your final dissertation." },
  { name: "Essay Writing", icon: FileText, desc: "Engaging and research-backed essays on any topic." },
  { name: "Homework Help", icon: Home, desc: "Quick and accurate assistance for daily homework." },
  { name: "Thesis Writing", icon: Pencil, desc: "High-quality thesis preparation for your degree." },
  { name: "Research Paper", icon: Search, desc: "Deeply researched papers for academic success." },
  { name: "Case Study", icon: Briefcase, desc: "Solving real-world scenarios with critical analysis." },
  { name: "Nursing Assignment", icon: Stethoscope, desc: "Expert help for healthcare and nursing students." }
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Our Academic Writing Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From essays to dissertations, our expert academic writers are here to help you achieve your goals with high-quality, AI-free content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-navy font-bold text-lg mb-3">{service.name}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link 
                to="/?scrollTo=form" 
                className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
              >
                Order Now <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
