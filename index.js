import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger))

export class AppWrapper extends Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('awesomeRNBoilerplate', () => AppWrapper);
