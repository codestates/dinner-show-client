import React from "react";
import { NavLink } from "react-router-dom";
import "./Headers.css";
import MainLogo from "../img/logo.png";

const Headers = (props) => {
  const img = () => {
    let imgUrl;
    if (props.profile) {
      if (props.profile.imageUrl) {
        imgUrl = props.profile.imageUrl;
        return imgUrl;
      }
    }
    return "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/436/8142f53e51d2ec31bc0fa4bec241a919_crop.jpeg";
  };

  return (
    <div id="headers">
        <NavLink id="logo" to="/">디너쇼</NavLink> 
        <NavLink exact to="/" id="home" activeClassName="active">홈</NavLink>
        <NavLink to="/login" id="login" activeClassName="active" onClick={props.logoutHandler} >{props.isLogin ? "로그아웃" : "로그인"}</NavLink>
        {props.isLogin ? 
        (<div> <img src={img()} style={{ width: "35px", height: "35px", marginTop: "10px", borderRadius: "50%", float:"right"}}/>
         <span style={{  marginTop: "10px",color: "white", float:"right" }}>{props.profile}</span></div>) : ( "" )}
    </div>
  );
};

export default Headers;

{
  /* <NavLink to="/newcontent" className="item" activeClassName="active">
  새글작성
</NavLink>
<NavLink to="/search" className="item" activeClassName="active">
  검색
</NavLink>
<NavLink to="/toggle" className="item" activeClassName="active">
  토글
</NavLink> */
}
{
  /* <NavLink to="/main" className="item" activeClassName="active">
  메인
</NavLink> */
}
