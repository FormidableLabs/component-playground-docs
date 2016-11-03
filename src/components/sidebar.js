import React from "react";
import { Link } from "react-router";
import Icon from "./icon";
import MarkdownIt from "markdown-it";
import { times } from "lodash";

class Sidebar extends React.Component {
  renderTransformedToc(siblings, targetLocation) {
    const md = MarkdownIt();

    return (
      <ul className="TOC">
        {
          siblings.map((sibling, id) => {
            if (Array.isArray(sibling)) {
              return (
                <li className="TOC-item" key={id}>
                  {this.renderTransformedToc(sibling, targetLocation)}
                </li>
              );
            }

            return sibling && (
              <li key={id} className="TOC-item">
                <a
                  href={`${targetLocation}#${sibling.anchor}`}
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

  pushToLevel(siblings, level, heading) {
    siblings = siblings.slice(0);
    let parentTarget = siblings;
    let target;

    times(level, () => {
      target = parentTarget[parentTarget.length - 1];

      if (Array.isArray(target)) {
        parentTarget = target;
      } else {
        parentTarget.push([]);
        parentTarget = parentTarget[parentTarget.length - 1];
      }
    });

    if (Array.isArray(target)) {
      target.push(heading);
    } else {
      parentTarget.push(heading);
    }

    return siblings;
  }

  transformTocArray(headings) {
    const topHeading = headings[0];

    return headings.reduce((siblings, heading) => {
      const level = heading.level - topHeading.level;
      return this.pushToLevel(siblings, level, heading);
    }, []);
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
