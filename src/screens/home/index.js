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
        <p>Render React.js components with editable source and live preview.</p>
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
          <h3>Allow editing of source code to illustrate changes.</h3>
            <p>We've used Component Playground to allow people to edit themes and see the changes in real time.
             Let people see how flexible your software is for themselves.</p>
          <h3>Live preview of React components.</h3>
            <p>Upgrade from a gif and show people what's behind-the-scenes on that cool animated component.</p>
          <h3>Great for tutorials and walkthroughs.</h3>
            <p>Help users keep track of what's going on at any given point in a guide or tutorial with live code.</p>
        <RadiumLink to="/docs/getting-started">Let&#8217;s Get Started</RadiumLink>
      </div>
    );
  }
}

export default Home;
