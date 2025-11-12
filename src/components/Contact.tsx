import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const whatsappNumber = '628979237175'; // Ensure this is the correct number without '+' or '0' prefix

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formattedMessage = `Halo Batari Wulan, saya ingin bertanya tentang layanan Anda.\n\nNama: ${name}\nEmail: ${email}\nTanggal Acara: ${date || 'Tidak disebutkan'}\nPesan: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, '_blank');

    // Optionally clear the form after submission attempt
    setName('');
    setEmail('');
    setDate('');
    setMessage('');
  };

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
              <li>WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">08979237175</a></li>
              <li>Instagram: <a href="https://www.instagram.com/batar.wulan" target="_blank" rel="noopener noreferrer">@batar.wulan</a></li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="date">Event Date</label>
              <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;