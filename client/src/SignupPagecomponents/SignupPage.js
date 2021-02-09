import React, { Component } from "react";
import Main from "./Main";
import Nav from "./Nav";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Nav></Nav>
        <Main></Main>

        <form className="footer">
          <input type="button" className="save_btn" value="완료"></input>
        </form>
      </div>
    );
  }
}

export default Signup;
