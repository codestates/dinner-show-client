import React from "react";

const New = ({isNbntOn, data, getNewData, content}) => {
  // console.log(isBntOn, handleClick)
  return (
    <div className="MainHeader">
    {
        <button onClick={getNewData} className="header header-new">
        최신
        </button>
    }
        </div>
  )
};

export default New;
