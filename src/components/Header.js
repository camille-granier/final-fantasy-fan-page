import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import { FaGithubSquare } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='line'>
                <p>FINAL FANTASY</p>
                <div className='icons-container'>
                        <a className="icon"
                           target="_blank" 
                           rel="noopener noreferrer"
                           href="https://github.com/camille-granier"><FaGithubSquare /></a>
                    </div>    
             </div>
            <div className="header">
                <Logo />
                <input id="menu-toggle" type="checkbox" name="menu-toggle" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;