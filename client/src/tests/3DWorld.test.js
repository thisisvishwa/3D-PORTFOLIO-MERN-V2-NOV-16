```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 3DWorld from '../components/3DWorld/3DWorld';

describe('3DWorld', () => {
  test('renders 3DWorld component', () => {
    render(<3DWorld />);
    expect(screen.getByTestId('3DWorld')).toBeInTheDocument();
  });
});
```