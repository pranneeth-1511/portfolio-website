import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <a href="https://www.pranneethdk.com/" target="_self" className="portfolio-link">My Portfolio</a>
        </div>
        <button className="navbar-toggle" onClick={toggleNav}>
          &#9776; {/* Hamburger icon */}
        </button>
        <div className={`navbar-links ${isNavOpen ? 'open' : ''}`}>
          <a href="#about" className="navbar-dropdown-toggle" onClick={toggleNav}>About</a>
          
          {/* Qualifications Dropdown */}
          <div className="navbar-dropdown">
            <span className="navbar-dropdown-toggle">Qualifications </span>
            <div className={`navbar-dropdown-content ${isNavOpen ? 'open' : ''}`}>
              <a href="#education" className="navbar-link" onClick={toggleNav}>&#8594;Education</a>
              <a href="#certifications" className="navbar-link" onClick={toggleNav}> &#8594;Certifications</a>
              <a href="#skills" className="navbar-link" onClick={toggleNav}> &#8594;Skills</a>
            </div>
          </div>

          {/* Work Dropdown */}
          <div className="navbar-dropdown">
            <span className="navbar-dropdown-toggle">Work</span>
            <div className={`navbar-dropdown-content ${isNavOpen ? 'open' : ''}`}>
              <a href="#projects" className="navbar-link" onClick={toggleNav}>&#8594;Projects</a>
              <a href="#experience" className="navbar-link" onClick={toggleNav}>&#8594;Experience</a>
              <a href="#achievements" className="navbar-link" onClick={toggleNav}>&#8594;Achievements</a>
            </div>
          </div>

          <a href="#contact" className="navbar-dropdown-toggle" onClick={toggleNav}>Let's connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;