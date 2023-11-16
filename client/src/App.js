```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 3DWorld from './components/3DWorld/3DWorld';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Layout from './components/Layout/Layout';
import './styles/index.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={3DWorld} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
```