import React from "react";

const New = (props) => {
  return (
    <div className="header-new">
    {/* <div className="new-headers"> */}
      <button onClick={props.getSearchData} className="header header-new">
        최신
      </button>
    </div>
  );
};

export default New;
