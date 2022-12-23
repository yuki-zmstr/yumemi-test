import React, { useState, useEffect } from "react";

import { getPrefectures } from "../api";

import {
  form,
  container,
  label,
  checkbox,
  button,
} from "./ChoosePrefectures.module.css";

function ChoosePrefectures({ draw, onAddPrefecture, onRemovePrefecture }) {
  const [prefectures, setPrefectures] = useState([]);
  const [preLoadMessage, setPreLoadMessage] = useState(
    "Loading prefectures..."
  );

  const fetchData = () => {
    getPrefectures()
      .then((response) => {
        setPrefectures(response.data.result);
        response.data.result
          ? setPreLoadMessage("")
          : setPreLoadMessage(
              "都道府県データの取得に失敗しました。API_KEYを再確認してください。"
            );
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  function checkboxChangeHandler(e) {
    if (e.target.checked === true) {
      onAddPrefecture(e.target.value);
    } else {
      onRemovePrefecture(e.target.value);
    }
  }

  return (
    <form className={form} onSubmit={draw}>
      <fieldset>
        <legend>都道府県</legend>
        <div className={container}>
          <p>{preLoadMessage}</p>
          {prefectures?.map(({ prefCode, prefName }) => (
            <label key={prefCode} className={label}>
              <input
                type="checkbox"
                value={prefCode}
                onChange={checkboxChangeHandler}
                className={checkbox}
              />
              {prefName}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className={button}>
        描画する
      </button>
    </form>
  );
}

export default ChoosePrefectures;
