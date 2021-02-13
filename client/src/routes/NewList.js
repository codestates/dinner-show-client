import React from "react";

const NewList = ({ content }) => {
  return (
    <div className="mains">
      <section className="main-section" key={content.id}>
        <img src={content.img} className="img"></img>
        <div>{content.title}</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          consequuntur consequatur reiciendis. Cupiditate laboriosam
          perspiciatis suscipit, alias dolorem est similique!
        </div>
        <div className="date">2020-20-20</div>
        <div className="infoContainer">
          <span className="nameInfo">by 승익</span>
          <span className="heartInfo">30</span>
        </div>
      </section>
    </div>
  );
};

export default NewList;
