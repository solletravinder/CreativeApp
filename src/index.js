/**
  This CodeSandbox has been automatically generated using
  `codesandboxer`. If you're curious how that happened, you can
  check out our docs here: https://github.com/noviny/codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from "react";
import ReactDOM from "react-dom";
// import BasicExample from "./example";
// import axios from "axios";

const Alphas = [
  "AHAH fvkfnvkfv",
  "AfrAH wwece",
  "AHfvfv llss",
  "AgggbH ekkedd",
  "AHgggg rflrm",
  "AHAfvfvg w,ww"
];

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      image: "https://ui-avatars.com/api/?name=Ravinder+Sollet",
      count: 0
    };
  }

  // firstImage() {
  //   axios({
  //     method: "get",
  //     url: "https://ui-avatars.com/api/?name=Ravinder+Sollet",
  //     responseType: "image/png"
  //   }).then(
  //     response => {
  //       console.log(response.data);
  //       return response.data;
  //     },
  //     error => {
  //       return error;
  //     }
  //   );
  // }

  imageRequest(count) {
    if (!count) {
      count = this.state.count;
    }
    if (count >= 6) {
      this.setState({
        count: 0
      });
    }
    const url = "https://ui-avatars.com/api/?name=" + Alphas[this.state.count];
    this.setState({
      count: this.state.count + 1
    });
    return url;
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      image: this.imageRequest(this.state.count)
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} .</h2>
        {/* <img src="{this.state.image}.png" alt="content" /> */}
        <img src={this.state.image} alt="content" />
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));

// ReactDOM.render(<BasicExample />, document.getElementById("root"));
