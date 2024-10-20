import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const setSystemTheme = e => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };

    darkModeMediaQuery.addEventListener('change', setSystemTheme);

    return () => {
      darkModeMediaQuery.removeEventListener('change', setSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {

            //************ DARK MODE   ******************//
      //background
      document.documentElement.style.setProperty('--background', '#333');
      //shadow
      document.documentElement.style.setProperty('--shadow-color', '#fff');
      //text
      document.documentElement.style.setProperty('--text', '#ffffff');
      //Buttons
      document.documentElement.style.setProperty('--button', '#4ecca3');
      document.documentElement.style.setProperty('--button-text', '#000');
      document.documentElement.style.setProperty('--button-hover', '#000'); 
      document.documentElement.style.setProperty('--button-hover-text', '#fff');
      //tags on home page
      document.documentElement.style.setProperty('--tag-color', '#2c2c2c');

      //Resume
      document.documentElement.style.setProperty('--title-colour', '#4ecca3');
      document.documentElement.style.setProperty('--accent-colour', '#4ecca3');
      
      //Carousel
      document.documentElement.style.setProperty('--indicator-color', '#4ecca3');

    } else {
      //************ LIGHT MODE   ******************//
      //background
      document.documentElement.style.setProperty('--background', '#ffffff');
      //shadow
      document.documentElement.style.setProperty('--shadow-color', '#333');
      //text
      document.documentElement.style.setProperty('--text', '#333');
      //Buttons
      document.documentElement.style.setProperty('--button', '#b83b5e');
      document.documentElement.style.setProperty('--button-text', '#fff');
      document.documentElement.style.setProperty('--button-hover', '#000'); 
      document.documentElement.style.setProperty('--button-hover-text', '#fff');
      //tags on home page
      document.documentElement.style.setProperty('--tag-color', '#d9dadb');

      //Resume
      document.documentElement.style.setProperty('--title-colour', '#b83b5e');
      document.documentElement.style.setProperty('--accent-colour', '#000');

      //Carousel
      document.documentElement.style.setProperty('--indicator-color', '#fff');
    }
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
