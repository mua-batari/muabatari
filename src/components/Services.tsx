import React from 'react';
import { FaHeart, FaStar, FaCamera } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaHeart />,
    title: 'Bridal Makeup',
    description: 'Complete bridal makeup services to make your special day unforgettable.',
  },
  {
    icon: <FaStar />,
    title: 'Special Occasion',
    description: 'Makeup for parties, proms, and other special events.',
  },
  {
    icon: <FaCamera />,
    title: 'Editorial & Photoshoot',
    description: 'Professional makeup for photoshoots, fashion shows, and editorials.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
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

export default Services;