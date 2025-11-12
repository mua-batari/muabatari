import React from 'react';
import { FaRing, FaGraduationCap, FaUsers, FaUserTie, FaCut } from 'react-icons/fa';

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