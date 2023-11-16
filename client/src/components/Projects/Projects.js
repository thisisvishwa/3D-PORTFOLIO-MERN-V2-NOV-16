```javascript
import React, { useContext, useEffect } from 'react';
import Project from '../Project/Project';
import { ProjectContext } from '../../context/ProjectContext';
import './Projects.scss';

const Projects = () => {
  const { projects, getProjects } = useContext(ProjectContext);

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div id="Projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
```