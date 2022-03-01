import { createStore } from "redux";
import allReducers from "./reducers/combineReducers";

const store = createStore(allReducers);

export default store;
