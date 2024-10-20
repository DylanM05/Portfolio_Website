import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="text-center py-2" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <p className="mb-0">© 2024 Dylan McMullen. All rights reserved.</p>
    </footer>
  );
}

export default Footer;