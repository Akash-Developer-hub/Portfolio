import React from 'react';
import './Internship.css'; // Import the custom CSS for styling

const Internship = () => {
  const internships = [
    {
      company: 'KGISL - Microcollege',
      period: 'Apr 2024 - Dec 2024 (Pursuing)',
      role: 'Full Stack Developer',
      description:
        'Focused on full-stack development, web designing, and software testing as part of an intensive internship program to gain real-world experience and industry exposure.',
    },
  ];

  return (
    <div className="internship-container my-5">
      <h2 className="internship-title">Internship</h2>
      <div className="internship-list">
        {internships.map((internship, index) => (
          <div className="internship-card card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-company">{internship.company}</h5>
              <p className="card-period">{internship.period}</p>
              <p className="card-role"><strong>Role:</strong> {internship.role}</p>
              <p className="card-description">{internship.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
