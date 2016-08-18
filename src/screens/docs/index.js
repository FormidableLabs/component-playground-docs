import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import GettingStarted from "../../../node_modules/component-playground/docs/getting-started.md";

class Guide extends React.Component {
  render() {
    return (
      <Ecology
        overview={GettingStarted}
        scope={{React, ReactDOM}}
        playgroundtheme="elegant"
      />
    );
  }
}

export default Guide;
