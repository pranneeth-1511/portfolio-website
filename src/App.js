import React, { useState } from 'react';
import './App.css'; // Import App.css
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Import images
import githubIcon from './Assets/github.png';
import ltIcon from './Assets/l&t.png';
import pythonIcon from './Assets/python.png';
import aiIcon from './Assets/ai-for-everyone.png';
import mailIcon from './Assets/mail-icon.png';
import linkedinIcon from './Assets/linkedin-icon.png';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Initialize to false

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="portfolio-container">
      <SpeedInsights />
      <Analytics />

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">My Portfolio</div>
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
            <a href="#contact" className="navbar-link" onClick={toggleNav}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="about-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Pranneeth D K</h1>
          <p className="section-description">
            <li>I'm a college student pursuing <b>B.Tech Computer Science and Business Systems</b> at KPR Institute of Engineering and Technology.</li>
            <li>I have a strong interest in Web Development, Cyber Security, Cloud Computing, and I'm always eager to learn new technologies and solve real-world problems.</li>
            <li>Hackfest 2024 Coordinator - Associated with SAP (2024) Successfully coordinated Hackfest 2024, ensuring smooth execution and team collaboration.</li>
          </p>
          <a href="#contact" className="hero-button">Get in Touch</a>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-content">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            <div className="education-item">
              <h3 className="education-item-title">NARAYANA EM HS PEDARUPALLI - NELLORE, ANDHRA PRADESH</h3>
              <p className="education-item-details">SSLC - 98% | [2020]</p>
            </div>
            <div className="education-item">
              <h3 className="education-item-title">NARAYANA JUNIOR COLLEGE - VIJAYAWADA, ANDHRA PRADESH</h3>
              <p className="education-item-details">HSC - 52% | [2022]</p>
            </div>
            <div className="education-item">
              <h3 className="education-item-title">KPR INSTITUTE OF ENGINEERING AND TECHNOLOGY - COIMBATORE</h3>
              <p className="education-item-details">B.Tech COMPUTER SCIENCE AND BUSINESS SYSTEMS | [2022-2026]</p>
              <p className="education-item-details">CGPA: 7.1</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <div className="section-content">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-list">
            <div className="certifications-item">
              <div className="certifications-item-header">
                <img src={githubIcon} alt="GitHub Logo" className="certifications-item-icon" />
                <a href="https://drive.google.com/file/d/1BgFo6xJ-5bKFZFh3eRDNYKm8sqn_v7IW/view" target="_blank" rel="noopener noreferrer" className="certifications-item-title">
                  GitHub Foundations
                </a>
              </div>
              <p className="certifications-item-details">GitHub | 06-Jan-2025</p>
            </div>
            <div className="certifications-item">
              <div className="certifications-item-header">
                <img src={ltIcon} alt="Certification Logo" className="certifications-item-icon" />
                <a href="https://drive.google.com/file/d/1-xTOj5TpONVq2zSjt_WSx9GXG8Eh2gdb/view" target="_blank" rel="noopener noreferrer" className="certifications-item-title">
                  Engineering Graphics & Design
                </a>
              </div>
              <p className="certifications-item-details">L&T Edutech</p>
            </div>
            <div className="certifications-item">
              <div className="certifications-item-header">
                <img src={ltIcon} alt="Certification Logo" className="certifications-item-icon" />
                <a href="https://drive.google.com/file/d/17Tspo3M_vU8o5GOxixda_09AX3HwAOX7/view" target="_blank" rel="noopener noreferrer" className="certifications-item-title">
                  IT Primer
                </a>
              </div>
              <p className="certifications-item-details">L&T Edutech</p>
            </div>
            <div className="certifications-item">
              <div className="certifications-item-header">
                <img src={pythonIcon} alt="Certification Logo" className="certifications-item-icon" />
                <a href="https://drive.google.com/file/d/15Of2FtYsKEtHNgbn5auTVllTFxOwTZz2/view" target="_blank" rel="noopener noreferrer" className="certifications-item-title">
                  Python for Beginners
                </a>
              </div>
              <p className="certifications-item-details">Udemy</p>
            </div>
            <div className="certifications-item">
              <div className="certifications-item-header">
                <img src={aiIcon} alt="Certification Logo" className="certifications-item-icon" />
                <a href="https://drive.google.com/file/d/13d31hAfse3CXFgv8AU8JKlQMCD8K1-g9/view" target="_blank" rel="noopener noreferrer" className="certifications-item-title">
                  AI For Everyone
                </a>
              </div>
              <p className="certifications-item-details">Coursera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-content">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-list">
            <div className="skill-item">Python</div>
            <div className="skill-item">Java</div>
          </div>
          <h2 className="section-title">Frontend Development</h2>
          <div className="skills-list">
            <div className="skill-item">React</div>
            <div className="skill-item">HTML & CSS</div>
          </div>
          <h2 className="section-title">Backend Development</h2>
          <div className="skills-list">
            <div className="skill-item">Node.js</div>
          </div>
          <h2 className="section-title">Tools & Packages</h2>
          <div className="skills-list">
            <div className="skill-item">Autodesk Fusion 360</div>
            <div className="skill-item">Git & GitHub</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <div className="projects-list">
            <div className="project-item">
              <h3 className="project-item-title">E-COMMERCE PLATFORM WITHOUT INTERMEDIARIES</h3>
              <p className="project-item-description">Developed a decentralized e-commerce platform enabling direct transactions between buyers and sellers, eliminating the need for intermediaries. Focused on reducing transaction costs and enhancing transparency.</p>
            </div>
            <div className="project-item">
              <h3 className="project-item-title">ONLINE VOTING SYSTEM</h3>
              <p className="project-item-description">Designed and implemented a secure and user-friendly online voting platform to streamline election processes, ensuring transparency, accessibility, and efficiency.</p>
            </div>
            <div className="project-item">
              <h3 className="project-item-title">SMART WHEELCHAIR</h3>
              <p className="project-item-description">Designed an IoT-enabled wheelchair with voice, joystick, and mobile app control, featuring obstacle detection and health monitoring for enhanced accessibility and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-content">
          <h2 className="section-title">Achievements and Participation</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <h3 className="achievement-item-title">Hackfest 2024 Coordinator</h3>
              <p className="achievement-item-description">Associated with SAP (2024) Successfully coordinated Hackfest 2024, ensuring smooth execution and team collaboration.</p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-item-title">TechLead, CSBS Department Association (2024)</h3>
              <p className="achievement-item-description">Selected as the TechLead of the Computer Science and Business Systems (CSBS) Department Association, responsible for leading initiatives and coordinating events.</p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-item-title">HackXelerate'25 TechLead</h3>
              <p className="achievement-item-description">Selected as the Tech Lead for HackXelerate'25, tasked with managing technical operations, guiding participants, and ensuring the successful conduct of the hackathon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-content">
          <h2 className="connect-title">Let's connect together!</h2>
          <div className="contact-buttons">
            <a href="mailto:pranneethpersonal@gmail.com" className="contact-button" target="_blank" rel="noopener noreferrer">
              <img src={mailIcon} alt="Mail Icon" className="contact-icon" />
              <span>Mail Me</span>
            </a>
            <a href="https://www.linkedin.com/in/pranneethdk" className="contact-button" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn Icon" className="contact-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/pranneeth-1511" className="contact-button" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub Icon" className="contact-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Pranneeth D K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;