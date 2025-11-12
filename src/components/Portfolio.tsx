import React, { useState } from 'react';
import BatariImage from '../assets/images/batari.png';
import { FaRing, FaGraduationCap, FaUsers, FaUserTie, FaCut } from 'react-icons/fa';

// Data sources remain the same
const portfolioImages = [
  { id: 1, src: BatariImage, alt: 'Bridal Makeup' },
  { id: 2, src: BatariImage, alt: 'Graduation Makeup' },
  { id: 3, src: BatariImage, alt: 'Bridesmaid Makeup' },
  { id: 4, src: BatariImage, alt: 'Makeup Mature' },
  { id: 5, src: BatariImage, alt: 'Hairdo' },
  { id: 6, src: BatariImage, alt: 'Special Occasion Makeup' },
];

const servicesData = [
  { icon: <FaRing />, title: 'Bridal Makeup', description: 'Flawless makeup for your special wedding day.' },
  { icon: <FaGraduationCap />, title: 'Graduation Makeup', description: 'Achieve a radiant look for your graduation ceremony.' },
  { icon: <FaUsers />, title: 'Bridesmaid Makeup', description: 'Coordinated and beautiful makeup for the bridal party.' },
  { icon: <FaUserTie />, title: 'Makeup Mature', description: 'Enhancing beauty with techniques tailored for mature skin.' },
  { icon: <FaCut />, title: 'Hairdo', description: 'Professional hairstyling for any event or occasion.' },
];

// Combine data
const workAndServices = servicesData.map(service => ({
  ...service,
  images: portfolioImages.filter(image => image.alt === service.title),
}));

const Portfolio: React.FC = () => {
  // State to track the active tab, initialized with the first service's title
  const [activeTab, setActiveTab] = useState(servicesData[0].title);

  // Find the currently active service object based on the activeTab state
  const activeService = workAndServices.find(service => service.title === activeTab);

  return (
    <>
      <h2 className="section-title">My Work & Services</h2>
      
      {/* Tab Navigation */}
      <div className="tabs-nav">
        {servicesData.map(service => (
          <button 
            key={service.title} 
            className={`tab-item ${activeTab === service.title ? 'active' : ''}`}
            onClick={() => setActiveTab(service.title)}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeService && (
          <div className="service-group">
            <div className="service-card">
              <div className="service-icon">{activeService.icon}</div>
              <h3 className="service-title">{activeService.title}</h3>
              <p className="service-description">{activeService.description}</p>
            </div>

            {activeService.images.length > 0 && (
              <div className="portfolio-grid" style={{ marginTop: '1.5rem' }}>
                {activeService.images.map((item) => (
                  <div key={item.id} className="portfolio-item">
                    <img src={item.src} alt={item.alt} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;
