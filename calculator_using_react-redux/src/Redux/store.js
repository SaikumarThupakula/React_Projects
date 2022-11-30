import { legacy_createStore } from "redux";
import combineReducers from "./Reducer/index";
const store = legacy_createStore(combineReducers);
export default store;
