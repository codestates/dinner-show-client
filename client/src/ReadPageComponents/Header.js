import React from "react";

function Header(props) {
  return (
    <div className="headers">
      <form action="URL">
        {/* <input type="button" onClick={props.colorChange} className="header header-heart" value="♥"></input> */}
        <input
          type="button"
          name="bgColor"
          onClick={props.colorChange()}
          id="heartBtn"
          value="♥"
        ></input>
        <input type="text" className="header header-write"></input>
      </form>
    </div>
  );
}

export default Header;
