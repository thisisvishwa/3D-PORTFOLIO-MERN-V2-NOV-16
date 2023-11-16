import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About/About';

test('renders About component', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});

test('displays developer bio', () => {
  render(<About />);
  const bioElement = screen.getByText(/bio/i);
  expect(bioElement).toBeInTheDocument();
});

test('displays developer experience', () => {
  render(<About />);
  const experienceElement = screen.getByText(/experience/i);
  expect(experienceElement).toBeInTheDocument();
});

test('displays developer education', () => {
  render(<About />);
  const educationElement = screen.getByText(/education/i);
  expect(educationElement).toBeInTheDocument();
});

test('displays developer contact info', () => {
  render(<About />);
  const contactElement = screen.getByText(/contact/i);
  expect(contactElement).toBeInTheDocument();
});