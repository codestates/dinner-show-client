import React from "react";

const Trend = (props) => {
  console.log(props.content);
  return (
    <div className="header-trend">
    {/* <div className="trend-headers"> */}
      <button onClick={props.getSearchData} className="header header-trend">
        {/* {props.content.id}.{props.content.title} */}
        트렌드
      </button>
    </div>
  );
};

export default Trend;
