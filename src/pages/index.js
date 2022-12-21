import Header from "../components/Header";
import Body from "../components/Body";
import React from "react";

import { main } from "./index.module.css";

function IndexPage() {
  return (
    <div className={main}>
      <Header />
      <Body />
    </div>
  );
}

export default IndexPage;
