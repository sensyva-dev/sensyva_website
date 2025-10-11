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
        <defs>
          {/* Drop shadow filter */}
          <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
          </filter>
          {/* Hexagon gradient - white to light gray */}
          <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#F8F9FA" />
            <stop offset="70%" stopColor="#E9ECEF" />
            <stop offset="100%" stopColor="#DEE2E6" />
          </linearGradient>
        </defs>
        
        {/* Main hexagon with white-to-gray gradient and dark blue border */}
        <path
          d="M60 12 L98 30 L98 70 L60 88 L22 70 L22 30 Z"
          fill="url(#hexagonGradient)"
          stroke="#1E40AF"
          strokeWidth="2.5"
          filter="url(#dropshadow)"
        />
        
        {/* Three connection points on the left side - slightly offset */}
        <circle cx="32" cy="40" r="2.5" fill="#3B82F6" />
        <circle cx="32" cy="50" r="2.5" fill="#3B82F6" />
        <circle cx="32" cy="60" r="2.5" fill="#3B82F6" />
        
        {/* Circuit traces converging to center */}
        <path
          d="M34.5 40 L52 40 L52 50 L72 50"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M34.5 50 L52 50"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M34.5 60 L52 60 L52 50"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Main arrow extending beyond hexagon */}
        <path
          d="M72 50 L92 50 L87 45 M92 50 L87 55"
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
