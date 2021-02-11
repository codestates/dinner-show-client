import React from 'react';
import Trend from "../routes/Trend";
import New from "../routes/New";
import { NavLink } from "react-router-dom";

//? MainHeader는 트렌트, 최신 버튼 묶는 목적
const MainHeader = ({data, getSearchData}) => {
    return (
        <div className="MainHeader">
          <Trend data={data} getSearchData={getSearchData} />
          <New data={data} getSearchData={getSearchData} />
        </div>
        
    );
};

export default MainHeader;