import React from "react";
import ReactDOM from "react-dom";
// import "./Mypage.css";
import "./WritePagecomponents/WritePage.css";
import Mypage from "./MyPageComponents/Mypage";
import SignupPage from "./SignupPagecomponents/SignupPage";
import WritePage from "./WritePagecomponents/WritePage";

ReactDOM.render(
  <React.StrictMode>
    <WritePage />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
