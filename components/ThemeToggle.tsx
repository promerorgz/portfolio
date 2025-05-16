'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Activity, ChevronDown, Moon, Sparkles, Sun, Umbrella } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemeOption = {
  name: string;
  value: string;
  icon: React.ReactNode;
  color: string;
};

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const themes: ThemeOption[] = [
    {
      name: 'Light',
      value: 'light',
      icon: <Sun className="h-4 w-4" />,
      color: 'bg-blue-50',
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: <Moon className="h-4 w-4" />,
      color: 'bg-gray-900',
    },
    {
      name: 'Cyberpunk',
      value: 'cyberpunk',
      icon: <Sparkles className="h-4 w-4" />,
      color: 'bg-purple-700',
    },
    {
      name: 'FC25',
      value: 'fc25',
      icon: <Activity className="h-4 w-4" />,
      color: 'bg-amber-500',
    },
    {
      name: 'Beach',
      value: 'beach',
      icon: <Umbrella className="h-4 w-4" />,
      color: 'bg-cyan-400',
    },
  ];

  // Find current theme object
  const currentTheme = themes.find(t => t.value === theme) || themes[0]; // Default to light

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside() {
      setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={e => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="relative inline-flex h-8 items-center gap-2 justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-3"
        aria-label="Toggle theme"
      >
        <span className="flex items-center gap-1">
          {currentTheme.icon}
          <span className="text-xs font-medium hidden sm:inline">{currentTheme.name}</span>
          <ChevronDown className="h-3 w-3" />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute right-0 mt-2 w-40 bg-card text-card-foreground rounded-md shadow-lg py-1 z-50 border border-border"
            onClick={e => e.stopPropagation()}
          >
            {themes.map(themeOption => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-muted transition-colors ${
                  theme === themeOption.value ? 'bg-muted' : ''
                }`}
              >
                <span className={`h-4 w-4 rounded-full flex-shrink-0 ${themeOption.color}`}></span>
                {themeOption.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
