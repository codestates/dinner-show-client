import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Search = ({ location }) => {
  return (
    <div>
      검색한 내용: {new URLSearchParams(location.search).get("keyword")}
    </div>
  );
};

export default Search;
