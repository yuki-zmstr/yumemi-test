import React, { useState, useEffect } from "react";

import { getPrefectures } from "../api";

function ChoosePrefectures(props) {
  const [prefectures, setPrefectures] = useState([]);

  useEffect(
    () =>
      getPrefectures()
        .then((response) => {
          setPrefectures(response.data.result);
        })
        .catch((error) => {
          //   props.setMessage("Error");s
          console.error(error);
        }),
    [setPrefectures]
  );

  function checkboxChangeHandler(e) {
    if (e.target.checked === true) {
      props.onAddPrefecture(e.target.value);
    } else {
      props.onRemovePrefecture(e.target.value);
    }
  }

  return (
    <form onSubmit={props.draw}>
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
