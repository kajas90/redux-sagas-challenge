// store configuration (middlewares) depending on environment setting
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// export history for application entry point
export const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);

function configureStoreProd(initialState) {
  const middlewares = [
    sagaMiddleware,
    reactRouterMiddleware
  ];

  const prodStore = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  return prodStore;
}

function configureStoreDev(initialState) {
  const middlewares = [
    sagaMiddleware,
    reactRouterMiddleware,
    reduxImmutableStateInvariant()
  ];

  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const devStore = createStore(rootReducer, initialState, enhancers(applyMiddleware(...middlewares)));

  // enable hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      devStore.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return devStore;
}

const store = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default store;
