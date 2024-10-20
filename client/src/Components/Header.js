import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Header.css';

function Header() {
  return (
    <header className="container-fluid p-3 border-bottom" style={{ backgroundColor: 'var(--background)', color: 'var(--text)', borderBottom: '2px solid var(--shadow-color)', zIndex: 2 }}>
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
        <h1 className="fw-bold" style={{ marginLeft: '5rem' }}>Dylan McMullen</h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end gap-3">
          <nav className="d-flex flex-wrap justify-content-center gap-3 fw-bold">
            <a href="/" className="text-decoration-none nav-link-custom">Home</a>
            <a href="/projects" className="text-decoration-none nav-link-custom">Projects</a>
            <a href="/resume" className="text-decoration-none nav-link-custom">Resume</a>
            <a href="/contact" className="text-decoration-none nav-link-custom">Contact me</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;