import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, CartesianGrid, Line, Tooltip, YAxis, Label, Legend } from 'recharts';

import styles from '../stylesheets/PopulationGraph.module.css';

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <h3>{`${label}年`}</h3>
        {payload.map((item) => (
          <p key={item.value}>{`${item.name} : ${item.value} 人`}</p>
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
        {new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }).slice(0, 10)}
      </h3>
      <LineChart
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 5,
        }}
        data={result}
        width={800}
        height={600}
      >
        <YAxis
          tickFormatter={(value) => {
            return new Intl.NumberFormat('en-US', {
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
    </div>
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.instanceOf(Array),
  label: PropTypes.number,
};

CustomTooltip.defaultProps = {
  active: false,
  payload: [],
  label: 0,
};

PopulationGraph.propTypes = {
  result: PropTypes.instanceOf(Array),
  message: PropTypes.string,
};

PopulationGraph.defaultProps = {
  result: [],
  message: '',
};

export default PopulationGraph;
