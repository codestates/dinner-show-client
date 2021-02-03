import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  handleOnClick = () => {
    axios.get("http://localhost:5000/deploytest", {}).then((res) => {
      console.log(res.data.message);
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

export default App;
