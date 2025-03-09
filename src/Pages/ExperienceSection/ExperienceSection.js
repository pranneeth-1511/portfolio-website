import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-content">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <a href={require("../../Assets/PDF/Codsoft Internship.pdf")} target="_blank" 
              rel="noopener noreferrer" className="experience-sub-title">Internship</a>
            <p className="experience-item-description">
              <p><b>Company: </b>Codsoft</p>
              <p><b>Duration: </b>4 Weeks</p>
              <p><b>Domain: </b>Data Science</p>
              <p><b>Tasks Completed:</b></p>
              <ul className="task-list">
                <li><b>Task 1:</b> Use the Titanic dataset to create a model that predicts survival rates for Titanic passengers</li>
                <li><b>Task 2:</b> To create a model to classify iris flowers into species based on sepal and petal measurements using the iris dataset.</li>
                <li><b>Task 3:</b> Develop a machine learning model for detecting fraudulent credit card transactions.</li>
              </ul>
            </p>
          </div>
          <div className="experience-item">
            <h3 className='sub-title'>Executive Member</h3>
            <p className="experience-item-description">
              <p><b>Organization: </b>IEEE SB SSIT</p>
              <p><b>Duration: </b>June 2024 – Present</p>
              <p><b>Role: </b>Part-time</p>
              <p><b>Institution: </b>KPR Institute of Engineering and Technology</p>
              <p><b>Responsibilities:</b></p>
              <ul className="task-list">
                <li>Assisted in organizing technical events, workshops, and hackathons for student engagement.</li>
                <li>Collaborated with peers to promote innovation and knowledge-sharing in engineering and technology.</li>
                <li>Contributed to IEEE initiatives aimed at professional development and community building.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;