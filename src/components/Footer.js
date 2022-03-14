import React from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../UI/ScrollToTop';

const Footer = () => {
    return (
        <div className='footer'>
            <ScrollToTop />
            <p className='copyright'>© 2022 <NavLink to="/" className='title-link'>Final Fantasy Notes</NavLink></p>
            <NavLink to="/LegalNotices">Legal Notices</NavLink>
            <NavLink to="/PrivacyPolicy" className='privacy-policy'>Privacy Policy</NavLink>
            <NavLink to="/About">Contact</NavLink>
        </div>
    );
};

export default Footer;