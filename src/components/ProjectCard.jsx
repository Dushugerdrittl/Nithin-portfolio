import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description, tags, imageUrl, liveUrl, sourceUrl, sourceLabel, isInternship }) => {
  const navigate = useNavigate();

  const handleCertificationClick = (e) => {
    e.preventDefault();
    if (sourceLabel === 'View Certification') {
      navigate('/certificate', { state: { imageUrl: sourceUrl, title } });
    } else {
      window.open(sourceUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`bg-card dark:bg-card rounded-lg shadow-card overflow-hidden transform hover:scale-105 hover:shadow-lg transition-shadow transition-transform duration-300 ease-in-out flex flex-col border-2 border-border ${isInternship ? 'border-accent/50' : 'border-accent/20'} rounded-lg`}>
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={`Screenshot of ${title}`} />
      )}
      <div className="p-6 flex flex-col flex-grow bg-section/80 dark:bg-section/80 rounded-lg">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-accent/20 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-accent/30 dark:text-accent">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-h4 font-heading text-primary dark:text-primary mb-2">{title}</h3>
        <p className="text-body font-body text-primary dark:text-primary leading-body mb-6 flex-grow">
          {description}
        </p>
        <div className="flex gap-4 mt-auto">
          {(sourceLabel === 'View Certification' || title === 'AIML and Data Science, Internship') ? (
            <a
              href={sourceUrl}
              onClick={handleCertificationClick}
              className="inline-block bg-transparent border-2 border-accent text-accent font-body font-bold py-2 px-6 rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
            >
              View Certification
            </a>
          ) : (
            <>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-primary font-body font-bold py-2 px-6 rounded-lg shadow-button hover:bg-primary hover:text-accent transition-colors duration-300"
                >
                  Live Demo
                </a>
              )}
              {sourceUrl && (
                <a
                  href={sourceUrl}
                  onClick={handleCertificationClick}
                  className="inline-block bg-transparent border-2 border-accent text-accent font-body font-bold py-2 px-6 rounded-lg hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  {sourceLabel ? sourceLabel : 'Source Code'}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
