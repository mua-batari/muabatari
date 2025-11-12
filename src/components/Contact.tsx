import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Have a question or want to book a session? Fill out the form or contact me directly.
            </p>
            <ul>
              <li>Email: dyahsidi@gmail.com</li>
              <li>WhatsApp: <a href="https://wa.me/628979237175">08979237175</a></li>
              <li>Instagram: <a href="https://www.instagram.com/batar.wulan" target="_blank" rel="noopener noreferrer">@batar.wulan</a></li>
            </ul>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Event Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;