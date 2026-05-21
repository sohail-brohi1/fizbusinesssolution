import React from 'react';
import { createPortal } from 'react-dom';

const FloatingWhatsApp = () => {
  const content = (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(.33); }
          80%, 100% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0% { transform: scale(.8); }
          50% { transform: scale(1); }
          100% { transform: scale(.8); }
        }
        .whatsapp-pulse::before {
          content: '';
          position: absolute;
          left: -8px;
          top: -8px;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          background-color: #25D366;
          border-radius: 50%;
          animation: pulse-ring 1.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
      `}</style>
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div className="relative group">
          {/* Tooltip - Desktop Only */}
          <div className="absolute bottom-full right-0 mb-3 hidden md:block invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="bg-navy text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg whitespace-nowrap shadow-xl border border-white/10">
              Chat with us now!
              <div className="absolute top-full right-4 w-2 h-2 bg-navy rotate-45 -mt-1"></div>
            </div>
          </div>
          
          {/* Button */}
          <a 
            href="https://wa.me/971543800388"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-pulse relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <div className="relative z-10 animate-[pulse-dot_1.2s_infinite]">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 md:w-9 md:h-9"
                fill="currentColor"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.456-1.291.618-1.464.162-.173.355-.216.474-.216.119 0 .238 0 .341.006.108.005.249-.04.39.3.144.35.494 1.208.536 1.294.041.086.068.187.011.3-.057.113-.086.183-.171.282-.086.1-.18.223-.257.299-.086.086-.176.18-.076.353.1.173.444.733.951 1.185.654.582 1.205.762 1.378.847.173.086.274.073.374-.04.1-.113.43-.505.545-.677.114-.173.229-.144.385-.086.157.057 1.003.473 1.174.558.171.086.286.13.328.201s.043.407-.101.812z"/>
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.18L2 22l4.957-1.301C8.423 21.558 10.151 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.15-.427-4.464-1.174L4.8 19.56l.758-2.766C4.78 15.48 4 13.826 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
};

export default FloatingWhatsApp;
