import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <NavLink exact to="/" activeClassName="nav-active" >CHARACTERS</NavLink>
    <NavLink exact to="/Games" activeClassName="nav-active">GAMES</NavLink>
    <NavLink exact to="/Creatures" activeClassName="nav-active" >CREATURES</NavLink>
    <NavLink exact to="/About" activeClassName="nav-active" >ABOUT</NavLink>
  </div>
);

export default Navigation;
