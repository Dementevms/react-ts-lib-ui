import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '../Button';

describe('CreativesdPage tests', () => {
  it('Initial render', async () => {
    render(<Button size="large">Hello</Button>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
