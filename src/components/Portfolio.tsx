import React from 'react';
import BatariImage from '../assets/images/batari.png';
import Portfolio2 from '../assets/images/portfolio-2.jpg';
import Portfolio3 from '../assets/images/portfolio-3.jpg';
import Portfolio4 from '../assets/images/portfolio-4.jpg';
import Portfolio5 from '../assets/images/portfolio-5.jpg';
import Portfolio6 from '../assets/images/portfolio-6.jpg';
import { FaRing, FaGraduationCap, FaUsers, FaUserTie, FaCut } from 'react-icons/fa';

const portfolioItems = [
  { id: 1, src: BatariImage, alt: 'Bridal Makeup' },
  { id: 2, src: Portfolio2, alt: 'Graduation Makeup' },
  { id: 3, src: Portfolio3, alt: 'Bridesmaid Makeup' },
  { id: 4, src: Portfolio4, alt: 'Makeup Mature' },
  { id: 5, src: Portfolio5, alt: 'Hairdo' },
  { id: 6, src: Portfolio6, alt: 'Special Occasion Makeup' },
];

const servicesData = [
  {
    icon: <FaRing />,
    title: 'Bridal Makeup',
    description: 'Flawless makeup for your special wedding day.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Graduation Makeup',
    description: 'Achieve a radiant look for your graduation ceremony.',
  },
  {
    icon: <FaUsers />,
    title: 'Bridesmaid Makeup',
    description: 'Coordinated and beautiful makeup for the bridal party.',
  },
  {
    icon: <FaUserTie />,
    title: 'Makeup Mature',
    description: 'Enhancing beauty with techniques tailored for mature skin.',
  },
  {
    icon: <FaCut />,
    title: 'Hairdo',
    description: 'Professional hairstyling for any event or occasion.',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Work & Services</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.src} alt={item.alt} />
              <div className="portfolio-overlay">
                <p>View Project</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services-grid" style={{ marginTop: '4rem' }}>
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
