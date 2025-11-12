import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaImages, FaConciergeBell, FaUser, FaEnvelope, FaHeart } from 'react-icons/fa';

const navLinks = [
  { href: '#home', label: 'Home', icon: <FaHome /> },
  { href: '#portfolio', label: 'Portfolio', icon: <FaImages /> },
  { href: '#about', label: 'About', icon: <FaUser /> },
  { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
];

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' }); // Trigger when section is in the middle of the screen

    sections.forEach(section => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo">
          <span>Batari Wulan</span>
          <FaHeart className="logo-heart" />
        </a>
        <nav className="main-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={activeLink === link.href ? 'active' : ''}>
                  <span className="nav-icon">{link.icon}</span>
                  <span className="nav-text">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;