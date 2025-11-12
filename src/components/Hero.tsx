import React from 'react';
import BatariImage from '../assets/images/batari.png';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Makeup by</h1>
          <h2>Batari Wulan</h2>
          <img src={BatariImage} alt="Batari Wulan - Makeup Artist" className="hero-image" />
          <p>Creating timeless looks for your most memorable moments.</p>
          <a href="#portfolio" className="btn btn-primary">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;