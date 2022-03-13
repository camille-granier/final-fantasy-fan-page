import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <NavLink to="/" activeClassName="nav-active" >CHARACTERS</NavLink>
    <NavLink to="/Games" activeClassName="nav-active">GAMES</NavLink>
    <NavLink to="/Creatures" activeClassName="nav-active" >CREATURES</NavLink>
    <NavLink to="/About" activeClassName="nav-active" >ABOUT</NavLink>
  </div>
);

export default Navigation;
