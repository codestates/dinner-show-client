import React from "react";

const TrendList = ({ content }) => {
  // console.log(content)
  return (
    <div className="mains main-parent">
        <div className="mains main-div">
        {
          <section className="main main-section" key={content.id}>
            {content.id}.{content.title}
          </section>
        }
        <div>
          <img src={content.img} className="img"></img>
        </div>
      </div>
    </div>
  );
};

export default TrendList;
