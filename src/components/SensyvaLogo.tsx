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
        {/* Hexagon outline with gradient */}
        <defs>
          <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        
        {/* Hexagon shape */}
        <path
          d="M60 10 L100 30 L100 70 L60 90 L20 70 L20 30 Z"
          fill="url(#hexagonGradient)"
          stroke="url(#hexagonGradient)"
          strokeWidth="2"
          className="drop-shadow-lg"
        />
        
        {/* Circuit board elements */}
        {/* Input circles */}
        <circle cx="30" cy="40" r="3" fill="url(#circuitGradient)" />
        <circle cx="30" cy="50" r="3" fill="url(#circuitGradient)" />
        <circle cx="30" cy="60" r="3" fill="url(#circuitGradient)" />
        
        {/* Circuit traces */}
        <path
          d="M33 40 L50 40 L50 50 L70 50"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M33 50 L50 50"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M33 60 L50 60 L50 50"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Main arrow */}
        <path
          d="M70 50 L85 50 L80 45 M85 50 L80 55"
          stroke="url(#circuitGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
