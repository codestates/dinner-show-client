import React from "react";

function Nav(props) {
  return (
    <div className="nav">
      <form>
        <input type="button" className="nav_logo" value="img"></input>
        <input type="button" className="nav_search" value="search"></input>
        <input
          type="button"
          className="nav_newcontent"
          value="newcontent"
        ></input>
        <input
          type="button"
          className="nav_toggle"
          value="toggle"
          onClick={props.handleClick}
        ></input>
      </form>
    </div>
  );
}
export default Nav;
