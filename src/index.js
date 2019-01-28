import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider } from 'react-redux';
import store from './store.js';
import App from './App'; 

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

