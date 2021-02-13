import React from "react";

const NewList = ({ content }) => {
  return (
    <div className="mains">
      {
        <section className="main-section" key={content.id}>
          {content.id}.{content.title}
        </section>
      }
      <div>
        <img src={content.img} className="img"></img>
      </div>
    </div>
  );
};

export default NewList;
