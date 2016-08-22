/* global window */
import React from "react";
import Radium, { StyleRoot } from "radium";

// Variables and Stylesheet
import { Header, Footer } from "formidable-landers";

class App extends React.Component {
  render() {
    const isBrowser = typeof window !== "undefined" && window.__STATIC_GENERATOR !== true;
    return (
      <StyleRoot radiumConfig={isBrowser ? { userAgent: window.navigator.userAgent } : null}>
        <Header/>
        {this.props.children}
        <Footer/>
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
