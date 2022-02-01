import React from 'react';
import Header from '../components/Header';

const About = () => (
  <div>
    <Header />
  <div className="about">
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
