'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeColors {
  primaryStart: string;
  primaryEnd: string;
  secondaryStart: string;
  secondaryEnd: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

interface Theme {
  name: string;
  description: string;
  colors: ThemeColors;
}

interface ThemeContextType {
  currentTheme: Theme;
  themes: Theme[];
  setTheme: (theme: Theme) => void;
}

const themes: Theme[] = [
  {
    name: 'Purple',
    description: 'Default purple theme',
    colors: {
      primaryStart: '#8b5cf6',
      primaryEnd: '#a855f7',
      secondaryStart: '#3b82f6',
      secondaryEnd: '#1d4ed8',
      primary: '#8b5cf6',
      secondary: '#3b82f6',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Green',
    description: 'Fresh green theme',
    colors: {
      primaryStart: '#10b981',
      primaryEnd: '#059669',
      secondaryStart: '#34d399',
      secondaryEnd: '#10b981',
      primary: '#10b981',
      secondary: '#34d399',
      accent: '#f59e0b',
      background: '#ffffff',
      surface: '#f0fdf4',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Sunset',
    description: 'Warm sunset colors',
    colors: {
      primaryStart: '#f59e0b',
      primaryEnd: '#ea580c',
      secondaryStart: '#fb923c',
      secondaryEnd: '#f97316',
      primary: '#f59e0b',
      secondary: '#fb923c',
      accent: '#dc2626',
      background: '#ffffff',
      surface: '#fef7ed',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Ocean',
    description: 'Cool ocean blues',
    colors: {
      primaryStart: '#0ea5e9',
      primaryEnd: '#0284c7',
      secondaryStart: '#38bdf8',
      secondaryEnd: '#0ea5e9',
      primary: '#0ea5e9',
      secondary: '#38bdf8',
      accent: '#06b6d4',
      background: '#ffffff',
      surface: '#f0f9ff',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Forest',
    description: 'Deep forest greens',
    colors: {
      primaryStart: '#15803d',
      primaryEnd: '#166534',
      secondaryStart: '#22c55e',
      secondaryEnd: '#15803d',
      primary: '#15803d',
      secondary: '#22c55e',
      accent: '#84cc16',
      background: '#ffffff',
      surface: '#f7fee7',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Gold',
    description: 'Luxurious gold and amber',
    colors: {
      primaryStart: '#d97706',
      primaryEnd: '#b45309',
      secondaryStart: '#fbbf24',
      secondaryEnd: '#f59e0b',
      primary: '#d97706',
      secondary: '#fbbf24',
      accent: '#dc2626',
      background: '#ffffff',
      surface: '#fefdf2',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Fire',
    description: 'Fiery reds and oranges',
    colors: {
      primaryStart: '#dc2626',
      primaryEnd: '#991b1b',
      secondaryStart: '#f97316',
      secondaryEnd: '#dc2626',
      primary: '#dc2626',
      secondary: '#f97316',
      accent: '#fbbf24',
      background: '#ffffff',
      surface: '#fef2f2',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Cosmic',
    description: 'Deep space purples and blues',
    colors: {
      primaryStart: '#6366f1',
      primaryEnd: '#4338ca',
      secondaryStart: '#8b5cf6',
      secondaryEnd: '#6366f1',
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Champagne',
    description: 'Elegant champagne and gold',
    colors: {
      primaryStart: '#eab308',
      primaryEnd: '#ca8a04',
      secondaryStart: '#fbbf24',
      secondaryEnd: '#eab308',
      primary: '#eab308',
      secondary: '#fbbf24',
      accent: '#f97316',
      background: '#ffffff',
      surface: '#fffbeb',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Rose',
    description: 'Elegant rose and pink',
    colors: {
      primaryStart: '#e11d48',
      primaryEnd: '#be185d',
      secondaryStart: '#f43f5e',
      secondaryEnd: '#e11d48',
      primary: '#e11d48',
      secondary: '#f43f5e',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#fdf2f8',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Cyber',
    description: 'Electric cyan and neon',
    colors: {
      primaryStart: '#06b6d4',
      primaryEnd: '#0891b2',
      secondaryStart: '#67e8f9',
      secondaryEnd: '#06b6d4',
      primary: '#06b6d4',
      secondary: '#67e8f9',
      accent: '#8b5cf6',
      background: '#ffffff',
      surface: '#f0f9ff',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Autumn',
    description: 'Warm autumn leaves',
    colors: {
      primaryStart: '#d97706',
      primaryEnd: '#b45309',
      secondaryStart: '#f59e0b',
      secondaryEnd: '#d97706',
      primary: '#d97706',
      secondary: '#f59e0b',
      accent: '#dc2626',
      background: '#ffffff',
      surface: '#fffbeb',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  },
  {
    name: 'Midnight',
    description: 'Deep midnight blues',
    colors: {
      primaryStart: '#1e40af',
      primaryEnd: '#1e3a8a',
      secondaryStart: '#3b82f6',
      secondaryEnd: '#1e40af',
      primary: '#1e40af',
      secondary: '#3b82f6',
      accent: '#6366f1',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#475569'
    }
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper function to convert hex to RGB
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r}, ${g}, ${b}`;
};

// Function to update CSS custom properties
const updateCSSProperties = (theme: Theme) => {
  const root = document.documentElement;
  
  // Update CSS custom properties
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
  
  // Update gradient properties
  root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.colors.primaryStart} 0%, ${theme.colors.primaryEnd} 100%)`);
  root.style.setProperty('--gradient-secondary', `linear-gradient(135deg, ${theme.colors.secondaryStart} 0%, ${theme.colors.secondaryEnd} 100%)`);
  
  // Update RGB versions for rgba usage
  root.style.setProperty('--theme-primary-rgb', hexToRgb(theme.colors.primary));
  root.style.setProperty('--theme-secondary-rgb', hexToRgb(theme.colors.secondary));
  root.style.setProperty('--theme-accent-rgb', hexToRgb(theme.colors.accent));
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    updateCSSProperties(theme);
    localStorage.setItem('thinkify-theme', theme.name);
  };

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('thinkify-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
        updateCSSProperties(theme);
      }
    } else {
      // Set default theme
      updateCSSProperties(currentTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, themes, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 