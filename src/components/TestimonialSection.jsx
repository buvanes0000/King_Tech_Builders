import React, { useState, useEffect } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    name: 'Abishek',
    location: 'MUkkani, Thoothukudi',
    review: 'The team was professional and the quality of work exceeded my expectations. Highly recommended!'
  },
  {
    name: 'Ashok Raj',
    location: 'UmariKadu, Thoothukudi',
    review: 'Great experience from start to finish. The project was completed on time and within budget.'
  },
  {
    name: 'PremKumar',
    location: 'Tirunelveli',
    review: 'Exceptional service and attention to detail. I am extremely satisfied with the results.'
  },
  {
    name: 'Saravanan',
    location: 'Thoothukudi',
    review: 'The construction team was very efficient and the final outcome was exactly what I envisioned.'
  },
  {
    name: 'Arulanadu',
    location: 'GangaiKondan, Tiruneveli',
    review: 'Highly skilled professionals who delivered outstanding work. I would definitely hire them again.'
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">Customer Testimonials</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
          >
            <p className="testimonial-review">"{testimonial.review}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-location">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
