import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Loading in fonts from local folder
import './fonts/AmazinglyBeautifulRegular.ttf'
import "./fonts/aurora.ttf";
import "./fonts/bakery.ttf";
import "./fonts/blossom.ttf";
import "./fonts/carefree.ttf";
import "./fonts/Cookie.ttf";
import "./fonts/Ghisella.ttf";
import "./fonts/hancock.ttf";
import "./fonts/Homework.ttf";
import "./fonts/Langrish.ttf";
import "./fonts/Lobster.ttf";
import "./fonts/Tatertot.ttf";
import "./fonts/Chakra.ttf";
import "./fonts/Violetta.ttf";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
