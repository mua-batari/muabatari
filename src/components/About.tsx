import React from 'react';
import BatariImage from '../assets/images/batari.png';

const About: React.FC = () => {
  return (
    // The <section> tag is now in App.tsx
    <>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Welcome! I'm Batari Wulan, a passionate and certified make-up artist with over 5 years of experience. My goal is to enhance your natural beauty and make you feel confident and radiant for any occasion.
          </p>
          <p>
            I specialize in bridal, editorial, and special event makeup, and I'm dedicated to using high-quality products to create a flawless and long-lasting look. Let's create something beautiful together!
          </p>
        </div>
        <div className="about-image">
          <img src={BatariImage} alt="Batari Wulan - The Make-Up Artist" />
        </div>
      </div>
    </>
  );
};

export default About;
