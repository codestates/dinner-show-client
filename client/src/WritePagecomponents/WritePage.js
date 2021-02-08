import React, { Component } from "react";
import Contents from "./Contents";
import Header from "./Header";

class WritePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Contents></Contents>
      </div>
    );
  }
}

export default WritePage;
