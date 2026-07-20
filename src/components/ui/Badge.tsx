import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'favorite' | 'new' | 'discount';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'favorite', className = '' }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-2 py-0.5 text-[11px] font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] font-cairo';
  
  const variants = {
    favorite: 'bg-white text-success-green',
    new: 'bg-brand-red text-white',
    discount: 'bg-secondary-yellow text-near-black',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
