import React from 'react';
import {NavLink} from 'react-router-dom';
import ScrollToTop from '../UI/ScrollToTop';

const Navigation = () => (
  <div className="navigation">
    <ScrollToTop />
    <NavLink to="/" 
             className= { 
              (thisNav) => thisNav.isActive ? "nav-active" : ''} >CHARACTERS</NavLink>
    <NavLink to="/Games" 
             className= { 
              (thisNav) => thisNav.isActive ? "nav-active" : ''}>GAMES</NavLink>
    <NavLink to="/Creatures" 
             className= { 
              (thisNav) => thisNav.isActive ? "nav-active" : ''} >CREATURES</NavLink>
    <NavLink to="/About" 
             className= { 
              (thisNav) => thisNav.isActive ? "nav-active" : ''} >ABOUT</NavLink>
  </div>
);

export default Navigation;
