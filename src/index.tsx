import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// We check directory relative to the file
import { App } from './components/App';

// Creates a root elements in the DOM
// React DOM library is used to interact with the DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
