import React from 'react'
import logo from '../../assets/icons/logo.svg';
import './header.scss';
function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Eden img" className="header_image"  />
            <span className="header_text">Eden</span>
        </div>
    )
}

export default Header
