import React from "react";

const TrendList = ({ content }) => {
  return (
    <div className="mains">
      {
        <section className="main main-section" key={content.id}>
          {content.id}.{content.title}
        </section>
      }
    </div>
  );
};

export default TrendList;