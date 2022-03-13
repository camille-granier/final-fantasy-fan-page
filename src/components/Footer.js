import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>© 2022 <NavLink exact to="/" className='title-link'>FFpage</NavLink></p>
            <NavLink exact to="">Legal Notices</NavLink>
            <NavLink exact to="" className='privacy-policy'>Privacy Policy</NavLink>
            <NavLink exact to="/About">Contact</NavLink>
        </div>
    );
};

export default Footer;