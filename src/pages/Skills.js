import React from 'react';
import './Skills.css'; // Import custom CSS for styles

const Skills = () => {
  const skills = [
    { name: 'React.js', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'HTML, CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'Bootstrap', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'MongoDB', level: 60 },
  ];

  return (
    <div className="skills-container my-5">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
