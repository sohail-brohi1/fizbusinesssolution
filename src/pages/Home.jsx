import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import MarqueeBanner from '../components/MarqueeBanner';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import OrderForm from '../components/OrderForm';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();
  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'form') {
      const element = document.getElementById('order-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    const handleScroll = () => {
      const form = document.getElementById('order-form');
      if (form) {
        const rect = form.getBoundingClientRect();
        setShowHelper(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Assignment Help UK | Expert Academic Writing | FizBussinessSolution</title>
        <meta name="description" content="Get AI-free, expert assignment help in UK, USA, Canada & Australia. Dissertations, essays, coursework — 100% original, on-time delivery. 10,000+ students trust us." />
        <link rel="canonical" href="https://fizbussinesssolution.com/" />
        <meta property="og:title" content="Assignment Help UK | Expert Academic Writing | FizBussinessSolution" />
        <meta property="og:description" content="Get AI-free, expert assignment help in UK, USA, Canada & Australia. Dissertations, essays, coursework — 100% original, on-time delivery. 10,000+ students trust us." />
        <meta property="og:url" content="https://fizbussinesssolution.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" />
      </Helmet>

      <MarqueeBanner />
      <Navbar />
      <main className="bg-gray-50 overflow-x-hidden">
        {/* Hero Section & Form Container */}
        <section className="relative w-full bg-navy lg:bg-transparent">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-screen lg:max-h-[1000px] shadow-2xl relative z-10">
            {/* Left Side: Hero content centered */}
            <div className="w-full h-full order-1 lg:order-1 relative">
              <HeroSection />
            </div>
            
            {/* Right Side: Form card scrollable */}
            <div id="order-form" className="w-full h-full flex items-center justify-center bg-white p-4 lg:p-8 order-2 lg:order-2 border-l border-gray-100">
              <div className="w-full max-w-xl">
                <OrderForm />
              </div>
            </div>
          </div>
        </section>
        
        <ServicesGrid />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />

      {/* Sticky Help Banner */}
      <AnimatePresence>
        {showHelper && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-md text-white py-4 px-6 z-[9990] flex items-center justify-between shadow-2xl border-t border-white/10 md:hidden"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">Need Help Fast?</p>
                <p className="text-sm font-bold">Chat with our experts</p>
              </div>
            </div>
            <a 
              href="https://wa.me/971543800388" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg"
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
