import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Logo from '../components/Logo';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Login feature coming soon! Please contact us via WhatsApp.');
    window.open('https://wa.me/971543800388', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Student Login | Access Your Portal | FizBussinessSolution</title>
        <meta name="description" content="Login to your FizBussinessSolution account to manage your orders, communicate with writers, and track your academic progress." />
        <link rel="canonical" href="https://fizbussinesssolution.com/login" />
      </Helmet>
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100"
        >
          {/* Logo & Header */}
          <div className="text-center mb-10 flex flex-col items-center">
            <Logo className="mb-6" />
            <h1 className="text-3xl font-black text-navy mb-2 uppercase tracking-tight">Welcome Back</h1>
            <p className="text-gray-400 font-medium">Login to your FizBussinessSolution account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-black text-navy uppercase tracking-widest mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-50 pl-12 pr-4 py-4 rounded-xl border border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-black text-navy uppercase tracking-widest">Password</label>
                <Link to="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-gray-50 pl-12 pr-12 py-4 rounded-xl border border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all outline-none"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:brightness-110 shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
            >
              Login <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-gray-100 flex-grow"></div>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">or</span>
            <div className="h-px bg-gray-100 flex-grow"></div>
          </div>

          {/* Secondary Action */}
          <button 
            onClick={() => toast.success('Joining process coming soon!')}
            className="w-full bg-white text-navy border-2 border-navy py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Create an Account
          </button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
