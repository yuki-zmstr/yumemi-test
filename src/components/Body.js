import React, { useState } from "react";
import PopulationGraph from "./populationGraph";
import ChoosePrefectures from "./ChoosePrefectures";
import { getGraphs } from "../api";

function Body() {
  const [responseData, setResponseData] = useState([]);
  const [message, setMessage] = useState("");
  const [selections, setSelections] = useState([]);

  function drawGraph(e) {
    e.preventDefault();
    setMessage("Loading...");
    // for (let prefecture in selections) {
    //   getGraphs(prefecture)
    //     .then((response) => {
    //       setResponseData(response.data.result.data[0].data);
    //       setMessage("");
    //     })
    //     .catch((error) => {
    //       setMessage("Error");
    //       console.error(error);
    //     });
    // }
  }

  function addPrefectureHandler(prefCode) {
    setSelections((prevSelections) => {
      return [...prevSelections, prefCode];
    });
  }

  function removePrefectureHandler(prefCode) {
    setSelections((prevSelections) => {
      return prevSelections.filter((prefecture) => prefecture !== prefCode);
    });
  }
  return (
    <>
      <ChoosePrefectures
        draw={drawGraph}
        onAddPrefecture={addPrefectureHandler}
        onRemovePrefecture={removePrefectureHandler}
      />
      <PopulationGraph result={responseData} message={message} />
    </>
  );
}

export default Body;
