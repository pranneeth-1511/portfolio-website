import React from 'react';
import './App.css';
import backgroundImage from './Assets/Background-port.jpg';
// Import components
import Navbar from './Pages/navbar/Navbar';
import HeroSection from './Pages/HeroSection/HeroSection';
import EducationSection from './Pages/EducationSection/EducationSection';
import Certifications from './Pages/Certifications/Certifications';
import SkillsSection from './Pages/SkillsSection/SkillsSection';
import ProjectsSection from './Pages/ProjectsSection/ProjectsSection';
import ExperienceSection from './Pages/ExperienceSection/ExperienceSection';
import AchievementsSection from './Pages/AchievementsSection/AchievementsSection';
import ContactSection from './Pages/ContactSection/ContactSection';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="portfolio-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar />
      <HeroSection />
      <EducationSection />
      <Certifications />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;