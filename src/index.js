import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import dotenv from "dotenv";



require('dotenv').config();
console.log(process.env.REACT_APP_USER_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
