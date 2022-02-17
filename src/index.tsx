import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Slider from 'react-slick';
// const leftButton = ReactDOM.findDOMNode(<Slider />).getElementsByClassName('slick-arrow slick-prev slick-disabled');

// const LEFT_BUTTON = document.getElementsByClassName('slick-arrow slick-prev slick-disabled');
//
// console.log(LEFT_BUTTON);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
