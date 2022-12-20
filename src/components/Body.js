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
    for (let prefecture in selections) {
      getGraphs(prefecture)
        .then((response) => {
          setResponseData(response.data.result.data[0].data);
          setMessage("");
        })
        .catch((error) => {
          setMessage("Error");
          console.error(error);
        });
    }
  }

  function addPrefectureHandler(prefCode) {
    setSelections((prevSelections) => {
      return [...prevSelections, prefCode];
    });
    // console.log(selections);
  }

  function removePrefectureHandler(prefCode) {
    setSelections((prevSelections) => {
      return prevSelections.filter((prefecture) => prefecture !== prefCode);
    });
    // console.log(selections);
  }
  return (
    <React.Fragment>
      <ChoosePrefectures
        draw={drawGraph}
        onAddPrefecture={addPrefectureHandler}
        onRemovePrefecture={removePrefectureHandler}
      />
      <PopulationGraph result={responseData} message={message} />
    </React.Fragment>
  );
}

export default Body;
