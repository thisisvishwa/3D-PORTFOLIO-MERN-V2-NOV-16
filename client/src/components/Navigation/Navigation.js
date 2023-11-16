```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/3DWorld">3D World</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```