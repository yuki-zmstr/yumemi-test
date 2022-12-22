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

const getRandomColor = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

const lines = (result) => {
  // for each prefecture allocated, make a line.
  result.map((prefecture) => {
    return (
      <Line
        key={Math.random()}
        type="monotone"
        stroke={getRandomColor()}
        dataKey="value.value"
      />
    );
  });
};

function PopulationGraph({ result, message }) {
  console.log(result);
  return (
    <div className={container}>
      <p>{message}</p>
      <small>最終更新日: {new Date().toJSON().slice(0, 10)}</small>

      <LineChart
        width={1000}
        height={500}
        margin={{ top: 50, right: 20, left: 10, bottom: 5 }}
        data={result}
      >
        <YAxis tickCount={10} type="number" width={100}>
          <Label value="人口" position="insideLeft" angle={270} />
        </YAxis>
        <XAxis
          padding={{ left: 5, right: 5 }}
          tickCount={10}
          angle={-60}
          height={90}
          dataKey="value.year"
        />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {lines(result)}
      </LineChart>
    </div>
  );
}

export default PopulationGraph;
