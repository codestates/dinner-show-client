import React from "react";
import { NavLink } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">
        홈
      </NavLink>
      <NavLink to="/login" className="item" activeClassName="active">
        로그인
      </NavLink>
      <NavLink to="/newcontent" className="item" activeClassName="active">
        새글작성
      </NavLink>
      <NavLink to="/search" className="item" activeClassName="active">
        검색
      </NavLink>
      <NavLink to="/toggle" className="item" activeClassName="active">
        토글
      </NavLink>
    </div>
  );
};

export default Headers;
