// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-custom.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router';
// import { Provider } from 'react-redux';
// import { store } from './store.js';
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// )



// src/main.jsx (Use index.js if not using Vite)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

// Import Bootstrap CSS (optional, but makes the styling look right)
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);