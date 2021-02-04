import React, { Component } from "react";
import axios from "axios";

class MyComponent extends Component {
  handleOnClick = () => {
    axios.get("http://13.209.89.239 :5000/deploytest", {}).then((res) => {
      console.log(res);
    });
  };
  //13.209.89.239
  //"http://13.209.89.239 :5000/deploytest"
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>출력</button>
      </div>
    );
  }
}

export default MyComponent;
