import React, { Component } from "react";
import MainHeader from "./MainHeader";
import Headers from "./Headers";
import TrendList from "../routes/TrendList";
import NewList from "../routes/NewList";
import "./Main.css";

const Main = ({data, getTrendData, getNewData, trendingList, newList, trendHandleClick, newHandleClick, isTbntOn, isNbntOn }) => {
    return (
    <div className="parent">
      <MainHeader data={data} getTrendData={getTrendData} getNewData={getNewData} isTbntOn={isTbntOn} isNbntOn={isNbntOn} /> 

{/* ====================================trendingList=====================================!*/}
      <div className="container">
        {
        isTbntOn ? (
          trendingList.map((content) => {
            return <TrendList content={content} key={content.id} />;
          })
        ) : ( <div></div> )
        }
{/* ====================================newList=====================================!*/}
      {
        isNbntOn ? (
          newList.map((content) => {
            return <NewList content={content} key={content.id} />
          })
        ) : ( <div></div> )
      }
    </div>
  </div>
  );
};

  export default Main;
