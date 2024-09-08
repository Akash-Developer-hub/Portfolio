import React from 'react';
import './About.css'; // Import custom CSS for the About page

const About = () => {
  return (
    <div className="about-container my-5">
      <h2 className="section-title">About Me</h2>
      <p className="about-description">
        I'm a dedicated full-stack developer currently pursuing my B.Tech in AI & Data Science at SNS College of Engineering with a CGPA of 7.9. My passion lies in building impactful web applications with a focus on intuitive design and functionality.
      </p>
      <p className="schooling">Schooling: Sri Bharathi Matric Higher Secondary School (SSLC: 75%, HSC: 77%)</p>
    </div>
  );
};

export default About;
