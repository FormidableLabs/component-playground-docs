import React from "react";
import { Link } from "react-router";
import Icon from "./icon";

class Sidebar extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <h3 className="u-noMarginTop">
          Documentation
        </h3>
        <ul className="NavList">
          <li className="NavList-item">
            <Link to="/docs/getting-started" className="btn btn--dark" activeClassName="is-active">
              <span>
                Let’s Get Started <Icon />
              </span>
            </Link>
          </li>
          <li className="NavList-item">
            <Link to="/docs" className="btn btn--dark" activeClassName="is-active">
              <span>
                API <Icon />
              </span>
            </Link>
          </li>
          <li className="NavList-item">
            <Link to="/about" className="btn btn--dark" activeClassName="is-active">
              <span>
                About <Icon />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
