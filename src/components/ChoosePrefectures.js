import React, { useState, useEffect } from "react";

import { getPrefectures } from "../api";

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
    <form onSubmit={draw}>
      <fieldset>
        <legend>都道府県</legend>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          {prefectures.map(({ prefCode, prefName }) => (
            <label key={prefCode}>
              <input
                type="checkbox"
                value={prefCode}
                onChange={checkboxChangeHandler}
              />
              {prefName}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>描画</legend>
        <button type="submit">描画する</button>
      </fieldset>
    </form>
  );
}

export default ChoosePrefectures;
