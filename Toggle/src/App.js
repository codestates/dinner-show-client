import React, { Component } from "react";
import axios from "axios";
// import "./MyComponent.css";

class MyComponent extends Component {
  handleOnClick = () => {
    axios.get("http://localhost:5000/deploytest", {}).then((res) => {
      console.log(res.message);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>출력</button>
      </div>
    );
  }
}

export default MyComponent;
