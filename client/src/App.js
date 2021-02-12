import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Headers from "./components/Headers";
import MainHeaders from "./components/MainHeader";
import Login from "./routes/Login";
import NewContents from "./routes/NewContent";
import Search from "./routes/Search";
import Toggle from "./routes/Toggle";
import Main from "./components/Main";
import Trend from "./routes/Trend";
import TrendList from "./routes/TrendList";
import New from "./routes/New";
import NewList from "./routes/NewList";
import NoMatch from "./routes/NoMatch";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: null,
      userInfo: { imageUrl: null },
    };
  }
  // console.log(props.history)
  googleLogin = (profileByGoogle) => {
    this.setState({
      isLogin: true,
      userInfo: profileByGoogle,
    });
    console.log(this.state.userInfo);
    this.props.history.push("/");
  };

  successLogin = (accessToken) => {
    axios
      .get("http://localhost:5000/accesstokenrequest", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((json) => {
        this.setState({
          isLogin: true,
          accessToken: accessToken,
          userInfo: { imageUrl: null, ...json.data.data },
        });
      })
      .then(() => {
        console.log(this.state);
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <Login
                successLogin={this.successLogin.bind(this)}
                googleLogin={this.googleLogin.bind(this)}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Main
                isLogin={this.state.isLogin}
                profile={this.state.userInfo}
              />
            )}
          />
          <Route path="/newcontent" component={NewContents} />
          <Route path="/search" component={Search} />
          <Route path="/toggle" component={Toggle} />
          <Route component={NoMatch} />

          {/* <Route path="/MainHeaders" component={MainHeaders} /> */}
          {/* <Route path="/MainHeaders" component={MainHeaders} /> */}
          {/* <Route path="/trendList" component={TrendList} /> */}
          {/* <Route path="/newList" component={NewList} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
