import React, { useState, useEffect } from "react";

import { getPrefectures } from "../api";

import {
  form,
  container,
  label,
  checkbox,
  button,
} from "./ChoosePrefectures.module.css";

function ChoosePrefectures({
  draw,
  onClick,
  onAddPrefecture,
  onRemovePrefecture,
}) {
  const [prefectures, setPrefectures] = useState([]);
  const [preLoadMessage, setPreLoadMessage] = useState("Loading...");

  useEffect(
    () =>
      getPrefectures()
        .then((response) => {
          setPrefectures(response.data.result);
          setPreLoadMessage("");
        })
        .catch((error) => {
          console.error(error);
        }),
    [setPrefectures]
  );

  function checkboxChangeHandler(e) {
    if (e.target.checked === true) {
      onAddPrefecture(parseInt(e.target.value));
    } else {
      onRemovePrefecture(parseInt(e.target.value));
    }
  }

  return (
    <form onSubmit={draw} className={form}>
      <button onClick={onClick}>hello</button>
      <fieldset>
        <legend>都道府県</legend>
        <div className={container}>
          <p>{preLoadMessage}</p>
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
