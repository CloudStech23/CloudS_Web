import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FadeOnScroll = ({ children, animation }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <div data-aos={`fade-${animation}`}>
      {children}
    </div>
  );
};

export default FadeOnScroll;
