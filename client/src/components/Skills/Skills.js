```javascript
import React, { useContext, useEffect } from 'react';
import Skill from '../Skill/Skill';
import { SkillContext } from '../../context/SkillContext';
import './Skills.scss';

const Skills = () => {
  const { skills, getSkills } = useContext(SkillContext);

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div id="Skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
```