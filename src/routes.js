import React from "react";
import { Route, IndexRoute } from "react-router";
import Home from "./screens/home/index";

// Components
import App from "./components/app";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);
