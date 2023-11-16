```javascript
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from '../components/Project/Project';

afterEach(cleanup);

describe('Project component', () => {
  it('renders without crashing', () => {
    render(<Project />);
  });

  it('renders project title', () => {
    const { getByTestId } = render(<Project title="Test Project" />);
    expect(getByTestId('project-title')).toHaveTextContent('Test Project');
  });

  it('renders project description', () => {
    const { getByTestId } = render(<Project description="This is a test project" />);
    expect(getByTestId('project-description')).toHaveTextContent('This is a test project');
  });

  it('renders project image', () => {
    const { getByTestId } = render(<Project image="test.jpg" />);
    expect(getByTestId('project-image')).toHaveAttribute('src', 'test.jpg');
  });

  it('renders project link', () => {
    const { getByTestId } = render(<Project link="http://test.com" />);
    expect(getByTestId('project-link')).toHaveAttribute('href', 'http://test.com');
  });
});
```