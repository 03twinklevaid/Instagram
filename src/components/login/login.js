import React from 'react';
import './style.css';

const Login = () => {
    return(
        <div>
                    <div className="login-container">
            <div className="spacing">
                <span className="insta">
                    Instagram
                </span>
                <form>
                    <input type="text" placeholder="Username" />
                    <br />
                    <input type="text" placeholder="Password"/>
                    <br />
                    <button type="button">Log In</button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Login;