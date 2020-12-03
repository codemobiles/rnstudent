const {combineReducers} = require('redux');

import homeReducer from './home.reducer';
import jsonReducer from './json.reducer';

export default combineReducers({
  homeReducer,
  jsonReducer,
});
