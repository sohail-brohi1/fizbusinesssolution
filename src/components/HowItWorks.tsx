'use client';

import { ClipboardList, UserCheck, FileCheck, type LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import ProcessStep from './how-it-works/ProcessStep';

const steps: { id: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    id: '01',
    title: 'Submit Requirements',
    desc: 'Fill the form with your assignment details and specific instructions.',
    icon: ClipboardList,
  },
  {
    id: '02',
    title: 'Expert Assigned',
    desc: 'We match you with the best subject expert to handle your work.',
    icon: UserCheck,
  },
  {
    id: '03',
    title: 'Receive Your Work',
    desc: 'AI-free, proofread work delivered to your inbox on time, every time.',
    icon: FileCheck,
  },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-site mx-auto px-4">
      <SectionHeader
        title="How It Works"
        subtitle="Get your academic success in three simple steps"
      />

      <div className="relative">
        <div className="hidden lg:block absolute top-[60px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
          {steps.map((step, i) => (
            <ProcessStep key={step.id} {...step} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
