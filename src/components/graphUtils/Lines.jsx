import React from 'react';

import { Line } from 'recharts';

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Lines = (result) => {
  const entries = result.map((option) => Object.keys(option));
  const flattened = entries.reduce((prev, current) => {
    prev = prev.concat(current);
    return prev;
  }, []);
  const filtered = flattened.filter((key) => key !== 'year');
  const uniqueKeys = [...new Set(filtered)];
  return uniqueKeys.map((key) => (
    <Line key={key} type='monotone' stroke={getRandomColor()} dataKey={key} />
  ));
};

export default Lines;
