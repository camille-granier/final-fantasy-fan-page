import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const About = () => (
  <div className='about-page'>
    <Header />
  <div className='about-container'>
    <div className="about">
      <p><span className='about-background'>A react project by Camille Granier, using the wonderful <a href="https://www.moogleapi.com/"
         target="_blank"
         rel='noreferrer'
         className="link"
         >MoogleApi</a></span>.
      </p>
     </div>
    </div>
    <Contact />
    <Footer />
  </div>
);

export default About;
