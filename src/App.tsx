import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaInstagram } from 'react-icons/fa';
const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About Me' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  return (
    <>
      <MobileNav />
      <div className="app-container">
      {/* === LEFT COLUMN (STICKY) === */}
      <aside className="left-column">
        <div className="left-column-inner">
          <a href="#home" className="logo">
            <h1>Batari Wulan</h1>
            <p className="tagline">Professional Makeup Artist</p>
          </a>

          <nav className="main-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="social-links">
            <a href="https://www.instagram.com/batari.wulan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* Add other social links here if needed */}
          </div>
        </div>
      </aside>

      {/* === RIGHT COLUMN (SCROLLABLE) === */}
      <main className="right-column">
        <section id="home">
          <Hero />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
    </>
  );
}

export default App;
