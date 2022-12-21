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

  useEffect(
    () =>
      getPrefectures()
        .then((response) => {
          setPrefectures(response.data.result);
        })
        .catch((error) => {
          console.error(error);
        }),
    [setPrefectures]
  );

  function checkboxChangeHandler(e) {
    if (e.target.checked === true) {
      onAddPrefecture(e.target.value);
    } else {
      onRemovePrefecture(e.target.value);
    }
  }

  return (
    <form onSubmit={draw} className={form}>
      <fieldset>
        <legend>都道府県</legend>
        <div className={container}>
          {prefectures.map(({ prefCode, prefName }) => (
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
