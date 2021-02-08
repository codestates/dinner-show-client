import React, { Component } from 'react';
import './MainPage.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
// import axios from 'axios'; // install 해야함


class MainPage extends Component {
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
            <Main />
            <Main />
            <Main />
            <Main />
            <Main />
      </div> 
  
    );
  }
}

export default MainPage;
