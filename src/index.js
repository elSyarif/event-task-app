import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import './assets/scss/style.scss';

import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
