import React from 'react';
import { waitFor, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    await waitFor(() => render(<App />));
  });
});
