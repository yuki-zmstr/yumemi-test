import React, { useState } from "react";
import PopulationGraph from "./populationGraph";
import ChoosePrefectures from "./ChoosePrefectures";
import { getPopulationData } from "../api";

function Body() {
  const [responseData, setResponseData] = useState([]);
  const [graphLoadingMessage, setGraphLoadingMessage] = useState("");
  const [selections, setSelections] = useState([]);

  function buildResponseData(e) {
    e.preventDefault();
    setResponseData([]);
    for (const prefCode of selections) {
      getPopulationData(prefCode).then((response) => {
        let result = response.data.result.data[0].data;
        setResponseData((prevResponseData) => {
          if (prevResponseData.length === 0) {
            return result.map((pair) => {
              return {
                year: pair.year,
                [prefCode]: pair.value,
              };
            });
          } else {
            return prevResponseData.map((item, index) => {
              return {
                ...item,
                [prefCode]: result[index].value,
              };
            });
          }
        });
      });
    }
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
        draw={buildResponseData}
        onAddPrefecture={addPrefectureHandler}
        onRemovePrefecture={removePrefectureHandler}
      />
      <PopulationGraph result={responseData} message={graphLoadingMessage} />
    </>
  );
}

export default Body;
