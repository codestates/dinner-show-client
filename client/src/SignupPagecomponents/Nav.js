import React from "react";

function Nav() {
  return (
    <div className="nav">
      <form>
        <input type="button" className="logo_btn" value="logo"></input>
        <input type="button" className="search_btn" value="Search"></input>
        <input type="button" className="login_btn" value="Login"></input>
      </form>
    </div>
  );
}

export default Nav;
