```javascript
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProjectProvider } from '../context/ProjectContext';
import { SkillProvider } from '../context/SkillContext';
import { AuthProvider } from '../context/AuthContext';

// Custom render function for components that use Providers or Routers
const customRender = (ui, options) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

// Wrapping all providers for easy access in tests
const AllProviders = ({ children }) => {
  return (
    <Router>
      <AuthProvider>
        <ProjectProvider>
          <SkillProvider>
            {children}
          </SkillProvider>
        </ProjectProvider>
      </AuthProvider>
    </Router>
  );
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
```