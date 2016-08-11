/* global window */
import React from "react";
import ga from "react-ga";
import Radium, { StyleRoot } from "radium";

// Variables and Stylesheet
import { Header } from "formidable-landers";

class App extends React.Component {
  componentDidMount() {
    ga.initialize("UA-43290258-1");
  }

  render() {
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}>
        <Header/>
        {this.props.children}
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default Radium(App);
