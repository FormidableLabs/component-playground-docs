import React from "react";
import Sidebar from "./sidebar";

class Page extends React.Component {
  render() {
    const Tag = this.props.home ? "div" : "main";
    const mainClasses = this.props.home ? "Main" : "Main Main--internal";
    const contentClasses = this.props.home ? "Page-content" : "Page-content Page-content--internal";

    return (
      <Tag className={mainClasses}>
        <div className="Grid">
          <section className="Page">
            <div className="Page-sidebar Grid-col">
              <Sidebar />
            </div>
            <div className={`${contentClasses} Grid-col`}>
              { this.props.children }
            </div>
          </section>
        </div>
      </Tag>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node,
  home: React.PropTypes.bool
};

Page.defaultProps = {
  children: null,
  home: false
};


export default Page;
