import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {/* a*4[href=$]{$} */}
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/login">Login</a>
                <a href="/inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Header;