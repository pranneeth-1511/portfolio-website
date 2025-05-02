import React from 'react';
import mailIcon from '../../Assets/mail-icon.png';
import linkedinIcon from '../../Assets/linkedin-icon.png';
import githubIcon from '../../Assets/github.png';
import instagram from '../../Assets/instagram-icon.png';
import hackerrank from '../../Assets/icons/hackerrank.png';
import leetcode from '../../Assets/icons/leetcode.png';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-content">
        <p className="connect-title">Let's collaborate and build something amazing! Reach out to me</p>
        <div className="contact-buttons">
          <a href="mailto:mail@pranneethdk.com" className="contact-button" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.instagram.com/pranneeth_1511/" className="contact-button" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram Icon" className="contact-icon" />
            <span>Instagram</span>
          </a>
          <a href="https://leetcode.com/u/pranneethdk/" className="contact-button" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} alt="Instagram Icon" className="contact-icon" />
            <span>LeetCode</span>
          </a>
          <a href="https://www.hackerrank.com/profile/pranneethdk" className="contact-button" target="_blank" rel="noopener noreferrer">
            <img src={hackerrank} alt="Instagram Icon" className="contact-icon" />
            <span>Hacker Rank</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;