import React, { useContext } from 'react';
import { ThemeContext } from './Theme/ThemeContext';
import './Styles/Loading.css';

const Loading = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`resume container-fluid ${theme === 'dark' ? 'dark-mode' : ''}`}> 
      <div className="spinner-page">
        <h1>Loading...</h1>
        <h2>The backend is hosted on render.com and takes a minute to boot up.</h2>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;