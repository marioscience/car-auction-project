import React from 'react';

import logo from '../../assets/logo.png';
import phone from '../../assets/phone.png';
import phoneSvg from '../../assets/phone.svg';
import user from '../../assets/user.png';
import userSvg from '../../assets/user.svg';
import caret from '../../assets/caret.png';
import caretSvg from '../../assets/caret.svg';

import './navbar.css'


class Navbar extends React.Component {
    render() {
        return  <div className="navbar">
                    <div className="navbar-content">
                        <div className="logo-section">
                            <img src={logo} alt={"instacarro logo"} />
                        </div>
                        <div className="phone-section">
                            <img src={phone} alt={"phone icon"} srcSet={phoneSvg} />
                            <p>(11) 3569 - 3465</p>
                        </div>
                        <div className="user-section">
                            <div className="user-box">
                                <img src={user} alt="user icon" srcSet={userSvg} />
                                <p>User Test</p>
                            </div>
                            <img src={caret} alt="dropdown caret" srcSet={caretSvg}/>
                        </div>
                    </div>
                </div>
    }
}

export default Navbar;