import React from 'react';

const testimonialsData = [
  {
    quote: "The best makeup artist I've ever worked with! My wedding makeup was flawless and lasted all day.",
    author: 'Jane Doe, Bride',
  },
  {
    quote: 'Incredibly talented and professional. The look created for my photoshoot was exactly what I envisioned.',
    author: 'Sarah Smith, Model',
  },
  {
    quote: 'Made me feel so beautiful and confident for my special event. Highly recommend!',
    author: 'Emily Johnson, Client',
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <h2 className="section-title">What My Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
