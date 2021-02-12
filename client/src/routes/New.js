import React from "react";

const New = (props) => {
  console.log(props)
  return (
    <div className="MainHeader">
    {
        props.isBntOn ?
        <button onClick={props.getSearchData} className="header header-new">
        최신
        </button>
        : <></>
    }
        </div>
  )
};

export default New;
