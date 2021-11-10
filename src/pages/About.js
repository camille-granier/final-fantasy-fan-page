import React from 'react';
import Navigation from '../components/Navigation.js';
import Logo from '../components/Logo.js';

const About = () => (
  <div>
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  <div className="about">
    <h1>About</h1>
    <br/>
    <p>A react project by Camille Granier, using the wonderful
      <a href="https://www.moogleapi.com/"
         target="_blank"
         rel='noreferrer'
         className="link"
         > MoogleApi</a>
    </p>
    </div>
  </div>
);

export default About;
