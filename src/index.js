// styles reset
import 'sanitize.css/sanitize.css';

// required for redux-saga generatos
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Map } from 'immutable';

// root component required for react-hot-loader
import Root from './containers/Root';

// redux store configuration and browser history
import configureStore, { history } from './store';

// es6 promises polyfill
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

// load favicon
import './favicon.ico';

// custom global styles
import './styles/globalStyles';

// in browser console use $r.store.getState() when Provider selected in ReactDevTools

// store first parameter is default state
// for example you can provide default starting value for counter:
// const store = configureStore({ counter: 10 });
const initialState = Map();
const store = configureStore(initialState);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

// react-hot-loader API
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

// install ServiceWorker
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
