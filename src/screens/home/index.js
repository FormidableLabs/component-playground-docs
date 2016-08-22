import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryPie } from "victory";
import { random, range } from "lodash";
import Radium from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);

const componentExample = require("!!raw!./examples/componentExample.md");

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Playground</h1>
        <p>Render React.js components with editable source and live preview</p>
        <pre><code>npm install component-playground</code></pre>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <Ecology
          overview={componentExample}
          scope={{React, VictoryPie, ReactDOM, random, range}}
          playgroundtheme="elegant"
        />
        <a href="https://github.com/FormidableLabs/component-playground">Source Code on GitHub</a>
        <br/>
        <a href="https://github.com/FormidableLabs/component-playground/issues">Report an Issue</a>
        <h2>Features</h2>
          <ul>
            <li>Allow editing of source code to illustrate changes</li>
            <li>Live preview of React components</li>
            <li>Great for tutorials and walkthroughs</li>
          </ul>
        <RadiumLink to="/docs/getting-started">Let&#8217;s Get Started</RadiumLink>
      </div>
    );
  }
}

export default Home;
