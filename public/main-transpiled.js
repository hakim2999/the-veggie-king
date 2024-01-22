import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
import App from '../src/App.jsx';

import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from '../src/reportWebVitals.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(App, null))));
// reportWebVitals();
