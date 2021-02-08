import React from "react";

function Main() {
  return (
    <>
      <div className="center">
        <img
          className="profileimg"
          src="https://static.nid.naver.com/images/web/user/default.png"
        />

        <input type="button" className="main_insertbtn" value="수정"></input>
        <input type="button" className="main_deletebtn" value="탈퇴"></input>
        <div className="userinfo">
          <div>
            아이디 <input></input>
          </div>
          <div>
            이름 <input></input>
          </div>
          <div>
            성별 <input></input>
          </div>
          <div>
            생년월일<input></input>
          </div>
          <div>
            이메일 <input></input>
          </div>
          <div>
            휴대폰 <input></input>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
