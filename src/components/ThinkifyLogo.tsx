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

  // Theme-aware colors
  const getThemeColors = () => {
    switch (currentTheme.name) {
      case 'Ocean':
        return {
          primary: '#0ea5e9',
          secondary: '#06b6d4'
        };
      case 'Sunset':
        return {
          primary: '#f97316',
          secondary: '#ef4444'
        };
      case 'Forest':
      case 'Green':
        return {
          primary: '#22c55e',
          secondary: '#3b82f6'
        };
      default: // purple theme
        return {
          primary: '#8b5cf6',
          secondary: '#ec4899'
        };
    }
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
          {/* Modern Brain Icon */}
          <defs>
            <linearGradient id={`brainGradient-${currentTheme.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Brain Shape */}
          <path
            d="M25 35C20 30 15 35 15 45C15 55 20 65 30 70C35 72 40 70 45 68C50 70 55 72 60 70C70 65 75 55 75 45C75 35 70 30 65 35C60 25 55 20 50 25C45 20 40 25 35 35C30 25 25 30 25 35Z"
            fill={`url(#brainGradient-${currentTheme.name})`}
            filter="url(#glow)"
          />
          
          {/* Neural Network Lines */}
          <g stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none">
            <path d="M30 45 L35 40 L45 45 L55 40 L65 45" strokeLinecap="round" />
            <path d="M32 55 L42 50 L52 55 L62 50" strokeLinecap="round" />
            <circle cx="35" cy="40" r="2" fill="white" />
            <circle cx="45" cy="45" r="2" fill="white" />
            <circle cx="55" cy="40" r="2" fill="white" />
            <circle cx="42" cy="50" r="2" fill="white" />
            <circle cx="52" cy="55" r="2" fill="white" />
          </g>
          
          {/* Sparkle Effects */}
          <g fill="rgba(255,255,255,0.9)">
            <circle cx="20" cy="25" r="1.5" />
            <circle cx="75" cy="30" r="1" />
            <circle cx="80" cy="60" r="1.5" />
            <circle cx="15" cy="70" r="1" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`font-bold ${textSize[size]} ${className}`}>
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
      <ThinkifyLogo variant="icon" size={size} />
      <ThinkifyLogo variant="text" size={size} />
    </div>
  );
} 