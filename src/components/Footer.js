import React from 'react';
import { NavLink, } from 'react-router-dom';
import ScrollToTop from '../UI/ScrollToTop';

const Footer = () => {

    return (
        <div className='footer'>
            <ScrollToTop />
            <p className='copyright'>© 2022<span> </span> 
                <NavLink 
                    to="/" 
                    onClick={() => window.scrollTo(0, 0)}
                    className='title-link'><span>Final Fantasy Notes</span>
                </NavLink>
            </p>
            <NavLink 
                to="/LegalNotices"
                onClick={() => window.scrollTo(0, 0)}>Legal Notices
            </NavLink>
            <NavLink 
                to="/PrivacyPolicy" 
                onClick={() => window.scrollTo(0, 0)} 
                className='privacy-policy-link'>Privacy Policy
            </NavLink>
            <NavLink 
                to="/About"
                onClick={() => window.scrollTo(0, 0)}>Contact
            </NavLink>
        </div>
    );
};

export default Footer;