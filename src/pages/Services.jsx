import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Scroll, 
  FileText, 
  Stethoscope, 
  Scale, 
  Settings, 
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fullServices = [
  { id: 1, name: "Assignment Help", desc: "Expert help for all types of university assignments", areas: "All Subjects" },
  { id: 2, name: "Dissertation Writing Services", desc: "Full dissertation from proposal to conclusion", areas: "Masters/PhD" },
  { id: 3, name: "Essay Writing Services UK", desc: "Well-researched academic essays, all styles", areas: "Arts / Humanities" },
  { id: 4, name: "Homework Help", desc: "Quick turnaround help for daily homework tasks", areas: "K12 / College" },
  { id: 5, name: "Thesis Writing Help", desc: "Comprehensive thesis writing and research support", areas: "Academic Research" },
  { id: 6, name: "Research Paper Writing", desc: "In-depth research papers with proper citations", areas: "Scientific / Academic" },
  { id: 7, name: "Case Study Writing Help", desc: "Analytical case study reports for business/law", areas: "Business / Law" },
  { id: 8, name: "Coursework Writing Services", desc: "Structured coursework across all subjects", areas: "University Level" },
  { id: 9, name: "Proofreading & Editing Services", desc: "Grammar, clarity, and style improvements", areas: "All Documents" },
  { id: 10, name: "Online Exam Help", desc: "Expert assistance for online exams and quizzes", areas: "Real-time Support" },
  { id: 11, name: "Help with Report Writing", desc: "Professional formatted academic reports", areas: "Technical / Business" },
  { id: 12, name: "Pay to Do My Management Assignment", desc: "MBA and management subject expert help", areas: "MBA / Management" },
  { id: 13, name: "Do My Finance Assignment for Me", desc: "Financial analysis and calculations support", areas: "Finance / Banking" },
  { id: 14, name: "Write My Economics Assignment", desc: "Macro and micro economics assignments", areas: "Economics" },
  { id: 15, name: "Help with Accounting Assignment", desc: "Bookkeeping, IFRS, financial statements", areas: "Accounting" },
  { id: 16, name: "Assist with My Business Assignment", desc: "Business studies and strategy assignments", areas: "Business Admin" },
  { id: 17, name: "Help to Do My Commercial Assignment", desc: "Commercial law and business law papers", areas: "Commercial Law" },
  { id: 18, name: "Complete My Engineering Assignment", desc: "Technical engineering subject assistance", areas: "Civil/Mech/Elec" },
  { id: 19, name: "Pay Someone for Marketing Assignment", desc: "Marketing strategy and digital marketing", areas: "Marketing" },
  { id: 20, name: "Finish My HRM Assignments", desc: "Human resources management assignments", areas: "HRM" },
  { id: 21, name: "Nursing Assignment Help UK", desc: "Clinical nursing and healthcare assignments", areas: "Nursing / Medicine" },
  { id: 22, name: "Make My Strategic Marketing Assignment", desc: "Strategic marketing plans and reports", areas: "Strategy" },
  { id: 23, name: "CIPD Assignment Help (All Levels)", desc: "CIPD Level 3, 5, and 7 support", areas: "HR Professional" },
  { id: 24, name: "HND Assignment Help", desc: "HND business, computing, and engineering help", areas: "Higher National" },
  { id: 25, name: "HNC Assignment Help", desc: "HNC level academic writing assistance", areas: "Higher National" },
  { id: 26, name: "Help with ATHE Assignment", desc: "ATHE qualification assignments", areas: "Professional" },
  { id: 27, name: "Do My BTEC Assignment", desc: "BTEC National and Extended Diploma help", areas: "BTEC" },
  { id: 28, name: "British University Assignment Help", desc: "UK university standards and formatting", areas: "UK Universities" },
  { id: 29, name: "Do My Assignment", desc: "General assignment help for any subject", areas: "General Education" },
  { id: 30, name: "Write My Essay Online", desc: "Custom essays written by subject experts", areas: "All Levels" },
  { id: 31, name: "Take My Online Classes", desc: "Full online class attendance and assignment help", areas: "E-Learning" },
  { id: 32, name: "Pay for College Assignments", desc: "Affordable college-level academic help", areas: "College" },
  { id: 33, name: "Law Assignment Help", desc: "Case analysis, statute interpretation, legal essays", areas: "Law / LLM" },
  { id: 34, name: "Psychology Assignment Help", desc: "Behavioral science and mental health topics", areas: "Social Science" },
  { id: 35, name: "IT & Computer Science Help", desc: "Programming, algorithms, database projects", areas: "IT / Tech" }
];

