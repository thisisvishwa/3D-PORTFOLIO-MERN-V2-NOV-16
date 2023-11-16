```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from '../components/Navigation/Navigation';

describe('Navigation', () => {
  test('renders Navigation component', () => {
    render(<Navigation />);
    
    expect(screen.getByTestId('Navigation')).toBeInTheDocument();
  });

  test('renders correct navigation links', () => {
    render(<Navigation />);
    
    expect(screen.getByText('3D World')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Admin Panel')).toBeInTheDocument();
  });
});
```