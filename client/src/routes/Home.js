import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "../components/Main";

const Home = ({ match }) => {
  return (
    <>
      <Main />
    </>
  );
};

export default Home;
