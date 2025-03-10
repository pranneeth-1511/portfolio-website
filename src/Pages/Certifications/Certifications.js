import React from 'react';
import './Certifications.css';

import githubIcon from '../../Assets/github.png';
import ltIcon from '../../Assets/l&t.png';
import pythonIcon from '../../Assets/python.png';
import aiIcon from '../../Assets/ai-for-everyone.png';
import googleanalytics from '../../Assets/Google-analytics.png';
import cybersecurity from '../../Assets/cyber-security.jpeg';
import OCIDFA from '../../Assets/OCIDataFoundationsAssociate.png'

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-content">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={githubIcon} alt="GitHub Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/GitHub Foundations.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">
                GitHub Foundations
              </a>
            </div>
            <p className="certifications-item-details">GitHub | 06-Jan-2025</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={ltIcon} alt="Certification Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/Engineering Graphics and Design.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">
                Engineering Graphics & Design
              </a>
            </div>
            <p className="certifications-item-details">L&T Edutech</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={ltIcon} alt="Certification Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/IT Primer.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">
                IT Primer
              </a>
            </div>
            <p className="certifications-item-details">L&T Edutech</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={pythonIcon} alt="Certification Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/Python Basics Certificate - Udemy.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">
                Python for Beginners
              </a>
            </div>
            <p className="certifications-item-details">Udemy</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={aiIcon} alt="Certification Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/AI For Everyone.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">
                AI For Everyone
              </a>
            </div>
            <p className="certifications-item-details">Coursera</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={googleanalytics} alt="Certification Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/Google Analytics.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">
                Google Analytics
              </a>
            </div>
            <p className="certifications-item-details">Skillshop [Google]</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={cybersecurity} alt="Certification Logo" className="certifications-item-icon" />
              <h3 className='subtitle'>Cyber Security | Ongoing</h3>
            </div>
            <p className="certifications-item-details">Udemy</p>
          </div>
          <div className="certifications-item">
            <div className="certifications-item-header">
              <img src={OCIDFA} alt="Certification Logo" className="certifications-item-icon" />
              <a href={require("../../Assets/PDF/Certificates/Oracle Cloud Infrastructure 2024 Data Foundations Associate.pdf")} target="_blank" 
                rel="noopener noreferrer" className="certifications-item-title">OCI Data Foundations Associate 2024</a>
            </div>
            <p className="certifications-item-details">Oracle University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;