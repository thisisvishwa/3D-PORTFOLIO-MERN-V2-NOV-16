```javascript
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from '../components/Skills/Skills';

afterEach(cleanup);

describe('Skills component', () => {
  test('it renders', () => {
    const { asFragment } = render(<Skills />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('it displays the correct content', () => {
    const { getByTestId } = render(<Skills />);
    expect(getByTestId('skills')).toHaveTextContent('Skills');
  });
});
```