import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Pranneeth D K</h1>
        <p className='section-description'>I work well in team-based environments that facilitate innovation and development of effective solutions. I am highly interested in Web Development,
           Cyber Security, and Cloud Computing, and I am always keen to learn new technologies and implement them in real-world problem-solving. I am interested in discovering new technologies
            and solving difficult problems, and I am committed to lifelong learning and problem-solving. My flexibility enables me to work through dynamic situations and perform in high-pressure
            environments, leading to steady production of excellence and value. By embracing new concepts and applying my analytical capabilities, I help create meaningful solutions while fostering
            a culture of creativity and efficiency in the teams I work with.</p>
      </div>
      <div className="hero-content">
        <a href={require("../../Assets/PDF/PRANNEETH D K RESUME.pdf")} target="_blank" 
        rel="noopener noreferrer" className="button-style">Download Resume</a>
      </div>
    </section>
  );
};

export default HeroSection;