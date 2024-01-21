import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from '../src/reportWebVitals.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
// reportWebVitals();
