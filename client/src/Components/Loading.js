import React, { useContext } from 'react';
import { ThemeContext } from './Theme/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Loading.css'; // Import the custom CSS
import Header from './Header';
import Footer from './Footer';

const Loading = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`resume container-fluid`} style={{ backgroundColor: 'var(--Resume-background)', color: 'var(--Resume-text)' }}> 
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center p-3" style={{ marginTop: '-13vh' }}>
        <h1>Loading...</h1>
        <h2>The backend is hosted on render.com and takes a minute to boot up.</h2>
        <div className="d-flex justify-content-center">
          <div className="spinner-grow mx-1 spinner-sequence" role="status" style={{ color: 'var(--Resume-button)' }}>
          </div>
          <div className="spinner-grow mx-1 spinner-sequence" role="status" style={{ animationDelay: '0.1s', color: 'var(--Resume-button)' }}>
          </div>
          <div className="spinner-grow mx-1 spinner-sequence" role="status" style={{ animationDelay: '0.2s', color: 'var(--Resume-button)' }}>
          </div>
          <div className="spinner-grow mx-1 spinner-sequence" role="status" style={{ animationDelay: '0.3s', color: 'var(--Resume-button)' }}>
          </div>
          <div className="spinner-grow mx-1 spinner-sequence" role="status" style={{ animationDelay: '0.4s', color: 'var(--Resume-button)' }}>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loading;