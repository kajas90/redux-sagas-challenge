// such root component is required react-hot-loader to work properly
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

// router
import { ConnectedRouter } from 'react-router-redux';

// main app container 
import App from './App';

export default class Root extends React.Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};