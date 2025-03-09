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
          <a href="#about" className="navbar-link" onClick={toggleNav}>About</a>
          <a href="#education" className="navbar-link" onClick={toggleNav}>Education</a>
          <a href="#certifications" className="navbar-link" onClick={toggleNav}>Certifications</a>
          <a href="#skills" className="navbar-link" onClick={toggleNav}>Skills</a>
          <a href="#projects" className="navbar-link" onClick={toggleNav}>Projects</a>
          <a href="#achievements" className="navbar-link" onClick={toggleNav}>Achievements</a>
          <a href="#contact" className="navbar-link" onClick={toggleNav}>Let's connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;