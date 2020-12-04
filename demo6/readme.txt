yarn add redux react-redux redux-logger redux-thunk


- npx react-native init demo6
- yarn add redux libraries (redux, redux-logger, react-redux, react-thunk)
- create src folder
- create actions and reducers under src fodler
- create constants to define action types
- create actions js - to match with feature or screen ex: app.action.js
- create reducers js - to match with feature or screen ex: app.reducer.js
- create index.js under reducers folder to combine all reducers
- rxconst to snippet action constants
- rxaction to snippet action setStateTo....
- rxreducer to snippet reducer 
  - define initial state
  - define state change condition in switch-case
- setup ReduxApp in root index.js
-----------------------
In order to reference reducers in components
-----------------------   
- useSelector

-----------------------
In order to call action to upodate reducer in components
-----------------------   
- useDispatch
