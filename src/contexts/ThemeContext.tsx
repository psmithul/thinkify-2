"use client";

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
    name: 'LinkedIn Webinar',
    description: 'Colors from the LinkedIn Ads enhancements webinar slide',
    colors: {
      primaryStart:   '#c1e0e6', // light‑blue header
      primaryEnd:     '#accedc',
      secondaryStart: '#805548', // brown background
      secondaryEnd:   '#734433',
      primary:        '#accedc',
      secondary:      '#805548',
      accent:         '#c1e0e6',
      background:     '#c1e0e6',
      surface:        '#805548',
      text:           '#1e293b', // keep your usual dark‑text
      textSecondary:  '#475569',
    }
  },
  {
    name: 'Brown & Cyan',
    description: 'Solid brown background with bright cyan text',
    colors: {
      // gradients you can use for buttons, cards, etc.
      primaryStart:   '#734433',  // deep brown
      primaryEnd:     '#5D4037',  // slightly lighter brown
      secondaryStart: '#734433',
      secondaryEnd:   '#5D4037',
      // solid fills
      primary:        '#734433',
      secondary:      '#5D4037',
      accent:         '#00FFFF',  // cyan accent
      // page-level
      background:     '#5D4037',  // all‑over brown
      surface:        '#865E54',  // cards, panels
      // text
      text:           '#00FFFF',  // all primary text in cyan
      textSecondary:  '#80FFFF'   // lighter cyan for secondary copy
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
    name: 'Thinkify Labs',
    description: 'Official Thinkify Labs brand colors',
    colors: {
      primaryStart: '#15304b',
      primaryEnd: '#1cc6b6',
      secondaryStart: '#ff9900',
      secondaryEnd: '#1cc6b6',
      primary: '#15304b',
      secondary: '#1cc6b6',
      accent: '#ff9900',
      background: '#f8fafc',
      surface: '#f4f6f8',
      text: '#1a2233',
      textSecondary: '#5a6473'
    }
  },
  {
    name: 'Purple Orange',
    description: 'Vibrant purple to orange gradient',
    colors: {
      primaryStart: '#8b5cf6',  // Purple
      primaryEnd: '#f97316',    // Orange
      secondaryStart: '#a855f7',
      secondaryEnd: '#fb923c',
      primary: '#8b5cf6',
      secondary: '#fb923c',
      accent: '#d946ef',
      background: '#ffffff',
      surface: '#faf5ff',
      text: '#1e293b',
      textSecondary: '#4b5563'
    }
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0, 0, 0';
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `${r}, ${g}, ${b}`;
};

const updateCSSProperties = (theme: Theme) => {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', theme.colors.primary);
  root.style.setProperty('--color-secondary', theme.colors.secondary);
  root.style.setProperty('--color-accent', theme.colors.accent);
  root.style.setProperty('--color-background', theme.colors.background);
  root.style.setProperty('--color-surface', theme.colors.surface);
  root.style.setProperty('--color-text', theme.colors.text);
  root.style.setProperty('--color-text-secondary', theme.colors.textSecondary);
  root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.colors.primaryStart} 0%, ${theme.colors.primaryEnd} 100%)`);
  root.style.setProperty('--gradient-secondary', `linear-gradient(135deg, ${theme.colors.secondaryStart} 0%, ${theme.colors.secondaryEnd} 100%)`);
  root.style.setProperty('--theme-primary-rgb', hexToRgb(theme.colors.primary));
  root.style.setProperty('--theme-secondary-rgb', hexToRgb(theme.colors.secondary));
  root.style.setProperty('--theme-accent-rgb', hexToRgb(theme.colors.accent));
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[7]); // Purple Orange theme

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    updateCSSProperties(theme);
    localStorage.setItem('thinkify-theme', theme.name);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('thinkify-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
        updateCSSProperties(theme);
      }
    } else {
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
