import React, { useState } from "react";
import GoogleBtn from "../components/GoogleBtn";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = (e) => {
    console.log("ok");
    e.preventDefault();
    axios
      .post(
        "https://api.dinnershow.org/users/login",
        { email: inputEmail, password: inputPassword },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((json) => {
        console.log("ok2");
        console.log(json);
        setInputEmail("");
        setInputPassword("");
      });
  };
  return (
    <div id="parent-container">
      <div id="container">
        <form className="login" onSubmit={handleSubmit}>
          <div className="login_input">
            <input
              placeholder="EMAIL"
              class="loginInput"
              value={inputEmail}
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              class="loginInput"
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input type="submit" value="LOGIN" id="loginBtn"></input>
          </div>
        </form>

        <div className="oauth_singup_container">
          <div id="socialLogin">
            <span>구글 계정으로 로그인</span>
            <GoogleBtn />
          </div>

          <div id="userSignup">
            <span>아직 회원이 아니신가요?</span>
            <button id="signupBtn">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
