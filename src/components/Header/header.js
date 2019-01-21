import React from 'react';
import './style.css';

const Header = () => {
    return (
       <div className="border-bottom">
           <div className="header-container">
            <ul>
                <li className="font-28">
                    <i className="fa fa-instagram pr-10"></i>
                    <span className="insta-font font-28 pl-10 border-left">
                        Instagram
                    </span>
                </li>
                <li>
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                        <i className="fa fa-search"></i>
                    </div>
                </li>
                <li>
                    <div className="user-font">
                        <i className="fa fa-user-o font-28 "></i>
                    </div>
                </li>
            </ul>
           </div>
       </div> 
    )
}

export default Header;