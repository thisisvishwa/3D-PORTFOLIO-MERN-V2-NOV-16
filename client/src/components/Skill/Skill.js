```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => {
  const { title, icon, description, proficiency } = skill;

  return (
    <div className="skill">
      <div className="skill-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="skill-content">
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{description}</p>
        <div className="skill-proficiency">
          <span className="skill-proficiency-level">{proficiency}</span>
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    proficiency: PropTypes.string.isRequired,
  }).isRequired,
};

export default Skill;
```