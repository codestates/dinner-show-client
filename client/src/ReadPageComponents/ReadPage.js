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
  }

  // getSearchData() {
  //   axios.get()
  // }


  render() {
    return (
      <div className="container">
            <Nav />
            <Header />
            <Main />
      </div> 
  
    );
  }
}

export default ReadPage;
