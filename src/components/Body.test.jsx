import React from 'react';
import { waitFor, render } from '@testing-library/react';
import Body from './Body';

describe('Body', () => {
  it('renders Body component', async () => {
    await waitFor(() => render(<Body />));
  });
});
