import React from 'react';
import Navigation from '../components/Navigation';
import Characters from '../components/Characters';
import Logo from '../components/Logo'

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
