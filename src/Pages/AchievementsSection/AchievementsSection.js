import React from 'react';
import './AchievementsSection.css';

const AchievementsSection = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="section-content">
        <h2 className="section-title">Achievements and Participation</h2>
        <div className="achievements-list">
          <div className="achievement-item">
            <h3 className="sub-title">Hackfest 2024 Coordinator</h3>
            <p className="achievement-item-description">Associated with SAP (2024) Successfully coordinated Hackfest 2024, ensuring smooth execution and team collaboration.</p>
          </div>
          <div className="achievement-item">
            <h3 className="sub-title">TechLead, CSBS Department Association (2024)</h3>
            <p className="achievement-item-description">Selected as the TechLead of the Computer Science and Business Systems (CSBS) Department Association,
               responsible for leading initiatives and coordinating events.</p>
          </div>
          <div className="achievement-item">
            <h3 className="sub-title">HackXelerate'25 TechLead</h3>
            <p className="achievement-item-description">Selected as the Tech Lead for HackXelerate'25, tasked with managing technical operations,
               guiding participants, and ensuring the successful conduct of the hackathon.</p>
          </div>
          <div className="achievement-item">
            <a href={require("../../Assets/PDF/Capabl Hackathon.pdf")} target="_blank" 
              rel="noopener noreferrer" className="subh-title">TechfusionX Coordinator</a>
            <p className="achievement-item-description">Received Certificate of Coordination by Capabl for the 2-day Coding Saksham Program '24, handling logistics, team coordination,
               and coordinating industry-led sessions at KPR Institute of Engineering and Technology.</p>
          </div>
          <div className="achievement-item">
            <a href={require("../../Assets/PDF/Certificates/RIP'24 NSS.pdf")} target="_blank" 
              rel="noopener noreferrer" className="subh-title">Rural Immersion Program - NSS</a>
            <p className="achievement-item-description">Received Certificate  for active participation in Rural Immersion Program 2024 at Kaduvettipalayam Village (Oct 18,2024 - Oct 29,2024).
                Made active contribution towards community outreach, cultural exchange, and rural development activities, thus creating a positive social contribution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AchievementsSection;