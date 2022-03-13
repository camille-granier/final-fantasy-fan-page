import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import dotenv from "dotenv";
import { BrowserRouter } from 'react-router-dom';
import './styles/fonts/FinalFantasy.ttf';

require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
