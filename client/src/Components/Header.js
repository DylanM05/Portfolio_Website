import React from 'react';
import './Styles/Header.css';

function Header({ isResumePage }) {
  const headerClass = isResumePage ? 'header-resume' : 'header';
  
  return (
    <header className={headerClass}>
      <h1>Dylan McMullen</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/resume">Resume</a>
        <a href="#contact">Contact me</a>
      </nav>
    </header>
  );
}

export default Header;