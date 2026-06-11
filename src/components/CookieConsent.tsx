'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'accepted' | 'declined') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-4 right-20 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-navy text-white p-6 rounded-2xl shadow-2xl z-[10001] border border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/20 rounded-lg shrink-0">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-black uppercase tracking-widest mb-1">Cookie Excellence</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                We use cookies to improve your experience. By using our site, you agree to our <a href="#" className="text-primary hover:underline font-bold">Privacy Policy</a>.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleConsent('accepted')}
                  className="px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  Accept All
                </button>
                <button
                  onClick={() => handleConsent('declined')}
                  className="px-6 py-2 bg-white/5 text-white border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-white/10 transition-all"
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
