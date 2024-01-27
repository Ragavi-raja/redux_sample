/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';



import configureStore from '~reduxReducers';
import {Provider} from 'react-redux';


import App from './src/App';
import {name as appName} from './app.json';


const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  

  AppRegistry.registerComponent(appName, () => ReduxApp);
