import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByTestId('3DWorld')).toBeInTheDocument();
    expect(screen.getByTestId('Projects')).toBeInTheDocument();
    expect(screen.getByTestId('Skills')).toBeInTheDocument();
    expect(screen.getByTestId('About')).toBeInTheDocument();
    expect(screen.getByTestId('AdminPanel')).toBeInTheDocument();
    expect(screen.getByTestId('Navigation')).toBeInTheDocument();
  });
});