import React from 'react';
import './Achievements.css'; // Import custom CSS for styles

const Achievements = () => {
  const achievements = [
    {
      title: 'Hackathons',
      description:
        'Participated in 3 inter-college level hackathons, securing a place in the top 10 teams for innovative solutions.',
    },
    {
      title: 'Code Debugging',
      description:
        'Participated in a college-level code debugging competition, demonstrating strong problem-solving skills.',
    },
    {
      title: 'Certifications',
      description:
        'Achieved certifications in Enterprise Design Thinking (IBM) and MongoDB (PrepInsta), showcasing a commitment to continuous learning.',
    },
  ];

  return (
    <div className="achievements-container my-5">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div className="achievement-card card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">{achievement.title}</h5>
              <p className="card-text">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
