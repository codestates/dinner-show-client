import React, { Component } from 'react';
import './ReadPage.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
// import axios from 'axios'; // install 해야함


class ReadPage extends Component {
  constructor(props) {
    super(props);
    //! For Main component state
      this.state = {
        data: props
    }
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange() {
    const color = ["e7e6e1"];

    // let num = Math.floor(Math.random() * color.length);
    let bodyTag = document.getElementById("heartBtn");
    console.log(bodyTag)

    // bodyTag.style.backgroundColor = color[0];
  }

  render() {
    return (
      <div className="container">
            <Nav />
            <Header colorChange={this.colorChange} />
            <Main />
      </div> 
  
    );
  }
}

export default ReadPage;
