import React from 'react';
import Navigation from '../components/Navigation.js';
import Characters from '../components/Characters.js';
import Logo from '../components/Logo.js'

const Home = () => (
  <div className="home">
    <div className="header">
      <Logo />
      <Navigation />
    </div>
    <Characters />
  </div>
);

export default Home;
