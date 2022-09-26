import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="menu-items">
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;