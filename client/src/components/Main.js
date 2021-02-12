import React, { Component } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./Main.css";
import axios from "axios";
import MainHeader from "./MainHeader";
import Headers from "./Headers";
import TrendList from "../routes/TrendList";
import NewList from "../routes/NewList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      preItems: 0,
      items: 10,
      contentsList: [],
      trendingList: [],
      newList: [],
      isBntOn: false,
    };
    this.getSearchData = this.getSearchData.bind(this); // 이게 역할이 뭐였더라?
    this.onscroll = this.onscroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.getSearchData(); //! 해제시, 랜딩페이지에 글목록이 떠있음
    window.addEventListener("scroll", this.onscroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onscroll);
  }

  getSearchData() {
    axios
      .get("http://localhost:5000/contents", {
        headers: {
          withCredential: true,
        },
      })
      //
      .then(function (response) {
        // console.log(response.data.data[0]);
        // console.log(response.data.data);
        return response.data.data;
      })
      .then((res) => {
        //! 이 부분에서 res를 하트순/최신순으로 정렬해주는 함수를 실행 시킨 후에 setState를 한다.
        let trendList = this.trendingList(res);
        // console.log("t:", trendList);
        let newList = this.newList(res);
        // console.log("n:", newList);

        console.log(this.state.preItems, this.state.items);
        let ret = res.slice(this.state.preItems, this.state.items);
        // console.log(ret)
        //! 일반 함수에서 화살표 함수로 리팩터해줬더니 디버깅이 되었다. this가 문제였다.
        this.setState({
          data: res,
          contentsList: ret,
          trendingList: trendList,
          newList: newList,
        });
        console.log("t: ", this.state.trendingList);
        console.log("n: ", this.state.newList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onscroll = () => {
    let { items } = this.state;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // console.log(this.state.items)
      this.setState({ items: items + 10 });
      this.getSearchData();
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

  handleClick() {
    console.log("1", this.state.isBntOn);
    this.setState((prevState) => ({
      isBntOn: !prevState.isBntOn,
    }));
    console.log("2", this.state.isBntOn);
  }

  render() {
    // console.log(this.state.data);

    return (
      <div className="parent">
        <Headers isLogin={this.props.isLogin} profile={this.props.profile} />
        <MainHeader
          data={this.state.data}
          getSearchData={this.getSearchData}
          handleClick={this.handleClick}
          isBntOn={this.state.isBntOn}
        />
        <div className="container">
          {/* ====================================trendingList=====================================!*/}
          {this.state.trendingList ? (
            this.state.trendingList.map((content) => {
              return <TrendList content={content} key={content.id} />;
            })
          ) : (
            <div>Loding</div>
          )}
        </div>

        <div className="container">
          {/* ====================================newList=====================================!*/}
          {this.state.newList ? (
            this.state.newList.map((content) => {
              return <NewList content={content} key={content.id} />;
            })
          ) : (
            <div>Loding</div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
