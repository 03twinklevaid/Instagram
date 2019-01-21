import React, {Component} from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Login from './components/login/login.js';
import Header from './components/Header/header.js';
class Routing extends Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/profile" component={Header} />
                </div>
            </BrowserRouter>
        )
    }
}
export default Routing;