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
    []
  );

  return (
    <form onSubmit={props.draw}>
      <fieldset>
        <legend>都道府県</legend>
        {prefectures.map(({ prefCode, prefName }) => (
          <div>
            <input type="checkbox" id={prefCode} value={prefName} />
            <label for={prefCode}>{prefName}</label>
          </div>
        ))}
      </fieldset>
      <fieldset>
        <legend>描画</legend>
        <button type="submit">描画する</button>
      </fieldset>
    </form>
  );
}

export default ChoosePrefectures;
