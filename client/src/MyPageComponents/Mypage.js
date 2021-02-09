import React, { Component } from "react";
import Nav from "./Nav";
import Main from "./Main";

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <div className="body">
          <Nav
            toggle={this.state.visible}
            handleClick={this.handleClick.bind(this)}
          ></Nav>
          <Main></Main>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}

export default Mypage;
