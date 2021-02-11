import React from "react";

const Trend = (props) => {
  return (
    <div className="MainHeader">
      <button onClick={props.getSearchData} className="header header-trend">
        트렌드
      </button>
    </div>
  );
};

export default Trend;
