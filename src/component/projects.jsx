import React from "react";

const ProjectCard = ({ title, imageSrc, description, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group"
      aria-label={`Open project ${title}`}
    >
      <div className="card-inner">
        <img src={imageSrc} alt={`${title} screenshot`} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
