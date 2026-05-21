import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppSideButton = () => {
  return (
    <a 
      href="https://wa.me/971543800388"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-[9997] hidden lg:flex items-center group shadow-2xl"
    >
      <div className="bg-[#25D366] text-white px-4 py-8 rounded-r-2xl flex flex-col items-center gap-3 hover:pl-6 transition-all duration-300">
        <MessageSquare className="w-5 h-5" />
        <span className="[writing-mode:vertical-lr] font-black uppercase tracking-[0.3em] text-[10px]">
          Chat Now
        </span>
      </div>
    </a>
  );
};

export default WhatsAppSideButton;
