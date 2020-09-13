import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as rootReducer from "../reducers/index";

// Note: this API requires redux@>=3.1.0
export default createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
