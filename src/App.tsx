import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';

/* Components */
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import WhatsAppSideButton from './components/WhatsAppSideButton';
import CookieConsent from './components/CookieConsent';
import LoadingSpinner from './components/LoadingSpinner';

/* Lazy Loaded Pages */
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const AboutPage = lazy(() => import('./pages/About'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ContactPage = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));

const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <Home />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <ServicesPage />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <AboutPage />
            </motion.div>
          } />
          <Route path="/blog" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <BlogPage />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <ContactPage />
            </motion.div>
          } />
          <Route path="/login" element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <Login />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Toaster position="top-right" reverseOrder={false} />
        
        <AnimatedRoutes />

        <ScrollToTopButton />
        <FloatingWhatsApp />
        <WhatsAppSideButton />
        <CookieConsent />
      </Router>
    </HelmetProvider>
  );
}
