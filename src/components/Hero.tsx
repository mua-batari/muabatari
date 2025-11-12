import React from 'react';
import BatariImage from '../assets/images/batari.png';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Batari Wulan</h1>
        <p className="tagline">Creating timeless looks for your most memorable moments.</p>
        <a href="#portfolio" className="btn btn-primary">
          View My Work
        </a>
      </div>
      <div className="hero-image-container">
        <img src={BatariImage} alt="Batari Wulan - Makeup Artist" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
