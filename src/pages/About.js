import React from 'react';
import './About.css'; // Import custom CSS for styling
import profileImage from './profile.jpg'; // Adjust the path to where your image is stored

const About = () => {
  return (
    <div className="about-container my-5">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img src={profileImage} alt="Akash S" className="profile-image" />
        <div className="about-text">
          <p>
            Hi, I’m Akash S, a dedicated full-stack developer and current AI & Data Science student at SNS College of Engineering. I specialize in building interactive and user-friendly web applications, and I'm passionate about leveraging technology to solve real-world problems.
          </p>
          <p>
            With experience in frontend and backend technologies such as React.js, Node.js, MongoDB, and MySQL, I love creating efficient and innovative solutions. I am constantly learning and pushing myself to improve, aiming to make an impact in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
