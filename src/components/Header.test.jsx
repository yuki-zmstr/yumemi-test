import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('checks the value of the Header component', () => {
    const { getByText } = render(<Header />);
    const h1value = getByText('株式会社ゆめみ入社試験');
    const h2value = getByText('都道府県別人口推移');
    expect(h1value).toBeInTheDocument();
    expect(h2value).toBeInTheDocument();
  });
});
