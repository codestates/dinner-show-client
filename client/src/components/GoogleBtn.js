import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "44357273682-eisj5f3870etsofdtja5s56pgiahrvmm.apps.googleusercontent.com";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      profile: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response) {
    console.log(response);
    if (response.profileObj) {
      this.setState((state) => ({
        isLogined: true,
        profile: response.profileObj,
      }));
    }
    this.props.googleLogin(response.profileObj);
  }

  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin id="gLogin"
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
      </div>
    );
  }
}

export default GoogleBtn;
