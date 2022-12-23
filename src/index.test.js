import React from 'react';
import { render } from '@testing-library/react';
import IndexPage from './pages/index';

test('renders learn react link', () => {
  render(<IndexPage />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
