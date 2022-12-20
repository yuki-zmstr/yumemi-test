import React, { useState } from "react";
import PopulationGraph from "./populationGraph";
import ChoosePrefectures from "./ChoosePrefectures";
import { getGraphs } from "../api";

function Body() {
  const [responseData, setResponseData] = useState([]);
  const [message, setMessage] = useState("");

  function drawGraph(e) {
    e.preventDefault();
    setMessage("Loading...");
    getGraphs(10)
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
    <React.Fragment>
      <ChoosePrefectures draw={drawGraph} />
      <PopulationGraph result={responseData} message={message} />
    </React.Fragment>
  );
}

export default Body;
