import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "../components/Main";

const Home = ({ match }) => {
  
  return (
    <>
      <div>{match.params.username}홈</div>
      <Main /> 
    </>
  ) 

};

export default Home;
