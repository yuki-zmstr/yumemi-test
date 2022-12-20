import getPrefectures from "../api";
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

  function fetchData(e) {
    e.preventDefault();

    setMessage("Loading...");
    getPrefectures()
      .then((response) => {
        console.log(response.data.result);
        setResponseData(response.data.result);
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
      <form onSubmit={fetchData}>
        <fieldset>
          <legend>Get All Prefectures</legend>
          <button type="submit">Get</button>
        </fieldset>
      </form>
      <p>{message}</p>
      <p>都道府県</p>
      <small>最終更新日: {new Date().toJSON().slice(0, 10)}</small>
      {responseData.map(({ prefCode, prefName }) => (
        <div>{prefName}</div>
      ))}
    </div>
  );
}

export default IndexPage;
