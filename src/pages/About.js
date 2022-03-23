import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const About = () => (
  <div className='about-page'>
    <Helmet>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Find out more about our website and how to contact us"/>
      <title>What is Final Fantasy Notes and how to get in touch</title>
      </Helmet>
    <Header />
  <div className='about-container'>
    <div className="about">
      <div><p><span className='about-background'>Final Fantasy Note is a fan page created by Camille Granier. It has been developped with React and is using the wonderful 
        <a href="https://www.moogleapi.com/"
         target="_blank"
         rel='noreferrer'
         className="link"
         > <span className='link-underline'>MoogleApi</span></a></span>.
      </p>
      <p>The code is entirely available on 
        <a href='https://github.com/camille-granier/final-fantasy-fan-page'
        target="_blank"
        rel="noreferrer"
        className='link'> <span className='link-underline'>GitHub</span>.</a></p></div>
     </div>
    </div>
    <Contact />
    <Footer />
  </div>
);

export default About;
