import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="content">
        회원가입
        <div className="userinfo">회원가입페이지입니다 정보를 입력해주세요</div>
        <div className="info_setting">
          <div className="id">
            <h3 className="id_id">아이디</h3>
            <input type="text" placeholder="ID" className="id_id"></input>
          </div>

          <div className="psdr">
            <h3 className="pass_pass">비밀번호</h3>
            <input
              type="password"
              placeholder="PASSWORD"
              className="pass_pass"
            ></input>
          </div>

          <div className="psdr">
            <h3 className="psdr_psdr">비밀번호 재확인</h3>
            <input
              type="password"
              placeholder="PASSWORD"
              className="psdr_psdr"
            ></input>
          </div>

          <div className="name">
            <h3 className="name_name">이름</h3>
            <input type="text" placeholder="이름" className="name_name"></input>
          </div>

          <div className="birth">
            <h3 className="birth_birth">생년월일</h3>
            <input
              type="text"
              placeholder="ex)19000101"
              className="birth_birth"
            ></input>
          </div>

          <div className="gender">
            <h3 className="gender_gender">성별</h3>
            <input
              type="text"
              placeholder="성별"
              className="gender_gender"
            ></input>
          </div>

          <div className="email">
            <h3 className="email_email">이메일</h3>
            <input
              type="text"
              placeholder="이메일"
              className="email_email"
            ></input>
          </div>

          <div className="phone">
            <h3 className="phone_phone">휴대폰번호</h3>
            <input
              type="text"
              placeholder="휴대폰번호"
              className="phone_phone"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
