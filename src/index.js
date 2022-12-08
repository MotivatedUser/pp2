import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
// import 'typeface-lobster';
// import 'typeface-open-sans';
import reportWebVitals from './reportWebVitals'
import { FormikConsumer } from 'formik';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
reportWebVitals();