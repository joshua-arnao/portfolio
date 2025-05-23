import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PortfolioApp } from './PortfolioApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioApp />
    </BrowserRouter>
  </React.StrictMode>
);
