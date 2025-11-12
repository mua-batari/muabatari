import React from 'react';
import HeroBg from '../assets/images/hero-bg.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Artistry in Every Detail</h1>
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