import React from "react";
import { NavLink } from "react-router-dom";
import "./Headers.css";

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
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">
        홈
      </NavLink>
      <NavLink
        to="/login"
        className="item"
        activeClassName="active"
        onClick={props.logoutHandler}
      >
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
          <span>{props.profile.name}</span>
        </div>
      ) : (
        ""
      )}
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
