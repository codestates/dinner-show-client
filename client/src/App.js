import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Headers />
      <div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/newcontent" component={NewContents} />
        <Route path="/search" component={Search} />
        <Route path="/toggle" component={Toggle} />
        <Route path="/login" component={Login} />
        <Route component={NoMatch} />
        
        {/* <Route path="/MainHeaders" component={MainHeaders} /> */}
        {/* <Route path="/MainHeaders" component={MainHeaders} /> */}
        {/* <Route path="/trendList" component={TrendList} /> */}
        {/* <Route path="/newList" component={NewList} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
