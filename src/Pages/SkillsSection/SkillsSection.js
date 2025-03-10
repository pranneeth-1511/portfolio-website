import React from 'react';
import './SkillsSection.css';
import python from '../../Assets/icons/PYTHON.png';
import Java from '../../Assets/icons/JAVA.png';
import html from '../../Assets/icons/HTML.png';
import css from '../../Assets/icons/CSS.png';
import f360 from '../../Assets/icons/F360.png';
import aws from '../../Assets/icons/AWS.png';
import github from '../../Assets/icons/github.png';
import reactjs from '../../Assets/icons/REACTJS.png';
import nodejs from '../../Assets/icons//NODE JS.png';


const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-content">
        <h2 className="section-title">Skills</h2>
          <h3 className="sub-title">Technical Skills</h3>
            <div class="skills-list">
              <div class="skill-item">
                <img src={Java} class="skill-logo" />
                <span> JAVA</span>
              </div>
              <div class="skill-item">
                <img src={python} class="skill-logo" />
                <span> Python</span>
              </div>
            </div>
          <h3 className="sub-title">Frontend Development</h3>
            <div class="skills-list">
              <div class="skill-item">
                <img src={reactjs} class="skill-logo" />
                <span> React</span>
              </div>
              <div class="skill-item">
                <img src={html} class="skill-logo" />
                <span> HTML</span>
              </div>
              <div class="skill-item">
                <img src={css} class="skill-logo" />
                <span> CSS</span>
              </div>
            </div>
          <h3 className="sub-title">Backend Development</h3>
            <div class="skills-list">
              <div class="skill-item">
                <img src={nodejs} class="skill-logo" />
                <span> Node JS</span>
              </div>
            </div>
        <h3 className="sub-title">Tools & Packages</h3>
          <div className="skills-list">
            <div class="skill-item">
                <img src={f360} class="skill-logo" />
                <span> Autodesk Fusion 360</span>
              </div>
              <div class="skill-item">
                <img src={github} class="skill-logo" />
                <span> Git & Github</span>
              </div>
              <div class="skill-item">
                <img src={aws} class="skill-logo" />
                <span> AWS</span>
              </div>
          <div className="skill-item">CI/CD Pipeline</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;