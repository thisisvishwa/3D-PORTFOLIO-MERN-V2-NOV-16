```javascript
import React, { useContext, useState } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import { SkillContext } from '../../context/SkillContext';
import { AuthContext } from '../../context/AuthContext';
import './AdminPanel.scss';

const AdminPanel = () => {
  const { addProject, updateProject, deleteProject } = useContext(ProjectContext);
  const { addSkill, updateSkill, deleteSkill } = useContext(SkillContext);
  const { user } = useContext(AuthContext);

  const [project, setProject] = useState({});
  const [skill, setSkill] = useState({});

  const handleProjectChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    setSkill({ ...skill, [e.target.name]: e.target.value });
  };

  const handleAddProject = () => {
    addProject(project);
    setProject({});
  };

  const handleUpdateProject = () => {
    updateProject(project);
    setProject({});
  };

  const handleDeleteProject = () => {
    deleteProject(project);
    setProject({});
  };

  const handleAddSkill = () => {
    addSkill(skill);
    setSkill({});
  };

  const handleUpdateSkill = () => {
    updateSkill(skill);
    setSkill({});
  };

  const handleDeleteSkill = () => {
    deleteSkill(skill);
    setSkill({});
  };

  if (!user || user.role !== 'admin') {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="AdminPanel">
      {/* Project form */}
      <div className="AdminPanel__project-form">
        {/* Form fields and buttons for add, update, delete project */}
      </div>

      {/* Skill form */}
      <div className="AdminPanel__skill-form">
        {/* Form fields and buttons for add, update, delete skill */}
      </div>
    </div>
  );
};

export default AdminPanel;
```