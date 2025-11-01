// import { StrictMode } from 'react';
import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client'
// import './index.css'
// import './App.module.css';
import App from './components/App/App.tsx';
// Нормалізація стилів
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
