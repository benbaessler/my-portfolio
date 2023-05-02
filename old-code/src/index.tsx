import './index.css';
import "bootstrap/dist/css/bootstrap.css";

import React from 'react';
import ReactDOM from 'react-dom';

import HttpsRedirect from 'react-https-redirect';
import { inject } from "@vercel/analytics";

import App from './App';

inject();
ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root')
);