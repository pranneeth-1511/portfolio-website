import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Pranneeth D K</h1>
        <p className="section-description">
          I work well in team-based environments that facilitate innovation and development of effective solutions. I am highly interested in Web Development,
          Cyber Security, and Cloud Computing, and I am always keen to learn new technologies and implement them in real-world problem-solving. I am interested
          in discovering new technologies and solving difficult problems, and I am committed to lifelong learning and problem-solving. My flexibility enables
          me to work through dynamic situations and perform in high-pressure environments, leading to steady production of excellence and value. By embracing
          new concepts and applying my analytical capabilities, I help create meaningful solutions while fostering a culture of creativity and efficiency in
          the teams I work with.
        </p>
      </div>

      {/* Button container */}
      <div className="button-container">
        <a href="https://workdrive.zohopublic.in/external/5aaaabd2106ca87802bc9e14235e9e9bfdf8e4ad41c6c66762d181549ecb6871"
          target="_blank"
          rel="noopener noreferrer"
          className="button-style" >
            <b>View Resume</b></a>

        <a href="https://www.linkedin.com/in/pranneethdk"
          target="_blank"
          rel="noopener noreferrer"
          className="button-style" >
            <b>Hire Me</b></a>
      </div>
      
      {/* Scroll icon with fade-out effect */}
      <div className={`scroll-icon ${isScrolled ? 'hidden' : ''}`}>
        <div className="mouse"></div>
        <div className="scroll-text">Scroll Down</div>
      </div>
    </section>
  );
};

export default HeroSection;