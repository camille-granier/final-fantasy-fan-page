import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div className='not-found'>
    <Header/>
    <div className='not-found-container'>
    <img src="./img/cactuar.png" alt="cactuar from Final Fantasy"/>
    <div className='not-found-text'>
      <h4>404 - Page Not Found</h4>
      <p>Sorry about that</p>
    </div>
    </div>
    <NavLink  className='back-home'
              to="/">Go back to Home page</NavLink>
    <Footer/>
  </div>
);

export default NotFound;
