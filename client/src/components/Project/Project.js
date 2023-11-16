```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  const { title, description, images, links } = project;

  return (
    <div id="Project" className="project">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${title} screenshot ${index}`} />
        ))}
      </div>
      <div className="project-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Project;
```