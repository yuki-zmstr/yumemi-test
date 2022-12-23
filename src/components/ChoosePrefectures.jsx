import React, { useState, useEffect } from 'react';

import { getPrefectures } from '../api';

import regionData from '../utils/regionData';

import {
  form,
  fieldset,
  label,
  checkbox,
  region,
  prefectureSelections,
} from '../stylesheets/ChoosePrefectures.module.css';

function ChoosePrefectures({ draw, onAddPrefecture, onRemovePrefecture }) {
  const [prefectures, setPrefectures] = useState([]);
  const [preLoadMessage, setPreLoadMessage] = useState('Loading prefectures...');

  const fetchData = () => {
    getPrefectures().then((response) => {
      setPrefectures(response.data.result);
      if (response.data.result) {
        setPreLoadMessage('');
      } else {
        setPreLoadMessage('都道府県データの取得に失敗しました。API_KEYを再確認してください。');
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkboxChangeHandler = (e) => {
    if (e.target.checked === true) {
      onAddPrefecture(e.target.value);
    } else {
      onRemovePrefecture(e.target.value);
    }
  };

  const filterPrefecture = (key) =>
    regionData[key].map((code) => {
      const result = prefectures?.filter(({ prefCode }) => prefCode === code);
      return (
        <div key={result[0]?.prefCode}>
          <label className={label} htmlFor={result[0]?.prefCode}>
            <input
              id={result[0]?.prefCode}
              type="checkbox"
              value={`${result[0]?.prefCode},${result[0]?.prefName}`}
              onChange={checkboxChangeHandler}
              className={checkbox}
            />
            {result[0]?.prefName}
          </label>
        </div>
      );
    });

  return (
    <form className={form} onSubmit={draw}>
      <fieldset className={fieldset}>
        <legend>都道府県</legend>
        <div>
          <p>{preLoadMessage}</p>
          {Object.keys(regionData).map((key) => (
            <div key={key}>
              <h3 className={region}>{key}</h3>
              <div className={prefectureSelections}>{filterPrefecture(key)}</div>
            </div>
          ))}
        </div>
      </fieldset>
      <button type="submit">描画する</button>
    </form>
  );
}

export default ChoosePrefectures;
