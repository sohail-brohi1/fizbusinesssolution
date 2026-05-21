import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Write a Perfect Dissertation Introduction in 2024",
      category: "Dissertation Tips",
      date: "May 10, 2024",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
      excerpt: "Your dissertation introduction sets the tone for your entire research. Learn the structural keys to grab your reader's attention from the first page."
    },
    {
      id: 2,
      title: "APA vs Harvard Referencing: Complete Student Guide",
      category: "Referencing Guide",
      date: "May 05, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
      excerpt: "Referencing can be the most frustrating part of academic writing. We break down the key differences between APA and Harvard styles for you."
    },
    {
      id: 3,
      title: "10 Tips to Improve Your Essay Writing Score",
      category: "Essay Writing",
      date: "April 28, 2024",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
      excerpt: "Want to jump from a 2:1 to a 1st class? These actionable tips focusing on critical analysis and flow will transform your academic writing."
    },
    {
      id: 4,
      title: "How to Structure a Case Study Assignment",
      category: "Study Guides",
      date: "April 15, 2024",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
      excerpt: "Case studies require a unique analytical approach. Follow our step-by-step framework to analyze, diagnose, and recommend effectively."
    },
    {
      id: 5,
      title: "Top 5 Mistakes Students Make in Research Papers",
      category: "Academic Help",
      date: "April 02, 2024",
      image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=600&q=80",
      excerpt: "Minor errors can lead to major grade losses. Discover the most common pitfalls in research paper writing and how to avoid them entirely."
    },
    {
      id: 6,
      title: "CIPD Level 5 Assignment: What Assessors Look For",
      category: "Professional Courses",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      excerpt: "CIPD assignments require a high level of professional application. Understand the key criteria that top assessors use to grade your work."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Academic Writing Blog | Tips & Guides | FizBussinessSolution</title>
        <meta name="description" content="Expert insights, dissertation tips, referencing guides, and study help to help you navigate university life and master the art of academic writing." />
        <link rel="canonical" href="https://fizbussinesssolution.com/blog" />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white opacity-60">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Academic Writing Tips & Guides</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">Expert insights to help you navigate university life and master the art of academic writing.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-4 tracking-wider">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h2 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center gap-2">
          {[1, 2, 3].map(n => (
            <button 
              key={n}
              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all border ${n === 1 ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-navy border-gray-100 hover:border-primary hover:text-primary'}`}
            >
              {n}
            </button>
          ))}
          <button className="w-10 h-10 rounded-lg bg-white text-navy border border-gray-100 flex items-center justify-center hover:border-primary hover:text-primary">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
