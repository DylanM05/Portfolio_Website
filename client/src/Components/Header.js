import React from 'react';
import './Styles/Header.css';

function Header() {
  
  return (
    <header className='header-resume' >
      <h1>Dylan McMullen</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact me</a>
      </nav>
    </header>
  );
}

export default Header;