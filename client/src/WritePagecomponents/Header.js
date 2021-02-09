import React from "react";

function Header() {
  return (
    <div>
      <div>
        <textarea className="header" placeholder="제목을 입력하세요"></textarea>
      </div>

      <div>
        <div className="tag-list">
          <input
            className="tag"
            type="text"
            placeholder="태그를 입력하고 엔터를 쳐주세요"
            size="7"
          ></input>
        </div>
      </div>

      {/* <div className="tag-list">
        <input
          className="tag"
          type="text"
          className="input-tag"
          placeholder="태그를 입력하고 엔터를 쳐주세요"
        />
      </div> */}

      <script src="./tag.js"></script>

      <div>
        <input className="location" placeholder="장소를 입력하세요"></input>
      </div>

      <div className="fun_toolbar">
        <button>기능툴바</button>
      </div>
    </div>
  );
}

export default Header;
