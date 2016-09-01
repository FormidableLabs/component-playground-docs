```playground_norender
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transitionData: this.getTransitionData(),
      colorScale: [
        "#D85F49",
        "#F66D3B",
        "#D92E1D",
        "#D73C4C",
        "#FFAF59",
        "#E28300",
        "#F6A57F"
      ],
      sliceWidth: 60,
      style: {
        parent: {
          backgroundColor: "#f7f7f7",
          border: "1px solid #ccc",
          margin: "2%",
          maxWidth: "40%"
        }
      }
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        transitionData: this.getTransitionData()
      });
    }, 2000);
  }

  getTransitionData() {
    const data = random(6, 9);
    return range(data).map((datum) => {
      return {
        x: datum,
        y: random(2, 9),
        label: `#${datum}`
      };
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  render() {
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    };

    const parentStyle = {
      backgroundColor: "#f7f7f7",
      border: "1px solid #ccc",
      margin: "2%",
      maxWidth: "40%"
    };

    return (
      <div>
        <VictoryPie animate={{duration: 1000}}
          style={{
            parent: parentStyle,
            labels: {
              fontSize: 10,
              padding: 100,
              paintOrder: "stroke",
              stroke: "#ffffff",
              strokeWidth: 3,
              strokeLinecap: "butt",
              strokeLinejoin: "miter"
            }
          }}
          data={this.state.transitionData}
        />
        <p>Powered by Victory</p>
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, mountNode)
```