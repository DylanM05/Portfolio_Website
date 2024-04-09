import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../Styles/ThemeSwitch.css';

export function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`theme-switch ${theme}`} onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}