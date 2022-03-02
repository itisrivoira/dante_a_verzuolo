import React from 'react';
import logo from "../img/logo.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className='logoBianco'/>
        </div>
    );
}

export default Navbar;
