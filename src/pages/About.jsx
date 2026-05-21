import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, Users, ThumbsUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StatCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace(/\D/g, ''));
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = (totalDuration / end);

      let timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 20);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-primary mb-2">
        {count.toLocaleString()}{value.includes('+') ? '+' : ''}{value.includes('%') ? '%' : ''}
      </div>
      <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">{label}</div>
    </div>
  );
};

const About = () => {
  const experts = [
    {
      name: "Dr. James Wilson",
      title: "Senior Dissertation Expert",
      specialty: "Social Sciences & Humanities",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Prof. Sarah Miller",
      title: "Academic Research Lead",
      specialty: "Nursing & Healthcare",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Dr. Robert Chen",
      title: "Technical Writing Specialist",
      specialty: "Engineering & IT",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ];

  const guarantees = [
    {
      title: "Money-Back Guarantee",
      icon: Award,
      desc: "Not satisfied with the quality? We offer 100% refund as per our policy."
    },
    {
      title: "Plagiarism-Free",
      icon: ShieldCheck,
      desc: "Every paper is checked with Turnitin to ensure 100% originality."
    },
    {
      title: "Confidentiality",
      icon: Users,
      desc: "Your personal data and order details are strictly protected and never shared."
    },
    {
      title: "Revision Policy",
      icon: ThumbsUp,
      desc: "We provide unlimited revisions until you are completely satisfied."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Expert Academic Writing Team | FizBussinessSolution</title>
        <meta name="description" content="Learn about FizBussinessSolution, a global leader in professional academic writing services with over 500 subject matter experts." />
        <link rel="canonical" href="https://fizbussinesssolution.com/about" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white opacity-60">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">About FizBussinessSolution</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Empowering students worldwide with premium academic writing and research support.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-navy leading-tight mb-8">
                We Help Students Achieve <span className="text-primary">Academic Excellence</span>
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                  alt="Student Team" 
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <p>
                Founded on the principles of integrity and academic rigor, FizBussinessSolution has emerged as a global leader in professional academic writing services. We understand the immense pressure students face today, and our mission is to provide a reliable support system that ensures success without compromising on quality.
              </p>
              <p>
                Our journey began over 8 years ago with a small group of PhD researchers dedicated to helping students navigate complex dissertations. Today, we have grown into a multidisciplinary agency with over 500 subject matter experts across various fields including Business, Nursing, Law, Engineering, and Social Sciences.
              </p>
              <p>
                We believe in human-centric writing. In an age of AI-generated content, we stand firm in our commitment to 100% original, researcher-crafted assignments that reflect deep understanding and critical thinking.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12">
          <StatCounter value="8+" label="Years Experience" />
          <StatCounter value="10000+" label="Students Helped" />
          <StatCounter value="500+" label="Subject Experts" />
          <StatCounter value="98%" label="Satisfaction Rate" />
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Foundation Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                FizBussinessSolution was born out of a simple observation: students were struggling to find authentic, high-quality academic help. Many services were providing generic, low-quality content that put students' grades at risk.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                We decided to change that. By hiring only the top 5% of applicants—those with Masters and PhD degrees from reputable universities—we've set a new standard for academic writing. Our story is one of continuous growth, driven by the success of our students.
              </p>
              <Link to="/services" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:brightness-110 transition-all">
                Explore Our Services
              </Link>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" 
                alt="Academic Vision" 
                className="rounded-2xl shadow-xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-16 uppercase tracking-tight">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover rounded-full border-4 border-primary p-1 transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-1">{expert.name}</h3>
                <p className="text-primary text-sm font-bold mb-4 uppercase tracking-wider">{expert.title}</p>
                <div className="h-px bg-gray-100 w-full mb-4"></div>
                <p className="text-gray-500 text-sm font-medium mb-4">Specialty: {expert.specialty}</p>
                <div className="flex justify-center text-yellow-500 gap-1">
                  {"★★★★★".split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-white font-bold text-lg mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
