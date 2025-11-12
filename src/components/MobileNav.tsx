import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
];

const MobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className="mobile-nav">
      <div className="mobile-nav-bar">
        <a href="#home" className="logo-mobile">
          Batari Wulan
        </a>
        <button className="hamburger-icon" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`off-canvas-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default MobileNav;
