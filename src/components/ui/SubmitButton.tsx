'use client';

import { Loader2 } from 'lucide-react';
import type { SubmitButtonProps } from '@/types';

const SubmitButton = ({
  isSubmitting,
  label,
  loadingLabel = 'Sending...',
  icon: Icon,
  variant = 'navy',
  className = '',
}: SubmitButtonProps) => {
  const variants = {
    navy: 'bg-navy hover:bg-primary text-white shadow-lg',
    primary: 'bg-primary hover:brightness-110 text-white shadow-lg shadow-primary/30',
  };

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group ${variants[variant]} ${className}`}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          {loadingLabel}
        </>
      ) : (
        <>
          {label}
          {Icon && <Icon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
