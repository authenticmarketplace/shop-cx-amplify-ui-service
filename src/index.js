import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { CartProvider } from 'use-shopping-cart'
import App from './app';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports.js';
import './index.css';
Amplify.configure({
  ...config,
  aws_appsync_authenticationType: 'API_KEY',
});

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
