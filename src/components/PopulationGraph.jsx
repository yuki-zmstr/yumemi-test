import React from 'react';
import PropTypes from 'prop-types';

import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  Label,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import styles from '../stylesheets/PopulationGraph.module.css';

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <h3 className='label'>{`${label}年`}</h3>
        {payload.map((item) => (
          <p className='label' key={item.value}>
            {`${item.name} : ${item.value} 人`}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const lines = (result) => {
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

function PopulationGraph({ result, message }) {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <h3>
        最終更新日:
        {new Date().toJSON().slice(0, 10)}
      </h3>

      <ResponsiveContainer>
        <LineChart
          margin={{
            top: 50,
            right: 20,
            left: 10,
            bottom: 5,
          }}
          data={result}
        >
          <YAxis
            tickFormatter={(value) => {
              new Intl.NumberFormat('en-US', {
                notation: 'compact',
                compactDisplay: 'short',
              }).format(value);
            }}
            type='number'
            width={100}
            stroke='black'
          >
            <Label value='人口' position='insideLeft' angle={270} fill='black' />
          </YAxis>
          <XAxis
            padding={{ left: 5, right: 5 }}
            tickCount={10}
            angle={-60}
            height={90}
            dataKey='year'
            stroke='black'
          >
            <Label value='年度' position='insideBottom' fill='black' />
          </XAxis>
          <CartesianGrid stroke='#ffffff' />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {lines(result)}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.arrayOf.isRequired,
  label: PropTypes.string.isRequired,
};

PopulationGraph.propTypes = {
  result: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default PopulationGraph;
