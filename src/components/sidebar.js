import React from "react";
import { Link } from "react-router";
import Icon from "./icon";
import { forEach } from "lodash";
import basename from "../basename";

class Sidebar extends React.Component {
  renderToc(targetLocation) {
    if (!this.props.location || (this.props.location.pathname !== targetLocation)) {
      return null;
    }

    const list = this.props.tocArray.filter(({level}) => level > 1);

    return (
      <ul>
        {
          list.map((thing, id) => (
            <li key={id}>
              <a href={`${basename}${targetLocation}#${thing.anchor}`}>
                {thing.content}
              </a>
            </li>
          ))
        }
      </ul>
    );
  }

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
            {this.renderToc("/docs/getting-started")}
          </li>
          <li className="NavList-item">
            <Link to="/docs" className="btn btn--dark" activeClassName="is-active">
              <span>
                API <Icon />
              </span>
            </Link>
            {this.renderToc("/docs")}
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

Sidebar.propTypes = {
  location: React.PropTypes.object,
  tocArray: React.PropTypes.array
};

export default Sidebar;
