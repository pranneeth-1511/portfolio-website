import React from 'react';
import './EducationSection.css';

const EducationSection = () => {
  return (
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
  );
};

export default EducationSection;