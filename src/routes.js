import React, {Component} from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Login from './components/login/login.js';
import Profile from './container/profile/profile.js'
import Privateroute from './privateRoute.js';
class Routing extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login} 
                    // render={(props) => { //props => location, match, params
                    //     return <Login {...props} />
                    // }}
                    />
                    <Privateroute path="/profile" component={Profile} />
                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;