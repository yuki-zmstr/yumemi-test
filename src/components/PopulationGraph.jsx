import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  Label,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from './graphUtils/CustomTooltip';
import Lines from './graphUtils/Lines';
import styles from '../stylesheets/PopulationGraph.module.css';

const PopulationGraph = ({ result, message }) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <h3>
        最終更新日:
        {new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Tokyo' })}
      </h3>

      <div data-testid='line-chart' className={styles.lineChart}>
        <ResponsiveContainer>
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
            {Lines(result)}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
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
