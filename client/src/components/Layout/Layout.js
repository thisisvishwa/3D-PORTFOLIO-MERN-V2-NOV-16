```javascript
import React from 'react';
import Navigation from '../Navigation/Navigation';
import 3DWorld from '../3DWorld/3DWorld';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import AdminPanel from '../AdminPanel/AdminPanel';
import './Layout.scss';

const Layout = () => {
    return (
        <div className="layout">
            <Navigation />
            <3DWorld />
            <Projects />
            <Skills />
            <About />
            <AdminPanel />
        </div>
    );
};

export default Layout;
```