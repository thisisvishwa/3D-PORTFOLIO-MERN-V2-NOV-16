```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminPanel from '../components/AdminPanel/AdminPanel';

test('renders AdminPanel component', () => {
  const { getByTestId } = render(<AdminPanel />);
  const adminPanel = getByTestId('AdminPanel');
  expect(adminPanel).toBeInTheDocument();
});

test('add project button opens project form', () => {
  const { getByTestId } = render(<AdminPanel />);
  const addProjectButton = getByTestId('addProjectButton');
  fireEvent.click(addProjectButton);
  const projectForm = getByTestId('projectForm');
  expect(projectForm).toBeInTheDocument();
});

test('add skill button opens skill form', () => {
  const { getByTestId } = render(<AdminPanel />);
  const addSkillButton = getByTestId('addSkillButton');
  fireEvent.click(addSkillButton);
  const skillForm = getByTestId('skillForm');
  expect(skillForm).toBeInTheDocument();
});

test('edit project button opens project form with pre-filled data', () => {
  const { getByTestId } = render(<AdminPanel />);
  const editProjectButton = getByTestId('editProjectButton');
  fireEvent.click(editProjectButton);
  const projectForm = getByTestId('projectForm');
  const titleInput = getByTestId('titleInput');
  expect(projectForm).toBeInTheDocument();
  expect(titleInput.value).toBe('Test Project');
});

test('edit skill button opens skill form with pre-filled data', () => {
  const { getByTestId } = render(<AdminPanel />);
  const editSkillButton = getByTestId('editSkillButton');
  fireEvent.click(editSkillButton);
  const skillForm = getByTestId('skillForm');
  const titleInput = getByTestId('titleInput');
  expect(skillForm).toBeInTheDocument();
  expect(titleInput.value).toBe('Test Skill');
});
```