/*
 * @Author: your name
 * @Date: 2021-01-24 13:13:34
 * @LastEditTime: 2021-01-24 21:07:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vikingship/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
