import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='line'>FINAL FANTASY</div>
            <div className="header">
                <Logo />
                <input id="menu-toggle" type="checkbox" name="menu-toggle" />
                <label className='menu-button-container' for="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;