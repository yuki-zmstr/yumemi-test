import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';

import ChoosePrefectures from './ChoosePrefectures';

describe('ChoosePrefectures', () => {
  it('renders ChoosePrefectures component', async () => {
    await waitFor(() => render(<ChoosePrefectures />));
  });

  it('renders prefectures if request succeeds', async () => {
    render(<ChoosePrefectures />);
    const prefectureSample = await screen.findByText('北海道');
    expect(prefectureSample).toBeInTheDocument();
  });
});
