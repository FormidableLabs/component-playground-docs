import React from "react";
import { Link } from "react-router";

// Variables and Stylesheet
import { Header, Footer } from "formidable-landers";
import "../styles/styles.css";

class App extends React.Component {
  render() {
    const Title = (
      <h1 className="Heading">
        <Link to="/">
          Component Playground
        </Link>
      </h1>
    );

    return (
      <div className="Sticky">
        <Header
          logoProject={Title}
          theme="light"
          padding="60px 2%"
          style={{
            background: "transparent"
          }}
          styleBy={{
            textIndent: "10px"
          }}
        >
          <div className="default">
            <Link to="/about" className="formidableHeader-link" activeClassName="is-active">
              About
            </Link>
            <Link to="/docs" className="formidableHeader-link" activeClassName="is-active">
              Docs
            </Link>
            <a href="https://github.com/FormidableLabs/component-playground/issues">
              Issues
            </a>
            <a href="https://github.com/FormidableLabs/component-playground">
              GitHub
            </a>
          </div>
        </Header>
        { this.props.children }
        <Footer
          padding="5rem 2% 6rem"
          style={{
            margin: "auto 0 0"
          }}
        />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
