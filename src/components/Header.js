import React from 'react';
import logo from '../assets/logo.png';
import '../styles/header.css';

const Header = () => {
    return (
        <div className='header'>
            <img className='imageLogo' src={logo} alt='logo'/>
            <h1>La maison des plantes</h1>
        </div>
    );
};

export default Header;