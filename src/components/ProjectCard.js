import React from 'react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, image }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image || '/api/placeholder/300/200'} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
