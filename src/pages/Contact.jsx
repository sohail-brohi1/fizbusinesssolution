import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Clock, MapPin, Send, Loader2, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // EmailJS logic
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing.");
      toast.error('❌ Configuration error: API keys not found in settings.');
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(publicKey);

      const templateParams = {
        // Variation 1
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        to_name: "FizBS Admin",
        to_email: "mf9637311@gmail.com",
        recipient_email: "mf9637311@gmail.com",
        subject: data.subject,
        message: data.message,
        
        // Variation 2
        name: data.name,
        email: data.email
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        toast.success('✅ Message sent successfully to Gmail!');
        reset();
      } else {
        throw new Error(`EmailJS returned status ${result.status}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMsg = error?.text || error?.message || "Unknown error";
      toast.error(`❌ Sending failed: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: Phone,
      label: "WhatsApp Support",
      value: "+971 54 380 0388",
      link: "https://wa.me/971543800388",
      color: "bg-[#25D366]",
      desc: "Click to chat instantly"
    },
    {
      icon: Mail,
      label: "Official Email",
      value: "jnaeem672@gmail.com",
      link: "mailto:jnaeem672@gmail.com",
      color: "bg-navy",
      desc: "Response within 24 hours"
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "24/7 Support",
      color: "bg-primary",
      desc: "We Never Sleep"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Contact Us | WhatsApp +971543800388 | FizBussinessSolution</title>
        <meta name="description" content="Get in touch with FizBussinessSolution 24/7. Contact us via WhatsApp, email, or our contact form for expert academic help." />
        <link rel="canonical" href="https://fizbussinesssolution.com/contact" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white opacity-60">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Get in Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Have questions? We're here to help you achieve your academic goals.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-primary hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${card.color} text-white`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">{card.label}</p>
                    {card.link ? (
                      <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-navy hover:text-primary transition-colors block mb-1">
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-navy mb-1">{card.value}</p>
                    )}
                    <p className="text-gray-400 text-sm font-medium">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Name *</label>
                  <input 
                    {...register("name", { 
                      required: "Full name is required",
                      minLength: { value: 2, message: "Name must be at least 2 characters" }
                    })}
                    type="text" 
                    placeholder="Your Full Name"
                    className={`w-full bg-gray-50 p-4 rounded-xl border ${errors.name ? 'border-primary' : 'border-transparent'} focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none`}
                  />
                  {errors.name && <span className="text-primary text-[10px] font-black mt-1 uppercase tracking-widest block">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Email *</label>
                  <input 
                    {...register("email", { 
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    })}
                    type="email" 
                    placeholder="Your Email Address"
                    className={`w-full bg-gray-50 p-4 rounded-xl border ${errors.email ? 'border-primary' : 'border-transparent'} focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none`}
                  />
                  {errors.email && <span className="text-primary text-[10px] font-black mt-1 uppercase tracking-widest block">{errors.email.message}</span>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Subject *</label>
                  <input 
                    {...register("subject", { 
                      required: "Message subject is required",
                      minLength: { value: 5, message: "Subject should be more descriptive" }
                    })}
                    type="text" 
                    placeholder="How can we help you?"
                    className={`w-full bg-gray-50 p-4 rounded-xl border ${errors.subject ? 'border-primary' : 'border-transparent'} focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none`}
                  />
                  {errors.subject && <span className="text-primary text-[10px] font-black mt-1 uppercase tracking-widest block">{errors.subject.message}</span>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Message *</label>
                  <textarea 
                    {...register("message", { 
                      required: "Message content is required",
                      minLength: { value: 10, message: "Please provide more details" }
                    })}
                    placeholder="Describe your requirements in detail..."
                    className={`w-full bg-gray-50 p-4 rounded-xl border ${errors.message ? 'border-primary' : 'border-transparent'} focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none h-40 resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-primary text-[10px] font-black mt-1 uppercase tracking-widest block">{errors.message.message}</span>}
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-lg flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] bg-navy rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center p-8 border-8 border-white shadow-2xl"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80')] bg-cover bg-center grayscale"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto animate-bounce shadow-xl shadow-primary/20">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">London, United Kingdom</h2>
              <p className="text-primary text-xl font-bold uppercase tracking-widest">Global Academic Support Hub</p>
              <div className="mt-8 flex gap-4">
                <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest">Global reach</div>
                <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest">24/7 Operation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
