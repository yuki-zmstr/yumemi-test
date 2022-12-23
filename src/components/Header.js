import React from "react";

import { header, title } from "../stylesheets/Header.module.css";
function Header() {
  return (
    <div className={header}>
      <h1 className={title}>株式会社ゆめみ入社試験</h1>
      <h2>都道府県別人口推移</h2>
    </div>
  );
}

export default Header;
