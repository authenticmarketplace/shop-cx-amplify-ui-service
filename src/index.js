import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { CartProvider } from 'use-shopping-cart'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports.js';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <CartProvider mode="client-only" currency="USD">
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
