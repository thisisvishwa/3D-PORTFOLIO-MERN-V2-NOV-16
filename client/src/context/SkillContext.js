```javascript
import React, { createContext, useState } from 'react';

export const SkillContext = createContext();

export const SkillProvider = (props) => {
    const [skills, setSkills] = useState([]);

    return (
        <SkillContext.Provider value={[skills, setSkills]}>
            {props.children}
        </SkillContext.Provider>
    );
};
```