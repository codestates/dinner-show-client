import React from "react";
import Trend from "../routes/Trend";
import New from "../routes/New";

//? MainHeader는 트렌트, 최신 버튼 묶는 목적
const MainHeader = ({data, getTrendData, getNewData,isBntOn}) => {
  return (
        <div className="MainHeader">
          <Trend data={data} getTrendData={getTrendData} isBntOn={isBntOn}/>
          <New data={data} getNewData={getNewData} isBntOn={isBntOn}/>
        </div>
    );
};

export default MainHeader;
