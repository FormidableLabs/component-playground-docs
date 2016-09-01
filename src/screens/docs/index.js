import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import GettingStarted from "../../../node_modules/component-playground/docs/getting-started.md";
import Api from "../../../node_modules/component-playground/docs/api.md";

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

class Docs extends React.Component {
  render() {
    return (
      <Ecology
        overview={Api}
        scope={{React, ReactDOM}}
        playgroundtheme="elegant"
      />
    );
  }
}

export { Guide, Docs };
