import React from "react";
import ReactDOM from "react-dom";
// import "./Mypage.css";
import "./SignupPagecomponents/SignupPage.css";
import Mypage from "./MypageComponents/Mypage";
import SignupPage from "./SignupPagecomponents/SignupPage";

ReactDOM.render(
  <React.StrictMode>
    <SignupPage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
