import { legacy_createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./Reducer/index";
import thunk from "redux-thunk";
import logger from "redux-logger";
const store = legacy_createStore(
  combineReducers,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
