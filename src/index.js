import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('react'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/password-generator.github.io">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
