import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-content">
        <h2 className="section-title">Skills</h2>
        <h3 className="sub-title">Technical Skills</h3>
        <div className="skills-list">
          <div className="skill-item">Python</div>
          <div className="skill-item">Java</div>
        </div>
        <h3 className="sub-title">Frontend Development</h3>
        <div className="skills-list">
          <div className="skill-item">React</div>
          <div className="skill-item">HTML & CSS</div>
        </div>
        <h3 className="sub-title">Backend Development</h3>
        <div className="skills-list">
          <div className="skill-item">Node.js</div>
        </div>
        <h3 className="sub-title">Tools & Packages</h3>
        <div className="skills-list">
          <div className="skill-item">Autodesk Fusion 360</div>
          <div className="skill-item">Git & GitHub</div>
          <div className="skill-item">AWS</div>
          <div className="skill-item">CI/CD Pipeline</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;