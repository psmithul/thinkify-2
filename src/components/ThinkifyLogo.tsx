'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ThinkifyLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ThinkifyLogo({ 
  className = "", 
  variant = 'full', 
  size = 'md' 
}: ThinkifyLogoProps) {
  const { currentTheme } = useTheme();
  
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  const iconSize = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  };

  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  // Purple-Orange theme colors
  const getThemeColors = () => {
    return {
      primary: '#7c3aed', // Vibrant Purple
      secondary: '#f97316', // Vibrant Orange
      accent: '#f97316' // Orange Accent
    };
  };

  const colors = getThemeColors();

  if (variant === 'icon') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Dotted T Design */}
          <defs>
            <linearGradient id={`tGradient-${currentTheme.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Horizontal bar of T (dotted) */}
          <g>
            {/* Top dots */}
            <circle cx="20" cy="25" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="35" cy="25" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="50" cy="25" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="65" cy="25" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="80" cy="25" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            
            {/* Vertical bar of T (dotted) */}
            <circle cx="50" cy="40" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="50" cy="55" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="50" cy="70" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
            <circle cx="50" cy="85" r="3" fill={`url(#tGradient-${currentTheme.name})`} filter="url(#glow)" />
          </g>
          
          {/* Connecting lines (subtle) */}
          <g stroke={`url(#tGradient-${currentTheme.name})`} strokeWidth="1" fill="none" opacity="0.3">
            {/* Horizontal connections */}
            <path d="M23 25 L32 25" strokeLinecap="round" />
            <path d="M38 25 L47 25" strokeLinecap="round" />
            <path d="M53 25 L62 25" strokeLinecap="round" />
            <path d="M68 25 L77 25" strokeLinecap="round" />
            
            {/* Vertical connections */}
            <path d="M50 28 L50 37" strokeLinecap="round" />
            <path d="M50 43 L50 52" strokeLinecap="round" />
            <path d="M50 58 L50 67" strokeLinecap="round" />
            <path d="M50 73 L50 82" strokeLinecap="round" />
          </g>
          
          {/* Sparkle effects around the T */}
          <g fill="rgba(255,255,255,0.8)">
            <circle cx="15" cy="15" r="1" />
            <circle cx="85" cy="15" r="1" />
            <circle cx="15" cy="85" r="1" />
            <circle cx="85" cy="85" r="1" />
            <circle cx="50" cy="10" r="1.5" />
            <circle cx="50" cy="90" r="1.5" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`font-bold font-nunito-sans text-3xl ${className}`}>
        <span 
          className="text-transparent"
          style={{
            backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Thinkify
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <ThinkifyLogo variant="icon" size="xl" />
      <ThinkifyLogo variant="text" size="xl" />
    </div>
  );
} 