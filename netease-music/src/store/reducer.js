import { combineReducers } from "redux";

import { reducer as recommendReducer } from "./recommend-store/index";

const reducers = combineReducers({
  recommendReducer,
});

export default reducers;
