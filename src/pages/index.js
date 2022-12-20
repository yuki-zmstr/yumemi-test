import { getPrefectures, getGraphs } from "../api";
import React, { useState } from "react";
import {
  LineChart,
  XAxis,
  CartesianGrid,
  Line,
  Tooltip,
  YAxis,
  Label,
} from "recharts";

import logo from "../../favicon.ico";

function IndexPage() {
  const [responseData, setResponseData] = useState([]);
  const [prefectures, setPrefectures] = useState("");
  const [message, setMessage] = useState("");

  function drawGraph(e) {
    e.preventDefault();

    setMessage("Loading...");
    getGraphs()
      .then((response) => {
        setResponseData(response.data.result.data[0].data);
        setMessage("");
      })
      .catch((error) => {
        setMessage("Error");
        console.error(error);
      });
  }
  return (
    <div
      style={{
        background: "#EEE",
        padding: "5%",
        fontFamily: '"Lucida Console", Monaco, monospace',
      }}
    >
      <h1
        style={{
          background: "black",
          color: "white",
          padding: "1rem",
          display: "inline-block",
        }}
      >
        株式会社ゆめみ入社試験
      </h1>
      <h2>都道府県別人口推移</h2>
      <form onSubmit={drawGraph}>
        <fieldset>
          <legend>描画</legend>
          <button type="submit">描画する</button>
        </fieldset>
      </form>
      <p>{message}</p>
      <small>最終更新日: {new Date().toJSON().slice(0, 10)}</small>
      {/* {responseData.map(({ prefCode, prefName }) => (
        <div>{prefName}</div>
      ))} */}
      <LineChart
        width={900}
        height={500}
        data={responseData}
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
    </div>
  );
}

export default IndexPage;
