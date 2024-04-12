import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setSystemTheme = e => setTheme(e.matches ? 'dark' : 'light');

    darkModeMediaQuery.addEventListener('change', setSystemTheme);

    return () => {
      darkModeMediaQuery.removeEventListener('change', setSystemTheme);
    };
  }, []);


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--accent-color', '#4ecca3');
      document.documentElement.style.setProperty('--primary-color', '#333');
      document.documentElement.style.setProperty('--secondary-color', '#2c2c2c');
      document.documentElement.style.setProperty('--Orange', '#b83b5e');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
      document.documentElement.style.setProperty('--Resume-background', '#333');
      document.documentElement.style.setProperty('--Resume-name', '#4ecca3');
      document.documentElement.style.setProperty('--Resume-headings', '#4ecca3');
      document.documentElement.style.setProperty('--Resume-text', '#ffffff');
      document.documentElement.style.setProperty('--Resume-bullet-points', '#4ecca3');
      document.documentElement.style.setProperty('--Resume-line', '#4ecca3');
      document.documentElement.style.setProperty('--Resume-button', '#4ecca3');
      document.documentElement.style.setProperty('--Resume-button-text', '#000');
    } else {
      document.documentElement.style.setProperty('--accent-color', '#b83b5e');
      document.documentElement.style.setProperty('--primary-color', '#9359c5');
      document.documentElement.style.setProperty('--secondary-color', '#f8f9fa');
      document.documentElement.style.setProperty('--Orange', '#4ecca3');
      document.documentElement.style.setProperty('--text-color', '#000000');
      document.documentElement.style.setProperty('--Resume-background', '#ffffff');
      document.documentElement.style.setProperty('--Resume-name', '#1a237e');
      document.documentElement.style.setProperty('--Resume-headings', '#1a237e');
      document.documentElement.style.setProperty('--Resume-text', '#333');
      document.documentElement.style.setProperty('--Resume-bullet-points', '#000');
      document.documentElement.style.setProperty('--Resume-line', '#000');
      document.documentElement.style.setProperty('--Resume-button', '#000');
      document.documentElement.style.setProperty('--Resume-button-text', '#fff');
    
    }
  }, [theme]);

  


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}