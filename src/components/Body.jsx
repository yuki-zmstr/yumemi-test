import React, { useState, useEffect } from 'react';
import PopulationGraph from './PopulationGraph';
import ChoosePrefectures from './ChoosePrefectures';
import { getPopulationData } from '../api';

function Body() {
  const [responseData, setResponseData] = useState([]);
  const [selections, setSelections] = useState([]);
  const [graphLoadingMessage, setGraphLoadingMessage] = useState([]);

  const buildResponseData = () => {
    setResponseData([]);
    setGraphLoadingMessage('Loading graph...');
    const promises = [];
    selections.forEach((selection) => {
      const [prefCode, prefName] = selection.split(',');
      promises.push(
        getPopulationData(prefCode).then((response) => {
          const result = response.data.result.data[0].data;
          setResponseData((prevResponseData) => {
            if (prevResponseData.length === 0) {
              return result.map((pair) => ({
                year: pair.year,
                [prefName]: pair.value,
              }));
            }
            return prevResponseData.map((item, index) => ({
              ...item,
              [prefName]: result[index].value,
            }));
          });
        })
      );
    });
    Promise.all(promises).then(() => setGraphLoadingMessage(''));
  };

  useEffect(() => {
    buildResponseData();
  }, [selections]);

  const addPrefectureHandler = (prefCode) => {
    setSelections((prevSelections) => [...prevSelections, prefCode]);
  };

  const removePrefectureHandler = (prefCode) => {
    setSelections((prevSelections) => {
      return prevSelections.filter((prefecture) => prefecture !== prefCode);
    });
  };
  return (
    <>
      <ChoosePrefectures
        draw={(e) => buildResponseData(e)}
        onAddPrefecture={(prefCode) => addPrefectureHandler(prefCode)}
        onRemovePrefecture={(prefCode) => removePrefectureHandler(prefCode)}
      />
      <PopulationGraph result={responseData} message={graphLoadingMessage} />
    </>
  );
}

export default Body;
