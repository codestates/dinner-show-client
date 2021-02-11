import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "../components/Main";

const Search = ({ location }) => {
  return (
    <div>
      <Main />
      검색한 내용: {new URLSearchParams(location.search).get("keyword")}
    </div>
  );
};

export default Search;
