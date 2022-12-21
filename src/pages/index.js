import Header from "../components/Header";
import Body from "../components/Body";
import React from "react";

import * as styles from "./index.module.css";

function IndexPage() {
  return (
    <div className={styles.main}>
      <Header />
      <Body />
    </div>
  );
}

export default IndexPage;
