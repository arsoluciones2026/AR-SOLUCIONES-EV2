// Punto de entrada de React: conecta App con el elemento #root de index.html.
import React from 'react';
import { createRoot } from 'react-dom/client';
// Bootstrap aporta clases responsivas; styles.css define el diseño de la empresa.
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import App from './App.jsx';

// StrictMode ayuda a detectar problemas durante el desarrollo.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
