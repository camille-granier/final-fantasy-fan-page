import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <NavLink exact to="/" activeClassName="nav-active">Final Fantasy</NavLink>
    <NavLink exact to="/Creatures" activeClassName="nav-active">Creatures</NavLink>
    <NavLink exact to="/Games" activeClassName="nav-active">Games</NavLink>
    <NavLink exact to="/About" activeClassName="nav-active">About</NavLink>
  </div>
);

export default Navigation;
