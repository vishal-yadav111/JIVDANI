import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap-custom.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.js';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
