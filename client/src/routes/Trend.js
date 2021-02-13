import React from "react";

const Trend = ({ isTbntOn, data, getTrendData, content }) => {
  // console.log(isTbntOn, handleClick)
  return (
    <div className="MainHeader">
      <button onClick={getTrendData} className="header header-trend">
        트렌드
      </button>
    </div>
  );
};

export default Trend;
