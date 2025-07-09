'use client';

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, SwatchIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitcher() {
  const { currentTheme, themes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg border-2 border-white/20 backdrop-blur-md flex items-center justify-center group"
          style={{ 
            background: `var(--gradient-primary)`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SwatchIcon className="w-6 h-6 text-white" />
        </motion.button>

        {/* Theme Options Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border theme-border-surface/50 p-4 min-w-[380px] max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold theme-text-body mb-1">Choose Theme</h3>
                <p className="text-sm theme-text-muted">Pick your favorite color scheme</p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {themes.map((theme, index) => (
                  <motion.button
                    key={theme.name}
                    onClick={() => {
                      setTheme(theme);
                      setIsOpen(false);
                    }}
                    className={`relative p-3 rounded-lg border-2 transition-all duration-300 group ${
                      currentTheme.name === theme.name 
                        ? 'theme-border-surface shadow-lg' 
                        : 'theme-border-surface hover:theme-border-surface'
                    }`}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                  >
                    {/* Color Preview */}
                    <div 
                      className="w-full h-6 rounded-md mb-2 shadow-sm"
                      style={{ 
                        background: `linear-gradient(135deg, ${theme.colors.primaryStart} 0%, ${theme.colors.primaryEnd} 100%)` 
                      }}
                    ></div>
                    
                    {/* Secondary Color Bar */}
                    <div 
                      className="w-2/3 h-1.5 rounded mb-2 opacity-60"
                      style={{ 
                        background: `linear-gradient(135deg, ${theme.colors.secondaryStart} 0%, ${theme.colors.secondaryEnd} 100%)` 
                      }}
                    ></div>

                    {/* Theme Info */}
                    <div className="text-left">
                      <h4 className="font-bold theme-text-body mb-1 text-xs">{theme.name}</h4>
                      <p className="text-xs theme-text-muted truncate">{theme.description}</p>
                    </div>

                    {/* Active Indicator */}
                    {currentTheme.name === theme.name && (
                      <motion.div
                        className="absolute top-2 right-2 w-3 h-3 rounded-full"
                        style={{ backgroundColor: theme.colors.primary }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t theme-border-surface/50">
                <motion.p 
                  className="text-xs theme-text-muted text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  🎨 All colors sync across the entire website
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Backdrop to close */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
} 