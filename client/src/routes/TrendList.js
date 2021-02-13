import React from "react";
const TrendList = ({ content }) => {
  // console.log(content)
  return (
    <div className="mains">
      <section className="main-section" key={content.id}>
        <img src={content.img} className="img"></img>
        <div>{content.title}</div>
        <div className="test">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          consequuntur consequatur reiciendis. Cupiditate laboriosam
          perspiciatis suscipit, alias dolorem est similique!
        </div>
        <div className="date">
          Created At {content.createdAt.substring(0, 10)}
        </div>
   
        <div className="infoContainer">
          <span className="nameInfo">by 승익</span>
          <span className="heartInfo">{content.heart_number}</span>
        </div>
      </section>
    </div>
  );
};
export default TrendList;