import React from 'react';
import './Projects.css'; // Import the custom CSS file

const Projects = () => {
  const projects = [
    {
      title: 'Skill Sync',
      role: 'Full-Stack Developer',
      description:
        'Designed and developed a website that helps users identify their career strengths and weaknesses, build AI-powered resumes, and generate video resume content using HTML, CSS, MongoDB, and Node.js.',
    },
    {
      title: 'Easy Agri',
      role: 'Lead Developer',
      description:
        'Developed a web-based platform using low-code tools that improve the management of crops for users with limited agricultural knowledge, integrating features that provide real-time advice tailored to specific plant needs.',
    },
  ];

  return (
    <div className="projects-container my-5">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">
                <strong>Role:</strong> {project.role}
                <br />
                <strong>Description:</strong> {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
