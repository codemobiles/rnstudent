/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStore , applyMiddleware} from 'redux';
import {Provider} from "react-redux"
import App from './App';
import {name as appName} from './app.json';
import reducers from "./src/reducers"
import thunk from "redux-thunk"
import logger from "redux-logger"

const store = createStore(reducers, applyMiddleware(thunk, logger))

const ReduxApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, () => ReduxApp);
