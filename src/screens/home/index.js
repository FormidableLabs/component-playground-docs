import React from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import { VictoryPie } from "victory";
import { random, range } from "lodash";

import Page from "../../components/page";
import TitleMeta from "../../components/title-meta";
const componentExample = require("!!raw!./examples/component.example");

class Home extends React.Component {
  render() {
    return (
      <TitleMeta title="Component Playground">
        <main className="Main">
          <div className="Hero">
            <h2 className="Hero-heading">
              Render React.js components with editable source & live preview
            </h2>
            <hr className="Hero-hr hr" />
            <div className="Hero-installer">
              <code>npm install component-playground</code>
              <p className="u-textCenter">
                <iframe title="Stars on GitHub" src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=star&count=true" frameBorder="0" scrolling="0" width="90px" height="20px"></iframe>
              </p>
            </div>
          </div>
          <div className="Grid">
            <div className="Grid-col">
              <Playground
                codeText={componentExample}
                scope={{ React, VictoryPie, ReactDOM, random, range }}
                noRender={false}
                theme="elegant"
              />
            </div>
          </div>

          <Page home>
            <h3 className="u-noMarginTop">
              Features
            </h3>
            <h4 className="u-marginTopSmall">
              Allow editing of source code to illustrate changes
            </h4>
            <p>
              We’ve used Component Playground to allow people to edit themes and see the changes in real time. Let people see how flexible your software is for themselves.
            </p>
            <h4>
              Live preview of React components
            </h4>
            <p>
              Upgrade from a gif and show people what’s behind-the-scenes on that cool animated component.
            </p>
            <h4>
              Great for tutorials and walkthroughs
            </h4>
            <p>
              Help users keep track of what’s going on at any given point in a guide or tutorial with live code.
            </p>
          </Page>
        </main>
      </TitleMeta>
    );
  }
}

export default Home;
