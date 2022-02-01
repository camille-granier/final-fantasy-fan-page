import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';

const About = () => (
  <div>
    <Header />
  <div className="about">
    <p><span className='about-background'>A react project by Camille Granier, using the wonderful <a href="https://www.moogleapi.com/"
         target="_blank"
         rel='noreferrer'
         className="link"
         >MoogleApi</a></span>
    </p>
    </div>
  </div>
);

export default About;
