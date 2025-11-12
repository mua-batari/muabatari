import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.instagram.com/batar.wulan" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Batar Wulan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;