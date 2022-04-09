import React from 'react';
import Header from '../components/Header';
import Characters from '../components/Characters';
import { Helmet } from 'react-helmet';


const Home = () => (
  <div className="home">
    <Helmet>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Discover Final Fantasy Characters"/>
      <title>Characters</title>
      </Helmet>
    <Header />
    <Characters />
  </div>
);

export default Home;
