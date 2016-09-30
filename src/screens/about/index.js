import React from "react";
import Page from "../../components/page";
import TitleMeta from "../../components/title-meta";

class About extends React.Component {
  render() {
    return (
      <TitleMeta title="Component Playground | About">
        <Page>
          <h1 className="u-noMarginTop">
            About
          </h1>
          <p>
          {/*
            TODO: Custom GitHub Buttons https://github.com/FormidableLabs/formidable-landers/issues/175
          */}
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px" title="Stars on GitHub"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px" title="Watch on GitHub"></iframe>
            <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px" title="Fork on GitHub"></iframe>
          </p>
          <p>
            Component Playground is a React component that renders editable source code and a live preview of other React components. It&#8217;s great for showing off your code, and for leveling up tutorials and walkthroughs.
         </p>
         <p>
         {/*
           TODO: Add Top 5 Contributors through the GitHub API
           https://github.com/FormidableLabs/formidable-landers/issues/176
        */}
          <a href="https://github.com/FormidableLabs/component-playground/graphs/contributors">See Contributors to Component Playground.</a>
        </p>
        <p>
        {/*
          TODO: Extract Formidable blurb into formidable-landers
          https://github.com/FormidableLabs/formidable-landers/issues/177
        */}
          Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for some of the world&#8217;s biggest companies, while helping their internal teams develop smart, thoughtful, and scalable systems.
        </p>
      </Page>
    </TitleMeta>
    );
  }
}

export default About;
