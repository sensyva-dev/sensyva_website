import React from 'react';

interface SensyvaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function SensyvaLogo({ className = '', size = 'md' }: SensyvaLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img
        src="/sensyva_logo.png"
        alt="SensyvaAI Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
