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

  console.log(props)
  
  return (
    <div className="header">
      {/* <div className="header-menu"> */}
        {/* <img  id="logo" src={MainLogo} /> */}
        <NavLink id="logo" to="/">디너쇼          </NavLink> 
        {/* <span id="logo">디너쇼</span>  */}
        <NavLink exact to="/" id="home" activeClassName="active">
          홈
        </NavLink>
      {/* </div> */}
      <NavLink to="/login" id="login" activeClassName="active">
        {props.isLogin ? "로그아웃" : "로그인"}
      </NavLink>
      {props.isLogin ? (
        <div>
          <img
            src={img()}
            style={{
              width: "50px",
              height: "50px",
              color: "black",
              borderRadius: "50%",
            }}
            />
          <span>승익</span>
          <input type="submit" value="로그아웃" />
        </div>
      ) : (
        ""
        )}
    </div>
  );
};

export default Headers;

{/* <NavLink to="/newcontent" className="item" activeClassName="active">
  새글작성
</NavLink>
<NavLink to="/search" className="item" activeClassName="active">
  검색
</NavLink>
<NavLink to="/toggle" className="item" activeClassName="active">
  토글
</NavLink> */}
{/* <NavLink to="/main" className="item" activeClassName="active">
  메인
</NavLink> */}