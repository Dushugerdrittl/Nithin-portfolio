import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      // Check system preference if no theme is saved
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply theme class to the html element and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-neutral1 dark:bg-primary text-neutral2 dark:text-neutral1 shadow-button
                 hover:bg-neutral2 hover:text-neutral1 dark:hover:bg-secondary dark:hover:text-white
                 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8 0 1010.586 10.586z"></path></svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 4a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm8 8a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm8-4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"></path></svg>
      )}
    </button>
  );
};

export default ThemeToggle;
