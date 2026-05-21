import React from 'react';
import { 
  GraduationCap, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-navy py-12 px-8 flex flex-col items-center text-white/50 text-[11px] shrink-0 border-t border-white/5 space-y-6">
      <div className="flex flex-col items-center gap-4">
        <Logo dark />
        <div className="text-center">© 2018 FizBussinessSolution. All rights reserved.</div>
      </div>
      
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8">
        <a href="https://wa.me/971543800388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 font-bold hover:text-primary transition-colors">
          <Phone className="w-4 h-4 text-primary" /> WA: +971 54 380 0388
        </a>
        <a href="mailto:mf9637311@gmail.com" className="flex items-center gap-2 text-white/70 font-bold hover:text-primary transition-colors">
          <Mail className="w-4 h-4 text-primary" /> Email: mf9637311@gmail.com
        </a>
      </div>

      <div className="flex gap-6 pt-4 border-t border-white/5 w-full justify-center">
        <Facebook className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        <Twitter className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        <Instagram className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        <Linkedin className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
      </div>
    </footer>
  );
};

export default Footer;