const featuredServices = [
  { 
    name: "Assignment Help", 
    icon: BookOpen, 
    badge: "Most Popular", 
    desc: "Get top grades with our human-written assignments tailored to your specific requirements.",
    points: ["AI-Free Content", "On-Time Delivery", "Plagiarism Report"]
  },
  { 
    name: "Dissertation Writing", 
    icon: Scroll, 
    badge: "Top Rated", 
    desc: "Comprehensive dissertation support from expert writers with years of research experience.",
    points: ["Specialist Writers", "24/7 Support", "Unlimited Revisions"]
  },
  { 
    name: "Nursing Assignment", 
    icon: Stethoscope, 
    badge: "Specialized", 
    desc: "Expert help for clinical case studies and healthcare papers according to UK standards.",
    points: ["Verified Experts", "Zero AI Usage", "On-Time Results"]
  },
  { 
    name: "CIPD Help", 
    icon: FileText, 
    badge: "Professional", 
    desc: "Specialized support for CIPD Level 3, 5, and 7 assignments across all HR modules.",
    points: ["Subject Experts", "Money-Back Guarantee", "Confidential"]
  },
  { 
    name: "Law Assignment", 
    icon: Scale, 
    badge: "New", 
    desc: "In-depth legal analysis and case studies handled by qualified legal professionals.",
    points: ["Legal Formatting", "Proper Citations", "Human Touch"]
  },
  { 
    name: "Engineering Assignment", 
    icon: Settings, 
    badge: "Technical", 
    desc: "Solving complex engineering problems and technical reports with accuracy and precision.",
    points: ["Precision Work", "Research Based", "Verified PhDs"]
  }
];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = fullServices.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.areas.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Academic Writing Services | Dissertation, Essay, Assignment Help | FizBussinessSolution</title>
        <meta name="description" content="35+ academic writing services including dissertation, essay, nursing, CIPD, law assignment help. AI-free guaranteed." />
        <link rel="canonical" href="https://fizbussinesssolution.com/services" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* SECTION 1: Hero Banner */}
        <section className="bg-navy py-16 md:py-24 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C41E3A_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <nav className="flex items-center justify-center gap-2 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white opacity-60">Services</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Academic Writing Services</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Expert-written, AI-free academic help across all subjects and levels. Join 10,000+ students who trust us for top grades.
            </p>
          </div>
        </section>

        {/* SECTION 2: FULL SERVICES TABLE */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-navy uppercase tracking-tight mb-2">Service Directory</h2>
            <p className="text-gray-400 font-medium mb-8">Browse our full range of academic assistance options</p>
            
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search services (e.g. Nursing, Law, CIPD)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-all shadow-sm"
              />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-navy text-white uppercase text-[10px] font-black tracking-[0.2em]">
                    <th className="px-8 py-6">#</th>
                    <th className="px-8 py-6">Service Name</th>
                    <th className="px-8 py-6">Description</th>
                    <th className="px-8 py-6">Subject Area</th>
                    <th className="px-8 py-6 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, i) => (
                      <tr 
                        key={service.id} 
                        className={`border-b border-gray-50 transition-colors hover:bg-primary/5 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                      >
                        <td className="px-8 py-5 font-black text-gray-300">{service.id}</td>
                        <td className="px-8 py-5 font-black text-navy">{service.name}</td>
                        <td className="px-8 py-5 text-gray-500 italic leading-relaxed text-xs">{service.desc}</td>
                        <td className="px-8 py-5">
                          <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[9px] font-black text-primary uppercase tracking-wider">{service.areas}</span>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <button 
                            onClick={() => {
                              const element = document.getElementById('order-form');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              } else {
                                window.location.href = '/?scrollTo=form';
                              }
                            }}
                            className="inline-block px-6 py-2 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:brightness-110 transition-all shadow-md shadow-primary/20"
                          >
                            Order
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-8 py-20 text-center text-gray-400 font-bold uppercase tracking-widest">
                        No services found matching "{searchTerm}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURED SERVICE CARDS */}
        <section className="py-24 bg-navy relative">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-20 uppercase tracking-tight">Highlight Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl relative border-l-4 border-primary group"
                >
                  <div className="absolute top-6 right-8 px-3 py-1 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {s.badge}
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <s.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-navy mb-4">{s.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {s.points.map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs font-bold text-navy">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/#order-form" 
                    className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 text-xs shadow-xl shadow-primary/20 hover:brightness-110 transition-all"
                  >
                    Order Now <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Bottom CTA */}
        <section className="bg-primary py-20 text-center text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Ready to Get Expert Help?</h2>
            <p className="text-white/80 text-lg mb-10 font-medium">Join 10,000+ students who trust FizBussinessSolution for original, AI-free academic success.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#order-form" className="px-10 py-5 bg-navy text-white font-black uppercase tracking-widest rounded-xl shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
                Order My Assignment
              </Link>
              <a href="https://wa.me/971543800388" target="_blank" className="px-10 py-5 bg-[#25D366] text-white font-black uppercase tracking-widest rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto">
                <MessageSquare className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
