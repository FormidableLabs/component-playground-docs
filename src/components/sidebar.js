import React from "react";
import { Link } from "react-router";
import Icon from "./icon";
import basename from "../basename";
import MarkdownIt from "markdown-it";

class Sidebar extends React.Component {
  renderTransformedToc(siblings, targetLocation) {
    const md = MarkdownIt();

    return (
      <ul>
        {
          siblings.map((sibling, id) => {
            if (Array.isArray(sibling)) {
              return <li key={id}>{this.renderTransformedToc(sibling, targetLocation)}</li>;
            }

            return sibling && (
              <li key={id}>
                <a
                  href={`${basename}${targetLocation}#${sibling.anchor}`}
                  dangerouslySetInnerHTML={{__html: md.renderInline(sibling.content)}}
                >
                </a>
              </li>
            );
          })
        }
      </ul>
    );
  }

  pushToDeeperLevel(siblings, levels, heading) {
    let parentTarget = siblings;
    let target;

    while (levels-- > 0) {
      target = parentTarget[parentTarget.length - 1];

      if (Array.isArray(target)) {
        parentTarget = target;
      } else {
        parentTarget.push([]);
        parentTarget = parentTarget[parentTarget.length - 1];
      }
    }

    if (Array.isArray(target)) {
      target.push(heading);
    } else {
      parentTarget.push(heading);
    }
  }

  transformTocArray(headings) {
    const siblings = [];
    const topHeading = headings[0];

    for (let index = 0; index < headings.length; index++) {
      const heading = headings[index];
      const levelDiff = heading.level - topHeading.level;

      if (levelDiff === 0) {
        siblings.push(heading);
      } else if (levelDiff > 0) {
        this.pushToDeeperLevel(siblings, levelDiff, heading);
      }
    }

    return siblings;
  }

  renderToc(targetLocation) {
    if (!this.props.location || (this.props.location.pathname !== targetLocation)) {
      return null;
    }

    const list = this.props.tocArray.filter((heading) => heading.level !== 1);

    return this.renderTransformedToc(
      this.transformTocArray(list),
      targetLocation
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
