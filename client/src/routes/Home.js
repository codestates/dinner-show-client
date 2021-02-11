import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = ({ match }) => {
  return <div>{match.params.username}홈</div>;
};

export default Home;
