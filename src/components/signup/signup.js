import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {handleSignupSubmit} from '../../Actions/login.js';
import {connect} from 'react-redux';
import './style.css';

class Signup extends Component{
    state = {
        email : '',
        fullname: '',
        username: '',
        password: ''
    }

    onChangeHandler = (event, key) => {
        this.setState({[key]: event.target.value })
    }

    render(){
        return(
            <div className="signup-container">
                <div className="signup-form">
                    <h1 className="heading">
                        Instagram
                    </h1>
                    <p className="sub-heading">
                       <strong>
                            Sign up to see photos and <br />videos from your friends
                        </strong>
                    </p>
                    <form onSubmit={(event)=>{this.props.handleSignupSubmit(event,this.props.history,this.state.email,this.state.fullname,this.state.username,this.state.password)}}>
                        <input className="signup-input" type="text" placeholder="Email" value = {this.state.email} onChange={(event)=>{this.onChangeHandler(event, "email")}}/>
                        <br />
                        <input className="signup-input" type="text" placeholder="Full Name" value = {this.state.fullname} onChange={(event)=>{this.onChangeHandler(event, "fullname")}}/>
                        <br />
                        <input className="signup-input" type="text" placeholder="Username" value = {this.state.username} onChange={(event)=>{this.onChangeHandler(event, "username")}}/>
                        <br />  
                        <input className="signup-input" type="password" placeholder="Password" value = {this.state.password} onChange={(event)=>{this.onChangeHandler(event, "password")}}/>
                        <br />
                        <button type="submit" className="signup-btn"><strong>Sign up</strong></button>
                    </form>
                    <p className="terms">
                        By signing up, you agree to our <br /> <strong>Terms , Data Policy</strong> and <strong>Cookies <br/> Policy.</strong>
                    </p>
                </div>
                <div className="login">
                        <p>
                            Have an account? <Link to="/">Log in</Link>
                        </p>
                    </div>
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return(
        {
            signup: state.signup
        }
    )
}
const mapDispatchToProps = {
    handleSignupSubmit
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);