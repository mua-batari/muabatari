import React from 'react';
import { FaHeart } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <header className="top-bar">
      <div className="container">
        <a href="#home" className="logo">
          <span>Batari Wulan</span>
          <FaHeart className="logo-heart" />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
