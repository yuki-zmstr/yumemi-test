import React from 'react';
import { render } from '@testing-library/react';

import PopulationGraph from './PopulationGraph';

jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: (props) => <div {...props} />,
}));

describe('PopulationGraph', () => {
  it('checks the value of last updated date', () => {
    const { getByText } = render(<PopulationGraph />);
    const today = new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Tokyo' });
    const h3value = getByText(`最終更新日:${today}`);
    expect(h3value).toBeInTheDocument();
  });

  it('checks existance of line-chart', () => {
    const { queryByTestId } = render(<PopulationGraph />);
    const lineChart = queryByTestId('line-chart');
    expect(lineChart).toBeInTheDocument();
  });
});
