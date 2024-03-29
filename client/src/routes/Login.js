import React, { useState } from "react";
import GoogleBtn from "../components/GoogleBtn";
import "./Login.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Headers from "../components/Headers";

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  // const [accessToken, setAccessToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://api.dinnershow.org/users/login",
        { email: inputEmail, password: inputPassword },
        { "Content-Type": "application/json" }
      )
      .then((json) => {
        if (json.data.message !== "not Authorized") {
          props.successLogin(json.data.data.accessToken);
          setInputEmail("");
          setInputPassword("");
        } else {
          console.log("no");
        }
      });
  };
  return (
    <div id="parent-container">
      <div id="container">
        <form className="login" onSubmit={handleSubmit}>
          <div className="login_input">
            <input
              placeholder="EMAIL"
              className="loginInput"
              value={inputEmail}
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="PASSWORD"
              className="loginInput"
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
            <GoogleBtn googleLogin={props.googleLogin} />
          </div>

          <div id="signupContainer">
            <div>아직 회원이 아니신가요?</div>
            <button id="signupBtn">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
