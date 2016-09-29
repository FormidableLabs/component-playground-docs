import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./screens/home/index";

// Components
import App from "./components/app";
import Docs from "./screens/docs/index";
import About from "./screens/about/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs} />
    <Route path="/docs/:component" component={Docs} />
    <Route path="/about" component={About}/>
  </Route>
);
