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
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Drop shadow filter */}
        <defs>
          <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
          </filter>
          <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#F3F4F6" />
            <stop offset="70%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
        </defs>
        
        {/* Hexagon shape with gradient and dark blue border */}
        <path
          d="M60 10 L100 30 L100 70 L60 90 L20 70 L20 30 Z"
          fill="url(#hexagonGradient)"
          stroke="#1E40AF"
          strokeWidth="2.5"
          filter="url(#dropshadow)"
        />
        
        {/* Circuit board elements - three connection points on left */}
        <circle cx="30" cy="40" r="2.5" fill="#3B82F6" />
        <circle cx="30" cy="50" r="2.5" fill="#3B82F6" />
        <circle cx="30" cy="60" r="2.5" fill="#3B82F6" />
        
        {/* Circuit traces - converging paths */}
        <path
          d="M32.5 40 L50 40 L50 50 L70 50"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M32.5 50 L50 50"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M32.5 60 L50 60 L50 50"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Main arrow extending beyond hexagon */}
        <path
          d="M70 50 L90 50 L85 45 M90 50 L85 55"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
