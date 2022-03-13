import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <p className='copyright'>© 2022 <NavLink exact to="/" className='title-link'>FFpage</NavLink></p>
            <NavLink to="/LegalNotices">Legal Notices</NavLink>
            <NavLink to="/PrivacyPolicy" className='privacy-policy'>Privacy Policy</NavLink>
            <NavLink to="/About">Contact</NavLink>
        </div>
    );
};

export default Footer;