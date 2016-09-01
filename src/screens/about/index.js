import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Component Playground</h1>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=watch&count=true&size=large&v=2" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=formidablelabs&repo=component-playground&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="158px" height="30px"></iframe>

        <p>Component Playground is a React component that renders editable source code and a live preview of
         other React components. It&#8217;s great for showing off your code, and for leveling up tutorials and walkthroughs.</p>
        <a href="https://github.com/FormidableLabs/component-playground/graphs/contributors">See Contributors to Component Playground.</a>
        {/*add top 5 contributors if we can figure out a good way with the github API*/}
        <p>Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
         using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for some
          of the world&#8217;s biggest companies, while helping their internal teams develop smart, thoughtful, and scalable systems.</p>
      </div>
    );
  }
}

export default About;
