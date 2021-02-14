import React from "react";
import "../components/fontello/css/fontello.css";
const New = ({ isNbntOn, data, getNewData, content }) => {
  // console.log(isBntOn, handleClick)
  return (
    <div className="MainHeader">
      {
        <button onClick={getNewData} className="header header-new">
          <span>
            <i class="icon-clock"></i>
          </span>
          <span></span>
          &nbsp;최신
        </button>
      }
    </div>
  );
};

export default New;

//0xe801 new
//0xf201 trend
