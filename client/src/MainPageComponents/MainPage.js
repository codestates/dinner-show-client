import React, { Component } from "react";
import "./MainPage.css";
import Nav from "./Nav";
import Header from "./Header";
import Main from "./Main";
import axios from "axios";
import { Switch, Router } from "react-router-dom";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      preItems: 0,
      items: 10,
      contentsList: [],
    };
    this.getSearchData = this.getSearchData.bind(this); // 이게 역할이 뭐였더라?
    this.onscroll = this.onscroll.bind(this);
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
      .get("http://13.209.89.239:5000/contents")
      .then(function (response) {
        // console.log(response.data.data[0]);
        // console.log(response.data.data);
        return response.data.data;
      })
      .then((res) => {
        console.log(this.state.preItems, this.state.items);
        let ret = res.slice(this.state.preItems, this.state.items);
        // console.log(ret)
        //! 일반 함수에서 화살표 함수로 리팩터해줬더니 디버깅이 되었다. this가 문제였다.
        this.setState({ data: res, contentsList: ret });
      })
      .catch((error) => {
        //! error msg 가 왜 뜨는거지?
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

  render() {
    console.log(this.state.contentsList);
    return (
      // <Switch>
      //   <Route>

      //   </Route>
      // </Switch>
      <div className="container">
        <Nav />
        <Header getSearchData={this.getSearchData} />
        {/* <Main contentsList={this.state.contentsList} />*/}
        {
          this.state.contentsList ? (
            this.state.contentsList.map((content) => {
              return <Main content={content} key={content.id} />;
            })
          ) : (
            <div>Loding</div>
          )
          // <LodingIndicator />
        }
      </div>
    );
  }
}

export default MainPage;
