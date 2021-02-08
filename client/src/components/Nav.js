import React from "react";
import GoogleBtn from "./GoogleBtn";

function Nav() {
  return (
    <div className="navs">
      <form className="nav-form" action="URL">
        <input
          type="button"
          className="nav nav-logo"
          value="로고 이미지"
        ></input>
        <input type="button" className="nav nav-login" value="Login"></input>
        <input
          type="button"
          className="nav nav-search"
          value="돋보기 이미지"
        ></input>
      </form>
      <GoogleBtn />
    </div>
  );
}

export default Nav;
