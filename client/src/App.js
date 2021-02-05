import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
// import axios from 'axios'; // install 해야함


class App extends Component {
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

export default App;
