'use client';

import {
  BookOpen, FileText, Pencil, Home, Scroll, Search, Briefcase, Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ServiceCard from './services/ServiceCard';

const services: { name: string; icon: LucideIcon; desc: string }[] = [
  { name: 'Assignment Help', icon: BookOpen, desc: 'Professional help with complex academic assignments.' },
  { name: 'Dissertation Writing', icon: Scroll, desc: 'Step-by-step guidance for your final dissertation.' },
  { name: 'Essay Writing', icon: FileText, desc: 'Engaging and research-backed essays on any topic.' },
  { name: 'Homework Help', icon: Home, desc: 'Quick and accurate assistance for daily homework.' },
  { name: 'Thesis Writing', icon: Pencil, desc: 'High-quality thesis preparation for your degree.' },
  { name: 'Research Paper', icon: Search, desc: 'Deeply researched papers for academic success.' },
  { name: 'Case Study', icon: Briefcase, desc: 'Solving real-world scenarios with critical analysis.' },
  { name: 'Nursing Assignment', icon: Stethoscope, desc: 'Expert help for healthcare and nursing students.' },
];

const ServicesGrid = () => (
  <section className="py-20 md:py-28 bg-white" id="services">
    <div className="max-w-site mx-auto px-4">
      <SectionHeader
        title="Our Academic Writing Services"
        subtitle="From essays to dissertations, our expert academic writers deliver high-quality, AI-free content tailored to your needs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.name} {...service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
