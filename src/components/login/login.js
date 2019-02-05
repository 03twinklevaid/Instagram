import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleLogin} from '../../Actions/login.js';
import {Link} from 'react-router-dom';
import './style.css';

class Login extends Component {
    state = {
        Username : '',
        Password : ''
    };
    handleOnChange = (event, key) => {
        this.setState({[key]: event.target.value})
    }
    // handleLogin = (event) => {
    //     event.preventDefault();
    //     if(this.state.Username === "Twinkle" && this.state.Password=== "twinkle"){
    //         localStorage.setItem('isLoggedIn', 'true');
    //         this.props.history.push('./profile')
    //     }
    // }
    render() {
        return(
            <div>
                <div className="login-container">
                    <div className="spacing">
                        <span className="insta">
                            Instagram
                        </span>
                        <form onSubmit={(event) => this.props.handleLogin(event,this.props.history,this.state.Username,this.state.Password)}>
                            <input className="login-input" type="text" placeholder="Username" value={this.state.Username} onChange={(event) => {this.handleOnChange(event, 'Username')}} required/>
                            <br />
                            <input className="login-input" type="password" placeholder="Password" value={this.state.Password} onChange={(event) => {this.handleOnChange(event, 'Password')}} required/>
                            <br />
                            <button className="login-btn" type="submit">Log In</button>
                        </form>
                        <p className="signup">
                            Don't have an Account? <Link to="/signup"><strong>Sign up</strong></Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return (
        {
            user: state.user
        }
    )
}
const mapDispatchToProps = {
    handleLogin
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);