import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import ComponentPlaygroundDocs from "../../../node_modules/component-playground/README.md";

class Home extends React.Component {
  render() {
    return (
    <Ecology
      overview={ComponentPlaygroundDocs}
      scope={{
        React, ReactDOM
      }}
      playgroundtheme="elegant"
    />
  );
  }
}

export default Home;
