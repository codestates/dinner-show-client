import React from "react";

function Contents() {
  return (
    <div>
      <textarea
        className="contents"
        placeholder="컨텐츠 입력 란입니다."
      ></textarea>
      <div className="footer">
        <button className="exit">나가기</button>
        <button className="temporary_save">임시저장</button>
        <button className="save">저장</button>
      </div>
    </div>
  );
}

export default Contents;
