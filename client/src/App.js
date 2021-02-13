import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Headers from "./components/Headers";
import NoMatch from "./routes/NoMatch";
import Login from "./routes/Login";
import Main from "./components/Main";
import axios from "axios";
// import MainHeaders from "./components/MainHeader";
// import NewContents from "./routes/NewContent";
// import Search from "./routes/Search";
// import Toggle from "./routes/Toggle";
// import Trend from "./routes/Trend";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: null,
      userInfo: "",
      data: null,
      preItems: 0,
      items: 10,
      contentsList: [],
      trendingList: [],
      newList: [],
      isTbntOn: false,
      isNbntOn: false,
      userInfo: {},
    };
    this.getTrendData = this.getTrendData.bind(this); // 이게 역할이 뭐였더라?
    this.getNewData = this.getNewData.bind(this); // 이게 역할이 뭐였더라?
    this.onscrollForTbtn = this.onscrollForTbtn.bind(this);
    this.onscrollForNbtn = this.onscrollForNbtn.bind(this);
    this.trendHandleClick = this.trendHandleClick.bind(this);
    this.newHandleClick = this.newHandleClick.bind(this);
    // this.getNewData = this.getNewData.bind(this);
    this.getTrendData = this.getTrendData.bind(this);
  }

  googleLogin = (profileByGoogle) => {
    this.setState({
      isLogin: true,
      userInfo: {
        imageUrl: profileByGoogle.imageUrl,
        name: profileByGoogle.name,
      },
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
          userInfo: {
            imageUrl: null,
            name: json.data.data.full_name,
          },
        });
      })
      .then(() => {
        console.log(this.props.history);
        this.props.history.push("/");
      });
  };

  componentDidMount() {
    // this.getSearchData(); //! 해제시, 랜딩페이지에 글목록이 떠있음
    window.addEventListener("scroll", this.onscrollForTbtn);
    window.addEventListener("scroll", this.onscrollForNbtn);

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscrollForTbtn);
    window.removeEventListener("scroll", this.onscrollForNbtn);
  }

  trendHandleClick() {
    console.log("1", this.state.isTbntOn, this.state.isNbntOn);

    if (this.state.isNbntOn) {
      this.setState((prevState) => ({
        isTbntOn: !prevState.isTbntOn,
        isNbntOn: !prevState.isNbntOn,
      }));
    } else {
      this.setState((prevState) => ({
        isTbntOn: !prevState.isTbntOn,
      }));
    }

    console.log("2", this.state.isTbntOn, this.state.isNbntOn);
  }

  newHandleClick() {
    console.log("1", this.state.isTbntOn, this.state.isNbntOn);
    if (this.state.isTbntOn) {
      this.setState((prevState) => ({
        isTbntOn: !prevState.isTbntOn,
        isNbntOn: !prevState.isNbntOn,
      }));
    } else {
      this.setState((prevState) => ({
        isNbntOn: !prevState.isNbntOn,
      }));
    }

    console.log("2-1", this.state.isTbntOn, this.state.isNbntOn);
  }

  getTrendData() {
    axios
      // .get("http://13.209.89.239:5000/contents")
      .get("http://localhost:5000/contents")
      .then(function (response) {
        // console.log(response.data.data[0]);
        // console.log(response.data.data);
        
        return response.data.data;
      })
      .then((res) => {
        //! 이 부분에서 res를 하트순/최신순으로 정렬해주는 함수를 실행 시킨 후에 setState를 한다.
        // let trendList = this.trendingList(res);
        // console.log("t:", trendList);
        // let newList = this.newList(res);
        // console.log("n:", newList);

        console.log(this.state.preItems, this.state.items);
        let ret = res.slice(this.state.preItems, this.state.items);
        // console.log(ret)
        //! 일반 함수에서 화살표 함수로 리팩터해줬더니 디버깅이 되었다. this가 문제였다.
        this.setState({
          data: res,
          contentsList: ret,
          trendingList: ret, //! trendList -> ret
          // newList: newList,
        });

        this.trendHandleClick();
        console.log("ret: ", ret);
        // this.newHandleClick();
        console.log("t: ", this.state.trendingList);
        // console.log("n: ", this.state.newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getNewData() {
    axios
      // .get("http://13.209.89.239:5000/contents")
      .get("http://localhost:5000/contents")
      .then(function (response) {
        // console.log(response.data.data[0]);
        // console.log(response.data.data);
        return response.data.data;
      })
      .then((res) => {
        //! 이 부분에서 res를 하트순/최신순으로 정렬해주는 함수를 실행 시킨 후에 setState를 한다.
        // let trendList = this.trendingList(res);
        // console.log("t:", trendList);
        // let newList = this.newList(res);
        // console.log("n:", newList);

        console.log(this.state.preItems, this.state.items);
        let ret = res.slice(this.state.preItems, this.state.items);
        // console.log(ret)
        //! 일반 함수에서 화살표 함수로 리팩터해줬더니 디버깅이 되었다. this가 문제였다.
        this.setState({
          data: res,
          contentsList: ret,
          // trendingList: trendList,
          newList: ret,
        });

        // this.trendHandleClick();
        this.newHandleClick();
        // console.log("t: ", this.state.trendingList);
        console.log("n: ", this.state.newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onscrollForTbtn = () => {
    let { items } = this.state;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.setState({ items: items + 10 });

      this.getTrendData();
      // this.state.isTbntOn ? this.getTrendData() : <div>Loading...</div>;
    }
  };

  onscrollForNbtn = () => {
    let { items } = this.state;
    // console.log("215: ",items)

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log(window.innerHeight + window.scrollY >= document.body.offsetHeight)
      this.setState({ items: items + 10 });

      this.getNewData();
      // this.state.isNbntOn ? this.getNewData() : <div>Loading...</div>;
    }
  };

  trendingList(t) {
    const data = t;
    const temp = [];
    const ret = [];

    if (data === null) {
      console.log("null");
    } else {
      const len = data.length;
      // console.log(ret);
      for (let t = 0; t < len; t++) {
        // let q = 0;

        if (data[t].heart_number === 0) {
          temp.push(data[t]);
        } else {
          ret.push(data[t]);
        }
      }

      // console.log(ret);

      let array = ret;
      for (let i = 0; i < array.length; i++) {
        let swap;
        for (let j = 0; j < array.length - 1 - i; j++) {
          if (array[j].heart_number < array[j + 1].heart_number) {
            swap = array[j];
            array[j] = array[j + 1];
            array[j + 1] = swap;
          }
        }
        // console.log(`${i}회전: ${JSON.stringify(array)}`);

        if (!swap) {
          break;
        }
      }
      // console.log(array.reverse()); //! 리버스가 안 됨
      // console.log([array][0].reverse()); // ! 리버스가 되는데 랜던하게 작동되는 거 같음
      // const tList = [array][0].reverse();
      const tList = [array][0];
      // console.log(tList)

      return tList.concat(temp);
    }
  }

  newList(t) {
    const data = t;
    const temp = [];
    const ret = [];

    if (data === null) {
      console.log("null");
    } else {
      ret.push(data);
      // console.log(ret);

      let array = ret;
      for (let i = 0; i < array.length; i++) {
        let swap;
        for (let j = 0; j < array.length - 1 - i; j++) {
          if (array[j].createdAt > array[j + 1].createdAt.toString()) {
            swap = array[j];
            array[j] = array[j + 1];
            array[j + 1] = swap;
          }
        }
        if (!swap) {
          break;
        }
      }
      // const tList = [array][0].reverse();
      const tList = array[0].reverse();
      // console.log(tList)

      return tList.concat(temp);
    }
  }

  logoutHandler = async () => {
    if (this.state.isLogin) {
      this.setState({
        isLogin: false,
        userInfo: {},
        accessToken: null,
      });
      await axios.post(
        "http://localhost:5000/users/logout",
        {},
        {
          withCredentials: true,
        }
      );
    }
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Headers
          isLogin={this.state.isLogin}
          profile={this.state.userInfo}
          logoutHandler={this.logoutHandler}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main
                data={this.state.data}
                getTrendData={this.getTrendData}
                getNewData={this.getNewData}
                trendHandleClick={this.trendHandleClick}
                newHandleClick={this.newHandleClick}
                trendingList={this.state.trendingList}
                newList={this.state.newList}
                isTbntOn={this.state.isTbntOn}
                isNbntOn={this.state.isNbntOn}
              />
            )}
          />

          <Route
            path="/login"
            render={() =>
              this.state.isLogin ? (
                this.props.history.push("/")
              ) : (
                <Login
                  successLogin={this.successLogin.bind(this)}
                  googleLogin={this.googleLogin.bind(this)}
                />
              )
            }
          />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
