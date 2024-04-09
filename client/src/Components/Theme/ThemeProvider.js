import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--accent-color', '#4ecca3');
      document.documentElement.style.setProperty('--primary-color', '#1a1a1a');
      document.documentElement.style.setProperty('--secondary-color', '#2c2c2c');
      document.documentElement.style.setProperty('--Orange', '#b83b5e');
      document.documentElement.style.setProperty('--text-color', '#ffffff');
    } else {
      document.documentElement.style.setProperty('--accent-color', '#007bff');
      document.documentElement.style.setProperty('--primary-color', '#9359c5');
      document.documentElement.style.setProperty('--secondary-color', '#f8f9fa');
      document.documentElement.style.setProperty('--Orange', '#FFA500');
      document.documentElement.style.setProperty('--text-color', '#000000');
    }
  }, [theme]);
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}