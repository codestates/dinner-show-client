import React from "react";

const Login = () => {
  return (
    <div id="parent-container">
      <div id="container">
        <form className="userLogin">
          <input placeholder="ID" class="loginInput"></input>
          <input
            type="password"
            placeholder="PASSWORD"
            class="loginInput"
          ></input>
        </form>
        <input type="submit" value="로그인" id="loginBtn"></input>
      </div>

      <div>
        <div id="socialLogin">
          <span>소셜 계정으로 로그인</span>
          <input type="submit" value="google" id="googleLogin"></input>
        </div>

        <div id="userSignup">
          <span>아직 회원이 아니신가요?</span>
          <input type="submit" value="회원가입" id="signupBtn"></input>
        </div>
      </div>
    </div>
  );
};

export default Login;
