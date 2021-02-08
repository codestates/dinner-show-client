import React  from 'react';
import "./fontello/css/fontello.css"
import { Switch, Router} from 'react-router-dom';


function Nav() {
    return (
        <div className="navs">
            <form className="nav-form" action="URL">
                <input type="button" className="nav nav-logo" value="로고 이미지"></input>
                <input type="button" className="nav nav-login" value="login"></input> 
                <input type="button" class="nav nav-search" value="&#xf002;"></input>
            </form>
        </div>

        // <Router>


        // <Switch>
        //     <Route path="/">

        //     </Route>
        // </Switch>

        // </Router>
    ) 
}

export default Nav;
