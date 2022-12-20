import Header from "../components/Header";
import Body from "../components/Body";
import React from "react";

function IndexPage() {
  return (
    <div
      style={{
        background: "#EEE",
        padding: "5%",
        fontFamily: '"Lucida Console", Monaco, monospace',
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default IndexPage;
