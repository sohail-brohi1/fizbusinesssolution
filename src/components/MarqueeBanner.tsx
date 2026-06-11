'use client';

const MarqueeBanner = () => {
  const text = '🎓 First Order 10% OFF — Use Code FIZFIRST10 | AI-Free, Expert-Written Assignments | Guaranteed Quality | 24/7 Support | Trusted by 10,000+ Students | On-Time Delivery or Money Back | ';

  return (
    <div className="bg-primary h-[40px] flex items-center overflow-hidden border-b border-white/10 shrink-0">
      <div className="animate-marquee">
        <span className="text-white text-[13px] font-medium px-4 flex items-center">
          {text + text + text + text}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
