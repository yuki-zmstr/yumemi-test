import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  Label,
} from "recharts";
import React from "react";

function PopulationGraph(props) {
  return (
    <>
      <p>{props.message}</p>
      <small>最終更新日: {new Date().toJSON().slice(0, 10)}</small>

      <LineChart
        width={900}
        height={500}
        data={props.result}
        margin={{ top: 50, right: 20, left: 10, bottom: 5 }}
      >
        <YAxis tickCount={10} type="number" width={80}>
          <Label value="人口" position="insideLeft" angle={270} />
        </YAxis>
        <Tooltip />
        <XAxis
          padding={{ left: 5, right: 5 }}
          tickCount={10}
          angle={-60}
          height={90}
          dataKey="year"
        />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </>
  );
}

export default PopulationGraph;
