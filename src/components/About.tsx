import React from 'react';
import BatariImage from '../assets/images/batari.png';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={BatariImage} alt="Batari Wulan - The Make-Up Artist" />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              Welcome! I'm [MUA's Name], a passionate and certified make-up artist with over [X] years of experience. My goal is to enhance your natural beauty and make you feel confident and radiant for any occasion.
            </p>
            <p>
              I specialize in [mention specialties, e.g., bridal, editorial, and special event makeup], and I'm dedicated to using high-quality products to create a flawless and long-lasting look. Let's create something beautiful together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;