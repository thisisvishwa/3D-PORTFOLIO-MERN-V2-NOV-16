```javascript
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skill from '../components/Skill/Skill';

afterEach(cleanup);

describe('Skill component', () => {
  it('renders without crashing', () => {
    render(<Skill />);
  });

  it('renders correct content', () => {
    const { getByTestId } = render(<Skill title="JavaScript" icon="js-icon" description="JavaScript is a programming language." proficiency="Expert" />);
    expect(getByTestId('skill-title')).toHaveTextContent('JavaScript');
    expect(getByTestId('skill-icon')).toHaveClass('js-icon');
    expect(getByTestId('skill-description')).toHaveTextContent('JavaScript is a programming language.');
    expect(getByTestId('skill-proficiency')).toHaveTextContent('Expert');
  });
});
```