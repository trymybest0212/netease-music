import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "./recommend-store/index";

export default combineReducers({
  recommend: recommendReducer,
});
