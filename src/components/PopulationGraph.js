import React from "react";
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  Label,
  Legend,
} from "recharts";

import { container } from "./PopulationGraph.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
};

function PopulationGraph({ result, message }) {
  return (
    <div className={container}>
      <p>{message}</p>
      <small>最終更新日: {new Date().toJSON().slice(0, 10)}</small>

      <LineChart
        width={1000}
        height={500}
        margin={{ top: 50, right: 20, left: 10, bottom: 5 }}
      >
        <YAxis tickCount={10} type="number" width={100}>
          <Label value="人口" position="insideLeft" angle={270} />
        </YAxis>
        <XAxis
          padding={{ left: 5, right: 5 }}
          tickCount={10}
          angle={-60}
          height={90}
          dataKey="year"
        />
        <CartesianGrid stroke="#f5f5f5" />
        {/* multiple lines. do a map.  prefecture: ... population: ...*/}
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          data={result?.population}
          dataKey="value"
          stroke="yellow"
          yAxisId={0}
        />
      </LineChart>
    </div>
  );
}

export default PopulationGraph;
