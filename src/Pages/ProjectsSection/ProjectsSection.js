import React from 'react';
import "./ProjectsSection.css"

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          <div className="project-item">
            <h3 className="project-title">E-Commerce platform without intermediaries</h3>
            <p className="project-item-description">Developed a decentralized e-commerce platform enabling direct transactions between buyers and sellers, 
              eliminating the need for intermediaries. Focused on reducing transaction costs and enhancing transparency.</p>
          </div>
          <div className="project-item">
            <h3 className="project-title">Online Voting System</h3>
            <p className="project-item-description">Designed and implemented a secure and user-friendly online voting platform to streamline election processes, 
              ensuring transparency, accessibility, and efficiency.</p>
          </div>
          <div className="project-item">
            <a href="https://github.com/pranneeth-1511/Smart-Wheel-Chair" target="_blank" rel="noopener noreferrer" className="link-project-title">Smart wheelchair</a>
            <p className="project-item-description">Designed an IoT-enabled wheelchair using Python and Tkinter, joystick, and mobile app control.
              Features include obstacle detection and health monitoring, enhancing accessibility and safety</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;