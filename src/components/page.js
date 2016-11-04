import React from "react";
import { ScrollContainer } from "react-router-scroll";
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
              <Sidebar
                tocArray={this.props.tocArray}
                location={this.props.location}
              />
            </div>
            <ScrollContainer scrollKey="page-content">
              <div className={`${contentClasses} Grid-col`}>
                { this.props.children }
              </div>
            </ScrollContainer>
          </section>
        </div>
      </Tag>
    );
  }
}

Page.propTypes = {
  children: React.PropTypes.node,
  home: React.PropTypes.bool,
  tocArray: React.PropTypes.array,
  location: React.PropTypes.object
};

Page.defaultProps = {
  children: null,
  home: false,
  tocArray: []
};


export default Page;
