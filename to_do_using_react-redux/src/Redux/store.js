import { legacy_createStore } from "redux";
import combineReducers from "./Reducers/index";
const store = legacy_createStore(combineReducers);
export default store;
